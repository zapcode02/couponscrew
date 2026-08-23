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
}

export const AJIO_COUPONS: Coupon[] = [
    {
      id: 'coupon-1',
      badge: 'UP TO 60% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#2B2B2B]',
      color: '#2B2B2B',
      type: 'CLOTHING',
      title: 'Get up to 60% off on men\'s and women\'s clothing',
      description: 'Shop a wide range of men\'s and women\'s clothing across top brands at up to 60% OFF.',
      code: 'AJIO60',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-2',
      badge: 'EXTRA 15% OFF',
      badgeType: 'PERCENT',
      badgeColor: 'bg-[#D9534F]',
      color: '#D9534F',
      type: 'FOOTWEAR',
      title: 'Extra 15% off on footwear for men and women',
      description: 'Apply this code to get an extra 15% off on a wide selection of footwear styles.',
      code: 'AJIOSHOE15',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-3',
      badge: 'UP TO 50% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#2B2B2B]',
      color: '#2B2B2B',
      type: 'ACCESSORIES',
      title: 'Get up to 50% off on bags, watches & accessories',
      description: 'Discover deals on bags, watches, sunglasses and other accessories at up to 50% OFF.',
      code: '',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-4',
      badge: 'UP TO 70% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#D9534F]',
      color: '#D9534F',
      type: 'ETHNIC WEAR',
      title: 'Get up to 70% off on ethnic wear collections',
      description: 'Shop kurtas, sarees, and ethnic sets from a range of brands at up to 70% OFF.',
      code: '',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-5',
      badge: 'FLAT 20% OFF',
      badgeType: 'FLAT',
      badgeColor: 'bg-[#2B2B2B]',
      color: '#2B2B2B',
      type: 'SITEWIDE',
      title: 'Flat 20% off on your first order sitewide',
      description: 'New users can enjoy a flat 20% discount on their first order across most categories.',
      code: 'AJIONEW20',
      verified: 'Verified',
      userType: 'New Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-6',
      badge: 'UP TO 40% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#D9534F]',
      color: '#D9534F',
      type: 'CLOTHING',
      title: 'Get up to 40% off on kids\' clothing and accessories',
      description: 'Browse a variety of kidswear and accessories with discounts of up to 40% OFF.',
      code: '',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-7',
      badge: 'EXTRA 10% OFF',
      badgeType: 'PERCENT',
      badgeColor: 'bg-[#2B2B2B]',
      color: '#2B2B2B',
      type: 'FOOTWEAR',
      title: 'Extra 10% off on sneakers and sports shoes',
      description: 'Use this code for an additional 10% off on selected sneakers and sports shoe styles.',
      code: 'AJIOSTEP10',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-8',
      badge: 'UP TO 55% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#D9534F]',
      color: '#D9534F',
      type: 'ACCESSORIES',
      title: 'Get up to 55% off on jewellery and fashion accessories',
      description: 'Shop earrings, necklaces and other fashion accessories at up to 55% OFF.',
      code: '',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-9',
      badge: 'UP TO 65% OFF',
      badgeType: 'UP TO',
      badgeColor: 'bg-[#2B2B2B]',
      color: '#2B2B2B',
      type: 'SITEWIDE',
      title: 'Sitewide sale — up to 65% off across fashion categories',
      description: 'Enjoy discounts of up to 65% across clothing, footwear, and accessories sitewide.',
      code: '',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    },
    {
      id: 'coupon-10',
      badge: 'FLAT ₹500 OFF',
      badgeType: 'FLAT',
      badgeColor: 'bg-[#D9534F]',
      color: '#D9534F',
      type: 'ETHNIC WEAR',
      title: 'Flat ₹500 off on ethnic wear orders above ₹2,499',
      description: 'Get a flat ₹500 discount on ethnic wear orders when your cart value crosses ₹2,499.',
      code: 'AJIOETHNIC500',
      verified: 'Verified',
      userType: 'All Users',
      validTill: '30 Jun 2026'
    }
  ];
