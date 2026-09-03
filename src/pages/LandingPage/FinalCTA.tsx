// ─── src/pages/LandingPage/FinalCTA.tsx ───────────────────────────────────────

import { useState, useEffect } from 'react'
import bonus1 from '../../bonus1.png'
import bonus2 from '../../bonus2.png'
import bonus3 from '../../bonus3.png'

// ─── Data ─────────────────────────────────────────────────────────────────────

const BONUSES = [
  {
    img: bonus1,
    label: 'Bonus #1',
    title: 'The Skin Fix Files: Tips and Tricks for Defeating Eczema, Psoriasis, and Other Skin Conditions',
    retail: '$55',
    desc: "Inside you'll discover how you can address common skin conditions like psoriasis or eczema, faster and easier than you ever thought possible.",
  },
  {
    img: bonus2,
    label: 'Bonus #2',
    title: 'Clear Steps: The Lazy Protocol For Rapid Nail Growth and Healthy Feet After Fungus Recovery',
    retail: '$54',
    desc: "Inside this guide you'll get the most definitive and easy-to-follow plan for quick nail growth and skin regeneration.",
  },
  {
    img: bonus3,
    label: 'Bonus #3',
    title: 'The Mouth-to-Gut Cleanse Plan: Science-Backed Detox for Your Entire System',
    retail: '$54',
    desc: 'Discover 3 simple at-home breathing exercises that can reduce inflammation in the digestive tract and rapidly improve overall mental and physical wellbeing.',
  },
]

// ─── Final CTA ────────────────────────────────────────────────────────────────

export default function FinalCTA() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(max-width: 768px)').matches;
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      aria-label="Purchase call to action"
      style={{
        backgroundColor: '#5B9DA1',
        padding: isMobile ? '28px 20px 40px' : '80px 24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="inner" style={{ position: 'relative', maxWidth: '1080px', margin: '0 auto' }}>

        <h2 style={{
          fontFamily: 'serif',
          fontSize: isMobile ? '24px' : 'clamp(30px, 3vw, 38px)',
          fontWeight: 700,
          lineHeight: isMobile ? 1.28 : 1.25,
          color: '#ffffff',
          margin: isMobile ? '0 0 22px' : '0 0 32px',
        }}>
          Order 6 Bottles and Get <u>3 FREE Bonuses!</u>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, minmax(0, 1fr))', gap: isMobile ? 16 : 20, maxWidth: isMobile ? 440 : 1080, margin: '0 auto', alignItems: 'stretch' }}>
          {BONUSES.map(({ img, label, title, retail, desc }) => (
            <article
              key={label}
              style={{
                position: 'relative',
                borderRadius: isMobile ? 20 : 24,
                background: '#ffffff',
                boxShadow: isMobile
                  ? '0 1px 1px rgba(255,255,255,0.6) inset, 0 18px 36px -16px rgba(0,0,0,0.45), 0 0 30px rgba(93,202,165,0.08)'
                  : '0 1px 1px rgba(255,255,255,0.6) inset, 0 24px 48px -18px rgba(0,0,0,0.45), 0 0 40px rgba(93,202,165,0.08)',
                overflow: 'hidden',
                textAlign: 'center',
                padding: '8px',
                isolation: 'isolate',
                transform: 'translateZ(0)',
                WebkitMaskImage: '-webkit-radial-gradient(white, black)',
              }}
            >
              <>
                  <img
                    src={img}
                    width={1380}
                    height={997}
                    loading="lazy"
                    decoding="async"
                    alt={title}
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      borderRadius: '14px 14px 0 0',
                    }}
                  />

                  <div
                    style={{
                      background: '#1a1a1a',
                      padding: isMobile ? '14px 20px 16px' : '14px 18px 16px',
                    }}
                  >
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: '#f4c531',
                        marginBottom: 8,
                      }}
                    >
                      {label}
                    </div>
                    <div
                      style={{
                        fontSize: 15.5,
                        fontWeight: 700,
                        color: '#ffffff',
                        lineHeight: 1.35,
                      }}
                    >
                      {title}
                    </div>
                  </div>

                  <div style={{ padding: isMobile ? '18px 20px 22px' : '20px 22px 24px' }}>
                    <div style={{ fontSize: 17, fontWeight: 700, color: '#111111' }}>
                      Retail Price - {retail}{' '}
                      <span style={{ color: 'var(--color-accent-dark, #0E5C55)', fontWeight: 800 }}>
                        Today: FREE
                      </span>
                    </div>
                    <p style={{ fontSize: isMobile ? 13 : 14, lineHeight: 1.6, color: '#5b5f5e', fontWeight: 400, margin: '12px 0 0' }}>
                      {desc}
                    </p>
                  </div>
              </>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
