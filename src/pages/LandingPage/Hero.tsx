// ─── src/pages/LandingPage/Hero.tsx ───────────────────────────────────────────
import { useState, useEffect } from 'react'
import { FiChevronDown, FiArrowRight } from 'react-icons/fi'
import { scrollToPricing } from './utils'
import tarjaFda from '../../tarjafda.png'

// ─── Paleta / identidade visual (extraída do site original do Pronail) ────────
// Fundo teal profundo com leve gradiente vertical, textos brancos em peso alto,
// mesma família tipográfica bold/geométrica usada no produto original.
const PN = {
  tealDark: '#3E8FA0',
  teal: '#4FA3B0',
  tealLight: '#6BB8C2',
  ink: '#0E1C1A',
  white: '#FFFFFF',
  whiteSoft: 'rgba(255,255,255,0.86)',
  fontDisplay:
    "'Poppins', 'Montserrat', 'Helvetica Neue', Arial, sans-serif",
  fontBody: "'Inter', Arial, sans-serif",
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export default function Hero() {
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
      aria-label="Hero"
      style={{
        minHeight: isMobile ? 'auto' : '88vh',
        background: isMobile
          ? `linear-gradient(180deg, ${PN.teal} 0%, ${PN.tealDark} 100%)`
          : `linear-gradient(160deg, ${PN.teal} 0%, ${PN.tealDark} 75%)`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Bolhas de luz ambiente, como no site original */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '10%',
          left: '8%',
          width: 90,
          height: 90,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.10)',
          filter: 'blur(2px)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '28%',
          right: '12%',
          width: 46,
          height: 46,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.14)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '18%',
          left: '18%',
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.08)',
          pointerEvents: 'none',
        }}
      />

      <div className="inner" style={{ padding: isMobile ? '0px 20px 24px 20px' : '60px 24px', position: 'relative', zIndex: 1 }}>
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
                backgroundColor: PN.whiteSoft,
              }}
            />
            <span
              style={{
                fontFamily: PN.fontBody,
                fontSize: 11,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: PN.whiteSoft,
                fontWeight: 600,
              }}
            >
              Advanced Nail Formula
            </span>
          </div>
        )}

        {/* ═══════════════ MOBILE: Imagem → Título → Texto → Selos ═══════════════ */}
        {isMobile ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'left', width: '100%' }}>
            {/* 1º: Imagem do Produto — maior, centralizada, como no original */}
            <img
              src="/pronail1.png.png"
              alt="Produto Pronail"
              width={1138}
              height={1419}
              loading="eager"
              fetchPriority="high"
              style={{
                display: 'block',
                margin: '0 auto',
                width: '100%',
                maxWidth: 400,
                height: 'auto',
                objectFit: 'contain',
                marginBottom: 12,
              }}
            />

            {/* 2º: Título grande, esquerda, direto sobre o fundo teal (sem card) */}
            <h1
              style={{
                fontFamily: PN.fontDisplay,
                fontSize: 'clamp(32px, 10.5vw, 42px)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.005em',
                color: PN.white,
                margin: '8px 0 22px 0',
                width: '100%',
                textAlign: 'left',
              }}
            >
              The Uniquely Formulated Mist Spray That Supports Healthy Toenails
            </h1>

            {/* 3º: Parágrafo descritivo — esquerda, largura total */}
            <p
              style={{
                fontFamily: PN.fontBody,
                fontSize: 26,
                lineHeight: 1.5,
                color: PN.whiteSoft,
                fontWeight: 400,
                margin: '0 0 28px 0',
                width: '100%',
                textAlign: 'left',
              }}
            >
              ProNail Complex is a meticulously-crafted natural formula which combines extremely potent oils and skin-repairing vitamins. This doctor-formulated mist spray releases the ingredients in the form of micro particles so they can reach deep under your skin and nails.
            </p>

            {/* 4º: Selos de qualidade */}
            <div style={{ width: '100%', maxWidth: 420, position: 'relative', zIndex: 1, alignSelf: 'center' }}>
              <img
                src={typeof tarjaFda !== 'undefined' ? tarjaFda : ''}
                alt="Selos de Qualidade FDA, GMP e 100% Natural"
                width={1757}
                height={292}
                loading="lazy"
                decoding="async"
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
          /* ═══════════════ DESKTOP ═══════════════ */
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
                className="anim-1"
                aria-label="ProNail Complex"
                style={{
                  fontFamily: PN.fontDisplay,
                  fontSize: 'clamp(40px, 6vw, 64px)',
                  fontWeight: 800,
                  letterSpacing: '-0.01em',
                  lineHeight: 1.1,
                  margin: '0 0 28px',
                  paddingRight: '20px',
                  color: PN.white,
                }}
              >
                The Uniquely Formulated Mist Spray That Supports Healthy Toenails
              </h1>

              {/* Description + CTAs */}
              <div className="anim-2" style={{ maxWidth: 580 }}>
                <p
                  style={{
                    fontFamily: PN.fontBody,
                    fontSize: 'clamp(16px, 1.5vw, 18px)',
                    lineHeight: 1.6,
                    color: PN.whiteSoft,
                    marginBottom: 36,
                    fontWeight: 400,
                  }}
                >
                  ProNail Complex is a meticulously-crafted natural formula which combines extremely potent oils and skin-repairing vitamins.{' '}
                  <strong style={{ color: PN.white, fontWeight: 700 }}>
                    This doctor-formulated mist spray releases the ingredients in the form of micro particles so they can reach deep under your skin and nails.
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
                      backgroundColor: PN.white,
                      color: PN.ink,
                      padding: '16px 36px',
                      borderRadius: 100,
                      fontSize: 14,
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(0,0,0,0.18)',
                      transition: 'transform 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                  >
                    Claim Your Discount <FiArrowRight size={15} />
                  </a>

                  <a
                    href="#benefits"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      color: PN.whiteSoft,
                      fontSize: 14,
                      fontWeight: 500,
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
                width={1138}
                height={1419}
                loading="eager"
                fetchPriority="high"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>
        )}

        {/* Trust Badges — texto, no lugar dos ícones em imagem no mobile;
            segue exibido normalmente no desktop */}
        {!isMobile && (
          <div
            className="anim-3"
            style={{
              display: 'flex',
              rowGap: 24,
              columnGap: 24,
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              marginTop: 48,
              paddingTop: 24,
              borderTop: '1px solid rgba(255,255,255,0.18)',
            }}
          >
            {['Specialist Formulated', '100% Natural Blend', '60-Day Guarantee', 'Non-GMO Formula'].map(badge => (
              <span
                key={badge}
                style={{
                  fontFamily: PN.fontBody,
                  fontSize: 11,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: PN.whiteSoft,
                  fontWeight: 600,
                  textAlign: 'left',
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
