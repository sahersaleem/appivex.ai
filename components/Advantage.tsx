'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Zap, Monitor } from 'lucide-react'

const cards = [
  {
    icon: Users,
    num: '01',
    title: 'Direct access to the people who build',
    desc: 'No account managers, no handoff chains. You work directly with the AI engineers and developers building your system. Every decision is made by someone with full technical context and skin in the game.',
  },
  {
    icon: Zap,
    num: '02',
    title: 'Production-ready AI in weeks, not quarters',
    desc: 'We deploy working AI voice agents in 1 to 3 weeks and full automation systems in under a month. You see real, measurable results before most agencies have finished their proposal document.',
  },
  {
    icon: Monitor,
    num: '03',
    title: 'Full-stack AI — not just integrations',
    desc: 'We do not wrap existing tools and call it automation. We build custom AI pipelines, voice agents, and intelligent systems from the architecture up — using the same stack that powers global enterprise operations.',
  },
]

export default function Advantage() {
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
          The APPIVEX Advantage
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="font-syne font-extrabold text-[clamp(1.9rem,3.5vw,2.8rem)] leading-[1.1] tracking-[-0.025em] text-white max-w-[540px] mb-5"
        >
          Why serious businesses choose us over every other option.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="font-dm text-[15px] font-light text-white/45 max-w-[500px] leading-[1.8] mb-14"
        >
          We are not a bloated agency with layers of account managers. We are a
          focused team of AI engineers and developers who move fast, think in
          outcomes, and stay accountable to your results — not your invoice.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.07] border border-white/[0.07]">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i + 0.2 }}
                className="bg-[#0A0A0A] p-9 hover:bg-[#111111] transition-colors"
              >
                <div className="w-10 h-10 bg-[rgba(0,214,143,0.08)] border border-[rgba(0,214,143,0.15)] rounded-lg flex items-center justify-center mb-6">
                  <Icon size={18} className="text-[#00D68F]" strokeWidth={1.8} />
                </div>

                <p className="font-syne text-[10px] font-bold tracking-[0.2em] text-white/15 mb-3">
                  {card.num}
                </p>

                <h3 className="font-syne text-[16px] font-bold text-white leading-[1.3] mb-3">
                  {card.title}
                </h3>

                <p className="font-dm text-[13px] font-light text-white/45 leading-[1.8]">
                  {card.desc}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}