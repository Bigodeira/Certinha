// ─── src/pages/LandingPage/TopBar.tsx ─────────────────────────────────────────

import { useState } from 'react'
import type { MouseEvent } from 'react'
import { scrollToPricing } from './utils'

// ─── Top Bar (logo apenas, NÃO fixo — rola junto com a página) ───────────────
// Alterações aplicadas SOMENTE na versão mobile (abaixo do breakpoint md):
//  1) Barra da ClickBank mais fina + caixa de informação em estilo Apple (glass)
//  2) Logo "PRONAIL COMPLEX" com efeito degradê (mesmas cores originais)
//  3) Botão hambúrguer flutuante (fixed) — acompanha o scroll da página,
//     na mesma posição visual em que estava antes (não sobrepõe a ClickBank)
// A versão desktop (md e acima) permanece idêntica ao original.

export default function TopBar() {
  const [showClickbankInfo, setShowClickbankInfo] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Fecha o menu mobile e rola suavemente até a seção correspondente.
  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Fecha o menu, rola até a oferta principal (Best Value / 6 Bottles).
  const handleBuyNowClick = () => {
    setMenuOpen(false);
    scrollToPricing();
  };

  return (
    <div
      role="banner"
      className="pronail-topbar"
      style={{
        backgroundColor: 'var(--color-ground)',
      }}
    >
      <style>{`
        .pronail-topbar {
          border-bottom: 0;
        }

        @media (min-width: 768px) {
          .pronail-topbar {
            border-bottom: 1px solid var(--color-border);
          }
        }
      `}</style>

      {/* BARRA DE CONFIANÇA CLICKBANK — MOBILE: bem mais fina/discreta */}
      <div
        className="flex md:hidden"
        style={{
          backgroundColor: '#ffffff',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottom: '1px solid #eaeaea',
          fontFamily: 'Arial, sans-serif',
          position: 'relative',
          padding: '3px 12px',
        }}
      >
        <button
          onClick={() => setShowClickbankInfo(v => !v)}
          aria-expanded={showClickbankInfo}
          aria-label="ClickBank trust information"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            transition: 'transform 0.2s ease-in-out',
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            padding: 0,
            font: 'inherit',
          }}
        >
          <strong style={{ color: '#1a1a24', fontSize: '12px', fontWeight: '900', letterSpacing: '-0.3px' }}>
            CLICKBANK<sup style={{ fontSize: '7px', fontWeight: 'bold' }}>®</sup>
          </strong>

          <span style={{ color: '#d1d1d1', margin: '0 2px', fontSize: '12px' }}>|</span>

          <span style={{ color: '#888', fontSize: '10px', fontWeight: '400', letterSpacing: '0.3px' }}>
            TRUSTED
          </span>

          <svg width="10" height="10" viewBox="0 0 24 24" fill="#888" style={{ marginTop: '-1px' }}>
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
          </svg>

          <span style={{ color: '#888', fontSize: '10px', fontWeight: '400', letterSpacing: '0.3px' }}>
            SECURE
          </span>
        </button>

        {/* Caixa de informação ClickBank — MOBILE: estilo Apple (glassmorphism) */}
        {showClickbankInfo && (
          <div
            role="dialog"
            aria-label="ClickBank trust information"
            style={{
              position: 'absolute',
              top: 'calc(100% + 10px)',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '300px',
              maxWidth: '90vw',
              backgroundColor: 'rgba(255,255,255,0.75)',
              backdropFilter: 'blur(24px) saturate(180%)',
              WebkitBackdropFilter: 'blur(24px) saturate(180%)',
              border: '1px solid rgba(255,255,255,0.6)',
              borderRadius: '20px',
              boxShadow:
                '0 1px 1px rgba(255,255,255,0.7) inset, 0 22px 44px -12px rgba(14,28,42,0.24), 0 0 0 1px rgba(14,28,42,0.03)',
              padding: '18px 20px',
              textAlign: 'left',
              zIndex: 60,
            }}
          >
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: 0,
                left: '14%',
                right: '14%',
                height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.95), transparent)',
              }}
            />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <strong style={{ color: '#1a1a24', fontSize: '13px', fontWeight: '900', letterSpacing: '-0.3px' }}>
                  CLICKBANK<sup style={{ fontSize: '8px', fontWeight: 'bold' }}>®</sup>
                </strong>
                <span style={{ color: '#d1d1d1', fontSize: '13px' }}>|</span>
                <span style={{ color: '#9a9a9f', fontSize: '11px', fontWeight: '400', letterSpacing: '0.3px' }}>TRUSTED</span>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="#9a9a9f">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
                </svg>
                <span style={{ color: '#9a9a9f', fontSize: '11px', fontWeight: '400', letterSpacing: '0.3px' }}>SECURE</span>
              </div>
              <button
                onClick={() => setShowClickbankInfo(false)}
                aria-label="Close"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#9a9a9f',
                  fontSize: 16,
                  lineHeight: 1,
                  padding: 4,
                }}
              >
                ×
              </button>
            </div>
            <p style={{ margin: '0 0 8px 0', fontSize: 13, lineHeight: 1.55, color: '#3a3a3f', fontWeight: 300 }}>
              ClickBank is a trusted retailer for pronailcomplex.com.
            </p>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: '#3a3a3f', fontWeight: 300 }}>
              If you're not completely satisfied with your purchase, contact us. We'll fix any problem. Your satisfaction is guaranteed.
            </p>
          </div>
        )}
      </div>

      {/* BARRA DE CONFIANÇA CLICKBANK — DESKTOP: igual ao original, sem alteração */}
      <div
        className="hidden md:flex py-3 px-5"
        style={{
          backgroundColor: '#ffffff',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottom: '1px solid #eaeaea',
          fontFamily: 'Arial, sans-serif',
          position: 'relative',
        }}
      >
        <button
          onClick={() => setShowClickbankInfo(v => !v)}
          aria-expanded={showClickbankInfo}
          aria-label="ClickBank trust information"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'transform 0.2s ease-in-out',
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            padding: 0,
            font: 'inherit',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <strong style={{ color: '#1a1a24', fontSize: '18px', fontWeight: '900', letterSpacing: '-0.5px' }}>
            CLICKBANK<sup style={{ fontSize: '10px', fontWeight: 'bold' }}>®</sup>
          </strong>

          <span style={{ color: '#d1d1d1', margin: '0 4px', fontSize: '18px' }}>|</span>

          <span style={{ color: '#888', fontSize: '14px', fontWeight: '400', letterSpacing: '0.5px' }}>
            TRUSTED
          </span>

          <svg width="14" height="14" viewBox="0 0 24 24" fill="#888" style={{ marginTop: '-2px' }}>
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
          </svg>

          <span style={{ color: '#888', fontSize: '14px', fontWeight: '400', letterSpacing: '0.5px' }}>
            SECURE
          </span>
        </button>

        {/* Caixa de informação ClickBank — DESKTOP: igual ao original, sem alteração */}
        {showClickbankInfo && (
          <div
            role="dialog"
            aria-label="ClickBank trust information"
            style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '340px',
              maxWidth: '90vw',
              backgroundColor: '#ffffff',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              boxShadow: '0 12px 28px rgba(0,0,0,0.18)',
              padding: '16px 18px',
              textAlign: 'left',
              zIndex: 60,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <strong style={{ color: '#1a1a24', fontSize: '14px', fontWeight: '900', letterSpacing: '-0.3px' }}>
                  CLICKBANK<sup style={{ fontSize: '8px', fontWeight: 'bold' }}>®</sup>
                </strong>
                <span style={{ color: '#d1d1d1', fontSize: '14px' }}>|</span>
                <span style={{ color: '#888', fontSize: '12px', fontWeight: '400', letterSpacing: '0.3px' }}>TRUSTED</span>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="#888">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
                </svg>
                <span style={{ color: '#888', fontSize: '12px', fontWeight: '400', letterSpacing: '0.3px' }}>SECURE</span>
              </div>
              <button
                onClick={() => setShowClickbankInfo(false)}
                aria-label="Close"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#888',
                  fontSize: 16,
                  lineHeight: 1,
                  padding: 4,
                }}
              >
                ×
              </button>
            </div>
            <p style={{ margin: '0 0 8px 0', fontSize: 13, lineHeight: 1.5, color: '#333' }}>
              ClickBank is a trusted retailer for pronailcomplex.com.
            </p>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5, color: '#333' }}>
              If you're not completely satisfied with your purchase, contact us. We'll fix any problem. Your satisfaction is guaranteed.
            </p>
          </div>
        )}
      </div>

      {/* HEADER — MOBILE: fundo preto, logo empilhado em branco, como no original */}
      <div
        className="flex md:hidden"
        style={{
          backgroundColor: '#2A2A2E',
          padding: '16px 20px',
          alignItems: 'center',
        }}
      >
        <a href="/"
          aria-label="ProNail Complex — back to homepage"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 21,
            fontWeight: 700,
            letterSpacing: '0.04em',
            lineHeight: 1.15,
            color: '#ffffff',
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column',
            textTransform: 'uppercase',
          }}
        >
          <span>Pronail</span>
          <span>Complex</span>
        </a>
      </div>

      {/* HEADER — DESKTOP: igual ao original, sem alteração */}
      <div
        className="hidden md:flex py-6 px-6"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          flexWrap: 'wrap',
          position: 'relative',
        }}
      >
        <a href="/"
          aria-label="ProNail Complex — back to homepage"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 22,
            fontWeight: 400,
            letterSpacing: '0.15em',
            color: 'var(--color-text)',
            textDecoration: 'none',
          }}
        >
          PRONAIL <span style={{ color: 'var(--color-accent)', fontWeight: 300 }}>COMPLEX</span>
        </a>

        {/* Links de navegação — visíveis apenas no desktop. */}
        <ul
          className="flex"
          style={{ listStyle: 'none', margin: 0, padding: 0, gap: 32 }}
        >
          {['Benefits', 'Ingredients', 'FAQ'].map(label => (
            <li key={label}>
              <a
                href={`#${label.toLowerCase().replace(/ /g, '-')}`}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  fontWeight: 400,
                  letterSpacing: '0.04em',
                  color: 'var(--color-muted)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = 'var(--color-text)')}
                onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = 'var(--color-muted)')}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Botão hambúrguer — visível apenas no mobile.
          FLUTUANTE (position: fixed): agora acompanha a rolagem da página,
          sempre acessível, na mesma posição visual (canto superior direito,
          alinhado à linha do logo) sem sobrepor a barra da ClickBank. */}
      <button
        className="flex md:hidden"
        onClick={() => setMenuOpen(v => !v)}
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        style={{
          position: 'fixed',
          top: 44,
          right: 16,
          alignItems: 'center',
          justifyContent: 'center',
          width: 46,
          height: 46,
          padding: 0,
          background: 'linear-gradient(180deg, #3a3a3e 0%, #2a2a2e 55%, #202023 100%)',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          boxShadow:
            '0 1px 0 rgba(255,255,255,0.18) inset, 0 -1px 0 rgba(0,0,0,0.5) inset, 0 0 0 1px rgba(255,255,255,0.06) inset, 0 10px 22px -6px rgba(0,0,0,0.45), 0 3px 8px rgba(0,0,0,0.25)',
          flexShrink: 0,
          transition: 'transform 0.15s ease, filter 0.15s ease',
          zIndex: 1000,
        }}
        onTouchStart={(e) => { e.currentTarget.style.transform = 'scale(0.93)'; e.currentTarget.style.filter = 'brightness(0.9)'; }}
        onTouchEnd={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.filter = 'brightness(1)'; }}
      >
        {/* brilho especular no topo do botão */}
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 1,
            left: '14%',
            right: '14%',
            height: '40%',
            borderRadius: '50% 50% 60% 60% / 100% 100% 40% 40%',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0) 100%)',
            pointerEvents: 'none',
          }}
        />
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" style={{ position: 'relative', zIndex: 1 }}>
          <line
            x1="3" y1="6" x2="21" y2="6"
            style={{
              transformOrigin: 'center',
              transition: 'transform 0.25s ease, opacity 0.2s ease',
              transform: menuOpen ? 'translateY(5.5px) rotate(45deg)' : 'none',
            }}
          />
          <line
            x1="3" y1="12" x2="21" y2="12"
            style={{
              transition: 'opacity 0.2s ease',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <line
            x1="3" y1="18" x2="21" y2="18"
            style={{
              transformOrigin: 'center',
              transition: 'transform 0.25s ease, opacity 0.2s ease',
              transform: menuOpen ? 'translateY(-5.5px) rotate(-45deg)' : 'none',
            }}
          />
        </svg>
      </button>

      {/* Menu Drawer — cartão flutuante em glassmorphism, estilo "Apple Style"
          (iOS-like). Também FIXED, para continuar ancorado no botão
          hambúrguer durante o scroll (mesma posição relativa a ele). */}
      <div
        className="flex md:hidden w-48"
        aria-hidden={!menuOpen}
        style={{
          position: 'fixed',
          top: 98,
          right: 16,
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20,
          textAlign: 'center',
          padding: '26px 20px 24px 20px',
          borderRadius: 26,
          background: 'linear-gradient(180deg, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.55) 100%)',
          backdropFilter: 'blur(22px) saturate(180%)',
          WebkitBackdropFilter: 'blur(22px) saturate(180%)',
          border: '1px solid rgba(255,255,255,0.6)',
          boxShadow:
            '0 1px 1px rgba(255,255,255,0.7) inset, 0 26px 50px -14px rgba(14,28,42,0.28), 0 0 0 1px rgba(14,28,42,0.03)',
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.96)',
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.22s ease, transform 0.22s ease',
          zIndex: 999,
        }}
      >
        {/* linha de luz fininha no topo do drawer */}
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: '14%',
            right: '14%',
            height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.95), transparent)',
          }}
        />

        {['Benefits', 'Ingredients', 'FAQ'].map((label, i) => {
          const id = label.toLowerCase().replace(/ /g, '-');
          return (
            <div key={label} style={{ width: '100%' }}>
              {i > 0 && (
                <div
                  aria-hidden="true"
                  style={{ width: '100%', height: 1, background: 'rgba(14,28,42,0.08)', marginBottom: 20 }}
                />
              )}
              <a
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 16.5,
                  fontWeight: 400,
                  letterSpacing: '0.02em',
                  color: 'var(--color-text)',
                  textDecoration: 'none',
                }}
              >
                {label}
              </a>
            </div>
          );
        })}

        <button
          onClick={handleBuyNowClick}
          style={{
            position: 'relative',
            marginTop: 4,
            width: '100%',
            padding: '14px 20px',
            border: 'none',
            borderRadius: 100,
            fontSize: 14.5,
            fontWeight: 600,
            letterSpacing: '0.02em',
            color: '#fff',
            cursor: 'pointer',
            background: 'linear-gradient(180deg, #ff5a5f 0%, #e63946 55%, #c62333 100%)',
            boxShadow:
              '0 1px 0 rgba(255,255,255,0.35) inset, 0 -1px 0 rgba(0,0,0,0.25) inset, 0 0 0 1px rgba(255,255,255,0.08) inset, 0 14px 26px -8px rgba(198,35,51,0.55), 0 4px 10px rgba(198,35,51,0.3)',
            transition: 'transform 0.15s ease, filter 0.15s ease',
            overflow: 'hidden',
          }}
          onTouchStart={(e) => { e.currentTarget.style.transform = 'scale(0.97)'; e.currentTarget.style.filter = 'brightness(0.92)'; }}
          onTouchEnd={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.filter = 'brightness(1)'; }}
        >
          {/* brilho especular no topo do botão */}
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 1,
              left: '6%',
              right: '6%',
              height: '42%',
              borderRadius: '100px 100px 60px 60px / 100px 100px 30px 30px',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 100%)',
              pointerEvents: 'none',
            }}
          />
          <span style={{ position: 'relative', zIndex: 1 }}>Buy Now</span>
        </button>
      </div>
    </div>
  )
}
