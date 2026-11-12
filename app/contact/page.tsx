'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

import Footer from '@/components/Footer'
import { ArrowRight, CalendarDays, Check, ChevronDown, Clock, Loader2, Mail, MessageCircle } from 'lucide-react'

const CALENDLY = 'https://calendly.com/sahersaleem/30min'
const COMPANY_LINKEDIN = '' // add the real company LinkedIn URL; the row is hidden while empty

const services = [
  'AI Automation Systems', 'AI Voice Agents', 'AI Agents & RAG Systems', 'Custom Software & SaaS',
  'Full-Stack Development', 'API & CRM Integrations', 'Web & Brand Design', 'Not sure — need advice',
]
const budgets = ['Under $1,000', '$1,000–$3,000', '$3,000–$5,000', '$5,000–$10,000', '$10,000+', 'Not sure yet']

const steps = [
  { t: 'Tell us about your project.', d: 'Share your idea, challenge or requirements.' },
  { t: 'We review your requirements.', d: 'We understand the scope and identify the right approach.' },
  { t: 'Let’s discuss the next step.', d: 'We get in touch to discuss a suitable solution.' },
]

const field =
  'w-full min-w-0 bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3.5 font-dm text-[14px] text-white placeholder:text-white/25 outline-none transition-colors focus:border-[rgba(0,214,143,0.5)] focus-visible:ring-2 focus-visible:ring-[#00D68F]/30 aria-[invalid=true]:border-red-400/60'
const labelCls = 'block font-syne text-[10px] font-bold uppercase tracking-[0.14em] text-white/40 mb-2'
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

type Form = { name: string; email: string; company: string; service: string; budget: string; message: string; website: string }
const empty: Form = { name: '', email: '', company: '', service: '', budget: '', message: '', website: '' }

export default function ContactPage() {
  const [form, setForm] = useState<Form>(empty)
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [serverError, setServerError] = useState('')

  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }))
  }

  const validate = () => {
    const e: typeof errors = {}
    if (form.name.trim().length < 2) e.name = 'Please enter your full name.'
    if (!emailRe.test(form.email.trim())) e.email = 'Please enter a valid email address.'
    if (form.message.trim().length < 10) e.message = 'Please add a few details about your project.'
    setErrors(e)
    if (e.name) document.getElementById('name')?.focus()
    else if (e.email) document.getElementById('email')?.focus()
    else if (e.message) document.getElementById('message')?.focus()
    return Object.keys(e).length === 0
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'loading' || !validate()) return
    setStatus('loading')
    setServerError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok && data.ok) {
        setStatus('success')
        return
      }
      if (data.errors) setErrors(data.errors)
      setServerError(
        res.status === 429
          ? 'Too many attempts. Please wait a few minutes and try again.'
          : res.status === 422
          ? 'Please check the highlighted fields.'
          : 'We could not send your enquiry. Please try again, or email sahersaleem72@gmail.com directly.'
      )
      setStatus('error')
    } catch {
      setServerError('Network error. Check your connection and try again, or email sahersaleem72@gmail.com directly.')
      setStatus('error')
    }
  }

  const err = (k: keyof Form) => (errors[k] ? (
    <p id={`${k}-error`} role="alert" className="mt-1.5 font-dm text-[12px] text-red-400">{errors[k]}</p>
  ) : null)
  const a11y = (k: keyof Form) => ({ 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `${k}-error` : undefined })

  return (
    <main className="bg-[#0A0A0A] overflow-x-clip">
      <Navbar />

      {/* Hero */}
      <section className="max-w-[1160px] mx-auto px-6 lg:px-14 pt-20 pb-14 border-b border-white/[0.06]">
        <p className="flex items-center gap-3 font-syne text-[10px] font-bold uppercase tracking-[0.25em] text-[#00D68F] mb-5">
          <span className="w-6 h-px bg-[#00D68F]" />
          Have a project in mind?
        </p>
        <h1 className="font-syne font-extrabold text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.07] tracking-[-0.03em] text-white max-w-[700px] mb-6">
          Let&apos;s build something that moves your business forward.
        </h1>
        <p className="font-dm text-[16px] font-light text-white/50 max-w-[560px] leading-[1.8] mb-4">
          Tell us what you&apos;re planning, what needs improving, or where your business is getting stuck. We&apos;ll review your requirements and help you find the right next step.
        </p>
        <p className="font-dm text-[13px] text-white/35">No pressure. Just a straightforward conversation about your project.</p>
      </section>

      {/* Form + info */}
      <section className="max-w-[1160px] mx-auto px-6 lg:px-14 py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[65fr_35fr] gap-12 lg:gap-16 items-start">
          {status === 'success' ? (
            <div role="status" className="flex flex-col justify-center py-16 lg:py-24">
              <div className="w-11 h-11 bg-[rgba(0,214,143,0.1)] border border-[rgba(0,214,143,0.25)] rounded-full flex items-center justify-center mb-6 text-[#00D68F]">
                <Check size={18} />
              </div>
              <h2 className="font-syne font-bold text-[1.6rem] text-white mb-3">Thanks for reaching out.</h2>
              <p className="font-dm text-[15px] font-light text-white/50 max-w-[420px] leading-[1.8] mb-8">
                Your enquiry has been received. Our team will review your message and get back to you within 24 hours.
              </p>
              <Link href="/" className="inline-flex items-center gap-2 font-dm text-[13px] font-medium text-[#00D68F] hover:text-white transition-colors self-start">
                Back to homepage <ArrowRight size={13} />
              </Link>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="min-w-0 space-y-5">
              {/* honeypot */}
              <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label htmlFor="website">Leave this empty</label>
                <input id="website" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={set('website')} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="min-w-0">
                  <label htmlFor="name" className={labelCls}>Full name *</label>
                  <input id="name" name="name" type="text" autoComplete="name" placeholder="Your full name" className={field} value={form.name} onChange={set('name')} {...a11y('name')} />
                  {err('name')}
                </div>
                <div className="min-w-0">
                  <label htmlFor="email" className={labelCls}>Work email *</label>
                  <input id="email" name="email" type="email" autoComplete="email" placeholder="you@company.com" className={field} value={form.email} onChange={set('email')} {...a11y('email')} />
                  {err('email')}
                </div>
              </div>

              <div>
                <label htmlFor="company" className={labelCls}>Company name</label>
                <input id="company" name="company" type="text" autoComplete="organization" placeholder="Optional" className={field} value={form.company} onChange={set('company')} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {([
                  ['service', 'Service interested in', 'Select a service', services],
                  ['budget', 'Project budget', 'Select a range', budgets],
                ] as const).map(([k, label, ph, opts]) => (
                  <div key={k} className="min-w-0">
                    <label htmlFor={k} className={labelCls}>{label}</label>
                    <div className="relative">
                      <select id={k} name={k} className={`${field} appearance-none pr-10 [&>option]:bg-[#111] ${form[k] ? 'text-white' : 'text-white/40'}`} value={form[k]} onChange={set(k)}>
                        <option value="">{ph}</option>
                        {opts.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                      <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/35" />
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <label htmlFor="message" className={labelCls}>Project details *</label>
                <textarea id="message" name="message" rows={6} maxLength={5000} placeholder="What are you building, or what is slowing your business down? The more context, the better." className={`${field} resize-y leading-[1.7]`} value={form.message} onChange={set('message')} {...a11y('message')} />
                {err('message')}
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 font-syne text-[12px] font-bold uppercase tracking-[0.07em] bg-[#00D68F] text-[#0A0A0A] px-8 py-4 rounded-xl hover:bg-white transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00D68F]"
                >
                  {status === 'loading' ? <><Loader2 size={14} className="animate-spin" /> Sending...</> : <>{status === 'error' ? 'Try again' : 'Send Project Enquiry'} <ArrowRight size={14} /></>}
                </button>
                <p className="font-dm text-[12px] text-white/35 mt-4">Your information is only used to respond to your enquiry.</p>
                <div aria-live="polite">
                  {status === 'error' && <p role="alert" className="font-dm text-[13px] text-red-400 mt-3">{serverError}</p>}
                </div>
              </div>
            </form>
          )}

          {/* Sidebar */}
          <aside className="min-w-0 flex flex-col border border-white/[0.08] rounded-2xl divide-y divide-white/[0.06] bg-[#0D0D0D]">
            <div className="p-7">
              <h2 className="font-syne text-[15px] font-bold text-white mb-3">Prefer a call?</h2>
              <p className="font-dm text-[13px] font-light text-white/50 leading-[1.75] mb-5">
                Book a free 30-minute discovery call. We&apos;ll discuss your requirements, challenges and potential solutions.
              </p>
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-syne text-[12px] font-bold text-white transition hover:border-[#00D68F] hover:text-[#00D68F]">
                <CalendarDays size={14} /> Book a discovery call
              </a>
            </div>
            <div className="p-7 space-y-5">
              <a href="mailto:sahersaleem72@gmail.com" className="group flex items-start gap-3 min-w-0">
                <Mail size={16} className="mt-0.5 shrink-0 text-[#00D68F]" />
                <span className="min-w-0"><span className="block font-syne text-[10px] font-bold uppercase tracking-[0.14em] text-white/35 mb-1">Email</span><span className="block break-all font-dm text-[13.5px] text-white/75 group-hover:text-[#00D68F] transition-colors">sahersaleem72@gmail.com</span></span>
              </a>
              <a href="https://wa.me/923343619201" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3">
                <MessageCircle size={16} className="mt-0.5 shrink-0 text-[#00D68F]" />
                <span><span className="block font-syne text-[10px] font-bold uppercase tracking-[0.14em] text-white/35 mb-1">WhatsApp</span><span className="block font-dm text-[13.5px] text-white/75 group-hover:text-[#00D68F] transition-colors">+61468268431</span></span>
              </a>
              {COMPANY_LINKEDIN && (
                <a href={COMPANY_LINKEDIN} target="_blank" rel="noopener noreferrer" className="group block font-dm text-[13.5px] text-white/75 hover:text-[#00D68F] transition-colors">
                  <span className="block font-syne text-[10px] font-bold uppercase tracking-[0.14em] text-white/35 mb-1">LinkedIn</span>APPIVEX
                </a>
              )}
            </div>
            <div className="p-7 flex gap-3">
              <Clock size={16} className="mt-0.5 shrink-0 text-[#00D68F]" />
              <p className="font-dm text-[12.5px] font-light text-white/45 leading-[1.7]">We aim to respond to every enquiry within 24 hours.</p>
            </div>
          </aside>
        </div>
      </section>

      {/* What happens next */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-[1160px] mx-auto px-6 lg:px-14 py-14 lg:py-16">
          <h2 className="font-syne font-bold text-[1.3rem] text-white mb-8">Here&apos;s what happens next.</h2>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <li key={s.t} className="border-t border-white/[0.1] pt-5">
                <span className="block font-syne text-[11px] font-bold text-[#00D68F] mb-3">0{i + 1}</span>
                <h3 className="font-syne text-[15px] font-bold text-white mb-1.5">{s.t}</h3>
                <p className="font-dm text-[13px] font-light text-white/45 leading-[1.7]">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Footer />
    </main>
  )
}