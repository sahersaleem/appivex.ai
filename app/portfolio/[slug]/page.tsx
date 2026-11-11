import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { getProject, projects, relatedProjects } from '@/lib/projects'
import { ProjectVisual } from '@/components/Projectvisua'
import { ProjectCard } from '@/components/Projectcard'
import { WorkflowDiagram } from '@/components/Workflowdiagram'
import { Reveal } from '@/components/Reveal'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const p = getProject(slug)
  if (!p) return {}
  return {
    title: `${p.title} | APPIVEX`,
    description: p.summary,
    openGraph: { title: p.title, description: p.summary },
  }
}

const h = 'mb-4 font-syne text-[13px] font-bold text-[#00D68F]'
const body = 'font-dm text-[16px] leading-[1.75] text-white/70'

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const p = getProject(slug)
  if (!p) notFound()
  const related = relatedProjects(p)

  return (
    <main className="min-h-screen bg-[#0A0A0A] px-6 pb-24 pt-32 lg:px-14">
      <div className="mx-auto max-w-[1160px]">
        <Link href="/portfolio" className="mb-10 inline-flex items-center gap-2 font-dm text-[14px] text-white/60 transition-colors hover:text-[#00D68F]">
          <ArrowLeft size={14} aria-hidden="true" /> All projects
        </Link>

        <Reveal className="mb-12 max-w-[820px]">
          <p className="mb-3 font-dm text-[13px] font-medium text-[#00D68F]">{p.category}</p>
          <h1 className="mb-5 font-syne text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.1] tracking-[-0.025em] text-white">
            {p.title}
          </h1>
          <p className="max-w-[640px] font-dm text-[17px] leading-[1.7] text-white/65">{p.summary}</p>
          <dl className="mt-8 flex flex-wrap gap-x-12 gap-y-4">
            {p.industry && (
              <div>
                <dt className="font-dm text-[12px] text-white/45">Industry</dt>
                <dd className="font-dm text-[15px] text-white">{p.industry}</dd>
              </div>
            )}
            <div>
              <dt className="font-dm text-[12px] text-white/45">Category</dt>
              <dd className="font-dm text-[15px] text-white">{p.category}</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal className="mb-20 overflow-hidden rounded-xl border border-white/10">
          <div className="group">
            <ProjectVisual kind={p.visual} className="sm:aspect-[21/9]" />
          </div>
        </Reveal>

        <div className="mb-20 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {[
            ['The problem', p.problem],
            ['What we built', p.built],
            ['How it works', p.how],
          ].map(([t, txt], i) => (
            <Reveal key={t} delay={i * 0.08}>
              <h2 className={h}>{t}</h2>
              <p className={body}>{txt}</p>
            </Reveal>
          ))}
        </div>

        <section className="mb-20" aria-labelledby="flow-h">
          <h2 id="flow-h" className="mb-8 font-syne text-[1.45rem] font-extrabold text-white">
            How the workflow runs
          </h2>
          <WorkflowDiagram steps={p.flow} />
        </section>

        {p.stack && (
          <Reveal className="mb-20">
            <h2 className={h}>Technologies used</h2>
            <ul className="flex flex-wrap gap-2.5">
              {p.stack.map((t) => (
                <li key={t} className="rounded-lg border border-white/10 px-3.5 py-2 font-dm text-[14px] text-white/80">
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        <Reveal className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className={h}>Business outcomes</h2>
            <ul className="space-y-3">
              {p.outcomes.map((o) => (
                <li key={o} className="flex gap-3 font-dm text-[15.5px] leading-[1.6] text-white/85">
                  <Check size={16} aria-hidden="true" className="mt-1 shrink-0 text-[#00D68F]" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
          {p.results && (
            <dl className="flex flex-wrap content-start gap-x-10 gap-y-6 lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-10">
              {p.results.map((r) => (
                <div key={r.label}>
                  <dd className="font-syne text-[1.8rem] font-extrabold leading-none text-white">{r.value}</dd>
                  <dt className="mt-1.5 font-dm text-[13px] text-white/55">{r.label}</dt>
                </div>
              ))}
            </dl>
          )}
        </Reveal>

        <section className="mb-24" aria-labelledby="rel-h">
          <h2 id="rel-h" className="mb-8 font-syne text-[1.45rem] font-extrabold text-white">
            Related projects
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <ProjectCard key={r.slug} project={r} />
            ))}
          </div>
        </section>

        <Reveal className="rounded-xl border border-white/10 bg-[#0D0D0D] p-8 sm:p-12">
          <h2 className="mb-3 font-syne text-[1.6rem] font-extrabold leading-[1.2] text-white">
            Have a similar problem to solve?
          </h2>
          <p className="mb-7 max-w-[520px] font-dm text-[15.5px] leading-[1.7] text-white/65">
            Tell us about the workflow slowing your team down. We&rsquo;ll map it and agree the metrics up front.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 rounded-xl bg-[#00D68F] px-7 py-3.5 font-syne text-[13px] font-bold text-[#0A0A0A] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00D68F]"
          >
            Start with a 2-week pilot <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </main>
  )
}