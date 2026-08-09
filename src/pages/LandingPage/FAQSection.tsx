// ─── src/pages/LandingPage/FAQSection.tsx ─────────────────────────────────────

import { useState } from 'react'

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
  {
    q: '*Shipping policy',
    table: {
      headers: ['Delivery Address', 'Shipping Fee', 'Shipping Time'],
      rows: [
        ['United States', 'FREE', '5-7 working days'],
        ['Canada', '$15.95', '10-15 working days'],
        ['UK and Ireland', '$15.95', '10-15 working days'],
        ['Australia and New Zealand', '$15.95', '10-15 working days'],
      ],
    },
  },
]

const EASE = 'cubic-bezier(0.28, 0.11, 0.32, 1)'

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="section-pad" style={{ backgroundColor: 'var(--color-ground)' }}>
      <div className="inner">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(30px, 4vw, 48px)',
              fontWeight: 600,
              letterSpacing: '-0.015em',
              lineHeight: 1.08,
              margin: '0 0 12px',
            }}
          >
            Frequently Asked Questions
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 19,
              fontWeight: 400,
              color: 'var(--color-muted)',
              margin: 0,
              letterSpacing: '-0.005em',
            }}
          >
            Everything you need to know about ProNail Complex.
          </p>
        </div>

        <div style={{ maxWidth: 692, margin: '0 auto', borderTop: '1px solid var(--color-border)' }}>
          {FAQS.map(({ q, a, table }, i) => {
            const isOpen = openIndex === i
            const isHovered = hoveredIndex === i

            return (
              <div key={q} style={{ borderBottom: '1px solid var(--color-border)' }}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '22px 8px',
                    background: isHovered ? 'var(--color-hover, #f5f5f7)' : 'none',
                    border: 'none',
                    borderRadius: 12,
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: 20,
                    transition: `background-color 0.35s ${EASE}`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 19,
                      fontWeight: 500,
                      letterSpacing: '-0.01em',
                      color: 'var(--color-text)',
                      lineHeight: 1.35,
                    }}
                  >
                    {q}
                  </span>

                  {/* Plus / minus icon */}
                  <span
                    style={{
                      flexShrink: 0,
                      position: 'relative',
                      width: 24,
                      height: 24,
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: 14,
                        height: 1.6,
                        background: 'var(--color-accent)',
                        transform: `translate(-50%, -50%) rotate(${isOpen ? 180 : 0}deg)`,
                        transition: `transform 0.35s ${EASE}`,
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: 1.6,
                        height: 14,
                        background: 'var(--color-accent)',
                        transform: `translate(-50%, -50%) rotate(${isOpen ? 90 : 0}deg)`,
                        opacity: isOpen ? 0 : 1,
                        transition: `transform 0.35s ${EASE}, opacity 0.35s ${EASE}`,
                      }}
                    />
                  </span>
                </button>

                {/* Animated panel using the grid-template-rows trick for smooth height transitions */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: `grid-template-rows 0.45s ${EASE}`,
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    {table ? (
                      <div style={{ padding: '0 8px 24px' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
                          <thead>
                            <tr>
                              {table.headers.map((h) => (
                                <th
                                  key={h}
                                  style={{
                                    textAlign: 'left',
                                    fontWeight: 600,
                                    color: 'var(--color-text)',
                                    padding: '0 12px 10px 0',
                                    fontSize: 14,
                                  }}
                                >
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {table.rows.map((row) => (
                              <tr key={row[0]}>
                                {row.map((cell, ci) => (
                                  <td
                                    key={ci}
                                    style={{
                                      padding: '14px 12px 14px 0',
                                      borderTop: '1px solid var(--color-border)',
                                      color: ci === 0 ? 'var(--color-accent)' : 'var(--color-text)',
                                      verticalAlign: 'top',
                                    }}
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <p
                        style={{
                          padding: '0 8px 24px',
                          margin: 0,
                          maxWidth: 560,
                          fontSize: 15,
                          lineHeight: 1.55,
                          color: 'var(--color-muted)',
                          fontWeight: 400,
                          letterSpacing: '-0.003em',
                        }}
                      >
                        {a}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}