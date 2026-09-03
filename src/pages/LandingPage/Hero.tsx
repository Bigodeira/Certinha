// ─── src/pages/LandingPage/Hero.tsx ───────────────────────────────────────────
import { useState, useEffect } from 'react'
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
        minHeight: isMobile ? 'auto' : 'clamp(580px, 68vh, 700px)',
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

      <div className="inner" style={{ padding: isMobile ? '0px 20px 24px 20px' : '40px 24px', position: 'relative', zIndex: 1 }}>
        {/* ═══════════════ MOBILE: Imagem → Título → Texto → Selos ═══════════════ */}
        {isMobile ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'left', width: '100%' }}>
            {/* 1º: Imagem do Produto — maior, centralizada, como no original */}
            <img
              src="/pronail1.png.png"
              srcSet="/pronail1-640.png 640w, /pronail1-800.png 800w"
              sizes="(max-width: 440px) calc(100vw - 40px), 400px"
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
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(320px, 0.9fr) minmax(0, 1.1fr)', alignItems: 'center', gap: 'clamp(32px, 4vw, 52px)' }}>
            <div className="anim-0" style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src="/pronail1.png.png"
                srcSet="/pronail1-640.png 640w, /pronail1-800.png 800w, /pronail1.png.png 1138w"
                sizes="(min-width: 1440px) 440px, 38vw"
                alt="Produto Pronail"
                width={1138}
                height={1419}
                loading="eager"
                fetchPriority="high"
                style={{ width: '100%', maxWidth: 440, height: 'auto', objectFit: 'contain' }}
              />
            </div>

            <div style={{ minWidth: 0 }}>
              <h1
                className="anim-1"
                style={{
                  fontFamily: PN.fontDisplay,
                  fontSize: 'clamp(40px, 3.6vw, 60px)',
                  fontWeight: 700,
                  letterSpacing: '-0.005em',
                  lineHeight: 1.05,
                  margin: '0 0 28px',
                  color: PN.white,
                }}
              >
                The Uniquely Formulated Mist Spray That Supports Healthy Toenails
              </h1>

              <p className="anim-2" style={{ fontFamily: PN.fontBody, fontSize: 18, lineHeight: 1.6, color: PN.whiteSoft, fontWeight: 400, margin: '0 0 30px', maxWidth: 620 }}>
                ProNail Complex is a meticulously-crafted natural formula which combines extremely potent oils and skin-repairing vitamins. This doctor-formulated mist spray releases the ingredients in the form of micro particles so they can reach deep under your skin and nails.
              </p>

              <img
                className="anim-3"
                src={tarjaFda}
                alt="Selos de Qualidade FDA, GMP e 100% Natural"
                width={1757}
                height={292}
                loading="lazy"
                decoding="async"
                style={{ display: 'block', width: '100%', maxWidth: 540, height: 'auto', objectFit: 'contain' }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
