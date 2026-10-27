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

export const UNDERRATED_CLUB_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: '42% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'SWEATSHIRT',
    title: 'Underrated Club Coupon Code – Save 42% on URC Side Print Black Sweatshirt',
    description: 'Grab this bestseller at 42% off and use coupon code CREW10 to get an extra 10% off on eligible orders.',
    points: [
      'Save 42% on the URC Side Print Black Sweatshirt for ₹1,299.',
      'Features a trendy drop shoulder fit for everyday comfort.',
      'Regular price is ₹2,249 with EMI starting from ₹433/month.',
      'A great choice for casual streetwear looks.'
    ],
    code: 'CREW10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-2',
    badge: '41% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'PACK OF 4',
    title: 'Underrated Club Coupon Code – Save 41% on Pack of 4 Baggy T-Shirts',
    description: 'Stock up on everyday essentials and apply coupon code CREW10 to enjoy an extra 10% off on eligible purchases.',
    points: [
      'Save 41% on the Pack of 4 Baggy T-Shirts for ₹2,099.',
      'Includes four comfortable oversized T-shirts in assorted colours.',
      'Regular price is ₹3,596.',
      'Perfect for everyday wear and relaxed styling.'
    ],
    code: 'CREW10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-3',
    badge: '37% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'HOODIE',
    title: 'Underrated Club Discount Code – Save 37% on Black Oversized Embroidered Hoodie',
    description: 'Upgrade your streetwear collection and use discount code CREW10 to unlock an extra 10% off.',
    points: [
      'Save 37% on the Black Oversized Embroidered Hoodie for ₹1,999.',
      'Features a relaxed oversized fit for all-day comfort.',
      'Regular price is ₹3,199 with EMI options available.',
      'Ideal for casual outings and cooler weather.'
    ],
    code: 'CREW10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-4',
    badge: '37% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'COMBO OFFER',
    title: "Underrated Club Discount Code – Save 37% on Men's Polo Neck T-Shirt Combo",
    description: 'Refresh your wardrobe and apply discount code CREW10 for an additional 10% discount on eligible orders.',
    points: [
      "Save 37% on the Men's Polo Neck T-Shirt Combo for ₹1,499.",
      'Includes multiple polo T-shirts in one value pack.',
      'Regular price is ₹2,399.',
      'A great choice for casual and smart-casual outfits.'
    ],
    code: 'CREW10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-5',
    badge: '36% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'SLIM FIT JEANS',
    title: 'Underrated Club Promo Code – Save 36% on Dark Wash Slim Fit Jeans',
    description: 'Upgrade your denim collection and use promo code CREW10 to save an extra 10%.',
    points: [
      'Save 36% on the Indigo Dark Wash Slim Fit Jeans for ₹1,599.',
      'Features a mid-rise design with a comfortable slim fit.',
      'Regular price is ₹2,499 with EMI from ₹533/month.',
      'Perfect for everyday wear and casual occasions.'
    ],
    code: 'CREW10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-6',
    badge: '35% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'SLIM FIT JEANS',
    title: 'Underrated Club Promo Code – Save 35% on Slim Fit Jeans',
    description: 'Get your favourite slim-fit jeans for less and enter promo code CREW10 at checkout for an extra 10% off.',
    points: [
      'Save 35% on the Indigo Mid Rise Slim Fit Jeans for ₹1,599.',
      'Crafted for a modern slim-fit silhouette.',
      'Regular price is ₹2,499 with EMI starting from ₹533/month.',
      'Suitable for work, college, and casual wear.'
    ],
    code: 'CREW10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-7',
    badge: '31% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'BLACK JEANS',
    title: 'Underrated Club Voucher Code – Save 31% on Black Slim Fit Jeans',
    description: 'Shop this everyday essential and use voucher code CREW10 to claim an extra 10% discount.',
    points: [
      'Save 31% on the Black Mid Rise Slim Fit Jeans for ₹1,299.',
      'Offers a comfortable mid-rise slim fit.',
      'Regular price is ₹1,899 with EMI from ₹433/month.',
      'A versatile option for everyday styling.'
    ],
    code: 'CREW10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-8',
    badge: '31% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'PRINTED HOODIE',
    title: 'Underrated Club Voucher Code – Save 31% on Deep Black Printed Hoodie',
    description: 'Stay warm for less and apply voucher code CREW10 to enjoy an extra 10% off.',
    points: [
      'Save 31% on the Deep Black Printed Hoodie for ₹1,599.',
      'Features an oversized boxy fit with eye-catching graphics.',
      'Regular price is ₹2,332 with EMI available.',
      'Great for casual outings and streetwear looks.'
    ],
    code: 'CREW10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-9',
    badge: '31% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'SWEATSHIRT',
    title: 'Underrated Club Offers – Save 31% on The Original Club Sweatshirt',
    description: 'Enjoy extra savings with this sweatshirt and use coupon code CREW10 to get an additional 10% off.',
    points: [
      'Save 31% on The Original Club Black Sweatshirt for ₹1,299.',
      'Designed with a relaxed drop shoulder fit.',
      'Regular price is ₹1,899 with EMI starting from ₹433/month.',
      'Perfect for everyday casual styling.'
    ],
    code: 'CREW10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-10',
    badge: '30% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'SWEATSHIRT',
    title: 'Underrated Club Offers – Save 30% on Grey Oversized Graphic Sweatshirt',
    description: 'Upgrade your style today and apply coupon code CREW10 for an extra 10% discount.',
    points: [
      'Save 30% on the Grey Oversized Graphic Sweatshirt for ₹1,799.',
      'Features a relaxed oversized fit with graphic detailing.',
      'Regular price is ₹2,599 with EMI from ₹600/month.',
      'Ideal for casual wear and layering.'
    ],
    code: 'CREW10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-11',
    badge: '29% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'BOOTCUT JEANS',
    title: 'Save 29% on Underrated Club Bootcut Jeans',
    description: 'Refresh your denim collection and use coupon code CREW10 to save an extra 10%.',
    points: [
      'Save 29% on the Black High Rise Bootcut Jeans for ₹1,699.',
      'Features a comfortable high-rise fit.',
      'Regular price is ₹2,399 with EMI available.',
      'A stylish option for everyday outfits.'
    ],
    code: 'CREW10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-12',
    badge: '24% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'STRAIGHT JEANS',
    title: 'Save 24% on Underrated Club Straight Fit Jeans',
    description: 'Grab these straight-fit jeans and apply coupon code CREW10 to enjoy an additional 10% off.',
    points: [
      'Save 24% on the Black Mid Rise Straight Jeans for ₹1,899.',
      'Designed for a comfortable straight-leg fit.',
      'Regular price is ₹2,499 with EMI from ₹633/month.',
      'Easy to pair with shirts, T-shirts, and jackets.'
    ],
    code: 'CREW10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-13',
    badge: '20% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'BAGGY JEANS',
    title: 'Save 20% on Underrated Club Baggy Jeans',
    description: 'Upgrade your streetwear wardrobe and use coupon code CREW10 for an extra 10% discount.',
    points: [
      'Save 20% on the Dark Blue Mid Rise Baggy Jeans for ₹1,999.',
      'Features a modern baggy fit with everyday comfort.',
      'Regular price is ₹2,499 with EMI starting from ₹666/month.',
      'A great pick for oversized and streetwear outfits.'
    ],
    code: 'CREW10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-14',
    badge: '13% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'VINTAGE JEANS',
    title: 'Save 13% on Underrated Club Vintage Blue Baggy Jeans',
    description: 'Complete your denim collection and use coupon code CREW10 to unlock an extra 10% off.',
    points: [
      'Save 13% on the Vintage Blue Baggy Fit Jeans for ₹1,899.',
      'Crafted with a relaxed denim baggy fit.',
      'Regular price is ₹2,199 with EMI from ₹633/month.',
      'Perfect for casual everyday styling.'
    ],
    code: 'CREW10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-15',
    badge: '4% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'BAGGY TEE',
    title: 'Save 4% on Underrated Club Urban Arabic Vibe Baggy T-Shirt',
    description: 'Shop this trendy graphic tee and apply coupon code CREW10 to get an extra 10% off on eligible orders.',
    points: [
      'Save 4% on the Urban Arabic Vibe Black Baggy Fit T-Shirt for ₹1,299.',
      'Features a relaxed baggy fit with bold graphics.',
      'Regular price is ₹1,364 with EMI from ₹433/month.',
      'A stylish addition to any streetwear collection.'
    ],
    code: 'CREW10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  }
];