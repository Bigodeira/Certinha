// ─── src/pages/LandingPage/pricingData.ts ─────────────────────────────────────
// Dados compartilhados pelos cards de preço (Pricing.tsx e PricingBottom.tsx).
// Os hex abaixo são usados diretamente nas classes arbitrárias do Tailwind
// dos componentes (ex: bg-[#3C97AB]) — mantidos aqui só como referência única
// da paleta, para não ficar espalhado/duplicado pelo código.

import img2Bottles from '../../2frascos.png';
import img6Bottles from '../../6frascos.png'; // O pacote de 3+3 (selo "BEST VALUE" já faz parte do PNG)
import img3Bottles from '../../3frascos.png'; // O pacote de 2+1

// ─── Paleta (mobile) — cores extraídas do site original ──────────────────────
// TEAL_DARK  '#3C97AB' → bg-[#3C97AB]   (header "BEST VALUE!" / faixa "Claim Your Discounted")
// TEAL_LIGHT '#99C7D1' → bg-[#99C7D1]   (headers "Most popular" e "Basic")
// CARD_BG_HIGHLIGHT '#F9F8DA' → bg-[#F9F8DA]
// PERK_YELLOW '#FFFF8F' → bg-[#FFFF8F]
// CHECK_GREEN '#5AC150' → bg-[#5AC150]
// DARK_BANNER_BG '#272727' → bg-[#272727]

export type PricingPackage = {
  id: string;
  badgeLabel: string;
  title: string;
  subtitle: string;
  image: string;
  price: string;
  perks: string[];
  oldTotal: string;
  newTotal: string;
  shipping: string;
  highlight: boolean;
  link: string;
};

export const PRICING_PACKAGES: PricingPackage[] = [
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
  },
];

// Ordem de exibição no mobile: Best Value primeiro, depois Most Popular, depois Basic
const MOBILE_ORDER: Record<string, number> = { 'pack-6': 0, 'pack-3': 1, 'pack-2': 2 };

export function getMobileOrderedPackages(): PricingPackage[] {
  return [...PRICING_PACKAGES].sort((a, b) => MOBILE_ORDER[a.id] - MOBILE_ORDER[b.id]);
}

// Rótulo do header do card (mobile), igual ao site original
export function mobileHeaderLabel(pkg: PricingPackage): string {
  if (pkg.highlight) return 'BEST VALUE!';
  if (pkg.badgeLabel === 'Most Popular') return 'Most popular';
  return pkg.badgeLabel;
}

// Título formatado no mobile: o card "Best Value" fica em CAPS,
// os demais em Title Case ("2 Bottles", "2 + 1 Bottles")
export function mobileTitle(pkg: PricingPackage): string {
  if (pkg.highlight) return pkg.title;
  return pkg.title.charAt(0) + pkg.title.slice(1).toLowerCase().replace('bottles', 'Bottles');
}

export function trackBuyClick(pkg: PricingPackage) {
  if ((window as any).clarity) {
    (window as any).clarity('set', 'offer', pkg.title);
    (window as any).clarity('event', 'clickbank_cta_click');
  }
  if ((window as any).gtag_report_conversion) {
    (window as any).gtag_report_conversion(pkg.link);
  } else {
    window.location.href = pkg.link;
  }
}
