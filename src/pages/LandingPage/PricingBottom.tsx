// ─── src/pages/LandingPage/PricingBottom.tsx ──────────────────────────────────
// Duplicata da seção Pricing, renderizada ABAIXO da seção de FAQ.
// Regra: essa seção só aparece no MOBILE. No desktop o componente retorna
// null e não altera em nada o layout existente.

import { useState, useEffect } from 'react'
import imgCreditCards from '../../creditcards.png';
import img2Bottles from '../../2frascos.png';
import img6Bottles from '../../6frascos.png'; // O pacote de 3+3
import img3Bottles from '../../3frascos.png'; // O pacote de 2+1
import imgSeal from '../../entregagratis.png';
import selo60dias from '../../60dias.png';
import imgEstrelas from '../../estrelas.png';
import imgLivrosBonus from '../../livrosbonus.png'; // Imagem dos 3 e-books bônus (pacote Best Value)

// ─── Paleta (mobile) — cores extraídas do site original ──────────────────────

const TEAL_DARK = '#3C97AB';   // header "BEST VALUE!" / faixa "Claim Your Discounted"
const TEAL_LIGHT = '#99C7D1';  // headers "Most popular" e "Basic"
const CARD_BG_HIGHLIGHT = '#F9F8DA';
const PERK_YELLOW = '#FFFF8F';
const CHECK_GREEN = '#5AC150';
const DARK_BANNER_BG = '#272727';

// ─── Data ─────────────────────────────────────────────────────────────────────

const PRICING_PACKAGES = [
  {
    id: 'pack-2',
    badgeLabel: 'Basic',
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
    badgeLabel: 'Best Value',
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
    badgeLabel: 'Most Popular',
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

// ─── PricingBottom ──────────────────────────────────────────────────────────

export default function PricingBottom() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Regra de negócio: essa seção é exclusiva do mobile. No desktop não
  // renderiza nada, preservando o layout desktop intacto.
  if (!isMobile) return null;

  const MOBILE_ORDER: Record<string, number> = { 'pack-6': 0, 'pack-3': 1, 'pack-2': 2 };
  const displayPackages = [...PRICING_PACKAGES].sort((a, b) => MOBILE_ORDER[a.id] - MOBILE_ORDER[b.id]);

  // Rótulo do header do card (mobile), igual ao site original
  const mobileHeaderLabel = (pkg: typeof PRICING_PACKAGES[number]) =>
    pkg.highlight ? 'BEST VALUE!' : pkg.badgeLabel === 'Most Popular' ? 'Most popular' : pkg.badgeLabel;

  return (
    <>
    <style>{`
      @keyframes pronailBuyPulse {
        0%, 100% { transform: scale(1); box-shadow: 0 1px 0 rgba(255,255,255,0.6) inset, 0 10px 20px -8px rgba(200,150,0,0.55); }
        50% { transform: scale(1.025); box-shadow: 0 1px 0 rgba(255,255,255,0.6) inset, 0 14px 26px -8px rgba(200,150,0,0.75); }
      }
      @keyframes pronailCursorTap {
        0%, 100% { transform: translateY(0) rotate(-6deg); }
        45% { transform: translateY(3px) rotate(-6deg) scale(0.9); }
        55% { transform: translateY(3px) rotate(-6deg) scale(0.9); }
      }
    `}</style>
    {/* FAIXA 1: FRETE GRÁTIS + CLAIM BANNER (versão mobile, igual ao site original) */}
    <div style={{ backgroundColor: DARK_BANNER_BG, width: '100%', paddingTop: '34px' }}>
      <div style={{ padding: '0 20px', textAlign: 'center' }}>
        <img
          src={imgSeal}
          alt="Fast and Free Shipping"
          style={{ width: '220px', height: 'auto', margin: '0 auto 18px auto', display: 'block' }}
        />
        <h2 style={{ color: '#ffffff', fontSize: 'clamp(19px, 5.5vw, 22px)', margin: '0 0 6px 0', fontWeight: '700', letterSpacing: '-0.01em', lineHeight: 1.3, fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", Arial, sans-serif' }}>
          Every 6 Bottles Order
        </h2>
        <h2 style={{ color: '#ffe14d', fontSize: 'clamp(19px, 5.5vw, 22px)', margin: '0 0 14px 0', fontWeight: '700', textDecoration: 'underline', letterSpacing: '-0.01em', lineHeight: 1.3, fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", Arial, sans-serif' }}>
          Gets FREE Shipping Too!
        </h2>
        <p style={{ color: '#b7b7b7', fontSize: '13px', margin: '0 0 26px', fontWeight: '500', lineHeight: 1.4, fontFamily: 'Arial, sans-serif' }}>
          *97% Of Customers Order 6 Bottles (Our Recommended Option)
        </p>
      </div>

      {/* Faixa teal com o CTA de reforço, terminando em ponta (bookmark), igual ao site original */}
      <div style={{
        background: TEAL_DARK,
        width: '100%',
        padding: '22px 24px 34px',
        textAlign: 'center',
        position: 'relative',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", Arial, sans-serif',
      }}>
        <h3 style={{
          fontSize: 'clamp(19px, 5.2vw, 22px)',
          fontWeight: 700,
          letterSpacing: '-0.005em',
          lineHeight: 1.3,
          color: '#ffffff',
          margin: 0,
        }}>
          Claim Your Discounted ProNail Complex
        </h3>
        <div style={{
          marginTop: '4px',
          fontSize: 'clamp(19px, 5.2vw, 22px)',
          fontWeight: 700,
          lineHeight: 1.3,
          color: '#ffffff',
        }}>
          Below While Stocks Last!
        </div>
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: '-14px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderLeft: '15px solid transparent',
            borderRight: '15px solid transparent',
            borderTop: `14px solid ${TEAL_DARK}`,
          }}
        />
      </div>
    </div>

    <section id="pricing-bottom" style={{ padding: '32px 14px 14px 14px', backgroundColor: '#f9f9f9', color: '#333' }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'stretch',
        gap: '20px'
      }}>

        {displayPackages.map((pkg) => (
          <div
            key={pkg.id}
            id={pkg.highlight ? 'pricing-highlight-bottom' : undefined}
            style={{
              width: '100%',
              flex: pkg.highlight ? '1 1 340px' : '1 1 280px',
              maxWidth: '440px',
              margin: '0',
              padding: 0,
              position: 'relative',
              zIndex: pkg.highlight ? 2 : 1,
            }}
          >

            <div style={{
              background: pkg.highlight ? CARD_BG_HIGHLIGHT : '#ffffff',
              border: pkg.highlight ? `2px solid ${TEAL_DARK}` : `1px solid ${TEAL_LIGHT}`,
              borderRadius: '22px',
              boxShadow: pkg.highlight
                ? '0 20px 40px -22px rgba(60,151,171,0.45)'
                : '0 14px 28px -20px rgba(0,0,0,0.18)',
              overflow: 'hidden',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
            }}>

              {/* Header full-width de cor sólida, igual ao site original */}
              <div style={{
                background: pkg.highlight ? TEAL_DARK : TEAL_LIGHT,
                padding: '14px 16px',
                textAlign: 'center',
              }}>
                <span style={{
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: 'clamp(16px, 5vw, 19px)',
                  letterSpacing: '0.01em',
                }}>
                  {mobileHeaderLabel(pkg)}
                </span>
              </div>

              <div style={{
                padding: '18px 18px 4px 18px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '10px',
                alignItems: 'start',
                textAlign: 'left',
              }}>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <h3 style={{
                    fontSize: 'clamp(17px, 4.6vw, 20px)',
                    color: pkg.highlight ? TEAL_DARK : TEAL_LIGHT,
                    margin: '0 0 2px 0',
                    textTransform: pkg.highlight ? 'uppercase' : 'none',
                    letterSpacing: '-0.01em',
                    fontWeight: 700,
                    lineHeight: 1.15,
                  }}>
                    {pkg.highlight ? pkg.title : pkg.title.charAt(0) + pkg.title.slice(1).toLowerCase().replace('bottles', 'Bottles')}
                  </h3>
                  <p style={{ fontSize: '11px', color: '#9a9a9e', fontWeight: 500, margin: '0 0 10px 0' }}>{pkg.subtitle}</p>

                  <div style={{ position: 'relative', width: '100%' }}>
                    <img src={pkg.image} alt={pkg.title} style={{
                      height: pkg.highlight ? 'clamp(100px, 26vw, 140px)' : 'clamp(85px, 22vw, 115px)',
                      width: 'auto',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      marginBottom: '0',
                      display: 'block',
                    }} />
                  </div>

                  {pkg.highlight && (
                    <img
                      src={imgLivrosBonus}
                      alt="3 Free eBooks"
                      style={{
                        width: '100%',
                        maxWidth: '235px',
                        height: 'auto',
                        marginTop: '6px',
                        display: 'block',
                        borderRadius: '4px',
                      }}
                    />
                  )}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
                  <div style={{ marginBottom: '8px', flexGrow: 0, width: '100%' }}>
                    {pkg.perks.map((perk, i) => (
                      <div key={i} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: (i === 0 && pkg.highlight) ? PERK_YELLOW : 'transparent',
                        border: (i === 0 && pkg.highlight) ? 'none' : '1.5px dashed #b9b9b9',
                        borderRadius: '10px',
                        padding: '7px 9px',
                        marginBottom: '6px',
                        fontSize: '10.5px',
                        fontWeight: 700,
                        color: '#3a3a3c',
                        lineHeight: 1.2,
                      }}>
                        <span style={{
                          width: '15px', height: '15px', borderRadius: '5px',
                          transform: 'rotate(45deg)',
                          backgroundColor: CHECK_GREEN,
                          boxShadow: '0 2px 4px -1px rgba(0,0,0,0.35)',
                          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                          flexShrink: 0,
                        }}>
                          <svg width="8" height="8" viewBox="0 0 10 8" fill="none" style={{ transform: 'rotate(-45deg)' }}>
                            <path d="M1 4L3.5 6.5L9 1" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {perk}
                      </div>
                    ))}
                  </div>

                  <div style={{ color: pkg.highlight ? TEAL_DARK : TEAL_LIGHT, marginBottom: '4px', display: 'flex', justifyContent: 'flex-start', alignItems: 'baseline' }}>
                    <span style={{
                      fontSize: 'clamp(34px, 11vw, 46px)',
                      fontWeight: 800,
                      letterSpacing: '-0.02em',
                      lineHeight: '1'
                    }}>${pkg.price}</span>
                    <span style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#8a8a8e',
                      marginLeft: '4px'
                    }}>/ Bottle</span>
                  </div>

                  {/* Para os cards SEM destaque, o botão/total/pagamento ficam dentro
                      desta coluna direita (mais estreita), igual ao site original. */}
                  {!pkg.highlight && (
                    <BuyBlock pkg={pkg} />
                  )}
                </div>
              </div>

              {/* Para o card "Best Value" essa parte fica fora da grid, em largura total,
                  igual ao site original (após a imagem dos e-books bônus). */}
              {pkg.highlight && (
                <div style={{ padding: '10px 18px 20px 18px' }}>
                  <BuyBlock pkg={pkg} />
                </div>
              )}

            </div>

          </div>
        ))}

      </div>

      <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '28px',
        paddingBottom: '0px',
        fontFamily: "'Montserrat', Arial, sans-serif"
      }}>
        <p style={{ fontSize: '18px', color: '#1a1a1a', margin: '0', marginBottom: '-16px' }}>
          Our customers say
        </p>

        <img
          src={imgEstrelas}
          alt="4.5 de 5 estrelas"
          style={{
            width: '100%',
            maxWidth: '170px',
            height: 'auto',
            marginTop: '-38px',
            marginBottom: '-34px',
            position: 'relative',
            zIndex: 2
          }}
        />

        <p style={{ fontSize: '15px', color: '#1a1a1a', margin: '0', marginTop: '-16px' }}>
          based on <strong style={{ fontWeight: '900' }}>14,369 reviews!</strong>
        </p>
      </div>

    </section>

    <div style={{ backgroundColor: '#519AAA', padding: '36px 16px', width: '100%', display: 'flex', justifyContent: 'center' }}>

      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '30px 24px 28px',
        maxWidth: '850px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: '18px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      }}>

        <div style={{ flexShrink: 0, textAlign: 'center', width: '100%', maxWidth: '230px', margin: '0 auto' }}>
          <img
            src={selo60dias}
            alt="60-Day Money Back Guarantee"
            style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 12px 18px rgba(0,0,0,0.2))' }}
          />
        </div>

        <div style={{ flex: 1, textAlign: 'left' }}>
          <h3 style={{ color: 'var(--color-deep)', fontSize: '19px', margin: '0 0 10px 0', fontWeight: '800', fontFamily: 'Arial, sans-serif', lineHeight: 1.25 }}>
            100% Satisfaction<br/>
            60-Day Money Back Guarantee
          </h3>
          <p style={{ color: '#444444', fontSize: '14px', lineHeight: '1.6', margin: 0, fontFamily: 'Arial, sans-serif' }}>
            Your order today is covered by our iron-clad <strong>60-day 100% money-back guarantee</strong>. If you are not impressed with the results, then just write to us and we'll refund every single cent.
          </p>
        </div>

      </div>
    </div>
    </>
  );
}

// ─── BuyBlock ─────────────────────────────────────────────────────────────────
// Botão "BUY NOW" + total + cartões + frete. Extraído para reaproveitar tanto
// dentro da coluna direita (cards sem destaque) quanto em largura total
// abaixo da grid (card "Best Value"), igual ao site original.

function BuyBlock({ pkg }: { pkg: typeof PRICING_PACKAGES[number] }) {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'relative' }}>
        <button
          id={`buy-button-${pkg.id}-bottom`}
          onClick={() => {
            if ((window as any).clarity) {
              (window as any).clarity('set', 'offer', pkg.title);
              (window as any).clarity('event', 'clickbank_cta_click');
            }
            (window as any).gtag_report_conversion ? (window as any).gtag_report_conversion(pkg.link) : window.location.href = pkg.link;
          }}
          style={{
            background: 'linear-gradient(180deg,#ffdf5c,#f0b400)',
            color: '#1a1400',
            border: 'none',
            borderRadius: '16px',
            padding: '15px',
            fontSize: 'clamp(15px, 4.5vw, 17px)',
            fontWeight: 700,
            letterSpacing: '-0.01em',
            cursor: 'pointer',
            marginBottom: '12px',
            boxShadow: '0 1px 0 rgba(255,255,255,0.6) inset, 0 10px 20px -8px rgba(200,150,0,0.55)',
            width: '100%',
            animation: pkg.highlight ? 'pronailBuyPulse 1.7s ease-in-out infinite' : undefined,
          }}
        >
          BUY NOW
        </button>

        {pkg.highlight && (
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: '-8px',
              right: '2px',
              width: '38px',
              height: '38px',
              pointerEvents: 'none',
              animation: 'pronailCursorTap 1.7s ease-in-out infinite',
              filter: 'drop-shadow(0 3px 4px rgba(0,0,0,0.35))',
            }}
          >
            <svg viewBox="0 0 24 24" width="38" height="38">
              <path
                d="M5.5 2.5L5.5 17.2L9.1 13.6L11.6 19.3L14.1 18.2L11.6 12.5L16.3 12.5L5.5 2.5Z"
                fill="#ffffff"
                stroke="#1a1400"
                strokeWidth="1.3"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>

      <div style={{
        fontSize: '12px',
        color: pkg.highlight ? '#c9880f' : '#6b6b6e',
        marginBottom: '8px',
        textAlign: 'center',
      }}>
        TOTAL: <del style={{ color: '#b0b0b3', marginRight: '6px' }}>{pkg.oldTotal}</del>
        <span style={{ fontWeight: 800, fontSize: '15px', color: pkg.highlight ? '#c9880f' : 'var(--color-deep)' }}>{pkg.newTotal}</span>
      </div>

      <img
        src={imgCreditCards}
        alt="Cartões Aceitos"
        style={{ width: pkg.highlight ? '150px' : '120px', maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto 6px auto', opacity: 0.9 }}
      />

      <div style={{ fontSize: '11px', color: pkg.highlight ? TEAL_DARK : '#9a9a9e', textAlign: 'center', fontWeight: pkg.highlight ? 700 : 500 }}>
        {pkg.shipping}
      </div>
    </div>
  );
}
