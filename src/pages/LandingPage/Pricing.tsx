// ─── src/pages/LandingPage/Pricing.tsx ────────────────────────────────────────
// Componente único que reúne as DUAS seções de banner de venda do site:
//   1) Seção "Pricing" principal (logo após o Hero/Ingredients) — desktop + mobile.
//   2) Seção "Pricing Bottom" (duplicata, exclusiva do MOBILE, renderizada
//      abaixo da FAQ). No desktop essa segunda seção não renderiza nada.
//
// Antes dividido em três arquivos (Pricing.tsx, PricingBottom.tsx e
// PricingCard.tsx). Agora tudo vive aqui: os cards de preço (mobile e
// desktop) viraram componentes internos deste mesmo arquivo.

import { useState, useEffect } from 'react';
import imgCreditCards from '../../creditcards.png';
import imgSeal from '../../entregagratis.png';
import selo60dias from '../../60dias.png';
import imgEstrelas from '../../estrelas.png';
import imgLivrosBonus from '../../livrosbonus.png'; // 3 e-books bônus (só no pacote "Best Value")
import { PRICING_PACKAGES, getMobileOrderedPackages, mobileHeaderLabel, mobileTitle, trackBuyClick } from './PricingData';
import type { PricingPackage } from './PricingData';

export default function Pricing({ bottomOnly = false }: { bottomOnly?: boolean }) {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(max-width: 768px)').matches;
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const displayPackages = isMobile ? getMobileOrderedPackages() : PRICING_PACKAGES;
  const bottomDisplayPackages = getMobileOrderedPackages();

  return (
    <>
      {!bottomOnly && (
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

      {/* ════════════════════════════════════════════════════════════════════
          SEÇÃO 1 — Pricing principal (desktop + mobile)
      ════════════════════════════════════════════════════════════════════ */}

      {/* FAIXA 1: FRETE GRÁTIS + CLAIM BANNER */}
      {isMobile ? (
        <div className="w-full bg-[#252525] pt-[34px]">
          <div className="px-5 pb-[34px] text-center">
            <img
              src={imgSeal}
              width={654}
              height={654}
              loading="lazy"
              decoding="async"
              alt="Fast and Free Shipping"
              className="mx-auto block h-auto w-[200px] max-w-[55vw]"
            />
            <h2 className="m-0 mt-6 mb-1 text-[23px] font-semibold leading-[1.15] tracking-[-0.01em] text-white font-sans">
              Every 6 Bottles Order
            </h2>
            <h2 className="m-0 text-[23px] font-semibold leading-[1.15] tracking-[-0.01em] text-[#eaff00] underline font-sans">
              Gets FREE Shipping Too!
            </h2>
            <p className="mx-auto mt-3 mb-0 max-w-[350px] text-[18px] font-normal leading-[1.3] text-white font-sans">
              *97% Of Customers Order 6 Bottles (Our Recommended Option)
            </p>
          </div>

          <div className="relative w-full text-center px-6 pt-[22px] pb-[34px] bg-[#3C97AB] font-sans">
            <h3 className="text-[clamp(19px,5.2vw,22px)] font-bold tracking-[-0.005em] leading-[1.3] text-white m-0">
              Claim Your Discounted ProNail Complex
            </h3>
            <div className="mt-1 text-[clamp(19px,5.2vw,22px)] font-bold leading-[1.3] text-white">
              Below While Stocks Last!
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[14px] border-t-[#3C97AB]"
            />
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-center items-center flex-wrap gap-[30px] px-5 bg-white pt-[60px] pb-[30px]">
          <img src={imgSeal} alt="Fast and Free Shipping" width={654} height={654} loading="lazy" decoding="async" className="w-[140px] h-auto" />
          <div className="text-center font-sans">
            <h2 className="text-[var(--color-deep)] text-[clamp(19px,5.5vw,32px)] m-0 mb-1 font-extrabold leading-[1.2]">
              Every 6 Bottles Order
            </h2>
            <h2 className="text-[var(--color-accent)] text-[clamp(19px,5.5vw,32px)] m-0 mb-2 font-extrabold underline leading-[1.2]">
              Gets FREE Shipping Too!
            </h2>
            <p className="text-[#666666] text-[clamp(13px,3.2vw,18px)] m-0 font-medium">
              *97% Of Customers Order 6 Bottles (Our Recommended Option)
            </p>
          </div>
        </div>
      )}

      <section
        id="pricing"
        className={`bg-[#f9f9f9] text-[#333] ${isMobile ? 'px-3.5 pt-8 pb-3.5' : 'px-6 pt-[100px] pb-6'}`}
      >
        <div className="max-w-[1000px] mx-auto flex flex-wrap justify-center items-stretch gap-5">
          {isMobile
            ? displayPackages.map((pkg) => <PricingCard key={pkg.id} pkg={pkg} />)
            : displayPackages.map((pkg) => <DesktopPricingCard key={pkg.id} pkg={pkg} />)}
        </div>

        {!isMobile && (
          <div className="w-full flex justify-center mt-[60px] pb-2.5">
            <img src={imgCreditCards} alt="Cartões Aceitos" width={786} height={102} loading="lazy" decoding="async" className="w-full max-w-[320px] h-auto" />
          </div>
        )}

        <div
          className={`w-full flex flex-col items-center pb-0 ${isMobile ? 'mt-7' : 'mt-[30px]'}`}
          style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}
        >
          <p className={`text-[#1a1a1a] m-0 ${isMobile ? 'text-[23px] font-medium -mb-4' : 'text-2xl -mb-6'}`}>Our customers say</p>

          <img
            src={imgEstrelas}
            width={512}
            height={512}
            loading="lazy"
            decoding="async"
            alt="4.5 de 5 estrelas"
            className={`relative z-[2] w-full h-auto ${
              isMobile ? 'max-w-[210px] -mt-[50px] -mb-[45px]' : 'max-w-[220px] -mt-[60px] -mb-[53px]'
            }`}
          />

          <p className={`text-[#1a1a1a] m-0 ${isMobile ? 'text-[20px] -mt-4' : 'text-xl -mt-6'}`}>
            based on <strong className="font-black">14,369 reviews!</strong>
          </p>
        </div>
      </section>

      <div
        className={`w-full flex justify-center ${
          isMobile ? 'bg-[#519AAA] px-[14px] pt-[55px] pb-[45px]' : 'px-5 py-[60px] bg-[var(--color-deep)]'
        }`}
      >
        <div
          className={`bg-white rounded-xl max-w-[850px] w-full flex shadow-[0_10px_30px_rgba(0,0,0,0.2)] ${
            isMobile
              ? 'flex-col items-stretch gap-16 px-4 pt-[34px] pb-[42px] flex-nowrap'
              : 'flex-row items-center gap-10 p-10 flex-wrap'
          }`}
        >
          <div
            className={`mx-auto shrink-0 text-center ${
              isMobile ? 'w-[185px] max-w-[52vw]' : 'w-full max-w-[160px]'
            }`}
          >
            <img
              src={selo60dias}
              width={612}
              height={612}
              loading="lazy"
              decoding="async"
              alt="60-Day Money Back Guarantee"
              className={`w-full h-auto ${isMobile ? 'drop-shadow-[0_12px_18px_rgba(0,0,0,0.2)]' : ''}`}
            />
          </div>

          <div className={`flex-1 ${isMobile ? 'text-left' : 'min-w-[250px]'}`}>
            <h3
              className={`m-0 font-sans ${
                isMobile
                  ? 'mb-4 text-[24px] font-semibold leading-[1.2] text-black'
                  : 'mb-2.5 text-[26px] font-extrabold leading-[1.25] text-[var(--color-deep)]'
              }`}
            >
              100% Satisfaction {!isMobile && <br />}60-Day Money Back Guarantee
            </h3>
            <p
              className={`m-0 font-sans ${
                isMobile
                  ? 'text-[22px] font-normal leading-[1.55] text-black'
                  : 'text-base leading-[1.6] text-[#444444]'
              }`}
            >
              Your order today is covered by our iron-clad{' '}
              <strong className={isMobile ? 'font-semibold' : undefined}>60-day 100% money-back guarantee</strong>. If
              you are not impressed with the results, then just write to us and we'll refund every single cent.
            </p>
          </div>
        </div>
      </div>
        </>
      )}

      {/* ════════════════════════════════════════════════════════════════════
          SEÇÃO 2 — Pricing Bottom (duplicata, EXCLUSIVA do mobile).
          No desktop essa seção não renderiza nada, preservando o layout
          desktop original intacto.
      ════════════════════════════════════════════════════════════════════ */}
      {bottomOnly && isMobile && (
        <>
          <div className="relative w-full bg-[#252525] px-5 py-7 text-center font-sans">
            <h2 className="m-0 text-[clamp(24px,6.7vw,27px)] font-bold leading-[1.15] tracking-[-0.01em] text-white">
              Claim Your Discounted ProNail
              <br />
              Complex
              <br />
              Below While Stocks Last!
            </h2>
            <div
              aria-hidden="true"
              className="absolute -bottom-7 left-1/2 h-0 w-0 -translate-x-1/2 border-l-[15px] border-r-[15px] border-t-[28px] border-l-transparent border-r-transparent border-t-[#252525]"
            />
          </div>

          <section id="pricing-bottom" className="bg-white px-3.5 pt-[60px] pb-3.5 text-[#333]">
            <div className="max-w-[1000px] mx-auto flex flex-wrap justify-center items-stretch gap-5">
              {bottomDisplayPackages.map((pkg) => (
                <PricingCard key={pkg.id} pkg={pkg} idSuffix="-bottom" />
              ))}
            </div>

            <div className="w-full flex flex-col items-center mt-7 pb-0" style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}>
              <p className="m-0 -mb-4 text-[23px] font-medium text-[#1a1a1a]">Our customers say</p>

              <img
                src={imgEstrelas}
                width={512}
                height={512}
                loading="lazy"
                decoding="async"
                alt="4.5 de 5 estrelas"
                className="relative z-[2] -mt-[50px] -mb-[45px] h-auto w-full max-w-[210px]"
              />

              <p className="m-0 -mt-4 text-[20px] text-[#1a1a1a]">
                based on <strong className="font-black">14,369 reviews!</strong>
              </p>
            </div>
          </section>
        </>
      )}
    </>
  );
}

// ─── PricingCard (versão MOBILE) ───────────────────────────────────────────────
// Usado nas duas seções (topo e rodapé). idSuffix evita colisão de ids quando
// o mesmo pacote aparece duas vezes na página.

function PricingCard({ pkg, idSuffix = '' }: { pkg: PricingPackage; idSuffix?: string }) {
  return (
    <div
      id={pkg.highlight ? `pricing-highlight${idSuffix}` : undefined}
      className={`w-full m-0 relative ${
        pkg.highlight ? 'max-w-[470px] flex-[1_1_360px] z-[2]' : 'max-w-[440px] flex-[1_1_280px] z-[1]'
      }`}
    >
      <div
        className={`flex flex-col text-center overflow-hidden rounded-[22px] ${
          pkg.highlight
            ? 'bg-[#F9F8DA] border-2 border-[#3C97AB] shadow-[0_20px_40px_-22px_rgba(60,151,171,0.45)]'
            : 'bg-white border border-[#e6e8ea] shadow-[0_14px_28px_-20px_rgba(0,0,0,0.18)]'
        }`}
      >
        {/* Header full-width de cor sólida */}
        <div className={`text-center px-4 py-3.5 ${pkg.highlight ? 'bg-[#3C97AB]' : 'bg-[#99C7D1]'}`}>
          <span className="text-white font-bold text-[clamp(16px,5vw,19px)] tracking-[0.01em]">
            {mobileHeaderLabel(pkg)}
          </span>
        </div>

        <div
          className={`grid min-w-0 grid-cols-[minmax(0,48fr)_minmax(0,52fr)] items-stretch gap-x-3 px-6 pt-5 pb-6 text-left ${
            pkg.highlight ? 'min-h-[390px]' : 'min-h-[330px]'
          }`}
        >
          <div className="flex min-w-0 flex-col items-start">
            <h3
              className={`m-0 mb-0.5 text-[clamp(20px,5.5vw,23px)] font-bold leading-[1.1] tracking-[-0.01em] ${
                pkg.highlight ? 'text-[#3C97AB]' : 'text-[#99C7D1]'
              }`}
            >
              {mobileTitle(pkg)}
            </h3>
            <p className="m-0 text-[11.5px] font-medium text-[#9a9a9e]">{pkg.subtitle}</p>

            <div className={`flex w-full flex-1 items-center justify-center ${pkg.highlight ? 'mt-4' : 'mt-7'}`}>
              <img
                src={pkg.image}
                width={pkg.imageWidth}
                height={pkg.imageHeight}
                loading="lazy"
                decoding="async"
                alt={pkg.title}
                className={`block object-contain ${
                  pkg.highlight
                    ? 'h-[clamp(145px,40vw,172px)] w-full max-w-full'
                    : pkg.id === 'pack-3'
                      ? 'h-[clamp(135px,38vw,160px)] w-[114%] max-w-[114%]'
                      : 'h-[clamp(130px,36vw,150px)] w-auto max-w-full'
                }`}
              />
            </div>

            {pkg.highlight && (
              <img
                src={imgLivrosBonus}
                width={577}
                height={393}
                loading="lazy"
                decoding="async"
                alt="3 Free eBooks"
                className="mt-3 block h-auto w-full max-w-[165px] rounded object-contain"
              />
            )}
          </div>

          <div className="flex min-w-0 flex-col items-stretch">
            <div className="flex w-full flex-col gap-1.5">
              {pkg.perks.map((perk, i) => (
                <div
                  key={i}
                  className={`flex min-h-[30px] w-full items-center gap-[7px] rounded-[7px] px-2 py-1.5 text-[10px] font-bold leading-[1.15] text-[#3a3a3c] ${
                    pkg.highlight && i === 0
                      ? 'bg-[#FFFF8F]'
                      : 'border-[1.5px] border-dashed border-[#c7c8cc]'
                  }`}
                >
                  <span className="inline-flex h-[14px] w-[14px] shrink-0 rotate-45 items-center justify-center rounded-[4px] bg-[#5AC150] shadow-[0_2px_4px_-1px_rgba(0,0,0,0.35)]">
                    <svg width="7" height="7" viewBox="0 0 10 8" fill="none" className="-rotate-45">
                      <path
                        d="M1 4L3.5 6.5L9 1"
                        stroke="#fff"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {perk}
                </div>
              ))}
            </div>

            <div
              className={`flex items-baseline justify-start ${pkg.highlight ? 'mt-5 text-[#3C97AB]' : 'mt-8 text-[#99C7D1]'}`}
            >
              <span className="text-[clamp(42px,12vw,50px)] font-extrabold leading-none tracking-[-0.03em]">
                ${pkg.price}
              </span>
              <span className="ml-1 text-[12px] font-semibold text-[#8a8a8e]">/ Bottle</span>
            </div>

            <div className="mt-3">
              <BuyBlock pkg={pkg} idSuffix={idSuffix} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── BuyBlock ─────────────────────────────────────────────────────────────────
// Botão "BUY NOW" + total + cartões + frete (versão mobile).

function BuyBlock({ pkg, idSuffix = '' }: { pkg: PricingPackage; idSuffix?: string }) {
  return (
    <div className="w-full">
      <div className="relative w-full">
        <button
          id={`buy-button-${pkg.id}${idSuffix}`}
          onClick={() => trackBuyClick(pkg)}
          className={`flex min-h-[48px] w-full items-center justify-center rounded-lg border border-[#d99a00] px-2.5 py-2.5 mb-2.5 text-[clamp(15px,4.4vw,17px)] font-extrabold tracking-[-0.01em] cursor-pointer text-[#231a00]
            bg-[linear-gradient(180deg,_#ffe27a_0%,_#f8c400_55%,_#f0a500_100%)]
            shadow-[0_1px_0_rgba(255,255,255,0.65)_inset,0_-2px_0_rgba(180,120,0,0.25)_inset,0_8px_16px_-6px_rgba(200,140,0,0.55)]
            ${pkg.highlight ? 'animate-[pronailBuyPulse_1.7s_ease-in-out_infinite]' : ''}`}
        >
          BUY NOW
        </button>

        {pkg.highlight && (
          <div
            aria-hidden="true"
            className="absolute -bottom-2 right-1.5 w-[34px] h-[34px] pointer-events-none animate-[pronailCursorTap_1.7s_ease-in-out_infinite] drop-shadow-[0_3px_4px_rgba(0,0,0,0.35)]"
          >
            <svg viewBox="0 0 24 24" width="34" height="34">
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

      <div className="flex flex-col items-center gap-1.5">
        <div className="text-xs text-[#c9880f]">
          TOTAL:{' '}
          <del className="text-[#c9880f] opacity-70 mr-1.5">{pkg.oldTotal}</del>
          <span className="font-extrabold text-[15px] text-[#222222]">{pkg.newTotal}</span>
        </div>

        <img
          src={imgCreditCards}
          width={786}
          height={102}
          loading="lazy"
          decoding="async"
          alt="Cartões Aceitos"
          className={`max-w-full h-auto opacity-90 ${pkg.highlight ? 'w-[150px]' : 'w-[120px]'}`}
        />

        <div className="text-[11px] text-[#4CAF50] font-bold">{pkg.shipping}</div>
      </div>
    </div>
  );
}

// ─── DesktopPricingCard / DesktopBuyBlock ──────────────────────────────────────
// Layout de desktop (hover, escala, badge separado) — inalterado.

function DesktopPricingCard({ pkg }: { pkg: (typeof PRICING_PACKAGES)[number] }) {
  return (
    <div
      id={pkg.highlight ? 'pricing-highlight' : undefined}
      className={`group w-full overflow-hidden text-center relative flex flex-col rounded-[10px] transition-all duration-300 ${
        pkg.highlight
          ? 'flex-[1_1_340px] max-w-[400px] mx-6 bg-[#fdf8ce] border-4 border-[var(--color-deep)] shadow-[0_16px_34px_rgba(0,0,0,0.2)] scale-110 -translate-y-2.5 hover:scale-[1.14] hover:-translate-y-2.5 hover:shadow-[0_26px_48px_rgba(0,0,0,0.3)] hover:z-10 z-[2]'
          : 'flex-[1_1_280px] max-w-[320px] bg-white border border-[#e0e0e0] shadow-[0_6px_14px_rgba(0,0,0,0.08)] hover:scale-[1.02] hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] hover:z-[5] z-[1]'
      }`}
    >
      {pkg.highlight ? (
        <div className="bg-[#ff4d4d] text-white font-extrabold text-[clamp(13px,2vw,15px)] tracking-[0.5px] uppercase px-3.5 py-[11px] text-center">
          $163 E-Book Bonus
        </div>
      ) : (
        <div className="bg-[var(--color-accent)] text-white font-extrabold text-[13px] tracking-[0.5px] uppercase px-3.5 py-[9px] text-center">
          {pkg.badgeLabel}
        </div>
      )}

      <div className={pkg.highlight ? 'px-8 pt-[22px]' : 'px-[26px] pt-5'}>
        <p
          className={`text-xs font-extrabold uppercase tracking-[1px] m-0 mb-2 ${
            pkg.highlight ? 'text-[#b8860b]' : 'text-[var(--color-accent)]'
          }`}
        >
          {pkg.badgeLabel}
        </p>

        <h3
          className={`text-[var(--color-deep)] m-0 mb-0.5 uppercase tracking-[0.5px] font-extrabold leading-[1.15] ${
            pkg.highlight ? 'text-[clamp(25px,4.5vw,30px)]' : 'text-[clamp(22px,3.8vw,27px)]'
          }`}
        >
          {pkg.title}
        </h3>
        <p className="text-[13px] text-[#666] m-0 mb-5">{pkg.subtitle}</p>

        <img
          src={pkg.image}
          width={pkg.imageWidth}
          height={pkg.imageHeight}
          loading="lazy"
          decoding="async"
          alt={pkg.title}
          className={`w-auto max-w-full object-contain rounded-[14px] shadow-[10px_8px_20px_rgba(0,0,0,0.2)] mb-5 block mx-auto ${
            pkg.highlight ? 'h-[clamp(170px,24vw,230px)]' : 'h-[clamp(160px,20vw,195px)]'
          }`}
        />

        <div className="mb-6">
          {pkg.perks.map((perk, i) => (
            <div
              key={i}
              className={`border-[1.5px] border-dashed border-[#aaa] rounded-md mb-2 font-bold leading-[1.25] ${
                pkg.highlight ? 'p-[11px] text-sm bg-[#fcf49a]' : 'p-2.5 text-[13px] bg-white'
              }`}
            >
              <span className="text-[#4caf50] mr-1">✔</span> {perk}
            </div>
          ))}
        </div>

        <div className="text-[var(--color-deep)] mb-5 flex justify-center items-baseline">
          <span
            className={`font-bold leading-none ${
              pkg.highlight ? 'text-[clamp(52px,10vw,68px)]' : 'text-[clamp(44px,8.5vw,57px)]'
            }`}
          >
            ${pkg.price}
          </span>
          <span className={`ml-1 ${pkg.highlight ? 'text-[17px]' : 'text-[15px]'}`}>/ Bottle</span>
        </div>
      </div>

      <div className={pkg.highlight ? 'px-8 pb-11' : 'px-[26px] pb-[38px]'}>
        <DesktopBuyBlock pkg={pkg} />
      </div>
    </div>
  );
}

function DesktopBuyBlock({ pkg }: { pkg: (typeof PRICING_PACKAGES)[number] }) {
  return (
    <div>
      <button
        id={`buy-button-${pkg.id}`}
        onClick={() => {
          const destination = pkg.link.trim();

          if ((window as any).clarity) {
            (window as any).clarity('set', 'offer', pkg.title);
            (window as any).clarity('event', 'clickbank_cta_click');
          }
          (window as any).gtag_report_conversion
            ? (window as any).gtag_report_conversion(destination)
            : (window.location.href = destination);
        }}
        className="w-full bg-[linear-gradient(to_bottom,_#ffe800,_#ffb300)] text-black border border-[#d49a00] rounded-[9px] p-[15px] text-[clamp(18px,3.5vw,22px)] font-black cursor-pointer mb-3.5 shadow-[0_6px_10px_rgba(0,0,0,0.22)] transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_12px_18px_rgba(0,0,0,0.42)]"
      >
        BUY NOW
      </button>

      <div className="text-sm text-[#333] mb-2.5">
        TOTAL: <del className="text-[#888] mr-1.5">{pkg.oldTotal}</del>
        <span className="font-bold text-lg">{pkg.newTotal}</span>
      </div>

      <div className="text-[13px] text-[#555]">{pkg.shipping}</div>
    </div>
  );
}
