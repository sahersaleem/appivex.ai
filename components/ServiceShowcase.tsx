'use client'

import { useEffect, useRef, useState, type ComponentType } from 'react'
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion'
import { Pause, Play } from 'lucide-react'
import { ChatbotDemo, CrmDemo, VoiceDemo, PortalDemo, type DemoProps } from './demos'

const SCENE_MS = 9000 // how long each service is shown
const TICK_MS = 80 // clock resolution: smooth enough, cheap to render

type Scene = {
  id: string
  label: string
  summary: string // read by screen readers instead of the animated UI
  Demo: ComponentType<DemoProps>
}

const scenes: Scene[] = [
  {
    id: 'chatbot',
    label: 'AI Chatbot',
    summary:
      'AI chatbot example: a customer asks about a delayed order, the bot looks it up in the ERP and replies with the new delivery date.',
    Demo: ChatbotDemo,
  },
  {
    id: 'crm',
    label: 'CRM',
    summary:
      'CRM automation example: a website lead is scored, assigned, followed up automatically and a meeting is booked.',
    Demo: CrmDemo,
  },
  {
    id: 'voice',
    label: 'Voice Agent',
    summary:
      'AI voice agent example: an inbound call is answered and a technician appointment is booked with an SMS confirmation.',
    Demo: VoiceDemo,
  },
  {
    id: 'portal',
    label: 'Portal',
    summary:
      'Custom portal example: an operations dashboard with live order counts, delivery rate, revenue and order statuses.',
    Demo: PortalDemo,
  },
]

export default function ServiceShowcase() {
  const reduce = useReducedMotion()
  const wrapRef = useRef<HTMLDivElement>(null)
  const inView = useInView(wrapRef, { amount: 0.3 })

  const [index, setIndex] = useState(0)
  const [t, setT] = useState(0)
  const [paused, setPaused] = useState(false)
  const [tabHidden, setTabHidden] = useState(false)
  const tRef = useRef(0)

  // Stop the clock while the browser tab is in the background.
  useEffect(() => {
    const onVis = () => setTabHidden(document.hidden)
    onVis()
    document.addEventListener('visibilitychange', onVis)
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [])

  // Only run while visible, not paused, and motion is allowed.
  const running = !reduce && !paused && inView && !tabHidden

  useEffect(() => {
    if (!running) return
    let last = performance.now()
    const id = window.setInterval(() => {
      const now = performance.now()
      tRef.current += now - last
      last = now
      if (tRef.current >= SCENE_MS) {
        tRef.current = 0
        setIndex((i) => (i + 1) % scenes.length)
      }
      setT(tRef.current)
    }, TICK_MS)
    return () => window.clearInterval(id)
  }, [running])

  const select = (i: number) => {
    tRef.current = 0
    setT(0)
    setIndex(i)
  }

  const scene = scenes[index]
  const Demo = scene.Demo
  // Reduced motion: show every scene in its finished state, switch only on click.
  const time = reduce ? SCENE_MS : t
  const progress = reduce ? 1 : Math.min(1, t / SCENE_MS)

  return (
    <div ref={wrapRef} className="w-full">
      {/* Service switcher with per-service progress */}
      <div role="tablist" aria-label="Services we build" className="mb-3 grid grid-cols-4 gap-2 sm:gap-3">
        {scenes.map((s, i) => {
          const active = i === index
          return (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => select(i)}
              className="group rounded-sm text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--mint)]"
            >
              <span
                className={`block truncate font-dm text-[12px] font-medium transition-colors duration-200 sm:text-[13px] ${
                  active ? 'text-[var(--text-hi)]' : 'text-[var(--text-mid)] group-hover:text-[var(--text-hi)]'
                }`}
              >
                {s.label}
              </span>
              <span className="mt-2 block h-[2px] overflow-hidden rounded-full bg-white/10">
                <span
                  className="block h-full origin-left bg-[var(--mint)]"
                  style={{
                    transform: `scaleX(${active ? progress : 0})`,
                    transition: reduce ? 'none' : 'transform 100ms linear',
                  }}
                />
              </span>
            </button>
          )
        })}
      </div>

      {/* Fixed-height stage so switching never shifts the page */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0E0E0E] shadow-[0_28px_60px_-28px_rgba(0,0,0,0.9)]">
        <div className="h-[clamp(390px,54svh,470px)]" aria-hidden>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={scene.id}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.26, ease: 'easeOut' }}
              className="h-full"
            >
              <Demo t={time} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <p className="sr-only" aria-live="off">
        {scene.summary}
      </p>

      <div className="mt-3 flex items-center justify-between gap-4">
        <p className="font-dm text-[12px] text-[var(--text-mid)]">Illustrative example. Sample data.</p>
        {!reduce && (
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-pressed={paused}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 font-dm text-[12px] text-[var(--text-mid)] transition-colors hover:border-white/25 hover:text-[var(--text-hi)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--mint)]"
          >
            {paused ? <Play size={12} /> : <Pause size={12} />}
            {paused ? 'Play' : 'Pause'}
          </button>
        )}
      </div>
    </div>
  )
}