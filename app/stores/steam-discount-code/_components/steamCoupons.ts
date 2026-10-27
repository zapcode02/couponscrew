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

export const STEAM_COUPONS: Coupon[] = [
  {
    id: 'steam-coupon-1',
    badge: 'SAVE 90%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#171A21]',
    color: '#171A21',
    type: 'GAMES & ADVENTURE',
    title: 'Steam Coupon Code – Save 90% on The Walking Dead',
    description: 'Experience the award-winning zombie adventure at its lowest price.',
    points: [
      'Save 90% on The Walking Dead for just ₹200.',
      'Explore a story-driven adventure set in Robert Kirkman\'s comic universe.',
      'Regular price is ₹2,000.',
      'A must-play for fans of narrative and survival games.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'steam-coupon-2',
    badge: 'SAVE 90%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#171A21]',
    color: '#171A21',
    type: 'STEALTH & ACTION',
    title: 'Steam Coupon Code – Save 90% on Styx: Master of Shadows',
    description: 'Step into a stealth adventure while enjoying one of Steam\'s biggest discounts.',
    points: [
      'Save 90% on Styx: Master of Shadows for only ₹119.',
      'Sneak through challenging missions with stealth-focused gameplay.',
      'Regular price is ₹1,199.',
      'Daily Deal available until 7 November.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '07 Nov 2026'
  },
  {
    id: 'steam-coupon-3',
    badge: 'SAVE 90%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#171A21]',
    color: '#171A21',
    type: 'CO-OP SURVIVAL',
    title: 'Steam Discount Code – Save 90% on Killing Floor 2',
    description: 'Fight endless waves of enemies without spending a fortune.',
    points: [
      'Save 90% on Killing Floor 2 for just ₹72.',
      'Enjoy action-packed co-op survival gameplay.',
      'Regular price is ₹729.',
      'Daily Deal available until 7 November.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '07 Nov 2026'
  },
  {
    id: 'steam-coupon-4',
    badge: 'SAVE 85%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#171A21]',
    color: '#171A21',
    type: 'STRATEGY & RTS',
    title: 'Steam Discount Code – Save 85% on Total War: WARHAMMER III',
    description: 'Build your empire and command epic fantasy battles for less.',
    points: [
      'Save 85% on Total War: WARHAMMER III, now priced at $8.99.',
      'Experience large-scale strategy battles with multiple factions.',
      'Regular price is $59.99.',
      'A great pick for strategy and RTS fans.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'steam-coupon-5',
    badge: 'SAVE 80%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#171A21]',
    color: '#171A21',
    type: 'CITY BUILDER',
    title: 'Steam Promo Code – Save 80% on Airborne Kingdom',
    description: 'Create and manage your own flying city at a huge discount.',
    points: [
      'Save 80% on Airborne Kingdom for just ₹219.',
      'Build, expand, and manage a unique airborne civilization.',
      'Regular price is ₹1,099.',
      'Daily Deal ends 7 November.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '07 Nov 2026'
  },
  {
    id: 'steam-coupon-6',
    badge: 'SAVE 75%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#171A21]',
    color: '#171A21',
    type: 'OPEN WORLD',
    title: 'Steam Promo Code – Save 75% on Red Dead Redemption 2',
    description: 'Explore the Wild West with one of Rockstar\'s best-selling games.',
    points: [
      'Save 75% on Red Dead Redemption 2 for $14.99.',
      'Experience an expansive open-world adventure.',
      'Regular price is $59.99.',
      'Perfect for fans of action and story-rich gameplay.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'steam-coupon-7',
    badge: 'SAVE 70%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#171A21]',
    color: '#171A21',
    type: 'ACTION RPG',
    title: 'Steam Voucher Code – Save 70% on Cyberpunk 2077',
    description: 'Step into Night City at a massive limited-time discount.',
    points: [
      'Save 70% on Cyberpunk 2077 for just ₹899.',
      'Explore a futuristic open world packed with action.',
      'Regular price is ₹2,999.',
      'Special promotion available for a limited time.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'steam-coupon-8',
    badge: 'SAVE 60%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#171A21]',
    color: '#171A21',
    type: 'MULTIPLAYER HORROR',
    title: 'Steam Voucher Code – Save 60% on Dead by Daylight',
    description: 'Team up or survive thrilling multiplayer horror matches for less.',
    points: [
      'Get Dead by Daylight at 60% off and pay just $7.99.',
      'Choose to play as survivors or deadly killers.',
      'Regular price is $19.99.',
      'A great multiplayer game for horror fans.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'steam-coupon-9',
    badge: 'SAVE 50%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#171A21]',
    color: '#171A21',
    type: 'ACTION & ADVENTURE',
    title: 'Steam Offers – Save 50% on Grand Theft Auto V Enhanced',
    description: 'Play the upgraded version of GTA V with extra bonus content added in.',
    points: [
      'Save 50% on Grand Theft Auto V Enhanced for ₹1,249.',
      'Includes GTA V Enhanced, Legacy Edition, and Criminal Enterprise Starter Pack.',
      'Regular price is ₹2,499.',
      'Offer valid until 5 November.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '05 Nov 2026'
  },
  {
    id: 'steam-coupon-10',
    badge: 'SAVE 30%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#171A21]',
    color: '#171A21',
    type: 'SURVIVAL & CRAFTING',
    title: 'Steam Offers – Save 30% on Palworld',
    description: 'Start your adventure with Palworld at a reduced price.',
    points: [
      'Save 30% on Palworld for $20.99.',
      'Explore, craft, battle, and collect unique creatures.',
      'Regular price is $29.99.',
      'A fun choice for open-world survival fans.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'steam-coupon-11',
    badge: 'SAVE 20%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#171A21]',
    color: '#171A21',
    type: 'NEW RELEASE',
    title: 'Save 20% on Steam Over the Hill',
    description: 'Grab this new release during its introductory launch offer.',
    points: [
      'Save 20% on Over the Hill for ₹919.',
      'Regular price is ₹1,149.',
      'Introductory offer ends 28 October.',
      'Launch day is a smart moment to pick up the game.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '28 Oct 2026'
  },
  {
    id: 'steam-coupon-12',
    badge: 'SAVE 15%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#171A21]',
    color: '#171A21',
    type: 'NEW RELEASE',
    title: 'Save 15% on Steam Moon Sweepers',
    description: 'Purchase Moon Sweepers early and enjoy launch savings.',
    points: [
      'Save 15% on Moon Sweepers for ₹398.',
      'Regular price is ₹469.',
      'Introductory offer ends 30 October.',
      'Bundle options are also available.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'steam-coupon-13',
    badge: 'SAVE 10%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#171A21]',
    color: '#171A21',
    type: 'SURVIVAL RPG',
    title: 'Save 10% on Steam Enshrouded',
    description: 'Start your Enshrouded adventure with an introductory discount.',
    points: [
      'Save 10% on Enshrouded for ₹1,619.',
      'Regular price is ₹1,799.',
      'Introductory offer ends 29 October.',
      'A good opportunity to buy the game before the offer expires.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '29 Oct 2026'
  }
];