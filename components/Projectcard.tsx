'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/projects'
import { ProjectVisual } from './Projectvisua'

export function ProjectCard({
  project,
  featured = false,
  className = '',
}: {
  project: Project
  featured?: boolean
  className?: string
}) {
  const reduce = useReducedMotion()
  const motionProps = reduce
    ? {}
    : {
        layout: true,
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-40px' },
        exit: { opacity: 0, scale: 0.97 },
        transition: { duration: 0.4 },
      }
  const title = featured && project.featuredTitle ? project.featuredTitle : project.title
  const tags = (project.stack ?? []).slice(0, 4)

  return (
    <motion.div {...motionProps} className={className}>
      <Link
        href={`/portfolio/${project.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0D] transition-colors duration-300 hover:border-[#00D68F]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00D68F]"
      >
        <ProjectVisual kind={project.visual} className="border-b border-white/10" />
        <div className="flex flex-1 flex-col p-6">
          <p className="mb-2 font-dm text-[12px] font-medium text-[#00D68F]">{project.category}</p>
          <h3 className="mb-3 font-syne text-[1.1rem] font-bold leading-[1.3] text-white">{title}</h3>
          <p className="mb-5 font-dm text-[14.5px] leading-[1.7] text-white/65">{project.summary}</p>
          {tags.length > 0 && (
            <ul className="mb-6 flex flex-wrap gap-2">
              {tags.map((t) => (
                <li key={t} className="rounded-md border border-white/10 px-2 py-1 font-dm text-[12px] text-white/55">
                  {t}
                </li>
              ))}
            </ul>
          )}
          <span className="mt-auto inline-flex items-center gap-2 font-dm text-[14px] font-medium text-white transition-colors group-hover:text-[#00D68F]">
            {featured ? 'View Case Study' : 'View Project'}
            <ArrowUpRight size={14} aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  )
}