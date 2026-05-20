const items = [
  'AI & Automation',
  'SaaS Development',
  'Voice AI Integration',
  'Premium Web Design',
  'Custom GPTs',
  'MVP to Scale',
  'Brand Identity',
  'Workflow Automation',
]

export default function Ticker() {
  const doubled = [...items, ...items]

  return (
    <div className="border-t border-b border-white/[0.06] bg-[#111111] py-3 overflow-hidden">
      <div className="flex gap-12 whitespace-nowrap animate-ticker w-max">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-syne text-[11px] font-bold uppercase tracking-[0.15em] text-white/40 flex-shrink-0"
          >
            <span className="text-[#00D68F] mr-1.5">◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}