'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, ArrowRight } from 'lucide-react'

const featured = {
  type: 'Voice AI',
  country: '🇺🇸 United States',
  title: "AI Inbound Voice Agent — Davey's Plumbing",
  desc: "Built a 24/7 inbound AI voice agent that handles every customer call, troubleshoots issues through a knowledge base, books appointments via the Joober API, and performs warm live transfers — zero human involvement required.",
  stack: ['VAPI', 'GPT-4', 'Python FastAPI', 'Joober API', 'Live Transfer'],
  metrics: [
    { num: '0',   suffix: '',   label: 'Missed calls after hours' },
    { num: '24',  suffix: '/7', label: 'Automated handling'       },
    { num: '3',   suffix: 'wk', label: 'Deployment timeline'      },
    { num: '100', suffix: '%',  label: 'Calls captured & logged'  },
  ],
  result: 'Every call answered. Every lead captured.',
  href: '/work/daveys-plumbing',
}

const projects = [
  {
    type: 'AI Automation',
    country: '🇬🇧 United Kingdom',
    title: 'Workflow Automation for a UK Logistics Company',
    desc: 'Operations team was spending 5 hours every Monday manually updating route data across 3 systems. We built an AI pipeline that pulls, processes, and updates all systems simultaneously — zero manual input.',
    result: '18 hours saved every week',
    href: '/work/logistics-automation',
  },
  {
    type: 'SaaS Development',
    country: '🇺🇸 United States',
    title: 'Full SaaS Build — B2B Scheduling Platform, MVP to 10K Users',
    desc: 'End-to-end product from zero — multi-tenant architecture, Stripe billing, custom calendar engine, and full CI/CD pipeline. Shipped production-ready in under 9 weeks from kickoff.',
    result: 'Live in 9 weeks · 10K users',
    href: '/work/scheduling-saas',
  },
]

export default function PortfolioPreview() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-[#0A0A0A] py-24 px-6 lg:px-14" ref={ref}>
      <div className="max-w-[1160px] mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-11">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 font-syne text-[10px] font-bold uppercase tracking-[0.25em] text-[#00D68F] mb-4"
            >
              <span className="w-6 h-px bg-[#00D68F]" />
              Our Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="font-syne font-extrabold text-[clamp(1.9rem,3vw,2.7rem)] leading-[1.1] tracking-[-0.025em] text-white"
            >
              Work that{' '}
              <span className="text-[#00D68F]">speaks</span>
              <br />for itself.
            </motion.h2>
          </div>
          <Link
            href="/work"
            className="hidden md:inline-flex items-center gap-2 font-dm text-[13px] font-medium text-white/30 border-b border-white/10 pb-px hover:text-[#00D68F] hover:border-[#00D68F] transition-all whitespace-nowrap"
          >
            View All Projects
            <ArrowRight size={12} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-3">

          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <Link
              href={featured.href}
              className="block bg-[#0D0D0D] border border-white/[0.07] rounded-2xl p-10 group hover:border-[rgba(0,214,143,0.2)] transition-all duration-300 no-underline"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* Left */}
                <div>
                  {/* Meta — plain text, no pill */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <span className="font-dm text-[12px] font-medium text-white/35">
                        {featured.type}
                      </span>
                      <span className="text-white/15 text-xs">·</span>
                      <span className="font-dm text-[12px] text-white/25">
                        {featured.country}
                      </span>
                    </div>
                    <div className="w-8 h-8 border border-white/[0.08] rounded-lg flex items-center justify-center group-hover:border-[rgba(0,214,143,0.35)] group-hover:bg-[rgba(0,214,143,0.06)] transition-all">
                      <ArrowUpRight size={14} className="text-white/25 group-hover:text-[#00D68F] transition-colors" />
                    </div>
                  </div>

                  <h3 className="font-syne font-extrabold text-[1.4rem] text-white leading-[1.25] mb-4">
                    {featured.title}
                  </h3>
                  <p className="font-dm text-[13.5px] font-light text-white/42 leading-[1.85] mb-6">
                    {featured.desc}
                  </p>

                  {/* Stack — kept on featured only, looks like technical metadata */}
                  <div className="flex flex-wrap gap-2">
                    {featured.stack.map(s => (
                      <span
                        key={s}
                        className="font-dm text-[11px] text-white/25 bg-white/[0.03] border border-white/[0.06] px-2.5 py-1 rounded-md"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right — metrics */}
                <div className="grid grid-cols-2 gap-3">
                  {featured.metrics.map((m) => (
                    <div
                      key={m.label}
                      className={`rounded-xl p-4 border ${
                        m.suffix === ''
                          ? 'bg-[rgba(0,214,143,0.05)] border-[rgba(0,214,143,0.2)]'
                          : 'bg-black/30 border-white/[0.06]'
                      }`}
                    >
                      <div className="font-syne font-extrabold text-[1.7rem] text-white leading-none mb-1.5">
                        {m.num}
                        <span className="text-[#00D68F]">{m.suffix}</span>
                      </div>
                      <div className="font-dm text-[11px] font-light text-white/30 leading-[1.4]">
                        {m.label}
                      </div>
                    </div>
                  ))}

                  <div className="col-span-2 flex items-center gap-2.5 bg-[rgba(0,214,143,0.06)] border border-[rgba(0,214,143,0.15)] rounded-xl px-4 py-3">
                    <span className="text-[#00D68F] text-base">↑</span>
                    <span className="font-dm text-[12px] font-medium text-[rgba(0,214,143,0.8)]">
                      {featured.result}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Two smaller cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.22 + i * 0.1 }}
              >
                <Link
                  href={p.href}
                  className="block bg-[#0D0D0D] border border-white/[0.07] rounded-xl p-7 group hover:border-[rgba(0,214,143,0.18)] transition-all duration-300 h-full no-underline"
                >
                  {/* Meta — plain text, no pill */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <span className="font-dm text-[12px] font-medium text-white/32">
                        {p.type}
                      </span>
                      <span className="text-white/15 text-xs">·</span>
                      <span className="font-dm text-[12px] text-white/22">
                        {p.country}
                      </span>
                    </div>
                    <div className="w-7 h-7 border border-white/[0.07] rounded-lg flex items-center justify-center group-hover:border-[rgba(0,214,143,0.3)] group-hover:bg-[rgba(0,214,143,0.05)] transition-all">
                      <ArrowUpRight size={13} className="text-white/22 group-hover:text-[#00D68F] transition-colors" />
                    </div>
                  </div>

                  <h3 className="font-syne font-bold text-[15px] text-white leading-[1.35] mb-3">
                    {p.title}
                  </h3>
                  <p className="font-dm text-[12.5px] font-light text-white/38 leading-[1.8] mb-5">
                    {p.desc}
                  </p>

                  {/* Result — plain text, no pill */}
                  <p className="font-dm text-[12px] font-medium text-[#00D68F]">
                    ↑ {p.result}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-5 mt-12"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2.5 font-syne text-[12px] font-bold uppercase tracking-[0.07em] bg-[#00D68F] text-[#0A0A0A] px-7 py-3.5 rounded-xl hover:bg-white transition-all duration-200"
          >
            View All Projects
            <ArrowRight size={13} />
          </Link>
          <Link
            href="/contact"
            className="font-dm text-[13px] font-medium text-white/35 border-b border-white/10 pb-px hover:text-[#00D68F] hover:border-[#00D68F] transition-all"
          >
            or book a free strategy call
          </Link>
        </motion.div>

      </div>
    </section>
  )
}