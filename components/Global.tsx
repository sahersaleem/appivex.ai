'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const points = [
  {
    num: '01',
    title: 'Async-first communication',
    desc: 'Structured updates, clear documentation, and timezone-respectful workflows. You are never waiting on a reply or chasing a status update.',
  },
  {
    num: '02',
    title: 'Delivery across 15+ countries',
    desc: 'We understand regional expectations, compliance nuances, and global UX patterns. What works in London also works in Dubai and Sydney.',
  },
  {
    num: '03',
    title: 'Transparent milestone-based pricing',
    desc: 'No retainer traps. No surprise invoices. You pay for delivered results — scoped clearly before any work begins.',
  },
]

const locations = [
  { label: 'USA',       style: { top: '18%', left: '10%'   } },
  { label: 'UK',        style: { top: '10%', right: '14%'  } },
  { label: 'UAE',       style: { bottom: '22%', right: '8%' } },
  { label: 'Australia', style: { bottom: '10%', left: '16%' } },
  { label: 'Canada',    style: { top: '52%', left: '2%'    } },
]

const stats = [
  { num: '150', suffix: '+', label: 'Projects'    },
  { num: '98',  suffix: '%', label: 'Satisfaction' },
  { num: '20',  suffix: '+', label: 'Industries'  },
]

export default function Global() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-[#0A0A0A] py-24 px-6 lg:px-14" ref={ref}>
      <div className="max-w-[1160px] mx-auto">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 font-syne text-[10px] font-bold uppercase tracking-[0.25em] text-[#00D68F] mb-5"
        >
          <span className="w-6 h-px bg-[#00D68F]" />
          Global-First by Design
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="font-syne font-extrabold text-[clamp(1.9rem,3.5vw,2.8rem)] leading-[1.1] tracking-[-0.025em] text-white max-w-[500px] mb-12"
        >
          Built in a startup.{' '}
          <span className="text-[#00D68F]">Trusted</span> internationally.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left — text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="font-dm text-[15px] font-light text-white/45 leading-[1.85] mb-10"
            >
              APPIVEX operates without borders. Our clients are founders in the
              US, operators in the UK, enterprises in the UAE, and fast-growing
              businesses in Australia — all receiving the same focused,
              senior-level technical attention. We communicate clearly, deliver
              consistently, and ship results across every timezone.
            </motion.p>

            <div className="flex flex-col">
              {points.map((p, i) => (
                <motion.div
                  key={p.num}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * i + 0.22 }}
                  className="flex gap-4 items-start py-5 border-b border-white/[0.06] first:border-t first:border-white/[0.06]"
                >
                  <span className="font-syne text-[10px] font-bold text-[#00D68F] mt-0.5 flex-shrink-0 w-5">
                    {p.num}
                  </span>
                  <div>
                    <div className="font-syne text-[14px] font-bold text-white mb-1.5">
                      {p.title}
                    </div>
                    <p className="font-dm text-[13px] font-light text-white/40 leading-[1.7]">
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — globe card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#0D0D0D] border border-white/[0.07] rounded-2xl p-10 flex flex-col items-center gap-7"
          >
            {/* Globe visual */}
            <div className="relative w-[220px] h-[220px] flex items-center justify-center">
              {/* Rings */}
              <div className="absolute w-[220px] h-[220px] rounded-full border border-white/[0.07]" />
              <div className="absolute w-[165px] h-[165px] rounded-full border border-[rgba(0,214,143,0.15)]" />
              <div className="absolute w-[110px] h-[110px] rounded-full border border-[rgba(0,214,143,0.25)]" />

              {/* Core */}
              <div className="w-14 h-14 bg-[rgba(0,214,143,0.08)] border border-[rgba(0,214,143,0.3)] rounded-full flex flex-col items-center justify-center z-10">
                <span className="font-syne font-extrabold text-[1rem] text-[#00D68F] leading-none">15+</span>
                <span className="font-dm text-[8px] text-[rgba(0,214,143,0.7)] uppercase tracking-[0.1em] mt-0.5">Countries</span>
              </div>

              {/* Location dots */}
              {locations.map((loc) => (
                <div
                  key={loc.label}
                  className="absolute flex flex-col items-center gap-1 z-20"
                  style={loc.style as React.CSSProperties}
                >
                  <div className="w-2 h-2 bg-[#00D68F] rounded-full shadow-[0_0_0_3px_rgba(0,214,143,0.15)]" />
                  <span className="font-dm text-[9px] font-medium text-white/45 whitespace-nowrap">
                    {loc.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 w-full">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/[0.03] border border-white/[0.06] rounded-xl py-3 text-center"
                >
                  <div className="font-syne font-extrabold text-[1.3rem] text-white leading-none">
                    {s.num}
                    <span className="text-[#00D68F]">{s.suffix}</span>
                  </div>
                  <div className="font-dm text-[10px] text-white/30 mt-1.5 uppercase tracking-[0.05em]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}