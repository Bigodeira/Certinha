import iconeEstrelas from '../../icone-estrela.png'
import iconeCemPorCento from '../../iconefolha.png'
import icone60 from '../../icone60.png'

// ─── Stats ────────────────────────────────────────────────────────────────────

const STATS = [
  { value: '87k+', icon: iconeEstrelas, label: 'Happy Customers Worldwide' },
  { value: '100%', icon: iconeCemPorCento, label: 'Natural & Safe Ingredients' },
  { value: '60', icon: icone60, suffix: ' Days', label: '100% Money-Back Guarantee' },
]

export default function Stats() {
  return (
    <section aria-label="Key figures" style={{ backgroundColor: 'var(--color-deep)' }}>
      <div
        className="inner"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        }}
      >
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              padding: '48px 24px',
              textAlign: 'center',
              borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(38px, 4.5vw, 64px)',
                fontWeight: 300,
                lineHeight: 1,
                color: '#fff',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                {/* decorativo: o número/label ao lado já comunica a informação */}
                <img src={stat.icon} alt="" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
                <span>{stat.value}</span>
              </div>
              {stat.suffix && <span style={{ color: 'var(--color-accent)' }}>{stat.suffix}</span>}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
                marginTop: 12,
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
