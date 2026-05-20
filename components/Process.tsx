'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    num: '01',
    title: 'Free Strategy Call',
    desc: 'A 30-minute session with our team. No sales scripts. We dig into your goals, your constraints, and what success actually means for your business — then tell you honestly what AI can and cannot do for you.',
  },
  {
    num: '02',
    title: 'Scoped Proposal',
    desc: 'Within 48 hours you receive a clear, fixed-scope proposal — deliverables, timeline, and investment. No vague retainers, no bloated estimates, no surprises when the invoice arrives.',
  },
  {
    num: '03',
    title: 'Build & Deploy',
    desc: 'We build in structured sprints with weekly demos. You see a working system from week one — not decks, not wireframes. We iterate fast, respond faster, and never lose momentum.',
  },
  {
    num: '04',
    title: 'Launch & Optimize',
    desc: 'We do not disappear at launch. Post-delivery support, AI performance monitoring, and an ongoing optimization retainer keep your systems improving long after go-live.',
  },
]

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-[#0A0A0A] py-24 px-6 lg:px-14" ref={ref}>
      <div className="max-w-[1160px] mx-auto">

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 font-syne text-[10px] font-bold uppercase tracking-[0.25em] text-[#00D68F] mb-5"
        >
          <span className="w-6 h-px bg-[#00D68F]" />
          How It Works
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="font-syne font-extrabold text-[clamp(1.9rem,3.5vw,2.8rem)] leading-[1.1] tracking-[-0.025em] text-white max-w-[500px] mb-14"
        >
          From first call to{' '}
          <span className="text-[#00D68F]">live product</span> — fast.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06]">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i + 0.18 }}
              className="relative bg-[#0A0A0A] p-8 hover:bg-[#0f0f0f] transition-colors overflow-hidden"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <span className="hidden lg:block absolute top-[44px] right-0 w-px h-6 bg-gradient-to-b from-[rgba(0,214,143,0.35)] to-transparent z-10" />
              )}

              {/* Watermark number */}
              <span className="absolute bottom-[-12px] right-2 font-syne font-extrabold text-[5rem] leading-none text-white/[0.025] pointer-events-none select-none">
                {step.num}
              </span>

              <div className="relative z-10">
                {/* Number only — no circle, no pill */}
                <p className="font-syne text-[10px] font-bold tracking-[0.2em] text-white/20 mb-8">
                  {step.num}
                </p>

                <h3 className="font-syne text-[15px] font-bold text-white leading-[1.3] mb-3">
                  {step.title}
                </h3>

                <p className="font-dm text-[12.5px] font-light text-white/40 leading-[1.75]">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-[#0D0D0D] border border-white/[0.06] rounded-2xl px-9 py-8"
        >
          <div>
            <h3 className="font-syne font-bold text-[1.1rem] text-white mb-1.5">
              Ready to start? The first call is free.
            </h3>
            <p className="font-dm text-[13px] font-light text-white/40">
              No pitch. No commitment. Just an honest 30-minute conversation about your biggest bottleneck.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-syne text-[11px] font-bold uppercase tracking-[0.07em] bg-[#00D68F] text-[#0A0A0A] px-6 py-3 rounded-lg hover:bg-white transition-all duration-200 whitespace-nowrap flex-shrink-0"
          >
            Book a Free Strategy Call
            <ArrowRight size={13} />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}