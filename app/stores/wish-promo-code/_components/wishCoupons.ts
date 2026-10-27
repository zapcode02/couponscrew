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

export const WISH_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO 60% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'DOORBUSTER DEALS',
    title: 'Wish Coupon Code – Save Up to 60% on Doorbuster Deals',
    description: 'Shop limited-time Doorbuster Deals and enjoy some of the biggest savings on Wish.',
    points: [
      'Save up to 60% on selected products for a limited time.',
      'Explore deals across home, fashion, sports, and lifestyle categories.',
      'New discounts are available while stocks last.',
      'A great opportunity to save more on everyday shopping.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'coupon-2',
    badge: 'SAVE 57%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'BATHROOM ACCESORIES',
    title: 'Wish Coupon Code – Save 57% on Rainbow LED Shower Head',
    description: 'Upgrade your bathroom with a colorful LED shower head at a lower price.',
    points: [
      'Save 57% on the Rainbow LED Shower Head for ₹211.57.',
      'Features color-changing LED lights for a unique shower experience.',
      'Regular price is ₹497.52.',
      'A fun addition to modern bathrooms.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'coupon-3',
    badge: 'SAVE 57%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'SPORTS & OUTDOORS',
    title: 'Wish Discount Code – Save 57% on 4-Strand Braided PE Fishing Line',
    description: 'Stock up on durable fishing line while enjoying impressive savings.',
    points: [
      'Save up to 57% on the 4-Strand Braided PE Fishing Line from ₹165.89.',
      'Available in multiple colours and sizes.',
      'Comes with a 1000m spool for long fishing trips.',
      'A great choice for recreational and experienced anglers.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'coupon-4',
    badge: 'SAVE 53%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'CYCLING ACCESSORIES',
    title: 'Wish Discount Code – Save 57% on Mountain Bike Gloves',
    description: 'Protect your hands with comfortable cycling gloves for less.',
    points: [
      'Save 53% on Mountain Bike Gloves from ₹170.54.',
      'Built-in cushioned padding absorbs impact and keeps every ride comfortable.',
      'Available in multiple colours and sizes.',
      'A good match for road rides, trail biking, and other outdoor trips.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'coupon-5',
    badge: 'SAVE 48%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'FISHING GEAR',
    title: 'Wish Promo Code – Save 57% on 1000M Braided PE Fishing Line',
    description: 'Choose a strong braided fishing line at a discounted price.',
    points: [
      'Save 48% on the 1000M 8-Strand Braided PE Fishing Line for ₹369.15.',
      'Made with durable braided construction for improved strength.',
      'Available in multiple colours and sizes.',
      'Suitable for freshwater and saltwater fishing.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'coupon-6',
    badge: 'UP TO 48% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'PET SUPPLIES',
    title: 'Wish Promo Code – Save 55% on Remote Dog Training Collar',
    description: 'Train your dog more effectively while saving on your purchase.',
    points: [
      'Save up to 48% on the Remote Dog Training Collar from ₹398.91.',
      'Includes vibration and training functions.',
      'Available in multiple colour options.',
      'Suitable for everyday pet training.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'coupon-7',
    badge: 'SAVE 51%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'COLLECTIBLES & TOYS',
    title: 'Wish Voucher Code – Save 51% on Alien Action Figure',
    description: 'Add a detailed collectible figure to your collection for less.',
    points: [
      'Save 51% on the Alien Articulated Action Figure for ₹302.98.',
      'Features multiple articulation points for posing.',
      'Available in different colour options.',
      'A great collectible for figure enthusiasts.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'coupon-8',
    badge: 'SAVE 50%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'FOOTWEAR & SALE',
    title: 'Wish Voucher Code – Save 50% on Boys Elite Sport Shoes',
    description: 'Grab more value across selected products during the latest sale.',
    points: [
      'Explore discounts on a wide variety of trending products.',
      'Shop home, electronics, fashion, and lifestyle items.',
      'These deals run for a short period and end once the stock is gone.',
      'Perfect for shoppers looking for everyday savings.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'coupon-9',
    badge: 'UP TO 48% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'PET ACCESSORIES',
    title: 'Wish Offers – Save Up to 48% on Remote Dog Training Collar',
    description: 'Discover smart pet accessories at discounted prices.',
    points: [
      'Save up to 48% on the Remote Dog Training Collar.',
      'Includes multiple training functions for daily use.',
      'Available in several colour options.',
      'A practical accessory for pet owners.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'coupon-10',
    badge: 'UP TO 39% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'LIFESTYLE',
    title: 'Save Up to 39% on Wish Lifestyle Accessories',
    description: 'Browse discounted lifestyle products across multiple categories.',
    points: [
      'Save up to 39% on selected lifestyle essentials.',
      'New products are added regularly during promotional events.',
      'The final price depends on which product you pick.',
      'Great for shoppers looking for value across different categories.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  }
];