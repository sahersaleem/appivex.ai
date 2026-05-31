import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, company, service, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email 1 — Notify your team
    await resend.emails.send({
      from: 'APPIVEX Contact <hello@appivex.app>',
      to: 'hello@appivex.app',
      subject: `New enquiry from ${name}${service ? ` — ${service}` : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0D1B2A; padding: 24px; text-align: center;">
            <h2 style="color: #00D68F; margin: 0; font-size: 20px;">New Contact Form Submission</h2>
          </div>
          <div style="padding: 24px; background: #ffffff; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; font-weight: bold; color: #374151; width: 120px;">Name</td>
                <td style="padding: 12px 0; color: #111827;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; font-weight: bold; color: #374151;">Email</td>
                <td style="padding: 12px 0; color: #111827;">
                  <a href="mailto:${email}" style="color: #00D68F;">${email}</a>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; font-weight: bold; color: #374151;">Company</td>
                <td style="padding: 12px 0; color: #111827;">${company || 'Not provided'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; font-weight: bold; color: #374151;">Service</td>
                <td style="padding: 12px 0; color: #111827;">${service || 'Not selected'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #374151; vertical-align: top;">Message</td>
                <td style="padding: 12px 0; color: #111827; line-height: 1.6;">${message.replace(/\n/g, '<br/>')}</td>
              </tr>
            </table>
          </div>
          <div style="background: #f9fafb; padding: 16px 24px; text-align: center;">
            <a href="mailto:${email}" 
               style="background: #00D68F; color: #0A0A0A; padding: 12px 24px; 
                      border-radius: 8px; text-decoration: none; font-weight: bold;
                      font-size: 14px; display: inline-block;">
              Reply to ${name}
            </a>
          </div>
        </div>
      `,
    })

    // Email 2 — Confirmation to the client
    await resend.emails.send({
      from: 'Saher @ APPIVEX <hello@appivex.app>',
      to: email,
      subject: 'We received your message — APPIVEX',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0D1B2A; padding: 32px 24px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0 0 8px; font-size: 24px;">APPIVEX</h1>
            <p style="color: #00D68F; margin: 0; font-size: 13px; 
                      text-transform: uppercase; letter-spacing: 0.1em;">
              We Build. We Automate. We Scale.
            </p>
          </div>
          <div style="padding: 32px 24px; background: #ffffff; border: 1px solid #e5e7eb;">
            <p style="color: #111827; font-size: 16px; margin: 0 0 16px;">
              Hi ${name},
            </p>
            <p style="color: #374151; font-size: 15px; line-height: 1.7; margin: 0 0 16px;">
              Thanks for reaching out. We have received your message and will 
              get back to you within <strong>24 hours</strong>.
            </p>
            <p style="color: #374151; font-size: 15px; line-height: 1.7; margin: 0 0 24px;">
              If you would like to speak sooner, you can book a free 
              30-minute strategy call directly:
            </p>
            <div style="text-align: center; margin: 0 0 32px;">
              <a href="https://calendly.com/hello-appivex/30min"
                 style="background: #00D68F; color: #0A0A0A; padding: 14px 32px;
                        border-radius: 10px; text-decoration: none; font-weight: bold;
                        font-size: 14px; display: inline-block;">
                Book a Free Strategy Call
              </a>
            </div>
            <div style="border-top: 1px solid #f3f4f6; padding-top: 24px;">
              <p style="color: #6b7280; font-size: 13px; margin: 0 0 4px;">
                Your message summary:
              </p>
              <p style="color: #374151; font-size: 13px; line-height: 1.6;
                        background: #f9fafb; padding: 16px; border-radius: 8px;
                        border-left: 3px solid #00D68F; margin: 8px 0 0;">
                ${message.replace(/\n/g, '<br/>')}
              </p>
            </div>
          </div>
          <div style="padding: 20px 24px; text-align: center;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0 0 4px;">
              Saher Saleem — Co-Founder, APPIVEX
            </p>
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">
              hello@appivex.app  •  appivex.app
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}