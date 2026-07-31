import imgEstrelas from '../../estrelas.png'
import imgCreditCards from '../../creditcards.png'
import imgSeal from '../../entregagratis.png'
import selo60dias from '../../60dias.png'
import { PRICING_PACKAGES } from './data'

// ─── Pricing ──────────────────────────────────────────────────────────────────

export default function Pricing() {
  return (
    <>
      {/* FAIXA: FRETE GRÁTIS */}
      <div
        style={{
          backgroundColor: '#ffffff',
          padding: '60px 20px 20px 20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '30px',
          width: '100%',
        }}
      >
        <img src={imgSeal} alt="Fast and Free Shipping" style={{ width: '140px', height: 'auto' }} />

        <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
          <h2 style={{ color: 'var(--color-deep)', fontSize: 'clamp(24px, 4vw, 32px)', margin: '0 0 5px 0', fontWeight: '800' }}>
            Every 6 Bottles Order
          </h2>
          <h2
            style={{
              color: 'var(--color-accent)',
              fontSize: 'clamp(24px, 4vw, 32px)',
              margin: '0 0 12px 0',
              fontWeight: '800',
              textDecoration: 'underline',
            }}
          >
            Gets FREE Shipping Too!
          </h2>
          <p style={{ color: '#666666', fontSize: '18px', margin: 0, fontWeight: '500' }}>
            *97% Of Customers Order 6 Bottles (Our Recommended Option)
          </p>
        </div>
      </div>

      <section id="pricing" style={{ padding: '60px 24px', backgroundColor: '#f9f9f9', color: '#333' }}>
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'stretch',
            gap: '20px',
          }}
        >
          {PRICING_PACKAGES.map(pkg => (
            <div
              key={pkg.id}
              style={{
                width: '100%',
                flex: pkg.highlight ? '1 1 280px' : '1 1 250px',
                maxWidth: pkg.highlight ? '320px' : '290px',
                backgroundColor: pkg.highlight ? '#fdf8ce' : '#ffffff',
                border: pkg.highlight ? '4px solid var(--color-deep)' : '1px solid #e0e0e0',
                borderRadius: '10px',
                padding: pkg.highlight ? 'clamp(26px, 4vw, 34px) clamp(18px, 3vw, 24px)' : 'clamp(22px, 3.5vw, 30px) clamp(16px, 3vw, 20px)',
                textAlign: 'center',
                boxShadow: pkg.highlight ? '0 16px 34px rgba(0,0,0,0.2)' : '0 6px 14px rgba(0,0,0,0.08)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                transform: pkg.highlight ? 'scale(1.02) translateY(-8px)' : 'scale(1)',
                transition: 'all 0.3s ease',
                zIndex: pkg.highlight ? 2 : 1,
              }}
              onMouseEnter={e => {
                if (pkg.highlight) {
                  e.currentTarget.style.transform = 'scale(1.06) translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 26px 48px rgba(0,0,0,0.3)'
                  e.currentTarget.style.zIndex = '10'
                } else {
                  e.currentTarget.style.transform = 'scale(1.02)'
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.12)'
                  e.currentTarget.style.zIndex = '5'
                }
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = pkg.highlight ? 'scale(1.02) translateY(-8px)' : 'scale(1)'
                e.currentTarget.style.boxShadow = pkg.highlight ? '0 16px 34px rgba(0,0,0,0.2)' : '0 6px 14px rgba(0,0,0,0.08)'
                e.currentTarget.style.zIndex = pkg.highlight ? '2' : '1'
              }}
            >
              {pkg.highlight && (
                <>
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      top: '-14px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 0,
                      height: 0,
                      borderLeft: '11px solid transparent',
                      borderRight: '11px solid transparent',
                      borderTop: '11px solid #ff4d4d',
                    }}
                  />
                  <div
                    style={{
                      margin: '-34px -24px 18px -24px',
                      backgroundColor: '#ff4d4d',
                      color: '#fff',
                      fontWeight: 800,
                      fontSize: 'clamp(12px, 2vw, 14px)',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      padding: '11px 14px',
                      borderRadius: '6px 6px 0 0',
                      textAlign: 'center',
                    }}
                  >
                    $163 E-Book Bonus
                  </div>
                </>
              )}

              <p
                style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  color: pkg.highlight ? '#b8860b' : 'var(--color-accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  margin: '0 0 8px 0',
                }}
              >
                {pkg.badgeLabel}
              </p>

              <h3
                style={{
                  fontSize: pkg.highlight ? 'clamp(22px, 4vw, 26px)' : 'clamp(20px, 3.5vw, 24px)',
                  color: 'var(--color-deep)',
                  margin: '0 0 4px 0',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  fontWeight: 800,
                }}
              >
                {pkg.title}
              </h3>
              <p style={{ fontSize: '13px', color: '#666', margin: '0 0 20px 0' }}>{pkg.subtitle}</p>

              <img
                src={pkg.image}
                alt={pkg.title}
                style={{
                  height: pkg.highlight ? 'clamp(150px, 20vw, 190px)' : 'clamp(140px, 18vw, 170px)',
                  width: 'auto',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  borderRadius: '14px',
                  boxShadow: '10px 8px 20px rgba(0,0,0,0.2)',
                  marginBottom: '20px',
                  display: 'block',
                  alignSelf: 'center',
                }}
              />

              <div style={{ color: 'var(--color-deep)', marginBottom: '20px', display: 'flex', justifyContent: 'center', alignItems: 'baseline' }}>
                <span style={{ fontSize: pkg.highlight ? 'clamp(44px, 9vw, 58px)' : 'clamp(40px, 8vw, 52px)', fontWeight: 'bold', lineHeight: '1' }}>
                  ${pkg.price}
                </span>
                <span style={{ fontSize: '15px', marginLeft: '4px' }}>/ Bottle</span>
              </div>

              <div style={{ marginBottom: '24px', flexGrow: 1 }}>
                {pkg.perks.map((perk, i) => (
                  <div
                    key={i}
                    style={{
                      border: '1.5px dashed #aaa',
                      borderRadius: '6px',
                      padding: '9px',
                      marginBottom: '8px',
                      fontSize: '13px',
                      fontWeight: 'bold',
                      backgroundColor: pkg.highlight ? '#fcf49a' : '#fff',
                    }}
                  >
                    <span style={{ color: '#4caf50', marginRight: '6px' }}>✔</span> {perk}
                  </div>
                ))}
              </div>

              {/* Era um <button> com window.location.href — trocado por <a> real:
                  melhor acessibilidade, permite abrir em nova aba/clique do meio,
                  e o GA4/Google Ads consegue rastrear cliques de saída em <a> nativamente. */}
              <a
                href={pkg.link}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                style={{
                  backgroundColor: '#ffd700',
                  background: 'linear-gradient(to bottom, #ffe800, #ffb300)',
                  color: '#000',
                  border: '1px solid #d49a00',
                  borderRadius: '9px',
                  padding: '15px',
                  fontSize: 'clamp(18px, 3.5vw, 22px)',
                  fontWeight: '900',
                  cursor: 'pointer',
                  marginBottom: '14px',
                  boxShadow: '0 6px 10px rgba(0,0,0,0.22)',
                  width: '100%',
                  display: 'block',
                  textAlign: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease-in-out',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.03)'
                  e.currentTarget.style.boxShadow = '0 12px 18px rgba(0,0,0,0.42)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.boxShadow = '0 6px 10px rgba(0,0,0,0.22)'
                }}
              >
                BUY NOW
              </a>

              <div style={{ fontSize: '14px', color: '#333', marginBottom: '10px' }}>
                TOTAL: <del style={{ color: '#888', marginRight: '8px' }}>{pkg.oldTotal}</del>
                <span style={{ fontWeight: 'bold', fontSize: '18px' }}>{pkg.newTotal}</span>
              </div>

              <div style={{ fontSize: '13px', color: '#555' }}>{pkg.shipping}</div>
            </div>
          ))}
        </div>

        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '40px', paddingBottom: '20px' }}>
          <img src={imgCreditCards} alt="Accepted payment methods" style={{ width: '100%', maxWidth: '320px', height: 'auto' }} />
        </div>

        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '10px',
            paddingBottom: '40px',
            fontFamily: "'Montserrat', Arial, sans-serif",
          }}
        >
          <p style={{ fontSize: '24px', color: '#1a1a1a', margin: '0', marginBottom: '-25px' }}>Our customers say</p>

          <img
            src={imgEstrelas}
            alt="4.5 out of 5 stars"
            style={{
              width: '100%',
              maxWidth: '220px',
              height: 'auto',
              marginTop: '-60px',
              marginBottom: '-53px',
              position: 'relative',
              zIndex: 2,
            }}
          />

          <p style={{ fontSize: '20px', color: '#1a1a1a', margin: '0', marginTop: '-25px' }}>
            based on <strong style={{ fontWeight: '900' }}>14,369 reviews!</strong>
          </p>
        </div>
      </section>

      {/* GARANTIA */}
      <div style={{ backgroundColor: 'var(--color-deep)', padding: '60px 20px', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: '40px',
            maxWidth: '850px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ flexShrink: 0, textAlign: 'center', width: '100%', maxWidth: '160px', margin: '0 auto' }}>
            <img src={selo60dias} alt="60-Day Money Back Guarantee" style={{ width: '100%', height: 'auto' }} />
          </div>

          <div style={{ flex: 1, minWidth: '250px' }}>
            <h3 style={{ color: 'var(--color-deep)', fontSize: '26px', margin: '0 0 12px 0', fontWeight: '800', fontFamily: 'Arial, sans-serif' }}>
              100% Satisfaction
              <br />
              60-Day Money Back Guarantee
            </h3>
            <p style={{ color: '#444444', fontSize: '16px', lineHeight: '1.6', margin: 0, fontFamily: 'Arial, sans-serif' }}>
              Your order today is covered by our iron-clad <strong>60-day 100% money-back guarantee</strong>. If you are not impressed with the results, then just write to us and we'll refund every single cent.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
