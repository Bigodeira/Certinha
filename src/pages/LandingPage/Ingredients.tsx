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

// Quantidade visível por padrão no mobile antes de expandir.
const MOBILE_VISIBLE_COUNT = 6

// ─── Ingredient Card (evita duplicar o JSX entre lista fixa e lista expansível) ─

function IngredientCard({ name, fn, tag, icon, isMobile }: {
  name: string
  fn: string
  tag: string
  icon: string
  isMobile: boolean
}) {
  return (
    <div
      style={
        isMobile
          ? {
              padding: '20px',
              backgroundColor: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 22,
              boxShadow: '0 20px 36px -22px rgba(0,0,0,0.5)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: 10,
            }
          : {
              padding: '32px',
              backgroundColor: 'var(--color-deep)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: 20,
            }
      }
    >
      <div>
        <span
          style={{
            display: 'inline-block',
            fontFamily: 'var(--font-mono)',
            fontSize: isMobile ? 10 : 9,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: isMobile ? '#9FE1CB' : 'var(--color-accent)',
            backgroundColor: isMobile ? 'rgba(93,202,165,0.14)' : 'transparent',
            border: isMobile ? '1px solid rgba(93,202,165,0.28)' : '1px solid rgba(90,173,167,0.3)',
            padding: '3px 8px',
            borderRadius: 100,
            marginBottom: isMobile ? 12 : 16,
          }}
        >
          {tag}
        </span>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: isMobile ? 19 : 22,
            fontWeight: isMobile ? 500 : 400,
            color: '#fff',
            marginBottom: isMobile ? 4 : 8,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '8px' : '12px' }}>
            {icon && (
              <img
                src={icon}
                alt="Ícone"
                style={{ height: isMobile ? '44px' : '32px', width: 'auto', objectFit: 'contain' }}
              />
            )}
            <span>{name}</span>
          </div>
        </div>
        <p
          style={{
            fontSize: isMobile ? 13 : 13,
            color: 'rgba(255,255,255,0.6)',
            lineHeight: isMobile ? 1.55 : 1.6,
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
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const visibleIngredients = isMobile ? INGREDIENTS.slice(0, MOBILE_VISIBLE_COUNT) : INGREDIENTS
  const hiddenIngredients = isMobile ? INGREDIENTS.slice(MOBILE_VISIBLE_COUNT) : []

  return (
    <section
      id="ingredients"
      className="section-pad"
      style={{
        backgroundColor: 'var(--color-deep)',
        // Sobrescreve o padding vertical padrão da classe apenas no mobile.
        // paddingTop aumentado para dar respiro em relação à faixa de selos
        // da seção anterior, que ficava colada no topo.
        paddingTop: isMobile ? 64 : undefined,
        paddingBottom: isMobile ? 36 : undefined,
      }}
    >
      <div className="inner">
        <div style={{ marginBottom: isMobile ? 24 : 48 }}>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              marginBottom: isMobile ? 6 : 12,
            }}
          >
            {isMobile ? 'The Complete Formula' : 'The Complete Formula'}
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: isMobile ? 'clamp(24px, 6.5vw, 30px)' : 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 300,
              lineHeight: 1.2,
              color: '#fff',
              margin: 0,
              maxWidth: 520,
            }}
          >
            Clinically Selected Botanicals & Active Minerals
          </h2>

          {/* Texto introdutório — exclusivo do mobile, não altera o desktop */}
          {isMobile && (
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                fontSize: 'clamp(14px, 3.8vw, 16px)',
                lineHeight: 1.65,
                color: 'rgba(255,255,255,0.62)',
                margin: '14px 0 0',
                maxWidth: 480,
              }}
            >
              Inside every drop of{' '}
              <span style={{ color: '#9FE1CB' }}>ProNail Complex</span> you'll
              find an optimally dosed proprietary blend of oils and vitamins,
              carefully mixed to complement one another into a powerful
              nail-strengthening formula.
            </p>
          )}
        </div>

        {/* Ingredient Table */}
        <div
          style={
            isMobile
              ? {
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 14,
                }
              : {
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: 1,
                  backgroundColor: 'rgba(255,255,255,0.06)',
                }
          }
        >
          {visibleIngredients.map((item) => (
            <IngredientCard key={item.name} {...item} isMobile={isMobile} />
          ))}
        </div>

        {/* Expansível — somente mobile. No desktop os 16 itens já aparecem
            todos acima, então este bloco nunca renderiza fora do mobile. */}
        {isMobile && hiddenIngredients.length > 0 && (
          <>
            <div
              style={{
                display: 'grid',
                gridTemplateRows: isExpanded ? '1fr' : '0fr',
                transition: 'grid-template-rows 0.55s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <div style={{ overflow: 'hidden' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 14,
                    paddingTop: 14,
                    opacity: isExpanded ? 1 : 0,
                    transform: isExpanded ? 'translateY(0)' : 'translateY(-6px)',
                    transition: 'opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s',
                  }}
                >
                  {hiddenIngredients.map((item) => (
                    <IngredientCard key={item.name} {...item} isMobile={isMobile} />
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsExpanded((v) => !v)}
              aria-expanded={isExpanded}
              style={{
                width: '100%',
                marginTop: 22,
                padding: '14px 20px',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.16)',
                borderRadius: 100,
                color: '#9FE1CB',
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                cursor: 'pointer',
              }}
            >
              <span>{isExpanded ? 'Show less' : 'See all ingredients'}</span>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                style={{
                  transform: isExpanded ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.35s ease',
                }}
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="#9FE1CB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </>
        )}
      </div>
    </section>
  )
}