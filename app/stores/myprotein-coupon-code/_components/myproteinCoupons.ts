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

export const MYPROTEIN_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'EXTRA 10% OFF',
    badgeType: 'EXTRA',
    badgeColor: 'bg-[#00A499]',
    color: '#00A499',
    type: 'SITEWIDE',
    title: 'MyProtein Coupon Code – Get an Extra 10% Off Orders Above ₹10,000',
    description: 'Save an extra 10% on qualifying orders above ₹10,000 when you stock up on MyProtein supplements and sports nutrition.',
    points: [
      'Save an extra 10% when your order value reaches ₹10,000 or more.',
      'Shop protein powders, supplements, and sports nutrition essentials.',
      'The discount applies automatically or with eligible coupon codes.',
      'Available for eligible purchases during the promotional period.'
    ],
    code: 'EXTRA10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-2',
    badge: '5% OFF',
    badgeType: 'EXTRA',
    badgeColor: 'bg-[#00A499]',
    color: '#00A499',
    type: 'SUPPLEMENTS',
    title: 'MyProtein Promo Code – Enjoy 5% Off Orders Above ₹5,000',
    description: 'Get an extra 5% off purchases above ₹5,000 on bestselling protein, creatine, and wellness products.',
    points: [
      'Enjoy an additional 5% discount on orders above ₹5,000.',
      'Choose from popular protein, creatine, and wellness supplements.',
      'Combine your essentials in one order to maximize savings.',
      'Available for a limited time on eligible purchases.'
    ],
    code: 'SAVE5',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-3',
    badge: 'UP TO 25% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#00A499]',
    color: '#00A499',
    type: 'HYROX RANGE',
    title: 'MyProtein Offers – Enjoy Savings of Up to 25% Across the HYROX Range',
    description: 'Save up to 25% on selected HYROX sports nutrition products, featuring the new Lychee and Orange flavours.',
    points: [
      'Save up to 25% on selected HYROX performance supplements.',
      'Discover the newly launched Lychee and Orange flavour options.',
      'Support optimal hydration during high-intensity workouts and training.',
      'Valid on eligible HYROX products while stocks last.'
    ],
    code: 'HYROX25',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-4',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#00A499]',
    color: '#00A499',
    type: 'VITAMINS & RECOVERY',
    title: 'MyProtein Offers – Discover Up to 50% Off Vitamins & Recovery Collection',
    description: 'Save up to 50% on selected vitamins and recovery supplements to support your daily fitness routine.',
    points: [
      'Save up to 50% on selected vitamins and recovery products.',
      'Support your training with essential daily nutrients.',
      'Explore a wide range of wellness and recovery supplements.',
      'Limited-time savings on selected products.'
    ],
    code: 'VITAMIN50',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-5',
    badge: 'FROM ₹299',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#00A499]',
    color: '#00A499',
    type: 'CREATINE',
    title: 'MyProtein Creatine Deals – Creatine Starting from ₹299',
    description: 'Buy selected MyProtein Creatine products from just ₹299 to help support strength and workout performance.',
    points: [
      'Purchase MyProtein Creatine starting from only ₹299.',
      'Support better strength, power, and overall workout performance.',
      'Available in selected variants and pack sizes.',
      'Suitable for both beginners and experienced athletes.'
    ],
    code: 'CREATINE299',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-6',
    badge: 'FROM ₹3,999',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#00A499]',
    color: '#00A499',
    type: 'PROTEIN POWDER',
    title: 'MyProtein Offers – Hot Protein Starting at Just ₹3,999',
    description: 'Grab MyProtein Hot Protein from only ₹3,999 for quality daily nutrition at a special price.',
    points: [
      'Buy Hot Protein starting from just ₹3,999.',
      'Enjoy a protein formula made for everyday nutrition.',
      'Support your active lifestyle with quality protein intake.',
      'Available while promotional pricing lasts.'
    ],
    code: 'HOTPROTEIN',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-7',
    badge: '8% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#00A499]',
    color: '#00A499',
    type: 'IMPACT WHEY',
    title: 'MyProtein Coupon – Save 8% on Impact Whey Protein 1kg',
    description: 'Save 8% on Impact Whey Protein 1kg (Date Delight), now available for ₹4,599 for a limited time.',
    points: [
      'Get Impact Whey Protein 1kg (Date Delight) for ₹4,599.',
      'Save 8% compared to the regular selling price.',
      'Made with quality whey protein to support daily protein intake.',
      'A great option for post-workout recovery and muscle support.'
    ],
    code: 'WHEY8OFF',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-8',
    badge: '13% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#00A499]',
    color: '#00A499',
    type: 'MASS GAINER',
    title: 'MyProtein Coupon Code – Save 13% on Weight & Mass Gainer Blend 2.5kg',
    description: 'Get 13% off the Weight & Mass Gainer Blend 2.5kg in Mango flavour, now priced at ₹3,499.',
    points: [
      'Save 13% on the Weight & Mass Gainer Blend 2.5kg.',
      'Get it for ₹3,499 and enjoy a ₹500 price reduction.',
      'Add more protein and calories to your diet to help support muscle development.',
      'Enjoy the Mango flavour while this limited-time offer lasts.'
    ],
    code: 'GAINER13',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-9',
    badge: 'FREE GIFT',
    badgeType: 'FREE',
    badgeColor: 'bg-[#00A854]',
    color: '#00A854',
    type: 'FREE SOCKS',
    title: 'MyProtein Offer – Free Crew Socks on Orders Above ₹7,000',
    description: 'Receive free Crew Socks with eligible MyProtein orders above ₹7,000 while promotional stocks last.',
    points: [
      'Receive complimentary Crew Socks on orders above ₹7,000.',
      'Free gift applies to eligible MyProtein purchases while the promotion lasts.',
      'Shop protein, supplements, and fitness essentials to qualify.',
      'Offer valid while promotional stocks last.'
    ],
    code: 'FREESOCKS',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  }
];