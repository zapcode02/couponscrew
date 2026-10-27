export interface Coupon {
  id: string;
  badge: string;
  badgeType: string;
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

export const IGP_COUPONS: Coupon[] = [
  {
    id: 'igp-coupon-1',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#D32F2F]',
    color: '#D32F2F',
    type: 'BHAI DOOJ SALE',
    title: 'IGP Coupon Code – Save Up to 50% During Bhai Dooj Sale',
    description: 'Celebrate Bhai Dooj with thoughtful gifts and festive savings from IGP.',
    points: [
      'Save up to 50% during the IGP Bhai Dooj Sale.',
      'Explore cakes, hampers, flowers, and personalized gifts.',
      'Shop festive gifts at discounted prices for a limited time.',
      'Perfect for celebrating Bhai Dooj with your loved ones.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'igp-coupon-2',
    badge: 'SAVE 49%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#D32F2F]',
    color: '#D32F2F',
    type: 'PERSONALIZED GIFTS',
    title: 'IGP Coupon Code – Save 49% on Personalized Bryan Candy Jar',
    description: 'Surprise someone special with a personalized gift at a fantastic price.',
    points: [
      'Save 49% on the Lavender Vanilla Personalized Bryan Candy Jar.',
      'Personalize the gift to make it extra memorable.',
      'Eligible for same-day delivery in selected locations.',
      'A caring present for birthdays, anniversaries, and other special moments.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'igp-coupon-3',
    badge: 'SAVE 33%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#D32F2F]',
    color: '#D32F2F',
    type: 'GIFT HAMPERS',
    title: 'IGP Discount Code – Save 33% on Decadent Delight Hamper',
    description: 'Gift a premium hamper while enjoying great savings.',
    points: [
      'Save 33% on the Decadent Delight Hamper.',
      'Includes a curated selection of delicious treats.',
      'Available with 90-minute delivery in selected cities.',
      'Works well as a gift during festivals, birthdays, or for clients and colleagues.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'igp-coupon-4',
    badge: 'SAVE 30%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#D32F2F]',
    color: '#D32F2F',
    type: 'PERSONALIZED GIFTS',
    title: 'IGP Discount Code – Save 30% on Personalized Spotify Couple Plaque',
    description: 'Make a gift that no one will forget by turning your favourite song into a personal keepsake.',
    points: [
      'Save 30% on the Personalized Spotify Couple Plaque.',
      'Customize it with your preferred song and details.',
      'Eligible for same-day delivery in selected locations.',
      'A perfect gift for couples and special occasions.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'igp-coupon-5',
    badge: 'SAVE 26%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#D32F2F]',
    color: '#D32F2F',
    type: 'STATIONERY & GIFTS',
    title: 'IGP Promo Code – Save 26% on Personalized Daily Journal',
    description: 'Create a unique journal with personalized details for everyday use.',
    points: [
      'Save 26% on the Personalized Daily Journal.',
      'Personalize the cover for a custom touch.',
      'Designed for daily notes, planning, and journaling.',
      'A thoughtful gift for students and professionals.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'igp-coupon-6',
    badge: 'SAVE 19%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#D32F2F]',
    color: '#D32F2F',
    type: 'PERSONALIZED GIFTS',
    title: 'IGP Promo Code – Save 19% on Personalized Make Your Own Gift',
    description: 'Design a personalized keepsake for someone special.',
    points: [
      'Save 19% on the Personalized Make Your Own Gift.',
      'Customize the product with your preferred details.',
      'Select areas can get their order delivered within 90 minutes.',
      'Great for birthdays, anniversaries, and celebrations.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'igp-coupon-7',
    badge: 'SAVE 10%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#D32F2F]',
    color: '#D32F2F',
    type: 'CAKES & TREATS',
    title: 'IGP Voucher Code – Save 10% on Shahi Rasmalai Cake',
    description: 'Celebrate every occasion with a delicious Rasmalai cake for less.',
    points: [
      'Save 10% on the Shahi Rasmalai Cake.',
      'Freshly prepared for birthdays and special celebrations.',
      'Available with 90-minute delivery in selected cities.',
      'A perfect choice for festive occasions and family gatherings.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'igp-coupon-8',
    badge: '5% CASHBACK',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#D32F2F]',
    color: '#D32F2F',
    type: 'CASHBACK OFFER',
    title: 'IGP Voucher Code – Get 5% Cashback on Every Order',
    description: 'Earn cashback every time you shop with IGP.',
    points: [
      'Get a flat 5% cashback on every eligible order.',
      'Cashback applies across selected products.',
      'Enjoy extra savings on every purchase.',
      'A great way to get more value while shopping.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'igp-coupon-9',
    badge: 'FREE SHIPPING',
    badgeType: 'FREE',
    badgeColor: 'bg-[#00A854]',
    color: '#00A854',
    type: 'FREE DELIVERY',
    title: 'IGP Offers – Get Free Standard Delivery',
    description: 'Save more with complimentary delivery on eligible orders.',
    points: [
      'Enjoy free standard delivery on selected products.',
      'No extra shipping charges on eligible purchases.',
      'Available for qualifying orders only.',
      'A convenient way to reduce your overall order cost.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'igp-coupon-10',
    badge: '50% OFF DELIVERY',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#D32F2F]',
    color: '#D32F2F',
    type: 'EXPRESS DELIVERY',
    title: 'IGP Offers – Save 50% on Special Delivery Fees',
    description: 'Get faster delivery while paying less on shipping charges.',
    points: [
      'Save 50% on special delivery fees.',
      'Available on eligible same-day and express deliveries.',
      'Makes last-minute gifting more affordable.',
      'Perfect for sending gifts quickly without paying full delivery charges.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  }
];