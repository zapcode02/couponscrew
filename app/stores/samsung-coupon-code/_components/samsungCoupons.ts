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

export const SAMSUNG_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: '41% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1428A0]',
    color: '#1428A0',
    type: 'GALAXY S23 5G',
    title: 'Samsung Coupon Code – Save Up to 41% on Samsung Galaxy S23 5G',
    description: 'Get the Samsung Galaxy S23 5G for just ₹52,999, down from ₹89,999.\nEnjoy savings of up to 41% for a limited period.\nEligible bank cards can unlock up to 5% cashback.\nFree delivery is available on selected locations.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-2',
    badge: '23% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1428A0]',
    color: '#1428A0',
    type: 'GALAXY S25 ULTRA',
    title: 'Samsung Coupon Code – Get Up to 23% OFF on Galaxy S25 Ultra',
    description: "Purchase the Samsung Galaxy S25 Ultra for ₹99,999.\nSave ₹30,000 compared to the listed retail price.\nNo Cost EMI options are available with participating banks.\nA great choice for users looking for Samsung's latest flagship smartphone.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-3',
    badge: '22% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1428A0]',
    color: '#1428A0',
    type: 'GALAXY S24 ULTRA',
    title: 'Samsung Discount Code – Save Up to 22% on Galaxy S24 Ultra',
    description: 'Grab the Samsung Galaxy S24 Ultra at ₹1,04,999.\nEnjoy savings of up to 22% on the original price.\nHandles camera shots, mobile games, and daily work tasks with ease.\nAvailable for a limited time on the Samsung Store.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-4',
    badge: 'SAVE ₹1,29,910',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0A0A0A]',
    color: '#0A0A0A',
    type: 'SMART TV',
    title: 'Samsung Discount Code – Save ₹1,29,910 on 75-inch Micro RGB 4K Smart TV',
    description: 'Buy the 75-inch Micro RGB 4K Smart TV for ₹4,99,990.\nSave ₹1,29,910 compared to the MRP.\nDelivers rich, lifelike colours that make every show more engaging.\nPerfect for creating a premium home theatre setup.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-5',
    badge: 'SAVE ₹54,810',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0A0A0A]',
    color: '#0A0A0A',
    type: 'APPLIANCE COMBO',
    title: 'Samsung Promo Code – Save ₹54,810 on Refrigerator & Washing Machine Combo',
    description: "Upgrade your home with Samsung's appliance combo from ₹1,24,180.\nEnjoy total savings of ₹54,810.\nA smart buy when setting up a new house or refreshing your kitchen.\nLimited-time bundle offer.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-6',
    badge: 'SAVE ₹45,490',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0A0A0A]',
    color: '#0A0A0A',
    type: 'WASHER DRYER',
    title: 'Samsung Promo Code – Save ₹45,490 on Front Load Washer Dryer Combo',
    description: 'Get the Samsung Washer Dryer Combo for ₹74,500.\nSave ₹45,490 instantly on your purchase.\nWash and dry clothes with a single appliance.\nSaves time and space for busy families with a fast-paced routine.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-7',
    badge: 'SAVE ₹37,000',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0A0A0A]',
    color: '#0A0A0A',
    type: 'GALAXY S26 FE',
    title: 'Samsung Voucher – Save ₹37,000 on Galaxy S26 FE',
    description: 'Shop the Samsung Galaxy S26 FE for ₹72,999.\nSave ₹37,000 on the regular selling price.\nPay in easy monthly instalments using supported cards and payment modes.\nOffer valid while stocks last.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-8',
    badge: 'SAVE ₹35,010',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0A0A0A]',
    color: '#0A0A0A',
    type: 'REFRIGERATOR',
    title: 'Samsung Voucher – Save ₹35,010 on 653L Side-by-Side Refrigerator',
    description: 'Purchase the 653L Side-by-Side Refrigerator for ₹82,990.\nGet an instant discount of ₹35,010.\nSpacious storage for large families.\nAvailable for a limited period.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-9',
    badge: 'SAVE ₹33,701',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0A0A0A]',
    color: '#0A0A0A',
    type: 'GAMING MONITOR',
    title: 'Samsung Offers – Save ₹33,701 on Odyssey OLED G8 Gaming Monitor',
    description: 'Buy the Samsung Odyssey OLED G8 for ₹83,199.\nSave ₹33,701 compared to the original price.\nEnjoy smooth visuals for gaming and creative work.\nLimited-time Samsung offer.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-10',
    badge: 'SAVE ₹29,910',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0A0A0A]',
    color: '#0A0A0A',
    type: 'SMART TV',
    title: 'Samsung Offers – Save ₹29,910 on The Frame 65-inch Smart TV',
    description: 'Get The Frame 65-inch Smart TV for ₹1,29,990.\nSave ₹29,910 instantly.\nLooks like a piece of wall art and suits stylish living rooms.\nGreat option for movies, sports, and entertainment.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-11',
    badge: 'SAVE ₹20,000',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1428A0]',
    color: '#1428A0',
    type: 'GALAXY Z FLIP8',
    title: 'Save Up to ₹20,000 on Samsung Galaxy Z Flip8',
    description: 'Buy the Galaxy Z Flip8 from ₹1,14,999.\nEnjoy savings of up to ₹20,000.\nEligible buyers can choose No Cost EMI plans.\nAdditional bank offers may also be available.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-12',
    badge: 'SAVE ₹19,009',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1428A0]',
    color: '#1428A0',
    type: 'REFRIGERATOR',
    title: 'Save Up to ₹19,009 on Samsung 236L Double Door Refrigerator',
    description: 'Get the Samsung 236L Double Door Refrigerator for ₹30,990.\nSave up to ₹19,009 on the listed price.\nDesigned for efficient cooling and everyday use.\nLimited-time Samsung appliance deal.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-13',
    badge: 'SAVE ₹15,000',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0A0A0A]',
    color: '#0A0A0A',
    type: 'GALAXY A57 5G',
    title: 'Save ₹15,000 on Samsung Galaxy A57 5G',
    description: 'Purchase the Galaxy A57 5G (8GB) for ₹62,999.\nSave ₹15,000 instantly.\nA dependable phone that keeps up with office work, videos, and routine tasks.\nAvailable while the promotion lasts.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-14',
    badge: 'SAVE ₹13,910',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0A0A0A]',
    color: '#0A0A0A',
    type: 'SOUNDBAR',
    title: 'Save ₹13,910 on Samsung Q-Series Soundbar',
    description: 'Buy the Samsung Q-Series Soundbar for ₹1,10,990.\nSave ₹13,910 on the current selling price.\nEnjoy immersive sound for movies and music.\nSuitable for upgrading your home entertainment system.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-15',
    badge: 'SAVE ₹10,000',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0A0A0A]',
    color: '#0A0A0A',
    type: 'GALAXY S25 ULTRA',
    title: 'Save ₹10,000 on Samsung Galaxy S25 Ultra',
    description: "Samsung Galaxy S25 Ultra now available at ₹1,74,999.\nEnjoy an instant discount of ₹10,000.\nEarn reward points on eligible purchases.\nAvailable through Samsung's official online store.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-16',
    badge: 'SAVE ₹8,000',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0A0A0A]',
    color: '#0A0A0A',
    type: 'WASHING MACHINE',
    title: 'Save ₹8,000 on Samsung Top Load Washing Machine',
    description: 'Buy the Samsung 7kg Top Load Washing Machine for ₹18,990.\nSave ₹8,000 on the regular price.\nDesigned for efficient everyday washing.\nOffer valid for a limited time.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-17',
    badge: 'SAVE ₹7,000',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0A0A0A]',
    color: '#0A0A0A',
    type: 'GALAXY BUDS4 PRO',
    title: 'Save ₹7,000 on Samsung Galaxy Buds4 Pro',
    description: 'Get the Galaxy Buds4 Pro for ₹22,999.\nSave ₹7,000 compared to the MRP.\nCrystal-clear wireless sound with a snug fit you can wear for hours.\nAvailable in selected colours.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-18',
    badge: 'SAVE ₹6,000',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0A0A0A]',
    color: '#0A0A0A',
    type: 'GALAXY A56 5G',
    title: 'Save ₹6,000 on Samsung Galaxy A56 5G',
    description: 'Buy the Galaxy A56 5G (8GB) for ₹48,999.\nSave ₹6,000 instantly.\nA great option for everyday performance and entertainment.\nLimited-time Samsung smartphone deal.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-19',
    badge: 'STARTING ₹19,999',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'GALAXY M17 5G',
    title: 'Samsung Galaxy M17 5G Starting from ₹19,999',
    description: 'Own the Samsung Galaxy M17 5G starting at ₹19,999.\nAvailable at a special introductory price.\nSuitable for everyday browsing, streaming, and multitasking.\nShop now before the offer ends.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  }
];
