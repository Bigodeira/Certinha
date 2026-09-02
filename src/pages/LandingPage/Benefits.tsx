// ─── src/pages/LandingPage/Benefits.tsx ───────────────────────────────────────

import { useState, useEffect } from 'react'
import {
  FiShield, FiZap, FiDroplet, FiAward, FiCheck,
} from 'react-icons/fi'
import bgFolhas from '../../6frascosfundo.png';
import imgGarrafas from '../../pronailfundo.png';
import tarjaFda from '../../tarjafda.png';
import pronailDuplo from '../../pronailduplo.png';

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

// Checklist — texto preto, como no site original.
const CHECKLIST = [
  { label: 'Natural Formula' },
  { label: 'Easy To Use' },
  { label: 'No Stimulants' },
  { label: 'Non-GMO' },
]

// ─── Benefits ─────────────────────────────────────────────────────────────────

export default function Benefits() {
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

  // ─── MOBILE: card branco sólido igual ao site original, seção grande ───
  if (isMobile) {
    return (
      <section
        className="section-pad"
        style={{
          backgroundImage: `url(${bgFolhas})`,
          backgroundColor: '#eaeaea',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '64px 20px',
        }}
      >
        <div id="benefits" style={{ position: 'relative', top: '-20px', visibility: 'hidden' }} />

        <div
          style={{
            position: 'relative',
            backgroundColor: '#ffffff',
            borderRadius: 24,
            maxWidth: 400,
            width: '100%',
            padding: '44px 30px 40px',
            boxShadow: '0 24px 50px -18px rgba(0,0,0,0.28)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(38px, 12vw, 52px)',
              fontFamily: "'Poppins', 'Montserrat', 'Helvetica Neue', Arial, sans-serif",
              color: '#111111',
              lineHeight: 1.1,
              marginBottom: 32,
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
            }}
          >
            <span style={{ fontWeight: 300 }}>ProNail</span><br />
            <strong style={{ fontWeight: 800 }}>Complex</strong>
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 24,
              marginBottom: 24,
            }}
          >
            {CHECKLIST.map(({ label }) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                }}
              >
                <div
                  style={{
                    backgroundColor: '#3FA34D',
                    borderRadius: 8,
                    width: 30,
                    height: 30,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    flexShrink: 0,
                  }}
                >
                  <FiCheck size={18} strokeWidth={3} />
                </div>
                <span
                  style={{
                    fontFamily: "'Poppins', 'Montserrat', 'Helvetica Neue', Arial, sans-serif",
                    fontSize: 21,
                    fontWeight: 600,
                    color: '#111111',
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          <img
            src={typeof pronailDuplo !== 'undefined' ? pronailDuplo : ''}
            alt="ProNail Complex"
            width={1027}
            height={891}
            loading="lazy"
            decoding="async"
            style={{
              maxWidth: '100%',
              width: 280,
              height: 'auto',
              objectFit: 'contain',
              marginTop: 8,
            }}
          />
        </div>
      </section>
    );
  }

  // ─── DESKTOP: layout original, intocado ───────────────────────────────────
  return (
   <section
     className="section-pad"
     style={{
       background: 'var(--color-surface)',
       paddingBottom: 0,
       marginBottom: 0,
     }}
   >
    <div id="benefits" style={{ position: 'relative', top: '-20px', visibility: 'hidden' }} />
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
              fontWeight: 400,
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
                  background: 'rgba(90,173,167,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-accent-dark, #0E5C55)',
                }}
              >
                <Icon size={20} />
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 20,
                  fontWeight: 400,
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

       {/* BANNER: FUNDO COM FRASCOS INTEIROS (SEM CORTAR O TOPO) */}
        <div style={{
          backgroundImage: typeof bgFolhas !== 'undefined' ? `url(${bgFolhas})` : 'none',
          backgroundColor: '#eaeaea',
          backgroundSize: '100% auto',
          backgroundPosition: 'center 40%',
          backgroundRepeat: 'no-repeat',
          padding: '120px 20px 100px 20px',
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
          boxSizing: 'border-box'
        }}>
          {/* Cartão Central */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            maxWidth: '1050px',
            width: '100%',
            padding: '55px 50px',
            boxShadow: '0 20px 45px rgba(0,0,0,0.2)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '35px',
            boxSizing: 'border-box',
            position: 'relative',
            zIndex: 1,
          }}>

            {/* Lado Esquerdo: Título e Lista de Benefícios */}
            <div style={{ flex: '1 1 450px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <h2 style={{
                fontSize: 'clamp(42px, 5.5vw, 56px)',
                fontFamily: 'Arial, sans-serif',
                color: '#1a1a1a',
                textAlign: 'left',
                lineHeight: '1.05',
                marginBottom: '40px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                <span style={{ fontWeight: '300' }}>ProNail</span><br />
                <strong style={{ fontWeight: '800' }}>Complex</strong>
              </h2>

              {/* Lista de Benefícios: grid 2x2 */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                justifyContent: 'start',
                gap: '28px 20px',
                fontSize: '20px',
                color: '#222222',
                fontFamily: 'Arial, sans-serif',
                fontWeight: '600'
              }}>
                {CHECKLIST.map(({ label }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{
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
                      flexShrink: 0
                    }}>
                      ✓
                    </div>
                    <span style={{ color: '#222222' }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Lado Direito: Foto do Produto */}
            <div style={{ flex: '1 1 320px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src={typeof imgGarrafas !== 'undefined' ? imgGarrafas : ''}
                alt="ProNail Complex"
                width={1138}
                height={1419}
                loading="lazy"
                decoding="async"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  maxHeight: '380px',
                  objectFit: 'contain',
                }}
              />
            </div>

          </div>
        </div>

        {/* TARJA DE CERTIFICADOS (apenas desktop) */}
        <div
          id="selos-qualidade"
          style={{
            backgroundColor: 'var(--color-ground)',
            paddingTop: '30px',
            paddingBottom: '30px',
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
            width={1757}
            height={292}
            loading="lazy"
            decoding="async"
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
