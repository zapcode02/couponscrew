// Coupon type
export interface Coupon {
  id: string;
  badge: string;
  badgeType: 'UP TO' | 'FLAT' | 'FREE' | 'PERCENT' | 'DEAL';
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

export const INDIGO_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#00205B]',
    color: '#00205B',
    type: 'DOMESTIC FLIGHTS',
    title: 'Up to 50% Off on Domestic Flight Bookings with IndiGo',
    description: 'Book domestic flights on IndiGo and save up to 50% off on base fares — one of the most competitive IndiGo deals currently available for all users with no coupon code required.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-2',
    badge: 'UP TO 10% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#F5A623]',
    color: '#F5A623',
    type: 'INTERNATIONAL FLIGHTS',
    title: 'Destination of the Week — Up to 10% Off on Select International Flights',
    description: "IndiGo's Destination of the Week campaign offers up to 10% off on select international routes — apply this IndiGo promo code on weekends and you could win up to 10,000 BluChips as a lucky flier.",
    code: 'FLYMORE',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-3',
    badge: 'UP TO 25% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#00205B]',
    color: '#00205B',
    type: 'HOTEL BOOKINGS',
    title: 'Save Up to 25% on IndiGo Hotel Bookings + Earn BluChips',
    description: 'Book your stay through IndiGo Hotels and get up to 25% off instantly — plus earn up to 8 BluChips for every ₹100 spent on the booking.',
    code: 'GOSTAY',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-4',
    badge: 'UP TO ₹2500 OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#F5A623]',
    color: '#F5A623',
    type: 'WEEKEND SALE',
    title: 'Weekend Flight Sale — Up to ₹2,500 Off on Domestic & International Routes',
    description: "IndiGo's Weekend Sale is live on Saturdays and Sundays — save up to ₹2,500 on domestic and international flight bookings for travel between June 2026 and March 2028.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-5',
    badge: 'FLAT ₹400 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#00205B]',
    color: '#00205B',
    type: 'GROUP BOOKINGS',
    title: 'Flat ₹400 Off Per Person on Group Flight Bookings | Min 4 Passengers',
    description: 'Book IndiGo flights for a group of 4 to 9 passengers and save ₹400 per person on the base fare — one of the best-value IndiGo deals for family and group travel.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-6',
    badge: 'FLAT 6% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#F5A623]',
    color: '#F5A623',
    type: 'STUDENT SPECIAL',
    title: 'Student Special — 6% Off on Flights + 10 KG Extra Baggage + Free Flight Change',
    description: "IndiGo's Student Special gives verified students 6% off on base fares, zero flight change charges, and 10 KG additional baggage allowance — no IndiGo coupon code required.",
    code: '',
    verified: 'Verified',
    userType: 'Students Only',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-7',
    badge: 'UP TO ₹4500 OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#00205B]',
    color: '#00205B',
    type: 'BANK OFFER',
    title: 'AU Bank Card Holders — Up to ₹4,500 Off on IndiGo Flights | Every Wednesday',
    description: 'Pay for your IndiGo flight booking with an AU Bank card every Wednesday and save up to ₹4,500 — one of the highest bank-card instant discounts currently active on any Indian airline.',
    code: '',
    verified: 'Verified',
    userType: 'AU Bank Card Holders',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-8',
    badge: 'EARN BLUCHIPS',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#F5A623]',
    color: '#F5A623',
    type: 'BANK OFFER',
    title: 'IDFC Bank Card — Earn 22 BluChips per ₹100 + Up to 9 Free Domestic Flights a Year',
    description: 'Book IndiGo flights with your IDFC Bank card and earn up to 22 BluChips per ₹100 spent — plus milestone rewards of up to 25,000 BluChips and up to 9 free domestic flights annually.',
    code: '',
    verified: 'Verified',
    userType: 'IDFC Bank Card Holders',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-9',
    badge: 'FLAT 6% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#00205B]',
    color: '#00205B',
    type: 'SENIOR CITIZEN',
    title: 'Senior Citizen Discount — Flat 6% Off on Domestic IndiGo Flights',
    description: 'Passengers aged 60 and above get a flat 6% discount on base fares for domestic IndiGo flights — plus a 15 KG check-in baggage allowance included as standard.',
    code: '',
    verified: 'Verified',
    userType: 'Senior Citizens',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-10',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#F5A623]',
    color: '#F5A623',
    type: 'SIGHTSEEING',
    title: 'Bali Sightseeing — Up to 50% Off on Tours & Attraction Tickets',
    description: 'Book Bali sightseeing experiences through IndiGo and save up to 50% on tours and attraction tickets — covering Ubud Monkey Forest, Tanah Lot Temple, and Tegallalang Rice Terraces.',
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-11',
    badge: 'FLAT 50% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#00205B]',
    color: '#00205B',
    type: 'ATTRACTIONS',
    title: 'Singapore Attractions — Flat 50% Off + Free Cancellation Up to 24 Hours',
    description: 'Book Singapore attraction tickets through IndiGo and save 50% — free cancellation available up to 24 hours before your visit with no additional charge.',
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-12',
    badge: 'FROM ₹15499',
    badgeType: 'DEAL',
    badgeColor: 'bg-[#F5A623]',
    color: '#F5A623',
    type: 'INTERNATIONAL FLIGHTS',
    title: 'Shanghai from Kolkata — International Flights Starting From ₹15,499',
    description: 'Book IndiGo flights from Kolkata to Shanghai starting from ₹15,499 — competitive base fare pricing on this international route with standard IndiGo booking terms.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-13',
    badge: 'UP TO 30% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#00205B]',
    color: '#00205B',
    type: 'HOTEL BOOKINGS',
    title: 'Up to 30% Off on Hotel Bookings + Earn IndiGo BluChips on Every Stay',
    description: "Book hotels through IndiGo's travel platform and save up to 30% — plus earn BluChips on every hotel booking that can be redeemed on future IndiGo flights.",
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-14',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#F5A623]',
    color: '#F5A623',
    type: 'DEFENCE SPECIAL',
    title: 'Armed Forces Special — Up to 50% Off on IndiGo Base Fares',
    description: 'Currently serving and retired Armed Forces, Paramilitary, and Defence personnel — including spouses, dependent children, and war widows — get up to 50% off on IndiGo base fares.',
    code: '',
    verified: 'Verified',
    userType: 'Defence Personnel',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-15',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#00205B]',
    color: '#00205B',
    type: 'SIGHTSEEING',
    title: 'Sightseeing Experiences — Up to 50% Off on 3 Lakh+ Tours Worldwide + BluChips',
    description: 'Access over 3 lakh tours and activities across top travel destinations through IndiGo and save up to 50% — free cancellation up to 24 hours, with BluChips earned on every booking.',
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '31 Aug 2026'
  },
  {
    id: 'coupon-16',
    badge: 'UP TO 35% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#F5A623]',
    color: '#F5A623',
    type: 'HOTEL BOOKINGS',
    title: 'GoIndiGo Hotels — Up to 35% Off on Worldwide Hotel Stays + BluChips',
    description: 'Book hotels worldwide through the GoIndiGo platform and save up to 35% — exclusive savings across domestic and international properties with BluChips earned on every stay.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '31 Aug 2026'
  }
];
