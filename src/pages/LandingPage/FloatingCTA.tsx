import { FiArrowRight } from 'react-icons/fi'

// ─── Floating CTA (botão fixo que acompanha o scroll) ────────────────────────
// Escondido em telas pequenas via .floating-cta (ver index.css) — no mobile o
// CTA já visível no Hero é suficiente e evita sobrepor conteúdo.

export default function FloatingCTA() {
  return (
    <a
      href="#pricing"
      className="floating-cta"
      onClick={e => {
        e.preventDefault()
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
      }}
      style={{
        position: 'fixed',
        top: 20,
        right: 20,
        zIndex: 999,
        display: 'inline-flex',
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
      onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-accent)')}
      onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--color-text)')}
    >
      Claim Your Discount <FiArrowRight size={13} />
    </a>
  )
}
