// Coupon type
export interface Coupon {
  id: string;
  badge: string;
  badgeType: 'UP TO' | 'FLAT' | 'FREE' | 'PERCENT' | 'BANK OFFER' | 'BUNDLE' | 'DEAL' | 'FLAGSHIP' | 'FLASH SALE' | 'PERKS' | 'STUDENT' | 'SPECIAL';
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

export const ONEPLUS_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'SITEWIDE',
    title: 'OnePlus Coupon Code – Up to 50% Off Phones, Audio & TVs',
    description: 'Save up to 50% on OnePlus devices and get a welcome gift card as a new customer.',
    points: [
      'Get discounts of up to 50% on OnePlus smartphones, TVs, audio products and accessories.',
      'New users can get a welcome gift card worth up to ₹1,500.',
      'Use the coupon code at checkout to get eligible savings.',
      'Upgrade your favourite OnePlus devices while the offer is available.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-2',
    badge: '5% OFF + GIFTS',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'SMARTPHONES',
    title: 'OnePlus Coupon Code – 5% Off OnePlus 15 + Free Nord Buds 3',
    description: 'Get an instant discount on the OnePlus 15 and special free gifts with your purchase.',
    points: [
      'Get an instant 5% discount on the OnePlus 15 smartphone.',
      'Get an exchange bonus of up to ₹4,000 on eligible devices.',
      'Every purchase comes with free OnePlus Nord Buds 3, a phone cooler and a 2-year battery warranty.',
      'Use the coupon code at checkout to get all the eligible benefits.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-3',
    badge: 'UP TO 18% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'SMARTPHONES',
    title: 'OnePlus Promo Code – 18% Off OnePlus 15',
    description: 'Save up to 18% on the OnePlus 15 with exchange and RedCoins benefits.',
    points: [
      'Buy the OnePlus 15 at ₹69,999 with discounts of up to 18%.',
      'Get an extra ₹3,000 exchange bonus on eligible devices.',
      'Save up to 2% more with RedCoins rewards.',
      'Use the coupon code at checkout to get the available offers.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-4',
    badge: 'FLAT 27% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'SMARTPHONES',
    title: 'OnePlus Promo Code – Flat 27% Off OnePlus N6X',
    description: 'Buy the OnePlus N6X in Burgundy Red at a flat 27% discount.',
    points: [
      'Save a flat 27% on the OnePlus N6X Burgundy Red edition.',
      'Prices start from only ₹20,999 for eligible models.',
      'Use the coupon code at checkout to get the available savings.',
      'Upgrade your smartphone at a much lower price.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-5',
    badge: 'FROM ₹39,999',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'SMARTPHONES',
    title: 'OnePlus Discount Code – OnePlus 12R from ₹39,999',
    description: 'Buy the OnePlus 12R at a special starting price, with bank offers and EMI options.',
    points: [
      'Buy the OnePlus 12R from just ₹39,999.',
      'Choose easy no-cost EMI payment options.',
      'Get extra savings with HDFC, ICICI and OneCard bank offers.',
      'Upgrade to a flagship smartphone at a good price.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-6',
    badge: 'FREE BUDS 3',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'SMARTPHONES',
    title: 'OnePlus Discount Code – OnePlus 13R + Free Buds 3',
    description: 'Buy the OnePlus 13R with instant savings and premium free gifts.',
    points: [
      'Buy the OnePlus 13R at an effective price of ₹39,999.',
      'Save up to ₹3,000 with eligible ICICI credit cards.',
      'Get free OnePlus Buds 3 worth ₹6,499 with every purchase.',
      'Shop now to get great smartphone value along with bundled rewards.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-7',
    badge: 'FLAT ₹1,000 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'SMARTPHONES',
    title: 'OnePlus Voucher Code – Flat ₹1,000 Off OnePlus Nord 4',
    description: 'Save instantly on the OnePlus Nord 4, with extra bank benefits.',
    points: [
      'Get a flat ₹1,000 discount on the OnePlus Nord 4.',
      'Prices start from ₹28,999 on eligible variants.',
      'Get up to ₹3,000 in extra savings with selected bank cards.',
      'Use the coupon code at checkout to get the eligible offers.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-8',
    badge: 'UP TO ₹4,000 OFF',
    badgeType: 'BANK OFFER',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'BANK OFFER',
    title: 'OnePlus Voucher Code – Up to ₹4,000 Off with Bank Cards',
    description: 'Save more on OnePlus flagship phones with Axis and HDFC Bank offers.',
    points: [
      'Get up to ₹4,000 off on OnePlus 15 and OnePlus 13 models.',
      'Pay with eligible Axis or HDFC Bank cards to get the discount.',
      'Use bank savings together with selected offers, where applicable.',
      'Buy flagship OnePlus smartphones while this bank offer is available.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-9',
    badge: 'RCC PERKS',
    badgeType: 'SPECIAL',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'BENEFITS',
    title: 'OnePlus Referral Code – Nord Era Benefits & Lifetime Display Warranty',
    description: 'Get special OnePlus benefits with a lifetime display warranty and Red Cable Club perks.',
    points: [
      'Get a lifetime display warranty on eligible OnePlus Nord devices.',
      'Get special Red Cable Club rewards and member benefits.',
      'Make use of exchange programmes and fast, free delivery.',
      'Get more value from your OnePlus, even after you buy.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-10',
    badge: 'AT ₹37,999',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'SMARTPHONES',
    title: 'OnePlus Referral Code – OnePlus 13R at ₹37,999',
    description: 'Buy the OnePlus 13R at a lower price with HDFC card savings.',
    points: [
      'Get the OnePlus 13R at an effective price of ₹37,999.',
      'Save an extra ₹1,500 with eligible HDFC credit cards.',
      'Choose up to 6 months of no-cost EMI for easy payments.',
      'Shop now to get flagship features at a lower price.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-11',
    badge: '8% OFF + GIFT',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'SMARTPHONES',
    title: 'OnePlus Cashback Offers – 8% Off OnePlus 13S + SBI Benefits',
    description: 'Save instantly on the OnePlus 13S with special SBI card offers.',
    points: [
      'Get an instant 8% discount on the OnePlus 13S.',
      'SBI cardholders can get up to ₹5,000 in extra savings.',
      'Every eligible purchase comes with free OnePlus Nord Buds 3.',
      'Order from the OnePlus online store to get the most benefits.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-12',
    badge: 'UP TO 17% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'SMARTPHONES',
    title: 'OnePlus Cashback Offers – Up to 17% Off OnePlus Nord 5',
    description: 'Save up to 17% on the OnePlus Nord 5, with extra bank benefits.',
    points: [
      'Get up to 17% off on the OnePlus Nord 5 smartphone.',
      'Get an extra ₹3,000 discount with eligible HDFC credit cards.',
      'Get a free Magnetic Case with every eligible purchase.',
      'Upgrade your smartphone while these limited-time offers are available.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-13',
    badge: 'UP TO 21% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'WEARABLES',
    title: 'OnePlus Wallet Offers – Up to 21% Off Wearables',
    description: 'Save up to 21% on OnePlus smartwatches, bands and wearable accessories.',
    points: [
      'Get discounts of up to 21% on selected OnePlus wearables.',
      'Buy smartwatch straps and wearable accessories at lower prices.',
      'Find premium wearable technology for less.',
      'Upgrade your fitness gear while the offer is available.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-14',
    badge: 'FLAT 4% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'SMARTPHONES',
    title: 'OnePlus Wallet Offers – Flat 4% Off Nord CE4 Lite 5G',
    description: 'Get extra savings on the OnePlus Nord CE4 Lite 5G with student and Jio benefits.',
    points: [
      'Save a flat 4% on the OnePlus Nord CE4 Lite 5G.',
      'Eligible students can get an extra ₹250 discount.',
      'Jio Postpaid users can get benefits worth up to ₹2,250.',
      'Buy now to get many savings on one purchase.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-15',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'TABLETS',
    title: 'OnePlus Bank Offers – Up to 50% Off Tablets',
    description: 'Improve your productivity with discounts of up to 50% on OnePlus tablets.',
    points: [
      'Save up to 50% on selected OnePlus tablets and accessories.',
      'See tablets made for work, study and entertainment.',
      'Get great value on eligible tablet models.',
      'Shop before the offer ends to save the most.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-16',
    badge: 'FLAT 18% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'AUDIO',
    title: 'OnePlus Bank Offers – Flat 18% Off Nord Buds 2',
    description: 'Save 18% on OnePlus Nord Buds 2, with extra ICICI bank benefits.',
    points: [
      'Get a flat 18% discount on OnePlus Nord Buds 2.',
      'Prices start from only ₹2,699 on eligible models.',
      'Get up to ₹2,000 in extra savings with ICICI bank cards and EMI.',
      'Upgrade your audio experience while this offer is available.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-17',
    badge: 'FLAT 14% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'AUDIO',
    title: 'OnePlus Coupon Code – Flat 14% Off Buds Pro 3',
    description: 'Save 14% on OnePlus Buds Pro 3, with extra ICICI card benefits.',
    points: [
      'Get a flat 14% discount on OnePlus Buds Pro 3.',
      'Get an extra ₹1,000 off with eligible ICICI bank cards.',
      'Link your OnePlus device to get more eligible benefits.',
      'Upgrade your listening experience while this offer is available.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-18',
    badge: 'AT ₹34,999',
    badgeType: 'FLASH SALE',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'TABLETS',
    title: 'OnePlus Coupon Code – OnePlus Pad 2 Flash Sale',
    description: 'Get the OnePlus Pad 2 at a special price, with extra bank savings.',
    points: [
      'Buy the OnePlus Pad 2 for just ₹34,999 in the flash sale.',
      'Save up to ₹3,000 more with eligible ICICI Bank and OneCard offers.',
      'Choose up to 9 months of no-cost EMI on eligible purchases.',
      'Shop before the limited-time flash sale ends.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-19',
    badge: 'FLAT 19% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'SMARTPHONES',
    title: 'OnePlus Promo Code – 19% Off OnePlus 11 5G',
    description: 'Save on the OnePlus 11 5G with special gifts and finance offers.',
    points: [
      'Get a flat 19% discount on the OnePlus 11 5G.',
      'Get an extra ₹1,500 off with OneCard EMI.',
      'Every eligible purchase comes with a free phone case.',
      'Enjoy RedCoins rewards and up to 24 months of no-cost EMI.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-20',
    badge: 'FLAT 25% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'WEARABLES',
    title: 'OnePlus Promo Code – Flat 25% Off OnePlus Watch 2',
    description: 'Upgrade your smartwatch with instant savings and bank card benefits.',
    points: [
      'Save a flat 25% on the OnePlus Watch 2.',
      'Get up to ₹2,000 extra discount with eligible ICICI, OneCard, HDFC or IDFC bank cards.',
      'Choose up to 12 months of no-cost EMI.',
      'Enjoy premium smartwatch features at a lower price.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-21',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'ACCESSORIES',
    title: 'OnePlus Discount Code – Up to 50% Off Mobile Accessories',
    description: 'Save up to 50% on OnePlus accessories for your daily devices.',
    points: [
      'Get discounts of up to 50% on eligible mobile accessories.',
      'Buy cases, chargers, cables, audio products and protection accessories.',
      'You do not need any coupon code to get the discount.',
      'Upgrade your accessories while these deals are available.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-22',
    badge: 'FLAT 4% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'SMARTPHONES',
    title: 'OnePlus Discount Code – Flat 4% Off Nord CE 2 Lite 5G',
    description: 'Buy the OnePlus Nord CE 2 Lite 5G with extra entertainment and business benefits.',
    points: [
      'Get a flat 4% discount on the OnePlus Nord CE 2 Lite 5G.',
      'Prices start from ₹20,999 on eligible variants.',
      'Get 6 months of Spotify Premium at no extra cost.',
      'Business customers can save up to 18% on eligible purchases.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-23',
    badge: 'EXTRA 5% OFF',
    badgeType: 'STUDENT',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'STUDENT DISCOUNT',
    title: 'OnePlus Voucher Code – Extra 5% Off for Students',
    description: 'Eligible students can save more on every OnePlus purchase.',
    points: [
      'Get an extra 5% discount on eligible OnePlus products.',
      'Verify your student status through UNiDAYS to get the offer.',
      'Buy smartphones, accessories, wearables and more with extra savings.',
      'Enjoy special student pricing on your favourite OnePlus devices.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'Students',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-24',
    badge: 'UP TO 45% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'ACCESSORIES',
    title: 'OnePlus Voucher Code – Up to 45% Off Bundle Collections',
    description: 'Save up to 45% on OnePlus bundles starting at only ₹949.',
    points: [
      'Get discounts of up to 45% on selected OnePlus bundle collections.',
      'Bundle prices start from only ₹949.',
      'Buy value-for-money combinations of popular OnePlus products.',
      'Upgrade many devices and accessories together and save more.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  }
];
