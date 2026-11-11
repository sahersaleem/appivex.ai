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

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center"
      aria-hidden={hidden || undefined}
    >
      {items.map((item) => (
        <li
          key={item}
          className="flex shrink-0 items-center gap-3 px-6 font-syne text-[13px] font-semibold text-white/45 transition-colors hover:text-white"
        >
          <span
            aria-hidden
            className="h-[5px] w-[5px] rotate-45 bg-[#00D68F]"
          />
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function Ticker() {
  return (
    <div
      className="ticker group relative overflow-hidden border-y border-white/[0.06] bg-[#0D0D0D] py-4"
      aria-label="Our services"
      style={{
        maskImage:
          'linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)',
      }}
    >
      <div className="ticker-track flex w-max whitespace-nowrap">
        <Row />
        <Row hidden />
      </div>

      <style>{`
        .ticker-track {
          animation: ticker-scroll 40s linear infinite;
          will-change: transform;
        }
        .ticker:hover .ticker-track,
        .ticker:focus-within .ticker-track {
          animation-play-state: paused;
        }
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker-track { animation: none; }
        }
      `}</style>
    </div>
  )
}