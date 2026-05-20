'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const services = [
  'AI Automation Systems',
  'Voice AI Integration',
  'Full-Stack / SaaS Development',
  'Web & Brand Design',
  'Not sure — need advice',
]

const inputClass = `
  w-full bg-white/[0.04] border border-white/[0.08] rounded-xl
  px-4 py-3.5 font-dm text-[14px] text-white
  placeholder:text-white/22 outline-none
  focus:border-[rgba(0,214,143,0.35)] transition-colors
`

const selectClass = `
  w-full bg-white/[0.04] border border-white/[0.08] rounded-xl
  px-4 py-3.5 font-dm text-[14px] text-white/45
  outline-none focus:border-[rgba(0,214,143,0.35)]
  transition-colors appearance-none
`

const labelClass = `
  block font-syne text-[10px] font-bold uppercase
  tracking-[0.14em] text-white/30 mb-2
`

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', company: '', service: '', message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (form.name && form.email && form.message) setSubmitted(true)
  }

  return (
    <main className="bg-[#0A0A0A]">
      <Navbar />

      {/* Hero */}
      <section className="max-w-[1160px] mx-auto px-6 lg:px-14 pt-20 pb-16 border-b border-white/[0.06]">
        <p className="flex items-center gap-3 font-syne text-[10px] font-bold uppercase tracking-[0.25em] text-[#00D68F] mb-5">
          <span className="w-6 h-px bg-[#00D68F]" />
          Get In Touch
        </p>
        <h1 className="font-syne font-extrabold text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.07] tracking-[-0.03em] text-white max-w-[600px] mb-6">
          Start the conversation.{' '}
          <span className="text-[#00D68F]">We will take it from there.</span>
        </h1>
        <p className="font-dm text-[16px] font-light text-white/45 max-w-[480px] leading-[1.8]">
          Tell us what you are building or what is slowing your business down.
          We respond within 24 hours.
        </p>
      </section>

      {/* Layout */}
      <section className="max-w-[1160px] mx-auto px-6 lg:px-14 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 items-start">

          {/* Form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Name</label>
                  <input
                    type="text" required placeholder="Your name"
                    className={inputClass}
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input
                    type="email" required placeholder="you@company.com"
                    className={inputClass}
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Company</label>
                  <input
                    type="text" placeholder="Your company (optional)"
                    className={inputClass}
                    value={form.company}
                    onChange={e => setForm({ ...form, company: e.target.value })}
                  />
                </div>
                <div>
                  <label className={labelClass}>Service</label>
                  <select
                    className={selectClass}
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                  >
                    <option value="">What can we help with?</option>
                    {services.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className={labelClass}>Message</label>
                <textarea
                  required rows={6}
                  placeholder="Describe what you are building or what is slowing your business down. The more context the better."
                  className={`${inputClass} resize-none leading-[1.7]`}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2.5 font-syne text-[12px] font-bold uppercase tracking-[0.07em] bg-[#00D68F] text-[#0A0A0A] px-8 py-4 rounded-xl hover:bg-white transition-all duration-200"
              >
                Send Message
                <ArrowRight size={14} />
              </button>

            </form>
          ) : (
            <div className="flex flex-col justify-center py-20">
              <div className="w-10 h-10 bg-[rgba(0,214,143,0.1)] border border-[rgba(0,214,143,0.2)] rounded-full flex items-center justify-center mb-6">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D68F" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="font-syne font-bold text-[1.4rem] text-white mb-3">
                Message received.
              </h2>
              <p className="font-dm text-[15px] font-light text-white/45 max-w-[360px] leading-[1.8]">
                We will be back with you within 24 hours.
                Check your inbox — including spam, just in case.
              </p>
            </div>
          )}

          {/* Sidebar */}
          <div className="flex flex-col gap-px bg-white/[0.06] border border-white/[0.06]">

            {/* Book a call */}
            <div className="bg-[#0A0A0A] p-7">
              <p className="font-syne text-[10px] font-bold uppercase tracking-[0.14em] text-white/25 mb-4">
                Prefer a call?
              </p>
              <p className="font-dm text-[13px] font-light text-white/40 leading-[1.75] mb-5">
                Book a free 30-minute strategy session. No sales script — just
                an honest conversation about your biggest bottleneck.
              </p>
              <Link
                href="https://calendly.com/appivex"
                target="_blank"
                className="inline-flex items-center gap-2 font-dm text-[13px] font-medium text-[#00D68F] border-b border-[rgba(0,214,143,0.3)] pb-px hover:border-[#00D68F] transition-all"
              >
                Book a free strategy call
                <ArrowRight size={12} />
              </Link>
            </div>

            {/* Divider */}
            <div className="bg-[#0A0A0A] p-7 border-t border-white/[0.06]">
              <p className="font-syne text-[10px] font-bold uppercase tracking-[0.14em] text-white/25 mb-5">
                Direct contact
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { label: 'Email',    value: 'hello@appivex.com'  },
                  { label: 'WhatsApp', value: '+92 300 0000000'    },
                  { label: 'LinkedIn', value: 'APPIVEX'            },
                ].map(item => (
                  <div key={item.label}>
                    <p className="font-syne text-[9px] font-bold uppercase tracking-[0.14em] text-white/20 mb-1">
                      {item.label}
                    </p>
                    <p className="font-dm text-[13px] font-medium text-white/55">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Response time */}
            <div className="bg-[#0A0A0A] p-7 border-t border-white/[0.06]">
              <p className="font-dm text-[12px] font-light text-white/28 leading-[1.7]">
                We respond to every message within 24 hours across US, UK, UAE, and Australia timezones.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}