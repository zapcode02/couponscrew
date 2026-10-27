export interface Coupon {
  id: string;
  badge: string;
  badgeType: string;
  badgeColor: string;
  color: string;
  type: string;
  title: string;
  description: string;
  details?: string[];
  code: string;
  verified: string;
  userType: string;
  validTill: string;
}

export const JOCKEY_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'AT ₹999',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'MEN T-SHIRTS',
    title: 'Jockey Coupon Code – Get a Cotton Blend Round Neck T-Shirt at ₹999',
    description: 'Add a cozy, easy-wearing tee to your daily rotation without overspending.',
    details: [
      'Pick up the Super Combed Cotton Blend Half Sleeve Round Neck T-Shirt for just ₹999.',
      'Soft cotton blend fabric keeps you at ease from the first hour of the day to the last.',
      'The round neckline and half sleeves make it simple to dress up or down.',
      'An easy wardrobe basic that works with almost anything.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-2',
    badge: 'AT ₹1,249',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'ACTIVEWEAR',
    title: 'Jockey Coupon Code – Grab a Microfiber Skort for ₹1,249',
    description: 'Stay light and active in a skort designed for comfort on the move.',
    details: [
      'Order the Microfiber Skort at ₹1,249.',
      'Zippered side pockets give you a secure place for small essentials.',
      'The airy, lightweight fabric feels easy to wear for hours.',
      'Works well for the gym, trips, and everyday errands.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-3',
    badge: 'AT ₹799',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'FULL SLEEVE TEE',
    title: 'Jockey Discount Code – Pick Up a Full Sleeve Cotton T-Shirt for ₹799',
    description: 'A flexible full sleeve tee that pairs comfort with a clean, simple look.',
    details: [
      'Get the Super Combed Cotton Rich Full Sleeve T-Shirt at ₹799.',
      'Its cotton-rich fabric feels gentle on the skin and lets air through.',
      'The solid colour and round neckline keep the style neat and timeless.',
      'A handy layer for casual outfits across seasons.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-4',
    badge: 'AT ₹899',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'OVERSIZED TEE',
    title: 'Jockey Discount Code – Score an Oversized Graphic T-Shirt for ₹899',
    description: 'Give your casual wardrobe a fresh, relaxed update with a bold printed tee.',
    details: [
      'Bring home the oversized Graphic Printed T-Shirt for only ₹899.',
      'Made from a super combed, cotton-rich blend for a soft feel.',
      'Trendy graphic prints add personality to the design.',
      'The loose, easygoing fit stays comfortable throughout the day.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-5',
    badge: 'AT ₹799',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'GRAPHIC TEE',
    title: 'Jockey Promo Code – Get a Graphic Printed Cotton T-Shirt for ₹799',
    description: 'Switch up your regular looks with a tee that has a bit of character.',
    details: [
      'Order the Super Combed Cotton Rich Graphic Printed T-Shirt at ₹799.',
      'The cotton-rich fabric keeps things breathable for daily wear.',
      'A stylish print gives the tee a modern edge.',
      'A solid pick for casual hangouts and relaxed weekends.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-6',
    badge: 'PACK OF 2',
    badgeType: 'BUNDLE',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'WOMEN INNERWEAR',
    title: 'Jockey Promo Code – Buy a Pack of 2 Cotton Bras for ₹1,358',
    description: 'Stock up on everyday basics with a budget-friendly two-piece set.',
    details: [
      'Get the Pack of 2 Wirefree Cotton Stretch Bras for ₹1,358.',
      'Non-padded, wire-free cups offer gentle, natural support.',
      'The stretchy cotton fabric feels soft and smooth on the skin.',
      'Made for comfort through a full day of regular wear.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-7',
    badge: 'AT ₹749',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'FULL COVERAGE',
    title: 'Jockey Voucher Code – Get a Full Coverage Cotton Bra for ₹749',
    description: 'Reliable daily support in a soft, comfortable full coverage fit.',
    details: [
      'Buy the Wirefree Full Coverage Cotton Stretch Bra at ₹749.',
      'The wire-free, non-padded build keeps things light and comfortable.',
      'Stretchy fabric moves with you for a secure, flexible fit.',
      'Suited for wearing all day, every day.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-8',
    badge: 'AT ₹599',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'MEDIUM COVERAGE',
    title: 'Jockey Voucher Code – Grab the Medium Coverage Cotton Bra at ₹599',
    description: 'Keep your daily comfort simple with a light, easy medium coverage bra.',
    details: [
      'Order the Wirefree Medium Coverage Cotton Stretch Bra for ₹599.',
      'Without padding, the cups sit lightly and look natural.',
      'The stretch cotton flexes comfortably with every movement.',
      'A dependable choice for your regular routine.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-9',
    badge: 'AT ₹639',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'EVERYDAY BRA',
    title: 'Jockey Offers – Get a Full Coverage Everyday Bra for ₹639',
    description: 'Breathable, supportive comfort built for daily use.',
    details: [
      'Order the Full Coverage Everyday Bra and pay just ₹639.',
      'The wire-free design avoids pressure and keeps you at ease.',
      'Cotton stretch fabric helps you feel fresh through the day.',
      'A great choice for steady, everyday support.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-10',
    badge: 'AT ₹999',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'MARVEL EDITION',
    title: 'Jockey Offers – Buy Marvel Avengers Boxer Shorts for ₹999',
    description: 'Bring some superhero fun to your loungewear with comfy printed boxers.',
    details: [
      'Get the Marvel Avengers Printed Boxer Shorts at ₹999.',
      'Super combed cotton keeps them soft and comfortable all day.',
      'Bold Marvel prints add a playful touch.',
      'Great for relaxing at home and daily wear.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-11',
    badge: 'AT ₹599',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'BASIC TEE',
    title: 'Jockey Offer – Pick Up a Round Neck Cotton T-Shirt for ₹599',
    description: 'A simple, comfortable tee that keeps your spending in check.',
    details: [
      'Buy the Super Combed Cotton Rich Half Sleeve T-Shirt for ₹599.',
      'The cotton-rich fabric feels soft and lets your skin breathe.',
      'A classic round neck that goes with any casual outfit.',
      'A useful everyday essential.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-12',
    badge: 'SAVE ₹39',
    badgeType: 'SAVINGS',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'BOXER PACK',
    title: 'Save ₹39 on a Jockey Pack of 2 Printed Boxer Shorts',
    description: 'Get more value when you buy a pair of printed boxers together.',
    details: [
      'Buy the Pack of 2 Printed Boxer Shorts at ₹899 and save ₹39 on the pair.',
      'Handy side pockets add everyday practicality.',
      'Super combed cotton stays comfortable wear after wear.',
      'A good fit for lounging at home or regular daily use.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  }
];