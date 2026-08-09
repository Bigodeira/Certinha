// ─── src/pages/LandingPage/index.tsx ──────────────────────────────────────────
import TopBar from './TopBar'
import Hero from './Hero'
import Stats from './Stats'
import Benefits from './Benefits'
import Ingredients from './Ingredients'
import Pricing from './Pricing'
import PricingBottom from './PricingBottom'
import FAQSection from './FAQSection'
import FinalCTA from './FinalCTA'
import FloatingCTA from './FloatingCTA'
import ScientificReferences from './ScientificReferences'
import Footer from './Footer'

export default function LandingPage() {
  return (
    <>
      <TopBar />
      <FloatingCTA />
      <main>
        <Hero />
        <Stats />
        <Ingredients />
        <Benefits />
        <FinalCTA />
        <Pricing />
        <FAQSection />
        <PricingBottom />
        <ScientificReferences />
      </main>
      <Footer />
    </>
  )
}
