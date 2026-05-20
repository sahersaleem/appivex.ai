import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const featured = {
  type: 'Voice AI',
  country: '🇺🇸 United States',
  title: "Inbound AI Voice Agent for a US Home Services Company — Davey's Plumbing",
  desc: "The client was losing revenue from missed calls after hours, inconsistent customer service, and expensive manual call handling. We built a full inbound AI voice agent that handles every call 24/7, qualifies issues through a knowledge base, books appointments directly via the Joober API, performs warm live transfers, and captures structured data on every interaction — automatically pushed to their job management system.",
  metrics: [
    { num: '0',    label: 'Missed calls after hours' },
    { num: '24/7', label: 'Automated call handling'  },
    { num: '3wk',  label: 'Deployment timeline'      },
  ],
  stack: ['VAPI', 'Retell AI', 'GPT-4', 'Python FastAPI', 'Joober API', 'Knowledge Base', 'Live Transfer Logic'],
  href: '/work/daveys-plumbing',
}

const projects = [
  {
    type: 'Voice AI',
    country: '🇨🇦 Canada',
    title: 'AI Intake Voice Agent for a Legal Firm — 24/7 After-Hours Client Capture',
    desc: 'Law firms lose high-value clients when calls go unanswered. We deployed an AI voice agent that handles all inbound calls after hours — collecting full intake, booking consultations, and routing urgent matters to the on-call attorney with a warm transfer and case summary read before handoff.',
    result: 'Zero missed after-hours leads',
    href: '/work/legal-voice-agent',
  },
  {
    type: 'AI Automation',
    country: '🇬🇧 United Kingdom',
    title: 'End-to-End Workflow Automation for a UK Logistics Company',
    desc: "The client's operations team spent every Monday morning manually updating route data across three separate systems — 5 hours of work, weekly. We built an AI automation pipeline that pulls live data, processes it, and updates all systems simultaneously with zero manual input.",
    result: '18 hours saved every week',
    href: '/work/logistics-automation',
  },
  {
    type: 'AI Automation',
    country: '🇦🇺 Australia',
    title: 'AI Customer Support System for an Australian E-Commerce Brand',
    desc: 'Built a custom GPT trained on 3 years of support history, integrated with Shopify and their helpdesk platform. The AI resolves the majority of tickets autonomously around the clock — escalating only edge cases to the human team.',
    result: '73% of tickets resolved autonomously',
    href: '/work/ecommerce-ai-support',
  },
  {
    type: 'SaaS Development',
    country: '🇺🇸 United States',
    title: 'Full SaaS Build for a B2B Scheduling Platform — MVP to 10K Users',
    desc: 'End-to-end product build from zero: authentication, multi-tenant architecture, Stripe billing, and a custom calendar engine. Shipped a production-ready platform in under 9 weeks from kickoff with full test coverage and CI/CD pipeline.',
    result: 'Launched in 9 weeks · 10K users',
    href: '/work/scheduling-saas',
  },
]

export default function WorkPage() {
  return (
    <main className="bg-[#0A0A0A]">
      <Navbar />

      {/* Hero */}
      <section className="max-w-[1160px] mx-auto px-6 lg:px-14 pt-20 pb-16 border-b border-white/[0.06]">
        <p className="flex items-center gap-3 font-syne text-[10px] font-bold uppercase tracking-[0.25em] text-[#00D68F] mb-5">
          <span className="w-6 h-px bg-[#00D68F]" />
          Our Work
        </p>
        <h1 className="font-syne font-extrabold text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.07] tracking-[-0.03em] text-white max-w-[680px] mb-6">
          Results, not{' '}
          <span className="text-[#00D68F]">résumés.</span>
        </h1>
        <p className="font-dm text-[17px] font-light text-white/45 max-w-[520px] leading-[1.8]">
          Every project below is measured by one thing — what changed for the
          client after we shipped. Real systems. Real results. Real businesses.
        </p>
      </section>

      {/* Projects */}
      <section className="max-w-[1160px] mx-auto px-6 lg:px-14 py-16">

        {/* Featured */}
        <Link
          href={featured.href}
          className="block bg-[#0D0D0D] border border-white/[0.07] rounded-2xl p-11 mb-4 group hover:border-[rgba(0,214,143,0.2)] transition-all duration-300 no-underline"
        >
          <div className="flex items-start justify-between gap-4 mb-8">
            <div className="flex items-center gap-2">
              <span className="font-dm text-[12px] font-medium text-white/35">
                {featured.type}
              </span>
              <span className="text-white/15 text-xs">·</span>
              <span className="font-dm text-[12px] text-white/25">
                {featured.country}
              </span>
            </div>
            <div className="w-8 h-8 border border-white/[0.08] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:border-[rgba(0,214,143,0.3)] group-hover:bg-[rgba(0,214,143,0.05)] transition-all">
              <ArrowUpRight size={14} className="text-white/25 group-hover:text-[#00D68F] transition-colors" />
            </div>
          </div>

          <h2 className="font-syne font-extrabold text-[1.5rem] text-white leading-[1.25] max-w-[640px] mb-5">
            {featured.title}
          </h2>

          <p className="font-dm text-[14px] font-light text-white/45 leading-[1.85] max-w-[680px] mb-8">
            {featured.desc}
          </p>

          {/* Metrics */}
          <div className="flex flex-wrap gap-8 mb-8">
            {featured.metrics.map((m) => (
              <div key={m.label} className="border-l-2 border-[rgba(0,214,143,0.3)] pl-4">
                <div className="font-syne font-extrabold text-[1.5rem] text-white leading-none mb-1">
                  {m.num.includes('/')
                    ? <>{m.num.split('/')[0]}<span className="text-[#00D68F]">/{m.num.split('/')[1]}</span></>
                    : m.num.match(/[a-z]/i)
                      ? <>{m.num.replace(/[a-z]/gi, '')}<span className="text-[#00D68F]">{m.num.match(/[a-z]+/i)?.[0]}</span></>
                      : <>{m.num}</>
                  }
                </div>
                <div className="font-dm text-[11px] text-white/28 mt-1">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Stack — kept on featured only */}
          <div className="flex flex-wrap gap-2">
            {featured.stack.map((s) => (
              <span key={s} className="font-dm text-[11px] text-white/25 bg-white/[0.03] border border-white/[0.06] px-2.5 py-1 rounded-md">
                {s}
              </span>
            ))}
          </div>
        </Link>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="block bg-[#0D0D0D] border border-white/[0.07] rounded-xl p-8 group hover:border-[rgba(0,214,143,0.18)] transition-all duration-300 no-underline"
            >
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

              <h3 className="font-syne font-bold text-[1rem] text-white leading-[1.35] mb-3">
                {p.title}
              </h3>

              <p className="font-dm text-[12.5px] font-light text-white/38 leading-[1.8] mb-5">
                {p.desc}
              </p>

              <p className="font-dm text-[12px] font-medium text-[#00D68F]">
                ↑ {p.result}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  )
}