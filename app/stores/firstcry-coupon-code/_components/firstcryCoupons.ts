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

export const FIRSTCRY_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO 80% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF2D55]',
    color: '#FF2D55',
    type: 'NEW USERS',
    title: 'New Users: Up to 80% Off + Extra 5% Off Sitewide',
    description: 'Get up to 80% off across all categories on your first order, plus an extra 5% off on top.',
    points: [
      'Only valid for first-time FirstCry customers on a new account.',
      'Extra 5% off stacks on top of the category-level discount, applied sitewide.',
      'Discount percentage varies by product — up to 80% is the maximum, not every item.',
      'One-time use per new account.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-2',
    badge: 'UP TO 70% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'BEAUTY PRODUCTS',
    title: 'Sizzling End of Summer: Up to 70% Off on Selected Beauty Products',
    description: 'Up to 70% off on beauty essentials including serums, body care, and more.',
    points: [
      'Limited to selected beauty products, not the entire beauty category.',
      'Discount varies by product — up to 70% is the maximum available.',
      'Covers serums, body care, and other beauty essentials.',
      'Seasonal/limited-time sale — pricing may revert after the sale window.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-3',
    badge: 'FLAT 65% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF9500]',
    color: '#FF9500',
    type: 'FASHION',
    title: 'Super Saver Deal: Flat 65% Off on Fashion Collections',
    description: 'Flat 65% off on the latest fashion collections listed on the offer page — applies to existing users.',
    points: [
      'Restricted to existing FirstCry users, not new customers.',
      'Covers the latest fashion collections tagged on the dedicated offer page.',
      'Flat 65% off applies automatically, no separate code required.',
      'Check the offer page directly since collections may rotate periodically.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-4',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'BABY CLOTHING',
    title: 'Get Up to 60% Off on Baby & Kids Clothing',
    description: 'Shop rompers, onesies, dresses, and everyday wear for infants and kids at up to 60% OFF.',
    points: [
      'Covers rompers, onesies, dresses, and general everyday wear.',
      'Discount varies by product and age range — up to 60% is the maximum.',
      'Available across infant and kids size ranges.',
      'Check size charts before ordering since infant sizing varies by brand.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-5',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#4A3AFF]',
    color: '#0D9488',
    type: 'DIAPERS',
    title: 'Baby Diaper Range: Up to 60% Off + Extra 7% Off (Club) | Extra 5% Off (All Users)',
    description: 'Up to 60% off on baby diapers with an additional percentage off depending on membership status.',
    points: [
      'Club members get an extra 7% off; non-members get an extra 5% off.',
      'Discount varies by diaper brand and size — up to 60% is the ceiling.',
      'Check pack size pricing as larger packs often offer better per-unit value.',
      'Club membership status is checked automatically at checkout.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-6',
    badge: 'FLAT 60% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#AF52DE]',
    color: '#AF52DE',
    type: "KIDS' FASHION",
    title: "Blockbuster Deals: Flat 55–60% Off on Select Fashion Range",
    description: "Flat 55% to 60% off on blockbuster kids' fashion collections — ethnic, casual wear, and more.",
    points: [
      'Discount range is 55-60%, varying by specific product within the collection.',
      'Covers ethnic wear, casual wear, and other kids\' fashion categories.',
      'Limited to the "Blockbuster Deals" tagged range, not the full kids\' fashion catalogue.',
      'No code typically needed — discount reflected in the listed price.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-7',
    badge: 'FLAT 58% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#32ADE6]',
    color: '#32ADE6',
    type: 'FASHION',
    title: 'Flat 58% Off on Selected Fashion Range',
    description: 'Flat 58% off on products listed on the offer page — one of the steeper fashion discounts on the platform right now.',
    points: [
      'Limited to products specifically listed on the dedicated offer page.',
      'Flat 58% off applies automatically — no separate code needed.',
      'One of the steeper fashion discounts currently available platform-wide.',
      'Selection may be limited compared to the full fashion catalogue.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-8',
    badge: 'FLAT 52% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'KIDS FASHION',
    title: 'BabyHug Collections: Flat 52% Off (Club) | Flat 47% Off (All Users)',
    description: "Flat 52% off for Club members and flat 47% off for all users on kids' fashion collections.",
    points: [
      'Club members get 52% off; non-members get 47% off on the same BabyHug collection.',
      'Limited to the BabyHug in-house brand, not other brands sold on FirstCry.',
      'Covers kids\' fashion collections specifically.',
      'Club membership status is detected automatically at checkout.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-9',
    badge: 'FLAT 50% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF2D55]',
    color: '#FF2D55',
    type: 'FASHION',
    title: 'Mega Deal: Flat 50% Off on Select Fashion Range',
    description: 'Flat 50% off on the entire fashion range — one of the broadest discounts currently running on the platform.',
    points: [
      'Despite "entire fashion range" wording, this is limited to the select "Mega Deal" tagged range — check the offer page.',
      'Flat 50% off applies automatically, no code required.',
      'One of the broadest discounts currently running, but still time-limited.',
      'Selection may rotate, so check back for updated items.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-10',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5856D6]',
    color: '#5856D6',
    type: 'TOYS & GAMES',
    title: 'Get Up to 50% Off on Toys & Learning Games',
    description: 'Explore soft toys, educational games, and outdoor play sets for all age groups at up to 50% OFF.',
    points: [
      'Covers soft toys, educational games, and outdoor play sets.',
      'Available across all age groups, from infants to older kids.',
      'Discount varies by product — up to 50% is the maximum.',
      'Check age recommendations on each item before purchasing.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-11',
    badge: 'FLAT 45% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FFCC00]',
    color: '#FFCC00',
    type: 'BABY CARE',
    title: 'Flat 45% Off on Mothersparsh Baby Range',
    description: 'Flat 45% off on the Mothersparsh baby care range.',
    points: [
      'Limited to the Mothersparsh brand specifically, not all baby care products.',
      'Flat 45% off applies automatically, no code typically needed.',
      'Covers the full Mothersparsh baby care range on FirstCry.',
      'Check stock availability as brand-specific sales can sell out certain items quickly.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-12',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'BABY GEAR',
    title: 'Get Up to 40% Off on Strollers, Car Seats & Baby Gear',
    description: 'Shop strollers, car seats, cribs, and other essential baby gear at up to 40% OFF.',
    points: [
      'Covers strollers, car seats, cribs, and other essential baby gear.',
      'Discount varies by brand and product — up to 40% is the maximum.',
      'Car seats especially — check safety certification before purchasing.',
      'Larger items may have separate shipping or assembly considerations.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-13',
    badge: 'FLAT 45% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'FASHION',
    title: 'Fall Fashion Sale: Flat 45% Off (Club) | Flat 40% Off (All Users) on Select Brands',
    description: 'Flat 45% off for Club members and flat 40% off for all users on select brand products.',
    points: [
      'Club members get 45% off; non-members get 40% off on the same qualifying products.',
      'Limited to select brands tagged for this sale, not the full fashion catalogue.',
      'Seasonal fall collection — selection may change once the season ends.',
      'Club membership status is applied automatically at checkout.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-14',
    badge: 'FLAT 40% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#AF52DE]',
    color: '#AF52DE',
    type: 'WIPES',
    title: 'Marvel Collections: Flat 40% Off on BabyHug Wipes Range',
    description: 'Flat 40% off on the BabyHug Wipes range.',
    points: [
      'Limited to the BabyHug Wipes range specifically, not other wipes brands.',
      'Flat 40% off applies automatically at checkout, no code typically needed.',
      'Good opportunity to stock up on a recurring household essential.',
      'Check pack size pricing for the best per-unit value.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-15',
    badge: 'FLAT 40% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#007AFF]',
    color: '#007AFF',
    type: 'FASHION',
    title: 'Ganesh Chaturthi Special: Flat 40% Off on Fashion Range',
    description: 'Flat 40% off on the entire fashion range as part of the Ganesh Chaturthi festive offer.',
    points: [
      'Festival-tied offer — availability is linked to the Ganesh Chaturthi sale window.',
      'Flat 40% off applies automatically, no code typically needed.',
      'Covers the fashion range broadly, good for festive outfit shopping.',
      'Check back for similar festival-specific deals around other occasions.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-16',
    badge: 'FLAT 38% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#34C759]',
    color: '#34C759',
    type: 'SITEWIDE',
    title: 'Flat 38% Off Sitewide + Club Membership',
    description: 'Flat 38% off across the entire FirstCry catalogue, including on Club Membership purchase.',
    points: [
      'Applies sitewide across the full catalogue, a rare broad discount.',
      'Also applies to the Club Membership purchase itself, reducing the sign-up cost.',
      'No code typically needed — discount reflected at checkout.',
      'Good timing to join Club if you were already considering membership.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-17',
    badge: 'FLAT 38% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5856D6]',
    color: '#5856D6',
    type: 'BATH & SKINCARE',
    title: 'Club Members: Flat 38% Off | All Users: Flat 33% Off on Bath & Skincare',
    description: 'Flat 38% off for Club members and flat 33% off for all users on the bath and skincare range.',
    points: [
      'Club members get 38% off; non-members get 33% off on the same bath and skincare range.',
      'Covers the bath and skincare category broadly across multiple brands.',
      'No code typically needed — discount applied automatically at checkout.',
      'Club membership status is detected automatically if you\'re logged in.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-18',
    badge: 'FLAT 37% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF9500]',
    color: '#FF9500',
    type: 'KIDS FASHION',
    title: "Wow Deal: Flat 37% Off on Selected Kids' Fashion",
    description: "Flat 37% off on selected kids' fashion products — limited-time offer, selected products only.",
    points: [
      'Limited to selected products tagged under the "Wow Deal" range, not all kids\' fashion.',
      'Limited-time offer — check back as the selection and deal may expire.',
      'Flat 37% off applies automatically, no code typically needed.',
      'Stock on popular sizes may run out faster given the limited-time nature.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-19',
    badge: 'FLAT 35% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF2D55]',
    color: '#FF2D55',
    type: 'SITEWIDE',
    title: 'Flat 35% Off Sitewide (Min. Cart ₹3,000 | Stashfin Pay)',
    description: 'Flat 35% off across all sitewide products when paying via Stashfin Pay.',
    points: [
      'Minimum cart value of ₹3,000 is required.',
      'Requires payment specifically via Stashfin Pay, not other payment methods.',
      'Applies sitewide, a broad discount across most product categories.',
      'Check Stashfin Pay setup requirements before relying on this at checkout.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-20',
    badge: 'FLAT 25% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'DIAPERS & FEEDING',
    title: 'Flat 25% Off on Diapers, Wipes & Feeding Essentials',
    description: 'Save on top diaper brands, baby wipes, bottles, and feeding accessories with this flat discount.',
    points: [
      'Covers top diaper brands, baby wipes, bottles, and feeding accessories.',
      'Flat 25% off applies across this category broadly.',
      'Good for stocking up on recurring baby essentials in bulk.',
      'Check expiry and batch dates on feeding accessories upon delivery.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-21',
    badge: 'FLAT 15% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#A2845E]',
    color: '#A2845E',
    type: 'MEMBERS EXCLUSIVE',
    title: 'Club Members: Flat 15% Off Sitewide',
    description: 'Flat 15% off on a select range for Club members — applies on the on-site discount or 15%, whichever is higher.',
    points: [
      'Requires active Club membership to be eligible.',
      'The system compares the existing on-site discount vs. 15% and applies whichever is higher.',
      'Covers a select range rather than the full catalogue, despite the "sitewide" naming.',
      'Discount applies automatically once logged in as a Club member.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'Club Members',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-22',
    badge: 'EXTRA 10% OFF',
    badgeType: 'FREE',
    badgeColor: 'bg-[#32ADE6]',
    color: '#32ADE6',
    type: 'BABY SKINCARE',
    title: 'Extra 10% Off on BabyHug Skincare (Min. Cart ₹5,000)',
    description: 'Extra 10% off on the BabyHug skincare range for orders above ₹5,000.',
    points: [
      'Minimum cart value of ₹5,000 is required, higher than most other FirstCry deals.',
      'Limited to the BabyHug skincare range specifically.',
      'Extra 10% stacks on top of any existing discount already applied.',
      'Restricted to existing users, not first-time customers.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Nov 2026'
  }
];
