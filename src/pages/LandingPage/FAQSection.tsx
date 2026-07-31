import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { FAQS } from './data'

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="section-pad" style={{ backgroundColor: 'var(--color-ground)' }}>
      <div className="inner">
        <div style={{ marginBottom: 48 }}>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              marginBottom: 12,
            }}
          >
            Questions
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 400, lineHeight: 1.2, margin: 0 }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div style={{ maxWidth: 720 }}>
          {FAQS.map(({ q, a }, i) => (
            <div key={q} style={{ borderBottom: '1px solid var(--color-border)' }}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '20px 0',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  gap: 16,
                }}
              >
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 400, color: 'var(--color-text)', lineHeight: 1.4 }}>
                  {q}
                </span>
                <span style={{ flexShrink: 0, color: 'var(--color-accent)', display: 'flex' }}>
                  {openIndex === i ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
                </span>
              </button>

              {openIndex === i && (
                <p style={{ padding: '0 0 20px', margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--color-muted)', fontWeight: 300 }}>
                  {a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
