// ─── src/pages/LandingPage/Ingredients.tsx ────────────────────────────────────

import { useState, useEffect } from 'react'
import ingredient1 from '../../ingredient1.png'
import ingredient2 from '../../ingredient2.png'
import ingredient3 from '../../ingredient3.png'
import ingredient4 from '../../ingredient4.png'
import ingredient5 from '../../ingredient5.png'
import ingredient6 from '../../ingredient6.png'
import ingredient7 from '../../ingredient7.png'
import ingredient8 from '../../ingredient8.png'
import ingredient9 from '../../ingredient9.png'
import ingredient10 from '../../ingredient10.png'
import ingredient11 from '../../ingredient11.png'
import ingredient12 from '../../ingredient12.png'
import ingredient13 from '../../ingredient13.png'
import ingredient14 from '../../ingredient14.png'
import ingredient15 from '../../ingredient15.png'
import ingredient16 from '../../ingredient16.png'

// ─── Data ─────────────────────────────────────────────────────────────────────

const INGREDIENTS = [
  {
    name: 'Mineral Oil',
    icon: ingredient1,
    fn: 'Locks in moisture and forms a protective barrier for nail and skin.',
    tag: 'Protect',
  },
  {
    name: 'Sweet Almond Oil',
    icon: ingredient2,
    fn: 'Rich in vitamins that soften cuticles and nourish the nail bed.',
    tag: 'Nourish',
  },
  {
    name: 'Organic Flaxseed Oil',
    icon: ingredient3,
    fn: 'Omega-rich oil that supports nail flexibility and strength.',
    tag: 'Strengthen',
  },
  {
    name: 'Tea Tree Oil',
    icon: ingredient4,
    fn: 'Antiseptic powerhouse that stops fungal growth and purifies the nail.',
    tag: 'Antifungal',
  },
  {
    name: 'Aloe Vera',
    icon: ingredient5,
    fn: 'Soothes irritated skin, relieves itching, and accelerates cell repair.',
    tag: 'Soothe',
  },
  {
    name: 'Canola Oil',
    icon: ingredient6,
    fn: 'Light, fast-absorbing oil that conditions skin around the nail.',
    tag: 'Condition',
  },
  {
    name: 'Vitamin E',
    icon: ingredient7,
    fn: 'Antioxidant skin-repair vitamin that promotes healthy nail regrowth.',
    tag: 'Regenerate',
  },
  {
    name: 'Walnut Oil',
    icon: ingredient8,
    fn: 'Deeply moisturizes and helps restore a smooth, healthy nail surface.',
    tag: 'Moisturize',
  },
  {
    name: 'Camphor Oil',
    icon: ingredient9,
    fn: 'Cooling agent that eases discomfort and refreshes tired feet.',
    tag: 'Refresh',
  },
  {
    name: 'Clove Bud Oil',
    icon: ingredient10,
    fn: 'Natural purifying oil known for its cleansing properties.',
    tag: 'Purify',
  },
  {
    name: 'Jojoba Oil',
    icon: ingredient11,
    fn: 'Mimics natural oils to balance and hydrate the nail bed.',
    tag: 'Balance',
  },
  {
    name: 'Chia Oil',
    icon: ingredient12,
    fn: 'Packed with fatty acids that support nail resilience over time.',
    tag: 'Resilience',
  },
  {
    name: 'Lemongrass Oil',
    icon: ingredient13,
    fn: 'Refreshing botanical extract that helps maintain a clean, healthy feel.',
    tag: 'Cleanse',
  },
  {
    name: 'Lavender Oil',
    icon: ingredient14,
    fn: 'Calming aromatic oil that soothes skin and promotes relaxation.',
    tag: 'Calm',
  },
  {
    name: 'Menthol',
    icon: ingredient15,
    fn: 'Cooling sensation that revitalizes and refreshes tired, stressed feet.',
    tag: 'Cooling',
  },
  {
    name: 'Undecylenic Acid',
    icon: ingredient16,
    fn: 'An organic compound that disrupts and eliminates fungal cells.',
    tag: 'Defense',
  },
]

// ─── Ingredient Card (desktop — inalterado) ────────────────────────────────────

function IngredientCard({ name, fn, tag, icon }: {
  name: string
  fn: string
  tag: string
  icon: string
}) {
  return (
    <div
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
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 22,
            fontWeight: 400,
            color: '#fff',
            marginBottom: 8,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {icon && (
              <img
                src={icon}
                alt="Ícone"
                style={{ height: '32px', width: 'auto', objectFit: 'contain' }}
              />
            )}
            <span>{name}</span>
          </div>
        </div>
        <p
          style={{
            fontSize: 13,
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.6,
            margin: 0,
            fontWeight: 300,
          }}
        >
          {fn}
        </p>
      </div>
    </div>
  )
}

// ─── Ingredients ──────────────────────────────────────────────────────────────

export default function Ingredients() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section
      id="ingredients"
      className="section-pad"
      style={{
        backgroundColor: isMobile ? '#ffffff' : 'var(--color-deep)',
        paddingTop: isMobile ? 40 : undefined,
        paddingBottom: isMobile ? 48 : undefined,
      }}
    >
      <div className="inner">
        {isMobile ? (
          /* ═══════════════ MOBILE: layout igual ao site original ═══════════════ */
          <>
            {/* Título + parágrafo — centralizados, preto sobre fundo branco */}
            <div style={{ textAlign: 'center', marginBottom: 44 }}>
              <p
                style={{
                  fontFamily: "'Poppins', 'Montserrat', 'Helvetica Neue', Arial, sans-serif",
                  fontSize: 'clamp(32px, 10vw, 40px)',
                  fontWeight: 800,
                  letterSpacing: '-0.01em',
                  lineHeight: 1.2,
                  color: '#111111',
                  margin: '0 auto 22px auto',
                  maxWidth: 420,
                }}
              >
                Inside every drop of "ProNail Complex" you'll find:
              </p>
              <p
                style={{
                  fontFamily: "'Inter', Arial, sans-serif",
                  fontSize: 20,
                  lineHeight: 1.55,
                  color: '#3a3a3a',
                  fontWeight: 400,
                  margin: '0 auto',
                  maxWidth: 400,
                }}
              >
                An optimally dosed proprietary blend of <strong>oils and vitamins</strong>, carefully mixed to complement one another into a <strong>powerful nail-strengthening formula</strong>.
              </p>
            </div>

            {/* Lista de ingredientes — foto grande circular + nome em pílula escura,
                todos empilhados, sem botão de "ver mais" */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40 }}>
              {INGREDIENTS.map((item) => (
                <div
                  key={item.name}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}
                >
                  <div
                    style={{
                      width: 209,
                      height: 209,
                      borderRadius: '50%',
                      overflow: 'hidden',
                      backgroundColor: '#ffffff',
                      border: '6px solid #ffffff',
                      boxShadow: '0 14px 32px -10px rgba(0,0,0,0.22)',
                    }}
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div
                    style={{
                      backgroundColor: '#1a1a1a',
                      color: '#ffffff',
                      fontFamily: "'Poppins', 'Montserrat', 'Helvetica Neue', Arial, sans-serif",
                      fontWeight: 700,
                      fontSize: 22,
                      padding: '15px 20px',
                      borderRadius: 12,
                      textAlign: 'center',
                      width: '100%',
                      maxWidth: 340,
                    }}
                  >
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* ═══════════════ DESKTOP: layout original, intocado ═══════════════ */
          <>
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
                The Complete Formula
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
              {INGREDIENTS.map((item) => (
                <IngredientCard key={item.name} {...item} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
