'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { BrainCircuit, Monitor, Mic, Globe, ArrowUpRight } from 'lucide-react'

const services = [
  {
    num: 'Pillar 01',
    bgNum: '01',
    icon: BrainCircuit,
    title: 'We replace your most expensive manual processes with AI that works around the clock.',
    desc: 'Custom AI agents that handle queries, route tasks, and process data without human input. Workflow automation that runs while your team sleeps. Systems that eliminate the repetitive work burning your team\'s hours — permanently.',
    href: '/services/ai-automation',
  },
  {
    num: 'Pillar 02',
    bgNum: '02',
    icon: Monitor,
    title: 'We turn your idea into a product that users love and investors take seriously.',
    desc: 'From zero to a live, scalable SaaS product — we handle the full build. Architecture built to grow, UI built to convert, and a codebase that will not need to be burned down in 18 months. MVP to Series A, we have been here before.',
    href: '/services/saas-development',
  },
  {
    num: 'Pillar 03',
    bgNum: '03',
    icon: Mic,
    title: 'We give your business a voice that never sleeps, never misses a call, never loses a lead.',
    desc: 'AI voice agents that handle inbound calls, book appointments, qualify leads, and answer queries 24/7 with zero human involvement. From IVR replacement to full conversational agents — deployed in 1 to 3 weeks, not months.',
    href: '/services/voice-ai',
  },
  {
    num: 'Pillar 04',
    bgNum: '04',
    icon: Globe,
    title: 'We build your digital presence to stop visitors in their tracks and convert them into clients.',
    desc: 'Your website is your first pitch. We design and build high-conversion websites and brand identities that do not just look premium — they perform. Every pixel is intentional. Every interaction is engineered to turn browsers into buyers.',
    href: '/services/web-design',
  },
]

export default function Services() {
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
          What We Build
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="font-syne font-extrabold text-[clamp(1.9rem,3.5vw,2.8rem)] leading-[1.1] tracking-[-0.025em] text-white max-w-[440px]"
          >
            Four pillars.{' '}
            <span className="text-[#00D68F]">Infinite</span> possibilities.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="font-dm text-[14px] font-light text-white/40 leading-[1.8] max-w-[380px]"
          >
            Every service we offer is built around one question — how do we make
            your business faster, smarter, and more valuable without adding headcount?
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06]">
          {services.map((svc, i) => {
            const Icon = svc.icon
            return (
              <motion.a
                key={svc.num}
                href={svc.href}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i + 0.2 }}
                className="relative bg-[#0A0A0A] p-10 overflow-hidden group hover:bg-[#0f0f0f] transition-colors block no-underline"
              >
                {/* Watermark number */}
                <span className="absolute right-4 bottom-2 font-syne font-extrabold text-[8rem] leading-none text-white/[0.025] pointer-events-none select-none z-0">
                  {svc.bgNum}
                </span>

                <div className="relative z-10">

                  {/* Top row */}
                  <div className="flex items-center justify-between mb-7">
                    <span className="font-syne text-[10px] font-bold uppercase tracking-[0.2em] text-white/18">
                      {svc.num}
                    </span>
                    <div className="w-8 h-8 border border-white/10 rounded-lg flex items-center justify-center group-hover:border-[rgba(0,214,143,0.4)] group-hover:bg-[rgba(0,214,143,0.06)] transition-all duration-200">
                      <ArrowUpRight
                        size={14}
                        className="text-white/30 group-hover:text-[#00D68F] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-11 h-11 bg-[rgba(0,214,143,0.08)] border border-[rgba(0,214,143,0.15)] rounded-xl flex items-center justify-center mb-5">
                    <Icon size={20} className="text-[#00D68F]" strokeWidth={1.7} />
                  </div>

                  {/* Title */}
                  <h3 className="font-syne text-[1rem] font-bold text-white leading-[1.35] mb-3.5 max-w-[320px]">
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p className="font-dm text-[13px] font-light text-white/42 leading-[1.85]">
                    {svc.desc}
                  </p>

                </div>
              </motion.a>
            )
          })}
        </div>

      </div>
    </section>
  )
}