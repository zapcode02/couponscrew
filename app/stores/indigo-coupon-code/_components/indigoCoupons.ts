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
  points: string[];
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
    points: [
      'Discount applies to the base fare only — taxes and fees are added separately.',
      'No code needed — discount reflects directly in the fare shown during search.',
      'Discount varies by route and travel date, up to the 50% ceiling.',
      'Book early on popular routes as the lowest fares sell out first.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
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
    points: [
      'Limited to select international routes tagged as "Destination of the Week" — not all international flights.',
      'Code FLYMORE must be applied specifically on weekend bookings for the lucky flier chance.',
      'The 10,000 BluChips prize is a chance-based bonus, not guaranteed on every booking.',
      'Destination rotates periodically, so check the current week\'s featured route.'
    ],
    code: 'FLYMORE',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Nov 2026'
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
    points: [
      'Code GOSTAY applies to hotel bookings made through the IndiGo platform, not direct hotel bookings.',
      'BluChips earned (up to 8 per ₹100) can later be redeemed on future IndiGo flights.',
      'Discount varies by property — up to 25% is the maximum.',
      'Check the hotel\'s own cancellation policy as it may differ from IndiGo\'s flight terms.'
    ],
    code: 'GOSTAY',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
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
    points: [
      'Only valid for bookings made on Saturdays and Sundays — doesn\'t apply on weekdays.',
      'Travel window is restricted to between June 2026 and March 2028.',
      'Covers both domestic and international routes.',
      'No code needed — discount reflects in the fare during the weekend sale window.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
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
    points: [
      'Requires a minimum of 4 passengers and a maximum of 9 on a single group booking.',
      '₹400 off applies per passenger, so total savings scale with group size.',
      'Discount applies on the base fare only, before taxes and fees.',
      'Good fit for family trips or small group travel rather than solo bookings.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
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
    points: [
      'Requires valid student ID verification through the IndiGo booking process.',
      'Zero flight change charges and 10 KG extra baggage are bundled with the 6% fare discount.',
      'No code needed once student status is verified.',
      'Extra baggage allowance can be especially useful for students travelling with luggage for semesters.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'Students Only',
    validTill: '30 Nov 2026'
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
    points: [
      'Only valid on Wednesdays — doesn\'t apply on other days of the week.',
      'Requires payment specifically via an AU Bank card.',
      'Discount scales with booking value, up to the ₹4,500 ceiling.',
      'Best suited for larger bookings to maximize the instant discount.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'AU Bank Card Holders',
    validTill: '30 Nov 2026'
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
    points: [
      'Requires payment specifically via an IDFC Bank card linked to this programme.',
      'Milestone rewards (up to 25,000 BluChips) require reaching specific annual spend thresholds.',
      'The 9 free domestic flights a year is the maximum achievable, tied to high spend levels.',
      'BluChips accumulate over time — check redemption terms on the IndiGo loyalty page.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'IDFC Bank Card Holders',
    validTill: '30 Nov 2026'
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
    points: [
      'Requires age verification for passengers 60 and above at the time of booking.',
      'Limited to domestic flights only, not international routes.',
      '15 KG check-in baggage allowance is included as standard with this fare.',
      'Discount applies to the base fare, with taxes and fees added separately.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'Senior Citizens',
    validTill: '30 Nov 2026'
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
    points: [
      'Covers specific attractions: Ubud Monkey Forest, Tanah Lot Temple, and Tegallalang Rice Terraces.',
      'Discount varies by attraction/tour — up to 50% is the maximum available.',
      'Booked through IndiGo\'s travel platform, not directly with each attraction.',
      'Check timing and availability as some attractions have specific visiting hours.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Nov 2026'
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
    points: [
      'Free cancellation window is up to 24 hours before your scheduled visit.',
      'Flat 50% off applies across eligible Singapore attraction tickets.',
      'No additional charge for cancelling within the allowed window.',
      'Check the specific attraction\'s entry requirements before booking.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Nov 2026'
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
    points: [
      'Route-specific — valid only for Kolkata to Shanghai bookings.',
      '₹15,499 is the lowest starting fare, varying by travel date and seat availability.',
      'Standard IndiGo booking terms apply — check baggage and change fee policies.',
      'International routes may have fewer weekly departures than domestic ones.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
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
    points: [
      'Discount varies by property — up to 30% is the maximum available.',
      'BluChips earned on hotel stays can be redeemed specifically on future IndiGo flights.',
      'Booked through IndiGo\'s own travel platform, not a third-party hotel site.',
      'Check the specific property\'s cancellation policy before booking.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
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
    points: [
      'Requires valid Defence/Paramilitary ID verification at booking.',
      'Extends to spouses, dependent children, and war widows of eligible personnel.',
      'Discount applies to the base fare — taxes and fees are added separately.',
      'Check documentation requirements in advance to avoid delays at booking or check-in.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'Defence Personnel',
    validTill: '30 Nov 2026'
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
    points: [
      'Covers over 3 lakh tours and activities globally — not limited to one region.',
      'Free cancellation window is up to 24 hours before the scheduled activity.',
      'BluChips earned here can be redeemed on future IndiGo flights.',
      'Discount varies by specific tour or activity, up to the 50% ceiling.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Nov 2026'
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
    points: [
      'Covers both domestic and international hotel properties worldwide.',
      'Discount varies by property — up to 35% is the maximum available.',
      'BluChips earned on stays are redeemable on future IndiGo flights.',
      'Booked through the GoIndiGo platform specifically, not third-party hotel sites.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  }
];
