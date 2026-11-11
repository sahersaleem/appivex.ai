import type { ReactNode } from 'react'
import type { VisualKind } from '@/lib/projects'

const bar = 'rounded-sm bg-white/10'
const chip = 'rounded-full border border-white/15 px-2 py-0.5 text-[9px] text-white/60 font-dm'

function Window({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="absolute inset-0 flex p-4 sm:p-6">
      <div className="flex w-full flex-col overflow-hidden rounded-lg border border-white/10 bg-[#101010] transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="ml-2 truncate font-dm text-[10px] text-white/35">{label}</span>
        </div>
        <div className="flex-1 p-3 sm:p-4">{children}</div>
      </div>
    </div>
  )
}

function Call() {
  const heights = [30, 55, 80, 45, 90, 60, 35, 70, 50, 85, 40, 65, 30, 55, 75, 45]
  return (
    <Window label="Live call">
      <div className="flex h-full flex-col justify-between">
        <div className="flex h-14 items-center gap-1">
          {heights.map((h, i) => (
            <span key={i} className="w-1 flex-1 rounded-full bg-[#00D68F]/70" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="space-y-2">
          <div className={`${bar} h-2 w-4/5`} />
          <div className={`${bar} h-2 w-3/5`} />
          <div className="ml-auto h-2 w-2/3 rounded-sm bg-[#00D68F]/25" />
        </div>
        <div className="flex gap-2">
          <span className={chip}>Qualified</span>
          <span className={`${chip} border-[#00D68F]/40 text-[#00D68F]`}>Booked</span>
        </div>
      </div>
    </Window>
  )
}

function Flow() {
  return (
    <Window label="Workflow">
      <div className="flex h-full items-center justify-between gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex flex-1 items-center gap-2">
            <div className={`flex h-14 flex-1 flex-col justify-center gap-1.5 rounded-md border px-2.5 ${i === 1 ? 'border-[#00D68F]/50' : 'border-white/15'}`}>
              <div className={`${bar} h-1.5 w-3/4`} />
              <div className={`${bar} h-1.5 w-1/2`} />
            </div>
            {i < 2 && <span className="h-px w-3 bg-white/25 sm:w-5" />}
          </div>
        ))}
      </div>
    </Window>
  )
}

function Chat() {
  return (
    <Window label="Assistant">
      <div className="flex h-full flex-col justify-end gap-2.5">
        <div className="ml-auto h-6 w-3/5 rounded-lg rounded-br-sm bg-white/10" />
        <div className="w-4/5 space-y-1.5 rounded-lg rounded-bl-sm border border-white/10 p-2.5">
          <div className={`${bar} h-1.5 w-full`} />
          <div className={`${bar} h-1.5 w-5/6`} />
          <span className={`${chip} mt-1 inline-block border-[#00D68F]/40 text-[#00D68F]`}>Source</span>
        </div>
      </div>
    </Window>
  )
}

function Dashboard() {
  const h = [40, 65, 50, 80, 60, 90, 70]
  return (
    <Window label="Dashboard">
      <div className="flex h-full gap-3">
        <div className="hidden w-1/5 space-y-2 sm:block">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={`${bar} h-2 ${i === 0 ? '!bg-[#00D68F]/40' : ''}`} />
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <div className="flex flex-1 items-end gap-1.5">
            {h.map((v, i) => (
              <span key={i} className="flex-1 rounded-t-sm bg-white/15" style={{ height: `${v}%` }} />
            ))}
          </div>
          <div className="space-y-1.5">
            <div className={`${bar} h-1.5 w-full`} />
            <div className={`${bar} h-1.5 w-4/5`} />
          </div>
        </div>
      </div>
    </Window>
  )
}

function Agent() {
  return (
    <Window label="Pipeline">
      <div className="flex h-full flex-col justify-center gap-2.5">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="h-5 w-5 shrink-0 rounded-full bg-white/10" />
            <div className={`${bar} h-2 flex-1`} />
            <span className={`${chip} ${i === 0 ? 'border-[#00D68F]/40 text-[#00D68F]' : ''}`}>{i === 0 ? 'Active' : 'Queued'}</span>
          </div>
        ))}
      </div>
    </Window>
  )
}

function Integration() {
  return (
    <Window label="Sync">
      <div className="flex h-full items-center justify-center gap-3">
        <div className="flex h-12 w-16 items-center justify-center rounded-md border border-white/15 font-dm text-[10px] text-white/50">ERP</div>
        <span className="h-px w-6 bg-white/25" />
        <div className="flex h-14 w-20 items-center justify-center rounded-md border border-[#00D68F]/50 font-dm text-[10px] text-[#00D68F]">Dashboard</div>
        <span className="h-px w-6 bg-white/25" />
        <div className="flex h-12 w-16 items-center justify-center rounded-md border border-white/15 font-dm text-[10px] text-white/50">CRM</div>
      </div>
    </Window>
  )
}

const map: Record<VisualKind, () => ReactNode> = {
  call: Call,
  flow: Flow,
  chat: Chat,
  dashboard: Dashboard,
  agent: Agent,
  integration: Integration,
}

export function ProjectVisual({ kind, className = '' }: { kind: VisualKind; className?: string }) {
  const V = map[kind]
  return (
    <div
      aria-hidden="true"
      className={`relative aspect-[16/10] overflow-hidden bg-[#0B0B0B] ${className}`}
      style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '18px 18px' }}
    >
      <V />
    </div>
  )
}