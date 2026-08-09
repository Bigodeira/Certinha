// ─── src/pages/LandingPage/Pricing.tsx ────────────────────────────────────────

import { useState, useEffect } from 'react'
import imgCreditCards from '../../creditcards.png';
import img2Bottles from '../../2frascos.png';
import img6Bottles from '../../6frascos.png'; // O pacote de 3+3
import img3Bottles from '../../3frascos.png'; // O pacote de 2+1
import imgSeal from '../../entregagratis.png';
import selo60dias from '../../60dias.png';
import imgEstrelas from '../../estrelas.png';

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

  const pillBackground = (pkg: typeof PRICING_PACKAGES[number]) =>
    pkg.highlight
      ? 'linear-gradient(180deg,#f4c430,#d49a00)'
      : pkg.badgeLabel === 'Most Popular'
        ? 'linear-gradient(180deg,#4fc3ac,#2f9484)'
        : 'linear-gradient(180deg,#8b8b90,#6a6a6f)';

  return (
    <>
    {/* FAIXA 1: FRETE GRÁTIS */}
        {isMobile ? (
          <div style={{
            backgroundColor: 'var(--color-deep)',
            padding: '28px 16px 22px',
            display: 'flex',
            justifyContent: 'center',
            width: '100%'
          }}>
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '22px',
              padding: '26px 20px',
              textAlign: 'center',
              width: '100%',
              boxShadow: '0 20px 40px -20px rgba(0,0,0,0.4)'
            }}>
              <img
                src={imgSeal}
                alt="Fast and Free Shipping"
                style={{ width: '110px', height: 'auto', margin: '0 auto 12px auto', display: 'block', filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.15))' }}
              />
              <h2 style={{ color: 'var(--color-deep)', fontSize: 'clamp(19px, 5.5vw, 22px)', margin: '0 0 2px 0', fontWeight: '700', letterSpacing: '-0.01em', lineHeight: 1.25, fontFamily: 'Arial, sans-serif' }}>
                Every 6 Bottles Order
              </h2>
              <h2 style={{ color: 'var(--color-accent)', fontSize: 'clamp(19px, 5.5vw, 22px)', margin: '0 0 8px 0', fontWeight: '700', letterSpacing: '-0.01em', lineHeight: 1.25, fontFamily: 'Arial, sans-serif' }}>
                Gets FREE Shipping Too!
              </h2>
              <p style={{ color: '#8a8a8e', fontSize: '13px', margin: '8px 0 0', fontWeight: '500', lineHeight: 1.4, fontFamily: 'Arial, sans-serif' }}>
                *97% Of Customers Order 6 Bottles (Our Recommended Option)
              </p>
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

    {/* FAIXA NOVA: "Claim Your Discounted..." — EXCLUSIVA DO MOBILE, não afeta o desktop */}
    {isMobile && (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '0 16px', margin: '20px 0 26px' }}>
        <div style={{
          background: 'var(--color-deep)',
          color: '#ffffff',
          textAlign: 'center',
          fontWeight: 800,
          fontSize: 'clamp(15px, 4.6vw, 18px)',
          lineHeight: 1.35,
          padding: '18px 18px 16px',
          maxWidth: '440px',
          width: '100%',
          position: 'relative',
          fontFamily: 'Arial, sans-serif',
        }}>
          Claim Your Discounted<br />
          ProNail Complex<br />
          Below While Stocks Last!
          <div style={{
            position: 'absolute',
            left: '50%',
            bottom: '-16px',
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderLeft: '16px solid transparent',
            borderRight: '16px solid transparent',
            borderTop: '16px solid var(--color-deep)',
          }} />
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
                paddingTop: '13px',
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

            {isMobile && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                padding: '6px 16px',
                borderRadius: '100px',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.03em',
                color: '#fff',
                whiteSpace: 'nowrap',
                zIndex: 3,
                boxShadow: '0 6px 14px -4px rgba(0,0,0,0.35)',
                background: pillBackground(pkg),
              }}>
                {pkg.badgeLabel}
              </div>
            )}

            <div style={
              isMobile
                ? {
                    background: pkg.highlight ? 'linear-gradient(180deg, #fffdf2, #fffaf0)' : '#ffffff',
                    border: pkg.highlight ? '1px solid rgba(212,166,0,0.22)' : '1px solid rgba(0,0,0,0.06)',
                    borderRadius: '26px',
                    boxShadow: pkg.highlight
                      ? '0 1px 0 rgba(255,255,255,0.7) inset, 0 26px 46px -24px rgba(180,140,0,0.28)'
                      : '0 1px 0 rgba(255,255,255,0.6) inset, 0 24px 40px -26px rgba(0,0,0,0.22)',
                    overflow: 'hidden',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                  }
                : undefined
            }>

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

            {isMobile && pkg.highlight && (
              <div style={{
                background: 'linear-gradient(180deg,#ff6961,#ef4136)',
                color: '#fff',
                fontWeight: 700,
                fontSize: '12px',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                padding: '16px 16px 8px',
                textAlign: 'center',
              }}>
                $163 E-Book Bonus
              </div>
            )}

            <div style={{
              padding: isMobile ? (pkg.highlight ? '14px 18px 4px 18px' : '22px 18px 4px 18px') : (pkg.highlight ? '22px 32px 0 32px' : '20px 26px 0 26px'),
              display: isMobile ? 'grid' : 'block',
              gridTemplateColumns: isMobile ? '1fr 1fr' : undefined,
              gap: isMobile ? '10px' : undefined,
              alignItems: isMobile ? 'center' : undefined,
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
                  color: 'var(--color-deep)',
                  margin: '0 0 2px 0',
                  textTransform: isMobile ? 'none' : 'uppercase',
                  letterSpacing: isMobile ? '-0.01em' : '0.5px',
                  fontWeight: isMobile ? 700 : 800,
                  lineHeight: 1.15,
                }}>
                  {isMobile ? pkg.title.charAt(0) + pkg.title.slice(1).toLowerCase().replace('bottles', 'Bottles') : pkg.title}
                </h3>
                <p style={{ fontSize: isMobile ? '11px' : '13px', color: isMobile ? '#9a9a9e' : '#666', fontWeight: isMobile ? 500 : undefined, margin: isMobile ? '0 0 10px 0' : '0 0 20px 0' }}>{pkg.subtitle}</p>

                <img src={pkg.image} alt={pkg.title} style={{
                  height: isMobile ? 'clamp(90px, 24vw, 130px)' : (pkg.highlight ? 'clamp(170px, 24vw, 230px)' : 'clamp(160px, 20vw, 195px)'),
                  width: 'auto',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  borderRadius: isMobile ? '14px' : '14px',
                  boxShadow: isMobile ? '0 10px 18px -8px rgba(0,0,0,0.25)' : '10px 8px 20px rgba(0,0,0,0.2)',
                  marginBottom: isMobile ? '0' : '20px',
                  display: 'block',
                  alignSelf: isMobile ? 'flex-start' : 'center',
                }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'stretch' : 'center' }}>
                <div style={{ marginBottom: isMobile ? '8px' : '24px', flexGrow: isMobile ? 0 : 1, width: '100%' }}>
                  {pkg.perks.map((perk, i) => (
                    isMobile ? (
                      <div key={i} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: pkg.highlight ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.03)',
                        borderRadius: '10px',
                        padding: '7px 9px',
                        marginBottom: '6px',
                        fontSize: '10.5px',
                        fontWeight: 600,
                        color: '#3a3a3c',
                        lineHeight: 1.2,
                      }}>
                        <span style={{
                          width: '14px', height: '14px', borderRadius: '50%',
                          backgroundColor: 'var(--color-accent)',
                          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                          flexShrink: 0,
                        }}>
                          <svg width="8" height="8" viewBox="0 0 10 8" fill="none">
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

                <div style={{ color: 'var(--color-deep)', marginBottom: isMobile ? '4px' : '20px', display: 'flex', justifyContent: isMobile ? 'flex-start' : 'center', alignItems: 'baseline' }}>
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
              </div>
            </div>
            </div>

            <div style={{ padding: isMobile ? '6px 18px 20px 18px' : (pkg.highlight ? '0 32px 44px 32px' : '0 26px 38px 26px') }}>
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

              <div style={{
                fontSize: isMobile ? '12px' : '14px',
                color: isMobile ? '#6b6b6e' : '#333',
                marginBottom: isMobile ? '8px' : '10px',
                textAlign: isMobile ? 'center' : undefined,
              }}>
                TOTAL: <del style={{ color: isMobile ? '#b0b0b3' : '#888', marginRight: '6px' }}>{pkg.oldTotal}</del>
                <span style={{ fontWeight: isMobile ? 800 : 'bold', fontSize: isMobile ? '15px' : '18px', color: isMobile ? 'var(--color-deep)' : undefined }}>{pkg.newTotal}</span>
              </div>

              <img
                src={imgCreditCards}
                alt="Cartões Aceitos"
                style={{ width: isMobile ? '150px' : '0', maxWidth: '100%', height: 'auto', display: isMobile ? 'block' : 'none', margin: isMobile ? '0 auto 6px auto' : undefined, opacity: isMobile ? 0.9 : undefined }}
              />

              <div style={{ fontSize: isMobile ? '11px' : '13px', color: isMobile ? '#9a9a9e' : '#555', textAlign: isMobile ? 'center' : undefined, fontWeight: isMobile ? 500 : undefined }}>
                {pkg.shipping}
              </div>
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

        <div style={{ backgroundColor: 'var(--color-deep)', padding: isMobile ? '36px 16px' : '60px 20px', width: '100%', display: 'flex', justifyContent: 'center' }}>

          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: isMobile ? '24px 20px' : '40px',
            maxWidth: '850px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '20px' : '40px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            flexWrap: 'wrap'
          }}>

            <div style={{ flexShrink: 0, textAlign: 'center', width: '100%', maxWidth: isMobile ? '110px' : '160px', margin: '0 auto' }}>
              <img
                src={selo60dias}
                alt="60-Day Money Back Guarantee"
                style={{ width: '100%', height: 'auto', filter: isMobile ? 'drop-shadow(0 10px 16px rgba(0,0,0,0.18))' : undefined }}
              />
            </div>

            <div style={{ flex: 1, minWidth: '250px' }}>
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