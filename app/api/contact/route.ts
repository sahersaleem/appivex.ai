import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

const MAX_BODY_BYTES = 10_000
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
// In-memory limiter: fine for one server, weak on serverless. Use Upstash/Redis for strict limits.
const hits = new Map<string, number[]>()

function rateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent)
    return true
  }
  recent.push(now)
  hits.set(ip, recent)
  return false
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const oneLine = (s: string) => s.replace(/[\r\n]+/g, ' ').trim()
const str = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '')
const json = (body: object, status = 200) => NextResponse.json(body, { status })

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  if (rateLimited(ip)) return json({ ok: false, error: 'Too many requests. Please try again later.' }, 429)

  const raw = await req.text()
  if (raw.length > MAX_BODY_BYTES) return json({ ok: false, error: 'Request too large.' }, 413)

  let data: Record<string, unknown>
  try {
    data = JSON.parse(raw)
  } catch {
    return json({ ok: false, error: 'Invalid request.' }, 400)
  }

  // Honeypot: bots fill the hidden field. Pretend success, send nothing.
  if (typeof data.website === 'string' && data.website.trim() !== '') return json({ ok: true })

  const name = oneLine(str(data.name, 100))
  const email = oneLine(str(data.email, 200))
  const company = oneLine(str(data.company, 120))
  const service = oneLine(str(data.service, 80))
  const budget = oneLine(str(data.budget, 40))
  const message = str(data.message, 5000)

  const errors: Record<string, string> = {}
  if (name.length < 2) errors.name = 'Please enter your full name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = 'Please enter a valid email address.'
  if (message.length < 10) errors.message = 'Please add a few details about your project.'
  if (Object.keys(errors).length) return json({ ok: false, error: 'Please check the form.', errors }, 422)

  const user = process.env.GMAIL_USER
  const pass = process.env.GMAIL_APP_PASSWORD
  const to = process.env.CONTACT_TO_EMAIL || user
  if (!user || !pass || !to) {
    console.error('[contact] Missing GMAIL_USER, GMAIL_APP_PASSWORD or CONTACT_TO_EMAIL')
    return json({ ok: false, error: 'Email service is not configured.' }, 500)
  }

  const rows: [string, string][] = [
    ['Name', name], ['Email', email], ['Company', company || '-'],
    ['Service', service || '-'], ['Budget', budget || '-'],
  ]
  const text = [...rows.map(([k, v]) => `${k}: ${v}`), '', message].join('\n')
  const html =
    `<table cellpadding="6" style="font-family:sans-serif;font-size:14px">` +
    rows.map(([k, v]) => `<tr><td><b>${k}</b></td><td>${esc(v)}</td></tr>`).join('') +
    `</table><p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap">${esc(message)}</p>`

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass },
      connectionTimeout: 10_000,
      socketTimeout: 15_000,
    })
    // Resolves only when Gmail accepts the message
    await transporter.sendMail({
      from: `"APPIVEX Website" <${user}>`,
      to,
      replyTo: `"${name.replace(/"/g, '')}" <${email}>`,
      subject: `New enquiry from ${name}${company ? ` (${company})` : ''}`,
      text,
      html,
    })
    return json({ ok: true })
  } catch (err) {
    console.error('[contact] Gmail send failed', err)
    return json({ ok: false, error: 'We could not send your message.' }, 502)
  }
}