'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, LayoutGroup } from 'framer-motion'
import { categories, projects, type Category } from '@/lib/projects'
import { ProjectCard } from './Projectcard'

type Filter = 'All Projects' | Category

export default function PortfolioGrid() {
  const [active, setActive] = useState<Filter>('All Projects')

  const shown = useMemo(
    () => (active === 'All Projects' ? projects : projects.filter((p) => p.category === active)),
    [active]
  )
  const count = (c: Filter) => (c === 'All Projects' ? projects.length : projects.filter((p) => p.category === c).length)

  return (
    <div>
      <div role="group" aria-label="Filter projects by category" className="mb-10 flex flex-wrap gap-2.5">
        {categories.map((c) => {
          const on = c === active
          return (
            <button
              key={c}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(c)}
              className={`min-h-[44px] rounded-full border px-4 font-dm text-[13.5px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00D68F] ${
                on
                  ? 'border-[#00D68F] bg-[#00D68F] text-[#0A0A0A]'
                  : 'border-white/15 text-white/70 hover:border-white/40 hover:text-white'
              }`}
            >
              {c} <span className={on ? 'text-[#0A0A0A]/60' : 'text-white/35'}>{count(c)}</span>
            </button>
          )
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        {shown.length} projects shown
      </p>

      <LayoutGroup>
        <div className="grid grid-flow-dense grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map((p) => (
              <ProjectCard key={p.slug} project={p} className={p.wide && shown.length > 2 ? 'lg:col-span-2' : ''} />
            ))}
          </AnimatePresence>
        </div>
      </LayoutGroup>
    </div>
  )
}