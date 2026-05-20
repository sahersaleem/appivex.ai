import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import Advantage from '@/components/Advantage'
import Services from '@/components/Services'
import Global from '@/components/Global'
import Process from '@/components/Process'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import PortfolioPreview from '@/components/PortfolioPreview'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Ticker />
      <Advantage />
      <Services />
      <PortfolioPreview/>
      <Global />
      <Process />
      <CTA />
      <Footer />
    </main>
  )
}
