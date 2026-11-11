import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { featuredProjects } from '@/lib/projects'
import { ProjectCard } from './Projectcard'
import { Reveal } from './Reveal'

// Editorial 12-col grid: 7/5 then 5/7
const spans = ['lg:col-span-7', 'lg:col-span-5', 'lg:col-span-5', 'lg:col-span-7']

export default function FeaturedProjects() {
  const items = featuredProjects().slice(0, 4)
  return (
    <section className="bg-[#0A0A0A] px-6 py-24 lg:px-14">
      <div className="mx-auto max-w-[1160px]">
        <Reveal className="mb-14 max-w-[640px]">
          <h2 className="mb-4 font-syne text-[clamp(1.9rem,3vw,2.7rem)] font-extrabold leading-[1.1] tracking-[-0.025em] text-white">
            Selected work
          </h2>
          <p className="font-dm text-[16px] leading-[1.7] text-white/65">
            Voice agents, intelligent assistants and automation built for real operational problems.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {items.map((p, i) => (
            <ProjectCard key={p.slug} project={p} featured className={spans[i]} />
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2.5 rounded-xl bg-[#00D68F] px-7 py-3.5 font-syne text-[13px] font-bold text-[#0A0A0A] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00D68F]"
          >
            Explore All Projects
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}