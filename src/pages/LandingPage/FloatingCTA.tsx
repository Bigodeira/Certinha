// ─── src/pages/LandingPage/FloatingCTA.tsx ────────────────────────────────────

import { FiArrowRight } from 'react-icons/fi'
import { scrollToPricing } from './utils'

// ─── Floating CTA (botão fixo que acompanha o scroll) ────────────────────────
// Visível apenas no desktop — no mobile, o botão hambúrguer no cabeçalho
// assume esse papel (evita dois CTAs flutuantes competindo por espaço).

export default function FloatingCTA() {
  return (
    <a
      href="#pricing"
      onClick={(e) => {
        e.preventDefault();
        scrollToPricing();
      }}
      rel="nofollow sponsored"
      className="hidden md:inline-flex"
      style={{
        position: 'fixed',
        top: 20,
        right: 20,
        zIndex: 999,
        alignItems: 'center',
        gap: 6,
        backgroundColor: 'var(--color-text)',
        color: '#fff',
        padding: '12px 22px',
        borderRadius: 100,
        fontSize: 13,
        fontWeight: 500,
        letterSpacing: '0.04em',
        textDecoration: 'none',
        boxShadow: '0 6px 18px rgba(0,0,0,0.2)',
        transition: 'background-color 0.2s',
      }}
      onMouseEnter={e => ((e.target as HTMLAnchorElement).style.backgroundColor = 'var(--color-accent)')}
      onMouseLeave={e => ((e.target as HTMLAnchorElement).style.backgroundColor = 'var(--color-text)')}
    >
      Claim Your Discount <FiArrowRight size={13} />
    </a>
  )
}