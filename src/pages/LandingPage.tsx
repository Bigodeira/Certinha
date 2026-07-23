import { useState } from 'react'
import {
  FiShield, FiZap, FiDroplet, FiAward,
  FiChevronDown, FiChevronUp, FiMenu, FiX, FiArrowRight, FiStar,
} from 'react-icons/fi'

// ─── ProNail Complex Affiliate URL ──────────────────────────────────────────
const AFFILIATE_URL = 'https://pronailcomplex.com/text.php?hopId=f72fc4db-5c5e-405a-81d6-29b599e4db2f'

// ─── Data ─────────────────────────────────────────────────────────────────────

const BENEFITS = [
  {
    Icon: FiShield,
    title: 'Kills Off Tough Fungus',
    body: 'Powered by Undecylenic Acid to disrupt fungal cellular membranes, stopping stubborn toenail issues directly at their root.',
  },
  {
    Icon: FiZap,
    title: 'Micro-Particle Spray',
    body: 'The advanced mist spray releases microscopic particles that instantly bypass the thick nail plate to reach deep skin layers.',
  },
  {
    Icon: FiDroplet,
    title: 'Soothes & Hydrates',
    body: 'Organic Aloe Vera and essential oils deeply hydrate dry, cracked skin, relieving itching and creating an environment hostile to fungus.',
  },
  {
    Icon: FiAward,
    title: 'Doctor Formulated',
    body: 'A proprietary, GMO-free blend of medical-grade oils and skin-repairing vitamins tested for purity. Completely non-greasy.',
  },
]

const STEPS = [
  {
    num: '01',
    title: 'Spray after your daily shower',
    body: 'Apply the lightweight mist directly over your clean, dry toenails and surrounding skin. The micro-particles absorb in seconds.',
  },
  {
    num: '02',
    title: 'Let the ingredients penetrate',
    body: 'The rapid-acting formula goes deep beneath the nail plate with zero greasy residue. No need to brush, rub, or wait to dry.',
  },
  {
    num: '03',
    title: 'Put on cotton socks',
    body: 'Slip on a clean pair of cotton socks. This locks in the organic oils, creating a barrier that nourishes the skin and fights fungus.',
  },
]

const INGREDIENTS = [
  {
    name: 'Tea Tree Oil',
    fn: 'Antiseptic powerhouse that stops fungal growth and purifies the nail.',
    tag: 'Antifungal',
  },
  {
    name: 'Aloe Vera',
    fn: 'Soothes irritated skin, relieves itching, and accelerates cell repair.',
    tag: 'Soothe',
  },
  {
    name: 'Undecylenic Acid',
    fn: 'An organic compound that disrupts and eliminates fungal cells.',
    tag: 'Defense',
  },
  {
    name: 'Vitamin E',
    fn: 'Antioxidant skin-repair vitamin that promotes healthy nail regrowth.',
    tag: 'Regenerate',
  },
]

const TESTIMONIALS = [
  {
    name: 'Marcus K.',
    text: 'I struggled with unsightly toenails for years. After just 3 weeks of spraying ProNail Complex after my shower, the yellowing is almost gone and my nails feel incredibly strong!',
  },
  {
    name: 'Sarah J.',
    text: 'The best part is how clean and non-greasy it is. It takes 10 seconds to spray, I put on my socks, and it works all day. Highly recommend to anyone dealing with stubborn fungus.',
  },
  {
    name: 'Robert L.',
    text: 'A truly premium product. My dermatologist was shocked at how fast my nail bed recovered. Undecylenic acid and tea tree oil are a perfect combo.',
  },
]

const FAQS = [
  {
    q: 'How does ProNail Complex work?',
    a: 'ProNail Complex is a doctor-formulated mist spray containing extremely potent natural oils and vitamins. Unlike creams that sit on top of the nail, our micro-particles penetrate deep beneath the nail plate and skin to target the root cause of fungus and promote cellular repair.',
  },
  {
    q: 'How should I apply it?',
    a: 'For best results, spray ProNail Complex daily after your shower when your pores are open. Let it absorb for a few seconds, then put on clean cotton socks to lock in the nutrients and protect your feet.',
  },
  {
    q: 'Are the ingredients safe?',
    a: 'Yes, ProNail Complex is made with 100% natural, GMO-free ingredients. Every batch is manufactured in an FDA-registered and GMP-certified facility, and constantly tested for purity and toxin prevention.',
  },
  {
    q: 'What is your refund policy?',
    a: 'Every order is backed by an ironclad 60-Day 100% Money-Back Guarantee. If you are not completely satisfied with the results, you can return any bottle (even empty ones) for a full refund.',
  },
]

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false)
  const navLinks = ['Benefits', 'How It Works', 'Ingredients', 'Reviews', 'FAQ']

  return (
    <header
      role="banner"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'var(--color-ground)',
        borderBottom: '1px solid var(--color-border)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <nav
        aria-label="Main navigation"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 72,
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

        {/* Desktop Links */}
        <ul
          className="hidden md:flex"
          style={{ listStyle: 'none', margin: 0, padding: 0, gap: 32, display: 'flex' }}
        >
          {navLinks.map(label => (
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

        {/* CTA + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a
            href={AFFILIATE_URL}
            rel="nofollow sponsored"
            className="hidden md:inline-flex"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              backgroundColor: 'var(--color-text)',
              color: '#fff',
              padding: '10px 22px',
              borderRadius: 100,
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '0.04em',
              textDecoration: 'none',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={e => ((e.target as HTMLAnchorElement).style.backgroundColor = 'var(--color-accent)')}
            onMouseLeave={e => ((e.target as HTMLAnchorElement).style.backgroundColor = 'var(--color-text)')}
          >
            Claim Your Discount <FiArrowRight size={13} />
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="md:hidden"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-text)',
              padding: 4,
              display: 'flex',
            }}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden"
          style={{
            backgroundColor: 'var(--color-ground)',
            borderTop: '1px solid var(--color-border)',
            padding: '8px 24px 24px',
          }}
        >
          {navLinks.map(label => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace(/ /g, '-')}`}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '14px 0',
                borderBottom: '1px solid var(--color-border)',
                color: 'var(--color-text)',
                textDecoration: 'none',
                fontSize: 15,
              }}
            >
              {label}
            </a>
          ))}
          <a
            href={AFFILIATE_URL}
            rel="nofollow sponsored"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              backgroundColor: 'var(--color-text)',
              color: '#fff',
              padding: '12px 28px',
              borderRadius: 100,
              fontSize: 14,
              fontWeight: 500,
              textDecoration: 'none',
              marginTop: 20,
              width: '100%',
              justifyContent: 'center',
            }}
          >
            Claim Your Discount <FiArrowRight size={14} />
          </a>
        </div>
      )}
    </header>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      aria-label="Hero"
      style={{
        minHeight: '88vh',
        background:
          'radial-gradient(ellipse 80% 60% at 85% 90%, rgba(90,173,167,0.06) 0%, transparent 65%), var(--color-ground)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: 'linear-gradient(90deg, var(--color-accent), var(--color-nude))',
        }}
      />

      <div className="inner" style={{ padding: '60px 24px' }}>
        {/* Eyebrow */}
        <div
          className="anim-0"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 24,
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: 32,
              height: 1,
              backgroundColor: 'var(--color-accent)',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
            }}
          >
            Advanced Toenail Formula
          </span>
        </div>

        {/* Title */}
        <h1
          className="anim-1 gradient-headline"
          aria-label="ProNail Complex"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(52px, 10vw, 120px)',
            fontWeight: 300,
            letterSpacing: '0.08em',
            lineHeight: 1.0,
            margin: '0 0 28px',
          }}
        >
          PRONAIL <br className="hidden md:inline" /> COMPLEX
        </h1>

        {/* Description + CTAs */}
        <div className="anim-2" style={{ maxWidth: 580 }}>
          <p
            style={{
              fontSize: 'clamp(16px, 1.5vw, 19px)',
              lineHeight: 1.6,
              color: 'var(--color-muted)',
              marginBottom: 36,
              fontWeight: 300,
            }}
          >
            A clinically backed, doctor-formulated micro-particle mist spray designed to target tough fungus, nourish nail beds, and repair dry skin. Powered by premium botanical oils and active nutrients.{' '}
            <strong style={{ color: 'var(--color-text)', fontWeight: 500 }}>
              The uniquely formulated mist spray that supports healthy toenails.
            </strong>
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href={AFFILIATE_URL}
              rel="nofollow sponsored"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                backgroundColor: 'var(--color-text)',
                color: '#fff',
                padding: '16px 36px',
                borderRadius: 100,
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: '0.04em',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(14,28,42,0.15)',
              }}
            >
              Claim Your Discount <FiArrowRight size={15} />
            </a>
            <a
              href="#benefits"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                color: 'var(--color-accent)',
                fontSize: 14,
                fontWeight: 400,
                textDecoration: 'none',
              }}
            >
              See benefits <FiChevronDown size={15} />
            </a>
          </div>
        </div>

        {/* Trust Badges */}
        <div
          className="anim-3"
          style={{
            display: 'flex',
            gap: 24,
            flexWrap: 'wrap',
            marginTop: 48,
            paddingTop: 24,
            borderTop: '1px solid var(--color-border)',
          }}
        >
          {['Doctor Formulated', '100% Natural Blend', '60-Day Guarantee', 'Non-GMO Formula'].map(badge => (
            <span
              key={badge}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-muted)',
              }}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Stats ────────────────────────────────────────────────────────────────────

function Stats() {
  const data = [
    { value: '87k+', label: 'Happy Customers Worldwide' },
    { value: '100%', label: 'Natural & Safe Ingredients' },
    { value: '60', suffix: ' Days', label: '100% Money-Back Guarantee' },
  ]

  return (
    <section aria-label="Key figures" style={{ backgroundColor: 'var(--color-deep)' }}>
      <div
        className="inner"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        }}
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
              {stat.value}
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

// ─── Benefits ─────────────────────────────────────────────────────────────────

function Benefits() {
  return (
    <section id="benefits" className="section-pad" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="inner">
        {/* Section header */}
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
            Why ProNail Complex
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 400,
              lineHeight: 1.2,
              margin: 0,
              maxWidth: 580,
            }}
          >
            Advanced Micro-Particle Therapy for Your Nails
          </h2>
        </div>

        {/* Benefit cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 2,
            backgroundColor: 'var(--color-border)',
          }}
        >
          {BENEFITS.map(({ Icon, title, body }) => (
            <article
              key={title}
              style={{
                padding: '40px 32px',
                backgroundColor: 'var(--color-ground)',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(90,173,167,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-accent)',
                }}
              >
                <Icon size={20} />
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 20,
                  fontWeight: 400,
                  margin: 0,
                  lineHeight: 1.25,
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: 'var(--color-muted)',
                  margin: 0,
                  fontWeight: 300,
                }}
              >
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── How It Works ─────────────────────────────────────────────────────────────

function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad" style={{ backgroundColor: 'var(--color-ground)' }}>
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
            The Routine
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 400,
              lineHeight: 1.2,
              margin: 0,
              maxWidth: 520,
            }}
          >
            Three steps. Sixty seconds.
          </h2>
        </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {STEPS.map(({ num, title, body }, i) => (
              <div
                key={num}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr',
                  gap: 32,
                  padding: '36px 0',
                  borderTop: i === 0 ? '1px solid var(--color-border)' : 'none',
                  borderBottom: '1px solid var(--color-border)',
                  alignItems: 'start',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 40,
                    fontWeight: 300,
                    lineHeight: 1,
                    color: 'var(--color-accent)',
                    opacity: 0.6,
                  }}
                >
                  {num}
                </span>

                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(18px, 2vw, 24px)',
                      fontWeight: 400,
                      margin: '0 0 10px',
                      lineHeight: 1.2,
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.6,
                      color: 'var(--color-muted)',
                      margin: 0,
                      fontWeight: 300,
                      maxWidth: 600,
                    }}
                  >
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

// ─── Ingredients ──────────────────────────────────────────────────────────────

function Ingredients() {
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

        {/* Ingredient Table */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 1,
            backgroundColor: 'rgba(255,255,255,0.06)',
          }}
        >
          {INGREDIENTS.map(({ name, fn, tag }) => (
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
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 22,
                    fontWeight: 400,
                    color: '#fff',
                    marginBottom: 8,
                  }}
                >
                  {name}
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
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

function Testimonials() {
  return (
    <section id="reviews" className="section-pad" style={{ backgroundColor: 'var(--color-surface)' }}>
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
            Reviews
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 400,
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Real Reviews From Real Users
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
          }}
        >
          {TESTIMONIALS.map(({ name, text }) => (
            <article
              key={name}
              style={{
                padding: '36px',
                backgroundColor: 'var(--color-ground)',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                borderRadius: 4,
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: 3 }} aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FiStar
                    key={i}
                    size={13}
                    style={{ fill: 'var(--color-nude)', color: 'var(--color-nude)' }}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote
                style={{
                  margin: 0,
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: 'var(--color-text)',
                  fontStyle: 'normal',
                  fontWeight: 300,
                }}
              >
                "{text}"
              </blockquote>

              {/* Attribution */}
              <footer style={{ marginTop: 'auto' }}>
                <cite
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-muted)',
                    fontStyle: 'normal',
                  }}
                >
                  {name} · Verified Buyer
                </cite>
              </footer>
            </article>
          ))}
        </div>

        {/* Aggregate rating */}
        <div
          style={{
            marginTop: 36,
            padding: '24px 32px',
            backgroundColor: 'var(--color-ground)',
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            flexWrap: 'wrap',
            borderRadius: 4,
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 48,
              fontWeight: 300,
              lineHeight: 1,
            }}
          >
            4.8
          </div>
          <div>
            <div style={{ display: 'flex', gap: 3, marginBottom: 4 }} aria-label="4.8 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <FiStar
                  key={i}
                  size={14}
                  style={{ fill: 'var(--color-nude)', color: 'var(--color-nude)' }}
                />
              ))}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-muted)',
              }}
            >
              Based on over 14,300+ verified customer reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="section-pad" style={{ backgroundColor: 'var(--color-ground)' }}>
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
            Questions
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 400,
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div style={{ maxWidth: 720 }}>
          {FAQS.map(({ q, a }, i) => (
            <div key={q} style={{ borderBottom: '1px solid var(--color-border)' }}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '20px 0',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  gap: 16,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 15,
                    fontWeight: 400,
                    color: 'var(--color-text)',
                    lineHeight: 1.4,
                  }}
                >
                  {q}
                </span>
                <span
                  style={{
                    flexShrink: 0,
                    color: 'var(--color-accent)',
                    display: 'flex',
                  }}
                >
                  {openIndex === i ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
                </span>
              </button>

              {openIndex === i && (
                <p
                  style={{
                    padding: '0 0 20px',
                    margin: 0,
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: 'var(--color-muted)',
                    fontWeight: 300,
                  }}
                >
                  {a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section
      aria-label="Purchase call to action"
      style={{
        backgroundColor: 'var(--color-deep)',
        padding: '80px 24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(90,173,167,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="inner" style={{ position: 'relative' }}>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            marginBottom: 20,
          }}
        >
          Risk-Free Purchase
        </p>

        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5vw, 64px)',
            fontWeight: 300,
            color: '#fff',
            lineHeight: 1.15,
            margin: '0 auto 20px',
            maxWidth: 680,
          }}
        >
          Claim Your Discounted ProNail Complex Bottle Today
        </h2>

        <p
          style={{
            fontSize: 15,
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.6,
            maxWidth: 480,
            margin: '0 auto 40px',
            fontWeight: 300,
          }}
        >
          Try it for 60 days with an ironclad 100% money-back guarantee. Zero risk, maximum results for your feet.
        </p>

        <a
          href={AFFILIATE_URL}
          rel="nofollow sponsored"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            backgroundColor: 'var(--color-accent)',
            color: '#fff',
            padding: '16px 40px',
            borderRadius: 100,
            fontSize: 15,
            fontWeight: 500,
            letterSpacing: '0.04em',
            textDecoration: 'none',
            boxShadow: '0 4px 14px rgba(90,173,167,0.3)',
          }}
        >
          Order ProNail Complex <FiArrowRight size={16} />
        </a>

        <p
          style={{
            marginTop: 20,
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.3)',
          }}
        >
          Free Shipping · 60-Day Guarantee · Secure Checkout
        </p>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
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
              Toenail Mist Spray Formula
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
              {['Benefits', 'How It Works', 'Ingredients', 'Reviews', 'FAQ'].map(label => (
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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Benefits />
        <HowItWorks />
        <Ingredients />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
