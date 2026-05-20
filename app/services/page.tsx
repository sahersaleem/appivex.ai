import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'
import Link from 'next/link'
import { BrainCircuit, LayoutDashboard, Mic, Globe, ArrowUpRight } from 'lucide-react'

const services = [
  {
    num: '01',
    icon: BrainCircuit,
    label: 'AI & Automation',
    headline: 'We automate the work that is costing you growth.',
    body: 'Custom AI agents that handle queries, route tasks, and process data without human input. Workflow automation that runs 24/7. Systems engineered to eliminate the repetitive work burning your team\'s hours — permanently.',
    href: '/services/ai-automation',
  },
  {
    num: '02',
    icon: LayoutDashboard,
    label: 'SaaS Development',
    headline: 'We turn your idea into a product users love and investors notice.',
    body: 'From zero to a live, scalable SaaS product — we handle the full build. Architecture that grows with you, UI that converts, and a codebase that will not need to be burned down in 18 months. MVP to Series A.',
    href: '/services/saas-development',
  },
  {
    num: '03',
    icon: Mic,
    label: 'Voice AI Integration',
    headline: 'We give your business a voice that never sleeps and never misses a call.',
    body: 'AI voice agents that handle inbound calls, book appointments, qualify leads, and answer queries 24/7 with zero human involvement. From IVR replacement to full conversational agents — live in weeks, not months.',
    href: '/services/voice-ai',
  },
  {
    num: '04',
    icon: Globe,
    label: 'Web & Brand Design',
    headline: 'We build your digital presence to stop visitors and convert them.',
    body: 'Your website is your first pitch. We design and build high-conversion websites and brand identities that do not just look premium — they perform. Every pixel intentional, every interaction engineered to convert.',
    href: '/services/web-design',
  },
]

const steps = [
  { num: '01', title: 'Free Strategy Call', desc: '30 minutes. We learn your goals and tell you honestly what we would build and why.' },
  { num: '02', title: 'Fixed Proposal',     desc: 'Within 48 hours — scope, timeline, and investment. No surprises, no retainer traps.' },
  { num: '03', title: 'Build & Deploy',     desc: 'Weekly demos. Real progress from week one. You stay in control without micromanaging.' },
  { num: '04', title: 'Launch & Optimize',  desc: 'We do not disappear at launch. Ongoing support and optimization keeps results improving.' },
]

const industries = [
  'Healthcare', 'Finance', 'E-Commerce', 'Legal', 'Logistics',
  'Real Estate', 'HR & Recruitment', 'Education', 'Manufacturing',
  'Insurance', 'Hospitality', 'Cybersecurity', 'Marketing',
  'Government', '+ 6 more',
]

export default function ServicesPage() {
  return (
    <main className="bg-[#0A0A0A]">
      <Navbar />

      {/* Hero */}
      <section className="max-w-[1160px] mx-auto px-6 lg:px-14 pt-20 pb-16 border-b border-white/[0.06]">
        <p className="flex items-center gap-3 font-syne text-[10px] font-bold uppercase tracking-[0.25em] text-[#00D68F] mb-5">
          <span className="w-6 h-px bg-[#00D68F]" />
          What We Build
        </p>
        <h1 className="font-syne font-extrabold text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.07] tracking-[-0.03em] text-white max-w-[700px] mb-6">
          Four pillars.{' '}
          <span className="text-[#00D68F]">Infinite</span> possibilities.
        </h1>
        <p className="font-dm text-[17px] font-light text-white/45 max-w-[520px] leading-[1.8]">
          Every service we offer is engineered around one question — how do we
          make your business faster, smarter, and more valuable without adding headcount?
        </p>
      </section>

      {/* Service Cards */}
      <section className="px-6 lg:px-14 py-16">
        <div className="max-w-[1160px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06]">
            {services.map((svc) => {
              const Icon = svc.icon
              return (
                <Link
                  key={svc.num}
                  href={svc.href}
                  className="relative bg-[#0A0A0A] p-10 hover:bg-[#0f0f0f] transition-colors group overflow-hidden block no-underline"
                >
                  {/* Watermark */}
                  <span className="absolute bottom-[-12px] right-2 font-syne font-extrabold text-[6rem] leading-none text-white/[0.025] pointer-events-none select-none">
                    {svc.num}
                  </span>

                  <div className="relative z-10">
                    {/* Top row */}
                    <div className="flex items-center justify-between mb-7">
                      <span className="font-syne text-[10px] font-bold uppercase tracking-[0.18em] text-white/20">
                        {svc.label}
                      </span>
                      <div className="w-8 h-8 border border-white/[0.08] rounded-lg flex items-center justify-center group-hover:border-[rgba(0,214,143,0.35)] group-hover:bg-[rgba(0,214,143,0.06)] transition-all duration-200">
                        <ArrowUpRight size={14} className="text-white/25 group-hover:text-[#00D68F] transition-colors" />
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="w-11 h-11 bg-[rgba(0,214,143,0.08)] border border-[rgba(0,214,143,0.14)] rounded-xl flex items-center justify-center mb-5">
                      <Icon size={20} className="text-[#00D68F]" strokeWidth={1.7} />
                    </div>

                    {/* Content */}
                    <h2 className="font-syne text-[1.05rem] font-bold text-white leading-[1.35] mb-3 max-w-[300px]">
                      {svc.headline}
                    </h2>
                    <p className="font-dm text-[13px] font-light text-white/40 leading-[1.85]">
                      {svc.body}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 lg:px-14 py-16 border-t border-white/[0.06]">
        <div className="max-w-[1160px] mx-auto">
          <p className="flex items-center gap-3 font-syne text-[10px] font-bold uppercase tracking-[0.25em] text-[#00D68F] mb-5">
            <span className="w-6 h-px bg-[#00D68F]" />
            How It Works
          </p>
          <h2 className="font-syne font-extrabold text-[clamp(1.7rem,2.5vw,2.2rem)] leading-[1.1] tracking-[-0.02em] text-white max-w-[380px] mb-10">
            From brief to{' '}
            <span className="text-[#00D68F]">live system</span> — fast.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06]">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-[#0A0A0A] p-7 hover:bg-[#0f0f0f] transition-colors"
              >
                <p className="font-syne text-[10px] font-bold tracking-[0.2em] text-white/18 mb-4">
                  {step.num}
                </p>
                <h3 className="font-syne text-[14px] font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="font-dm text-[12px] font-light text-white/35 leading-[1.7]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="px-6 lg:px-14 py-12 border-t border-white/[0.06]">
        <div className="max-w-[1160px] mx-auto">
          <p className="font-dm text-[11px] uppercase tracking-[0.12em] text-white/25 mb-5">
            Industries we serve
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {industries.map((ind) => (
              <span
                key={ind}
                className="font-dm text-[13px] text-white/30 hover:text-white/55 transition-colors cursor-default"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  )
}