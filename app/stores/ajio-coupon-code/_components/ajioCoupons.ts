// Coupon type
export interface Coupon {
  id: string;
  badge: string;
  badgeType: 'UP TO' | 'FLAT' | 'FREE' | 'PERCENT';
  badgeColor: string;
  color: string;
  type: string;
  title: string;
  description: string;
  code: string;
  verified: string;
  userType: string;
  validTill: string;
}

export const AJIO_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'FLAT 30% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#2B2B2B]',
    color: '#2B2B2B',
    type: 'CLOTHING',
    title: 'New to AJIO? Get Flat 30% OFF on Your First Order',
    description: 'First-time shoppers on AJIO can save flat 30% on clothing, footwear, and fashion accessories — a great way to explore 6,000+ brands at a lower price.',
    code: 'NEW30',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-2',
    badge: 'EXTRA 25% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#D9534F]',
    color: '#D9534F',
    type: 'CLOTHING',
    title: 'Kids Carnival Sale — Up to 90% OFF + Extra 25% on Orders Above ₹1,499',
    description: "Shop AJIO's Kids Carnival for massive discounts on children's clothing and accessories — stack the coupon code on top of already-reduced prices.",
    code: 'KIDSCARNIVAL',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '23 Aug 2026'
  },
  {
    id: 'coupon-3',
    badge: 'EXTRA 10% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#2B2B2B]',
    color: '#2B2B2B',
    type: 'ETHNIC WEAR',
    title: 'Festive Edit Deals — Up to 70% OFF + Extra 10% with Coupon',
    description: "Browse AJIO's curated Festive Edit collection and save up to 70% off — add the AJIO discount code at checkout for an extra 10% on top.",
    code: 'SALE10',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-4',
    badge: 'UP TO 90% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#D9534F]',
    color: '#D9534F',
    type: 'SITEWIDE',
    title: 'Sitewide Fashion Sale — Shop Up to 90% OFF + Additional 10% via Bank Offers',
    description: 'Refresh your wardrobe with discounts across clothing, footwear, and accessories from 6,000+ brands — add an extra 10% off by paying with eligible bank cards.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-5',
    badge: 'EXTRA ₹400 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#2B2B2B]',
    color: '#2B2B2B',
    type: 'CLOTHING',
    title: "Women's Fashion Flash Sale — Up to 80% OFF + Save ₹400 Extra",
    description: "Shop AJIO's women's fashion range during this flash sale and save up to 80% — apply the code at checkout for an additional ₹400 off your order.",
    code: 'FLASHSALE',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-6',
    badge: 'FLAT ₹300 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#D9534F]',
    color: '#D9534F',
    type: 'ETHNIC WEAR',
    title: 'Rakhi Sale — Get Flat ₹300 OFF on Fashion Orders Above ₹2,895',
    description: "Shop AJIO's Rakhi collection and save up to 90% — use the coupon code to get an additional flat ₹300 off on orders meeting the minimum value.",
    code: 'RAKHI300',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '28 Aug 2026'
  },
  {
    id: 'coupon-7',
    badge: 'EXTRA ₹250 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#2B2B2B]',
    color: '#2B2B2B',
    type: 'SITEWIDE',
    title: 'Extra ₹250 OFF for Existing AJIO Users on Orders Above ₹1,499',
    description: 'Existing AJIO shoppers can save an extra ₹250 on eligible orders — simply apply the coupon code at checkout to bring down your total.',
    code: 'CHECKOUT',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-8',
    badge: 'FREE DELIVERY',
    badgeType: 'FREE',
    badgeColor: 'bg-[#D9534F]',
    color: '#D9534F',
    type: 'SITEWIDE',
    title: 'Free Delivery on AJIO Orders — No Minimum Spend Above ₹39',
    description: 'Shop the Rakhi collection on AJIO and get free delivery with almost no minimum order requirement — apply the coupon code to waive shipping charges.',
    code: 'RAKHIFREEDEL',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '28 Aug 2026'
  },
  {
    id: 'coupon-9',
    badge: 'FLAT 20% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#2B2B2B]',
    color: '#2B2B2B',
    type: 'SITEWIDE',
    title: 'AJIO Big Sale — Flat 20% OFF When You Shop Above ₹1,999',
    description: "AJIO's Big Sale is live with 50%–90% OFF across 2,500+ fashion brands — add this code at checkout for an extra flat 20% off on eligible orders.",
    code: 'WISH',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-10',
    badge: 'UP TO 18% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#D9534F]',
    color: '#D9534F',
    type: 'SITEWIDE',
    title: 'Save Up to 18% OFF on AJIO Orders Above ₹699',
    description: 'A low minimum-spend offer for existing shoppers — spend ₹699 or more and save up to 18% with this AJIO coupon code.',
    code: 'COMFYNCHIC',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-11',
    badge: 'EXTRA 10% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#2B2B2B]',
    color: '#2B2B2B',
    type: 'CLOTHING',
    title: 'AJIO Fashion Sale — Up to 90% OFF + Extra 10% on 22 Lakh+ Styles',
    description: 'Shop over 22 lakh styles from 6,000+ brands and save up to 90% — use the AJIO coupon code for an additional 10% off, capped at ₹600.',
    code: 'PLUS10AURA',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-12',
    badge: 'EXTRA 20% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#D9534F]',
    color: '#D9534F',
    type: 'CLOTHING',
    title: 'Fashion Favourites — Get Extra 20% OFF on Orders Above ₹1,500',
    description: 'Shop your favourite clothing and accessories on AJIO with up to 80% off already — apply this code to layer an extra 20% discount on top.',
    code: 'PLUS20AURA',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-13',
    badge: 'FLAT 10% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#2B2B2B]',
    color: '#2B2B2B',
    type: 'ACCESSORIES',
    title: 'Shop AJIO Watches — Flat 10% OFF on Orders Above ₹2,500',
    description: "Explore AJIO's latest watch collection during the Big Bold Sale and save flat 10% — one-time use offer for existing users with a ₹2,500 minimum.",
    code: 'TRYWATCHES',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-14',
    badge: 'FLAT 20% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#D9534F]',
    color: '#D9534F',
    type: 'CLOTHING',
    title: 'Trending Styles on AJIO — Flat 20% OFF When You Shop Above ₹1,999',
    description: 'Discover the latest fashion arrivals on AJIO and save flat 20% instantly — apply the discount code during checkout on orders of ₹1,999 and above.',
    code: 'WISH26',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-15',
    badge: 'FLAT 20% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#2B2B2B]',
    color: '#2B2B2B',
    type: 'CLOTHING',
    title: 'AJIO Exclusive Edit — Flat 20% OFF on Selected Fashion Products',
    description: "Shop AJIO's exclusive collection of handpicked fashion styles and save flat 20% — apply the discount code on orders meeting the minimum value.",
    code: 'ONLYEXCLUSIVE20',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-16',
    badge: 'EXTRA 5% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#D9534F]',
    color: '#D9534F',
    type: 'FOOTWEAR',
    title: 'AJIO Sports Range — Get Extra 5% OFF on Orders Above ₹3,990',
    description: "Gear up with AJIO's sports collection and save extra 5% on activewear, footwear, and sports essentials — a straightforward add-on discount for bigger sports orders.",
    code: 'SPORTSRUSH5',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  }
];
