// ─── src/pages/LandingPage/FinalCTA.tsx ───────────────────────────────────────

import { FiArrowUp } from 'react-icons/fi'
import { scrollToPricing } from './utils'

// ─── Final CTA ────────────────────────────────────────────────────────────────

export default function FinalCTA() {
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
            scrollToPricing();
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