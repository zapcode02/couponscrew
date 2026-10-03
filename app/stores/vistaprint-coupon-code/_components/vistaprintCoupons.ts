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

export const VISTAPRINT_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: '100 CARDS @ ₹200',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'VISITING CARDS',
    title: 'Vistaprint Coupon Code – 100 Visiting Cards at Just ₹200',
    description: 'Get 100 premium-quality visiting cards for just ₹200.\nAdd your logo, contact info, and brand details to personalize them.\nA smart pick for startups, freelancers, and small business owners.\nOnline-only Vistaprint deal, available for a limited period.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-2',
    badge: 'FROM ₹850',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'CUSTOM APPAREL',
    title: 'Vistaprint Coupon Code – Hoodies & Jackets With Your Own Design, Prices Begin at ₹850',
    description: 'Custom hoodies, jackets, and team wear available from ₹850.\nPrint your company logo or own artwork on them.\nWorks well for corporate branding, events, and team outfits.\nMultiple fits, colours, and size options to pick from.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-3',
    badge: 'FROM ₹2,500',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'PHOTO ALBUMS',
    title: 'Vistaprint Discount Code – Layflat Photo Albums Starting ₹2,500',
    description: 'Design premium Layflat Photo Albums with prices starting at ₹2,500.\nKeep your special moments safe with sharp, high-quality prints.\nBest suited for weddings, trips, and family celebrations.\nFill every page with photos of your choice.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-4',
    badge: 'FROM ₹1,005',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'OFFICE WEAR',
    title: "Vistaprint Discount Code – Men's Half Sleeve Dress Shirts Starting ₹1,005",
    description: "Men's Half Sleeve Dress Shirts available from ₹1,005 per piece.\nGet your company logo embroidered on them.\nA good fit for office wear, uniforms, and events.\nComes in several colors and sizes.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-5',
    badge: 'FROM ₹980',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'OFFICE WEAR',
    title: "Vistaprint Promo Code – Men's Dress Shirts from ₹980",
    description: "Men's Dress Shirts start at just ₹980 each.\nPersonalize them with custom embroidery or your company logo.\nMade for a professional, business-ready look.\nA great option for corporate branding and office staff.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-6',
    badge: 'FROM ₹980',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'OFFICE WEAR',
    title: "Vistaprint Promo Code – Women's Embroidered Dress Shirts Starting ₹980",
    description: "Women's Embroidered Dress Shirts available from ₹980.\nAdd your own design or brand logo to each shirt.\nComfortable fit built for professional work settings.\nOffered in a variety of colors and sizes.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-7',
    badge: 'FROM ₹890',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'BUSINESS SUPPLIES',
    title: 'Vistaprint Voucher – Self-Inking Stamps Starting ₹890',
    description: 'Self-Inking Stamps (64mm × 44mm) available from ₹890.\nMake personalized stamps for office and business needs.\nGives sharp, uniform impressions every time.\nSimple to customize with the design you want.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-8',
    badge: 'FROM ₹390',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'PROMOTIONAL GIFTS',
    title: 'Vistaprint Voucher – Eco-Friendly Bamboo Fiber Mugs from ₹390',
    description: 'Bamboo Fiber Eco Mugs available at prices starting ₹390.\nGet your company logo or any custom graphic printed on each mug.\nA sustainable promotional item for businesses.\nMakes a thoughtful giveaway for clients, staff, and company functions.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-9',
    badge: 'FROM ₹200',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'LABELS & STICKERS',
    title: 'Vistaprint Offers – Sticker Singles Starting ₹200',
    description: 'Sticker Singles available from just ₹200.\nEach sticker is cut individually, great for packaging and branding.\nCustomize with your logo, product labels, or artwork.\nUseful for promotions, events, and business use.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-10',
    badge: 'FROM ₹190',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'LABELS & STICKERS',
    title: 'Vistaprint Offers – Sheet Stickers from ₹190',
    description: 'Sheet Stickers start at only ₹190.\nGreat for packaging, branding, and product labelling.\nPick your own shapes and designs.\nComes in different sizes and finish options.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-11',
    badge: 'FROM ₹170',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'LABELS & STICKERS',
    title: 'Vistaprint Offers – Custom Window Stickers Starting ₹170',
    description: 'Window Stickers available from ₹170.\nIdeal for shop fronts, offices, and promo displays.\nEasily personalize them with your business branding.\nStrong material that works both indoors and outdoors.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  }
];
