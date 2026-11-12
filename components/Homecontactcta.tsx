'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function HomeContactCTA() {
  const reduce = useReducedMotion()
  const fade = (delay = 0) => ({
    initial: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay },
  })

  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#0A0A0A]">
      {/* restrained detail: thin vertical rules */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 lg:block opacity-60"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 100%',
          maskImage: 'linear-gradient(to left, #000, transparent)',
          WebkitMaskImage: 'linear-gradient(to left, #000, transparent)',
        }}
      />
      <div className="relative mx-auto max-w-[1160px] px-6 py-16 lg:px-14 lg:py-20">
        <motion.p {...fade()} className="mb-5 flex items-center gap-3 font-syne text-[10px] font-bold uppercase tracking-[0.25em] text-[#00D68F]">
          <span className="h-px w-6 bg-[#00D68F]" />
          Have a project in mind?
        </motion.p>
        <motion.h2 {...fade(0.08)} className="mb-5 max-w-[680px] font-syne text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-white">
          Your next big idea deserves the right engineering team.
        </motion.h2>
        <motion.p {...fade(0.16)} className="mb-8 max-w-[500px] font-dm text-[15px] font-light leading-[1.8] text-white/50">
          Whether you need intelligent automation, AI-powered systems or custom software, let&apos;s talk about what you&apos;re building.
        </motion.p>
        <motion.div {...fade(0.24)} className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
          <Link
            href="/contact"
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#00D68F] px-7 py-4 font-syne text-[12px] font-bold uppercase tracking-[0.07em] text-[#0A0A0A] transition-colors duration-200 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00D68F] sm:w-auto"
          >
            Let&apos;s Talk About Your Project
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <a
            href="https://calendly.com/sahersaleem/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group font-dm text-[13px] text-white/55 transition-colors hover:text-[#00D68F]"
          >
            Prefer a direct conversation? Book a discovery call{' '}
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}