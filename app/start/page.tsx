'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CheckCircle } from 'lucide-react'

const services = [
  'AI & Automation',
  'SaaS Development',
  'Voice AI Integration',
  'Premium Web & Design',
  'Tech Strategy',
  'Other',
]

const budgets = [
  'Under $5K',
  '$5K – $15K',
  '$15K – $50K',
  '$50K+',
]

export default function StartPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (form.name && form.email && form.message) setSubmitted(true)
  }

  return (
    <main>
      <Navbar />

      <section className="max-w-[1100px] mx-auto px-6 lg:px-14 pt-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — copy */}
          <div>
            <p className="font-syne text-[10px] font-bold uppercase tracking-[0.25em] text-electric mb-5">
              Free consultation
            </p>
            <h1 className="font-syne font-extrabold text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.08] tracking-[-0.03em] text-ink mb-6">
              Let's build something{' '}
              <em className="not-italic text-electric">great</em> together.
            </h1>
            <p className="text-[16px] font-light text-ink-2 leading-[1.8] mb-10">
              Tell us what you're working on. We'll come back within 24 hours
              with a clear plan — no fluff, no generic proposals, just an honest
              conversation about what we'd build and how.
            </p>

            <div className="flex flex-col gap-5">
              {[
                'No commitment required',
                'Direct response from our founders',
                'Scoped proposal within 48 hours',
                'Fixed pricing — no surprise invoices',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-electric flex-shrink-0" />
                  <span className="text-[14px] font-medium text-ink-2">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-surface border border-black/[0.08] rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 bg-electric-light rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={28} className="text-electric" />
                </div>
                <h2 className="font-syne font-bold text-2xl text-ink mb-3">
                  You're in the queue!
                </h2>
                <p className="text-[15px] font-light text-ink-2 leading-[1.75]">
                  We'll review your project and get back to you within 24 hours.
                  Check your inbox — including spam, just in case.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-syne text-[11px] font-bold uppercase tracking-[0.12em] text-ink-3">
                      Name *
                    </label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="font-manrope text-[14px] px-4 py-3 border border-black/[0.1] rounded-lg bg-white text-ink placeholder:text-ink-4 outline-none focus:border-electric transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-syne text-[11px] font-bold uppercase tracking-[0.12em] text-ink-3">
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="font-manrope text-[14px] px-4 py-3 border border-black/[0.1] rounded-lg bg-white text-ink placeholder:text-ink-4 outline-none focus:border-electric transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-syne text-[11px] font-bold uppercase tracking-[0.12em] text-ink-3">
                    Company / Project Name
                  </label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Inc. or stealth startup"
                    className="font-manrope text-[14px] px-4 py-3 border border-black/[0.1] rounded-lg bg-white text-ink placeholder:text-ink-4 outline-none focus:border-electric transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-syne text-[11px] font-bold uppercase tracking-[0.12em] text-ink-3">
                    Service needed
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setForm({ ...form, service: s })}
                        className={`font-syne text-[11px] font-bold uppercase tracking-[0.08em] px-3 py-1.5 rounded-md border transition-colors cursor-pointer ${
                          form.service === s
                            ? 'bg-electric border-electric text-white'
                            : 'bg-white border-black/[0.1] text-ink-3 hover:border-electric hover:text-electric'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-syne text-[11px] font-bold uppercase tracking-[0.12em] text-ink-3">
                    Budget range
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setForm({ ...form, budget: b })}
                        className={`font-syne text-[11px] font-bold uppercase tracking-[0.08em] px-3 py-1.5 rounded-md border transition-colors cursor-pointer ${
                          form.budget === b
                            ? 'bg-electric border-electric text-white'
                            : 'bg-white border-black/[0.1] text-ink-3 hover:border-electric hover:text-electric'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-syne text-[11px] font-bold uppercase tracking-[0.12em] text-ink-3">
                    Tell us about your project *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What are you building? What's the problem you're solving? Any deadlines?"
                    className="font-manrope text-[14px] px-4 py-3 border border-black/[0.1] rounded-lg bg-white text-ink placeholder:text-ink-4 outline-none focus:border-electric transition-colors resize-none leading-[1.7]"
                  />
                </div>

                <button
                  type="submit"
                  className="font-syne text-[13px] font-bold uppercase tracking-[0.06em] bg-electric text-white py-4 rounded-lg hover:bg-electric-dark transition-colors mt-1"
                >
                  Launch My Project →
                </button>

                <p className="text-[12px] text-ink-4 text-center">
                  No spam. No pitch decks. Just builders talking to builders.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
