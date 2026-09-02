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

        {/* ─── MOBILE: cards premium estilo Apple (visível só < md) ────────── */}
        <div
          className="hidden flex-col relative overflow-hidden"
          style={{ padding: '40px 4px 44px 4px' }}
        >
          {/* Auras de luz ambiente */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: -100,
              left: -60,
              width: 280,
              height: 280,
              borderRadius: '50%',
              filter: 'blur(60px)',
              background: 'radial-gradient(circle, rgba(93,202,165,0.16) 0%, rgba(93,202,165,0) 70%)',
              pointerEvents: 'none',
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: -100,
              right: -60,
              width: 260,
              height: 260,
              borderRadius: '50%',
              filter: 'blur(60px)',
              background: 'radial-gradient(circle, rgba(120,170,255,0.12) 0%, rgba(120,170,255,0) 70%)',
              pointerEvents: 'none',
            }}
          />

          <div className="flex flex-col gap-3.5 relative" style={{ zIndex: 1 }}>
            {data.map((stat) => (
              <div
                key={stat.label}
                className="relative flex items-center gap-4 transition-transform active:scale-[0.98]"
                style={{
                  padding: '18px 20px',
                  borderRadius: 22,
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                  backdropFilter: 'blur(20px) saturate(160%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(160%)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow:
                    '0 1px 0 rgba(255,255,255,0.06) inset, 0 22px 40px -18px rgba(0,0,0,0.55), 0 0 32px rgba(93,202,165,0.06)',
                }}
              >
                {/* linha de luz fininha no topo do card */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '16%',
                    right: '16%',
                    height: 1,
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)',
                  }}
                />

                {stat.icon && (
                  <div
                    className="flex shrink-0 items-center justify-center"
                    style={{
                      position: 'relative',
                      width: 52,
                      height: 52,
                      borderRadius: '50%',
                      background:
                        'radial-gradient(circle at 35% 30%, rgba(93,202,165,0.28) 0%, rgba(93,202,165,0.05) 65%, transparent 100%)',
                      boxShadow:
                        '0 0 0 1px rgba(93,202,165,0.22) inset, 0 1px 0 rgba(255,255,255,0.12) inset, 0 6px 14px -6px rgba(0,0,0,0.5)',
                    }}
                  >
                    <img
                      src={stat.icon}
                      alt=""
                      width={512}
                      height={512}
                      loading="lazy"
                      decoding="async"
                      style={{
                        width: 24,
                        height: 24,
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 0 6px rgba(93,202,165,0.25))',
                      }}
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col" style={{ gap: 4 }}>
                  <div
                    className="flex items-baseline leading-none"
                    style={{
                      gap: 5,
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: 26,
                      letterSpacing: '-0.01em',
                      color: '#F7F9F9',
                    }}
                  >
                    <span>{stat.value}</span>
                    {stat.suffix && (
                      <span
                        style={{
                          fontFamily: 'var(--font-sans, -apple-system, sans-serif)',
                          fontWeight: 600,
                          fontSize: 16,
                          background: 'linear-gradient(90deg, #7CE0C6, #5AADA7)',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          color: 'transparent',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10.5,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                      color: 'rgba(255,255,255,0.45)',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>



      </div>
    </section>
  )
}
