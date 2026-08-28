// ─── src/pages/LandingPage/Pricing.tsx ────────────────────────────────────────

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

// ─── Pricing ──────────────────────────────────────────────────────────────────

export default function Pricing() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const MOBILE_ORDER: Record<string, number> = { 'pack-6': 0, 'pack-3': 1, 'pack-2': 2 };
  const displayPackages = isMobile
    ? [...PRICING_PACKAGES].sort((a, b) => MOBILE_ORDER[a.id] - MOBILE_ORDER[b.id])
    : PRICING_PACKAGES;

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
    {/* FAIXA 1: FRETE GRÁTIS + CLAIM BANNER (mobile: bloco único, mesma cor, sem gap) */}
        {isMobile ? (
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
        ) : (
          <div style={{
            backgroundColor: '#ffffff',
            padding: '60px 20px 30px 20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '30px',
            width: '100%'
          }}>
            <img src={imgSeal} alt="Fast and Free Shipping" style={{ width: '140px', height: 'auto' }} />
            <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
              <h2 style={{ color: 'var(--color-deep)', fontSize: 'clamp(19px, 5.5vw, 32px)', margin: '0 0 4px 0', fontWeight: '800', lineHeight: 1.2 }}>
                Every 6 Bottles Order
              </h2>
              <h2 style={{ color: 'var(--color-accent)', fontSize: 'clamp(19px, 5.5vw, 32px)', margin: '0 0 8px 0', fontWeight: '800', textDecoration: 'underline', lineHeight: 1.2 }}>
                Gets FREE Shipping Too!
              </h2>
              <p style={{ color: '#666666', fontSize: 'clamp(13px, 3.2vw, 18px)', margin: 0, fontWeight: '500' }}>
                *97% Of Customers Order 6 Bottles (Our Recommended Option)
              </p>
            </div>
          </div>
        )}

    <section id="pricing" style={{ padding: isMobile ? '32px 14px 14px 14px' : '100px 24px 24px 24px', backgroundColor: '#f9f9f9', color: '#333' }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'stretch',
        gap: isMobile ? '20px' : '20px'
      }}>

        {displayPackages.map((pkg) => (
          <div
        key={pkg.id}
        id={pkg.highlight ? 'pricing-highlight' : undefined}
        style={
          isMobile
            ? {
                width: '100%',
                flex: pkg.highlight ? '1 1 340px' : '1 1 280px',
                maxWidth: '440px',
                margin: '0',
                padding: 0,
                position: 'relative',
                zIndex: pkg.highlight ? 2 : 1,
              }
            : {
                width: '100%',
                flex: pkg.highlight ? '1 1 340px' : '1 1 280px',
                maxWidth: pkg.highlight ? '400px' : '320px',
                margin: pkg.highlight ? '0 24px' : '0',
                backgroundColor: pkg.highlight ? '#fdf8ce' : '#ffffff',
                border: pkg.highlight ? '4px solid var(--color-deep)' : '1px solid #e0e0e0',
                borderRadius: '10px',
                padding: 0,
                overflow: 'hidden',
                textAlign: 'center',
                boxShadow: pkg.highlight ? '0 16px 34px rgba(0,0,0,0.2)' : '0 6px 14px rgba(0,0,0,0.08)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                transform: pkg.highlight ? 'scale(1.1) translateY(-10px)' : 'none',
                transition: 'all 0.3s ease',
                zIndex: pkg.highlight ? 2 : 1
              }
        }
        onMouseEnter={(e) => {
          if (isMobile) return;
          if (pkg.highlight) {
            e.currentTarget.style.transform = 'scale(1.14) translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 26px 48px rgba(0,0,0,0.3)';
            e.currentTarget.style.zIndex = '10';
          } else {
            e.currentTarget.style.transform = 'scale(1.02)';
            e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.12)';
            e.currentTarget.style.zIndex = '5';
          }
        }}
        onMouseLeave={(e) => {
          if (isMobile) return;
          e.currentTarget.style.transform = pkg.highlight ? 'scale(1.1) translateY(-10px)' : 'scale(1)';
          e.currentTarget.style.boxShadow = pkg.highlight ? '0 16px 34px rgba(0,0,0,0.2)' : '0 6px 14px rgba(0,0,0,0.08)';
          e.currentTarget.style.zIndex = pkg.highlight ? '2' : '1';
        }}
      >

            <div style={
              isMobile
                ? {
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
                  }
                : undefined
            }>

            {/* Header full-width de cor sólida (mobile), igual ao site original */}
            {isMobile && (
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
            )}

            {!isMobile && (
              pkg.highlight ? (
                <div style={{
                  backgroundColor: '#ff4d4d',
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: 'clamp(13px, 2vw, 15px)',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  padding: '11px 14px',
                  textAlign: 'center',
                }}>
                  $163 E-Book Bonus
                </div>
              ) : (
                <div style={{
                  backgroundColor: 'var(--color-accent)',
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: '13px',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  padding: '9px 14px',
                  textAlign: 'center',
                }}>
                  {pkg.badgeLabel}
                </div>
              )
            )}

            <div style={{
              padding: isMobile ? (pkg.highlight ? '14px 18px 4px 18px' : '22px 18px 4px 18px') : (pkg.highlight ? '22px 32px 0 32px' : '20px 26px 0 26px'),
              display: isMobile ? 'grid' : 'block',
              gridTemplateColumns: isMobile ? '1fr 1fr' : undefined,
              gap: isMobile ? '10px' : undefined,
              alignItems: isMobile ? 'start' : undefined,
              textAlign: isMobile ? 'left' : 'center',
            }}>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'flex-start' : 'center' }}>
                {!isMobile && (
                  <p style={{
                    fontSize: '12px',
                    fontWeight: 800,
                    color: pkg.highlight ? '#b8860b' : 'var(--color-accent)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    margin: '0 0 8px 0'
                  }}>
                    {pkg.badgeLabel}
                  </p>
                )}

                <h3 style={{
                  fontSize: isMobile ? 'clamp(17px, 4.6vw, 20px)' : (pkg.highlight ? 'clamp(25px, 4.5vw, 30px)' : 'clamp(22px, 3.8vw, 27px)'),
                  color: isMobile ? (pkg.highlight ? TEAL_DARK : TEAL_LIGHT) : 'var(--color-deep)',
                  margin: '0 0 2px 0',
                  textTransform: isMobile ? (pkg.highlight ? 'uppercase' : 'none') : 'uppercase',
                  letterSpacing: isMobile ? '-0.01em' : '0.5px',
                  fontWeight: isMobile ? 700 : 800,
                  lineHeight: 1.15,
                }}>
                  {isMobile
                    ? (pkg.highlight ? pkg.title : pkg.title.charAt(0) + pkg.title.slice(1).toLowerCase().replace('bottles', 'Bottles'))
                    : pkg.title}
                </h3>
                <p style={{ fontSize: isMobile ? '11px' : '13px', color: isMobile ? '#9a9a9e' : '#666', fontWeight: isMobile ? 500 : undefined, margin: isMobile ? '0 0 10px 0' : '0 0 20px 0' }}>{pkg.subtitle}</p>

                <div style={{ position: 'relative', width: isMobile ? '100%' : 'auto', alignSelf: isMobile ? 'flex-start' : 'center' }}>
                  <img src={pkg.image} alt={pkg.title} style={{
                    height: isMobile ? (pkg.highlight ? 'clamp(100px, 26vw, 140px)' : 'clamp(85px, 22vw, 115px)') : (pkg.highlight ? 'clamp(170px, 24vw, 230px)' : 'clamp(160px, 20vw, 195px)'),
                    width: 'auto',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    borderRadius: isMobile ? '0' : '14px',
                    boxShadow: isMobile ? 'none' : '10px 8px 20px rgba(0,0,0,0.2)',
                    marginBottom: isMobile ? '0' : '20px',
                    display: 'block',
                  }} />
                </div>

                {isMobile && pkg.highlight && (
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

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'stretch' : 'center' }}>
                <div style={{ marginBottom: isMobile ? '8px' : '24px', flexGrow: isMobile ? 0 : 1, width: '100%' }}>
                  {pkg.perks.map((perk, i) => (
                    isMobile ? (
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
                    ) : (
                      <div key={i} style={{
                        border: '1.5px dashed #aaa',
                        borderRadius: '6px',
                        padding: pkg.highlight ? '11px' : '9px',
                        marginBottom: '8px',
                        fontSize: pkg.highlight ? '14px' : '13px',
                        fontWeight: 'bold',
                        lineHeight: 1.25,
                        backgroundColor: pkg.highlight ? '#fcf49a' : '#fff'
                      }}>
                        <span style={{ color: '#4caf50', marginRight: '4px' }}>✔</span> {perk}
                      </div>
                    )
                  ))}
                </div>

                <div style={{ color: isMobile ? (pkg.highlight ? TEAL_DARK : TEAL_LIGHT) : 'var(--color-deep)', marginBottom: isMobile ? '4px' : '20px', display: 'flex', justifyContent: isMobile ? 'flex-start' : 'center', alignItems: 'baseline' }}>
                  <span style={{
                    fontSize: isMobile ? 'clamp(34px, 11vw, 46px)' : (pkg.highlight ? 'clamp(52px, 10vw, 68px)' : 'clamp(44px, 8.5vw, 57px)'),
                    fontWeight: isMobile ? 800 : 'bold',
                    letterSpacing: isMobile ? '-0.02em' : undefined,
                    lineHeight: '1'
                  }}>${pkg.price}</span>
                  <span style={{
                    fontSize: isMobile ? '13px' : (pkg.highlight ? '17px' : '15px'),
                    fontWeight: isMobile ? 600 : undefined,
                    color: isMobile ? '#8a8a8e' : undefined,
                    marginLeft: '4px'
                  }}>/ Bottle</span>
                </div>

                {/* No mobile, para os cards SEM destaque, o botão/total/pagamento ficam
                    dentro desta coluna direita (mais estreita), igual ao site original.
                    Para o card "Best Value" essa parte fica fora da grid, em largura total. */}
                {isMobile && !pkg.highlight && (
                  <BuyBlock pkg={pkg} isMobile={isMobile} />
                )}
              </div>
            </div>

            {(!isMobile || pkg.highlight) && (
              <div style={{ padding: isMobile ? '10px 18px 20px 18px' : (pkg.highlight ? '0 32px 44px 32px' : '0 26px 38px 26px') }}>
                <BuyBlock pkg={pkg} isMobile={isMobile} />
              </div>
            )}
            </div>

          </div>
        ))}

      </div>
        {!isMobile && (
          <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '60px',
            paddingBottom: '10px'
          }}>
            <img
              src={imgCreditCards}
              alt="Cartões Aceitos"
              style={{ width: '100%', maxWidth: '320px', height: 'auto' }}
            />
          </div>
        )}
      <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: isMobile ? '28px' : '30px',
        paddingBottom: '0px',
        fontFamily: "'Montserrat', Arial, sans-serif"
      }}>
        <p style={{ fontSize: isMobile ? '18px' : '24px', color: '#1a1a1a', margin: '0', marginBottom: isMobile ? '-16px' : '-25px' }}>
          Our customers say
        </p>

        <img
          src={imgEstrelas}
          alt="4.5 de 5 estrelas"
          style={{
            width: '100%',
            maxWidth: isMobile ? '170px' : '220px',
            height: 'auto',
            marginTop: isMobile ? '-38px' : '-60px',
            marginBottom: isMobile ? '-34px' : '-53px',
            position: 'relative',
            zIndex: 2
          }}
        />

        <p style={{ fontSize: isMobile ? '15px' : '20px', color: '#1a1a1a', margin: '0', marginTop: isMobile ? '-16px' : '-25px' }}>
          based on <strong style={{ fontWeight: '900' }}>14,369 reviews!</strong>
        </p>
      </div>

    </section>

        <div style={{ backgroundColor: isMobile ? '#519AAA' : 'var(--color-deep)', padding: isMobile ? '36px 16px' : '60px 20px', width: '100%', display: 'flex', justifyContent: 'center' }}>

          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: isMobile ? '30px 24px 28px' : '40px',
            maxWidth: '850px',
            width: '100%',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'stretch' : 'center',
            gap: isMobile ? '18px' : '40px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            flexWrap: isMobile ? 'nowrap' : 'wrap'
          }}>

            <div style={{ flexShrink: 0, textAlign: 'center', width: '100%', maxWidth: isMobile ? '230px' : '160px', margin: '0 auto' }}>
              <img
                src={selo60dias}
                alt="60-Day Money Back Guarantee"
                style={{ width: '100%', height: 'auto', filter: isMobile ? 'drop-shadow(0 12px 18px rgba(0,0,0,0.2))' : undefined }}
              />
            </div>

            <div style={{ flex: 1, minWidth: isMobile ? undefined : '250px', textAlign: isMobile ? 'left' : undefined }}>
              <h3 style={{ color: 'var(--color-deep)', fontSize: isMobile ? '19px' : '26px', margin: '0 0 10px 0', fontWeight: '800', fontFamily: 'Arial, sans-serif', lineHeight: 1.25 }}>
                100% Satisfaction<br/>
                60-Day Money Back Guarantee
              </h3>
              <p style={{ color: '#444444', fontSize: isMobile ? '14px' : '16px', lineHeight: '1.6', margin: 0, fontFamily: 'Arial, sans-serif' }}>
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
// dentro da coluna direita (cards sem destaque, mobile) quanto em largura
// total abaixo da grid (card "Best Value" e desktop), igual ao site original.

function BuyBlock({ pkg, isMobile }: { pkg: typeof PRICING_PACKAGES[number]; isMobile: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'relative' }}>
        <button
          id={`buy-button-${pkg.id}`}
          onClick={() => {
            if ((window as any).clarity) {
              (window as any).clarity('set', 'offer', pkg.title);
              (window as any).clarity('event', 'clickbank_cta_click');
            }
            (window as any).gtag_report_conversion ? (window as any).gtag_report_conversion(pkg.link) : window.location.href = pkg.link;
          }}
          style={{
            backgroundColor: isMobile ? undefined : '#ffd700',
            background: isMobile ? 'linear-gradient(180deg,#ffdf5c,#f0b400)' : 'linear-gradient(to bottom, #ffe800, #ffb300)',
            color: isMobile ? '#1a1400' : '#000',
            border: isMobile ? 'none' : '1px solid #d49a00',
            borderRadius: isMobile ? '16px' : '9px',
            padding: isMobile ? '15px' : '15px',
            fontSize: isMobile ? 'clamp(15px, 4.5vw, 17px)' : 'clamp(18px, 3.5vw, 22px)',
            fontWeight: isMobile ? 700 : '900',
            letterSpacing: isMobile ? '-0.01em' : undefined,
            cursor: 'pointer',
            marginBottom: isMobile ? '12px' : '14px',
            boxShadow: isMobile ? '0 1px 0 rgba(255,255,255,0.6) inset, 0 10px 20px -8px rgba(200,150,0,0.55)' : '0 6px 10px rgba(0,0,0,0.22)',
            width: '100%',
            transition: 'all 0.2s ease-in-out',
            animation: isMobile && pkg.highlight ? 'pronailBuyPulse 1.7s ease-in-out infinite' : undefined,
          }}
          onMouseEnter={(e) => {
            if (isMobile) return;
            e.currentTarget.style.transform = 'scale(1.03)';
            e.currentTarget.style.boxShadow = '0 12px 18px rgba(0,0,0,0.42)';
          }}
          onMouseLeave={(e) => {
            if (isMobile) return;
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 6px 10px rgba(0,0,0,0.22)';
          }}
        >
          BUY NOW
        </button>

        {isMobile && pkg.highlight && (
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
        fontSize: isMobile ? '12px' : '14px',
        color: isMobile ? (pkg.highlight ? '#c9880f' : '#6b6b6e') : '#333',
        marginBottom: isMobile ? '8px' : '10px',
        textAlign: isMobile ? 'center' : undefined,
      }}>
        TOTAL: <del style={{ color: isMobile ? '#b0b0b3' : '#888', marginRight: '6px' }}>{pkg.oldTotal}</del>
        <span style={{ fontWeight: isMobile ? 800 : 'bold', fontSize: isMobile ? '15px' : '18px', color: isMobile ? (pkg.highlight ? '#c9880f' : 'var(--color-deep)') : undefined }}>{pkg.newTotal}</span>
      </div>

      <img
        src={imgCreditCards}
        alt="Cartões Aceitos"
        style={{ width: isMobile ? (pkg.highlight ? '150px' : '120px') : '0', maxWidth: '100%', height: 'auto', display: isMobile ? 'block' : 'none', margin: isMobile ? '0 auto 6px auto' : undefined, opacity: isMobile ? 0.9 : undefined }}
      />

      <div style={{ fontSize: isMobile ? '11px' : '13px', color: isMobile ? (pkg.highlight ? TEAL_DARK : '#9a9a9e') : '#555', textAlign: isMobile ? 'center' : undefined, fontWeight: isMobile ? (pkg.highlight ? 700 : 500) : undefined }}>
        {pkg.shipping}
      </div>
    </div>
  );
}
