import { useState } from 'react'
import imgEstrelas from '../estrelas.png';
import bgFolhas from '../6frascosfundo.png';
import imgGarrafas from '../pronailfundo.png';
import imgCreditCards from '../creditcards.png';
import img2Bottles from '../2frascos.png';
import img6Bottles from '../6frascos.png'; // O pacote de 3+3
import img3Bottles from '../3frascos.png'; // O pacote de 2+1
import iconeAcid from '../iconeacid.png';
import iconeAloe from '../iconealoevera.png';
import iconetea from '../teaicone.png';
import iconeCemPorCento from '../iconefolha.png';
import icone60 from '../icone60.png';
import iconevitamin from '../vitamine.png';
import tarjaFda from '../tarjafda.png';
import imgSeal from '../entregagratis.png';
import selo60dias from '../60dias.png';
import {
  FiShield, FiZap, FiDroplet, FiAward,
  FiChevronDown, FiChevronUp, FiMenu, FiX, FiArrowRight, FiStar, FiArrowUp, 
} from 'react-icons/fi'
import iconeEstrelas from '../icone-estrela.png';
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
    title: 'Specialist Formulated',
    body: 'A proprietary, GMO-free blend of medical-grade oils and skin-repairing vitamins tested for purity. Completely non-greasy.',
  },
]

const PRICING_PACKAGES = [
  {
    id: 'pack-2',
    title: '2 BOTTLES',
    subtitle: '· 60 Day Supply ·',
    image: img2Bottles,
    price: '79',
    perks: ['YOU SAVE $200!', '60 DAYS GUARANTEE'],
    oldTotal: '$358',
    newTotal: '$158',
    shipping: '+ 9.99 Shipping',
    highlight: false,
    link: 'https://orders.clickbank.net/?_ga=337406059.1784875026&_gl=1*1xqs0m8*_ga*MzM3NDA2MDU5LjE3ODQ4NzUwMjY.*_ga_9KZM1E116M*czE3ODQ4NzUwMjUkbzEkZzEkdDE3ODQ4NzUwNzQkajExJGwwJGgw&affi=matjetshop&cbfid=55359&cbitems=305&corid=903290d8-5857-47af-925d-50d99149fc37&exitoffer=2&hopId=b5142376-74fc-4729-ad60-6e664a5ed823&oaref=01.145E5D3EF095A940160CA3E2826717AB34F1184EAF9D888819FCA5621E2C9516ECE05926&template=0002&time=1784875152&vvvv=pronailcom&vvar=_b%3DNDk1Nzk4O3Byb25haWxjb21wbGV4LmNvbS9zdGFydC9pbmRleC5waHA7dW5kZWZpbmVkO3RleHQ7MzA1OzE1ODtmZTt1bmRlZmluZWQ%3D%26_ga%3D337406059.1784875026%26_gl%3D1*1xqs0m8*_ga*MzM3NDA2MDU5LjE3ODQ4NzUwMjY.*_ga_9KZM1E116M*czE3ODQ4NzUwMjUkbzEkZzEkdDE3ODQ4NzUwNzQkajExJGwwJGgw%26cbfid%3D55359%26cbitems%3D305%26cbskin%26exitoffer%3D2%26template%3D0002', 
  },
  {
    id: 'pack-6',
    title: '3 + 3 BOTTLES',
    subtitle: '· 180 Day Supply ·',
    image: img6Bottles,
    price: '49',
    perks: ['YOU SAVE $780!', 'BIGGEST DISCOUNT', '60 DAYS GUARANTEE', '3 FREE EBOOKS!'],
    oldTotal: '$1074',
    newTotal: '$294',
    shipping: '+ FREE Shipping',
    highlight: true,
    link: ' https://orders.clickbank.net/?_ga=337406059.1784875026&_gl=1*1xqs0m8*_ga*MzM3NDA2MDU5LjE3ODQ4NzUwMjY.*_ga_9KZM1E116M*czE3ODQ4NzUwMjUkbzEkZzEkdDE3ODQ4NzUwNzQkajExJGwwJGgw&affi=matjetshop&cbfid=55361&cbitems=306&corid=7e25eb8a-a9bb-4725-a209-6f75f9d9c5d3&exitoffer=2&hopId=b5142376-74fc-4729-ad60-6e664a5ed823&oaref=01.145E5D3EF095A940160CA3E2826717AB34F1184EAF9D888819FCA5621E2C9516ECE05926&template=0006&time=1784875153&vvvv=pronailcom&vvar=_b%3DNDk1Nzk4O3Byb25haWxjb21wbGV4LmNvbS9zdGFydC9pbmRleC5waHA7dW5kZWZpbmVkO3RleHQ7MzA2OzI5NDtmZTt1bmRlZmluZWQ%3D%26_ga%3D337406059.1784875026%26_gl%3D1*1xqs0m8*_ga*MzM3NDA2MDU5LjE3ODQ4NzUwMjY.*_ga_9KZM1E116M*czE3ODQ4NzUwMjUkbzEkZzEkdDE3ODQ4NzUwNzQkajExJGwwJGgw%26cbfid%3D55361%26cbitems%3D306%26cbskin%26exitoffer%3D2%26template%3D0006',
  },
  {
    id: 'pack-3',
    title: '2 + 1 BOTTLES',
    subtitle: '· 90 Day Supply ·',
    image: img3Bottles,
    price: '69',
    perks: ['YOU SAVE $330!', '60 DAYS GUARANTEE'],
    oldTotal: '$537',
    newTotal: '$207',
    shipping: '+ FREE Shipping',
    highlight: false,
    link: ' https://orders.clickbank.net/?_ga=337406059.1784875026&_gl=1*1xqs0m8*_ga*MzM3NDA2MDU5LjE3ODQ4NzUwMjY.*_ga_9KZM1E116M*czE3ODQ4NzUwMjUkbzEkZzEkdDE3ODQ4NzUwNzQkajExJGwwJGgw&affi=matjetshop&cbfid=55360&cbitems=302&corid=565476e0-4fb9-4480-b219-3346c27d80d4&exitoffer=2&hopId=b5142376-74fc-4729-ad60-6e664a5ed823&oaref=01.145E5D3EF095A940160CA3E2826717AB34F1184EAF9D888819FCA5621E2C9516ECE05926&template=0003&time=1784875155&vvvv=pronailcom&vvar=_b%3DNDk1Nzk4O3Byb25haWxjb21wbGV4LmNvbS9zdGFydC9pbmRleC5waHA7dW5kZWZpbmVkO3RleHQ7MzAyOzIwNztmZTt1bmRlZmluZWQ%3D%26_ga%3D337406059.1784875026%26_gl%3D1*1xqs0m8*_ga*MzM3NDA2MDU5LjE3ODQ4NzUwMjY.*_ga_9KZM1E116M*czE3ODQ4NzUwMjUkbzEkZzEkdDE3ODQ4NzUwNzQkajExJGwwJGgw%26cbfid%3D55360%26cbitems%3D302%26cbskin%26exitoffer%3D2%26template%3D0003', 
  }
  ];

const INGREDIENTS = [
  {
    name: 'Tea Tree Oil',
    icon: iconetea,
    fn: 'Antiseptic powerhouse that stops fungal growth and purifies the nail.',
    tag: 'Antifungal',
  },
  {
    name: 'Aloe Vera',
    icon: iconeAloe,
    fn: 'Soothes irritated skin, relieves itching, and accelerates cell repair.',
    tag: 'Soothe',
  },
  {
    name: 'Undecylenic Acid',
    icon: iconeAcid,
    fn: 'An organic compound that disrupts and eliminates fungal cells.',
    tag: 'Defense',
  },
  {
    name: 'Vitamin E',
    icon: iconevitamin,
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
    a: 'ProNail Complex is a Specialist-formulated mist spray containing extremely potent natural oils and vitamins. Unlike creams that sit on top of the nail, our micro-particles penetrate deep beneath the nail plate and skin to target the root cause of fungus and promote cellular repair.',
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
      
      {/* BARRA DE CONFIANÇA CLICKBANK */}
      <div style={{ 
        backgroundColor: '#ffffff', 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: '12px 20px',
        borderBottom: '1px solid #eaeaea',
        position: 'relative',
        zIndex: 50,
        fontFamily: 'Arial, sans-serif'
      }}>
        {/* Texto Interativo com Efeito Hover (Sem link) */}
        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '6px',
            transition: 'transform 0.2s ease-in-out',
            cursor: 'default'
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

        </div>
      </div>
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
            href="#pricing"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
          }}
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
            href="#pricing"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
          }}
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
            Advanced Nail Formula
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
          {/* Coluna Esquerda */}
          <div style={{ flex: 1.5, minWidth: '320px' }}>
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
                paddingRight: '20px',
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
                A clinically backed, Specialist-formulated micro-particle mist spray designed to target tough fungus, nourish nail beds, and repair dry skin. Powered by premium botanical oils and active nutrients.{' '}
                <strong style={{ color: 'var(--color-text)', fontWeight: 500 }}>
                  The uniquely formulated mist spray that supports healthy toenails.
                </strong>
              </p>

              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
                <a
      href="#pricing"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
      }}
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
        transition: 'background-color 0.2s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-accent)')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-text)')}
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
          </div>

          {/* Coluna Direita */}
          <div style={{ flex: 1, minWidth: '320px', display: 'flex', justifyContent: 'center' }}>
            <img
              src="/pronail1.png.png"
              alt="Produto Pronail"
              style={{
                maxWidth: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
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
          {['Specialist Formulated', '100% Natural Blend', '60-Day Guarantee', 'Non-GMO Formula'].map(badge => (
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
    { value: '87k+', icon: iconeEstrelas, label: 'Happy Customers Worldwide' },
    { value: '100%', icon: iconeCemPorCento, label: 'Natural & Safe Ingredients' },
    { value: '60', icon: icone60, suffix: ' Days', label: '100% Money-Back Guarantee' },
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
    </section>
  )
}

// ─── Benefits ─────────────────────────────────────────────────────────────────

function Benefits() {
  return (
   <section id="benefits" className="section-pad" style={{ backgroundColor: 'var(--color-surface)', paddingBottom: 0, marginBottom: 0 }}>
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
            Advanced Micro-Particle Formula for Your Nails
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

       {/* NOVO BANNER: FUNDO COM FRASCOS INTEIROS (SEM CORTAR O TOPO) */}
        <div style={{
          backgroundImage: typeof bgFolhas !== 'undefined' ? `url(${bgFolhas})` : 'none',
          backgroundColor: '#eaeaea', /* Cor de fundo suave para preencher caso falte altura */
          backgroundSize: '100% auto',   /* Ou troque por '100% auto' se ainda cortar em telas ultrawide */
          backgroundPosition: 'center 40%', /* Foca o enquadramento no topo para mostrar as tampas dos frascos */
          backgroundRepeat: 'no-repeat',
          padding: '120px 20px 100px 20px', /* Aumentamos a altura vertical para dar espaço aos frascos */
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          marginTop: '60px',
          boxSizing: 'border-box'
        }}>
          {/* Cartão Branco Flutuante Centralizado (Elementos Maiores) */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            maxWidth: '1050px',
            width: '100%',
            padding: '55px 50px',
            boxShadow: '0 20px 45px rgba(0,0,0,0.2)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '35px',
            boxSizing: 'border-box'
          }}>

            {/* Lado Esquerdo: Título e Ícones Maiores */}
            <div style={{ flex: '1 1 450px' }}>
              <h2 style={{
                fontSize: 'clamp(42px, 5.5vw, 56px)',
                fontFamily: 'Arial, sans-serif',
                color: '#1a1a1a',
                lineHeight: '1.05',
                marginBottom: '40px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                <span style={{ fontWeight: '300' }}>ProNail</span><br />
                <strong style={{ fontWeight: '800' }}>Complex</strong>
              </h2>

              {/* Grid 2x2 dos Benefícios com Check e Texto Maiores */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '28px 20px',
                fontSize: '20px',
                color: '#222222',
                fontFamily: 'Arial, sans-serif',
                fontWeight: '600'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    backgroundColor: '#4caf50',
                    borderRadius: '6px',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    flexShrink: 0
                  }}>
                    ✓
                  </div>
                  <span>Natural Formula</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    backgroundColor: '#4caf50',
                    borderRadius: '6px',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    flexShrink: 0
                  }}>
                    ✓
                  </div>
                  <span>Easy To Use</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    backgroundColor: '#4caf50',
                    borderRadius: '6px',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    flexShrink: 0
                  }}>
                    ✓
                  </div>
                  <span>No Stimulants</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    backgroundColor: '#4caf50',
                    borderRadius: '6px',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    flexShrink: 0
                  }}>
                    ✓
                  </div>
                  <span>Non-GMO</span>
                </div>
              </div>
            </div>

            {/* Lado Direito: Foto do Produto */}
            <div style={{ flex: '1 1 320px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src={typeof imgGarrafas !== 'undefined' ? imgGarrafas : ''}
                alt="ProNail Complex"
                style={{ maxWidth: '100%', height: 'auto', maxHeight: '380px', objectFit: 'contain' }}
              />
            </div>

      </div> {/* Fechamento do Cartão Branco */}
      </div> {/* Fechamento da Imagem de Fundo (bgFolhas) */}

      {/* TARJA DE CERTIFICADOS (ENCOSTADA NA SEÇÃO ESCURA) */}
      <div
        id="selos-qualidade"
        style={{
          backgroundColor: 'var(--color-ground)',
          paddingTop: '30px',
          paddingBottom: '30px',
          marginBottom: '0px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          boxSizing: 'border-box'
        }}
      >
        <img
          src={typeof tarjaFda !== 'undefined' ? tarjaFda : ''}
          alt="Selos de Qualidade FDA, GMP e 100% Natural"
          style={{
            width: '100%',
            maxWidth: '900px',
            height: 'auto',
            objectFit: 'contain',
            display: 'block'
          }}
        />
      </div>
      </div>
    </section>
  )
}

// ─── How It Works ─────────────────────────────────────────────────────────────

function HowItWorks() {
  return (
    <section 
      id="selos-qualidade" 
      className="section-pad" 
      style={{ backgroundColor: 'var(--color-ground)' }}
    >
      <div className="inner" style={{ display: 'flex', justifyContent: 'center' }}>
        <img 
          src={tarjaFda} 
          alt="Selos de Qualidade FDA, GMP e 100% Natural" 
          style={{ 
            width: '100%', 
            maxWidth: '1000px', 
            height: 'auto', 
            objectFit: 'contain' 
          }} 
        />
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
          ))}
        </div>
      </div>
    </section>
  )
}


function Pricing() {
  return (
    <>
    {/* FAIXA 1: FRETE GRÁTIS (Layout Clean Fundo Branco) */}
        <div style={{ 
          backgroundColor: '#ffffff', 
          padding: '60px 20px 20px 20px', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: '30px',
          width: '100%'
        }}>
          {/* Imagem do Selo */}
          <img src={imgSeal} alt="Fast and Free Shipping" style={{ width: '140px', height: 'auto' }} />
          
          {/* Textos de Destaque */}
          <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ color: 'var(--color-deep)', fontSize: '32px', margin: '0 0 5px 0', fontWeight: '800' }}>
              Every 6 Bottles Order
            </h2>
            <h2 style={{ color: 'var(--color-accent)', fontSize: '32px', margin: '0 0 12px 0', fontWeight: '800', textDecoration: 'underline' }}>
              Gets FREE Shipping Too!
            </h2>
            <p style={{ color: '#666666', fontSize: '18px', margin: 0, fontWeight: '500' }}>
              *97% Of Customers Order 6 Bottles (Our Recommended Option)
            </p>
          </div>
        </div>

       
    <section id="pricing" style={{ padding: '80px 24px', backgroundColor: '#f9f9f9', color: '#333' }}>
      <div style={{ 
        maxWidth: '1000px', 
        margin: '0 auto', 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        alignItems: 'stretch',
        gap: '24px' 
      }}>
        
        {PRICING_PACKAGES.map((pkg) => (
          <div 
        key={pkg.id} 
        style={{
          width: '100%',
          flex: '1 1 300px',
          maxWidth: '320px',
          backgroundColor: pkg.highlight ? '#fdf8ce' : '#ffffff',
          border: pkg.highlight ? '3px solid var(--color-deep)' : '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '32px 16px',
          textAlign: 'center',
          /* Sombra mais forte por padrão no banner do meio */
          boxShadow: pkg.highlight ? '0 15px 35px rgba(0,0,0,0.18)' : '0 4px 8px rgba(0,0,0,0.05)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          /* Prepara a div para uma animação suave de 0.3 segundos */
          transition: 'all 0.3s ease', 
          zIndex: 1
        }}
        onMouseEnter={(e) => {
          if (pkg.highlight) {
            /* Efeito exclusivo para o banner do meio: Cresce 4% e a sombra dobra */
            e.currentTarget.style.transform = 'scale(1.04)';
            e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.3)';
            e.currentTarget.style.zIndex = '10'; // Traz o banner para frente
          } else {
            /* Efeito sutil para os banners laterais: Crescem apenas 1% */
            e.currentTarget.style.transform = 'scale(1.01)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            e.currentTarget.style.zIndex = '5';
          }
        }}
        onMouseLeave={(e) => {
          /* Quando o mouse sai, tudo volta exatamente ao normal */
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = pkg.highlight ? '0 15px 35px rgba(0,0,0,0.18)' : '0 4px 8px rgba(0,0,0,0.05)';
          e.currentTarget.style.zIndex = '1';
        }}
      >
            
            {/* Selo Best Value (Aparece só no do meio) */}
            {pkg.highlight && (
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-10px',
                backgroundColor: '#ff4d4d',
                color: '#fff',
                fontWeight: 'bold',
                padding: '12px 16px',
                borderRadius: '50px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                transform: 'rotate(10deg)',
                zIndex: 10
              }}>
                BEST<br/>VALUE
              </div>
            )}

            {/* Títulos */}
            <h3 style={{ fontSize: '26px', color: 'var(--color-deep)', margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
              {pkg.title}
            </h3>
            <p style={{ fontSize: '14px', color: '#666', margin: '0 0 24px 0' }}>{pkg.subtitle}</p>

            {/* Imagem do Produto */}
            <img src={pkg.image} alt={pkg.title} style={{ height: '220px', objectFit: 'contain', marginBottom: '24px' }} />

            {/* Preço Principal */}
            <div style={{ color: 'var(--color-deep)', marginBottom: '24px', display: 'flex', justifyContent: 'center', alignItems: 'baseline' }}>
              <span style={{ fontSize: '72px', fontWeight: 'bold', lineHeight: '1' }}>${pkg.price}</span>
              <span style={{ fontSize: '18px', marginLeft: '4px' }}>/ Bottle</span>
            </div>

            {/* Vantagens (Perks) */}
            <div style={{ marginBottom: '32px', flexGrow: 1 }}>
              {pkg.perks.map((perk, i) => (
                <div key={i} style={{
                  border: '1.5px dashed #aaa',
                  borderRadius: '4px',
                  padding: '8px',
                  marginBottom: '8px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  backgroundColor: pkg.highlight ? '#fcf49a' : '#fff'
                }}>
                  <span style={{ color: '#4caf50', marginRight: '6px' }}>✔</span> {perk}
                </div>
              ))}
            </div>

            {/* Botão de Compra */}
            <button
  onClick={() => window.location.href = pkg.link}
  style={{
    backgroundColor: '#ffd700',
    background: 'linear-gradient(to bottom, #ffe800, #ffb300)',
    color: '#000',
    border: '1px solid #d49a00',
    borderRadius: '8px',
    padding: '16px',
    fontSize: '26px',
    fontWeight: '900',
    cursor: 'pointer',
    marginBottom: '16px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
    width: '100%',
    transition: 'all 0.2s ease-in-out',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'scale(1.03)';
    e.currentTarget.style.boxShadow = '0 10px 15px rgba(0,0,0,0.4)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.2)';
  }}
>
  BUY NOW
</button>

            {/* Totais e Frete */}
            <div style={{ fontSize: '16px', color: '#333', marginBottom: '12px' }}>
              TOTAL: <del style={{ color: '#888', marginRight: '8px' }}>{pkg.oldTotal}</del> 
              <span style={{ fontWeight: 'bold', fontSize: '20px' }}>{pkg.newTotal}</span>
            </div>

            <div style={{ fontSize: '14px', color: '#555' }}>
              {pkg.shipping}
            </div>

          </div>
        ))}

      </div>
      {/* IMAGEM DOS CARTÕES: Centralizada abaixo das ofertas */}
        <div style={{ 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'center', 
          marginTop: '40px',
          paddingBottom: '20px'
        }}>
          <img 
            src={imgCreditCards} 
            alt="Cartões Aceitos" 
            style={{ width: '100%', maxWidth: '320px', height: 'auto' }} 
          />
        </div>
      {/* AVALIAÇÕES DOS CLIENTES */}
      <div style={{ 
        width: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        marginTop: '10px', 
        paddingBottom: '40px', 
        fontFamily: "'Montserrat', Arial, sans-serif" 
      }}>
        <p style={{ fontSize: '24px', color: '#1a1a1a', margin: '0', marginBottom: '-25px' }}>
          Our customers say
        </p>
        
        <img 
          src={imgEstrelas} 
          alt="4.5 de 5 estrelas" 
          style={{ 
            width: '100%', 
            maxWidth: '220px', 
            height: 'auto',
            /* Puxa os textos fortemente para cima e para baixo para colar nas estrelas */
            marginTop: '-60px', 
            marginBottom: '-53px',
            position: 'relative',
            zIndex: 2
          }} 
        />
        
        <p style={{ fontSize: '20px', color: '#1a1a1a', margin: '0', marginTop: '-25px' }}>
          based on <strong style={{ fontWeight: '900' }}>14,369 reviews!</strong>
        </p>
      </div>

    </section>
  
    {/* SEÇÃO DE GARANTIA (Fundo Escuro com Caixa Branca) */}
        <div style={{ backgroundColor: 'var(--color-deep)', padding: '60px 20px', width: '100%', display: 'flex', justifyContent: 'center' }}>
          
          {/* Caixa Branca Central */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: '40px',
            maxWidth: '850px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            flexWrap: 'wrap'
          }}>
            
            {/* Lado Esquerdo: Imagem do Selo */}
            <div style={{ flexShrink: 0, textAlign: 'center', width: '100%', maxWidth: '160px', margin: '0 auto' }}>
              <img src={selo60dias} alt="60-Day Money Back Guarantee" style={{ width: '100%', height: 'auto' }} />
            </div>

            {/* Lado Direito: Textos */}
            <div style={{ flex: 1, minWidth: '250px' }}>
              <h3 style={{ color: 'var(--color-deep)', fontSize: '26px', margin: '0 0 12px 0', fontWeight: '800', fontFamily: 'Arial, sans-serif' }}>
                100% Satisfaction<br/>
                60-Day Money Back Guarantee
              </h3>
              <p style={{ color: '#444444', fontSize: '16px', lineHeight: '1.6', margin: 0, fontFamily: 'Arial, sans-serif' }}>
                Your order today is covered by our iron-clad <strong>60-day 100% money-back guarantee</strong>. If you are not impressed with the results, then just write to us and we'll refund every single cent.
              </p>
            </div>

          </div>
        </div>
    </>
  );
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

      <div className="inner" style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
        
        <p style={{ 
          fontFamily: 'var(--font-mono)', 
          fontSize: 11, 
          letterSpacing: '0.18em', 
          textTransform: 'uppercase', 
          color: 'var(--color-accent)', 
          marginBottom: 20 
        }}>
          Risk-Free Purchase
        </p>

        <h2 style={{ 
          fontSize: 'clamp(32px, 4.5vw, 52px)', 
          fontFamily: 'serif', 
          color: '#ffffff', 
          lineHeight: '1.2', 
          marginBottom: '20px',
          fontWeight: '400'
        }}>
          Claim Your Discounted <br />
          ProNail Complex Bottle <br />
          Today
        </h2>

        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto 35px auto', lineHeight: '1.6' }}>
          Try it for 60 days with an ironclad 100% money-back guarantee. Zero risk, maximum results for your feet.
        </p>

        <button
          onClick={() => {
            const element = document.getElementById('pricing');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: 'var(--color-accent)',
            color: '#fff',
            padding: '20px 48px',
            borderRadius: 100,
            fontSize: '19px',
            fontWeight: 600,
            letterSpacing: '0.03em',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 6px 20px rgba(90,173,167,0.4)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#427f77';
            e.currentTarget.style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-accent)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Order ProNail Complex <FiArrowUp size={22} />
        </button>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '25px', fontSize: '11px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          <span>Free Shipping</span>
          <span>•</span>
          <span>60-Day Guarantee</span>
          <span>•</span>
          <span>Secure Checkout</span>
        </div>

      </div>
    </section>
  );
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
        <Ingredients />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
