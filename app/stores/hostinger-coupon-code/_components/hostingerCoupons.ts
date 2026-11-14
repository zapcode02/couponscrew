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

export const HOSTINGER_COUPONS: Coupon[] = [
  {
    id: 'coupon-1',
    badge: 'UP TO 93% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#673DE6]',
    color: '#673DE6',
    type: 'WEB HOSTING',
    title: 'Save Up to 93% on Hostinger Web Hosting — Free Domain + 3 Extra Months',
    description: 'Get up to 83% off on Hostinger web hosting plans plus an extra 10% off with the coupon code — includes a free domain and 3 bonus months on eligible plans.',
    points: [
      'Extra 10% off requires applying code HOSTCC10 at checkout, on top of the base 83% discount.',
      'Free domain and 3 bonus months are limited to eligible longer-term plans.',
      'Check the exact plan tier (Premium, Business, Cloud) for feature differences before committing.',
      'Renewal pricing reverts to standard rates after the discounted term ends.'
    ],
    code: 'HOSTCC10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-2',
    badge: 'UP TO 87% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0F2137]',
    color: '#0F2137',
    type: 'DOMAINS',
    title: 'Register Your Domain at Up to 87% OFF + Extra 10% with Coupon',
    description: 'Search and buy your ideal domain name on Hostinger at up to 87% off — apply the coupon code at checkout for an additional 10% saving on top.',
    points: [
      'Discount varies by domain extension — popular TLDs (.com, .in) may have different pricing than niche extensions.',
      'Code HOSTDOMAIN must be applied at checkout for the extra 10%.',
      'First-year pricing only — renewal rates are typically higher.',
      'Check domain availability before relying on a specific name for the discount.'
    ],
    code: 'HOSTDOMAIN',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-3',
    badge: 'UP TO 95% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#673DE6]',
    color: '#673DE6',
    type: 'DOMAINS',
    title: 'Register a Domain at Up to 95% OFF — Free Privacy Protection Included',
    description: 'Choose from the most popular domain extensions and save up to 95% on your first-year registration — free WHOIS privacy protection included on every eligible domain.',
    points: [
      'WHOIS privacy protection is bundled in at no extra cost, hiding your personal registration details publicly.',
      'Discount applies to first-year registration only — renewal pricing differs.',
      'Covers popular extensions, not every TLD Hostinger offers.',
      'No code needed — discount is pre-applied in the domain search results.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-4',
    badge: 'UP TO 83% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0F2137]',
    color: '#0F2137',
    type: 'WEB HOSTING',
    title: 'Hostinger 48-Month Plan — Up to 83% OFF + Extra 15% with Coupon',
    description: "Lock in Hostinger's longest-term hosting plan and save up to 83% — use the coupon code at checkout to stack an extra 15% off on top.",
    points: [
      'Requires committing to the full 48-month term upfront to get this pricing tier.',
      'Code HOSTSALE unlocks the extra 15% on top of the base discount.',
      'Longest-term plans typically offer the steepest per-month savings, but less flexibility to switch later.',
      'Check the refund policy in case your hosting needs change within the term.'
    ],
    code: 'HOSTSALE',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-5',
    badge: 'SPECIAL DEAL',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#673DE6]',
    color: '#673DE6',
    type: 'DOMAINS',
    title: 'Get a .in Domain for Just ₹1 in Your First Year + Extra 10% OFF',
    description: 'Register a .in domain with a 3-year plan and pay just ₹1 for the first year — apply the coupon code at checkout for an additional 10% off.',
    points: [
      'The ₹1 price requires committing to a 3-year registration plan, not a single year.',
      'Extra 10% off applies to the years 2 and 3 pricing with code HOSTDOMAIN.',
      'Limited to .in domain extension specifically.',
      'Check domain renewal pricing for year 4 onward before committing long-term.'
    ],
    code: 'HOSTDOMAIN',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-6',
    badge: 'FREE HOSTING',
    badgeType: 'FREE',
    badgeColor: 'bg-[#0F2137]',
    color: '#0F2137',
    type: 'DOMAINS',
    title: 'Buy a .tech/.org/.net/.io/.ai Domain for 2+ Years — Get 1 Month Hosting FREE + 10% OFF',
    description: 'Purchase a premium domain extension for 2 or more years on Hostinger and get one month of web hosting absolutely free — plus an extra 10% off with the coupon code.',
    points: [
      'Requires a 2-year minimum domain registration term to qualify for the free hosting month.',
      'Limited to the listed extensions: .tech, .org, .net, .io, .ai.',
      'Code HOSTFREEHOST unlocks the extra 10% off alongside the free hosting.',
      'The free hosting month is a trial — check what plan it auto-renews into after expiry.'
    ],
    code: 'HOSTFREEHOST',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-7',
    badge: '83% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#673DE6]',
    color: '#673DE6',
    type: 'WEB HOSTING',
    title: 'Hostinger Hosting — 83% OFF + Extra 10% + 3 Free Months on 4-Year Plans',
    description: 'Sign up for a 4-year Hostinger hosting plan and save 83% upfront — apply the coupon code for an extra 10% off with 3 additional months free on the 48-month plan.',
    points: [
      'Limited to the 4-year (48-month) plan specifically — shorter terms get different pricing.',
      'Code HOSTCC10 unlocks the extra 10% off and the 3 bonus months together.',
      '83% savings is calculated against the standard monthly rate, not a guaranteed flat price.',
      'Longest commitment on this list — check cancellation terms before committing.'
    ],
    code: 'HOSTCC10',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-8',
    badge: 'UP TO 83% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0F2137]',
    color: '#0F2137',
    type: 'WEB HOSTING',
    title: 'Hostinger Hosting — Up to 83% OFF + Extra 12% with Coupon Code',
    description: 'Save up to 83% across all Hostinger hosting plans — web, VPS, cloud, and WordPress — and stack an extra 12% off by applying the coupon code at checkout.',
    points: [
      'Applies broadly across web, VPS, cloud, and WordPress hosting categories.',
      'Code VIRTUAL12 unlocks the extra 12% on top of the base plan discount.',
      'Discount percentage still varies by plan tier and term length within these categories.',
      'Good general-purpose code when comparing across multiple hosting types.'
    ],
    code: 'VIRTUAL12',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-9',
    badge: 'UP TO 83% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#673DE6]',
    color: '#673DE6',
    type: 'WEB HOSTING',
    title: 'Hostinger Web Hosting from ₹69/Month — Up to 83% OFF on Long-Term Plans',
    description: 'Get Hostinger web hosting starting at just ₹69/month (regular price ₹399) on 24 or 48-month plans — with an extra 15% off on those longer-term subscriptions.',
    points: [
      '₹69/month pricing is tied to the 24 or 48-month term, not shorter plans.',
      'Code HASPECIAL unlocks the extra 15% off these longer-term subscriptions.',
      'Regular price of ₹399/month applies once the discounted term renews.',
      'Confirm your website\'s needs match the base plan before locking into a long term.'
    ],
    code: 'HASPECIAL',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-10',
    badge: 'FREE EMAIL',
    badgeType: 'FREE',
    badgeColor: 'bg-[#0F2137]',
    color: '#0F2137',
    type: 'EMAIL HOSTING',
    title: 'Buy a 2-Year Domain on Hostinger — Get 1 Year of Free Email + 10% OFF',
    description: 'Register a .ai, .io, .net or .org domain for 2 or more years on Hostinger and get a full year of free email hosting — apply the coupon code for an extra 10% off.',
    points: [
      'Requires a 2-year minimum domain term and is limited to .ai, .io, .net, or .org extensions.',
      'Free email hosting lasts one year — check renewal pricing after that period.',
      'Code HOSTEMAIL unlocks the extra 10% off alongside the free email year.',
      'Good option if you need professional email tied to a new domain.'
    ],
    code: 'HOSTEMAIL',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-11',
    badge: 'UP TO 15% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#673DE6]',
    color: '#673DE6',
    type: 'WEB HOSTING',
    title: 'Student Discount — Up to 15% OFF on All Hostinger Hosting Plans',
    description: 'Students can save up to 15% on any Hostinger hosting plan — an exclusive discount with a 30-day money-back guarantee on all eligible plans.',
    points: [
      'Requires valid student verification to redeem code STUDENT15.',
      '30-day money-back guarantee applies on top of the student discount.',
      'Applies across any Hostinger hosting plan, not restricted to one tier.',
      'Good entry point for students building a first portfolio or project site.'
    ],
    code: 'STUDENT15',
    verified: 'Verified',
    userType: 'New Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-12',
    badge: 'UP TO 82% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0F2137]',
    color: '#0F2137',
    type: 'CLOUD HOSTING',
    title: 'Hostinger Cloud Hosting — Up to 65% OFF + Extra 17% with Coupon + 3 Free Months',
    description: "Scale your website with Hostinger's cloud hosting and save up to 65% — apply the coupon code for an extra 17% off, with 3 bonus months on eligible plans.",
    points: [
      'Cloud hosting is positioned for higher-traffic sites than shared web hosting.',
      'Code CLOUD17 unlocks the extra 17% off plus 3 bonus months on eligible plans.',
      'Discount tier and bonus months may vary by cloud plan size.',
      'Consider your expected traffic growth before choosing between cloud and shared hosting.'
    ],
    code: 'CLOUD17',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-13',
    badge: 'UP TO 93% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#673DE6]',
    color: '#673DE6',
    type: 'WORDPRESS HOSTING',
    title: 'Hostinger WordPress Hosting — Up to 83% OFF + Extra 10% + 3 Free Months',
    description: 'Launch or migrate your WordPress site on Hostinger and save up to 83% — apply the coupon code for an extra 10% off and get 3 bonus months on eligible plans.',
    points: [
      'Optimized specifically for WordPress — check if a migration service is included for existing sites.',
      'Code HOSTWP unlocks the extra 10% off plus 3 bonus months on eligible plans.',
      'Pre-installed WordPress setup can save time compared to generic shared hosting.',
      'Check plugin and resource limits on the specific tier before committing.'
    ],
    code: 'HOSTWP',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-14',
    badge: 'UP TO 79% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0F2137]',
    color: '#0F2137',
    type: 'VPS',
    title: 'Hostinger VPS Hosting — Up to 69% OFF + Extra 10% on KVM Plans',
    description: 'Get full root access VPS hosting on Hostinger at up to 69% off — apply the coupon code for an extra 10% saving across KVM1 to KVM8 plans.',
    points: [
      'Full root access gives more control than shared hosting, but requires more technical setup.',
      'Code HOSTVPS unlocks the extra 10% across KVM1 through KVM8 tiers.',
      'KVM plan numbers correspond to increasing resource allocation (CPU, RAM, storage).',
      'Best suited for users comfortable managing server configuration themselves.'
    ],
    code: 'HOSTVPS',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-15',
    badge: 'EXTRA 12% OFF',
    badgeType: 'PERCENT',
    badgeColor: 'bg-[#673DE6]',
    color: '#673DE6',
    type: 'CLOUD HOSTING',
    title: 'Hostinger Cloud Hosting — Extra 12% OFF + Free Domain, SSL & Email',
    description: "Save an extra 12% on Hostinger's cloud hosting plans — packed with features including free domain, unlimited SSL, CDN, and dedicated IP at no added cost.",
    points: [
      'Free domain, unlimited SSL, CDN, and dedicated IP are bundled into the plan at no extra charge.',
      'Code CLOUD12 unlocks the extra 12% off on top of the base plan pricing.',
      'Dedicated IP can matter for specific hosting needs like email deliverability.',
      'Compare against the other cloud hosting deal on this list for the better overall rate.'
    ],
    code: 'CLOUD12',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-16',
    badge: 'UP TO 75% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#0F2137]',
    color: '#0F2137',
    type: 'CLOUD HOSTING',
    title: 'Hostinger Cloud Hosting — Up to 65% OFF + Extra 10% + 3 Free Months',
    description: 'Power your website with Hostinger cloud hosting and save up to 65% — use the coupon code for an additional 10% off with 3 bonus months on 48-month plans.',
    points: [
      '3 bonus months are tied specifically to the 48-month plan commitment.',
      'Code HOSTCLOUD unlocks the extra 10% off alongside the bonus months.',
      'A separate cloud hosting deal (CLOUD17) on this list offers more bonus — compare both before choosing.',
      'Check resource limits (CPU, RAM) for the specific cloud tier before committing.'
    ],
    code: 'HOSTCLOUD',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-17',
    badge: 'UP TO 53% OFF',
    badgeType: 'UP TO',
    badgeColor: 'bg-[#673DE6]',
    color: '#673DE6',
    type: 'WEB HOSTING',
    title: 'Hostinger Horizons AI Website Builder — Up to 53% OFF on All Plans',
    description: "Build and launch a website using Hostinger's AI-powered Horizons builder — save up to 43% upfront and stack an extra 10% off with the coupon code.",
    points: [
      'Horizons is Hostinger\'s AI-assisted site builder, separate from traditional hosting plans.',
      'Code HOSTHORIZONS unlocks the extra 10% on top of the base 43% discount.',
      'Best suited for quick-launch sites rather than complex custom builds.',
      'Check feature limits on lower tiers before assuming full AI builder functionality.'
    ],
    code: 'HOSTHORIZONS',
    verified: 'Verified',
    userType: 'All Users',
    validTill: '30 Nov 2026'
  },
  {
    id: 'coupon-18',
    badge: 'RENEWAL DEAL',
    badgeType: 'FLAT',
    badgeColor: 'bg-[#0F2137]',
    color: '#0F2137',
    type: 'WEB HOSTING',
    title: 'Renew Your Hostinger Web Hosting — Plans Starting from ₹289/Month',
    description: 'Existing Hostinger users can renew their web hosting plans starting from ₹289/month — no coupon code needed, discount pre-applied on renewal.',
    points: [
      'Limited to existing Hostinger customers renewing an active plan, not new sign-ups.',
      'No code needed — the discounted rate is shown directly at renewal.',
      '₹289/month is the entry-level renewal rate; higher tiers cost more.',
      'Worth comparing against new-customer deals to see which route is cheaper overall.'
    ],
    code: '',
    verified: 'Verified',
    userType: 'Existing Users',
    validTill: '30 Nov 2026'
  }
];
