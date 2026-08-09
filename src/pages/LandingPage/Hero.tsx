// ─── src/pages/LandingPage/Hero.tsx ───────────────────────────────────────────
import { useState, useEffect } from 'react'
import { FiChevronDown, FiArrowRight } from 'react-icons/fi'
import { scrollToPricing } from './utils'
import tarjaFda from '../../tarjafda.png'

// ─── Hero ─────────────────────────────────────────────────────────────────────

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      aria-label="Hero"
      style={{
        minHeight: isMobile ? 'auto' : '88vh',
        background:
          'radial-gradient(ellipse 80% 60% at 85% 90%, rgba(90,173,167,0.06) 0%, transparent 65%), var(--color-ground)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: 'linear-gradient(90deg, var(--color-accent), var(--color-nude))',
        }}
      />

      <div className="inner" style={{ padding: isMobile ? '0px 20px 10px 20px' : '60px 24px' }}>
        {/* Eyebrow — oculto no mobile, mantido no desktop */}
        {!isMobile && (
          <div
            className="anim-0"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 24,
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: 32,
                height: 1,
                backgroundColor: 'var(--color-accent)',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
              }}
            >
              Advanced Nail Formula
            </span>
          </div>
        )}

        {/* ═══════════════ MOBILE: Imagem → Texto → Selos ═══════════════ */}
        {isMobile ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            {/* 1º: Imagem do Produto */}
            <img
              src="/pronail1.png.png"
              alt="Produto Pronail"
              style={{
                display: 'block',
                margin: '0 auto',
                width: '100%',
                maxWidth: 430,
                height: 'auto',
                objectFit: 'contain',
                marginBottom: 12,
                transform: 'translateX(-15px)',
              }}
            />

            {/* 2º: Bloco de descrição — estilo "Apple glow" */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: 440,
                margin: '4px auto 24px auto',
                padding: '8px 0 0 0',
              }}
            >
              {/* Auras de luz ambiente */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  zIndex: 0,
                  width: 220,
                  height: 220,
                  top: -60,
                  left: -30,
                  borderRadius: '50%',
                  filter: 'blur(38px)',
                  pointerEvents: 'none',
                  background: 'radial-gradient(circle, rgba(93,202,165,0.55) 0%, rgba(93,202,165,0) 70%)',
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  zIndex: 0,
                  width: 200,
                  height: 200,
                  bottom: -50,
                  right: -30,
                  borderRadius: '50%',
                  filter: 'blur(38px)',
                  pointerEvents: 'none',
                  background: 'radial-gradient(circle, rgba(120,170,255,0.40) 0%, rgba(120,170,255,0) 70%)',
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  zIndex: 0,
                  width: 160,
                  height: 160,
                  top: '30%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  borderRadius: '50%',
                  filter: 'blur(38px)',
                  pointerEvents: 'none',
                  opacity: 0.6,
                  background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
                }}
              />

              {/* Card de vidro (glassmorphism) */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  padding: '26px 24px 28px 24px',
                  borderRadius: 26,
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.68) 0%, rgba(255,255,255,0.42) 100%)',
                  backdropFilter: 'blur(18px) saturate(160%)',
                  WebkitBackdropFilter: 'blur(18px) saturate(160%)',
                  border: '1px solid rgba(255,255,255,0.55)',
                  boxShadow:
                    '0 1px 1px rgba(255,255,255,0.6) inset, 0 24px 48px -12px rgba(14,28,42,0.18), 0 0 60px rgba(93,202,165,0.22)',
                }}
              >
                {/* Linha de luz fininha no topo (specular highlight) */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '14%',
                    right: '14%',
                    height: 1,
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)',
                  }}
                />

                <span
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    fontSize: 11,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    color: 'var(--color-accent-dark, #0E5C55)',
                    opacity: 0.75,
                    marginBottom: 10,
                  }}
                >
                  Pronail Complex
                </span>

                <p
                  style={{
                    fontSize: 18.5,
                    lineHeight: 1.55,
                    letterSpacing: '-0.01em',
                    color: '#111111',
                    fontWeight: 400,
                    textAlign: 'center',
                    margin: 0,
                  }}
                >
                  A clinically backed, Specialist Formulated micro particle mist spray designed to target tough fungus, nourish nail beds, and repair dry skin. Powered by premium botanical oils and active nutrients.{' '}
                  <strong
                    style={{
                      display: 'block',
                      marginTop: 10,
                      fontSize: 19.5,
                      letterSpacing: '-0.015em',
                      fontWeight: 700,
                      background: 'linear-gradient(90deg, #0E5C55, #17877D)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '0 0 30px rgba(23,135,125,0.25)',
                    }}
                  >
                    The uniquely formulated mist spray that supports healthy toenails.
                  </strong>
                </p>
              </div>
            </div>

            {/* 3º: Selos de qualidade — no lugar do botão "Claim Your Discount" */}
            <div style={{ width: '100%', maxWidth: 420, position: 'relative', zIndex: 1 }}>
              <img
                src={typeof tarjaFda !== 'undefined' ? tarjaFda : ''}
                alt="Selos de Qualidade FDA, GMP e 100% Natural"
                style={{
                  display: 'block',
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>
        ) : (
          /* ═══════════════ DESKTOP: layout original, intocado ═══════════════ */
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              flexWrap: 'wrap',
            }}
          >
            {/* Coluna Esquerda */}
            <div style={{ flex: 1.5, minWidth: '320px' }}>
              {/* Title */}
              <h1
                className="anim-1 gradient-headline"
                aria-label="ProNail Complex"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(52px, 10vw, 120px)',
                  fontWeight: 300,
                  letterSpacing: '0.08em',
                  lineHeight: 1.0,
                  margin: '0 0 28px',
                  paddingRight: '20px',
                }}
              >
                PRONAIL <br className="hidden md:inline" /> COMPLEX
              </h1>

              {/* Description + CTAs */}
              <div className="anim-2" style={{ maxWidth: 580 }}>
                <p
                  style={{
                    fontSize: 'clamp(16px, 1.5vw, 19px)',
                    lineHeight: 1.6,
                    color: 'var(--color-muted)',
                    marginBottom: 36,
                    fontWeight: 300,
                  }}
                >
                  A clinically backed, Specialist Formulated micro particle mist spray designed to target tough fungus, nourish nail beds, and repair dry skin. Powered by premium botanical oils and active nutrients.{' '}
                  <strong style={{ color: 'var(--color-text)', fontWeight: 500 }}>
                    The uniquely formulated mist spray that supports healthy toenails.
                  </strong>
                </p>

                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
                  
                  <a 
                    href="#pricing"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToPricing();
                    }}
                    rel="nofollow sponsored"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      backgroundColor: 'var(--color-text)',
                      color: '#fff',
                      padding: '16px 36px',
                      borderRadius: 100,
                      fontSize: 14,
                      fontWeight: 500,
                      letterSpacing: '0.04em',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(14,28,42,0.15)',
                      transition: 'background-color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-accent)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-text)')}
                  >
                    Claim Your Discount <FiArrowRight size={15} />
                  </a>
                    
                  <a 
                    href="#benefits"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      color: 'var(--color-accent)',
                      fontSize: 14,
                      fontWeight: 400,
                      textDecoration: 'none',
                    }}
                  >
                    See benefits <FiChevronDown size={15} />
                  </a>
                </div>
              </div>
            </div>

            {/* Coluna Direita */}
            <div style={{ flex: 1, minWidth: '320px', display: 'flex', justifyContent: 'center' }}>
              <img
                src="/pronail1.png.png"
                alt="Produto Pronail"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>
        )}

        {/* Trust Badges */}
        <div
          className="anim-3"
          style={{
            display: 'flex',
            rowGap: isMobile ? 4 : 24,
            columnGap: isMobile ? 14 : 24,
            flexWrap: 'wrap',
            justifyContent: isMobile ? 'center' : 'flex-start',
            marginTop: isMobile ? 28 : 48,
            paddingTop: isMobile ? 20 : 24,
            borderTop: '1px solid var(--color-border)',
          }}
        >
          {['Specialist Formulated', '100% Natural Blend', '60-Day Guarantee', 'Non-GMO Formula'].map(badge => (
            <span
              key={badge}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: isMobile ? 10 : 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-muted)',
                textAlign: isMobile ? 'center' : 'left',
              }}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
