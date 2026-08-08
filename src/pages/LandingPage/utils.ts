// ─── src/pages/LandingPage/utils.ts ───────────────────────────────────────────

// ─── Scroll até a oferta principal (Best Value) ──────────────────────────────
// No mobile, os botões levam direto pro card "Best Value" já centralizado na
// tela. No desktop, continuam levando pro topo da seção de preços (todos os
// cards já aparecem lado a lado).
export function scrollToPricing() {
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    const highlightCard = document.getElementById('pricing-highlight');
    if (highlightCard) {
      highlightCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
  }
  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
}