'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

/* ───────────────────────── Config: edit these ───────────────────────── */
const LINKS = {
  portfolio: '/portfolio',
  contact: '/contact',
  booking: '/contact#book', // swap for your Calendly / Cal.com URL
  email: 'support@appivex.app', // confirm real address
}

type Founder = {
  name: string
  role: string
  bio: string
  photo?: string // e.g. '/team/talha-akram.jpg' (place file in /public/team)
  linkedin?: string // add real URL when supplied
}

const founders: Founder[] = [
  {
    name: 'Talha Akram',
    role: 'Co-Founder, APPIVEX',
    bio: 'Leads the studio alongside Saher and works directly with clients on every engagement, from first scoping call to production deployment.',
    photo: '/team/talhaakram.png',
    // linkedin: 'https://www.linkedin.com/in/...',
  },
  {
    name: 'Saher Saleem',
    role: 'Co-Founder, APPIVEX',
    bio: 'Leads the studio alongside Talha and stays hands-on with the systems we build, so every client works with the people who designed their solution.',
    photo: '/team/saher.png',
    // linkedin: 'https://www.linkedin.com/in/...',
  },
]

const STORY_IMAGE: string | undefined = undefined // e.g. '/about/studio.jpg'

/* ───────────────────────────── Content ───────────────────────────── */
const stats = [
  { num: '150', suffix: '+', label: 'Projects delivered' },
  { num: '20', suffix: '+', label: 'Industries served' },
  { num: '15', suffix: '+', label: 'Countries' },
  { num: '98', suffix: '%', label: 'Client satisfaction' },
]

const work = [
  {
    tag: 'AI Voice Agents',
    title: 'Inbound call handling, around the clock',
    desc: 'Production voice agents handling thousands of calls per month.',
    span: 'lg:col-span-2',
  },
  {
    tag: 'Automation',
    title: 'Workflows that return hundreds of hours',
    desc: 'Automations saving clients hundreds of hours every week.',
    span: '',
  },
  {
    tag: 'Software',
    title: 'Platforms from zero to real users',
    desc: 'Full-stack SaaS products and MVPs that scaled with their customers.',
    span: '',
  },
  {
    tag: 'Brand & Web',
    title: 'Digital presence built to convert',
    desc: 'Brand systems and websites engineered for conversion.',
    span: 'lg:col-span-2',
  },
]

const principles = [
  { num: '01', title: 'Builders first', desc: 'We write code, deploy agents and ship systems, not slide decks. Everyone on the team has production experience.' },
  { num: '02', title: 'Radical transparency', desc: 'You always know where your project stands. If something is off track, we tell you before you ask.' },
  { num: '03', title: 'Outcomes, not outputs', desc: 'Shipping code is not the goal. Measurable business impact is. We define success metrics before writing a line, and track them after.' },
  { num: '04', title: 'Speed without shortcuts', desc: 'We move fast because we are experienced, not because we cut corners. Systems are production-grade from day one.' },
]

const why = [
  { title: 'Founders on every project', desc: 'No account managers and no junior handoffs. You work with the people who design and build the system.' },
  { title: 'Voice agents live in 1 to 3 weeks', desc: 'A production delivery framework gets working AI into your operations in weeks, not quarters.' },
  { title: 'Custom-built, never resold', desc: 'We do not wrap existing software. Each system is engineered for your operations from the ground up.' },
  { title: 'ROI defined before we build', desc: 'Success metrics are agreed up front and tracked after launch, so the value of the work is never a guess.' },
]

const capabilities = [
  {
    title: 'AI Engineering',
    desc: 'Voice agents, custom agents and AI pipelines built for production traffic.',
    items: ['AI voice agents, 24/7 inbound handling', 'Custom agents and pipelines', 'Delivered in 1 to 3 weeks'],
    icon: <><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4" /></>,
  },
  {
    title: 'Business Automation',
    desc: 'Workflows that remove repetitive work from your operations.',
    items: ['Process and workflow automation', 'System integrations', 'Hours saved, measured weekly'],
    icon: <><circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="M8.5 6H15a3 3 0 0 1 3 3v6.5" /></>,
  },
  {
    title: 'Software Development',
    desc: 'SaaS platforms, MVPs, web apps and the brand layer on top.',
    items: ['Full-stack SaaS and MVPs', 'Web applications', 'Brand and web design'],
    icon: <><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8m-4-4v4" /></>,
  },
]

const steps = [
  { title: 'Understand', desc: 'We learn your operations, constraints and goals, then agree on the metrics that define success.' },
  { title: 'Architect', desc: 'We design the system, choose the stack and scope the build before any code is written.' },
  { title: 'Engineer', desc: 'We build in short cycles with visible progress, to production standards from the first commit.' },
  { title: 'Deploy & Evolve', desc: 'We ship, track results against the agreed metrics, and keep improving the system after go-live.' },
]

/* ─────────────────────────── Motion helpers ─────────────────────────── */
const ease = [0.22, 1, 0.36, 1] as const

function useReveal() {
  const reduce = useReducedMotion()
  const item: Variants = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  }
  const group: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.1 } },
  }
  return { item, group, reduce }
}

const view = { once: true, margin: '-80px' } as const

/* ───────────────────────────── Primitives ───────────────────────────── */
function Section({ id, children, className = '' }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`border-b border-white/[0.06] ${className}`}>
      <div className="max-w-[1160px] mx-auto px-6 lg:px-14 py-20 lg:py-28">{children}</div>
    </section>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-syne text-[11px] font-bold tracking-[0.2em] text-[#00D68F] mb-5">
      <span className="w-6 h-px bg-[#00D68F]" />
      {children}
    </p>
  )
}

function H2({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`font-syne font-extrabold text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.1] tracking-[-0.025em] text-white ${className}`}>
      {children}
    </h2>
  )
}

function Svg({ children, size = 18 }: { children: React.ReactNode; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {children}
    </svg>
  )
}

function Placeholder({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#111] text-white/25">
      <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center">
        <Svg size={26}>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21a8 8 0 0 1 16 0" />
        </Svg>
      </div>
      <span className="font-dm text-[11px] tracking-wide">{label}</span>
    </div>
  )
}

const btnPrimary =
  'inline-flex items-center justify-center gap-2 rounded-full bg-[#00D68F] px-7 py-3.5 font-syne text-[13px] font-bold text-black transition hover:bg-[#12e9a1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00D68F]'
const btnGhost =
  'inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-syne text-[13px] font-bold text-white transition hover:border-white/40 hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00D68F]'

/* ─────────────────────────────── Sections ─────────────────────────────── */
function Hero() {
  const { item, group } = useReveal()
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06]">
      {/* subtle grid texture, faded at the edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 70% 80% at 30% 40%, #000 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 80% at 30% 40%, #000 30%, transparent 75%)',
        }}
      />
      <motion.div
        variants={group}
        initial="hidden"
        animate="show"
        className="relative max-w-[1160px] mx-auto px-6 lg:px-14 pt-24 pb-20 lg:pt-32 lg:pb-28"
      >
        <motion.div variants={item}><Eyebrow>About APPIVEX</Eyebrow></motion.div>
        <motion.h1
          variants={item}
          className="font-syne font-extrabold text-[clamp(2.5rem,6.4vw,5rem)] leading-[1.03] tracking-[-0.035em] text-white max-w-[880px] mb-8"
        >
          Enterprise-grade AI and software, built for every business.
        </motion.h1>
        <motion.p variants={item} className="font-dm text-[17px] font-light text-white/50 max-w-[540px] leading-[1.8] mb-10">
          A founder-led team of AI engineers and full-stack developers. We have delivered over 150 production systems across 20+ industries. We do not pitch. We build.
        </motion.p>
        <motion.div variants={item} className="flex flex-col sm:flex-row gap-3">
          <Link href={LINKS.portfolio} className={btnPrimary}>Explore Our Work</Link>
          <a href="#founders" className={btnGhost}>Meet Our Founders</a>
        </motion.div>
      </motion.div>
    </section>
  )
}

function Stats() {
  const { item, group } = useReveal()
  return (
    <motion.section
      variants={group}
      initial="hidden"
      whileInView="show"
      viewport={view}
      className="grid grid-cols-2 lg:grid-cols-4 border-b border-white/[0.06]"
    >
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          variants={item}
          className={`px-6 sm:px-10 py-8 border-white/[0.06] ${i % 2 === 0 ? 'border-r' : ''} lg:border-r lg:last:border-r-0 ${i < 2 ? 'border-b lg:border-b-0' : ''}`}
        >
          <div className="font-syne font-extrabold text-[2rem] text-white leading-none mb-1.5">
            {s.num}<span className="text-[#00D68F]">{s.suffix}</span>
          </div>
          <div className="font-dm text-[12px] text-white/40">{s.label}</div>
        </motion.div>
      ))}
    </motion.section>
  )
}

function Story() {
  const { item, group } = useReveal()
  return (
    <Section id="story">
      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-20 items-center">
        <motion.div variants={group} initial="hidden" whileInView="show" viewport={view} className="max-w-[520px]">
          <motion.div variants={item}><Eyebrow>Our Story</Eyebrow></motion.div>
          <motion.div variants={item}>
            <H2 className="mb-8">Great systems should not need an eight-figure budget.</H2>
          </motion.div>
          <motion.p variants={item} className="font-dm text-[15px] font-light text-white/50 leading-[1.85] mb-5">
            APPIVEX was built on a simple conviction: world-class AI and software should not be reserved for large tech budgets. Every business, whatever its size or industry, deserves technology that actually works.
          </motion.p>
          <motion.p variants={item} className="font-dm text-[15px] font-light text-white/50 leading-[1.85] mb-8">
            Most agencies talk about transformation. We have built voice agents handling thousands of calls a month, automations saving hundreds of hours a week, and platforms that scaled from zero to real users, for clients across the US, UK, UAE, Australia and beyond.
          </motion.p>
          <motion.blockquote variants={item} className="border-l-2 border-[#00D68F] pl-5 font-syne text-[15px] font-bold leading-[1.6] text-white">
            We measure our success by your results, not your invoice.
          </motion.blockquote>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={view}
          transition={{ duration: 0.8, ease }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0D0D0D]"
        >
          {STORY_IMAGE ? (
            <Image src={STORY_IMAGE} alt="The APPIVEX team at work" fill sizes="(min-width:1024px) 480px, 100vw" className="object-cover" />
          ) : (
            <Placeholder label="Team or studio photo goes here" />
          )}
        </motion.div>
      </div>
    </Section>
  )
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  )
}

function Founders() {
  const { item, group } = useReveal()
  return (
    <Section id="founders">
      <motion.div variants={group} initial="hidden" whileInView="show" viewport={view} className="mb-14">
        <motion.div variants={item}><Eyebrow>Meet Our Founders</Eyebrow></motion.div>
        <motion.div variants={item}>
          <H2 className="max-w-[560px]">Two founders. Directly involved in every build.</H2>
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {founders.map((f, i) => (
          <motion.article
            key={f.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={view}
            transition={{ duration: 0.8, ease, delay: i * 0.12 }}
            className="group"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0D0D0D]">
              {f.photo ? (
                <Image
                  src={f.photo}
                  alt={`Portrait of ${f.name}`}
                  fill
                  sizes="(min-width:768px) 520px, 100vw"
                  className="object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                />
              ) : (
                <Placeholder label={`Portrait of ${f.name} to be added`} />
              )}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#00D68F] transition-all duration-700 ease-out group-hover:w-full" />
            </div>

            <div className="pt-6 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-syne text-[1.5rem] font-extrabold tracking-[-0.02em] text-white">{f.name}</h3>
                <p className="font-dm text-[13px] text-[#00D68F] mt-1">{f.role}</p>
              </div>
              {f.linkedin && (
                <a
                  href={f.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${f.name} on LinkedIn`}
                  className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-[#00D68F] hover:text-[#00D68F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00D68F]"
                >
                  <LinkedInIcon />
                </a>
              )}
            </div>
            <p className="font-dm text-[14px] font-light text-white/50 leading-[1.8] mt-4 max-w-[460px]">{f.bio}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}

function Work() {
  const { item, group } = useReveal()
  return (
    <Section id="work">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <Eyebrow>Our Work</Eyebrow>
          <H2 className="max-w-[480px]">Systems in production, not prototypes.</H2>
        </div>
        <Link href={LINKS.portfolio} className={btnGhost}>View full portfolio</Link>
      </div>
      <motion.div variants={group} initial="hidden" whileInView="show" viewport={view} className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {work.map((w, i) => (
          <motion.div key={w.title} variants={item} className={w.span}>
            <Link
              href={LINKS.portfolio}
              className="group relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0D0D0D] p-8 transition-colors hover:border-[#00D68F]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00D68F]"
            >
              {/* Swap this block for <Image> project screenshots when available */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-60 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                  maskImage: `linear-gradient(${i % 2 ? '200deg' : '160deg'}, #000, transparent 70%)`,
                  WebkitMaskImage: `linear-gradient(${i % 2 ? '200deg' : '160deg'}, #000, transparent 70%)`,
                }}
              />
              <span className="relative font-dm text-[12px] text-[#00D68F]">{w.tag}</span>
              <div className="relative">
                <h3 className="font-syne text-[1.2rem] font-bold leading-snug text-white mb-2 max-w-[380px]">{w.title}</h3>
                <p className="font-dm text-[13.5px] font-light text-white/45 leading-[1.7] max-w-[380px]">{w.desc}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-syne text-[12px] font-bold text-white/70 transition-all group-hover:gap-3 group-hover:text-[#00D68F]">
                  See projects <Svg size={14}><path d="M5 12h14M13 6l6 6-6 6" /></Svg>
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

function Principles() {
  const { item, group } = useReveal()
  return (
    <Section id="principles">
      <Eyebrow>Our Principles</Eyebrow>
      <H2 className="max-w-[460px] mb-12">The principles behind every decision.</H2>
      <motion.div
        variants={group}
        initial="hidden"
        whileInView="show"
        viewport={view}
        className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06]"
      >
        {principles.map((p) => (
          <motion.div
            key={p.num}
            variants={item}
            className="group relative overflow-hidden bg-[#0A0A0A] p-8 sm:p-10 transition-colors hover:bg-[#0F0F0F]"
          >
            <span aria-hidden className="pointer-events-none select-none absolute -bottom-3 right-3 font-syne font-extrabold text-[5.5rem] leading-none text-white/[0.03] transition-colors group-hover:text-[#00D68F]/10">
              {p.num}
            </span>
            <span className="block font-syne text-[12px] font-bold text-[#00D68F] mb-4">{p.num}</span>
            <h3 className="font-syne text-[1.15rem] font-bold text-white mb-3">{p.title}</h3>
            <p className="font-dm text-[14px] font-light text-white/50 leading-[1.8] max-w-[420px]">{p.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

function Why() {
  const { item, group } = useReveal()
  return (
    <Section id="why">
      <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
        <div className="lg:sticky lg:top-28 self-start">
          <Eyebrow>Why APPIVEX</Eyebrow>
          <H2 className="max-w-[360px]">What working with us is actually like.</H2>
        </div>
        <motion.div variants={group} initial="hidden" whileInView="show" viewport={view} className="flex flex-col">
          {why.map((w) => (
            <motion.div key={w.title} variants={item} className="flex gap-5 py-7 border-b border-white/[0.06] first:border-t">
              <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#00D68F]/25 bg-[#00D68F]/10 text-[#00D68F]">
                <Svg size={12}><polyline points="20 6 9 17 4 12" /></Svg>
              </div>
              <div>
                <h3 className="font-syne text-[1.05rem] font-bold text-white mb-2">{w.title}</h3>
                <p className="font-dm text-[14px] font-light text-white/50 leading-[1.8] max-w-[500px]">{w.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}

function Engineer() {
  const { item, group } = useReveal()
  return (
    <Section id="engineer">
      <Eyebrow>What We Engineer</Eyebrow>
      <H2 className="max-w-[520px] mb-12">Three disciplines, one engineering team.</H2>
      <motion.div variants={group} initial="hidden" whileInView="show" viewport={view} className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {capabilities.map((c, i) => (
          <motion.div
            key={c.title}
            variants={item}
            className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] p-8 transition-colors hover:border-white/20 ${
              i === 0 ? 'bg-[#0F1512]' : i === 1 ? 'bg-[#0D0D0D]' : 'bg-[#101010]'
            }`}
          >
            <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl border border-[#00D68F]/20 bg-[#00D68F]/[0.07] text-[#00D68F]">
              <Svg size={20}>{c.icon}</Svg>
            </div>
            <h3 className="font-syne text-[1.25rem] font-bold text-white mb-3">{c.title}</h3>
            <p className="font-dm text-[14px] font-light text-white/50 leading-[1.75] mb-6">{c.desc}</p>
            <ul className="space-y-2.5 border-t border-white/[0.07] pt-5">
              {c.items.map((it) => (
                <li key={it} className="flex gap-3 font-dm text-[13px] text-white/60">
                  <span className="mt-[9px] h-px w-3 shrink-0 bg-[#00D68F]" />
                  {it}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

function Process() {
  const { reduce } = useReveal()
  return (
    <Section id="process">
      <Eyebrow>How We Work</Eyebrow>
      <H2 className="max-w-[520px] mb-14">From first call to production, in four steps.</H2>

      <ol className="relative grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-8">
        {/* connector: vertical on mobile, horizontal on desktop */}
        <motion.span
          aria-hidden
          initial={{ scaleY: reduce ? 1 : 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={view}
          transition={{ duration: 1.4, ease }}
          style={{ originY: 0 }}
          className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-[#00D68F] to-white/10 lg:hidden"
        />
        <motion.span
          aria-hidden
          initial={{ scaleX: reduce ? 1 : 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={view}
          transition={{ duration: 1.6, ease }}
          style={{ originX: 0 }}
          className="absolute left-0 right-0 top-[15px] hidden h-px bg-gradient-to-r from-[#00D68F] to-white/10 lg:block"
        />
        {steps.map((s, i) => (
          <motion.li
            key={s.title}
            initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={view}
            transition={{ duration: 0.7, ease, delay: reduce ? 0 : 0.2 + i * 0.25 }}
            className="relative pl-12 lg:pl-0 lg:pt-14"
          >
            <span className="absolute left-0 top-0 flex h-[31px] w-[31px] items-center justify-center rounded-full border border-[#00D68F] bg-[#0A0A0A] font-syne text-[11px] font-bold text-[#00D68F]">
              {i + 1}
            </span>
            <h3 className="font-syne text-[1.1rem] font-bold text-white mb-2">{s.title}</h3>
            <p className="font-dm text-[13.5px] font-light text-white/50 leading-[1.75] max-w-[280px]">{s.desc}</p>
          </motion.li>
        ))}
      </ol>
    </Section>
  )
}

export function FinalCTA() {
  const { item, group } = useReveal()
  return (
    <section className="border-b border-white/[0.06]">
      <motion.div
        variants={group}
        initial="hidden"
        whileInView="show"
        viewport={view}
        className="max-w-[1160px] mx-auto px-6 lg:px-14 py-24 lg:py-32"
      >
        <motion.h2
          variants={item}
          className="font-syne font-extrabold text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] tracking-[-0.03em] text-white max-w-[760px] mb-6"
        >
          Have a system to build? Talk to the founders.
        </motion.h2>
        <motion.p variants={item} className="font-dm text-[16px] font-light text-white/50 max-w-[480px] leading-[1.8] mb-10">
          Tell us what you want to automate, ship or scale. We will respond with a clear scope and a realistic timeline.
        </motion.p>
        <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 mb-8">
          <Link href={LINKS.booking} className={btnPrimary}>Book a call</Link>
          <Link href={LINKS.contact} className={btnGhost}>Contact us</Link>
        </motion.div>
        <motion.a
          variants={item}
          href={`mailto:${LINKS.email}`}
          className="font-dm text-[13px] text-white/40 transition hover:text-[#00D68F] break-all"
        >
          {LINKS.email}
        </motion.a>
      </motion.div>
    </section>
  )
}

/* ───────────────────────────────── Page ───────────────────────────────── */
export default function AboutPage() {
  return (
    <main className="bg-[#0A0A0A] overflow-x-clip">
      <Navbar />
      <Hero />
      <Stats />
      <Story />
      <Founders />
      <Work />
      <Principles />
      <Why />
      <Engineer />
      <Process />
      <FinalCTA />
      <Footer />
    </main>
  )
}