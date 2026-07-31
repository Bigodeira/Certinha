import { useState } from 'react'

// ─── Top Bar (logo apenas, NÃO fixo — rola junto com a página) ───────────────

export default function TopBar() {
  const [showClickbankInfo, setShowClickbankInfo] = useState(false)

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
        style={{
          backgroundColor: '#ffffff',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '12px 20px',
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
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <strong style={{ color: '#1a1a24', fontSize: '18px', fontWeight: '900', letterSpacing: '-0.5px' }}>
            CLICKBANK<sup style={{ fontSize: '10px', fontWeight: 'bold' }}>®</sup>
          </strong>

          <span style={{ color: '#d1d1d1', margin: '0 4px', fontSize: '18px' }}>|</span>

          <span style={{ color: '#888', fontSize: '14px', fontWeight: '400', letterSpacing: '0.5px' }}>
            TRUSTED
          </span>

          <svg width="14" height="14" viewBox="0 0 24 24" fill="#888" style={{ marginTop: '-2px' }}>
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
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
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
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
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '24px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          flexWrap: 'wrap',
        }}
      >
        <a
          href="/"
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

        {/* Links de navegação — escondido em telas pequenas via Tailwind (hidden / md:flex) */}
        <ul
          className="hidden md:flex"
          style={{ listStyle: 'none', margin: 0, padding: 0, gap: 32, display: 'flex' }}
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
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
