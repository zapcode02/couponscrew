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
  bullets?: string[];
}

export const MYNTRA_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO 90% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF3F6C]',
    color: '#FF3F6C',
    type: 'SITEWIDE',
    title: 'Save Up to 90% Off Sitewide + Extra ₹300 Off | New Users',
    description: 'New users get up to 90% off across fashion, footwear, and accessories on the Myntra app — plus ₹300 extra off on orders above ₹1,999.',
    code: 'MYNTRA300',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Valid for new users on the Myntra app only',
      'Minimum cart value ₹1,999 for extra ₹300 off',
      'Extra 10% off via Canara, Federal, Kotak, BOBcard & IDFC First Bank credit cards',
      'MobiKwik UPI users get up to ₹250 additional cashback'
    ]
  },
  {
    id: 'coupon-2',
    badge: 'FLAT 25% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'FIRST ORDER',
    title: 'Flat 25% Off Your First Myntra Order + 7.5% Bank Cashback',
    description: 'New users save a flat 25% on their first purchase, with an additional 7.5% cashback for Flipkart Axis Bank and SBI credit card holders.',
    code: 'MYNTRASAVE',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Jun 2026',
    bullets: [
      'New users only | Minimum cart ₹300',
      'Maximum discount capped at ₹200',
      'Extra 7.5% cashback on Flipkart Axis Bank & SBI credit cards',
      'Valid on selected products only'
    ]
  },
  {
    id: 'coupon-3',
    badge: 'UP TO ₹800 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#2563EB]',
    color: '#2563EB',
    type: 'ALL USERS',
    title: 'Get ₹400 Off on ₹2,499 or ₹800 Off on ₹5,000+ | All Users',
    description: 'One code that scales with your cart — the more you spend, the more you save. Valid for both new and existing users across fashion and lifestyle categories.',
    code: 'STACKUP',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      '₹400 off on orders above ₹2,499',
      '₹800 off on orders above ₹5,000',
      'Applicable to men\'s, women\'s & kids\' lifestyle categories',
      'Valid for all users'
    ]
  },
  {
    id: 'coupon-4',
    badge: 'UP TO 80% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF3F6C]',
    color: '#FF3F6C',
    type: 'FWD FASHION',
    title: 'Up to 80% Off on FWD Fashion + Extra ₹200 Off | New Users',
    description: 'New users shopping Myntra\'s FWD casualwear range get up to 80% off, plus ₹200 extra off on orders above ₹399.',
    code: 'FWDNEW200',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Jun 2026',
    bullets: [
      'New users only | Minimum cart ₹399 for extra ₹200 off',
      'Covers t-shirts, tops, dresses, shorts, skirts & flip-flops',
      'Apply Myntra coupon code at checkout',
      'Valid on selected FWD products'
    ]
  },
  {
    id: 'coupon-5',
    badge: 'EXTRA 15% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#0D9488]',
    color: '#0D9488',
    type: 'FASHION SALE',
    title: 'Extra 15% Off During the Fashion Sale | Min ₹300',
    description: 'Stack an extra 15% off on top of ongoing sale discounts — up to 70% already reduced. Apply the code on orders above ₹300 for the additional saving.',
    code: 'FWDU15',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Existing users only | Minimum cart ₹300',
      'Maximum extra discount capped at ₹150',
      'Applies to selected products and styles only',
      'Enter Myntra promo code at checkout'
    ]
  },
  {
    id: 'coupon-6',
    badge: 'EXTRA ₹500 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'BEAUTY',
    title: 'Extra ₹500 Off on Myntra Beauty | Orders Above ₹2,500',
    description: 'Save ₹500 extra on your Myntra beauty order — skincare, makeup, haircare, and fragrances all eligible when your cart crosses ₹2,500.',
    code: 'EXTRA500',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'All users | Minimum cart ₹2,500',
      'Covers skincare, makeup, haircare & fragrance categories',
      'Apply Myntra discount code at checkout',
      'Valid on selected beauty products'
    ]
  },
  {
    id: 'coupon-7',
    badge: 'FLAT 10% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'NON-RETURNABLE',
    title: 'Flat 10% Off on Non-Returnable Products | All Users',
    description: 'Get 10% off on non-returnable Myntra products — typically priced lower than standard listings, making this code useful for everyday basics.',
    code: 'NORETURN1',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'All users | Minimum cart ₹199',
      'Valid on non-returnable product listings only',
      'Apply Myntra coupon code at checkout',
      'Covers selected categories as listed on product pages'
    ]
  },
  {
    id: 'coupon-8',
    badge: 'EXTRA ₹50 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF3F6C]',
    color: '#FF3F6C',
    type: 'SPECIAL OFFER',
    title: 'Extra ₹50 Off + Additional 10% for Kotak & BOBcard Users',
    description: 'Existing users save ₹50 on orders above ₹400 — Kotak Bank and BOBcard credit card holders get an additional 10% instant discount on top.',
    code: 'EXTRA50',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Existing users | Minimum cart ₹400 for ₹50 off',
      'Extra 10% instant discount on Kotak & BOBcard credit cards',
      'Apply Myntra voucher code at checkout first, then select bank card',
      'Covers selected products'
    ]
  },
  {
    id: 'coupon-9',
    badge: 'UP TO 70% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2563EB]',
    color: '#2563EB',
    type: 'SITEWIDE',
    title: 'Up to 70% Off + Extra 10% on Orders Above ₹300',
    description: 'Shop Myntra\'s ongoing sale and apply this code for an additional 10% off on top of existing discounts — minimum cart ₹300.',
    code: 'FWDWE10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'All users | Minimum cart ₹300',
      'Extra 10% applied via Myntra promo code at checkout',
      'Valid on selected styles across categories',
      'Discount varies by product'
    ]
  },
  {
    id: 'coupon-10',
    badge: 'UP TO 80% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0D9488]',
    color: '#0D9488',
    type: 'FOOTWEAR',
    title: 'Up to 80% Off on Myntra Shoes + Extra 10% via Code',
    description: 'Shop Myntra\'s footwear sale — casual shoes, sports shoes, sandals, heels, and boots at up to 70% off — and apply the code for an additional 10% saving.',
    code: 'FOOTWEAR10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'All users | Extra 10% applied via code at checkout',
      'Covers casual, formal, sports, sandals, boots & heels',
      'Brands include Nike, Puma & Adidas',
      'Valid on selected footwear styles'
    ]
  },
  {
    id: 'coupon-11',
    badge: 'FLAT 30% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF3F6C]',
    color: '#FF3F6C',
    type: 'FIRST ORDER',
    title: 'Flat 30% Off Your First Myntra Purchase | Min ₹300',
    description: 'First-time Myntra shoppers get a straightforward 30% off on their opening order — low minimum cart, no category restriction.',
    code: 'MYNTRAEXCLUSIVE',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Jun 2026',
    bullets: [
      'New users only | First purchase only',
      'Minimum cart ₹300',
      'Apply Myntra coupon code at checkout',
      'Valid on selected products'
    ]
  },
  {
    id: 'coupon-12',
    badge: 'EXTRA 10% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'BUY 2 ITEMS',
    title: 'Buy Any 2 Items and Get an Extra 10% Off',
    description: 'Add any 2 qualifying items to your Myntra cart and apply this code at checkout for 10% extra off — no minimum cart value required.',
    code: 'NOREASON10',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Existing users | Minimum 2 items in cart',
      'Valid on selected styles',
      'Apply Myntra discount code at checkout',
      'Discount varies by product'
    ]
  },
  {
    id: 'coupon-13',
    badge: 'UP TO 70% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'SPECIAL SALE',
    title: 'Up to 70% Off + Extra 20% on Orders Above ₹699',
    description: 'Existing users get up to 70% off during Myntra\'s sale, plus 20% extra off on orders above ₹699 — maximum extra saving of ₹250.',
    code: 'MISSEDYOU',
    verified: 'Verified',
    userType: 'Selected Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Selected user accounts only | Minimum cart ₹699',
      'Maximum extra discount ₹250',
      'Brands include Roadster, Anouk, DressBerry & more',
      'Apply Myntra promo code at checkout'
    ]
  },
  {
    id: 'coupon-14',
    badge: 'UP TO 70% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2563EB]',
    color: '#2563EB',
    type: 'MYNTRA INSIDER',
    title: 'Myntra Insider Exclusive — Up to 70% Off + Extra 10% Off',
    description: 'Insider members get an extra 10% off on sale prices when cart crosses ₹1,199 — maximum saving of ₹300. One of the better loyalty-tier deals currently active.',
    code: 'INSIDERMORE10',
    verified: 'Verified',
    userType: 'Insider Members',
    validTill: '30 Jun 2026',
    bullets: [
      'Myntra Insider members only',
      'Minimum cart ₹1,199 | Maximum extra discount ₹300',
      'Apply Myntra coupon code at checkout',
      'Valid on selected products'
    ]
  },
  {
    id: 'coupon-15',
    badge: 'UP TO 70% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF3F6C]',
    color: '#FF3F6C',
    type: 'SITEWIDE',
    title: 'Up to 70% Off Sitewide + Extra 10% Off | Existing Users',
    description: 'Existing users get up to 70% off across Myntra\'s current sale, plus 10% more when you apply this code on orders above ₹300.',
    code: 'FWD10',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Existing users | Minimum cart ₹300',
      'Extra 10% applied via Myntra promo code at checkout',
      'Valid on selected products and styles',
      'Discount varies by category'
    ]
  },
  {
    id: 'coupon-16',
    badge: 'FLAT 7.5% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0D9488]',
    color: '#0D9488',
    type: 'BANK OFFER',
    title: 'Flat 7.5% Cashback on Every Myntra Order | Axis Bank & SBI Cards',
    description: 'Flipkart Axis Bank and SBI credit card holders earn 7.5% assured cashback on all Myntra purchases — minimum spend ₹100, no coupon code needed.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Flipkart Axis Bank & SBI credit cards only',
      'Minimum spend ₹100 | No coupon code required',
      'Applies on every purchase, not just during sale events',
      'Cashback credited post-delivery'
    ]
  },
  {
    id: 'coupon-17',
    badge: 'FLAT 10% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'KOTAK BANK',
    title: 'Flat 10% Instant Discount for Kotak Bank Card Holders',
    description: 'Kotak Bank credit and debit card holders get 10% off at checkout — minimum cart ₹3,500, maximum discount ₹1,000. No coupon code needed.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Kotak Bank credit & debit cards only',
      'Minimum cart ₹3,500 | Maximum discount ₹1,000',
      'No Myntra coupon code required',
      'May be stackable with select promo codes — check product page'
    ]
  },
  {
    id: 'coupon-18',
    badge: 'UP TO ₹500',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'CRED PAY',
    title: 'Up to ₹500 Cashback via Cred Pay UPI | Orders Above ₹999',
    description: 'Pay with Cred Pay UPI on Myntra and earn up to ₹500 cashback on orders of ₹999 and above — no coupon code required.',
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Cred Pay UPI users only | Minimum cart ₹999',
      'No Myntra coupon code required',
      'Cashback amount may vary',
      'Valid for existing users'
    ]
  },
  {
    id: 'coupon-19',
    badge: 'FLAT 5% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#2563EB]',
    color: '#2563EB',
    type: 'PAYTM POSTPAID',
    title: 'Flat 5% Cashback via Paytm Postpaid | Min ₹1,500',
    description: 'Pay using Paytm Postpaid on Myntra for a flat 5% cashback — minimum cart ₹1,500, no coupon code needed.',
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Paytm Postpaid users only | Minimum cart ₹1,500',
      'No Myntra promo code required',
      'Cashback credited to Paytm account post-delivery',
      'Valid for existing users'
    ]
  },
  {
    id: 'coupon-20',
    badge: 'FLAT 20% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF3F6C]',
    color: '#FF3F6C',
    type: 'HOME LIVING',
    title: 'Flat 20% Off on 3+ Home Living Items + 10% Bank Offer',
    description: 'Add 3 or more Home Living products and get 20% off via code — Kotak and BOBcard holders save an extra 10% on top with a ₹3,500 minimum for the bank offer.',
    code: 'BASKETBONUS',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Existing users | Minimum 3 items required',
      'Extra 10% instant discount on Kotak & BOBcard credit cards',
      'Minimum cart ₹3,500 for bank discount to apply',
      'Apply Myntra discount code at checkout'
    ]
  },
  {
    id: 'coupon-21',
    badge: '10% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#0D9488]',
    color: '#0D9488',
    type: 'MYNTRA INSIDER',
    title: '10% Off for Myntra Insider Members | Min ₹1,199',
    description: 'Insider members get 10% off on orders above ₹1,199 — maximum saving of ₹300. Enter the code at checkout to activate the member-tier discount.',
    code: 'INSIDERMORE10',
    verified: 'Verified',
    userType: 'Insider Members',
    validTill: '30 Jun 2026',
    bullets: [
      'Myntra Insider members only',
      'Minimum cart ₹1,199 | Maximum discount ₹300',
      'Apply Myntra coupon code at checkout',
      'Valid on selected products'
    ]
  },
  {
    id: 'coupon-22',
    badge: 'FLAT 15% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'ETHNIC WEAR',
    title: 'Flat 15% Off on Ethnic Wear Collections | Up To ₹300',
    description: 'Save 15% on Myntra kurtis, sarees, kurta sets, and ethnic wear — maximum saving of ₹300 for selected user accounts.',
    code: 'TRYETHNIC15',
    verified: 'Verified',
    userType: 'Selected Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Selected user accounts only | Ethnic wear category',
      'Covers Myntra kurtis, sarees & kurta sets',
      'Maximum discount ₹300',
      'Apply Myntra promo code at checkout'
    ]
  },
  {
    id: 'coupon-23',
    badge: 'UP TO 70% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF3F6C]',
    color: '#FF3F6C',
    type: 'WOMEN\'S ETHNIC',
    title: 'Up to 70% Off on Women\'s Ethnic Wear + Extra 15% Off',
    description: 'Women\'s ethnic collections — kurtis, sarees, kurta sets, and fusion wear — are up to 70% off. Apply the code on orders above ₹999 for an additional 15% saving.',
    code: 'WOMENETHNICNEW',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'All users | Minimum cart ₹999',
      'Covers Myntra kurtis, Myntra saree & fusion wear',
      'Brands: Anouk, Biba, Vishudh, HERE&NOW & more',
      'Apply Myntra discount code at checkout'
    ]
  },
  {
    id: 'coupon-24',
    badge: 'FLAT 15% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'BEAUTY',
    title: 'Flat 15% Off on Myntra Beauty Products | Min ₹999',
    description: 'Get 15% off on perfumes, lipsticks, concealers, face washes, and cleansers on Myntra beauty — minimum cart ₹999.',
    code: 'TRYNEWBEAUTY',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Existing users | Minimum cart ₹999',
      'Covers perfumes, lipsticks, concealers & face washes',
      'Apply Myntra coupon code at checkout',
      'Valid on selected beauty products'
    ]
  },
  {
    id: 'coupon-25',
    badge: 'FLAT 10% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#2563EB]',
    color: '#2563EB',
    type: 'CROCS',
    title: 'Flat 10% Off on All Crocs Products | No Minimum Order',
    description: 'Get 10% off on every Crocs product on Myntra with no minimum cart value — one of the rare codes with no minimum order condition.',
    code: 'CROCS10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'All users | No minimum cart value required',
      'Crocs brand products only',
      'Apply Myntra promo code at checkout',
      'Valid on selected Crocs listings'
    ]
  },
  {
    id: 'coupon-26',
    badge: 'FLAT 15% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0D9488]',
    color: '#0D9488',
    type: 'SNITCH',
    title: 'Flat 15% Off on Snitch Collections | Min ₹1,999',
    description: 'Save 15% — up to ₹150 — on Snitch men\'s streetwear and casualwear on orders above ₹1,999. Valid for selected user accounts.',
    code: 'TRYSNITCH',
    verified: 'Verified',
    userType: 'Selected Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Selected user accounts only',
      'Minimum cart ₹1,999 | Maximum discount ₹150',
      'Snitch brand products only',
      'Apply Myntra discount code at checkout'
    ]
  },
  {
    id: 'coupon-27',
    badge: 'FLAT 15% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF3F6C]',
    color: '#FF3F6C',
    type: 'MOTHERCARE',
    title: 'Flat 15% Off on Mothercare Products | Min ₹1,499',
    description: 'Get 15% off on Mothercare baby clothing, nursery essentials, and maternity wear — minimum purchase of ₹1,499.',
    code: 'MTC15',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'All users | Minimum cart ₹1,499',
      'Mothercare brand products only',
      'Apply Myntra voucher code at checkout',
      'Valid on selected Mothercare listings'
    ]
  },
  {
    id: 'coupon-28',
    badge: 'UP TO 70% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'JACK & JONES',
    title: 'Up to 70% Off on Jack & Jones + Extra 15% via Code',
    description: 'Jack & Jones jeans, shirts, and casualwear are already up to 70% off — apply this code on orders above ₹999 to unlock an additional 15% saving.',
    code: 'TRYJJ15',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'All users | Minimum cart ₹999',
      'Jack & Jones brand products only',
      'Extra 15% applied via Myntra coupon code at checkout',
      'Discount varies by product'
    ]
  },
  {
    id: 'coupon-29',
    badge: 'UP TO 90% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2563EB]',
    color: '#2563EB',
    type: 'MEN\'S CLOTHING',
    title: 'Men\'s Clothing Sale — Up to 90% Off | Prices from ₹89',
    description: 'Shop men\'s topwear, bottomwear, footwear, and accessories at up to 90% off — no coupon code needed, discounts pre-applied on listed prices.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'All users | No Myntra coupon code required',
      'Covers topwear, bottomwear, footwear & accessories',
      'Prices start from ₹89',
      'Discount varies by product and brand'
    ]
  },
  {
    id: 'coupon-30',
    badge: 'UP TO 90% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF3F6C]',
    color: '#FF3F6C',
    type: 'WOMEN\'S FASHION',
    title: 'Women\'s Fashion Sale — Up to 90% Off | All Categories',
    description: 'Myntra dresses for women, kurtas, co-ord sets, western wear, ethnic wear, and activewear — all at up to 90% off with no coupon code required.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'All users | No Myntra promo code required',
      'Covers Myntra dresses, ethnic wear, western wear & activewear',
      'Discounts pre-applied on listed prices',
      'Discount varies by category and brand'
    ]
  },
  {
    id: 'coupon-31',
    badge: 'UP TO 70% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'KIDS\' FASHION',
    title: 'Kids\' Fashion Sale — Up to 70% Off | All Users',
    description: 'Children\'s clothing, footwear, and accessories are up to 70% off — covering boys and girls across all age groups. No coupon code needed.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'All users | No Myntra discount code required',
      'Brands: U.S. Polo Assn. Kids, BAESD, StyleCast & more',
      'Discounts pre-applied on listed prices',
      'Filter by age group and gender on the landing page'
    ]
  },
  {
    id: 'coupon-32',
    badge: 'UP TO 80% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0D9488]',
    color: '#0D9488',
    type: 'CLEARANCE',
    title: 'Up to 80% Off on Clearance Sale + Extra ₹300 | New Users | App Only',
    description: 'New users get up to 80% off on Myntra\'s clearance sale products, plus ₹300 extra off on orders above ₹1,999 — available on the Myntra app only.',
    code: 'MYNTRA300',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Jun 2026',
    bullets: [
      'New users only | Myntra app only',
      'Minimum cart ₹1,999 for extra ₹300 off',
      'Applies across fashion, footwear & accessories',
      'Apply Myntra coupon code at checkout'
    ]
  },
  {
    id: 'coupon-33',
    badge: 'UP TO 70% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'BUY 2 ITEMS',
    title: 'Extra 10% Off on 2 Items + SBI Card Instant Discount',
    description: 'Buy 2 or more items and apply this code for 10% extra off — SBI credit card users get an additional 10% instant discount on top.',
    code: 'NOREASON10',
    verified: 'Verified',
    userType: 'Selected Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Selected user accounts only | Minimum 2 items',
      'Extra 10% via Myntra promo code at checkout',
      'Additional 10% instant discount on SBI credit card & EMI',
      'Valid on selected products'
    ]
  },
  {
    id: 'coupon-34',
    badge: 'FLAT 5% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#2563EB]',
    color: '#2563EB',
    type: 'EXISTING USERS',
    title: 'Flat 5% Off for Existing Users | Min ₹999',
    description: 'A straightforward 5% off on orders above ₹999 — a reliable base saving when no higher-value code applies to your cart.',
    code: 'TRYNEWPURVAJA',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'All users | Minimum cart ₹999',
      'Apply Myntra voucher code at checkout',
      'Valid on selected products',
      'Discount applied directly at checkout'
    ]
  },
  {
    id: 'coupon-35',
    badge: '30%–60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF3F6C]',
    color: '#FF3F6C',
    type: 'FLASH SALE',
    title: 'Flash Sale — 30%–60% Off + ₹300 Extra | New Users | App Only',
    description: 'New users on the Myntra app save 30%–60% during this flash sale window — plus ₹300 extra off on orders above ₹1,999. Brands include Puma, Mango, Jack & Jones, and L\'Oréal Paris.',
    code: 'MYNTRA300',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Jun 2026',
    bullets: [
      'New users only | Myntra app only',
      'Minimum cart ₹1,999 for extra ₹300 off',
      'Brands: Puma, Mango, Jack & Jones, L\'Oréal Paris & more',
      'Apply Myntra coupon code at checkout'
    ]
  },
  {
    id: 'coupon-36',
    badge: 'UP TO 80% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'BEAUTY',
    title: 'Up to 80% Off on Myntra Beauty + Extra ₹300 | New Users | App Only',
    description: 'New users get up to 80% off on beauty products — lipsticks, perfumes, face washes, and more — plus ₹300 extra off on orders above ₹1,999 via the Myntra app.',
    code: 'MYNTRA300',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Jun 2026',
    bullets: [
      'New users only | Myntra app only',
      'Minimum cart ₹1,999 | Free shipping on first order',
      'Covers lipsticks, perfumes, face washes & cleansers',
      'Apply Myntra coupon code at checkout'
    ]
  },
  {
    id: 'coupon-37',
    badge: 'UP TO 80% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0D9488]',
    color: '#0D9488',
    type: 'MEN\'S T-SHIRTS',
    title: 'Up to 80% Off on Myntra T-Shirts for Men + Extra ₹300 | New Users',
    description: 'New users save up to 80% on men\'s t-shirts on Myntra, with ₹300 extra off on orders above ₹1,999 — Myntra app exclusive.',
    code: 'MYNTRA300',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Jun 2026',
    bullets: [
      'New users only | Myntra app only',
      'Minimum cart ₹1,999 for extra ₹300 off',
      'Men\'s t-shirt category only',
      'Apply Myntra voucher code at checkout'
    ]
  },
  {
    id: 'coupon-38',
    badge: 'UP TO 70% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'KURTA SETS',
    title: 'Myntra Kurtis & Kurta Sets — Up to 70% Off | No Code Needed',
    description: 'Myntra kurtis and kurta sets from Vishudh, Anouk, Biba, Sangria, and HERE&NOW are up to 70% off — no coupon code required, discounts pre-applied.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'All users | No Myntra promo code required',
      'Covers Myntra kurtis, kurta sets & ethnic wear',
      'Brands: Vishudh, Anouk, Biba, Sangria & more',
      'Discount varies by brand and style'
    ]
  },
  {
    id: 'coupon-39',
    badge: 'UP TO 80% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF3F6C]',
    color: '#FF3F6C',
    type: 'FOOTWEAR',
    title: 'Up to 80% Off on Myntra Shoes | Reebok, FILA & More',
    description: 'Men\'s and women\'s Myntra shoes — casual, sports, formal, and sandals — are up to 80% off with no coupon code needed.',
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Existing users | No Myntra discount code required',
      'Covers casual, sports, formal shoes, sandals & flip-flops',
      'Brands include Reebok, FILA & Duke',
      'Discount varies by brand and product'
    ]
  },
  {
    id: 'coupon-40',
    badge: '50%–80% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2563EB]',
    color: '#2563EB',
    type: 'ETHNIC WEAR',
    title: '50%–80% Off on Ethnic Wear + Extra ₹300 | New Users | App Only',
    description: 'Shop Myntra saree, kurtis, and ethnic wear at 50%–80% off — new users get ₹300 extra off on orders above ₹1,999 via the Myntra app.',
    code: 'MYNTRA300',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Jun 2026',
    bullets: [
      'New users only | Myntra app only',
      'Minimum cart ₹1,999 for extra ₹300 off',
      'Covers Myntra saree, kurtis & fusion wear',
      'Apply Myntra coupon code at checkout'
    ]
  },
  {
    id: 'coupon-41',
    badge: 'UP TO 80% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'TOP BRANDS',
    title: 'Up to 80% Off on Women\'s Top Brands + Extra ₹300 | New Users',
    description: 'Shop Only, Biba, Levi\'s, Forever 21, and Allen Solly on the Myntra app at up to 80% off — new users get ₹300 extra off on orders above ₹1,999.',
    code: 'MYNTRA300',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Jun 2026',
    bullets: [
      'New users only | Myntra app only',
      'Minimum cart ₹1,999 for extra ₹300 off',
      'Brands: Only, Biba, Levi\'s, Forever 21 & Allen Solly',
      'Apply Myntra promo code at checkout'
    ]
  },
  {
    id: 'coupon-42',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0D9488]',
    color: '#0D9488',
    type: 'ETHNIC WEAR',
    title: 'Indian & Western Ethnic Wear — Up to 60% Off | From ₹123',
    description: 'Sarees, kurtas, ethnic dresses, kurta sets, and dress materials at up to 60% off — prices start from ₹123 with no coupon code required.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'All users | No Myntra coupon code required',
      'Covers sarees, kurtas, ethnic dresses & dress materials',
      'Prices start from ₹123',
      'Discount varies by product'
    ]
  },
  {
    id: 'coupon-43',
    badge: 'UP TO 90% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF3F6C]',
    color: '#FF3F6C',
    type: 'TOP BRANDS',
    title: 'Up to 90% Off on Top Brands — Biba, Levi\'s, Puma, GAP & More',
    description: 'Shop Myntra\'s top brand sale across fashion, footwear, and accessories — Biba, W, Vero Moda, GAP, Levi\'s, Forever 21, and Puma at up to 90% off.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'All users | No Myntra discount code required',
      'Brands: Biba, W, Vero Moda, GAP, Levi\'s, Puma & more',
      'Discounts pre-applied on brand pages',
      'Discount varies by brand and product'
    ]
  },
  {
    id: 'coupon-44',
    badge: 'UP TO 70% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'MEN\'S SHIRTS',
    title: 'Men\'s Branded Shirts — Up to 70% Off | No Code Needed',
    description: 'Shop men\'s formal, casual, and printed shirts from Van Heusen, Tommy Hilfiger, Louis Philippe, Allen Solly, and Calvin Klein at up to 70% off.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'All users | No Myntra promo code required',
      'Brands: Van Heusen, Tommy Hilfiger, Calvin Klein & more',
      'Discounts pre-applied on listed prices',
      'Discount varies by brand and style'
    ]
  },
  {
    id: 'coupon-45',
    badge: 'UP TO 70% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2563EB]',
    color: '#2563EB',
    type: 'LINGERIE',
    title: 'Lingerie & Sleepwear Sale — Up to 70% Off | Clovia, Zivame & More',
    description: 'Bras, night suits, nightdresses, lounge pants, and lingerie sets from Clovia, Zivame, and Floret at up to 70% off — no coupon code needed.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'All users | No Myntra voucher code required',
      'Covers bras, night suits, lounge pants & lingerie sets',
      'Brands: Clovia, Zivame, Floret & more',
      'Discount varies by product'
    ]
  },
  {
    id: 'coupon-46',
    badge: 'UP TO 70% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'FRAGRANCES',
    title: 'Up to 70% Off on Fragrances — Versace, Ralph Lauren & More',
    description: 'Shop perfumes, body mists, and fragrance gift sets from Versace, Ralph Lauren, Denver, and Jaguar at up to 70% off — no coupon code required.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'All users | No Myntra coupon code required',
      'Covers perfumes, body mists & fragrance gift sets',
      'Brands: Versace, Ralph Lauren, Denver & Jaguar',
      'Discount varies by brand'
    ]
  },
  {
    id: 'coupon-47',
    badge: 'UP TO 85% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0D9488]',
    color: '#0D9488',
    type: 'GADGETS',
    title: 'Up to 85% Off on Gadgets — Smartwatches & Earbuds',
    description: 'Smartwatches, wireless earbuds, and Bluetooth headphones from Fire-Boltt, boAt, Noise, and ZEBRONICS at up to 85% off — no coupon code needed.',
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Existing users | No Myntra discount code required',
      'Covers smartwatches, earbuds & Bluetooth headphones',
      'Brands: Fire-Boltt, boAt, Noise & ZEBRONICS',
      'Discount varies by brand and model'
    ]
  },
  {
    id: 'coupon-48',
    badge: 'FROM ₹1,000',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF3F6C]',
    color: '#FF3F6C',
    type: 'GIFT CARDS',
    title: 'Myntra Gift Cards Starting From ₹1,000 | All Occasions',
    description: 'Send Myntra gift cards from ₹1,000 for any occasion — birthdays, anniversaries, Diwali, and more. Redeemable on the full Myntra catalogue with no category restrictions.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'All users | No Myntra coupon code required',
      'Available for birthdays, anniversaries, Diwali & more',
      'Redeemable across fashion, beauty & accessories',
      'Digital delivery | Starts from ₹1,000'
    ]
  },
  {
    id: 'coupon-49',
    badge: 'UP TO 90% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'ACCESSORIES',
    title: 'Up to 90% Off on Accessories for Women & Men',
    description: 'Earrings, handbags, watches, belts, sunglasses, necklaces, and hair accessories at up to 90% off — no coupon code required.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'All users | No Myntra promo code required',
      'Covers earrings, handbags, watches, belts & sunglasses',
      'Discounts pre-applied on listed prices',
      'Discount varies by category and product'
    ]
  },
  {
    id: 'coupon-50',
    badge: 'UP TO 80% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#2563EB]',
    color: '#2563EB',
    type: 'SUNGLASSES',
    title: 'Men\'s Sunglasses — Up to 80% Off | Ray-Ban, Carrera & More',
    description: 'Premium men\'s sunglasses from Ray-Ban, Carrera, Emporio Armani, Timberland, and Polaroid at up to 80% off — no coupon code needed.',
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Existing users | No Myntra discount code required',
      'Brands: Ray-Ban, Carrera, Emporio Armani & Timberland',
      'Covers polarised, sport & fashion styles',
      'Discount varies by brand'
    ]
  },
  {
    id: 'coupon-51',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'YOGA PANTS',
    title: 'Yoga Pants for Men & Women — Up to 60% Off | Adidas, HRX & More',
    description: 'Shop yoga pants and activewear bottoms from Adidas, HRX by Hrithik Roshan, Kappa, and Proline Active at up to 60% off — sizes XS to XXL available.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'All users | No Myntra coupon code required',
      'Covers regular & jogger styles | Sizes XS to XXL',
      'Brands: Adidas, HRX, Kappa & Proline Active',
      'Discount varies by brand'
    ]
  },
  {
    id: 'coupon-52',
    badge: 'UP TO 70% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0D9488]',
    color: '#0D9488',
    type: 'BACKPACKS',
    title: 'Backpacks for Men & Women — Up to 70% Off',
    description: 'Casual, travel, and laptop backpacks from Skybags, Nike, Caprese, Arctic Fox, and Daily Objects at up to 70% off — no coupon code needed.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'All users | No Myntra promo code required',
      'Brands: Skybags, Nike, Caprese, Arctic Fox & more',
      'Covers casual, travel & laptop backpack styles',
      'Discount varies by brand'
    ]
  },
  {
    id: 'coupon-53',
    badge: 'UP TO 65% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#FF3F6C]',
    color: '#FF3F6C',
    type: 'BEDSHEETS',
    title: 'Bedsheets Sale — Up to 65% Off | DDecor, Bombay Dyeing & More',
    description: 'Shop bedsheets in crib, single, queen, king, and extra-large sizes from DDecor, Bombay Dyeing, Raymond Home, and SPACES at up to 65% off.',
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026',
    bullets: [
      'All users | No Myntra voucher code required',
      'Sizes: Crib, Single, Queen, King & Extra Large',
      'Brands: DDecor, Bombay Dyeing, Raymond Home & SPACES',
      'Discount varies by brand and size'
    ]
  },
  {
    id: 'coupon-54',
    badge: 'FLAT 26% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#1A1A2E]',
    color: '#1A1A2E',
    type: 'BEAUTY',
    title: 'Flat 26% Off on Beauty Products | Min ₹2,999',
    description: 'Get a straight 26% off on Myntra beauty products — minimum cart ₹2,999. A reliable flat-discount code for a higher-value beauty order.',
    code: 'BEAUTYSTEAL',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Jun 2026',
    bullets: [
      'Existing users | Minimum cart ₹2,999',
      'Beauty products category only',
      'Apply Myntra coupon code at checkout',
      'Valid on selected beauty brands'
    ]
  }
];