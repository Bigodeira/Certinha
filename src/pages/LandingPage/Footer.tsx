// ─── src/pages/LandingPage/Footer.tsx ─────────────────────────────────────────

// ─── Footer ───────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{
        backgroundColor: 'var(--color-deep)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '48px 24px',
      }}
    >
      <div
        className="inner"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 28,
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: 24,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 22,
                fontWeight: 400,
                letterSpacing: '0.15em',
                color: '#fff',
                marginBottom: 6,
              }}
            >
              PRONAIL <span style={{ color: 'var(--color-accent)', fontWeight: 300 }}>COMPLEX</span>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.3)',
                margin: 0,
              }}
            >
              Advanced Nail Formula
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul
              style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
                display: 'flex',
                gap: 24,
                flexWrap: 'wrap',
              }}
            >
              {['Benefits', 'Ingredients', 'FAQ'].map(label => (
              <li key={label}>
                <a 
                  href={`#${label.toLowerCase().replace(/ /g, '-')}`}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.35)',
                    textDecoration: 'none',
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
            </ul>
          </nav>
        </div>

        {/* FDA & Google Ads Disclaimers — EXTREMELY CRITICAL for Google Ads Approval */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 12 }}>
          <p
            style={{
              fontSize: 11,
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.25)',
              margin: 0,
              fontWeight: 300,
            }}
          >
            Disclaimer: The content on this website and the product offered is based on the author's opinion and is provided solely on an "AS IS" and "AS AVAILABLE" basis. You should do your own research and confirm the information with other sources when searching for information regarding health issues and always review the information carefully with your professional health care provider before using any of the protocols presented on this website and/or in the product sold here.
          </p>
          <p
            style={{
              fontSize: 11,
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.25)',
              margin: 0,
              fontWeight: 300,
            }}
          >
            *These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. This site is an affiliate advertisement. The owner of this site may receive compensation for purchases made through links on this page.
          </p>
        </div>

        {/* Divider */}
        <div style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.06)' }} />

        {/* Legal */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              letterSpacing: '0.08em',
              color: 'rgba(255,255,255,0.2)',
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} PRONAIL COMPLEX. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              letterSpacing: '0.08em',
              color: 'rgba(255,255,255,0.2)',
              margin: 0,
            }}
          >
            This page contains affiliate links. Results may vary.
          </p>
        </div>
      </div>
    </footer>
  )
}