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
  points: string[];
  code: string;
  verified: string;
  userType: string;
  validTill: string;
}

export const VISTAPRINT_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: '₹200 ONLY',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'COUPON CODE',
    title: 'Vistaprint Coupon Code – 100 Visiting Cards for ₹200',
    description: 'Get 100 personalised visiting cards for just ₹200 with this limited-time Vistaprint offer.',
    points: [
      'Order 100 good-quality visiting cards for only ₹200.',
      'Add your logo, contact details and branding to every card.',
      'Perfect for startups, freelancers and small businesses.',
      'This online-only deal is available for a limited time.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-2',
    badge: 'FROM ₹850',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'COUPON CODE',
    title: 'Vistaprint Coupon Code – Custom Hoodies & Jackets From ₹850',
    description: 'Make custom hoodies and jackets for your team or business, starting at only ₹850.',
    points: [
      'Buy custom hoodies, jackets and team wear from ₹850.',
      'Add your company logo or your own artwork on every item.',
      'Pick from many colours, sizes and fits.',
      'Great for office events, branding and staff uniforms.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-3',
    badge: 'FROM ₹2,500',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'PROMO CODE',
    title: 'Vistaprint Promo Code – Layflat Photo Albums From ₹2,500',
    description: 'Keep your memories safe in premium Layflat Photo Albums starting at ₹2,500.',
    points: [
      'Buy Layflat Photo Albums from ₹2,500.',
      'Design every page with your favourite photos.',
      'High-quality printing gives bright and long-lasting memories.',
      'Best for weddings, holidays and family functions.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-4',
    badge: 'FROM ₹1,005',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'PROMO CODE',
    title: 'Vistaprint Promo Code – Men’s Dress Shirts From ₹1,005',
    description: 'Customise professional men’s dress shirts starting at ₹1,005.',
    points: [
      'Men’s Half Sleeve Dress Shirts start from ₹1,005 each.',
      'Add your company logo in embroidery for a neat, professional look.',
      'Available in many colours and sizes.',
      'Good for office uniforms, events and corporate teams.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-5',
    badge: 'FROM ₹980',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'DISCOUNT CODE',
    title: 'Vistaprint Discount Code – Men’s Dress Shirts From ₹980',
    description: 'Get custom men’s dress shirts at low prices starting from ₹980.',
    points: [
      'Buy men’s dress shirts from just ₹980.',
      'Add embroidery or your business logo on each shirt.',
      'Made to give a smart and professional look.',
      'A good choice for corporate branding and office wear.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-6',
    badge: 'FROM ₹980',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'DISCOUNT CODE',
    title: 'Vistaprint Discount Code – Women’s Dress Shirts From ₹980',
    description: 'Design custom women’s embroidered dress shirts starting at ₹980.',
    points: [
      'Women’s embroidered dress shirts are available from ₹980.',
      'Add your logo or your own design easily.',
      'Comfortable styles made for daily professional wear.',
      'Pick from a range of colours and sizes.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-7',
    badge: 'FROM ₹890',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'VOUCHER CODE',
    title: 'Vistaprint Voucher Code – Self-Inking Stamps From ₹890',
    description: 'Make personalised self-inking stamps starting at ₹890.',
    points: [
      'Buy self-inking stamps from ₹890.',
      'Add your own text or design on the stamp.',
      'Gives a clean and even print every time.',
      'Good for office, business and admin work.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-8',
    badge: 'FROM ₹390',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'VOUCHER CODE',
    title: 'Vistaprint Voucher Code – Bamboo Fiber Mugs From ₹390',
    description: 'Customise eco-friendly bamboo fiber mugs starting at ₹390.',
    points: [
      'Eco-friendly bamboo fiber mugs start from ₹390.',
      'Print your logo or your own artwork on every mug.',
      'A useful gift for clients and employees.',
      'Perfect for giveaways, events and corporate branding.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-9',
    badge: 'FROM ₹200',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'REFERRAL CODE',
    title: 'Vistaprint Referral Code – Sticker Singles From ₹200',
    description: 'Order custom sticker singles starting at just ₹200.',
    points: [
      'Sticker Singles are available from ₹200.',
      'Add your logo, labels or your own artwork.',
      'Great for product packaging and brand promotion.',
      'Good for events, businesses and marketing campaigns.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-10',
    badge: 'FROM ₹190',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'REFERRAL CODE',
    title: 'Vistaprint Referral Code – Sheet Stickers From ₹190',
    description: 'Design custom sheet stickers starting at ₹190.',
    points: [
      'Buy sheet stickers from only ₹190.',
      'Choose the shape, size and finish you like.',
      'Perfect for packaging, branding and product labels.',
      'Customise every design easily for your business.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-11',
    badge: 'FROM ₹170',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'CASHBACK OFFERS',
    title: 'Vistaprint Cashback Offers – Window Stickers From ₹170',
    description: 'Customise strong window stickers starting at just ₹170.',
    points: [
      'Window stickers are available from ₹170.',
      'Add your business branding or your own artwork.',
      'Good for shopfronts, offices and promotional displays.',
      'Made for use both indoors and outdoors.',
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  }
];
