import { FiArrowRight, FiChevronDown } from 'react-icons/fi'

// ─── Hero ─────────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      style={{
        minHeight: '88vh',
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

      <div className="inner" style={{ padding: '60px 24px' }}>
        {/* Eyebrow */}
        <div className="anim-0" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <span style={{ display: 'inline-block', width: 32, height: 1, backgroundColor: 'var(--color-accent)' }} />
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

        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          {/* Coluna Esquerda */}
          <div style={{ flex: 1.5, minWidth: '320px' }}>
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
                A clinically backed, Specialist-formulated micro-particle mist spray designed to target tough fungus, nourish nail beds, and repair dry skin. Powered by premium botanical oils and active nutrients.{' '}
                <strong style={{ color: 'var(--color-text)', fontWeight: 500 }}>
                  The uniquely formulated mist spray that supports healthy toenails.
                </strong>
              </p>

              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
                <a
                  href="#pricing"
                  onClick={e => {
                    e.preventDefault()
                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
                  }}
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
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--color-accent)')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--color-text)')}
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
            {/*
              ATENÇÃO: confirme se este arquivo realmente existe em /public com esse nome
              duplicado (pronail1.png.png). Se for erro de digitação, troque para
              "/pronail1.png" ou, melhor ainda, importe a imagem de src/ como as outras
              (import imgHero from '../../pronail1.png') para o Vite otimizar o arquivo.
            */}
            <img
              src="/pronail1.png.png"
              alt="ProNail Complex bottle"
              style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* Trust Badges */}
        <div
          className="anim-3"
          style={{
            display: 'flex',
            gap: 24,
            flexWrap: 'wrap',
            marginTop: 48,
            paddingTop: 24,
            borderTop: '1px solid var(--color-border)',
          }}
        >
          {['Specialist Formulated', '100% Natural Blend', '60-Day Guarantee', 'Non-GMO Formula'].map(badge => (
            <span
              key={badge}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-muted)',
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
