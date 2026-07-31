import { INGREDIENTS } from './data'

// ─── Ingredients ──────────────────────────────────────────────────────────────

export default function Ingredients() {
  return (
    <section id="ingredients" className="section-pad" style={{ backgroundColor: 'var(--color-deep)' }}>
      <div className="inner">
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
            The Big Four
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 300,
              lineHeight: 1.2,
              color: '#fff',
              margin: 0,
              maxWidth: 520,
            }}
          >
            Clinically Selected Botanicals & Active Minerals
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 1,
            backgroundColor: 'rgba(255,255,255,0.06)',
          }}
        >
          {INGREDIENTS.map(({ name, fn, tag, icon }) => (
            <div
              key={name}
              style={{
                padding: '32px',
                backgroundColor: 'var(--color-deep)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 20,
              }}
            >
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 9,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-accent)',
                    border: '1px solid rgba(90,173,167,0.3)',
                    padding: '3px 8px',
                    borderRadius: 100,
                    marginBottom: 16,
                  }}
                >
                  {tag}
                </span>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 400, color: '#fff', marginBottom: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {/* decorativo: o nome ao lado já comunica a informação */}
                    <img src={icon} alt="" style={{ height: '32px', width: 'auto', objectFit: 'contain' }} />
                    <span>{name}</span>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0, fontWeight: 300 }}>
                  {fn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
