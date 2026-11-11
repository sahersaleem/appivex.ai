/**
 * Replaces Advantage.tsx. Server component: no client JS, no scroll animation.
 * Suggested order on the page: Hero → Proof → Services → HowWeWork.
 *
 * Check before launch: the delivery times below come from your old copy
 * (voice agents in 1 to 3 weeks, full automation in under a month).
 * I added "chatbots" next to voice agents. Remove it if it isn't true.
 */

const points = [
  {
    title: 'You work with the people who build',
    body: 'No account managers and no handoff chains. The engineers building your system are on your calls, so every decision is made by someone who knows the technical detail.',
  },
  {
    title: 'Live in weeks, not quarters',
    body: 'We deploy working chatbots and voice agents in 1 to 3 weeks, and full automation systems in under a month. You see measurable results early, and can adjust before the project is far along.',
  },
  {
    title: 'Built around the tools you already use',
    body: 'We connect to your ERP, CRM and design tools, and build custom pieces such as portals, pipelines and agents where nothing off the shelf fits.',
  },
]

export default function HowWeWork() {
  return (
    <section className="bg-[#0A0A0A] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div className="min-w-0">
          <h2 className="mb-5 max-w-[460px] font-syne text-[clamp(1.75rem,3.2vw,2.6rem)] font-bold leading-[1.1] tracking-[-0.025em] text-[var(--text-hi)]">
            A small team that stays accountable
          </h2>
          <p className="max-w-[420px] font-dm text-[16px] font-light leading-[1.75] text-[var(--text-mid)]">
            We’re a focused group of engineers and developers who move fast and
            measure our work by your results.
          </p>
        </div>

        <ul className="min-w-0">
          {points.map((p) => (
            <li key={p.title} className="border-t border-white/10 py-7 first:border-t-0 first:pt-0 lg:first:border-t lg:first:pt-7">
              <h3 className="mb-2 font-syne text-[18px] font-bold leading-snug text-[var(--text-hi)]">
                {p.title}
              </h3>
              <p className="max-w-[560px] font-dm text-[15px] font-light leading-[1.75] text-[var(--text-mid)]">
                {p.body}
              </p>
            </li>
          ))}
          <li aria-hidden className="border-t border-white/10" />
        </ul>
      </div>
    </section>
  )
}