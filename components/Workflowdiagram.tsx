'use client'

import { motion, useReducedMotion } from 'framer-motion'

export function WorkflowDiagram({ steps }: { steps: { label: string; note?: string }[] }) {
  const reduce = useReducedMotion()
  return (
    <ol className="flex flex-col md:flex-row md:items-stretch">
      {steps.map((s, i) => {
        const last = i === steps.length - 1
        const node = (
          <div className="h-full rounded-xl border border-white/10 bg-[#0D0D0D] p-5">
            <span className="mb-3 flex h-7 w-7 items-center justify-center rounded-full border border-[#00D68F]/50 font-syne text-[12px] font-bold text-[#00D68F]">
              {i + 1}
            </span>
            <p className="font-syne text-[14px] font-bold leading-[1.35] text-white">{s.label}</p>
            {s.note && <p className="mt-1.5 font-dm text-[13px] leading-[1.55] text-white/55">{s.note}</p>}
          </div>
        )
        const line = (
          <>
            <span className="mx-auto h-6 w-px bg-white/20 md:hidden" aria-hidden="true" />
            <span className="hidden h-px w-6 self-center bg-white/20 md:block" aria-hidden="true" />
          </>
        )
        return reduce ? (
          <li key={s.label} className="flex flex-col md:flex-1 md:flex-row">
            <div className="md:flex-1">{node}</div>
            {!last && line}
          </li>
        ) : (
          <motion.li
            key={s.label}
            className="flex flex-col md:flex-1 md:flex-row"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: i * 0.12 }}
          >
            <div className="md:flex-1">{node}</div>
            {!last && line}
          </motion.li>
        )
      })}
    </ol>
  )
}