import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'

const values = [
  {
    num: '01',
    title: 'Builders first',
    desc: 'We write code, deploy agents, and ship systems — not slide decks. Every person on our team is a practitioner who has production experience.',
  },
  {
    num: '02',
    title: 'Radical transparency',
    desc: 'You always know exactly where your project stands. If something is off track, we tell you before you ask. No hiding behind process or jargon.',
  },
  {
    num: '03',
    title: 'Outcomes, not outputs',
    desc: 'Shipping code is not the goal. Measurable business impact is. We define success metrics before we write a single line — and we track them after.',
  },
  {
    num: '04',
    title: 'Speed without shortcuts',
    desc: 'We move fast because we are experienced — not because we cut corners. The systems we build are production-grade from day one.',
  },
]

const whyItems = [
  {
    title: 'Direct founder access on every project',
    desc: 'No account managers, no junior handoffs. You work with the people who designed and built the system from day one.',
  },
  {
    title: 'AI voice agents live in 1 to 3 weeks',
    desc: 'We have a production delivery framework that gets working AI systems into your operations faster than any other team.',
  },
  {
    title: 'Custom built — never off-the-shelf',
    desc: 'We do not resell tools or wrap existing software. Every system is engineered specifically for your operations from the ground up.',
  },
  {
    title: 'ROI tracked from day one',
    desc: 'We define measurable outcomes before the build starts and track them after. You always know the value of what we built.',
  },
]

const stats = [
  { num: '150', suffix: '+', label: 'Projects Delivered' },
  { num: '20',  suffix: '+', label: 'Industries Served'  },
  { num: '15',  suffix: '+', label: 'Countries'          },
  { num: '98',  suffix: '%', label: 'Client Satisfaction' },
]

const deliverables = [
  {
    title: 'AI Automation Systems',
    sub: 'Custom pipelines, agents & workflows',
    icon: <path d="M12 2v3m0 14v3M4.22 4.22l2.12 2.12m11.32 11.32 2.12 2.12M2 12h3m14 0h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>,
  },
  {
    title: 'AI Voice Agents',
    sub: '24/7 inbound handling — 1 to 3 week delivery',
    icon: <><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></>,
  },
  {
    title: 'Full-Stack Development',
    sub: 'SaaS platforms, MVPs & web apps',
    icon: <><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/></>,
  },
  {
    title: 'Brand & Web Design',
    sub: 'High-conversion digital presence',
    icon: <><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>,
  },
]

export default function AboutPage() {
  return (
    <main className="bg-[#0A0A0A]">
      <Navbar />

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="max-w-[1160px] mx-auto px-6 lg:px-14 pt-20 pb-16 border-b border-white/[0.06]">
        <p className="flex items-center gap-3 font-syne text-[10px] font-bold uppercase tracking-[0.25em] text-[#00D68F] mb-5">
          <span className="w-6 h-px bg-[#00D68F]" />
          About APPIVEX
        </p>
        <h1 className="font-syne font-extrabold text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.07] tracking-[-0.03em] text-white max-w-[700px] mb-8">
          We exist to give every business access to{' '}
          <span className="text-[#00D68F]">enterprise-grade AI.</span>
        </h1>
        <p className="font-dm text-[17px] font-light text-white/48 max-w-[560px] leading-[1.85] mb-5">
          APPIVEX was built on a simple conviction — great AI systems and
          world-class software should not be reserved for companies with
          eight-figure tech budgets. Every business, regardless of size or
          industry, deserves intelligent technology that actually works.
        </p>
        <p className="font-dm text-[16px] font-light text-white/45 max-w-[560px] leading-[1.85]">
          We are a lean, founder-led team of AI engineers, full-stack
          developers, and automation specialists who have delivered over 150
          production systems across 20+ industries globally. We do not pitch.
          We build.
        </p>
      </section>

      {/* ── Stats Strip ─────────────────────────────────────────────── */}
      <section className="grid grid-cols-2 lg:grid-cols-4 border-b border-white/[0.06]">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="px-10 py-8 border-r border-white/[0.06] last:border-r-0"
          >
            <div className="font-syne font-extrabold text-[2rem] text-white leading-none mb-1.5">
              {s.num}<span className="text-[#00D68F]">{s.suffix}</span>
            </div>
            <div className="font-dm text-[11px] text-white/30 uppercase tracking-[0.05em]">
              {s.label}
            </div>
          </div>
        ))}
      </section>

      {/* ── Mission ─────────────────────────────────────────────────── */}
      <section className="max-w-[1160px] mx-auto px-6 lg:px-14 py-20 border-b border-white/[0.06]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <blockquote className="font-syne font-bold text-[1.3rem] leading-[1.55] text-white border-l-2 border-[#00D68F] pl-6">
            "We do not build software for the sake of building software. We
            build systems that make businesses faster, leaner, and smarter —
            and we measure our success by your results, not your invoice."
          </blockquote>
          <div className="space-y-5">
            <p className="font-dm text-[14px] font-light text-white/45 leading-[1.85]">
              Most agencies talk about transformation. We deliver it. We have
              built AI voice agents handling thousands of calls per month,
              workflow automations saving clients hundreds of hours weekly, and
              full-stack platforms that have scaled from zero to real users.
            </p>
            <p className="font-dm text-[14px] font-light text-white/45 leading-[1.85]">
              We work across the US, UK, UAE, Australia, and beyond — operating
              without borders, communicating without friction, and delivering
              without excuses. Our clients are not just customers. They are
              partners we stay accountable to long after go-live.
            </p>
          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────────────────── */}
      <section className="max-w-[1160px] mx-auto px-6 lg:px-14 py-20 border-b border-white/[0.06]">
        <p className="flex items-center gap-3 font-syne text-[10px] font-bold uppercase tracking-[0.25em] text-[#00D68F] mb-5">
          <span className="w-6 h-px bg-[#00D68F]" />
          What We Stand For
        </p>
        <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.5rem)] leading-[1.1] tracking-[-0.025em] text-white max-w-[400px] mb-12">
          The principles that drive every{' '}
          <span className="text-[#00D68F]">decision.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06]">
          {values.map((v) => (
            <div
              key={v.num}
              className="relative bg-[#0A0A0A] p-9 hover:bg-[#0f0f0f] transition-colors overflow-hidden"
            >
              <span className="absolute bottom-[-12px] right-2 font-syne font-extrabold text-[5rem] leading-none text-white/[0.025] pointer-events-none select-none">
                {v.num}
              </span>
              <span className="block font-syne text-[10px] font-bold tracking-[0.2em] text-[#00D68F] mb-3">
                {v.num}
              </span>
              <h3 className="font-syne text-[18px] font-bold text-white mb-2.5">
                {v.title}
              </h3>
              <p className="font-dm text-[14px] font-light text-white/42 leading-[1.8]">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why APPIVEX ─────────────────────────────────────────────── */}
      <section className="max-w-[1160px] mx-auto px-6 lg:px-14 py-20 border-b border-white/[0.06]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="flex items-center gap-3 font-syne text-[10px] font-bold uppercase tracking-[0.25em] text-[#00D68F] mb-5">
              <span className="w-6 h-px bg-[#00D68F]" />
              Why APPIVEX
            </p>
            <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.4rem)] leading-[1.1] tracking-[-0.025em] text-white max-w-[380px] mb-10">
              What makes us{' '}
              <span className="text-[#00D68F]">different.</span>
            </h2>
            <div className="flex flex-col">
              {whyItems.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start py-5 border-b border-white/[0.06] first:border-t first:border-white/[0.06]"
                >
                  <div className="w-5 h-5 rounded-full bg-[rgba(0,214,143,0.1)] border border-[rgba(0,214,143,0.2)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#00D68F" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-syne text-[14px] font-bold text-white mb-1.5">
                      {item.title}
                    </div>
                    <p className="font-dm text-[12.5px] font-light text-white/38 leading-[1.7]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables card */}
          <div className="bg-[#0D0D0D] border border-white/[0.07] rounded-2xl p-9">
            <h3 className="font-syne text-[1rem] font-bold text-white mb-5">
              What we deliver
            </h3>
            <div className="flex flex-col gap-3">
              {deliverables.map((d) => (
                <div
                  key={d.title}
                  className="flex items-center gap-3 bg-white/[0.02] border border-white/[0.06] rounded-xl p-3.5"
                >
                  <div className="w-8 h-8 bg-[rgba(0,214,143,0.08)] border border-[rgba(0,214,143,0.14)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00D68F" strokeWidth="1.8">
                      {d.icon}
                    </svg>
                  </div>
                  <div>
                    <div className="font-syne text-[12px] font-bold text-white">
                      {d.title}
                    </div>
                    <div className="font-dm text-[11px] text-white/30 mt-0.5">
                      {d.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  )
}