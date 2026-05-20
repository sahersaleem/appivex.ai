import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <section className="max-w-[1100px] mx-auto px-6 lg:px-14 py-32 text-center">
        <p className="font-syne text-[10px] font-bold uppercase tracking-[0.25em] text-electric mb-5">
          404 — Page not found
        </p>
        <h1 className="font-syne font-extrabold text-[clamp(2.5rem,5vw,4rem)] leading-[1.08] tracking-[-0.03em] text-ink mb-6">
          This page doesn't exist.
          <br />
          <em className="not-italic text-electric">Your idea should.</em>
        </h1>
        <p className="text-[16px] font-light text-ink-2 max-w-[400px] mx-auto leading-[1.8] mb-10">
          Looks like you took a wrong turn. Head back home or tell us what
          you're building.
        </p>
        <div className="flex items-center justify-center gap-5 flex-wrap">
          <Link
            href="/"
            className="font-syne text-[13px] font-bold uppercase tracking-[0.04em] bg-ink text-white px-8 py-3.5 rounded-lg hover:bg-electric transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/start"
            className="font-syne text-[13px] font-bold uppercase tracking-[0.04em] text-ink border-b border-ink-4 pb-px hover:text-electric hover:border-electric transition-colors"
          >
            Launch Your Project →
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
