export interface Coupon {
  id: string;
  badge: string;
  badgeType: string;
  badgeColor: string;
  color: string;
  type: string;
  title: string;
  description: string;
  details?: string[];
  code: string;
  verified: string;
  userType: string;
  validTill: string;
}

export const POLKI_SAREES_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO 23% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'POLKI SAREES',
    title: 'Polki Sarees Discount Code – Save Up to 23% on Angoori + Mastani Complete Look',
    description: 'Complete your festive wardrobe with the Angoori + Mastani combo, now available from ₹3,686 for a limited time.',
    details: [
      'Save up to 23% on the complete look collection.',
      'Get the Angoori + Mastani set from ₹3,686.',
      'Includes a coordinated saree and blouse pairing.',
      'Perfect for weddings, festive celebrations, and special occasions.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-2',
    badge: 'UP TO 16% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'COMPLETE LOOK',
    title: 'Polki Sarees Discount Code – Save Up to 16% on Patrikaa + Laila Complete Look',
    description: 'Refresh your ethnic collection with the Patrikaa + Laila complete look at a special price.',
    details: [
      'Save up to 16% on this coordinated outfit.',
      'Shop the complete look from ₹4,212.',
      'Designed for festive and traditional wear.',
      'Limited-time pricing on selected styles.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-3',
    badge: 'UP TO 23% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'PROMO CODE',
    title: 'Polki Sarees Promo Code – Save Up to 23% on Mukta + Anar Complete Look',
    description: 'Upgrade your festive style with the Mukta + Anar combination starting from ₹3,680.',
    details: [
      'Save up to 23% on the complete look.',
      'Buy the set from ₹3,680.',
      'Elegant styling for weddings and celebrations.',
      'Available while stocks last.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-4',
    badge: 'UP TO 20% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'PROMO CODE',
    title: 'Polki Sarees Promo Code – Save Up to 20% on Varnika + Dhun Complete Look',
    description: 'Bring home the Varnika + Dhun complete look with attractive savings on selected combinations.',
    details: [
      'Save up to 20% on qualifying purchases.',
      'Prices start from ₹3,917.',
      'Includes perfectly matched festive styling.',
      'A beautiful pick for family gatherings and festive celebrations.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-5',
    badge: '11% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'SAREE OFFERS',
    title: 'Polki Sarees Offers – Shonita Saree Save 11% (₹374 OFF)',
    description: 'Shop the Shonita saree for ₹2,925 and save 11% (₹374 OFF) on the regular price.',
    details: [
      'Save 11% and ₹374 instantly.',
      'Buy now for ₹2,925 instead of ₹3,299.',
      'Customer favorite with 100+ positive reviews.',
      'Great for festive and traditional occasions.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-6',
    badge: '11% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'SAREE OFFERS',
    title: 'Polki Sarees Offers – Angoori Saree Save 11% (₹351 OFF)',
    description: 'Elevate your ethnic collection with the graceful Angoori saree at a special price.',
    details: [
      'Save 11% and ₹351 on your purchase.',
      'Get it for ₹2,749 instead of ₹3,100.',
      'Popular choice for festive celebrations.',
      'Limited-time price.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-7',
    badge: '11% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'SAREE OFFERS',
    title: 'Polki Sarees Offers – Kashni Saree Save 11% (₹374 OFF)',
    description: 'Enjoy special savings on the elegant Kashni saree before the offer ends.',
    details: [
      'Save 11% and ₹374 instantly.',
      'Buy now for ₹2,925.',
      'Crafted for festive and ethnic occasions.',
      'Offer available while stocks last.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-8',
    badge: '26% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'DISCOUNT CODE',
    title: 'Polki Sarees Discount Code – Patjhad Saree Save 26% (₹1,050 OFF)',
    description: 'Refresh your ethnic wardrobe with the Patjhad saree at a significantly lower price.',
    details: [
      'Save 26% and ₹1,050.',
      'Shop now for ₹2,949 instead of ₹3,999.',
      'Elegant design for weddings and celebrations.',
      'Limited-time offer.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-9',
    badge: '15% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'PROMO CODE',
    title: 'Polki Sarees Promo Code – Sea Glass Saree Save 15% (₹460 OFF)',
    description: 'Choose the Sea Glass saree for a stylish festive look at a discounted price.',
    details: [
      'Save 15% and ₹460.',
      'Buy now for ₹2,600.',
      'Lightweight design for all-day comfort.',
      'Available for a limited period.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-10',
    badge: '21% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'SAREE OFFERS',
    title: 'Polki Sarees Offers – Bougainvillea Saree Save 21% (₹741 OFF)',
    description: 'Bring home the Bougainvillea saree with impressive savings on the regular price.',
    details: [
      'Save 21% and ₹741.',
      'Available now for ₹2,849.',
      'Suitable for festive and party wear.',
      'Offer valid while supplies last.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-11',
    badge: '31% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'DISCOUNT CODE',
    title: 'Polki Sarees Discount Code – Baghiya Saree Save 31% (₹1,100 OFF)',
    description: 'Upgrade your festive collection with the Baghiya saree at one of the best discounts available.',
    details: [
      'Save 31% and ₹1,100.',
      'Buy it for only ₹2,499.',
      'Stylish choice for celebrations and special occasions.',
      'Limited-time promotional price.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-12',
    badge: '15% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'PROMO CODE',
    title: 'Polki Sarees Promo Code – Daydream Flora Saree Save 15% (₹460 OFF)',
    description: 'Enjoy everyday elegance with the Daydream Flora saree at a reduced price.',
    details: [
      'Save 15% and ₹460.',
      'Get yours for ₹2,600.',
      'A stylish choice for festive occasions and everyday celebrations.',
      'Available while stocks last.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-13',
    badge: '15% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'SAREE OFFERS',
    title: 'Polki Sarees Offers – Amaltaas Saree Save 15% (₹460 OFF)',
    description: 'Purchase the Amaltaas saree today and take advantage of exclusive offers.',
    details: [
      'Save 15% and ₹460 instantly.',
      'Purchase it for ₹2,600.',
      'Elegant design for festive occasions.',
      'Offer available for a limited time.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-14',
    badge: '15% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'SAREE OFFERS',
    title: 'Polki Sarees Offers – Twilight Tropics Saree Save 15% (₹460 OFF)',
    description: 'Add a modern touch to your ethnic wardrobe with the Twilight Tropics saree.',
    details: [
      'Save 15% and ₹460.',
      'Available from ₹2,600.',
      'Comfortable for day-to-evening wear.',
      'Limited-time savings on selected styles.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-15',
    badge: '39% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#5B4FBE]',
    color: '#5B4FBE',
    type: 'DISCOUNT CODE',
    title: 'Polki Sarees Discount Code – Hariyali Green Ombre Saree Save 39% (₹1,400 OFF)',
    description: 'Celebrate every occasion in style with the Hariyali Green Ombre saree, now available at a special festive price.',
    details: [
      'Save 39% and ₹1,400 on the regular price.',
      'Buy now for just ₹2,199 instead of ₹3,599.',
      'A vibrant ombre design that\'s perfect for festive celebrations.',
      'Limited-time offer while stocks last.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  }
];