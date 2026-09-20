'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../../../src/components/Navbar';
import Footer from '../../../src/components/Footer';
import {
  LayoutGrid,
  Store,
  Tag,
  Landmark,
  Sparkles,
  ShoppingBag,
  Percent,
  MapPin,
  BookOpen,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Crown,
  RefreshCw,
  Gift,
  Play,
  CreditCard,
  Layers,
  Calendar,
  Search,
  Plus,
  Minus,
  CheckCircle2,
  Mail,
  Zap,
  Star,
  Flame,
  Award,
  Globe
} from 'lucide-react';

// ============================================================================
// SVG ARTWORK & ILLUSTRATIONS COMPONENTS
// ============================================================================

// Hero 3D Festive Shopping Box Illustration
const Hero3DFestiveGraphic = () => (
  <div className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center">
    {/* Glowing background halo */}
    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-orange-400/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse" />

    {/* Main Card Container */}
    <div className="relative z-10 w-full bg-gradient-to-b from-white/90 to-purple-50/80 backdrop-blur-md p-6 rounded-3xl border border-purple-100 shadow-2xl space-y-5 overflow-hidden">

      {/* Top Banner Tag */}
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-extrabold text-xs tracking-wider px-4 py-1.5 rounded-full shadow-md uppercase">
        <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-spin" style={{ animationDuration: '4s' }} />
        BIG SAVINGS BIGGER CELEBRATIONS
      </div>

      {/* Central 3D Box Artwork */}
      <div className="relative py-4 flex items-center justify-center">
        {/* Floating 3D Gift Box SVG */}
        <svg viewBox="0 0 240 180" className="w-56 h-44 drop-shadow-xl">
          <defs>
            <linearGradient id="boxBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7D64EE" />
              <stop offset="100%" stopColor="#4F38B9" />
            </linearGradient>
            <linearGradient id="boxLid" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9580FF" />
              <stop offset="100%" stopColor="#674DE0" />
            </linearGradient>
            <linearGradient id="ribbonGold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#FF9900" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Shadow beneath */}
          <ellipse cx="120" cy="165" rx="70" ry="12" fill="#000" fillOpacity="0.12" />

          {/* Main Gift Box Base */}
          <path d="M60 90 L120 120 L180 90 L180 150 L120 175 L60 150 Z" fill="url(#boxBody)" />
          {/* Box Highlight Side */}
          <path d="M120 120 L180 90 L180 150 L120 175 Z" fill="#3D299E" fillOpacity="0.3" />

          {/* Lid */}
          <path d="M50 75 L120 105 L190 75 L120 45 Z" fill="url(#boxLid)" />
          <path d="M50 75 L120 105 L120 115 L50 85 Z" fill="#674DE0" />
          <path d="M120 105 L190 75 L190 85 L120 115 Z" fill="#5037C0" />

          {/* Gold Ribbons */}
          <path d="M108 49 L108 109 L120 115 L120 54 Z" fill="url(#ribbonGold)" />
          <path d="M132 55 L132 111 L120 115 L120 54 Z" fill="#E68A00" />
          <path d="M72 65 L168 102 L168 96 L72 59 Z" fill="url(#ribbonGold)" />

          {/* Bow on Top */}
          <path d="M120 45 Q90 20 110 38 Q120 45 120 45 Q120 45 130 38 Q150 20 120 45 Z" fill="url(#ribbonGold)" />
          <circle cx="120" cy="45" r="7" fill="#FFD700" />

          {/* Bursting 3D Percentage & Coin Elements */}
          <g transform="translate(30, 25)">
            <circle cx="15" cy="15" r="14" fill="#FF6B00" filter="url(#glow)" />
            <text x="15" y="20" textAnchor="middle" fill="#FFF" fontWeight="bold" fontSize="13 font-mono">%</text>
          </g>
          <g transform="translate(170, 20)">
            <circle cx="15" cy="15" r="16" fill="#FFD700" />
            <text x="15" y="21" textAnchor="middle" fill="#7A4D00" fontWeight="extrabold" fontSize="15 font-mono">₹</text>
          </g>
          <g transform="translate(160, 110)">
            <rect x="0" y="0" width="40" height="40" rx="10" fill="#FF5500" transform="rotate(15)" />
            <text x="18" y="26" textAnchor="middle" fill="#FFF" fontWeight="bold" fontSize="16" transform="rotate(15)">%</text>
          </g>
          <g transform="translate(20, 110)">
            <circle cx="15" cy="15" r="12" fill="#5B4FBE" />
            <text x="15" y="20" textAnchor="middle" fill="#FFF" fontWeight="bold" fontSize="12">OFF</text>
          </g>
        </svg>
      </div>

      {/* Card Footer Tag */}
      <div className="bg-gradient-to-r from-purple-100/80 to-orange-100/80 p-3.5 rounded-2xl flex items-center justify-between text-xs border border-purple-100">
        <div className="flex items-center gap-2 font-bold text-gray-800">
          <div className="w-7 h-7 rounded-lg bg-[#5B4FBE] text-white flex items-center justify-center font-black">
            C
          </div>
          <div>
            <div className="text-gray-900 leading-tight">CouponsCrew</div>
            <div className="text-[10px] text-gray-500 font-medium">Your Festival Shopping Partner</div>
          </div>
        </div>
        <span className="bg-[#5B4FBE] text-white font-extrabold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider">
          VERIFIED
        </span>
      </div>

    </div>
  </div>
);

// Brand Logos Helper Component
const BrandLogoIcon = ({ brand }: { brand: string }) => {
  switch (brand) {
    case 'amazon':
      return (
        <div className="font-black text-xl tracking-tighter text-black flex items-center">
          amazon<span className="text-[#FF9900] text-lg font-bold">.in</span>
        </div>
      );
    case 'flipkart':
      return (
        <div className="font-extrabold text-xl text-[#2874F0] italic tracking-tight flex items-center gap-1">
          Flipkart <span className="bg-[#FFE500] text-[#2874F0] font-black text-xs px-1 rounded not-italic">plus</span>
        </div>
      );
    case 'myntra':
      return (
        <div className="font-black text-xl tracking-tight text-[#E42529] flex items-center">
          M<span className="text-[#F44336]">y</span>ntra
        </div>
      );
    case 'ajio':
      return (
        <div className="font-black text-xl tracking-widest text-[#111827]">
          AJIO
        </div>
      );
    case 'nykaa':
      return (
        <div className="font-black text-xl tracking-tight text-[#FC2779] italic">
          NYKAA
        </div>
      );
    case 'makemytrip':
      return (
        <div className="font-extrabold text-lg tracking-tight text-[#EB2026] flex items-center">
          make<span className="bg-[#EB2026] text-white px-1 rounded mx-0.5">my</span>trip
        </div>
      );
    default:
      return <div className="font-bold text-lg">{brand}</div>;
  }
};

// ============================================================================
// DATA STRUCTURES
// ============================================================================

const SIDEBAR_ITEMS = [
  { name: 'Categories', icon: LayoutGrid, href: '/stores/categories' },
  { name: 'Stores', icon: Store, href: '/stores' },
  { name: 'Product Deals', icon: ShoppingBag, href: '/products' },
  { name: 'Blog', icon: BookOpen, href: '/blog' },
];

// date: 'YYYY-MM-DD' for 2026, or null for recurring shopping-sale events with no fixed calendar date.
// country: 'India' | 'US' | 'Both' — used by the hidden auto-detected country filter.
const POPULAR_FESTIVALS = [
  { id: 'labor-day', title: 'Labor Day', image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789519968/Happy_labour_day_hj8rxy.webp', date: '2026-09-07', country: 'US' },
  { id: 'halloween', title: 'Halloween', image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789519912/Hppy_Halloween_tpsqoj.webp', date: '2026-10-31', country: 'US' },
  { id: 'veterans-day', title: 'Veterans Day', image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789519968/happ_veternes_day_sirgwu.webp', date: '2026-11-11', country: 'US' },
  { id: 'thanksgiving', title: 'Thanksgiving', image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789519912/Happy_Thanks_Giving_r7konq.webp', date: '2026-11-26', country: 'US' },
  { id: 'black-friday', title: 'Black Friday', image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789520347/Black_Friday_p6toz8.webp', date: '2026-11-27', country: 'US' },
  { id: 'cyber-monday', title: 'Cyber Monday', image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789520269/Cyber_Monday_xeqgei.webp', date: '2026-11-30', country: 'US' },
  { id: 'super-saturday', title: 'Super Saturday', image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789519968/super_satruday_q4c878.webp', date: '2026-12-19', country: 'US' },
  { id: 'valentines-day', title: "Valentine's Day", image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789520336/Valentine_s_Day_o83qso.webp', date: '2026-02-14', country: 'Both' },
  { id: 'new-year', title: 'New Year', image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789520336/New_Year_rltuzu.webp', date: '2026-01-01', country: 'Both' },
  { id: 'christmas', title: 'Christmas', image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789520281/Christmas_xazhks.webp', date: '2026-12-25', country: 'Both' },
  { id: 'womens-day', title: "Women's Day", image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789520142/Mother_s_Day_oeupem.webp', date: '2026-03-08', country: 'Both' },
  { id: 'mlk-day', title: 'MLK Day', image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789519912/Happy_MLK_Day_hx26ee.webp', date: '2026-01-19', country: 'US' },
  { id: 'st-patricks-day', title: "St. Patrick's Day", image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789519967/happy_st_parker_day_bv29ck.webp', date: '2026-03-17', country: 'US' },
  { id: 'easter', title: 'Easter', image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789519911/happy_Easter_day_fqjptz.webp', date: '2026-04-05', country: 'Both' },
  { id: 'mothers-day', title: "Mother's Day", image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789520458/mother_day_ahtz90.webp', date: '2026-05-10', country: 'Both' },
  { id: 'memorial-day', title: 'Memorial Day', image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789520024/happy_memorial_day_ausuha.webp', date: '2026-05-25', country: 'US' },
  { id: 'fathers-day', title: "Father's Day", image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789520141/Father_s_Day_er9cbu.webp', date: '2026-06-21', country: 'Both' },
  { id: '4th-of-july', title: '4th of July', image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789519968/happy_4th_july_a7haml.webp', date: '2026-07-04', country: 'US' },
  { id: 'friendship-day', title: 'Friendship Day', image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789520024/Friendship_Day_bm26sh.webp', date: '2026-08-02', country: 'Both' },
  { id: 'back-to-school', title: 'Back to School', image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789520209/back_to_school_yruetn.webp', date: '2026-08-15', country: 'Both' },
  { id: 'ganesh-chaturthi', title: 'Ganesh Chaturthi', image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789520330/Ganesh_Chaturthi_dgmtzk.webp', date: '2026-09-14', country: 'India' },
  { id: 'amazon-great-indian-sale', title: 'Amazon Great Indian Sale', image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789520349/Amazon_Great_Indian_Sale_qlyees.webp', date: null, country: 'India' },
  { id: 'flipkart-big-billion-day-sale', title: 'Flipkart Big Billion Day Sale', image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789520348/Flipkart_Big_Billion_Day_Sale_xsd13s.webp', date: null, country: 'India' },
  { id: 'dussehra', title: 'Dussehra', image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789520347/Dussehra_ynmbks.webp', date: '2026-10-20', country: 'India' },
  { id: 'flash-sale', title: 'Flash Sale', image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789520276/Flash_Sale_jl94yd.webp', date: null, country: 'Both' },
  { id: 'ugadi', title: 'Ugadi', image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789520276/Ugadi_v1jjlz.webp', date: '2026-03-19', country: 'India' },
  { id: 'omg-sale', title: 'OMG Sale', image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789520275/OMG_Sale_guxdvn.webp', date: null, country: 'India' },
  { id: 'diwali', title: 'Diwali', image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789520208/Diwali_u3o79f.webp', date: '2026-11-08', country: 'India' },
  { id: 'paytm-sale', title: 'Paytm Sale', image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789520210/Paytm_Sale_lyiwai.webp', date: null, country: 'India' },
  { id: 'childrens-day', title: "Children's Day", image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789520210/Children_s_Day_gdofwi.webp', date: '2026-11-14', country: 'India' },
  { id: 'pongal', title: 'Pongal', image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789520210/Pongal_bteo5o.webp', date: '2026-01-14', country: 'India' },
  { id: 'republic-day', title: 'Republic Day', image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789520795/repiblic_Day_obyc7y.webp', date: '2026-01-26', country: 'India' },
  { id: 'ramzan', title: 'Ramzan', image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789520143/Ramzan_fgof3i.webp', date: '2026-03-21', country: 'India' },
  { id: 'holi', title: 'Holi', image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789520141/Holi_wajmif.webp', date: '2026-03-04', country: 'India' },
  { id: 'amazon-prime-day', title: 'Amazon Prime Day', image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789520025/Amazon_Prime_Day_gfexjo.webp', date: null, country: 'Both' },
  { id: 'independence-day', title: 'Independence Day', image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789520026/Independence_Day_n26s4q.webp', date: '2026-08-15', country: 'India' },
  { id: 'onam', title: 'Onam', image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789520025/Onam_utol17.webp', date: '2026-08-26', country: 'India' },
  { id: 'raksha-bandhan', title: 'Raksha Bandhan', image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789519911/Raksha_Bandhan_wpscfy.webp', date: '2026-08-28', country: 'India' },
];

const WHY_SHOP_FEATURES = [
  {
    icon: ShieldCheck,
    iconBg: 'bg-blue-50 text-blue-600',
    title: 'Verified Coupons',
    desc: '100% manually tested before going live.'
  },
  {
    icon: Crown,
    iconBg: 'bg-orange-50 text-orange-600',
    title: 'Top Brands',
    desc: '500+ trusted brands across all categories.'
  },
  {
    icon: RefreshCw,
    iconBg: 'bg-indigo-50 text-indigo-600',
    title: 'Updated Daily',
    desc: 'Fresh deals and offers every single day.'
  },
  {
    icon: Gift,
    iconBg: 'bg-pink-50 text-pink-600',
    title: '100% Free',
    desc: 'No subscription or hidden charges.'
  }
];

const TOP_DEALS = [
  {
    id: 'deal-1',
    brand: 'amazon',
    saleTitle: 'Great Indian Festival',
    discount: 'Up to 80% OFF',
    subText: 'On Electronics & More'
  },
  {
    id: 'deal-2',
    brand: 'flipkart',
    saleTitle: 'Big Billion Days',
    discount: 'Up to 80% OFF',
    subText: 'On Fashion & Lifestyle'
  },
  {
    id: 'deal-3',
    brand: 'myntra',
    saleTitle: 'Big Fashion Festival',
    discount: 'Up to 70% OFF',
    subText: 'On Top Fashion Brands'
  },
  {
    id: 'deal-4',
    brand: 'ajio',
    saleTitle: 'Big Bold Sale',
    discount: 'Up to 70% OFF',
    subText: 'On Trendy Styles'
  },
  {
    id: 'deal-5',
    brand: 'nykaa',
    saleTitle: 'Pink Friday Sale',
    discount: 'Up to 60% OFF',
    subText: 'On Beauty Stylists'
  },
  {
    id: 'deal-6',
    brand: 'makemytrip',
    saleTitle: 'Travel Fest',
    discount: 'Up to 40% OFF',
    subText: 'On Hotel Bookings'
  }
];

const SHOPPING_TIPS = [
  {
    icon: CreditCard,
    iconBg: 'bg-blue-50 text-blue-600',
    title: 'Use Bank Offers First',
    desc: 'Get extra discounts with HDFC, ICICI, SBI & more.'
  },
  {
    icon: Layers,
    iconBg: 'bg-emerald-50 text-emerald-600',
    title: 'Combine Multiple Offers',
    desc: 'Use coupons + bank offers + cashback for maximum savings.'
  },
  {
    icon: Calendar,
    iconBg: 'bg-purple-50 text-purple-600',
    title: 'Check Validity',
    desc: 'Always check the expiry date and terms before applying.'
  },
  {
    icon: Search,
    iconBg: 'bg-amber-50 text-amber-600',
    title: 'Compare Before You Buy',
    desc: 'Compare offers across multiple stores to get the best price.'
  }
];

const FAQS = [
  {
    q: 'What are festival offers?',
    a: 'Festival offers are exclusive promotional sales, discount codes, cashback deals, and bank instant discounts released by top retailers during major Indian festive seasons like Diwali, Dhanteras, Christmas, New Year, Holi, and Dussehra.'
  },
  {
    q: 'How often are festival offers updated on CouponsCrew?',
    a: 'Our deals team updates festival offers daily. Active deals, coupon codes, and bank discount programs are verified continuously to ensure you only see 100% active and working offers.'
  },
  {
    q: 'Are the coupon codes on CouponsCrew verified?',
    a: 'Yes, absolutely! Every coupon code and deal featured on CouponsCrew is manually verified by our team before going live on the site.'
  },
  {
    q: 'Can I use multiple offers together?',
    a: 'In many cases, yes! You can stack store-specific promo codes with eligible bank instant discounts (e.g. HDFC, ICICI, SBI card offers) and platform cashback to maximize your total savings.'
  }
];

// ============================================================================
// MAIN COMPONENT EXPORT
// ============================================================================

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

type FestivalStatus = 'live' | 'upcoming' | 'ended';

function getFestivalStatus(dateStr: string | null): FestivalStatus | null {
  if (!dateStr) return null;
  const today = new Date();
  const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const festivalDate = new Date(dateStr + 'T00:00:00');
  const diffDays = Math.round((festivalDate.getTime() - todayMidnight.getTime()) / (1000 * 60 * 60 * 24));
  if (diffDays >= -1 && diffDays <= 1) return 'live';
  return diffDays > 1 ? 'upcoming' : 'ended';
}

export default function FestivalOffers() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [sidebarEmail, setSidebarEmail] = useState('');
  const [bottomEmail, setBottomEmail] = useState('');
  const [sidebarSubscribed, setSidebarSubscribed] = useState(false);
  const [bottomSubscribed, setBottomSubscribed] = useState(false);

  // Festival filter bar state
  const [festivalSearch, setFestivalSearch] = useState('');
  const [selectedMonth, setSelectedMonth] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<'All' | FestivalStatus>('All');
  const [detectedCountry, setDetectedCountry] = useState<'India' | 'US'>('India');

  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const isIndia = tz === 'Asia/Calcutta' || tz === 'Asia/Kolkata';
      setDetectedCountry(isIndia ? 'India' : 'US');
    } catch {
      setDetectedCountry('India');
    }
  }, []);

  const filteredFestivals = POPULAR_FESTIVALS.filter((festival) => {
    // Hidden country filter — India sees everything, US sees only US/Both
    if (detectedCountry === 'US' && festival.country === 'India') return false;

    // Search filter
    if (festivalSearch.trim() && !festival.title.toLowerCase().includes(festivalSearch.trim().toLowerCase())) {
      return false;
    }

    // No-fixed-date shopping events only show when both Month and Status are at "All"
    if (!festival.date) {
      return selectedMonth === 'All' && selectedStatus === 'All';
    }

    // Month filter
    if (selectedMonth !== 'All') {
      const festivalMonth = MONTH_NAMES[new Date(festival.date + 'T00:00:00').getMonth()];
      if (festivalMonth !== selectedMonth) return false;
    }

    // Status filter
    if (selectedStatus !== 'All') {
      if (getFestivalStatus(festival.date) !== selectedStatus) return false;
    }

    return true;
  });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSidebarSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (sidebarEmail.trim()) {
      setSidebarSubscribed(true);
      setTimeout(() => setSidebarSubscribed(false), 4000);
      setSidebarEmail('');
    }
  };

  const handleBottomSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (bottomEmail.trim()) {
      setBottomSubscribed(true);
      setTimeout(() => setBottomSubscribed(false), 4000);
      setBottomEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F8FF] text-[#4A4A6A] font-sans antialiased selection:bg-[#5B4FBE] selection:text-white flex flex-col justify-between">
      {/* ── Top Header / Navbar ── */}
      <Navbar />

      {/* ── Main Workspace Area ── */}
      <main className="w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 flex-1 space-y-8">

        {/* ── Full Width Top Breadcrumb & Badge Navigation ── */}
        <div className="space-y-3 pb-2">
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-500">
            <Link href="/" className="hover:text-[#5B4FBE] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-gray-900 font-semibold">Festivals</span>
          </nav>
          <div>
            <span className="bg-[#EDE9FE] text-[#5B4FBE] font-extrabold text-[11px] uppercase tracking-wider px-3 py-1 rounded-full border border-purple-200 inline-flex items-center gap-1.5 shadow-xs">
              <Sparkles className="w-3 h-3 text-[#5B4FBE]" /> FESTIVAL OFFERS
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* ================================================================ */}
          {/* LEFT SIDEBAR NAVIGATION MENU                                    */}
          {/* ================================================================ */}
          <aside className="w-full lg:w-64 flex-shrink-0 space-y-6">

            {/* Nav Card */}
            <div className="bg-white rounded-2xl p-2.5 border border-gray-100 shadow-sm space-y-1">
              {SIDEBAR_ITEMS.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:bg-purple-50 hover:text-[#5B4FBE] font-medium rounded-xl px-4 py-3 flex items-center justify-between transition-colors text-sm group"
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className="w-4 h-4 text-gray-400 group-hover:text-[#5B4FBE] transition-colors" />
                      <span>{item.name}</span>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Sidebar Newsletter Widget */}
            <div className="bg-gradient-to-br from-[#F5F3FF] via-[#EDE9FE] to-[#F3E8FF] rounded-2xl p-5 border border-purple-100 shadow-sm text-center relative overflow-hidden space-y-3.5">
              {/* Decorative 3D Gift Box SVG Icon */}
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-white rounded-2xl shadow-md border border-purple-100 p-2">
                <Gift className="w-10 h-10 text-[#5B4FBE] animate-bounce" style={{ animationDuration: '3s' }} />
              </div>

              <div>
                <h3 className="font-extrabold text-gray-900 text-base leading-tight">
                  Never Miss a Festival Deal!
                </h3>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Get the latest offers, deals and updates directly in your inbox.
                </p>
              </div>

              {sidebarSubscribed ? (
                <div className="bg-emerald-50 text-emerald-700 font-bold text-xs p-3 rounded-xl border border-emerald-200 flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Subscribed successfully!
                </div>
              ) : (
                <form onSubmit={handleSidebarSubscribe} className="space-y-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={sidebarEmail}
                    onChange={(e) => setSidebarEmail(e.target.value)}
                    className="w-full bg-white text-gray-800 placeholder-gray-400 text-xs px-3.5 py-2.5 rounded-xl border border-purple-200 focus:outline-none focus:ring-2 focus:ring-[#5B4FBE]"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#5B4FBE] hover:bg-[#4a3ea3] active:scale-[0.98] text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

          </aside>

          {/* ================================================================ */}
          {/* RIGHT MAIN CONTENT PANEL                                         */}
          {/* ================================================================ */}
          <div className="flex-1 min-w-0 space-y-10">

            {/* ── Section 1: Popular Festival Offers ── */}
            <section id="popular-festivals" className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                    Popular Festival Offers
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    Explore the biggest shopping seasons with exclusive deals and offers.
                  </p>
                </div>
                
              </div>

              {/* Filter Bar: Search, Month, Status (Country filter runs silently in the background) */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={festivalSearch}
                    onChange={(e) => setFestivalSearch(e.target.value)}
                    placeholder="Search festivals..."
                    className="w-full bg-white border border-purple-100 rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4FBE] focus:border-transparent"
                  />
                </div>

                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="bg-white border border-purple-100 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#5B4FBE] cursor-pointer"
                >
                  <option value="All">All Months</option>
                  {MONTH_NAMES.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>

                <div className="flex items-center gap-1.5 bg-white border border-purple-100 rounded-xl p-1">
                  {([
                    { key: 'All', label: 'All' },
                    { key: 'live', label: '🔥 Live' },
                    { key: 'upcoming', label: '⏳ Upcoming' },
                    { key: 'ended', label: '✅ Ended' },
                  ] as const).map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => setSelectedStatus(opt.key)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap ${
                        selectedStatus === opt.key
                          ? 'bg-[#5B4FBE] text-white'
                          : 'text-gray-600 hover:bg-purple-50'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid of Festival Cards */}
              {filteredFestivals.length === 0 ? (
                <div className="bg-white rounded-2xl border border-purple-100 py-16 text-center text-sm text-gray-500">
                  No festivals match your filters. Try adjusting the search, month, or status.
                </div>
              ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredFestivals.map((item) => (
                  <div
                    key={item.id}
                    className="group bg-white rounded-2xl border border-purple-100 hover:border-purple-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
                  >
                    {/* Festival Image */}
                    <div className="w-full aspect-[4/3] overflow-hidden bg-purple-50">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="p-4 flex flex-col flex-1">
                      {/* Title */}
                      <h3 className="font-extrabold text-base text-gray-900 group-hover:text-[#5B4FBE] transition-colors text-center">
                        {item.title}
                      </h3>

                      {/* View Button */}
                      <Link
                        href={item.id === 'diwali' || item.title.toLowerCase().includes('diwali') ? '/festival-offers/diwali-offers' : '#'}
                        onClick={(e) => {
                          if (item.id !== 'diwali' && !item.title.toLowerCase().includes('diwali')) {
                            e.preventDefault();
                            alert(`Showing exclusive offers for ${item.title}`);
                          }
                        }}
                        className="w-full mt-4 py-2.5 px-4 rounded-xl font-bold text-xs border bg-purple-50 hover:bg-purple-100 text-purple-800 border-purple-200 transition-all flex items-center justify-center gap-1.5"
                      >
                        <span>View Offers</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              )}
            </section>



          </div>

        </div>

        {/* ================================================================ */}
        {/* FULL WIDTH SECTION: 2 COLUMNS (TABLE + POPULAR SEARCHES)         */}
        {/* ================================================================ */}
        <section className="bg-[#F8F8FF] py-16 px-6 border-t border-[#E8E8F0] font-sans">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-10">

    {/* LEFT - MAIN EDITORIAL CONTENT (70%) */}
    <div className="lg:col-span-7 space-y-10">

      {/* INTRO BLOCK */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
          <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Festival Offers &amp; Sale Season 2026</span>
        </div>
        <h1 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          India runs on sale seasons. A new festival, a new reason to save — and the brands know it.
        </h1>
        <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
          <p>
            This page tracks every major Indian and global shopping event of the year: from Diwali and Onam to Black Friday and Cyber Monday. Each festival listed below has its own dedicated deals page on CouponsCrew, updated before the sale goes live.
          </p>
          <p className="font-bold text-[#1A1A2E]">
            Bookmark this page if you plan purchases around sale windows — it is the fastest way to check what is coming next and which stores are running offers.
          </p>
        </div>
      </div>

      {/* INDIAN FESTIVAL SALES */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
          <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">Domestic Calendar</span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Indian Festival Sales
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          These are the sales most Indian shoppers plan purchases around. Dates shift slightly each year based on the Hindu calendar or brand schedules, so check each page closer to the event for confirmed dates and live codes.
        </p>

        <div className="space-y-4 mt-6">
          {[
            {
              icon: "🪔",
              title: "Diwali Sale",
              desc: "The biggest shopping window of the year. Flipkart, Amazon, Myntra, Zomato, and nearly every major brand run their heaviest discounts in the two weeks around Diwali. Electronics, fashion, home appliances, and groceries all see significant price drops. Banks typically run additional cashback on top of store discounts.",
              link: "Diwali Offers & Coupon Codes 2026"
            },
            {
              icon: "🛒",
              title: "Flipkart Big Billion Day Sale",
              desc: "Flipkart's flagship annual event — usually 5 to 7 days in October, timed just before Diwali. Electronics, mobiles, and fashion are the strongest categories. Flipkart Plus members and those with Axis or HDFC cards typically get early access.",
              link: "Flipkart Big Billion Day Sale Offers 2026"
            },
            {
              icon: "🛒",
              title: "Amazon Great Indian Sale",
              desc: "Amazon's answer to Big Billion Day runs in parallel or immediately after. Prime members get 30-minute early access. The sale spans multiple days and covers mobiles, laptops, household goods, and Amazon-exclusive brand deals.",
              link: "Amazon Great Indian Sale Offers 2026"
            },
            {
              icon: "🐘",
              title: "Ganesh Chaturthi Sale",
              desc: "Brands in Maharashtra, Goa, and Karnataka — plus national e-commerce players — run targeted offers around Ganesh Chaturthi. Food delivery apps, sweet shops, and home decor stores are particularly active during this window.",
              link: "Ganesh Chaturthi Offers 2026"
            },
            {
              icon: "⚔️",
              title: "Dussehra Sale",
              desc: "Dussehra marks the start of the festive season buying surge. Automobile dealers, electronics brands, and fashion labels all run pre-Diwali offers. Considered auspicious for new purchases — particularly vehicles and jewellery.",
              link: "Dussehra Offers & Deals 2026"
            },
            {
              icon: "🌸",
              title: "Holi Sale",
              desc: "Holi triggers deals on personal care, fashion (especially ethnic wear), and food. Online grocery platforms and beauty brands are the most active. The sale window is usually 3 to 5 days around the festival.",
              link: "Holi Offers & Coupon Codes 2026"
            },
            {
              icon: "🌾",
              title: "Onam Sale",
              desc: "Kerala's biggest festival drives deals across the state and nationally on platforms targeting South Indian buyers. Jewellery, sarees, home goods, and electronics are the dominant categories. Amazon and Flipkart run dedicated Onam storefronts.",
              link: "Onam Offers & Deals 2026"
            },
            {
              icon: "🎊",
              title: "Pongal Sale",
              desc: "South India's harvest festival — typically January. Brands in Tamil Nadu and Andhra Pradesh run significant in-store and online promotions. Gold, home appliances, and vehicles are the most purchased categories.",
              link: "Pongal Offers 2026"
            },
            {
              icon: "🌙",
              title: "Ramzan / Eid Sale",
              desc: "Food delivery, ethnic fashion, and home decor brands run Ramzan-period offers. Multiple brands release Eid collections with launch discounts. The sale window stretches through the month of Ramzan with Eid itself being the peak.",
              link: "Ramzan Offers & Deals 2026"
            },
            {
              icon: "🎽",
              title: "Raksha Bandhan Sale",
              desc: "Gifting is central to Raksha Bandhan — personalised gifts, sweets, fashion accessories, and electronics (particularly wearables) see strong discounts. Gift delivery platforms and jewellery brands are the most active.",
              link: "Raksha Bandhan Offers 2026"
            },
            {
              icon: "👶",
              title: "Children's Day Sale",
              desc: "November 14 in India. Toy brands, edtech platforms, kids' fashion, and book stores run promotions. Physics Wallah, Testbook, and learning apps typically offer discounted subscriptions around this date.",
              link: "Children's Day Offers 2026"
            },
            {
              icon: "🇮🇳",
              title: "Independence Day Sale",
              desc: "August 15. National retailers and e-commerce platforms run 'Freedom Sale' type events. Electronics and home appliances are commonly discounted. The sale often extends to a 3-day window.",
              link: "Independence Day Offers 2026"
            },
            {
              icon: "🇮🇳",
              title: "Republic Day Sale",
              desc: "January 26. Similar to Independence Day in structure — electronics and fashion-led discounts across major platforms. The Flipkart Republic Day Sale is one of the more predictable events of the early year.",
              link: "Republic Day Offers 2026"
            },
            {
              icon: "👫",
              title: "Friendship Day Sale",
              desc: "August — first Sunday. Gifting-led sale: personalised items, accessories, subscription apps, and food delivery offers. Smaller in scale than festive-season sales but active across D2C brands.",
              link: "Friendship Day Offers 2026"
            },
            {
              icon: "👩",
              title: "Women's Day Sale",
              desc: "March 8. Beauty, fashion, fitness, and wellness brands run the most aggressive offers. Platforms like Nykaa and Myntra typically launch dedicated Women's Day storefronts. Subscription services (OTT, learning apps) also discount around this date.",
              link: "Women's Day Offers 2026"
            },
            {
              icon: "👨",
              title: "Father's Day Sale",
              desc: "June — third Sunday. Gifting-led event: electronics (earphones, smartwatches), grooming products, and clothing. Smaller in scale than Mother's Day but growing year on year.",
              link: "Father's Day Offers 2026"
            },
            {
              icon: "👩‍👧",
              title: "Mother's Day Sale",
              desc: "May — second Sunday. One of the biggest gifting events after Diwali and Raksha Bandhan for flower delivery, jewellery, and personalised gift platforms.",
              link: "Mother's Day Offers 2026"
            },
            {
              icon: "💕",
              title: "Valentine's Day Sale",
              desc: "February 14. Gifting, dining, travel, and fashion-led discounts. Hotel booking platforms, flower delivery services, and jewellery brands run the heaviest promotions. The sale typically runs Valentine's Week — February 7 to 14.",
              link: "Valentine's Day Offers 2026"
            },
            {
              icon: "🌾",
              title: "Ugadi Sale",
              desc: "New Year for Karnataka, Andhra Pradesh, and Telangana — March or April. Regional brands and national platforms targeting South Indian buyers run dedicated offers. Gold and home goods are the primary categories.",
              link: "Ugadi Offers 2026"
            }
          ].map((item, idx) => (
            <div key={idx} className="p-5 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{item.icon}</span>
                <h3 className="text-sm font-extrabold text-[#1A1A2E]">{item.title}</h3>
              </div>
              <p className="text-xs text-[#4A4A6A] leading-relaxed mb-3">{item.desc}</p>
              <Link
                href={item.title.toLowerCase().includes('diwali') ? '/festival-offers/diwali-offers' : '#'}
                className="text-xs font-black text-[#5B4FBE] hover:underline inline-flex items-center gap-1"
              >
                → {item.link}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* GLOBAL SHOPPING EVENTS */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#22C55E] rounded-full block"></span>
          <span className="text-xs font-black text-[#22C55E] uppercase tracking-widest">International Standards</span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          Global Shopping Events (Active in India)
        </h2>
        <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
          These are international events that Indian e-commerce platforms and D2C brands have adopted. Discounts are now as competitive as domestic festival sales.
        </p>

        <div className="space-y-4 mt-6">
          {[
            {
              icon: "🖤",
              title: "Black Friday Sale",
              desc: "The last Friday of November — the single biggest global shopping day, now fully adopted by Indian platforms. Amazon, Myntra, Lenskart, and hundreds of D2C brands run 24 to 72 hour flash windows with some of the deepest discounts of the year.",
              link: "Black Friday Offers India 2026"
            },
            {
              icon: "💻",
              title: "Cyber Monday Sale",
              desc: "The Monday after Black Friday. Tech, software, and SaaS products see the heaviest discounts. Hosting providers (Hostinger, GoDaddy, BigRock) routinely offer their lowest prices of the year on Cyber Monday.",
              link: "Cyber Monday Offers India 2026"
            },
            {
              icon: "🎄",
              title: "Christmas Sale",
              desc: "December 24 to 26. Western fashion brands, OTT platforms, and travel sites run Christmas promotions. Gaming platforms and edtech apps are increasingly active in this window.",
              link: "Christmas Offers & Deals 2026"
            },
            {
              icon: "🎉",
              title: "New Year Sale",
              desc: "December 31 to January 2. Travel booking platforms and hotel chains are the most active. Fitness brands and edtech (New Year resolution purchases) also run significant discounts.",
              link: "New Year Offers & Deals 2026"
            },
            {
              icon: "🛍️",
              title: "Amazon Prime Day",
              desc: "Usually July. Exclusive to Amazon Prime members — one of Amazon's two biggest global sale events alongside the Great Indian Sale. Electronics, fashion, and home goods see significant price cuts.",
              link: "Amazon Prime Day Offers 2026"
            },
            {
              icon: "⚡",
              title: "Flash Sales",
              desc: "Not festival-specific — brand-initiated 4 to 24 hour sales that can happen any time of year. Meesho, Myntra, and Nykaa run these frequently. CouponsCrew tracks active flash sales as they go live.",
              link: "Flash Sale Offers — Live & Upcoming"
            },
            {
              icon: "🛒",
              title: "OMG Sale",
              desc: "Meesho's flagship sale event. Deep discounts on fashion, home goods, and lifestyle products — particularly strong for value-segment buyers. Usually runs across multiple days with daily deal unlocks.",
              link: "Meesho OMG Sale Offers 2026"
            },
            {
              icon: "💳",
              title: "Paytm Sale",
              desc: "Paytm-specific promotional events tied to the Paytm Mall platform and Paytm cashback offers. Typically coincides with larger festival seasons and adds a cashback layer on top of store discounts.",
              link: "Paytm Sale Offers & Cashback 2026"
            }
          ].map((item, idx) => (
            <div key={idx} className="p-5 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{item.icon}</span>
                <h3 className="text-sm font-extrabold text-[#1A1A2E]">{item.title}</h3>
              </div>
              <p className="text-xs text-[#4A4A6A] leading-relaxed mb-3">{item.desc}</p>
              <a href="#" className="text-xs font-black text-[#22C55E] hover:underline inline-flex items-center gap-1">
                → {item.link}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* HOW COUPONSCREW TRACKS */}
      <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
          <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Our Methodology</span>
        </div>
        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
          How CouponsCrew Tracks Festival Deals
        </h2>
        <div className="mt-4 space-y-4 text-sm text-[#4A4A6A] leading-relaxed">
          <p>
            Every festival page on CouponsCrew is updated in the 7 days before the sale goes live. Deal cards are verified before they go up — expired or unverified codes are not listed. The page above links to each festival&apos;s dedicated page; those pages carry the live codes, bank offer details, and store-specific breakdowns as the sale dates approach.
          </p>
          <p>
            If a sale has not started yet, the dedicated page will show the previous year&apos;s reference data so buyers can gauge what discounts to expect.
          </p>
        </div>
      </div>

    </div>

    {/* RIGHT - SIDEBAR CARDS (30%) */}
    <div className="lg:col-span-3 space-y-5 lg:sticky lg:top-8 self-start">

      {/* SIDEBAR CARD 1 - Festival Sale Calendar Table */}
      <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm">
        <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#5B4FBE]"></span>
          Festival Sale Calendar 2026
        </h3>
        
        {/* Scroller removed: full height table view */}
        <div className="w-full">
          <table className="w-full text-left border-collapse text-[11px]">
            <thead>
              <tr className="border-b border-[#E8E8F0] font-black text-[#1A1A2E] uppercase">
                <th className="py-2 px-1">Event</th>
                <th className="py-2 px-1">Month</th>
                <th className="py-2 px-1">Categories</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8E8F0] text-[#4A4A6A]">
              {[
                ["Republic Day", "Jan", "Electronics, Fashion"],
                ["Pongal", "Jan", "Gold, Appliances"],
                ["Valentine's", "Feb", "Gifting, Dining"],
                ["Ugadi", "Mar/Apr", "Home, Gold"],
                ["Women's Day", "Mar", "Beauty, Wellness"],
                ["Mother's Day", "May", "Gifting, Jewellery"],
                ["Prime Day", "July", "Electronics, Fashion"],
                ["Independence", "Aug", "Electronics, Home"],
                ["Friendship Day", "Aug", "Gifting, D2C"],
                ["Onam", "Aug/Sep", "Jewellery, Sarees"],
                ["Ganesh Chaturthi", "Aug/Sep", "Food, Decor"],
                ["Amazon Great Indian", "Oct", "All Categories"],
                ["Flipkart Big Billion", "Oct", "Mobiles, Fashion"],
                ["Dussehra", "Oct", "Vehicles, Jewellery"],
                ["Ramzan/Eid", "Varies", "Food, Fashion"],
                ["Raksha Bandhan", "Aug", "Gifting, Electronics"],
                ["Children's Day", "Nov", "Edtech, Toys"],
                ["Diwali Sale", "Oct/Nov", "All Categories"],
                ["Black Friday", "Nov", "Electronics, SaaS"],
                ["Cyber Monday", "Nov", "Tech, Hosting"],
                ["Christmas", "Dec", "OTT, Travel"],
                ["New Year", "Dec/Jan", "Travel, Fitness"]
              ].map(([event, month, cat], idx) => (
                <tr key={idx} className="hover:bg-[#F8F8FF]">
                  <td className="py-2 px-1 font-bold text-[#1A1A2E]">{event}</td>
                  <td className="py-2 px-1">{month}</td>
                  <td className="py-2 px-1">{cat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* SIDEBAR CARD 2 - Quick FAQ Summary */}
      <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm space-y-4">
        <h3 className="font-extrabold text-[#1A1A2E] text-sm flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF5722]"></span>
          Frequently Asked Questions
        </h3>

        <div className="space-y-3 text-xs">
          <div>
            <p className="font-bold text-[#1A1A2E] mb-1">Which is the biggest sale of the year in India?</p>
            <p className="text-[#4A4A6A] leading-relaxed">The Diwali sale window (Flipkart Big Billion Day &amp; Amazon Great Indian Sale) in October/November.</p>
          </div>
          <div className="pt-2 border-t border-[#E8E8F0]">
            <p className="font-bold text-[#1A1A2E] mb-1">Do Black Friday deals apply in India?</p>
            <p className="text-[#4A4A6A] leading-relaxed">Yes, Amazon India, Myntra, Lenskart, and D2C brands run competitive Black Friday discounts.</p>
          </div>
          <div className="pt-2 border-t border-[#E8E8F0]">
            <p className="font-bold text-[#1A1A2E] mb-1">How early should I check before a sale?</p>
            <p className="text-[#4A4A6A] leading-relaxed">CouponsCrew updates each festival page 7 days before the sale opens for shortlisting.</p>
          </div>
        </div>
      </div>

      {/* SIDEBAR CARD 3 - Pro Tip */}
      <div className="bg-[#FFF8E7] rounded-2xl border border-[#FF9900]/20 p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-[#FF9900]"></span>
          <h3 className="font-extrabold text-[#1A1A2E] text-sm">Sale Shopping Tip</h3>
        </div>
        <p className="text-xs text-[#4A4A6A] leading-relaxed">
          Always check bank offer eligibility beforehand. HDFC, SBI, ICICI, and Axis Bank provide instant discounts that stack on top of festive promo codes.
        </p>
      </div>

    </div>

  </div>
</section>
        

      </main>

      {/* ── Bottom Footer ── */}
      <Footer />
    </div>
  );
}
