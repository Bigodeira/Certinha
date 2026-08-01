import TopBar from './TopBar'
import FloatingCTA from './FloatingCTA'
import Hero from './Hero'
import Stats from './Stats'
import Benefits from './Benefits'
import Ingredients from './Ingredients'
import Pricing from './Pricing'
import FAQSection from './FAQSection'
import FinalCTA from './FinalCTA'
import ScientificReferences from './ScientificReferences'
import Footer from './Footer'

// ─── Page ─────────────────────────────────────────────────────────────────────
// Este arquivo substitui o antigo src/pages/LandingPage.tsx (agora uma pasta).
// App.tsx continua importando de './pages/LandingPage' sem precisar de nenhuma
// alteração — o bundler resolve automaticamente para este index.tsx.

export default function LandingPage() {
  return (
    <>
      <TopBar />
      <FloatingCTA />
      <main>
        <Hero />
        <Stats />
        <Benefits />
        <Ingredients />
        <Pricing />
        <FAQSection />
        <FinalCTA />
        <ScientificReferences />
      </main>
      <Footer />
    </>
  )
}
