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

export const AIRBNB_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'SAVE 44%',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF385C]',
    color: '#FF385C',
    type: 'PRIVATE ROOM',
    title: 'Airbnb Coupon Code – Save 44% on a Private Room in Noida',
    description: 'Book a private room in Noida for ₹1,525 instead of ₹2,025.\nEnjoy savings of 44% on your stay.\nComes with a single bedroom, one bed, and an attached private washroom.\nPerfect for solo travelers looking for an affordable stay.',
    points: [
      'Free cancellation may apply depending on the host\'s cancellation policy — check before booking.',
      'Host response time and reviews are visible on the listing page before you confirm.',
      'Price shown is per night; service fee and taxes are added at checkout.',
      'Self check-in is common for private rooms — confirm check-in instructions with the host.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-2',
    badge: 'SAVE 43%',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF385C]',
    color: '#FF385C',
    type: 'RENTAL UNIT',
    title: 'Airbnb Coupon Code – Save 43% on a Rental Unit in Mussoorie',
    description: 'Stay in a rental unit in Mussoorie for ₹10,999 instead of ₹19,423.\nSave 43% on your booking.\nAccommodates 5 guests with 2 bedrooms and 2 bathrooms.\nGreat location with all fees included.',
    points: [
      '"All fees included" means the listed price already covers cleaning and service charges — confirm on the booking summary.',
      'Suitable for group stays or families travelling together given the 2-bedroom, 5-guest capacity.',
      'Mussoorie listings fill up quickly in peak season — book early for the best rate.',
      'Check the host\'s minimum night-stay requirement before confirming dates.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-3',
    badge: 'SAVE 36%',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF385C]',
    color: '#FF385C',
    type: 'RENTAL UNIT',
    title: 'Airbnb Discount Code – Save 36% on a Rental Unit in Noida',
    description: "Book an entire rental unit in Noida for ₹4,100 instead of ₹5,470.\nEnjoy 36% OFF on your reservation.\nIdeal for 3 guests with 1 bedroom and 1 bathroom.\nWorks well whether you're travelling for work or a holiday.",
    points: [
      'Entire unit booking means no shared spaces with the host or other guests.',
      'Comfortably fits 3 guests — good for small families or a short work trip with a colleague.',
      'Noida location is well connected for both business and leisure travel.',
      'Check amenities listed (Wi-Fi, kitchen access) if travelling for work.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-4',
    badge: 'SAVE 31%',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF385C]',
    color: '#FF385C',
    type: 'RENTAL UNIT',
    title: 'Airbnb Discount Code – Save 31% on a Rental Unit in Greater Noida',
    description: 'Get an entire rental unit in Greater Noida for ₹3,650 instead of ₹6,333 for 2 nights.\nSave 31% on your stay.\nIncludes 1 bedroom and 1 bathroom.\nIdeal for couples and short getaways.',
    points: [
      'Price shown is for a 2-night stay — per-night rate works out lower for longer stays.',
      'Best suited for couples or 2 guests given the 1-bedroom layout.',
      'Greater Noida is a quieter, more budget-friendly alternative to central Noida stays.',
      'Confirm exact check-in and check-out times with the host before arrival.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-5',
    badge: 'SAVE 25%',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF385C]',
    color: '#FF385C',
    type: 'SUPERHOST STAY',
    title: 'Airbnb Promo Code – Save 25% on a Rental Unit in Mussoorie',
    description: 'Book an entire rental unit in Mussoorie for ₹1,900 instead of ₹2,525.\nSave 25% on your booking.\nAccommodates 9 guests with 3 bedrooms and 3 bathrooms.\nHosted by a Superhost with excellent guest reviews.',
    points: [
      'Superhost status means the host has a strong track record of high ratings and reliable hosting.',
      'Large 3-bedroom layout suits group trips or extended family travel.',
      'Mussoorie hill-station listings are popular — book ahead during weekends and holidays.',
      'Check the host response rate and recent reviews before confirming for added confidence.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-6',
    badge: 'SAVE 22%',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF385C]',
    color: '#FF385C',
    type: 'RENTAL UNIT',
    title: 'Airbnb Promo Code – Save 22% on a Rental Unit in Noida',
    description: 'Book an entire rental unit in Noida for ₹2,398 instead of ₹3,074.\nSave 22% instantly.\nSuitable for 2 guests with 1 bedroom and 1 bathroom.\nComfortable stay for business or leisure.',
    points: [
      'Discount applies instantly on the listed nightly rate — no separate code needed at checkout.',
      '1-bedroom layout is best for a couple or 2 travellers sharing.',
      'Good option for short business trips given the Noida location.',
      'Review the host\'s cancellation policy in case your travel plans change.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-7',
    badge: 'SAVE 15%',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0D9488]',
    color: '#0D9488',
    type: 'RENTAL UNIT',
    title: 'Airbnb Voucher – Save 15% on a Rental Unit in Gurugram',
    description: 'Stay in an entire rental unit in Gurugram for ₹1,399 instead of ₹1,628.\nSave 15% on your reservation.\nOffers one bedroom with a bed and its own bathroom.\nGreat option for couples and solo travelers.',
    points: [
      'Private attached bathroom included, no shared facilities with other guests.',
      'Gurugram location works well for business travellers near corporate hubs.',
      'Rate shown is per night — check the total before confirming for multi-night stays.',
      'Good budget pick for solo travellers not needing extra space.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-8',
    badge: 'SAVE 11%',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0D9488]',
    color: '#0D9488',
    type: 'BUDGET STAY',
    title: 'Airbnb Voucher – Save 11% on a Room in Gurugram',
    description: 'Book a room in Gurugram for ₹1,040 instead of ₹1,152.\nSave 11% on your stay.\nIncludes a private attached bathroom.\nBudget-friendly accommodation for short trips.',
    points: [
      'One of the more budget-friendly listings in the Gurugram area.',
      'Private attached bathroom, shared common areas with the host may apply — check the listing.',
      'Best suited for a single night or short 1-2 day stays.',
      'Confirm house rules (check-in time, guest limits) before booking.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-9',
    badge: 'SAVE ₹625',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0A0A0A]',
    color: '#0A0A0A',
    type: 'PRIVATE ROOM',
    title: 'Airbnb Offers – Save ₹625 on a Private Room in Noida',
    description: 'Book a private room in Noida for ₹1,900 instead of ₹2,525.\nSave ₹625 instantly.\nComes with a single bedroom, one bed, and an attached private washroom.\nA comfortable pick for solo trips and quick getaways.',
    points: [
      'Flat ₹625 saving applies to the listed nightly rate, applied automatically.',
      'Private washroom included — no shared facilities with other guests.',
      'A good fit for solo travellers or a quick weekend getaway.',
      'Check the listing photos and reviews for an accurate sense of room size.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-10',
    badge: 'SAVE ₹337',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0A0A0A]',
    color: '#0A0A0A',
    type: 'WEEKEND STAY',
    title: 'Airbnb Offers – Save ₹337 on a Room in Greater Noida',
    description: 'Stay in a room in Greater Noida for ₹2,620 instead of ₹2,957 for 2 nights.\nSave ₹337 on your booking.\nIncludes a private attached bathroom.\nComfortable stay near major attractions.',
    points: [
      'Price shown covers a 2-night booking — confirm the per-night breakdown before paying.',
      'Private attached bathroom included with the room.',
      'Convenient location near major local attractions, good for weekend trips.',
      'Check with the host about parking if travelling by car.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-11',
    badge: 'FROM ₹1,750',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'RENTAL UNIT',
    title: 'Affordable Airbnb Stay in Gurugram from ₹1,750',
    description: 'Book an entire rental unit in Gurugram starting at ₹1,750 per night.\nComfortably hosts two guests, with one bedroom and a bathroom.\nComfortable accommodation in a convenient location.\nSuits both corporate visitors and vacation travellers.',
    points: [
      '"Starting at" pricing means the final rate can vary by dates — check the calendar for exact nightly cost.',
      'Comfortably fits 2 guests, suited to couples or colleagues travelling together.',
      'Entire unit booking gives full privacy, no shared spaces.',
      'Convenient for both corporate stays and short vacation trips.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-12',
    badge: 'FROM ₹2,428',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'GUEST HOUSE',
    title: 'Budget Airbnb Room in Noida from ₹2,428',
    description: 'Stay in a private room in a guest house in Noida from ₹2,428 per night.\nHost is currently offering a special discount.\nIncludes 1 bedroom and 1 private bathroom.\nIdeal for affordable overnight stays.',
    points: [
      'Guest house setting may mean shared common areas — check the listing for details.',
      'Host-offered discount is time-limited and may change, so confirm the current rate before booking.',
      'Private bathroom included with the room.',
      'Best suited for short, affordable overnight stays rather than extended trips.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-13',
    badge: 'FROM ₹6,860',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'APARTMENT',
    title: 'Spacious Airbnb Apartment in Noida from ₹6,860',
    description: 'Book an entire apartment in Noida for ₹6,860 for 2 nights.\nAccommodates 4 guests with 2 bedrooms and 2 bathrooms.\nSpacious accommodation for families or groups.\nEnjoy a comfortable stay in Noida.',
    points: [
      'Price shown covers a 2-night stay for the full apartment, not per person.',
      '2-bedroom, 2-bathroom layout works well for families or small groups travelling together.',
      'Entire apartment booking means no shared spaces with the host.',
      'Check amenities (kitchen, washing machine) if staying longer than a couple of nights.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  }
];
