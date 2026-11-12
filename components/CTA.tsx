'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'

export default function CTA() {
  const [email, setEmail]         = useState('')
  const [submitted, setSubmitted] = useState(false)
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section
      className="relative bg-[#0A0A0A] py-24 px-6 lg:px-14 border-t border-white/[0.06] overflow-hidden text-center"
      ref={ref}
    >
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[260px] bg-[radial-gradient(ellipse,rgba(0,214,143,0.06)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-[560px] mx-auto"
      >
        {/* Heading */}
        <h2 className="font-syne font-extrabold text-[clamp(2rem,4vw,3rem)] leading-[1.08] tracking-[-0.03em] text-white mb-5">
          Ready to automate your{' '}
          <span className="text-[#00D68F]">biggest bottleneck?</span>
        </h2>

        {/* Subtext */}
        <p className="font-dm text-[15px] font-light text-white/45 leading-[1.8] mb-10">
          Tell us what is slowing your business down. We will tell you exactly
          how we would fix it — no obligations, no pitch, just a straight
          conversation between builders.
        </p>

        {!submitted ? (
          <>
            {/* Email form */}
            <form
              onSubmit={handleSubmit}
              className="flex w-full max-w-[440px] mx-auto mb-4"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your work email"
                className="
                  flex-1 min-w-0 font-dm text-[14px] px-4 py-3.5
                  bg-white/[0.04] border border-white/10 border-r-0
                  rounded-l-[10px] text-white placeholder:text-white/25
                  outline-none focus:border-[rgba(0,214,143,0.35)]
                  transition-colors
                "
              />
              <button
                type="submit"
                className="
                  font-syne text-[11px] font-bold uppercase tracking-[0.07em]
                  bg-[#00D68F] text-[#0A0A0A]
                  px-5 rounded-r-[10px]
                  hover:bg-white transition-colors whitespace-nowrap
                  flex-shrink-0
                "
              >
                Get Started
              </button>
            </form>

            <p className="font-dm text-[11.5px] text-white/22 mb-7">
              We respond within 24 hours. No spam.
            </p>

            {/* Divider */}
            <div className="flex items-center gap-3 max-w-[440px] mx-auto mb-7">
              <span className="flex-1 h-px bg-white/[0.06]" />
              <span className="font-dm text-[11px] text-white/22 uppercase tracking-[0.1em]">or</span>
              <span className="flex-1 h-px bg-white/[0.06]" />
            </div>

            {/* Book a call */}
            <Link
              href="https://calendly.com/sahersaleem/30min"
              className="
                inline-flex items-center gap-2
                font-dm text-[13px] font-medium
                text-white/40 hover:text-[#00D68F]
                border-b border-white/10 hover:border-[#00D68F]
                pb-px transition-all duration-200
              "
            >
              Book a 30-min strategy call
              <ArrowRight size={13} />
            </Link>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-[rgba(0,214,143,0.05)] border border-[rgba(0,214,143,0.18)] rounded-2xl px-8 py-8"
          >
            <div className="w-10 h-10 bg-[rgba(0,214,143,0.1)] rounded-full flex items-center justify-center mx-auto mb-4">
              <Check size={18} className="text-[#00D68F]" />
            </div>
            <p className="font-syne font-bold text-white text-lg mb-2">
              We will be in touch within 24 hours.
            </p>
            <p className="font-dm text-[14px] text-white/40 font-light">
              Check your inbox — including spam, just in case.
            </p>
          </motion.div>
        )}

      </motion.div>
    </section>
  )
}