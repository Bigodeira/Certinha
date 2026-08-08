// ─── src/pages/LandingPage/Ingredients.tsx ────────────────────────────────────

import { useState, useEffect } from 'react'
import iconeAcid from '../../iconeacid.png';
import iconeAloe from '../../iconealoevera.png';
import iconetea from '../../teaicone.png';
import iconevitamin from '../../vitamine.png';

// ─── Data ─────────────────────────────────────────────────────────────────────

const INGREDIENTS = [
  {
    name: 'Tea Tree Oil',
    icon: iconetea,
    fn: 'Antiseptic powerhouse that stops fungal growth and purifies the nail.',
    tag: 'Antifungal',
  },
  {
    name: 'Aloe Vera',
    icon: iconeAloe,
    fn: 'Soothes irritated skin, relieves itching, and accelerates cell repair.',
    tag: 'Soothe',
  },
  {
    name: 'Undecylenic Acid',
    icon: iconeAcid,
    fn: 'An organic compound that disrupts and eliminates fungal cells.',
    tag: 'Defense',
  },
  {
    name: 'Vitamin E',
    icon: iconevitamin,
    fn: 'Antioxidant skin-repair vitamin that promotes healthy nail regrowth.',
    tag: 'Regenerate',
  },
]

// ─── Ingredients ──────────────────────────────────────────────────────────────

export default function Ingredients() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      id="ingredients"
      className="section-pad"
      style={{
        backgroundColor: 'var(--color-deep)',
        // Sobrescreve o padding vertical padrão da classe apenas no mobile,
        // reduzindo bastante a "moldura" azul acima e abaixo do conteúdo.
        paddingTop: isMobile ? 36 : undefined,
        paddingBottom: isMobile ? 36 : undefined,
      }}
    >
      <div className="inner">
        <div style={{ marginBottom: isMobile ? 24 : 48 }}>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              marginBottom: isMobile ? 6 : 12,
            }}
          >
            The Big Four
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: isMobile ? 'clamp(24px, 6.5vw, 30px)' : 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 300,
              lineHeight: 1.2,
              color: '#fff',
              margin: 0,
              maxWidth: 520,
            }}
          >
            Clinically Selected Botanicals & Active Minerals
          </h2>
        </div>

        {/* Ingredient Table */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 1,
            backgroundColor: 'rgba(255,255,255,0.06)',
          }}
        >
          {INGREDIENTS.map(({ name, fn, tag, icon }) => (
            <div
              key={name}
              style={{
                padding: isMobile ? '18px 20px' : '32px',
                backgroundColor: 'var(--color-deep)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: isMobile ? 10 : 20,
              }}
            >
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 9,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-accent)',
                    border: '1px solid rgba(90,173,167,0.3)',
                    padding: '3px 8px',
                    borderRadius: 100,
                    marginBottom: isMobile ? 8 : 16,
                  }}
                >
                  {tag}
                </span>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: isMobile ? 19 : 22,
                    fontWeight: 400,
                    color: '#fff',
                    marginBottom: isMobile ? 4 : 8,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '8px' : '12px' }}>
            {icon && (
              <img 
                src={icon} 
                alt="Ícone" 
                style={{ height: isMobile ? '24px' : '32px', width: 'auto', objectFit: 'contain' }} 
              />
            )}
            <span>{name}</span>
          </div>
                </div>
                <p
                  style={{
                    fontSize: isMobile ? 12 : 13,
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: isMobile ? 1.45 : 1.6,
                    margin: 0,
                    fontWeight: 300,
                  }}
                >
                  {fn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}