import type { IconType } from 'react-icons'
import { FiShield, FiZap, FiDroplet, FiAward } from 'react-icons/fi'

import img2Bottles from '../../2frascos.png'
import img6Bottles from '../../6frascos.png' // O pacote de 3+3
import img3Bottles from '../../3frascos.png' // O pacote de 2+1
import iconeAcid from '../../iconeacid.png'
import iconeAloe from '../../iconealoevera.png'
import iconeTea from '../../teaicone.png'
import iconeVitamin from '../../vitamine.png'

// ─── Types ──────────────────────────────────────────────────────────────────

export type Benefit = {
  Icon: IconType
  title: string
  body: string
}

export type PricingPackage = {
  id: string
  badgeLabel: string
  title: string
  subtitle: string
  image: string
  price: string
  perks: string[]
  oldTotal: string
  newTotal: string
  shipping: string
  highlight: boolean
  link: string
}

export type Ingredient = {
  name: string
  icon: string
  fn: string
  tag: string
}

export type Testimonial = {
  name: string
  text: string
}

export type Faq = {
  q: string
  a: string
}

// ─── Content ──────────────────────────────────────────────────────────────────

export const BENEFITS: Benefit[] = [
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

// NOTE: links below had a leading space in the original file (' https://...'),
// which was harmless in most browsers but sloppy — fixed here.
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
    link: 'https://orders.clickbank.net/?_ga=337406059.1784875026&_gl=1*1xqs0m8*_ga*MzM3NDA2MDU5LjE3ODQ4NzUwMjY.*_ga_9KZM1E116M*czE3ODQ4NzUwMjUkbzEkZzEkdDE3ODQ4NzUwNzQkajExJGwwJGgw&affi=matjetshop&cbfid=55361&cbitems=306&corid=7e25eb8a-a9bb-4725-a209-6f75f9d9c5d3&exitoffer=2&hopId=b5142376-74fc-4729-ad60-6e664a5ed823&oaref=01.145E5D3EF095A940160CA3E2826717AB34F1184EAF9D888819FCA5621E2C9516ECE05926&template=0006&time=1784875153&vvvv=pronailcom&vvar=_b%3DNDk1Nzk4O3Byb25haWxjb21wbGV4LmNvbS9zdGFydC9pbmRleC5waHA7dW5kZWZpbmVkO3RleHQ7MzA2OzI5NDtmZTt1bmRlZmluZWQ%3D%26_ga%3D337406059.1784875026%26_gl%3D1*1xqs0m8*_ga*MzM3NDA2MDU5LjE3ODQ4NzUwMjY.*_ga_9KZM1E116M*czE3ODQ4NzUwMjUkbzEkZzEkdDE3ODQ4NzUwNzQkajExJGwwJGgw%26cbfid%3D55361%26cbitems%3D306%26cbskin%26exitoffer%3D2%26template%3D0006',
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
    link: 'https://orders.clickbank.net/?_ga=337406059.1784875026&_gl=1*1xqs0m8*_ga*MzM3NDA2MDU5LjE3ODQ4NzUwMjY.*_ga_9KZM1E116M*czE3ODQ4NzUwMjUkbzEkZzEkdDE3ODQ4NzUwNzQkajExJGwwJGgw&affi=matjetshop&cbfid=55360&cbitems=302&corid=565476e0-4fb9-4480-b219-3346c27d80d4&exitoffer=2&hopId=b5142376-74fc-4729-ad60-6e664a5ed823&oaref=01.145E5D3EF095A940160CA3E2826717AB34F1184EAF9D888819FCA5621E2C9516ECE05926&template=0003&time=1784875155&vvvv=pronailcom&vvar=_b%3DNDk1Nzk4O3Byb25haWxjb21wbGV4LmNvbS9zdGFydC9pbmRleC5waHA7dW5kZWZpbmVkO3RleHQ7MzAyOzIwNztmZTt1bmRlZmluZWQ%3D%26_ga%3D337406059.1784875026%26_gl%3D1*1xqs0m8*_ga*MzM3NDA2MDU5LjE3ODQ4NzUwMjY.*_ga_9KZM1E116M*czE3ODQ4NzUwMjUkbzEkZzEkdDE3ODQ4NzUwNzQkajExJGwwJGgw%26cbfid%3D55360%26cbitems%3D302%26cbskin%26exitoffer%3D2%26template%3D0003',
  },
]

export const INGREDIENTS: Ingredient[] = [
  {
    name: 'Tea Tree Oil',
    icon: iconeTea,
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
    icon: iconeVitamin,
    fn: 'Antioxidant skin-repair vitamin that promotes healthy nail regrowth.',
    tag: 'Regenerate',
  },
]

// Was already written in the old file but never rendered anywhere — now used in <Testimonials />.
export const TESTIMONIALS: Testimonial[] = [
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

export const FAQS: Faq[] = [
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
