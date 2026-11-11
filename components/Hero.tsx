'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ServiceShowcase from './ServiceShowcase'

const ease = [0.22, 1, 0.36, 1] as const

/**
 * ONLY list tools you have actually built integrations for.
 * These are plain text names, not logos, so there is no asset or trademark issue.
 */
const integrations = [
  'SAP', 'Odoo', 'NetSuite', 'Dynamics 365',
  'HubSpot', 'Salesforce', 'Zoho',
  'AutoCAD', 'SolidWorks', 'Figma',
]

export default function Hero() {
  const reduce = useReducedMotion()

  const enter = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: i * 0.07, duration: 0.55, ease },
  })

  return (
    // On desktop the hero (including the credibility bar) fits one screen.
    // Set --header-h on :root if your navbar is not 72px tall.
    <section className="relative flex flex-col overflow-hidden bg-[#0A0A0A] lg:min-h-[calc(100svh-var(--header-h,72px))] font-syne">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 select-none
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)]
          [background-size:80px_80px]
          [mask-image:radial-gradient(ellipse_80%_70%_at_50%_0%,black,transparent)]"
      />

      <div className="relative z-10 flex flex-1 items-center">
        <div className="mx-auto w-full max-w-[1240px] px-5 py-12 sm:px-8 lg:px-12 lg:py-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.06fr] xl:gap-20">
            {/* ── Left: message ─────────────────────────────────── */}
            <div className="min-w-0">
              <motion.h1
                {...enter(0)}
                className="mb-6 font-syne text-[clamp(2.4rem,4.5vw,3.9rem)] font-bold leading-[1.03] tracking-[-0.035em] text-[var(--text-hi)]"
              >
                We automate the work.
                <br />
                <span className="text-[var(--text-mid)]">You scale the business.</span>
              </motion.h1>

              <motion.p
                {...enter(1)}
                className="mb-8 max-w-[540px] font-dm text-[16px] font-light leading-[1.75] text-[var(--text-mid)] sm:text-[17px]"
              >
                AI chatbots, CRM automation and custom portals for manufacturers,
                distributors and fast-growing teams. We connect with the ERP, CRM
                and design tools you already use, so your people spend less time
                on manual work and more time on customers.
              </motion.p>

              <motion.div {...enter(2)} className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--mint)] px-6 py-3.5 font-dm text-[15px] font-semibold text-[#0A0A0A] transition-[filter] duration-200 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--mint)] sm:w-auto"
                >
                  Book a Free Audit
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex w-full items-center justify-center rounded-lg border border-white/15 px-6 py-3.5 font-dm text-[15px] font-medium text-[var(--text-hi)] transition-colors duration-200 hover:border-white/30 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--mint)] sm:w-auto"
                >
                  Explore Our Work
                </Link>
              </motion.div>
            </div>

            {/* ── Right: live service showcase ──────────────────── */}
            <motion.div {...enter(2)} className="mx-auto w-full min-w-0 max-w-[640px] lg:max-w-none">
              <ServiceShowcase />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Credibility bar: the hero ends on proof, not empty space ── */}
      <div className="relative z-10 border-t border-white/10 bg-[#0A0A0A]">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-3 px-5 py-5 sm:px-8 lg:flex-row lg:items-center lg:gap-10 lg:px-12">
          <p className="shrink-0 font-dm text-[13px] text-[var(--text-mid)]">
            Connects with the systems you already use
          </p>
          <ul className="flex flex-wrap gap-x-7 gap-y-2">
            {integrations.map((name) => (
              <li
                key={name}
                className="font-syne text-[15px] font-semibold text-[var(--text-mid)] transition-colors duration-200 hover:text-[var(--text-hi)]"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}