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
              ? { display: 'flex', flexDirection: 'column', gap: 16, paddingBottom: 8 }
              : {
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: 2,
                  backgroundColor: 'var(--color-border)',
                }
          }
        >
          {BENEFITS.map(({ Icon, title, body }) => (
            <article
              key={title}
              style={
                isMobile
                  ? {
                      padding: '26px 22px',
                      backgroundColor: '#ffffff',
                      border: '1px solid rgba(90,173,167,0.14)',
                      borderRadius: 20,
                      boxShadow: '0 6px 18px rgba(20,40,50,0.06)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 12,
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
              <div
                style={{
                  width: isMobile ? 48 : 44,
                  height: isMobile ? 48 : 44,
                  borderRadius: '50%',
                  background: isMobile
                    ? 'linear-gradient(135deg, rgba(90,173,167,0.18), rgba(90,173,167,0.06))'
                    : 'rgba(90,173,167,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-accent)',
                  boxShadow: isMobile ? '0 2px 8px rgba(90,173,167,0.18)' : 'none',
                }}
              >
                <Icon size={isMobile ? 22 : 20} />
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: isMobile ? 19 : 20,
                  fontWeight: isMobile ? 700 : 400,
                  margin: 0,
                  lineHeight: 1.25,
                  color: 'var(--color-text)',
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: 'var(--color-muted)',
                  margin: 0,
                  fontWeight: 300,
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
          {/* Cartão Branco Flutuante Centralizado (Elementos Maiores) */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: isMobile ? '18px' : '20px',
            maxWidth: '1050px',
            width: '100%',
            padding: isMobile ? '24px 20px' : '55px 50px',
            boxShadow: isMobile ? '0 10px 26px rgba(0,0,0,0.14)' : '0 20px 45px rgba(0,0,0,0.2)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: isMobile ? '4px' : '35px',
            boxSizing: 'border-box'
          }}>

            {/* Lado Esquerdo: Título e Ícones Maiores */}
            <div style={{ flex: '1 1 450px', display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'center' : 'flex-start' }}>
              <h2 style={{
                fontSize: isMobile ? 'clamp(26px, 8vw, 32px)' : 'clamp(42px, 5.5vw, 56px)',
                fontFamily: 'Arial, sans-serif',
                color: '#1a1a1a',
                textAlign: isMobile ? 'center' : 'left',
                lineHeight: isMobile ? '1.15' : '1.05',
                marginBottom: isMobile ? '16px' : '40px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                <span style={{ fontWeight: '300' }}>ProNail</span><br />
                <strong style={{ fontWeight: '800' }}>Complex</strong>
              </h2>

              {/* Grid 2x2 dos Benefícios com Check e Texto Maiores */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(180px, 1fr))',
                justifyContent: isMobile ? 'center' : 'start',
                gap: isMobile ? '11px' : '28px 20px',
                fontSize: isMobile ? '15px' : '20px',
                color: '#222222',
                fontFamily: 'Arial, sans-serif',
                fontWeight: '600'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '10px' : '14px' }}>
                  <div style={{
                    backgroundColor: '#4caf50',
                    borderRadius: isMobile ? '5px' : '6px',
                    width: isMobile ? '22px' : '32px',
                    height: isMobile ? '22px' : '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: isMobile ? '13px' : '18px',
                    flexShrink: 0
                  }}>
                    ✓
                  </div>
                  <span>Natural Formula</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '10px' : '14px' }}>
                  <div style={{
                    backgroundColor: '#4caf50',
                    borderRadius: isMobile ? '5px' : '6px',
                    width: isMobile ? '22px' : '32px',
                    height: isMobile ? '22px' : '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: isMobile ? '13px' : '18px',
                    flexShrink: 0
                  }}>
                    ✓
                  </div>
                  <span>Easy To Use</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '10px' : '14px' }}>
                  <div style={{
                    backgroundColor: '#4caf50',
                    borderRadius: isMobile ? '5px' : '6px',
                    width: isMobile ? '22px' : '32px',
                    height: isMobile ? '22px' : '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: isMobile ? '13px' : '18px',
                    flexShrink: 0
                  }}>
                    ✓
                  </div>
                  <span>No Stimulants</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '10px' : '14px' }}>
                  <div style={{
                    backgroundColor: '#4caf50',
                    borderRadius: isMobile ? '5px' : '6px',
                    width: isMobile ? '22px' : '32px',
                    height: isMobile ? '22px' : '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: isMobile ? '13px' : '18px',
                    flexShrink: 0
                  }}>
                    ✓
                  </div>
                  <span>Non-GMO</span>
                </div>
              </div>
            </div>

            {/* Lado Direito: Foto do Produto */}
            <div style={{ flex: '1 1 320px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src={typeof imgGarrafas !== 'undefined' ? imgGarrafas : ''}
                alt="ProNail Complex"
                style={{ maxWidth: '100%', height: 'auto', maxHeight: isMobile ? '170px' : '380px', objectFit: 'contain', marginTop: isMobile ? 4 : 0 }}
              />
            </div>

      </div> {/* Fechamento do Cartão Branco */}
      </div> {/* Fechamento da Imagem de Fundo (bgFolhas) */}

      {/* TARJA DE CERTIFICADOS (ENCOSTADA NA SEÇÃO ESCURA) */}
      <div
        id="selos-qualidade"
        style={{
          backgroundColor: 'var(--color-ground)',
          paddingTop: isMobile ? '18px' : '30px',
          paddingBottom: isMobile ? '18px' : '30px',
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
          boxSizing: 'border-box'
        }}
      >
        <img
          src={typeof tarjaFda !== 'undefined' ? tarjaFda : ''}
          alt="Selos de Qualidade FDA, GMP e 100% Natural"
          style={{
            width: '100%',
            maxWidth: '900px',
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