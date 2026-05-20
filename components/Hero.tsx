'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, Zap, Globe, Clock } from 'lucide-react'

const stats = [
  { number: '150+', label: 'Projects Delivered' },
  { number: '20+', label: 'Industries Served' },
  { number: '15+', label: 'Countries' },
  { number: '98%', label: 'Client Satisfaction' },
]

const trustedBy = [
  'Healthcare', 'Finance', 'E-Commerce',
  'Logistics', 'Legal', 'Real Estate',
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.11, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] min-h-[92vh] flex items-center">

      {/* ── Background Atmosphere ──────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Large mint glow top-left */}
        <div className="
          absolute -top-48 -left-48 w-[680px] h-[680px] rounded-full
          bg-[radial-gradient(circle,rgba(0,214,143,0.13)_0%,transparent_70%)]
          animate-drift
        " />
        {/* Smaller glow bottom-right */}
        <div className="
          absolute bottom-0 right-0 w-[440px] h-[440px] rounded-full
          bg-[radial-gradient(circle,rgba(0,214,143,0.07)_0%,transparent_70%)]
          animate-drift2
        " />
        {/* Subtle grid */}
        <div className="
          absolute inset-0 opacity-[0.035]
          [background-image:linear-gradient(var(--mint)_1px,transparent_1px),linear-gradient(90deg,var(--mint)_1px,transparent_1px)]
          [background-size:72px_72px]
        " />
      </div>

      {/* ── Floating Logo Icon (decorative) ───────────────────────── */}
      <div className="
        hidden lg:block absolute right-[8%] top-[30%] -translate-y-1/2
        w-[340px] h-[340px] opacity-[0.06] animate-drift
        pointer-events-none select-none
      ">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <circle cx="50" cy="50" r="48" fill="none" stroke="#00D68F" strokeWidth="1.5" />
          <path d="M22 30L50 52L22 74V30Z" fill="#00D68F" />
          <path d="M44 30L72 52L44 74V30Z" fill="#00D68F" opacity="0.6" />
          <path d="M50 52L57 44L54 52L60 53.5L53 62L56 53.5L50 52Z" fill="#0A0A0A" />
        </svg>
      </div>

      {/* ── Content ────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-[1160px] mx-auto px-6 lg:px-12 pt-20 pb-20 w-full">
        {/* Headline */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="
            font-syne font-extrabold
            text-[clamp(2.8rem,6.2vw,5.4rem)]
            leading-[1.03] tracking-[-0.035em]
            text-[var(--text-hi)] max-w-[820px] mb-7
          "
        >
          We Automate the Work.
          <br />
          <span className="shimmer-text">You Scale the Business.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="
            text-[17px] font-dm font-light
            text-[var(--text-mid)] max-w-[560px]
            leading-[1.8] mb-10
          "
        >
          We design and deploy intelligent systems that eliminate manual work,
          reduce operational costs, and let your team focus on what actually
          grows the business — across 20+ industries globally.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-wrap items-center gap-5 mb-16"
        >
          {/* Primary */}
          <Link
            href="/contact"
            className="
              inline-flex items-center gap-2.5
              font-syne text-[13px] font-bold uppercase tracking-[0.06em]
              bg-[var(--mint)] text-[#0A0A0A]
              px-8 py-4 rounded-xl
              hover:bg-white hover:shadow-[0_0_40px_var(--mint-glow)]
              transition-all duration-300
              shadow-[0_0_24px_var(--mint-glow)]
            "
          >
            Book a Free Strategy Call
            <ArrowRight size={15} />
          </Link>

          {/* Secondary */}
          <Link
            href="/work"
            className="
              inline-flex items-center gap-2
              font-dm text-[13px] font-semibold
              text-[var(--text-mid)] hover:text-[var(--mint)]
              border-b border-[rgba(255,255,255,0.15)]
              hover:border-[var(--mint)]
              pb-px transition-all duration-200
            "
          >
            See Our Work
            <ExternalLink size={13} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
