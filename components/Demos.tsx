'use client'

import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Check } from 'lucide-react'

/**
 * Every demo is a pure function of `t` (ms since the scene started).
 * Pause, resume, tab switching and the reduced-motion "finished state"
 * all come for free: the parent only changes `t`.
 * Content is budgeted to ~300px tall so it fits the stage on a laptop screen.
 */
export type DemoProps = { t: number }

const at = (t: number, ms: number) => t >= ms
const easeOut = (x: number) => 1 - Math.pow(1 - Math.min(1, Math.max(0, x)), 3)

/* ── Shared building blocks ─────────────────────────────────────── */

function Frame({ title, status, children }: { title: string; status: string; children: ReactNode }) {
  return (
    <div className="flex h-full flex-col font-dm">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <span className="truncate text-[13px] font-medium text-[var(--text-hi)]">{title}</span>
        <span className="flex shrink-0 items-center gap-1.5 pl-3 text-[12px] text-[var(--text-mid)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--mint)]" />
          {status}
        </span>
      </div>
      <div className="min-h-0 flex-1 overflow-hidden p-4">{children}</div>
    </div>
  )
}

/** Fades and lifts in once, when it first mounts. */
function In({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** Spinner that resolves into a tick. */
function Step({ done, children }: { done: boolean; children: ReactNode }) {
  return (
    <span className="flex items-center gap-2">
      {done ? (
        <Check className="h-3 w-3 shrink-0 text-[var(--mint)]" />
      ) : (
        <span className="h-3 w-3 shrink-0 animate-spin rounded-full border-2 border-white/20 border-t-[var(--mint)]" />
      )}
      <span className="min-w-0 truncate">{children}</span>
    </span>
  )
}

const Avatar = ({ children }: { children: ReactNode }) => (
  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-[12px] font-semibold text-[var(--text-hi)]">
    {children}
  </span>
)

/* ── 1. AI chatbot: question → knowledge search → streamed answer ── */

const ANSWER = 'Yes, BR-4410 is in stock (320 units). For 500, the remaining 180 are made to order with a 9-day lead time.'
const sources = [
  { label: 'Product catalogue · BR-4410', at: 1900 },
  { label: 'Live stock · ERP', at: 2400 },
  { label: 'Lead-time policy', at: 2900 },
]

export function ChatbotDemo({ t }: DemoProps) {
  const chars = Math.max(0, Math.min(ANSWER.length, Math.floor((t - 3300) / 24)))
  return (
    <Frame title="Northwind Support" status="Online">
      <div className="flex h-full flex-col justify-end gap-2.5 text-[13.5px] leading-snug [mask-image:linear-gradient(to_bottom,transparent,black_24px)]">
        {at(t, 400) && (
          <In className="max-w-[90%] self-end rounded-2xl rounded-br-md bg-[var(--mint)] px-3.5 py-2.5 text-[#0A0A0A]">
            Do you stock the BR-4410 bracket? I need 500 for December.
          </In>
        )}

        {at(t, 1300) && (
          <In className="w-full max-w-[92%] self-start rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5">
            <p className="mb-1.5 text-[11.5px] text-[var(--text-mid)]">Searching your knowledge base</p>
            <ul className="space-y-1 text-[12.5px] text-[var(--text-hi)]">
              {sources.map((s) => (
                <li key={s.label}>
                  <Step done={t >= s.at}>{s.label}</Step>
                </li>
              ))}
            </ul>
          </In>
        )}

        {at(t, 3300) && (
          <div className="max-w-[90%] self-start rounded-2xl rounded-bl-md bg-white/[0.06] px-3.5 py-2.5 text-[var(--text-hi)]">
            {ANSWER.slice(0, chars)}
            {chars < ANSWER.length && (
              <span className="ml-0.5 inline-block h-3.5 w-[2px] translate-y-0.5 animate-pulse bg-[var(--mint)]" />
            )}
          </div>
        )}

        {at(t, 7000) && (
          <In className="flex gap-2 text-[12.5px]">
            {['Get a quote', 'Talk to sales'].map((c) => (
              <span
                key={c}
                className="cursor-default rounded-full border border-white/15 px-3 py-1.5 text-[var(--text-hi)] transition-colors hover:bg-white/10"
              >
                {c}
              </span>
            ))}
          </In>
        )}
      </div>
    </Frame>
  )
}

/* ── 2. CRM: new lead → qualified → assigned → follow-up queued ──── */

const checks = [
  { label: '250 employees', at: 2000 },
  { label: 'Manufacturing', at: 2400 },
  { label: 'Budget confirmed', at: 2800 },
  { label: 'North region', at: 3200 },
]

export function CrmDemo({ t }: DemoProps) {
  const score = Math.round(86 * easeOut((t - 3500) / 900))
  const status = t < 1800 ? 'New' : t < 3500 ? 'Qualifying…' : t < 5000 ? 'Qualified' : 'Assigned'
  const good = t >= 3500
  return (
    <Frame title="Lead inbox" status="Automations on">
      <div className="flex h-full flex-col gap-2.5">
        {at(t, 300) && (
          <In className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <Avatar>SC</Avatar>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[14px] font-medium text-[var(--text-hi)]">Sarah Chen · Meridian Packaging</p>
              <p className="truncate text-[12.5px] text-[var(--text-mid)]">Website form · 5,000 units a month</p>
            </div>
            <span
              className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11.5px] transition-colors duration-500 ${
                good ? 'bg-[var(--mint)]/15 text-[var(--mint)]' : 'bg-white/[0.07] text-[var(--text-mid)]'
              }`}
            >
              {status}
            </span>
          </In>
        )}

        {at(t, 1800) && (
          <In className="grid grid-cols-2 gap-x-3 gap-y-1.5 px-1 pt-1 text-[12.5px] text-[var(--text-hi)]">
            {checks
              .filter((c) => at(t, c.at - 400))
              .map((c) => (
                <Step key={c.label} done={t >= c.at}>
                  {c.label}
                </Step>
              ))}
          </In>
        )}

        {at(t, 3500) && (
          <In className="flex items-center gap-3 px-1 text-[12.5px] text-[var(--text-mid)]">
            <span>Lead score</span>
            <span className="h-1.5 flex-1 rounded-full bg-white/10">
              <span className="block h-full rounded-full bg-[var(--mint)]" style={{ width: `${score}%` }} />
            </span>
            <span className="w-12 text-right tabular-nums text-[var(--text-hi)]">{score}/100</span>
          </In>
        )}

        {at(t, 5000) && (
          <In className="flex items-center gap-3 rounded-xl border border-[var(--mint)]/30 bg-[var(--mint)]/10 p-3">
            <Avatar>PM</Avatar>
            <div className="min-w-0">
              <p className="truncate text-[14px] font-medium text-[var(--text-hi)]">Assigned to Priya M.</p>
              <p className="truncate text-[12.5px] text-[var(--text-mid)]">North region · notified in Slack</p>
            </div>
          </In>
        )}

        <ul className="mt-auto space-y-1.5 px-1 text-[12.5px] text-[var(--text-mid)]">
          {at(t, 5800) && (
            <li><In><Step done>Follow-up email scheduled for 4:00 PM</Step></In></li>
          )}
          {at(t, 6600) && (
            <li><In><Step done>Call reminder set for Friday</Step></In></li>
          )}
        </ul>
      </div>
    </Frame>
  )
}

/* ── 3. Voice agent: ring → live call → intent → calendar → booked ── */

const lines = [
  { who: 'Caller', from: 1400, to: 3400, text: 'Our packaging line keeps jamming. Can someone come and look at it?' },
  { who: 'Voice agent', from: 3600, to: 5400, text: 'I can book a technician. Would Thursday at 10:30 work for you?' },
  { who: 'Caller', from: 5600, to: 6200, text: 'Yes, Thursday works.' },
  { who: 'Voice agent', from: 6400, to: 7600, text: 'Booked. I’m sending a confirmation by text now.' },
]
const BARS = 30

export function VoiceDemo({ t }: DemoProps) {
  const connected = t >= 1200
  const secs = Math.min(9, Math.max(0, Math.floor((t - 1200) / 1000)))
  const active = lines.find((l) => t >= l.from && t < l.to)
  const visible = lines.filter((l) => t >= l.from).slice(-2)
  const booked = at(t, 7700)

  return (
    <Frame title="Voice agent" status={connected ? 'Live call' : 'Incoming call'}>
      <div className="flex h-full flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className="relative">
            <Avatar>TR</Avatar>
            {!connected && (
              <span className="absolute inset-0 animate-ping rounded-full border border-[var(--mint)]/60" />
            )}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[14px] font-medium text-[var(--text-hi)]">Tom Reyes</p>
            <p className="truncate text-[12.5px] text-[var(--text-mid)]">Meridian Packaging · Inbound</p>
          </div>
          <span className="shrink-0 text-[13px] tabular-nums text-[var(--text-mid)]">
            {connected ? `0:0${secs}` : 'Ringing…'}
          </span>
        </div>

        <div className="flex h-12 items-center justify-center gap-[3px]" aria-hidden>
          {Array.from({ length: BARS }).map((_, i) => {
            const level = active
              ? Math.abs(Math.sin(t / 110 + i * 0.8)) * (0.55 + 0.45 * Math.sin(i * 0.5 + t / 420))
              : 0
            return (
              <span
                key={i}
                className={`w-[3px] rounded-full transition-[height] duration-100 ${
                  active?.who === 'Voice agent' ? 'bg-[var(--mint)]' : 'bg-white/45'
                }`}
                style={{ height: `${4 + Math.abs(level) * 40}px` }}
              />
            )
          })}
        </div>

        <div className="flex h-[104px] flex-col justify-end gap-2 overflow-hidden text-[13px] leading-snug [mask-image:linear-gradient(to_bottom,transparent,black_18px)]">
          {visible.map((l) => (
            <In key={l.from}>
              <p className="text-[11.5px] text-[var(--text-mid)]">{l.who}</p>
              <p className="text-[var(--text-hi)]">{l.text}</p>
            </In>
          ))}
        </div>

        <div className="mt-auto h-[72px]">
          {booked ? (
            <In className="flex items-center gap-3 rounded-xl border border-[var(--mint)]/30 bg-[var(--mint)]/10 p-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--mint)] text-[#0A0A0A]">
                <Check className="h-3.5 w-3.5" />
              </span>
              <div className="min-w-0">
                <p className="text-[14px] font-medium text-[var(--text-hi)]">Appointment booked</p>
                <p className="truncate text-[12.5px] text-[var(--text-mid)]">Thu 12 Nov · 10:30 AM · SMS confirmation sent</p>
              </div>
            </In>
          ) : (
            <ul className="space-y-1.5 px-1 pt-1 text-[12.5px] text-[var(--text-hi)]">
              {at(t, 3600) && (
                <li><In><Step done={t >= 3900}>Intent: book a site visit</Step></In></li>
              )}
              {at(t, 5000) && (
                <li>
                  <In>
                    <Step done={t >= 5900}>
                      {t >= 5900 ? 'Thu 10:30 is free (Imran K.)' : 'Checking technician calendar…'}
                    </Step>
                  </In>
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
    </Frame>
  )
}

/* ── 4. Portal: live operations dashboard with an incoming order ─── */

const bars = [42, 58, 50, 72, 64, 86, 70]
const NEW_AT = 5600
const SHIP_AT = 4000
const o1 = { id: '48213', who: 'Northwind Supply', amt: '$4,280' }
const o2 = { id: '48214', who: 'Apex Tools', amt: '$1,920' }
const o3 = { id: '48215', who: 'Meridian Packaging', amt: '$6,150' }
const o4 = { id: '48216', who: 'Harbor Foods', amt: '$2,740' }

export function PortalDemo({ t }: DemoProps) {
  const k = (target: number, start: number) => target * easeOut((t - start) / 1200)
  const arrived = at(t, NEW_AT)
  const list = arrived ? [o4, o1, o2] : [o1, o2, o3]
  const statusOf = (id: string) =>
    id === '48216' ? 'New' : id === '48213' && at(t, SHIP_AT) ? 'Shipped' : id === '48214' ? 'Packed' : 'Processing'

  return (
    <Frame title="Operations overview" status="Live data">
      <div className="flex h-full flex-col gap-3">
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: 'Open orders', value: String(Math.round(k(128, 300)) + (arrived ? 1 : 0)) },
            { label: 'On-time delivery', value: `${k(96.4, 450).toFixed(1)}%` },
            { label: 'Revenue, Nov', value: `$${Math.round(k(214, 600))}k` },
          ].map((m) => (
            <div key={m.label} className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5">
              <p className="truncate text-[11.5px] text-[var(--text-mid)]">{m.label}</p>
              <p className="font-syne text-[18px] font-semibold tabular-nums leading-tight text-[var(--text-hi)] sm:text-[20px]">
                {m.value}
              </p>
            </div>
          ))}
        </div>

        <div>
          <p className="mb-1 text-[11.5px] text-[var(--text-mid)]">Orders this week</p>
          <div className="flex h-[44px] items-end gap-1.5" aria-hidden>
            {bars.map((b, i) => {
              const last = i === bars.length - 1
              const h = (b + (last && arrived ? 10 : 0)) * easeOut((t - 900 - i * 120) / 600)
              return (
                <div
                  key={i}
                  className={`flex-1 rounded-sm transition-[height] duration-300 ${last ? 'bg-[var(--mint)]' : 'bg-white/15'}`}
                  style={{ height: `${Math.max(3, h)}%` }}
                />
              )
            })}
          </div>
        </div>

        <div className="text-[13px]">
          <div className="grid grid-cols-[52px_1fr_auto] gap-3 border-b border-white/10 px-1 pb-1.5 text-[11.5px] text-[var(--text-mid)] sm:grid-cols-[52px_1fr_60px_auto]">
            <span>Order</span>
            <span>Customer</span>
            <span className="hidden text-right sm:block">Value</span>
            <span className="w-[84px] text-right">Status</span>
          </div>
          {list.map((o, i) =>
            at(t, 2200 + i * 300) ? (
              <In key={o.id}>
                <div
                  className={`grid grid-cols-[52px_1fr_auto] items-center gap-3 border-b border-white/[0.06] px-1 py-1.5 transition-colors duration-700 sm:grid-cols-[52px_1fr_60px_auto] ${
                    o.id === '48216' && t < NEW_AT + 1800 ? 'bg-[var(--mint)]/10' : ''
                  }`}
                >
                  <span className="tabular-nums text-[var(--text-mid)]">{o.id}</span>
                  <span className="truncate text-[var(--text-hi)]">{o.who}</span>
                  <span className="hidden text-right tabular-nums text-[var(--text-hi)] sm:block">{o.amt}</span>
                  <span
                    className={`w-[84px] rounded-full px-2 py-0.5 text-center text-[11.5px] transition-colors duration-500 ${
                      statusOf(o.id) === 'Shipped' || statusOf(o.id) === 'New'
                        ? 'bg-[var(--mint)]/15 text-[var(--mint)]'
                        : 'bg-white/[0.07] text-[var(--text-mid)]'
                    }`}
                  >
                    {statusOf(o.id)}
                  </span>
                </div>
              </In>
            ) : null,
          )}
        </div>

        <div className="mt-auto h-5">
          {at(t, SHIP_AT) && (
            <In key={arrived ? 'new' : 'ship'} className="flex items-center gap-2 text-[12.5px] text-[var(--text-mid)]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--mint)]" />
              <span className="truncate">
                {arrived ? 'New order 48216 received from Harbor Foods' : 'Order 48213 shipped, customer notified'}
              </span>
            </In>
          )}
        </div>
      </div>
    </Frame>
  )
}