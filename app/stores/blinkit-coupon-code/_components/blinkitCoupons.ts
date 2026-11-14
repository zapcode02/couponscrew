// Coupon type
export interface Coupon {
  id: string;
  badge: string;
  badgeType: 'UP TO' | 'FLAT' | 'FREE' | 'PERCENT' | 'CASHBACK';
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

export const BLINKIT_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#F8CB46]',
    color: '#F8CB46',
    type: 'GROCERY',
    title: 'Get up to 40% off on grocery essentials',
    description: 'Shop staples, packaged foods & everyday grocery items and save up to 40% on your order.',
    points: [
      'Covers staples like rice, flour, oils, and packaged everyday grocery items.',
      'Discount percentage varies by product — up to 40% is the maximum, not a flat rate.',
      'Apply code BLINKIT40 at checkout to unlock the discount.',
      'Check item-level pricing in the cart before final payment.'
    ],
    code: 'BLINKIT40',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-2',
    badge: 'FLAT ₹125 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'FIRST ORDER',
    title: 'Flat ₹125 off on your first Blinkit order',
    description: 'New to Blinkit? Get a flat ₹125 discount on your first order with this welcome offer.',
    points: [
      'Valid only for first-time Blinkit customers on a new account.',
      'Apply code BLINKITNEW at checkout before payment.',
      'A minimum order value may apply — check the cart summary for eligibility.',
      'One-time use per new account.'
    ],
    code: 'BLINKITNEW',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-3',
    badge: 'UP TO 30% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#F8CB46]',
    color: '#F8CB46',
    type: 'FRUITS & VEGETABLES',
    title: 'Get up to 30% off on fresh fruits & vegetables',
    description: 'Order farm-fresh fruits and vegetables and enjoy up to 30% off on your basket.',
    points: [
      'Covers fresh fruits, vegetables, and seasonal produce.',
      'Discount is applied automatically on eligible items, no code required.',
      'Stock and pricing can vary daily based on fresh produce availability.',
      'Best ordered close to delivery time for maximum freshness.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-4',
    badge: 'FREE DELIVERY',
    badgeType: 'FREE',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'DAILY ESSENTIALS',
    title: 'Free delivery on daily essentials orders',
    description: 'Get free delivery when you order daily essentials above the minimum basket value.',
    points: [
      'Minimum basket value must be met for the free delivery to apply — check at checkout.',
      'Applies to daily essentials category orders specifically.',
      'Apply code FREESHIP before completing payment.',
      'Delivery time may still vary based on your location and demand.'
    ],
    code: 'FREESHIP',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-5',
    badge: 'UP TO 25% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#F8CB46]',
    color: '#F8CB46',
    type: 'DAIRY & BREAKFAST',
    title: 'Get up to 25% off on dairy & breakfast items',
    description: 'Stock up on milk, bread, eggs and breakfast picks at up to 25% off.',
    points: [
      'Covers milk, bread, eggs, and other common breakfast items.',
      'Discount varies by brand and product — up to 25% is the ceiling, not every item.',
      'Great for stocking up on weekly essentials in one order.',
      'Check expiry dates on dairy items upon delivery.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-6',
    badge: '15% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'APP EXCLUSIVE',
    title: 'Extra 15% off on app-exclusive deals',
    description: 'Unlock an additional 15% off on select items when you order through the Blinkit app.',
    points: [
      'App-exclusive — this discount is not available on the website.',
      'Apply code APP15 at checkout within the Blinkit app.',
      'Applies only to select items tagged as app-exclusive deals.',
      'Stacks on top of any already-discounted price shown on the product.'
    ],
    code: 'APP15',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-7',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#F8CB46]',
    color: '#F8CB46',
    type: 'SNACKS & BEVERAGES',
    title: 'Get up to 50% off on snacks & beverages',
    description: 'Grab your favourite snacks, chips, and beverages at up to 50% off.',
    points: [
      'Covers packaged snacks, chips, and beverages across multiple brands.',
      'Discount varies by product — up to 50% is the maximum available.',
      'Good for stocking up ahead of gatherings or movie nights.',
      'Offer is subject to stock availability in your delivery zone.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-8',
    badge: 'FLAT ₹75 OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'PERSONAL CARE',
    title: 'Flat ₹75 off on personal care products',
    description: 'Save a flat ₹75 on personal care and hygiene essentials on eligible orders.',
    points: [
      'Applies to personal care and hygiene essentials category.',
      'A minimum cart value may be required — confirm at checkout.',
      'Apply code CARE75 before completing your order.',
      'Check product eligibility on the item page before adding to cart.'
    ],
    code: 'CARE75',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-9',
    badge: 'UP TO 35% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#F8CB46]',
    color: '#F8CB46',
    type: 'HOUSEHOLD ESSENTIALS',
    title: 'Get up to 35% off on household essentials',
    description: 'Shop cleaning supplies and household essentials and save up to 35% instantly.',
    points: [
      'Covers cleaning supplies, detergents, and general household essentials.',
      'Discount applies instantly at checkout, no code needed.',
      'A good opportunity to stock up on bulky household items in one delivery.',
      'Check pack sizes before ordering to avoid duplicate purchases.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-10',
    badge: 'UP TO 80% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#F8CB46]',
    color: '#F8CB46',
    type: 'SITEWIDE',
    title: 'Sitewide: Up to 80% OFF + Rs 200 Paytm Cashback',
    description: 'Shop groceries and staples — rice & flour, edible oils, ghee, spices, salt, sugar, dry fruits, nuts & pulses — and save up to 80%. Pay using the code to get an extra cashback of up to Rs 200 on top of your existing discount. Minimum order value of Rs 199 applies. Pricing starts from Rs 10.',
    points: [
      'Minimum order value of Rs 199 is required for the Paytm cashback to apply.',
      'Cashback is credited separately from the product discount, typically within a few days.',
      'Covers staples like rice, flour, oils, ghee, spices, and dry fruits.',
      'Restricted to Paytm UPI payment — other payment methods won\'t trigger the cashback.'
    ],
    code: 'PAYTMUPI',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-11',
    badge: 'UP TO 55% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'FRUITS & VEGETABLES',
    title: 'Fresh Fruits & Vegetables: Up to 55% OFF',
    description: 'Save up to 50% on fresh produce across fruits and vegetables. Enter the code at checkout for an extra 5% off over and above the existing discount. Covers Fresh Vegetables, Fresh Fruits, Mangoes & Melons, Seasonal, and Exotics. Code is valid only for Yes Bank card users.',
    points: [
      'The extra 5% requires a Yes Bank card — it will not apply with other payment methods.',
      'Covers Fresh Vegetables, Fresh Fruits, Mangoes & Melons, Seasonal, and Exotics categories.',
      'The 50% base discount and the 5% card discount combine for the maximum 55% saving.',
      'Code AUCC30 must be entered manually at checkout.'
    ],
    code: 'AUCC30',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-12',
    badge: 'UP TO ₹50 CASHBACK',
    badgeType: 'CASHBACK',
    badgeColor: 'bg-[#F8CB46]',
    color: '#F8CB46',
    type: 'UPI',
    title: 'BHIM Card: Up to Rs 50 Cashback',
    description: 'Pay using a RuPay Credit Card on UPI through the BHIM app and save up to Rs 50. Minimum cart value of Rs 599 required. Not applicable on gold & silver coins, gift cards, tobacco, cigarettes, and baby needs products.',
    points: [
      'Requires payment specifically via RuPay Credit Card through the BHIM app.',
      'Minimum cart value of Rs 599 must be met for the cashback to apply.',
      'Excluded categories: gold & silver coins, gift cards, tobacco, cigarettes, and baby needs products.',
      'Cashback is typically credited back to the card within a few business days.'
    ],
    code: 'BHIMRUPAYCC',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-13',
    badge: 'UP TO 65% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'BABY CARE',
    title: 'Baby Care: Up to 65% OFF (Pampers, MamyPoko & More)',
    description: 'Save up to 20% on Himalaya Baby Care products — baby powder, baby lotion, baby wash, and more. Baby essentials from trusted brands at reduced prices starting from Rs 72.',
    points: [
      'Despite the 65% headline, the Himalaya range specifically is discounted up to 20% — check individual products for the applicable rate.',
      'Covers baby powder, lotion, baby wash, and similar essentials.',
      'Prices on select items start from as low as Rs 72.',
      'Covers trusted brands including Pampers and MamyPoko alongside Himalaya.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-14',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#F8CB46]',
    color: '#F8CB46',
    type: 'ESSENTIALS',
    title: 'Pooja Essentials: Up to 50% OFF',
    description: 'Save up to 50% on a range of pooja essentials including Deepam pooja oil, camphor, ghee, and more. Prices start from Rs 10.',
    points: [
      'Covers Deepam pooja oil, camphor, ghee, and other pooja essentials.',
      'Entry-level items start from as low as Rs 10.',
      'Discount applied automatically at checkout, no code needed.',
      'Useful for stocking up ahead of festivals and regular pooja needs.'
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
    type: 'BAKERY',
    title: 'Bakery & Biscuits: Up to 50% OFF',
    description: 'Save up to 20% on Oreo Biscuits including the chocolate flavour variant. Limited time offer.',
    points: [
      'Oreo Biscuits specifically are discounted up to 20%, including the chocolate flavour variant.',
      'Wider bakery and biscuit category may see up to 50% off on select items.',
      'This is a limited-time offer — pricing may revert once the window ends.',
      'Check product pages for exact flavour and pack size discounts.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-16',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#F8CB46]',
    color: '#F8CB46',
    type: 'PET CARE',
    title: 'Pet Care: Up to 50% OFF',
    description: 'Save up to 50% on pet care products covering food and grooming accessories for dogs and cats.',
    points: [
      'Covers both pet food and grooming accessories for dogs and cats.',
      'Discount varies by brand and product — up to 50% is the maximum.',
      'Good opportunity to stock up on recurring pet food purchases.',
      'Check expiry dates on pet food items upon delivery.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-17',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'DESSERTS',
    title: 'Ice Cream & Frozen Desserts: Up to 50% OFF',
    description: 'Save up to 50% on ice creams from brands including Baskin-Robbins, Kwality Walls, and Amul. Free shipping available.',
    points: [
      'Covers brands including Baskin-Robbins, Kwality Walls, and Amul.',
      'Free shipping is available on this category, separate from the product discount.',
      'Frozen items — check your delivery slot to ensure they arrive without melting.',
      'Discount percentage may vary by brand and flavour.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-18',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#F8CB46]',
    color: '#F8CB46',
    type: 'SNACKS & BEVERAGES',
    title: 'Snacks & Munchies: Up to 50% OFF',
    description: 'Save up to 30% on snacks and munchies with prices starting from Rs 42.',
    points: [
      'Actual discount on snacks and munchies is up to 30%, not the full 50% headline.',
      'Entry-level items start from Rs 42.',
      'Good for stocking up on everyday snacking items in bulk.',
      'Prices and selection may vary by delivery location.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-19',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'ESSENTIALS',
    title: 'Paan Corner: Up to 50% OFF',
    description: 'Save up to 50% on Paan Corner products with prices starting from Rs 10.',
    points: [
      'Covers the Paan Corner product range specifically.',
      'Entry-level items priced from as low as Rs 10.',
      'Discount applied automatically at checkout.',
      'Age restrictions may apply on certain products — check at checkout.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-20',
    badge: 'UP TO 40% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#F8CB46]',
    color: '#F8CB46',
    type: 'GROCERY',
    title: 'Organic & Healthy Living: Up to 40% OFF',
    description: 'Save up to 40% on organic and healthy living products with prices starting from Rs 51.',
    points: [
      'Covers organic and health-focused product lines.',
      'Entry-level pricing starts from Rs 51.',
      'Good for building a healthier grocery basket without a major price jump.',
      'Check product labels for organic certification details.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-21',
    badge: 'UP TO 35% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'SNACKS & BEVERAGES',
    title: 'Candies & Gums: Up to 35% OFF',
    description: 'Save up to 35% on candies and gums with prices starting from Rs 45.',
    points: [
      'Covers candies, gums, and similar small-ticket confectionery items.',
      'Entry-level pricing starts from Rs 45.',
      'Discount applied automatically, no code needed.',
      'Good add-on category when ordering alongside other groceries.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-22',
    badge: 'UP TO 35% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#F8CB46]',
    color: '#F8CB46',
    type: 'PERSONAL CARE',
    title: 'Personal Care: Up to 35% Instant Discount',
    description: 'Get an instant discount of up to 35% on personal care products. Pricing starts from Rs 38.',
    points: [
      'Discount is instant — applied directly on the product price, no code needed.',
      'Entry-level personal care items start from Rs 38.',
      'Covers general personal care and hygiene product range.',
      'Discount percentage varies by specific product and brand.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-23',
    badge: 'UP TO ₹100 CASHBACK',
    badgeType: 'CASHBACK',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'WALLET',
    title: 'Paytm Cashback: Up to Rs 100 on Orders',
    description: 'Pay via Paytm and receive cashback of up to Rs 100 on your order. Minimum transaction value of Rs 750 required. Can be used twice per customer.',
    points: [
      'Minimum transaction value of Rs 750 is required for cashback eligibility.',
      'Limited to two uses per customer during the offer period.',
      'Cashback is credited to your Paytm wallet, typically within a few days.',
      'Ensure payment is made directly through Paytm, not a linked card via another gateway.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-24',
    badge: 'FLAT 25% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#F8CB46]',
    color: '#F8CB46',
    type: 'FIRST ORDER',
    title: 'App Download Offer: 25% OFF on First Order',
    description: 'Download the Blinkit app and save 25% on your first order. App-exclusive offer.',
    points: [
      'Only valid for the Blinkit app — not available on the website.',
      'Applies specifically to your very first order after download.',
      'No code required — discount reflects automatically on your first app checkout.',
      'One-time use per new app installation/account.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'New Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-25',
    badge: 'UP TO 20% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'DAIRY & BREAKFAST',
    title: 'Breakfast & Dairy: Up to 20% OFF',
    description: 'Save up to 20% on Bread & Eggs, Paneer, Curd, Cereals, and more. Covers top brands including Amul, Kissan, and Nescafe.',
    points: [
      'Covers Bread & Eggs, Paneer, Curd, Cereals and similar breakfast staples.',
      'Includes top brands such as Amul, Kissan, and Nescafe.',
      'Discount is applied automatically at checkout.',
      'Check expiry dates on dairy items upon delivery.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-26',
    badge: 'UP TO 50% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#F8CB46]',
    color: '#F8CB46',
    type: 'DESSERTS',
    title: 'Sweet Tooth: Up to 50% OFF',
    description: 'Save up to 50% on sweet treat products with pricing starting from Rs 20.',
    points: [
      'Covers sweet treats and dessert-style snacking items.',
      'Entry-level items priced from as low as Rs 20.',
      'Discount percentage varies by product — 50% is the maximum.',
      'Good add-on category alongside a grocery order.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-27',
    badge: 'FLAT 5% CASHBACK',
    badgeType: 'CASHBACK',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'WALLET',
    title: 'HDFC PayZapp: Flat 5% Cashback on All Orders',
    description: 'Pay via HDFC PayZapp wallet and earn a flat 5% cashback on minimum cart value of Rs 500. Can be used twice per user during campaign period (App only).',
    points: [
      'Payment must be made via the HDFC PayZapp wallet specifically.',
      'Minimum cart value of Rs 500 is required to trigger the cashback.',
      'Limited to two uses per user during the campaign period.',
      'App-only offer — not available when ordering via the Blinkit website.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-28',
    badge: 'FLAT 10% OFF',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#F8CB46]',
    color: '#F8CB46',
    type: 'BANK OFFER',
    title: 'Axis Bank Card: 10% OFF',
    description: 'Save 10% when you pay using your Axis Bank card. Additional discount available on website.',
    points: [
      'Requires payment specifically via an Axis Bank card.',
      'An additional discount layer is available if ordering through the website.',
      'Check the offer terms page for any applicable spending cap.',
      'Discount reflects automatically once the eligible card is selected at payment.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  },
  {
    id: 'coupon-29',
    badge: 'FREE DELIVERY',
    badgeType: 'FREE',
    badgeColor: 'bg-[#000000]',
    color: '#000000',
    type: 'SITEWIDE',
    title: 'Free Delivery on Orders Above Rs 199',
    description: 'Free shipping on all orders crossing the minimum cart value of Rs 199. Applicable on all products.',
    points: [
      'Minimum cart value of Rs 199 unlocks free delivery.',
      'Applicable across the entire product catalogue, not limited to specific categories.',
      'Applied automatically at checkout once the cart threshold is met.',
      'Delivery time may still vary by location and current demand.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: 'Limited Period'
  }
];
