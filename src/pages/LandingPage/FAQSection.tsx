// ─── src/pages/LandingPage/FAQSection.tsx ─────────────────────────────────────

import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

// ─── Data ─────────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: 'How does ProNail Complex work?',
    a: 'ProNail Complex is a Specialist-formulated mist spray containing extremely potent natural oils and vitamins. Unlike creams that sit on top of the nail, our micro-particles penetrate deep beneath the nail plate and skin to target the root cause of fungus and promote cellular repair.',
  },
  {
    q: 'How should I apply it?',
    a: 'For best results, spray ProNail Complex daily after your shower when your pores are open. Let it absorb for a few seconds, then put on clean cotton socks to lock in the nutrients and protect your feet.',
  },
  {
    q: 'Are the ingredients safe?',
    a: 'Yes, ProNail Complex is made with 100% natural, GMO-free ingredients. Every batch is manufactured in an FDA-registered and GMP-certified facility, and constantly tested for purity and toxin prevention.',
  },
  {
    q: 'What is your refund policy?',
    a: 'Every order is backed by an ironclad 60-Day 100% Money-Back Guarantee. If you are not completely satisfied with the results, you can return any bottle (even empty ones) for a full refund.',
  },
]

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
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 400,
              lineHeight: 1.2,
              margin: 0,
            }}
          >
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
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 15,
                    fontWeight: 400,
                    color: 'var(--color-text)',
                    lineHeight: 1.4,
                  }}
                >
                  {q}
                </span>
                <span
                  style={{
                    flexShrink: 0,
                    color: 'var(--color-accent)',
                    display: 'flex',
                  }}
                >
                  {openIndex === i ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
                </span>
              </button>

              {openIndex === i && (
                <p
                  style={{
                    padding: '0 0 20px',
                    margin: 0,
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: 'var(--color-muted)',
                    fontWeight: 300,
                  }}
                >
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