import bgFolhas from '../../6frascosfundo.png'
import imgGarrafas from '../../pronailfundo.png'
import tarjaFda from '../../tarjafda.png'
import { BENEFITS } from './data'

// ─── Benefits ─────────────────────────────────────────────────────────────────

export default function Benefits() {
  return (
    <section id="benefits" className="section-pad" style={{ backgroundColor: 'var(--color-surface)', paddingBottom: 0, marginBottom: 0 }}>
      <div className="inner">
        {/* Section header */}
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
            Why ProNail Complex
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 400,
              lineHeight: 1.2,
              margin: 0,
              maxWidth: 580,
            }}
          >
            Advanced Micro-Particle Formula for Your Nails
          </h2>
        </div>

        {/* Benefit cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 2,
            backgroundColor: 'var(--color-border)',
          }}
        >
          {BENEFITS.map(({ Icon, title, body }) => (
            <article
              key={title}
              style={{
                padding: '40px 32px',
                backgroundColor: 'var(--color-ground)',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(90,173,167,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-accent)',
                }}
              >
                <Icon size={20} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 400, margin: 0, lineHeight: 1.25 }}>
                {title}
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--color-muted)', margin: 0, fontWeight: 300 }}>
                {body}
              </p>
            </article>
          ))}
        </div>

        {/* BANNER: FUNDO COM FRASCOS INTEIROS — padding fluido (clamp) para não ficar
            gigante em telas pequenas */}
        <div
          style={{
            backgroundImage: `url(${bgFolhas})`,
            backgroundColor: '#eaeaea',
            backgroundSize: '100% auto',
            backgroundPosition: 'center 40%',
            backgroundRepeat: 'no-repeat',
            padding: 'clamp(56px, 10vw, 120px) 20px clamp(48px, 8vw, 100px) 20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            position: 'relative',
            left: '50%',
            right: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw',
            marginTop: '60px',
            boxSizing: 'border-box',
          }}
        >
          {/* Cartão Branco Flutuante Centralizado */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              maxWidth: '1050px',
              width: '100%',
              padding: 'clamp(28px, 4vw, 55px) clamp(20px, 4vw, 50px)',
              boxShadow: '0 20px 45px rgba(0,0,0,0.2)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '35px',
              boxSizing: 'border-box',
            }}
          >
            {/* Lado Esquerdo: Título e Ícones */}
            <div style={{ flex: '1 1 450px' }}>
              <h2
                style={{
                  fontSize: 'clamp(36px, 5.5vw, 56px)',
                  fontFamily: 'Arial, sans-serif',
                  color: '#1a1a1a',
                  lineHeight: '1.05',
                  marginBottom: '40px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                <span style={{ fontWeight: '300' }}>ProNail</span>
                <br />
                <strong style={{ fontWeight: '800' }}>Complex</strong>
              </h2>

              {/* Grid 2x2 dos Benefícios */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '28px 20px',
                  fontSize: '20px',
                  color: '#222222',
                  fontFamily: 'Arial, sans-serif',
                  fontWeight: '600',
                }}
              >
                {['Natural Formula', 'Easy To Use', 'No Stimulants', 'Non-GMO'].map(label => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div
                      style={{
                        backgroundColor: '#4caf50',
                        borderRadius: '6px',
                        width: '32px',
                        height: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '18px',
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </div>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Lado Direito: Foto do Produto */}
            <div style={{ flex: '1 1 320px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src={imgGarrafas}
                alt="ProNail Complex bottles"
                style={{ maxWidth: '100%', height: 'auto', maxHeight: '380px', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>

        {/* TARJA DE CERTIFICADOS */}
        <div
          style={{
            backgroundColor: 'var(--color-ground)',
            paddingTop: '30px',
            paddingBottom: '30px',
            marginBottom: '0px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            position: 'relative',
            left: '50%',
            right: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw',
            boxSizing: 'border-box',
          }}
        >
          <img
            src={tarjaFda}
            alt="Selos de Qualidade FDA, GMP e 100% Natural"
            style={{ width: '100%', maxWidth: '900px', height: 'auto', objectFit: 'contain', display: 'block' }}
          />
        </div>
      </div>
    </section>
  )
}
