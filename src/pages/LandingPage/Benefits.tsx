// ─── src/pages/LandingPage/Benefits.tsx ───────────────────────────────────────

import { useState, useEffect } from 'react'
import {
  FiShield, FiZap, FiDroplet, FiAward,
} from 'react-icons/fi'
import bgFolhas from '../../6frascosfundo.png';
import imgGarrafas from '../../pronailfundo.png';
import tarjaFda from '../../tarjafda.png';

// ─── Data ─────────────────────────────────────────────────────────────────────

const BENEFITS = [
  {
    Icon: FiShield,
    title: 'Kills Off Tough Fungus',
    body: 'Powered by Undecylenic Acid to disrupt fungal cellular membranes, stopping stubborn toenail issues directly at their root.',
  },
  {
    Icon: FiZap,
    title: 'Micro-Particle Spray',
    body: 'The advanced mist spray releases microscopic particles that instantly bypass the thick nail plate to reach deep skin layers.',
  },
  {
    Icon: FiDroplet,
    title: 'Soothes & Hydrates',
    body: 'Organic Aloe Vera and essential oils deeply hydrate dry, cracked skin, relieving itching and creating an environment hostile to fungus.',
  },
  {
    Icon: FiAward,
    title: 'Specialist Formulated',
    body: 'A proprietary, GMO-free blend of medical-grade oils and skin-repairing vitamins tested for purity. Completely non-greasy.',
  },
]

// ─── Benefits ─────────────────────────────────────────────────────────────────

export default function Benefits() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
   <section
     id="benefits"
     className="section-pad"
     style={{
       background: isMobile
         ? 'linear-gradient(180deg, var(--color-surface) 0%, #eaf4f2 100%)'
         : 'var(--color-surface)',
       paddingBottom: 0,
       marginBottom: 0,
     }}
   >
      <div className="inner">
        {/* Section header */}
        <div style={{ marginBottom: isMobile ? 32 : 48 }}>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              fontWeight: isMobile ? 700 : 400,
              marginBottom: 12,
            }}
          >
            Why ProNail Complex
          </p>
          {isMobile ? (
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 7.5vw, 34px)',
                fontWeight: 800,
                lineHeight: 1.18,
                letterSpacing: '-0.01em',
                margin: 0,
                maxWidth: 580,
                color: 'var(--color-text)',
              }}
            >
              Advanced <span style={{ color: 'var(--color-accent)' }}>Micro-Particle Formula</span> for Your Nails
            </h2>
          ) : (
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
          )}
        </div>

        {/* Benefit cards */}
        <div
          style={
            isMobile
              ? { display: 'flex', flexDirection: 'column', gap: 18, paddingBottom: 8, position: 'relative' }
              : {
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: 2,
                  backgroundColor: 'var(--color-border)',
                }
          }
        >
          {isMobile && (
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: -60,
                right: -60,
                width: 240,
                height: 240,
                borderRadius: '50%',
                filter: 'blur(60px)',
                background: 'radial-gradient(circle, rgba(93,202,165,0.16) 0%, rgba(93,202,165,0) 70%)',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            />
          )}
          {BENEFITS.map(({ Icon, title, body }) => (
            <article
              key={title}
              style={
                isMobile
                  ? {
                      position: 'relative',
                      zIndex: 1,
                      padding: '26px 24px 28px 24px',
                      borderRadius: 24,
                      background: 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.72) 100%)',
                      backdropFilter: 'blur(18px) saturate(160%)',
                      WebkitBackdropFilter: 'blur(18px) saturate(160%)',
                      border: '1px solid rgba(255,255,255,0.7)',
                      boxShadow:
                        '0 1px 1px rgba(255,255,255,0.7) inset, 0 22px 40px -18px rgba(14,28,42,0.14), 0 0 36px rgba(93,202,165,0.10)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 14,
                    }
                  : {
                      padding: '40px 32px',
                      backgroundColor: 'var(--color-ground)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 16,
                    }
              }
            >
              {isMobile && (
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '16%',
                    right: '16%',
                    height: 1,
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.95), transparent)',
                  }}
                />
              )}
              <div
                style={{
                  position: 'relative',
                  width: isMobile ? 54 : 44,
                  height: isMobile ? 54 : 44,
                  borderRadius: isMobile ? 16 : '50%',
                  background: isMobile
                    ? 'radial-gradient(circle at 35% 30%, rgba(93,202,165,0.30) 0%, rgba(93,202,165,0.08) 65%, transparent 100%)'
                    : 'rgba(90,173,167,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-accent-dark, #0E5C55)',
                  boxShadow: isMobile
                    ? '0 0 0 1px rgba(93,202,165,0.22) inset, 0 1px 0 rgba(255,255,255,0.6) inset, 0 8px 16px -8px rgba(14,92,85,0.35)'
                    : 'none',
                }}
              >
                <Icon
                  size={isMobile ? 24 : 20}
                  style={isMobile ? { filter: 'drop-shadow(0 0 6px rgba(93,202,165,0.35))', color: 'var(--color-accent-dark, #0E5C55)' } : undefined}
                />
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: isMobile ? 19.5 : 20,
                  fontWeight: isMobile ? 700 : 400,
                  letterSpacing: isMobile ? '-0.01em' : 'normal',
                  margin: 0,
                  lineHeight: 1.25,
                  color: isMobile ? '#111111' : 'var(--color-text)',
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontSize: isMobile ? 14.5 : 14,
                  lineHeight: isMobile ? 1.65 : 1.6,
                  color: 'var(--color-muted)',
                  margin: 0,
                  fontWeight: isMobile ? 400 : 300,
                }}
              >
                {body}
              </p>
            </article>
          ))}
        </div>

       {/* NOVO BANNER: FUNDO COM FRASCOS INTEIROS (SEM CORTAR O TOPO) */}
        <div style={{
          backgroundImage: typeof bgFolhas !== 'undefined' ? `url(${bgFolhas})` : 'none',
          backgroundColor: '#eaeaea', /* Cor de fundo suave para preencher caso falte altura */
          backgroundSize: '100% auto',   /* Ou troque por '100% auto' se ainda cortar em telas ultrawide */
          backgroundPosition: 'center 40%', /* Foca o enquadramento no topo para mostrar as tampas dos frascos */
          backgroundRepeat: 'no-repeat',
          padding: isMobile ? '28px 16px' : '120px 20px 100px 20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          marginTop: isMobile ? '20px' : '60px',
          boxSizing: 'border-box'
        }}>
          {/* Glow decorativo (somente mobile, estilo Apple) */}
          {isMobile && (
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '8%',
                right: '8%',
                width: 200,
                height: 200,
                borderRadius: '50%',
                filter: 'blur(50px)',
                background: 'radial-gradient(circle, rgba(93,202,165,0.30) 0%, rgba(93,202,165,0) 70%)',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            />
          )}
          {isMobile && (
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                bottom: '6%',
                left: '6%',
                width: 160,
                height: 160,
                borderRadius: '50%',
                filter: 'blur(46px)',
                background: 'radial-gradient(circle, rgba(93,202,165,0.22) 0%, rgba(93,202,165,0) 70%)',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            />
          )}

          {/* Cartão Central (vidro fosco no mobile, cartão branco padrão no desktop) */}
          <div style={{
            backgroundColor: isMobile ? 'rgba(255,255,255,0.78)' : '#ffffff',
            backdropFilter: isMobile ? 'blur(16px) saturate(160%)' : undefined,
            WebkitBackdropFilter: isMobile ? 'blur(16px) saturate(160%)' : undefined,
            border: isMobile ? '1px solid rgba(255,255,255,0.6)' : 'none',
            borderRadius: isMobile ? '28px' : '20px',
            maxWidth: '1050px',
            width: '100%',
            padding: isMobile ? '28px 22px 24px' : '55px 50px',
            boxShadow: isMobile
              ? '0 24px 48px -24px rgba(0,0,0,0.18), 0 0 32px rgba(93,202,165,0.12)'
              : '0 20px 45px rgba(0,0,0,0.2)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: isMobile ? '4px' : '35px',
            boxSizing: 'border-box',
            position: 'relative',
            zIndex: 1,
          }}>

            {/* Lado Esquerdo: Título e Lista de Benefícios */}
            <div style={{ flex: '1 1 450px', display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'center' : 'flex-start' }}>
              <h2 style={{
                fontSize: isMobile ? 'clamp(26px, 8vw, 32px)' : 'clamp(42px, 5.5vw, 56px)',
                fontFamily: 'Arial, sans-serif',
                color: isMobile ? '#000000' : '#1a1a1a',
                textAlign: isMobile ? 'center' : 'left',
                lineHeight: isMobile ? '1.15' : '1.05',
                marginBottom: isMobile ? '18px' : '40px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                <span style={{ fontWeight: isMobile ? 400 : '300' }}>ProNail</span><br />
                <strong style={{ fontWeight: isMobile ? 600 : '800' }}>Complex</strong>
              </h2>

              {/* Lista de Benefícios: grid 2x2 no desktop, lista estilo iOS no mobile */}
              <div style={{
                display: isMobile ? 'flex' : 'grid',
                flexDirection: isMobile ? 'column' : undefined,
                width: isMobile ? '100%' : 'auto',
                gridTemplateColumns: isMobile ? undefined : 'repeat(auto-fit, minmax(180px, 1fr))',
                justifyContent: isMobile ? 'flex-start' : 'start',
                gap: isMobile ? 0 : '28px 20px',
                fontSize: isMobile ? '15px' : '20px',
                color: '#222222',
                fontFamily: 'Arial, sans-serif',
                fontWeight: '600'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: isMobile ? '12px' : '14px',
                  padding: isMobile ? '13px 2px' : 0,
                  borderTop: isMobile ? '0.5px solid rgba(0,0,0,0.08)' : 'none',
                }}>
                  <div style={{
                    backgroundColor: isMobile ? 'rgb(93,202,165)' : '#4caf50',
                    borderRadius: isMobile ? '50%' : '6px',
                    width: isMobile ? '26px' : '32px',
                    height: isMobile ? '26px' : '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: isMobile ? '14px' : '18px',
                    flexShrink: 0
                  }}>
                    ✓
                  </div>
                  <span style={{ color: isMobile ? '#000000' : '#222222' }}>Natural Formula</span>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: isMobile ? '12px' : '14px',
                  padding: isMobile ? '13px 2px' : 0,
                  borderTop: isMobile ? '0.5px solid rgba(0,0,0,0.08)' : 'none',
                }}>
                  <div style={{
                    backgroundColor: isMobile ? 'rgb(93,202,165)' : '#4caf50',
                    borderRadius: isMobile ? '50%' : '6px',
                    width: isMobile ? '26px' : '32px',
                    height: isMobile ? '26px' : '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: isMobile ? '14px' : '18px',
                    flexShrink: 0
                  }}>
                    ✓
                  </div>
                  <span style={{ color: isMobile ? '#000000' : '#222222' }}>Easy To Use</span>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: isMobile ? '12px' : '14px',
                  padding: isMobile ? '13px 2px' : 0,
                  borderTop: isMobile ? '0.5px solid rgba(0,0,0,0.08)' : 'none',
                }}>
                  <div style={{
                    backgroundColor: isMobile ? 'rgb(93,202,165)' : '#4caf50',
                    borderRadius: isMobile ? '50%' : '6px',
                    width: isMobile ? '26px' : '32px',
                    height: isMobile ? '26px' : '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: isMobile ? '14px' : '18px',
                    flexShrink: 0
                  }}>
                    ✓
                  </div>
                  <span style={{ color: isMobile ? '#000000' : '#222222' }}>No Stimulants</span>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: isMobile ? '12px' : '14px',
                  padding: isMobile ? '13px 2px' : 0,
                  borderTop: isMobile ? '0.5px solid rgba(0,0,0,0.08)' : 'none',
                  borderBottom: isMobile ? '0.5px solid rgba(0,0,0,0.08)' : 'none',
                }}>
                  <div style={{
                    backgroundColor: isMobile ? 'rgb(93,202,165)' : '#4caf50',
                    borderRadius: isMobile ? '50%' : '6px',
                    width: isMobile ? '26px' : '32px',
                    height: isMobile ? '26px' : '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: isMobile ? '14px' : '18px',
                    flexShrink: 0
                  }}>
                    ✓
                  </div>
                  <span style={{ color: isMobile ? '#000000' : '#222222' }}>Non-GMO</span>
                </div>
              </div>
            </div>

            {/* Lado Direito: Foto do Produto */}
            <div style={{ flex: '1 1 320px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src={typeof imgGarrafas !== 'undefined' ? imgGarrafas : ''}
                alt="ProNail Complex"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  maxHeight: isMobile ? '170px' : '380px',
                  objectFit: 'contain',
                  marginTop: isMobile ? 4 : 0,
                  filter: isMobile ? 'drop-shadow(0 18px 20px rgba(0,0,0,0.15))' : 'none',
                }}
              />
            </div>

      </div> {/* Fechamento do Cartão Central */}
      </div> {/* Fechamento da Imagem de Fundo (bgFolhas) */}

      {/* TARJA DE CERTIFICADOS (mantém a imagem original; no mobile ganha cartão próprio, limpo e integrado) */}
      <div
        id="selos-qualidade"
        style={{
          backgroundColor: isMobile ? '#ffffff' : 'var(--color-ground)',
          paddingTop: isMobile ? '20px' : '30px',
          paddingBottom: isMobile ? '20px' : '30px',
          paddingLeft: isMobile ? '16px' : 0,
          paddingRight: isMobile ? '16px' : 0,
          marginTop: isMobile ? '18px' : 0,
          marginBottom: isMobile ? '8px' : '0px',
          borderRadius: isMobile ? '20px' : 0,
          border: isMobile ? '0.5px solid rgba(0,0,0,0.06)' : 'none',
          boxShadow: isMobile ? '0 10px 24px -14px rgba(0,0,0,0.12)' : 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: isMobile ? 'auto' : '100vw',
          position: isMobile ? 'static' : 'relative',
          left: isMobile ? 'auto' : '50%',
          right: isMobile ? 'auto' : '50%',
          marginLeft: isMobile ? '16px' : '-50vw',
          marginRight: isMobile ? '16px' : '-50vw',
          boxSizing: 'border-box'
        }}
      >
        <img
          src={typeof tarjaFda !== 'undefined' ? tarjaFda : ''}
          alt="Selos de Qualidade FDA, GMP e 100% Natural"
          style={{
            width: '100%',
            maxWidth: isMobile ? '520px' : '900px',
            height: 'auto',
            objectFit: 'contain',
            display: 'block'
          }}
        />
      </div>
      </div>
    </section>
  )
}
