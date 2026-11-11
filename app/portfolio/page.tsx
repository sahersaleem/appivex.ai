import type { Metadata } from 'next'
import PortfolioGrid from '@/components/Portfoliogrid'
import Navbar from '@/components/Navbar'
import { FinalCTA } from '../about/page'

export const metadata: Metadata = {
  title: 'Selected Work | APPIVEX',
  description:
    'Systems, applications and intelligent workflows APPIVEX has engineered to solve operational challenges for businesses.',
  openGraph: {
    title: 'Selected Work | APPIVEX',
    description: 'Engineering intelligent systems for real business operations.',
  },
}

export default function PortfolioPage() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-[#0A0A0A] px-6 pb-24 pt-36 lg:px-14">
        <div className="mx-auto max-w-[1160px]">
          <header className="mb-14 max-w-[760px]">
            <h1 className="mb-5 font-syne text-[clamp(2.2rem,4.5vw,3.6rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-white">
              Selected Work.
              <span className="block text-white/55">Engineering intelligent systems for real business operations.</span>
            </h1>
            <p className="max-w-[620px] font-dm text-[16px] leading-[1.7] text-white/65">
              Explore the systems, applications and intelligent workflows we&rsquo;ve engineered to solve operational
              challenges and help businesses scale.
            </p>
          </header>
          <PortfolioGrid />
        </div>

      </main>
      <FinalCTA />
    </div>
  )
}