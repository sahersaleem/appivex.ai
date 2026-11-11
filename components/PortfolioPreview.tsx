'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'

type CaseStudy = {
  service: string
  location: string
  title: string
  challenge: string
  built: string
  benefits: string[]
  results: { value: string; label: string }[]
  stack?: string[]
  href: string
}

/*
  HOW TO ADD A PROJECT
  Copy one object below and fill every field.
  Only publish numbers you can back up with client data or your own logs.
  Remove "results" entries you can't verify rather than rounding up.
*/
const caseStudies: CaseStudy[] = [
  {
    service: 'Voice AI',
    location: 'United States',
    title: "24/7 inbound voice agent for Davey's Plumbing",
    challenge:
      'Calls arriving after hours or while the team was on a job went unanswered, so leads went to competitors and booking relied on staff being free.',
    built:
      'An AI voice agent that answers every call, troubleshoots common issues from a knowledge base, books appointments through the Joober API, and transfers to a person when needed.',
    benefits: [
      'No missed calls or lost leads outside office hours',
      'Appointments land directly in the scheduling system, with no re-entry',
      'Staff stay on jobs instead of answering the phone',
      'Coverage around the clock without hiring extra call handlers',
    ],
    results: [
      { value: '0', label: 'missed calls after hours' },
      { value: '24/7', label: 'call handling' },
      { value: '3 weeks', label: 'to deploy' },
      { value: '100%', label: 'calls captured and logged' },
    ],
    stack: ['VAPI', 'GPT-4', 'Python FastAPI', 'Joober API'],
    href: '/work/daveys-plumbing',
  },
  {
    service: 'AI automation',
    location: 'United Kingdom',
    title: 'Route data automation for a UK logistics company',
    challenge:
      'The operations team spent five hours every Monday updating route data by hand across three separate systems.',
    built:
      'An AI pipeline that pulls, processes and updates all three systems in one run, with no manual input.',
    benefits: [
      'Hours of repetitive work returned to the operations team every week',
      'Fewer copy-and-paste errors, and the systems always agree',
      'Volume can grow without adding administrative headcount',
    ],
    results: [{ value: '18 hrs', label: 'saved every week' }],
    href: '/work/logistics-automation',
  },
  {
    service: 'SaaS development',
    location: 'United States',
    title: 'B2B scheduling platform, from MVP to 10K users',
    challenge:
      'A founder needed a production-ready product, not a prototype, to start onboarding business customers quickly.',
    built:
      'A multi-tenant platform with Stripe billing, a custom calendar engine and a full CI/CD pipeline.',
    benefits: [
      'Revenue-ready from launch, with subscriptions and billing built in',
      'Architecture that supports many customers without rework',
      'Safe, repeatable releases through automated deployment',
    ],
    results: [
      { value: '9 weeks', label: 'kickoff to production' },
      { value: '10K', label: 'users' },
    ],
    href: '/work/scheduling-saas',
  },
]

const solutions = [
  {
    service: 'RAG support chatbot',
    title: '24/7 support assistant trained on your own documents',
    problem: 'Customers and staff ask the same product, assembly and adjustment questions again and again.',
    built:
      'A chatbot that answers from uploaded PDFs and catalogs, replies in several languages, cites its sources, and hands over to a person when it is unsure.',
    benefits: [
      'Answers at any hour, in the customer’s language',
      'Experts spend time on complex cases, not repeat questions',
      'Every answer shows its source, so it can be checked',
    ],
    href: '/work/rag-support-chatbot',
  },
  {
    service: 'Dealer and customer portal',
    title: 'Self-service portal for quotes, orders and documents',
    problem: 'Quote requests, order status and document requests all go through email and phone calls.',
    built:
      'A portal covering quote requests, order tracking, document downloads and status notifications.',
    benefits: [
      'Customers find order status themselves',
      'Fewer “where is my order?” calls and emails',
      'Documents are always one click away',
    ],
    href: '/work/dealer-portal',
  },
  {
    service: 'Workflow automation',
    title: 'From inquiry to assignment, with no manual steps',
    problem: 'New inquiries are copied into the CRM, answered and assigned by hand, and some get delayed or missed.',
    built:
      'An automated flow: inquiry email, CRM entry, instant auto-reply, assignment to the right person, and a weekly report.',
    benefits: [
      'Every inquiry is logged and answered right away',
      'The right person is notified without anyone sorting the inbox',
      'Managers get a weekly report without building it',
    ],
    href: '/work/inquiry-automation',
  },
  {
    service: 'Voice agent',
    title: 'First-line call handling that books meetings and callbacks',
    problem: 'Routine calls take up staff time, and calls outside working hours go unanswered.',
    built:
      'A voice agent that answers common questions, takes the caller’s details, and books meetings or callbacks.',
    benefits: [
      'Callers get an answer instead of voicemail',
      'Staff only handle calls that need a person',
      'Callbacks and meetings are booked automatically',
    ],
    href: '/work/voice-agent',
  },
  {
    service: 'Systems integration',
    title: 'ERP and CRM data in one dashboard',
    problem: 'Data sits in separate systems, so teams re-enter it or work from out-of-date numbers.',
    built: 'Integrations that sync ERP and CRM data into a single dashboard.',
    benefits: [
      'One view of customers, orders and activity',
      'No double entry between systems',
      'Decisions are based on current data',
    ],
    href: '/work/systems-integration',
  },
]

const delivery = [
  { title: 'Discovery', text: 'We map your workflow and agree the metrics up front.' },
  { title: 'Pilot', text: 'One workflow automated, with results you can measure.' },
  { title: 'Rollout', text: 'We extend what worked and connect your existing systems.' },
  { title: 'Support', text: 'Documented handover and ongoing maintenance.' },
]

export default function PortfolioPreview() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduce = useReducedMotion()

  const reveal = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        animate: inView ? { opacity: 1, y: 0 } : {},
        transition: { duration: 0.5 },
      }

  return (
    <section ref={ref} className="bg-[#0A0A0A] py-24 px-6 lg:px-14">
      <div className="max-w-[1160px] mx-auto">
        {/* Header */}
        <motion.div {...reveal} className="max-w-[640px] mb-14">
          <h2 className="font-syne font-extrabold text-[clamp(1.9rem,3vw,2.7rem)] leading-[1.1] tracking-[-0.025em] text-white mb-4">
            Case studies: the problem, the build, the business result
          </h2>
          <p className="font-dm text-[16px] leading-[1.7] text-white/65">
            Each project starts with a specific operational problem. Here is what we built and what
            the company gained from it.
          </p>
        </motion.div>

        {/* Case studies */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {caseStudies.map((c) => (
            <article key={c.title} className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left: identity + problem */}
              <div className="lg:col-span-5">
                <p className="font-dm text-[13px] text-white/50 mb-4">
                  {c.service} for a client in {c.location}
                </p>
                <h3 className="font-syne font-extrabold text-[1.45rem] leading-[1.25] text-white mb-6">
                  {c.title}
                </h3>

                <h4 className="font-syne font-bold text-[13px] text-[#00D68F] mb-2">The problem</h4>
                <p className="font-dm text-[15px] leading-[1.75] text-white/70 mb-6">{c.challenge}</p>

                <h4 className="font-syne font-bold text-[13px] text-[#00D68F] mb-2">What we built</h4>
                <p className="font-dm text-[15px] leading-[1.75] text-white/70">{c.built}</p>

                {c.stack && (
                  <p className="font-dm text-[13px] text-white/45 mt-5">
                    Built with {c.stack.join(', ')}
                  </p>
                )}
              </div>

              {/* Right: benefits + results */}
              <div className="lg:col-span-7 lg:pl-10 lg:border-l lg:border-white/10">
                <h4 className="font-syne font-bold text-[13px] text-[#00D68F] mb-4">
                  What the company gained
                </h4>
                <ul className="space-y-3 mb-8">
                  {c.benefits.map((b) => (
                    <li key={b} className="flex gap-3 font-dm text-[15px] leading-[1.6] text-white/85">
                      <Check size={16} aria-hidden="true" className="text-[#00D68F] mt-1 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                <dl className="flex flex-wrap gap-x-10 gap-y-5 mb-8">
                  {c.results.map((r) => (
                    <div key={r.label}>
                      <dd className="font-syne font-extrabold text-[1.6rem] leading-none text-white">
                        {r.value}
                      </dd>
                      <dt className="font-dm text-[13px] text-white/55 mt-1.5">{r.label}</dt>
                    </div>
                  ))}
                </dl>

                <Link
                  href={c.href}
                  className="inline-flex items-center gap-2 font-dm text-[14px] font-medium text-white border-b border-white/30 pb-px hover:text-[#00D68F] hover:border-[#00D68F] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00D68F]"
                >
                  Read the full case study
                  <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* More solutions */}
        <div className="mt-20">
          <h3 className="font-syne font-extrabold text-[1.45rem] leading-[1.25] text-white mb-3">
            More solutions we have built
          </h3>
          <p className="font-dm text-[15px] leading-[1.7] text-white/65 max-w-[600px] mb-8">
            The same building blocks, applied to the repetitive work that slows teams down.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((s) => (
              <article
                key={s.title}
                className="flex flex-col border border-white/10 rounded-xl p-7 bg-[#0D0D0D]"
              >
                <p className="font-dm text-[13px] text-white/50 mb-3">{s.service}</p>
                <h4 className="font-syne font-bold text-[16px] leading-[1.35] text-white mb-4">
                  {s.title}
                </h4>
                <p className="font-dm text-[14.5px] leading-[1.7] text-white/65 mb-3">{s.problem}</p>
                <p className="font-dm text-[14.5px] leading-[1.7] text-white/65 mb-5">{s.built}</p>
                <ul className="space-y-2.5 mb-6">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex gap-2.5 font-dm text-[14px] leading-[1.55] text-white/85">
                      <Check size={15} aria-hidden="true" className="text-[#00D68F] mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href={s.href}
                  className="mt-auto inline-flex items-center gap-2 font-dm text-[14px] font-medium text-white border-b border-white/30 pb-px self-start hover:text-[#00D68F] hover:border-[#00D68F] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00D68F]"
                >
                  See how it works
                  <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>

        {/* How we deliver */}
        <div className="mt-16">
          <h3 className="font-syne font-extrabold text-[1.2rem] text-white mb-6">
            How we deliver
          </h3>
          <ol className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {delivery.map((d, i) => (
              <li key={d.title} className="border-t border-white/15 pt-4">
                <p className="font-syne font-bold text-[14px] text-white mb-1.5">
                  {i + 1}. {d.title}
                </p>
                <p className="font-dm text-[14px] leading-[1.65] text-white/60">{d.text}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap items-center gap-6 mt-14">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 font-syne text-[13px] font-bold bg-[#00D68F] text-[#0A0A0A] px-7 py-3.5 rounded-xl hover:bg-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00D68F]"
          >
            Start with a 2-week pilot
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
          <Link
            href="/work"
            className="font-dm text-[14px] font-medium text-white/65 border-b border-white/20 pb-px hover:text-[#00D68F] hover:border-[#00D68F] transition-colors"
          >
            See all projects
          </Link>
        </div>
      </div>
    </section>
  )
}