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

export const CROCS_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'SAVE 60%',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'JIBBITZ CHARMS',
    title: 'Crocs Coupon Code – Save 60% on Hashtag Jibbitz',
    description: 'Buy the Hashtag Jibbitz for just ₹160, down from ₹399.\nEnjoy a massive 60% OFF on this Crocs accessory.\nBuy 5 Jibbitz for ₹599 for extra value.\nPerfect for personalizing your Crocs.',
    points: [
      'The 5-for-₹599 bundle works out cheaper per piece than buying individually at ₹160 each.',
      'Jibbitz charms are compatible with all standard Crocs clog models with ventilation holes.',
      'A lightweight, low-cost way to personalize or gift a pair of Crocs.',
      'Check the Crocs app or site for new Jibbitz designs added regularly.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-2',
    badge: 'SAVE 50%',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#00A19A]',
    color: '#00A19A',
    type: 'FESTIVE COLLECTION',
    title: 'Crocs Coupon Code – Get Up to 50% Off Festive Collection',
    description: "Shop Crocs' Festive Collection with discounts of up to 50% OFF.\nFind stylish clogs, sandals, flips, and accessories.\nApply code PREPAID5 and save an additional 5% when you pay online.\nLimited-time festive sale.",
    points: [
      'Code PREPAID5 only applies on prepaid (online) payments, not cash on delivery.',
      'Discount percentage varies across clogs, sandals, flips, and accessories in this collection.',
      'Festive Collection pricing is time-limited and may revert after the sale window.',
      'Combine the base discount with the extra 5% prepaid saving for maximum value.'
    ],
    code: 'PREPAID5',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-3',
    badge: 'SAVE 45%',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#00A19A]',
    color: '#00A19A',
    type: 'KIDS CROCS',
    title: 'Crocs Discount Code – Save 45% on Toddler Crocband Cruiser Sandal',
    description: "Get the Toddler Crocband Cruiser Sandal for ₹1,922 instead of ₹3,495.\nEnjoy 45% OFF on this kids' footwear.\nPay upfront online and get 5% knocked off your bill.\nLightweight and comfortable for toddlers.",
    points: [
      'Designed specifically for toddler-size feet — check the size chart before ordering.',
      'Extra 5% discount applies only when paying online upfront, not cash on delivery.',
      'Lightweight sandal construction suited to everyday toddler wear.',
      'Easy slip-on style, convenient for quick changes with young children.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-4',
    badge: 'SAVE 45%',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#00A19A]',
    color: '#00A19A',
    type: 'KIDS CROCS',
    title: "Crocs Discount Code – Save 45% on Kids' Crocband Cruiser Sandal",
    description: "Buy the Kids' Crocband Cruiser Sandal for ₹2,197 instead of ₹3,995.\nSave 45% instantly.\nEligible for an extra 5% prepaid discount.\nDesigned for everyday comfort and play.",
    points: [
      'Sized for kids rather than toddlers — check the size guide to confirm the right fit.',
      'Extra 5% prepaid discount applies only on online payment methods.',
      'Durable construction suited for active play and everyday school or outdoor use.',
      'Easy to clean, a practical choice for children\'s footwear.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-5',
    badge: 'SAVE 45%',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#00A19A]',
    color: '#00A19A',
    type: 'TODDLER CROCS',
    title: 'Crocs Promo Code – Save 45% on Toddler Crocband Clog',
    description: 'Grab the Toddler Crocband Clog for ₹2,197.\nEnjoy 45% OFF from the original price of ₹3,995.\nGet an extra 5% OFF on prepaid payments.\nLightweight and easy to wear.',
    points: [
      'The classic Crocband clog design, scaled down for toddler sizing.',
      'Extra 5% off requires prepaid (online) checkout rather than cash on delivery.',
      'Easy on-off design suited to toddlers who are still learning to dress themselves.',
      'Check toddler size charts carefully since sizing can run differently from adult styles.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-6',
    badge: 'SAVE 40%',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#00A19A]',
    color: '#00A19A',
    type: 'CLASSIC CLOGS',
    title: 'Crocs Promo Code – Save 40% on InMotion Marbled Clog',
    description: 'Buy the InMotion Marbled Clog for ₹4,797 instead of ₹7,995.\nSave 40% instantly.\nChoose online payment to unlock a bonus 5% discount.\nStylish marbled design with superior comfort.',
    points: [
      'Part of the premium InMotion line, positioned above the classic clog range.',
      'Online payment unlocks the bonus 5% — not available on cash on delivery.',
      'Marbled colourway is a limited design, subject to stock availability.',
      'InMotion sole technology is designed for extra cushioning compared to standard clogs.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-7',
    badge: 'SAVE 40%',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#00A19A]',
    color: '#00A19A',
    type: 'WOMEN FOOTWEAR',
    title: "Crocs Voucher – Save 40% on Women's InMotion Heel Block Pacer",
    description: "Get the Women's InMotion Heel Block Pacer for ₹5,097.\nEnjoy 40% OFF from ₹8,495.\nExtra 5% prepaid discount available.\nIdeal for all-day comfort and style.",
    points: [
      'A heeled silhouette within the InMotion line, aimed at style-forward everyday wear.',
      'Extra 5% prepaid discount requires online payment at checkout.',
      'Women\'s sizing only — check the size chart before ordering.',
      'Designed for all-day wear with cushioned comfort built into the heel block.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-8',
    badge: 'SAVE 40%',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#00A19A]',
    color: '#00A19A',
    type: 'ECHO CLOG',
    title: 'Crocs Voucher – Save 40% on Echo Clog',
    description: 'Buy the Echo Clog for ₹4,197 instead of ₹6,995.\nSave 40% on this popular Crocs clog.\nEnjoy an extra 5% OFF with prepaid payment.\nDesigned for everyday comfort.',
    points: [
      'The Echo line is one of Crocs\' more popular modern silhouettes.',
      'Extra 5% off is tied to prepaid checkout, not cash on delivery.',
      'Everyday comfort design suited for casual daily wear.',
      'Check colourway availability as popular Echo shades sell out quickly.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-9',
    badge: 'SAVE 40%',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#00A19A]',
    color: '#00A19A',
    type: 'SANDALS',
    title: 'Crocs Offers – Save 40% on Brooklyn Buckle Low',
    description: 'Get the Brooklyn Buckle Low for ₹3,297 instead of ₹5,495.\nEnjoy 40% OFF instantly.\nExtra 5% OFF on prepaid orders.\nStylish and lightweight everyday footwear.',
    points: [
      'A sandal-style silhouette with an adjustable buckle for a more secure fit.',
      'Extra 5% off applies only on prepaid orders, not cash on delivery.',
      'Lightweight build suited to warm-weather, everyday casual wear.',
      'Buckle strap adds a slightly more polished look compared to basic flip-flops.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-10',
    badge: 'SAVE 40%',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#00A19A]',
    color: '#00A19A',
    type: 'FLIP-FLOPS',
    title: 'Crocs Offers – Save 40% on Getaway Platform Flip',
    description: 'Buy the Getaway Platform Flip for ₹2,997 instead of ₹4,995.\nSave 40% on your purchase.\nGet an extra 5% OFF on prepaid payments.\nComfortable platform flip for daily wear.',
    points: [
      'Platform sole adds extra height compared to standard flat flip-flops.',
      'Extra 5% off requires prepaid (online) payment at checkout.',
      'Designed for daily casual wear rather than heavy outdoor activity.',
      'Check sizing carefully as platform styles can fit differently from regular flips.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-11',
    badge: 'SAVE 40%',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#00A19A]',
    color: '#00A19A',
    type: 'WOMEN FOOTWEAR',
    title: "Save 40% on Women's Getaway Chunky Glitter Platform Flip",
    description: "Get the Women's Getaway Chunky Glitter Platform Flip for ₹3,597.\nSave 40% from the original price of ₹5,995.\nSkip cash on delivery and grab 5% extra savings at checkout.\nTrendy design with all-day comfort.",
    points: [
      'Glitter finish and chunky platform make this a more fashion-forward pick within the flip range.',
      'Extra 5% savings require choosing an online payment method over cash on delivery.',
      'Women\'s sizing only — check the size chart before ordering.',
      'Platform height may require getting used to for those new to platform footwear.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-12',
    badge: 'SAVE 40%',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#00A19A]',
    color: '#00A19A',
    type: 'JIBBITZ CHARMS',
    title: 'Save 40% on Number 8 Jibbitz',
    description: 'Buy the Number 8 Jibbitz for ₹239 instead of ₹399.\nSave 40% instantly.\nEasy way to personalize your Crocs.\nLimited-time accessory offer.',
    points: [
      'Compatible with any standard Crocs clog with ventilation holes.',
      'This is a single-charm purchase — combine with other Jibbitz for a full personalized look.',
      'Limited-time pricing, so the discount may not be available indefinitely.',
      'A low-cost add-on if you\'re already purchasing a pair of Crocs.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-13',
    badge: 'SAVE 30%',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0D9488]',
    color: '#0D9488',
    type: 'JIBBITZ CHARMS',
    title: 'Save 30% on Doraemon 3-Jibbitz™',
    description: 'Get the Doraemon 3-Jibbitz™ for ₹279 instead of ₹399.\nEnjoy 30% OFF on this collectible accessory.\nClips onto your Crocs in seconds, no tools needed.\nGreat for Doraemon fans.',
    points: [
      'Comes as a set of 3 charms featuring Doraemon-themed designs.',
      'Officially licensed collectible, good for fans or as a gift.',
      'No tools required — clips directly into the ventilation holes.',
      'Limited availability as a licensed collaboration item.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-14',
    badge: 'SAVE 30%',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0D9488]',
    color: '#0D9488',
    type: 'CLASSIC CLOGS',
    title: 'Save 30% on Classic Camouflage Clog',
    description: 'Buy the Classic Camouflage Clog for ₹3,497 instead of ₹4,995.\nSave 30% instantly.\nLightweight and comfortable design.\nPerfect for everyday casual wear.',
    points: [
      'Camouflage print is a limited colourway within the Classic clog line.',
      'Same comfort base as the standard Classic Clog, just a different print.',
      'Lightweight foam construction suited to all-day casual wear.',
      'Check size availability as print-specific styles can sell out in certain sizes first.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-15',
    badge: 'SAVE 30%',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0D9488]',
    color: '#0D9488',
    type: 'CLASSIC CLOGS',
    title: 'Save 30% on InMotion Clog',
    description: 'Get the InMotion Clog for ₹5,247 instead of ₹7,495.\nEnjoy 30% OFF on your purchase.\nBuilt for long-lasting comfort.\nSuitable for everyday use.',
    points: [
      'Part of the premium InMotion range, positioned above the Classic clog line.',
      'Built with enhanced cushioning technology for longer daily wear.',
      'Suitable for both casual outings and extended periods on your feet.',
      'Check colourway and size availability as InMotion styles have a narrower size range than Classics.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-16',
    badge: 'SAVE 30%',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0D9488]',
    color: '#0D9488',
    type: 'ECHO CLOG',
    title: 'Save 30% on Echo Gum RO Clog',
    description: 'Buy the Echo Gum RO Clog for ₹5,597 instead of ₹7,995.\nSave 30% instantly.\nExtra 5% OFF on prepaid orders.\nModern design with premium comfort.',
    points: [
      'Gum RO colourway is a specific limited variant within the Echo line.',
      'Extra 5% off applies only to prepaid (online) orders.',
      'Premium comfort positioning places this above the basic Echo Clog in price.',
      'Modern silhouette differs visually from the Classic clog shape.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-17',
    badge: 'SAVE 30%',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0D9488]',
    color: '#0D9488',
    type: 'WOMEN FOOTWEAR',
    title: "Save 30% on Women's Brooklyn Flip",
    description: "Get the Women's Brooklyn Flip for ₹3,847 instead of ₹5,495.\nEnjoy 30% OFF instantly.\nExtra 5% OFF on prepaid payments.\nLightweight and stylish for everyday wear.",
    points: [
      'Women\'s-specific sizing and fit — check the size chart before ordering.',
      'Extra 5% off applies only on prepaid payments, not cash on delivery.',
      'Flip-flop style suited to casual, warm-weather daily wear.',
      'Lighter construction compared to the full clog styles in the Brooklyn line.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-18',
    badge: 'SAVE 30%',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0D9488]',
    color: '#0D9488',
    type: 'FLIP-FLOPS',
    title: 'Save 30% on Miami Flip',
    description: 'Buy the Miami Flip for ₹2,447 instead of ₹3,495.\nSave 30% on your order.\nPay upfront online and get 5% knocked off your bill.\nComfortable flip-flops for daily wear.',
    points: [
      'One of the more budget-friendly flip-flop options in the Crocs lineup.',
      'Extra 5% discount is specific to upfront online payment, not cash on delivery.',
      'Unisex sizing is typically available — check the specific listing for details.',
      'Lightweight build suited to daily, casual outdoor wear.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-19',
    badge: 'SAVE 30%',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0D9488]',
    color: '#0D9488',
    type: 'WOMEN FOOTWEAR',
    title: "Save 30% on Women's Miami Thong Flip",
    description: "Get the Women's Miami Thong Flip for ₹2,797 instead of ₹3,995.\nEnjoy 30% OFF instantly.\nExtra 5% OFF on prepaid orders.\nStylish and lightweight footwear.",
    points: [
      'Thong-strap variant of the Miami Flip, designed specifically for women\'s sizing.',
      'Extra 5% off applies only to prepaid orders at checkout.',
      'Lightweight construction suited to daily casual wear.',
      'Check the size chart as thong-style fit can differ slightly from standard flip styles.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-20',
    badge: 'SAVE 20%',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#00A19A]',
    color: '#00A19A',
    type: 'ECHO CLOG',
    title: 'Save 20% on Echo Wave Clog',
    description: 'Buy the Echo Wave Clog for ₹6,396 instead of ₹7,995.\nSave 20% on your purchase.\nExtra 5% OFF available on prepaid orders.\nPremium comfort with a modern design.',
    points: [
      'Wave sole design is a distinct variant within the premium Echo line.',
      'Extra 5% off is available specifically on prepaid (online) orders.',
      'Positioned at the higher end of the Crocs price range for added comfort tech.',
      'Modern aesthetic differs from the classic rounded clog silhouette.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  },
  {
    id: 'coupon-21',
    badge: 'EXTRA 10% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#FF5722]',
    color: '#FF5722',
    type: 'PREPAID OFFER',
    title: 'Save Extra 10% on Selected Crocs Styles',
    description: "Buy selected Crocs styles like Classic Ballet and Women's Saturday Platform Sandal.\nUse code PREPAID10 to get an extra 10% OFF.\nValid on eligible prepaid orders.\nLimited-time online offer",
    points: [
      'Limited to specific styles like Classic Ballet and the Women\'s Saturday Platform Sandal — not sitewide.',
      'Code PREPAID10 must be applied manually at checkout.',
      'Only valid on prepaid (online) orders, not cash on delivery.',
      'This is a limited-time offer and may not be available indefinitely.'
    ],
    code: 'PREPAID10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Jun 2026'
  }
];
