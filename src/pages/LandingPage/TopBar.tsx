// ─── src/pages/LandingPage/TopBar.tsx ─────────────────────────────────────────

import { useState } from 'react'
import type { MouseEvent } from 'react'
import { scrollToPricing } from './utils'

// ─── Top Bar (logo apenas, NÃO fixo — rola junto com a página) ───────────────

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
      style={{
        backgroundColor: 'var(--color-ground)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      {/* BARRA DE CONFIANÇA CLICKBANK */}
      <div
        className="py-1.5 px-4 md:py-3 md:px-5"
        style={{
          backgroundColor: '#ffffff',
          width: '100%',
          display: 'flex',
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

        {/* Caixa de informação ClickBank (em inglês) */}
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

      <div
        className="py-2 px-4 md:py-6 md:px-6"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
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

        {/* Links de navegação — visíveis apenas no desktop.
            IMPORTANTE: o "display" NÃO pode ir no style inline, pois inline
            sempre vence a classe Tailwind "hidden" — é por isso que os links
            continuavam aparecendo no mobile. O display fica só na className. */}
        <ul
          className="hidden md:flex"
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

        {/* Botão hambúrguer — visível apenas no mobile.
            Fixo na tela (acompanha o scroll) na MESMA posição e com a MESMA
            cor de fundo que o antigo botão "Claim Your Discount" ocupava. */}
        <button
          className="flex md:hidden fixed top-5 right-5 z-[1000]"
          onClick={() => setMenuOpen(v => !v)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 44,
            height: 44,
            padding: 0,
            backgroundColor: 'var(--color-text)',
            border: 'none',
            borderRadius: 100,
            cursor: 'pointer',
            boxShadow: '0 6px 18px rgba(0,0,0,0.2)',
            flexShrink: 0,
          }}
        >
          {menuOpen ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="4" x2="20" y2="20" />
              <line x1="20" y1="4" x2="4" y2="20" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        {/* Menu Drawer — cartão flutuante compacto ancorado no canto superior
            direito, acompanhando o scroll (fixed). Sem overlay: o fundo da
            página permanece 100% visível e com a luminosidade normal. */}
        {menuOpen && (
          <div
            className="flex md:hidden fixed z-[999] w-48"
            style={{
              top: 76,
              right: 20,
              backgroundColor: '#fdfdfb',
              borderRadius: 24,
              boxShadow: '0 20px 45px rgba(0,0,0,0.22)',
              padding: '28px 20px',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 22,
              textAlign: 'center',
            }}
          >
            {['Benefits', 'Ingredients', 'FAQ'].map(label => {
              const id = label.toLowerCase().replace(/ /g, '-');
              return (
                <a
                  key={label}
                  href={`#${id}`}
                  onClick={(e) => handleNavClick(e, id)}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 18,
                    fontWeight: 400,
                    color: 'var(--color-text)',
                    textDecoration: 'none',
                  }}
                >
                  {label}
                </a>
              );
            })}

            <button
              onClick={handleBuyNowClick}
              style={{
                marginTop: 4,
                backgroundColor: '#e63946',
                color: '#fff',
                border: 'none',
                borderRadius: 100,
                padding: '13px 26px',
                fontSize: 14,
                fontWeight: 800,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                width: '100%',
              }}
            >
              Buy Now
            </button>
          </div>
        )}
      </div>
    </div>
  )
}