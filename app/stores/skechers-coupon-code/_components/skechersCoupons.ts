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

export const SKECHERS_COUPONS: Coupon[] = [
  {
    id: 'skechers-coupon-1',
    badge: 'SAVE 50%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#002D62]',
    color: '#002D62',
    type: 'BASKETBALL SNEAKERS',
    title: 'Skechers Coupon Code – Save 50% on SKX Float Basketball Sneakers',
    description: 'Hit the court in high-end basketball sneakers priced at half the usual cost.',
    points: [
      'Get the SKX Float Basketball Sneakers at 50% off for ₹9,499.',
      'Made to deliver cushioning, steady support, and quick response on every move.',
      'The original price is ₹18,999.',
      'Suits ballers and sneakerheads who want performance with style.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'skechers-coupon-2',
    badge: 'SAVE 50%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#002D62]',
    color: '#002D62',
    type: 'CASUAL SHOES',
    title: 'Skechers Coupon Code – Save 50% on Boss Treatment Shoes',
    description: 'Update your shoe rack with smart Skechers pairs at a big markdown.',
    points: [
      'Grab the Boss Treatment shoes at 50% off for ₹7,499.',
      'A comfortable build with styling that goes with many outfits.',
      'The original price is ₹14,999.',
      'Easy to wear for weekend plans and regular days out.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'skechers-coupon-3',
    badge: 'SAVE 50%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#002D62]',
    color: '#002D62',
    type: 'KIDS SPORT SHOES',
    title: 'Skechers Discount Code – Save 50% on Boys Elite Sport Shoes',
    description: "Find tough sports shoes for kids at a price that's hard to beat.",
    points: [
      'Get the Boys Skechers Elite Sport shoes at 50% off for ₹2,149.',
      'Made for energetic kids who need comfort that lasts through the day.',
      'The original price is ₹4,299.',
      'Handy for sports practice, class hours, and playground fun.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'skechers-coupon-4',
    badge: 'SAVE 50%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#002D62]',
    color: '#002D62',
    type: 'KIDS SNEAKERS',
    title: 'Skechers Discount Code – Save 50% on Girls Sport Court 92 Shoes',
    description: 'Add comfort to every step with trendy Skechers sneakers.',
    points: [
      'Pick up the Girls Sport Court 92 shoes at 50% off for ₹2,149.',
      'A light, supportive fit that stays easy on growing feet.',
      'The original price is ₹4,299.',
      'Works for daily routines as well as time outdoors.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'skechers-coupon-5',
    badge: 'SAVE 50%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#002D62]',
    color: '#002D62',
    type: 'WOMENS APPAREL',
    title: 'Skechers Promo Code – Save 50% on Pin Tuck Pants',
    description: 'Refresh your closet with easy-fitting pants at half price.',
    points: [
      "Get the Women's Pin Tuck Pants at 50% off for ₹1,749.",
      'Made to feel relaxed while keeping a polished look.',
      'The original price is ₹3,499.',
      'A smart pick for brunches, errands, and busy days.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'skechers-coupon-6',
    badge: 'SAVE 50%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#002D62]',
    color: '#002D62',
    type: 'MENS APPAREL',
    title: 'Skechers Promo Code – Save 50% on Puffer Jacket',
    description: 'Keep warm and look sharp while saving big.',
    points: [
      "Grab the Men's Puffer Full-Zip Jacket at 50% off for ₹3,499.",
      'The full-length zip makes it quick to put on and take off.',
      'The original price is ₹6,999.',
      'A handy outer layer when the temperature dips.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'skechers-coupon-7',
    badge: 'SAVE 50%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#002D62]',
    color: '#002D62',
    type: 'ACTIVEWEAR',
    title: 'Skechers Voucher Code – Save 50% on GOwalk Pant Joy',
    description: 'Move in light, comfy activewear from Skechers at a lower price.',
    points: [
      "Get the Women's GOwalk Pant Joy at 50% off for ₹1,499.",
      'Suited to walks, gym sessions, and relaxed days at home.',
      'The original price is ₹2,999.',
      'Fits well with an active routine.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'skechers-coupon-8',
    badge: 'SAVE 50%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#002D62]',
    color: '#002D62',
    type: 'APPAREL',
    title: 'Skechers Voucher Code – Save 50% on Embroidered Boxy Fit T-Shirt',
    description: 'Bring a modern oversized tee into your closet.',
    points: [
      'Get the Embroidered Boxy Fit T-Shirt at 50% off for ₹1,149.',
      'Offers a loose, roomy cut with stitched embroidery accents.',
      'The original price is ₹2,299.',
      'An eye-catching tee to pair with jeans or joggers.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'skechers-coupon-9',
    badge: 'SAVE 40%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#002D62]',
    color: '#002D62',
    type: 'RUNNING SHOES',
    title: 'Skechers Offers – Save 40% on GO Run Max Road 6',
    description: 'Enjoy comfort over long miles with top-tier Skechers running shoes.',
    points: [
      'Get the GO Run Max Road 6 at 40% off for ₹9,599.',
      'Soft cushioning and a responsive feel help each stride roll smoothly.',
      'The original price is ₹15,999.',
      'Suits distance runners and fitness lovers.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'skechers-coupon-10',
    badge: 'SAVE 40%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#002D62]',
    color: '#002D62',
    type: 'PERFORMANCE SHOES',
    title: 'Skechers Offers – Save 40% on GO Run Razor 5',
    description: 'Step up your pace with featherweight performance shoes.',
    points: [
      'Get the GO Run Razor 5 at 40% off for ₹8,999.',
      'Made for fast efforts and regular training runs.',
      'The original price is ₹14,999.',
      'Good for runners who want comfort and support together.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'skechers-coupon-11',
    badge: 'SAVE 40%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#002D62]',
    color: '#002D62',
    type: 'KIDS FOOTWEAR',
    title: 'Save 40% on Skechers Elite Sport Shoes for Kids',
    description: 'Shop cushioned sports shoes made for energetic kids.',
    points: [
      'Get the Skechers Elite Sport shoes for boys at 40% off, starting at ₹2,399.',
      'The light build helps kids move freely from morning to evening.',
      'The original price is ₹3,999.',
      'Dependable for class days, games, and weekend fun.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'skechers-coupon-12',
    badge: 'SAVE 40%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#002D62]',
    color: '#002D62',
    type: 'KIDS FOOTWEAR',
    title: 'Save 40% on Skechers Elite Sport Shoes for Girls',
    description: 'Give young athletes dependable comfort with Skechers footwear.',
    points: [
      'Get the Girls Skechers Elite Sport shoes at 40% off for ₹2,279.',
      'Light on the foot, so they stay comfortable all day long.',
      'The original price is ₹3,799.',
      'Fits sports sessions and busy days alike.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'skechers-coupon-13',
    badge: 'SAVE 20%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#002D62]',
    color: '#002D62',
    type: 'ARCH FIT SNEAKERS',
    title: 'Save 20% on Skechers Arch Fit Vista 2.0',
    description: 'Feel added support with Skechers Arch Fit technology.',
    points: [
      'Get the Arch Fit Vista 2.0 at 20% off for ₹5,599.',
      'Supportive cushioning keeps your feet comfortable through the day.',
      'The original price is ₹6,999.',
      'Well suited to long walks and regular use.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  },
  {
    id: 'skechers-coupon-14',
    badge: 'SAVE 20%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#002D62]',
    color: '#002D62',
    type: 'WOMENS JACKETS',
    title: 'Save 20% on Skechers Color Blocked Jacket',
    description: 'Finish your look with a trendy Skechers jacket.',
    points: [
      "Get the Women's Color Blocked Jacket at 20% off for ₹3,599.",
      'Showcases a contemporary color-block pattern.',
      'The original price is ₹4,499.',
      'A nice layer for relaxed plans and chilly weather.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Oct 2026'
  }
];