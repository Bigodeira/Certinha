// ─── src/pages/LandingPage/Stats.tsx ──────────────────────────────────────────

import iconeCemPorCento from '../../iconefolha.png';
import icone60 from '../../icone60.png';
import iconeEstrelas from '../../icone-estrela.png';

// ─── Stats ────────────────────────────────────────────────────────────────────

export default function Stats() {
  const data = [
    { value: '87k+', icon: iconeEstrelas, label: 'Happy Customers Worldwide' },
    { value: '100%', icon: iconeCemPorCento, label: 'Natural & Safe Ingredients' },
    { value: '60', icon: icone60, suffix: ' Days', label: '100% Money-Back Guarantee' },
  ]

  return (
    <section aria-label="Key figures" style={{ backgroundColor: 'var(--color-deep)' }}>
      <div className="inner">

        {/* ─── MOBILE: cards premium (visível só < md) ─────────────────────── */}
        <div className="flex md:hidden flex-col gap-3.5 py-10">
          {data.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 shadow-lg shadow-black/20 transition-transform active:scale-[0.98]"
            >
              {stat.icon && (
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(90,173,167,0.22) 0%, rgba(90,173,167,0.06) 100%)',
                    boxShadow: '0 0 0 1px rgba(90,173,167,0.25) inset',
                  }}
                >
                  <img src={stat.icon} alt="" className="h-7 w-7 object-contain" />
                </div>
              )}
              <div className="flex flex-1 flex-col">
                <div
                  className="flex items-baseline gap-1 font-extrabold leading-none text-white"
                  style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 7.5vw, 30px)' }}
                >
                  <span>{stat.value}</span>
                  {stat.suffix && <span style={{ color: 'var(--color-accent)' }}>{stat.suffix}</span>}
                </div>
                <div
                  className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/55"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ─── DESKTOP: original, 100% intacto (visível só >= md) ─────────── */}
        <div
          className="hidden md:grid"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}
        >
          {data.map((stat, i) => (
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
                  {stat.icon && (
                    <img
                      src={stat.icon}
                      alt="Ícone"
                      style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
                    />
                  )}
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

      </div>
    </section>
  )
}