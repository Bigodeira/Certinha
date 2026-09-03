// ─── src/pages/LandingPage/index.tsx ──────────────────────────────────────────
import TopBar from './TopBar'
import Hero from './Hero'
import Stats from './Stats'
import Benefits from './Benefits'
import Ingredients from './Ingredients'
import Pricing from './Pricing'
import FAQSection from './FAQSection'
import FinalCTA from './FinalCTA'
import ScientificReferences from './ScientificReferences'
import Footer from './Footer'

export default function LandingPage() {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <Stats />
        <Ingredients />
        <Benefits />
        <FinalCTA />
        <Pricing />
        <FAQSection />
        <Pricing bottomOnly />
        <ScientificReferences />
      </main>
      <Footer />
    </>
  )
}
