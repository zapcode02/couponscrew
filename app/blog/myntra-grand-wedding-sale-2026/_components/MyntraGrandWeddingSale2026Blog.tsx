'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight,
  Calendar,
  Clock,
  ArrowRight,
  HelpCircle,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  Check,
  ShoppingBag,
  Sparkles,
  Tag,
  CheckCircle2,
  List,
  AlertCircle,
} from 'lucide-react';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';

const PAGE_URL = 'https://www.couponscrew.com/blog/myntra-grand-wedding-sale-2026';
const PAGE_TITLE = 'Myntra Grand Wedding Sale 2026: Shaadi Season Ke Liye Best Deals — Up to 80% OFF on Lehengas, Sherwanis & More';

const RELATED_POSTS = [
  {
    slug: 'diwali-2026-last-minute-deals-gifts-offers',
    title: 'Diwali 2026: Last Minute Deals, Gift Ideas & Offers You Can Still Get Today',
    category: 'Festival Offers',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1794117712/Diwali_2026_Last-Minute_Deals_ebzpca.webp',
    date: 'Nov 8, 2026',
    readTime: '8 min read',
    excerpt: "Diwali is tomorrow — 8 November 2026. Best last-minute gifts, same-day deals, and offers you can still get tonight. Don't panic. We've got you covered.",
  },
  {
    slug: 'dhanteras-2026-best-deals',
    title: 'Dhanteras 2026: Best Deals on Gold, Electronics & Home Appliances',
    category: 'Festival Offers',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1793721685/Dhanteras_2026_Gold_and_Gadget_Deals_aansol.webp',
    date: 'Nov 3, 2026',
    readTime: '9 min read',
    excerpt: "Dhanteras 2026 is on 6 November — the most auspicious day to buy. Gold, electronics, home appliances — here's what to buy, when to buy, and where to find the best deals.",
  },
  {
    slug: 'dhanteras-diwali-november-2026-india-deals',
    title: 'November 2026 Festival Calendar India: Dhanteras, Diwali, Bhai Dooj & More — Deals & Offers',
    category: 'Festival Offers',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1793435015/November_2026_Festival_Deals_Calendar_n87njb.webp',
    date: 'Oct 31, 2026',
    readTime: '11 min read',
    excerpt: "Your complete November 2026 India festival guide — Dhanteras to Cyber Monday. Every festival, every deal, every offer in one place. Don't miss a single saving.",
  },
];

const FAQS = [
  {
    q: 'When does the Myntra Grand Wedding Sale end?',
    a: "Myntra hasn't announced a fixed end date. Sale events on Myntra typically run for one to two weeks. Sizes and specific designs start selling out within the first few days — checking early gives you the most options.",
  },
  {
    q: 'Is the flat ₹300 OFF available for everyone?',
    a: "The flat ₹300 OFF is for first-time purchases via the Myntra app. If you've ordered before on the app, it won't apply — but active coupon codes may offer similar or better savings.",
  },
  {
    q: 'Are the lehengas on Myntra good quality?',
    a: "Myntra is an authorised seller for all brands listed on its platform, and all products are 100% original. Quality varies by price point and brand, as with any marketplace. The return policy means you can send back anything that doesn't meet expectations.",
  },
  {
    q: 'What sizes are available for lehengas and sherwanis?',
    a: 'Myntra carries sizes from XS to 3XL across most ethnic categories. Size availability varies by design — bestselling sizes (M, L, XL for women; 40, 42 for men) tend to sell out first during sale events.',
  },
  {
    q: 'Can wedding guest outfits be bought under ₹1,500 during the sale?',
    a: 'Yes. Salwar kameez sets, kurta palazzos, and lighter indo-western options are regularly available under ₹1,500 during the Grand Wedding Sale. Lehengas start higher but have strong options in the ₹1,500–₹3,000 range.',
  },
  {
    q: 'Is the Myntra Grand Wedding Sale available in all cities?',
    a: 'Yes — the sale is sitewide and available across India. Delivery timelines vary by pincode. Metro cities generally receive orders within 2–4 days; Tier 2 and Tier 3 cities may take 5–7 days.',
  },
];

export default function MyntraGrandWeddingSale2026Blog() {
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(PAGE_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans antialiased text-[#4A4A6A]">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 flex-wrap select-none">
            <Link href="/" className="hover:text-[#5B4FBE] transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link href="/blog" className="hover:text-[#5B4FBE] transition-colors">
              Blog
            </Link>
            <ChevronRight size={12} />
            <span className="text-[#1A1A2E] font-semibold truncate">
              Myntra Grand Wedding Sale 2026
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* MAIN ARTICLE CONTENT */}
            <article className="lg:col-span-8 space-y-8">
              {/* Category Pill & Header */}
              <div className="space-y-4">
                <span className="inline-block bg-[#FFF0EA] text-[#FF5722] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  Festival Offers
                </span>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1A1A2E] leading-tight">
                  Myntra Grand Wedding Sale 2026: Shaadi Season Ke Liye Best Deals — Up to 80% OFF on Lehengas, Sherwanis &amp; More
                </h1>

                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium flex-wrap pt-1">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#5B4FBE]" />
                    <span>Nov 15, 2026</span>
                  </div>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                  <div className="flex items-center gap-1.5">
                    <Clock size={13} className="text-[#FF5722]" />
                    <span>7 min read</span>
                  </div>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                  <span className="text-[#1A1A2E] font-semibold">By CouponsCrew Editorial Team</span>
                </div>
              </div>

              {/* Banner Image */}
              <div className="relative w-full h-54 sm:h-110 rounded-3xl overflow-hidden shadow-xl border border-[#E8E8F0] bg-gray-100">
                <NextImage
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1794759670/Myntra_Grand_Wedding_Sale_so8s5g.webp"
                  alt="Myntra Grand Wedding Sale 2026: Shaadi Season Ke Liye Best Deals — Up to 80% OFF on Lehengas, Sherwanis & More"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                />
              </div>

              {/* Intro section */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E8E8F0] space-y-5 text-base sm:text-lg leading-relaxed text-[#2D2D4A]">
                <p>
                  Wedding season in India doesn&apos;t wait. The invites are already piling up — a cousin&apos;s shaadi in December, a colleague&apos;s reception next weekend, maybe your own big day somewhere on the horizon. And the one question that always arrives with the invitation: <em className="text-[#1A1A2E] font-medium">what am I going to wear?</em>
                </p>
                <p>
                  Myntra&apos;s Grand Wedding Sale answers that question with up to 80% OFF across lehengas, sherwanis, sarees, indo-western sets, and accessories — all live right now. If you&apos;ve been holding off on that wedding outfit purchase, this is the window.
                </p>
                <p>
                  This guide breaks down what&apos;s worth buying, which category to shop first, and how to save the most before the sale ends.
                </p>
              </div>

              {/* Section: What Is the Myntra Grand Wedding Sale? */}
              <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E8E8F0] space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A2E] flex items-center gap-2.5">
                  <span className="w-2.5 h-6 bg-[#5B4FBE] rounded-full inline-block" />
                  What Is the Myntra Grand Wedding Sale?
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-[#4A4A6A]">
                  The Grand Wedding Sale is Myntra&apos;s dedicated sale event timed to India&apos;s peak wedding season — November through February. It runs across every category that matters for a shaadi: bridal wear, groom&apos;s clothing, wedding guest outfits, ethnic accessories, and beauty.
                </p>

                <div className="bg-[#F4F3FF] border border-[#DDD9FF] rounded-2xl p-5 space-y-3">
                  <h3 className="text-sm font-bold text-[#1A1A2E] uppercase tracking-wider">
                    What&apos;s live right now:
                  </h3>
                  <ul className="space-y-2 text-sm text-[#2D2D4A]">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#5B4FBE] shrink-0 mt-0.5" />
                      <span>Up to 80% OFF on wedding ethnic wear</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#5B4FBE] shrink-0 mt-0.5" />
                      <span>Flat ₹300 OFF on your first purchase via the Myntra app</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#5B4FBE] shrink-0 mt-0.5" />
                      <span>Discounts across lehengas, sherwanis, sarees, kurta sets, indo-western, and more</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#5B4FBE] shrink-0 mt-0.5" />
                      <span>100% original products + easy returns &amp; refunds</span>
                    </li>
                  </ul>
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-[#4A4A6A]">
                  The flat ₹300 OFF applies on your first order through the app — if you haven&apos;t used Myntra&apos;s app before, start there. It stacks on top of the existing sale price.
                </p>

                <p className="text-sm sm:text-base leading-relaxed text-[#4A4A6A]">
                  For live{' '}
                  <Link href="/stores/myntra-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">
                    Myntra coupon codes
                  </Link>{' '}
                  during the sale, check that page — bank card offers and app-exclusive codes update frequently.
                </p>
              </section>

              {/* Section: For Her: Best Wedding Outfits on Sale Right Now */}
              <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E8E8F0] space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A2E] flex items-center gap-2.5">
                  <span className="w-2.5 h-6 bg-[#FF5722] rounded-full inline-block" />
                  For Her: Best Wedding Outfits on Sale Right Now
                </h2>

                {/* Sub: Lehengas */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#1A1A2E]">
                    Lehengas — The One Category to Move Fast On
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-[#4A4A6A]">
                    Lehengas are always the first to sell out during wedding sales — the bestselling designs in popular sizes go in the first day or two. If you have a wedding in the next four to six weeks, don&apos;t wait on this.
                  </p>
                  <div className="bg-[#F8F8FF] border border-[#E8E8F0] rounded-2xl p-4 sm:p-5 space-y-2 text-sm text-[#2D2D4A]">
                    <p className="font-semibold text-[#1A1A2E]">What to look for:</p>
                    <ul className="list-disc list-inside space-y-1.5 pl-1">
                      <li>
                        <strong>Bridal lehengas</strong>: Heavy embroidered sets with dupatta — typically ₹3,000–₹12,000 range during sale vs. ₹8,000–₹25,000 regular
                      </li>
                      <li>
                        <strong>Semi-bridal / reception lehengas</strong>: Lighter embroidery, more versatile — better for guests and second events
                      </li>
                      <li>
                        <strong>Indo-western lehenga skirts</strong>: Pair with a crop top or bralette, great for sangeet or cocktail functions
                      </li>
                      <li>
                        <strong>Budget lehengas under ₹2,000</strong>: Yes, they exist on Myntra and they look significantly better than the price suggests
                      </li>
                    </ul>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-[#4A4A6A]">
                    <strong>Filter tip:</strong> Sort by &quot;Discount: High to Low&quot; and set a price filter. It surfaces the actual deals faster than browsing by occasion.
                  </p>
                </div>

                <hr className="border-[#E8E8F0]" />

                {/* Sub: Sarees */}
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-[#1A1A2E]">
                    Sarees — From Silk to Party-Ready
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-[#4A4A6A]">
                    Sarees at Myntra&apos;s wedding sale cover a wide range — from heavier silk and banarasi weaves to lighter georgette and chiffon options that work for wedding guests.
                  </p>
                  <div className="bg-[#F8F8FF] border border-[#E8E8F0] rounded-2xl p-4 sm:p-5 space-y-2 text-sm text-[#2D2D4A]">
                    <p className="font-semibold text-[#1A1A2E]">What sells fast:</p>
                    <ul className="list-disc list-inside space-y-1.5 pl-1">
                      <li>Banarasi silk sarees with blouse piece</li>
                      <li>Organza sarees with embroidered borders</li>
                      <li>Pre-stitched sarees (for people who want the look without the draping)</li>
                      <li>Cocktail and sequin sarees for evening functions</li>
                    </ul>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-[#4A4A6A]">
                    The pre-stitched category is worth attention if you don&apos;t drape regularly — same look, zero effort.
                  </p>
                </div>

                <hr className="border-[#E8E8F0]" />

                {/* Sub: Indo-Western */}
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-[#1A1A2E]">
                    Indo-Western &amp; Fusion Wear
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-[#4A4A6A]">
                    Not every function calls for full traditional. For cocktail parties, sangeet nights, and destination weddings, Myntra&apos;s indo-western section carries:
                  </p>
                  <ul className="list-disc list-inside space-y-1.5 pl-1 text-sm sm:text-base text-[#4A4A6A]">
                    <li>Dhoti pants + embroidered kurta sets</li>
                    <li>Sharara sets with mirror or gota work</li>
                    <li>Cape-style kurtis with palazzos</li>
                    <li>Printed co-ord sets with ethnic detailing</li>
                  </ul>
                  <p className="text-sm sm:text-base leading-relaxed text-[#4A4A6A]">
                    This category tends to have the steepest discounts because it&apos;s less searched — which means better deals if you know where to look.
                  </p>
                </div>

                <hr className="border-[#E8E8F0]" />

                {/* Sub: Jewellery & Accessories */}
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-[#1A1A2E]">
                    Wedding Jewellery &amp; Accessories
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-[#4A4A6A]">
                    A ₹600 statement neckpiece can completely change a ₹1,200 outfit. Myntra carries a solid range of:
                  </p>
                  <ul className="list-disc list-inside space-y-1.5 pl-1 text-sm sm:text-base text-[#4A4A6A]">
                    <li>Polki and kundan neckpieces</li>
                    <li>Jhumkas, chandbalis, and long earrings</li>
                    <li>Maang tikkas and matha pattis</li>
                    <li>Oxidised silver sets (huge for boho and fusion weddings)</li>
                    <li>Bridal bangles and kada sets</li>
                  </ul>
                  <p className="text-sm sm:text-base leading-relaxed text-[#4A4A6A]">
                    Browse the{' '}
                    <Link href="/stores/categories/jewellery" className="text-[#5B4FBE] font-semibold hover:underline">
                      Myntra jewellery category
                    </Link>{' '}
                    for current deals — accessories are one of the best value buys during this sale.
                  </p>
                </div>
              </section>

              {/* Section: For Him: Wedding Season Dressing, Sorted */}
              <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E8E8F0] space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A2E] flex items-center gap-2.5">
                  <span className="w-2.5 h-6 bg-[#5B4FBE] rounded-full inline-block" />
                  For Him: Wedding Season Dressing, Sorted
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-[#4A4A6A]">
                  Men&apos;s wedding shopping is usually left to the last week. That&apos;s a mistake — the good sherwanis in popular sizes (40, 42) disappear fast.
                </p>

                {/* Sub: Sherwanis */}
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-[#1A1A2E]">
                    Sherwanis
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-[#4A4A6A]">
                    The sherwani is non-negotiable for certain functions — the baraat, the main wedding day, sangeet in some families. What Myntra has right now:
                  </p>
                  <ul className="list-disc list-inside space-y-1.5 pl-1 text-sm sm:text-base text-[#4A4A6A]">
                    <li>
                      <strong>Embroidered sherwanis</strong>: Heavy zari and thread work, full set with churidar and dupatta
                    </li>
                    <li>
                      <strong>Velvet sherwanis</strong>: The go-to for winter weddings, richly textured, photographs well
                    </li>
                    <li>
                      <strong>Lightweight bandhgala sherwanis</strong>: Cleaner silhouette, works for receptions and cocktail functions
                    </li>
                    <li>
                      <strong>Colour range</strong>: Ivory and cream remain the most popular, but deep emerald, burgundy, and navy are trending this season
                    </li>
                  </ul>
                  <p className="text-sm sm:text-base leading-relaxed text-[#4A4A6A]">
                    <strong>Price range during sale:</strong> ₹1,500–₹6,000 for most styles, vs. ₹4,000–₹15,000 at full price.
                  </p>
                </div>

                <hr className="border-[#E8E8F0]" />

                {/* Sub: Kurta Sets & Indo-Western */}
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-[#1A1A2E]">
                    Kurta Sets &amp; Indo-Western for Men
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-[#4A4A6A]">
                    Not every wedding function calls for a sherwani. For functions where you want to look put-together without going full traditional:
                  </p>
                  <ul className="list-disc list-inside space-y-1.5 pl-1 text-sm sm:text-base text-[#4A4A6A]">
                    <li>
                      <strong>Kurta + churidar sets</strong>: Classic, never wrong, available in every fabric and colour
                    </li>
                    <li>
                      <strong>Kurta + palazzo / dhoti pants</strong>: More relaxed silhouette, works for sangeet and mehndi
                    </li>
                    <li>
                      <strong>Nehru jacket sets</strong>: A well-fitted Nehru jacket over a plain kurta is one of the most underrated wedding guest outfits
                    </li>
                    <li>
                      <strong>Indo-western blazer + kurta combos</strong>: Sharp option for cocktail and reception events
                    </li>
                  </ul>
                  <p className="text-sm sm:text-base leading-relaxed text-[#4A4A6A]">
                    Shop the{' '}
                    <Link href="/stores/ajio-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">
                      AJIO coupon code
                    </Link>{' '}
                    page too — AJIO runs parallel deals on men&apos;s ethnic wear during wedding season and is worth a comparison.
                  </p>
                </div>
              </section>

              {/* Section: For the Wedding Guest Who Has Five Shaadis This Season */}
              <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E8E8F0] space-y-5">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A2E] flex items-center gap-2.5">
                  <span className="w-2.5 h-6 bg-[#FF5722] rounded-full inline-block" />
                  For the Wedding Guest Who Has Five Shaadis This Season
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-[#4A4A6A]">
                  If you&apos;re in the phase of life where every other weekend is someone&apos;s wedding, buying five different outfits at full price is not the move. The Grand Wedding Sale exists for exactly this situation.
                </p>
                <div className="bg-[#FFF8F5] border border-[#FFE0D6] rounded-2xl p-5 space-y-3">
                  <p className="font-bold text-[#1A1A2E] text-sm">A practical approach:</p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-[#2D2D4A]">
                    <li>One formal lehenga or saree for main wedding functions</li>
                    <li>Two semi-formal sets (sharara, indo-western, or salwar) for daytime events</li>
                    <li>One versatile fusion outfit that can be restyled across multiple events</li>
                  </ul>
                  <p className="text-sm font-semibold text-[#FF5722] pt-1">
                    Total spend at sale prices: ₹4,000–₹8,000 for a full five-occasion wardrobe. That&apos;s a reasonable number.
                  </p>
                </div>
              </section>

              {/* Section: Bridal Beauty: What to Add to Cart on Nykaa */}
              <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E8E8F0] space-y-5">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A2E] flex items-center gap-2.5">
                  <span className="w-2.5 h-6 bg-[#5B4FBE] rounded-full inline-block" />
                  Bridal Beauty: What to Add to Cart on Nykaa
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-[#4A4A6A]">
                  Myntra covers the outfits. For bridal makeup and skincare in the lead-up to a wedding,{' '}
                  <Link href="/stores/nykaa-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">
                    Nykaa coupon codes
                  </Link>{' '}
                  are worth checking alongside this sale. Products that move during wedding season:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-[#4A4A6A]">
                  <li>Full-coverage foundations and setting sprays</li>
                  <li>Long-wear lip colours (matte and satin)</li>
                  <li>Highlighters and contouring kits</li>
                  <li>Bridal skincare — sheet masks, vitamin C serums, overnight treatments</li>
                  <li>False lashes and lash glue</li>
                </ul>
              </section>

              {/* Section: How to Get Maximum Savings at the Grand Wedding Sale */}
              <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E8E8F0] space-y-5">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A2E] flex items-center gap-2.5">
                  <span className="w-2.5 h-6 bg-[#FF5722] rounded-full inline-block" />
                  How to Get Maximum Savings at the Grand Wedding Sale
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-[#4A4A6A]">
                  The sale discount is already applied. To save more on top of it:
                </p>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-[#F8F8FF] border border-[#E8E8F0]">
                    <p className="text-sm sm:text-base text-[#2D2D4A]">
                      <strong>Step 1:</strong> Download the Myntra app — the flat ₹300 OFF is app-first-purchase exclusive. If you&apos;ve never ordered on the app, this is worth switching for.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F8F8FF] border border-[#E8E8F0]">
                    <p className="text-sm sm:text-base text-[#2D2D4A]">
                      <strong>Step 2:</strong> Check active{' '}
                      <Link href="/stores/myntra-coupon-code" className="text-[#5B4FBE] font-semibold hover:underline">
                        Myntra coupon codes
                      </Link>{' '}
                      before checkout. Bank-specific offers on SBI, HDFC, ICICI, and Kotak cards sometimes run alongside sale events — 10% extra off on a ₹3,000 purchase adds up.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F8F8FF] border border-[#E8E8F0]">
                    <p className="text-sm sm:text-base text-[#2D2D4A]">
                      <strong>Step 3:</strong> Add to wishlist first, then buy. Wishlist items often trigger targeted notifications for further price drops, especially in the first 48 hours of a sale.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F8F8FF] border border-[#E8E8F0]">
                    <p className="text-sm sm:text-base text-[#2D2D4A]">
                      <strong>Step 4:</strong> Check return policy before buying — Myntra&apos;s easy returns mean buying your size + one size up for lehengas and sherwanis is low-risk. Keep what fits, return the other.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section: Quick Reference: What to Buy Where (Table) */}
              <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E8E8F0] space-y-5">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A2E] flex items-center gap-2.5">
                  <span className="w-2.5 h-6 bg-[#5B4FBE] rounded-full inline-block" />
                  Quick Reference: What to Buy Where
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-[#E8E8F0] bg-[#F8F8FF] text-[#1A1A2E]">
                        <th className="py-3 px-4 font-bold">Category</th>
                        <th className="py-3 px-4 font-bold">Best Platform</th>
                        <th className="py-3 px-4 font-bold">Why</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8F0] text-[#4A4A6A]">
                      <tr>
                        <td className="py-3 px-4 font-semibold text-[#1A1A2E]">Lehengas</td>
                        <td className="py-3 px-4">Myntra</td>
                        <td className="py-3 px-4">Widest selection, easy returns</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold text-[#1A1A2E]">Sherwanis</td>
                        <td className="py-3 px-4">Myntra</td>
                        <td className="py-3 px-4">Strong men&apos;s ethnic range</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold text-[#1A1A2E]">Bridal jewellery</td>
                        <td className="py-3 px-4">Myntra</td>
                        <td className="py-3 px-4">Good mid-range options</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold text-[#1A1A2E]">Bridal makeup</td>
                        <td className="py-3 px-4">Nykaa</td>
                        <td className="py-3 px-4">Dedicated beauty platform</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold text-[#1A1A2E]">Wedding decor</td>
                        <td className="py-3 px-4">Flipkart</td>
                        <td className="py-3 px-4">Better pricing on props</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold text-[#1A1A2E]">Men&apos;s ethnic alternatives</td>
                        <td className="py-3 px-4">AJIO</td>
                        <td className="py-3 px-4">Parallel sale, worth comparing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section: Three Things People Get Wrong About Wedding Shopping Sales */}
              <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E8E8F0] space-y-5">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A2E] flex items-center gap-2.5">
                  <span className="w-2.5 h-6 bg-[#FF5722] rounded-full inline-block" />
                  Three Things People Get Wrong About Wedding Shopping Sales
                </h2>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-[#FFF8F5] border border-[#FFE0D6]">
                    <p className="text-sm sm:text-base text-[#2D2D4A]">
                      <strong>Waiting for a &quot;better deal&quot; later.</strong> Sale prices during the Grand Wedding Sale are typically the floor. Post-sale, prices return to full or near-full. The exception is clearance sales in January — but by then, the selection is whatever wasn&apos;t bought.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FFF8F5] border border-[#FFE0D6]">
                    <p className="text-sm sm:text-base text-[#2D2D4A]">
                      <strong>Buying only for one function.</strong> A lehenga worn once to one wedding is a poor return on investment. Buy styles that can be restyled — a different blouse, a plain statement neckpiece, a different dupatta draping. One outfit, three looks.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FFF8F5] border border-[#FFE0D6]">
                    <p className="text-sm sm:text-base text-[#2D2D4A]">
                      <strong>Skipping the men&apos;s section.</strong> Men&apos;s wedding shopping is usually an afterthought until three days before the function. The sherwani sizes go first. Shop now, return if plans change.
                    </p>
                  </div>
                </div>
              </section>

              {/* FAQs Accordion */}
              <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E8E8F0] space-y-6">
                <div className="flex items-center gap-2.5">
                  <HelpCircle className="text-[#5B4FBE]" size={24} />
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A2E]">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="border border-[#E8E8F0] rounded-2xl overflow-hidden transition-all duration-200"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-4 sm:p-5 text-left flex justify-between items-center gap-4 bg-white hover:bg-[#F8F8FF] transition-colors"
                      >
                        <span className="font-bold text-[#1A1A2E] text-sm sm:text-base">
                          {faq.q}
                        </span>
                        <ChevronRight
                          size={18}
                          className={`text-gray-400 shrink-0 transition-transform duration-200 ${
                            openFaqIndex === idx ? 'rotate-90 text-[#5B4FBE]' : ''
                          }`}
                        />
                      </button>

                      {openFaqIndex === idx && (
                        <div className="p-4 sm:p-5 pt-0 text-sm leading-relaxed text-[#4A4A6A] border-t border-[#F0F0F8] bg-[#FAFAFE]">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Final Note Callout */}
              <div className="bg-gradient-to-r from-[#5B4FBE]/10 via-[#FF5722]/10 to-transparent p-6 rounded-3xl border border-[#5B4FBE]/20 space-y-3">
                <p className="text-sm sm:text-base leading-relaxed text-[#1A1A2E] italic">
                  Wedding season moves fast. The sherwani you&apos;re thinking about will be in someone else&apos;s cart by tomorrow. Check{' '}
                  <Link href="/stores/myntra-coupon-code" className="text-[#5B4FBE] font-bold underline">
                    Myntra coupon codes
                  </Link>{' '}
                  before you checkout — the extra savings are there if you look.
                </p>
              </div>

              {/* Share & Tags */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#E8E8F0] flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold text-gray-400 flex items-center gap-1 mr-1">
                    <Tag size={13} /> Tags:
                  </span>
                  {['myntra', 'wedding sale', 'lehenga', 'sherwani', 'wedding shopping', 'shaadi season'].map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#F0EFFE] text-[#5B4FBE] text-xs font-medium px-2.5 py-1 rounded-lg"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-500 mr-2 flex items-center gap-1">
                    <Share2 size={13} /> Share:
                  </span>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(PAGE_URL)}&text=${encodeURIComponent(PAGE_TITLE)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#5B4FBE] hover:text-white flex items-center justify-center transition-colors text-gray-600"
                    title="Share on Twitter"
                  >
                    <Twitter size={14} />
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(PAGE_URL)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#5B4FBE] hover:text-white flex items-center justify-center transition-colors text-gray-600"
                    title="Share on Facebook"
                  >
                    <Facebook size={14} />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(PAGE_URL)}&title=${encodeURIComponent(PAGE_TITLE)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#5B4FBE] hover:text-white flex items-center justify-center transition-colors text-gray-600"
                    title="Share on LinkedIn"
                  >
                    <Linkedin size={14} />
                  </a>
                  <button
                    onClick={handleCopyLink}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#5B4FBE] hover:text-white flex items-center justify-center transition-colors text-gray-600"
                    title="Copy Link"
                  >
                    {copied ? <Check size={14} className="text-emerald-500" /> : <Link2 size={14} />}
                  </button>
                </div>
              </div>
            </article>

            {/* SIDEBAR */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Promo Banner Card */}
              <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2D2D4A] rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5722] opacity-15 rounded-full blur-2xl pointer-events-none" />
                <span className="bg-[#FF5722] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-4">
                  Verified Store Deals
                </span>
                <h3 className="text-xl font-bold leading-snug mb-2">
                  Myntra Coupon Codes &amp; Festive Offers
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-6">
                  Save extra on your wedding outfits with verified coupon codes, bank cards, and first-order app discounts.
                </p>
                <Link
                  href="/stores/myntra-coupon-code"
                  className="w-full bg-[#FF5722] hover:bg-[#e64a19] text-white text-xs font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-orange-500/25 active:scale-95"
                >
                  <span>View All Myntra Coupons</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Related Articles */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#E8E8F0] space-y-4">
                <h3 className="font-bold text-[#1A1A2E] text-base flex items-center gap-2">
                  <Sparkles size={16} className="text-[#5B4FBE]" />
                  Related Guides &amp; Offers
                </h3>
                <div className="divide-y divide-[#E8E8F0]">
                  {RELATED_POSTS.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group block py-4 first:pt-2 last:pb-2 hover:opacity-85 transition-opacity"
                    >
                      <span className="text-[10px] font-bold text-[#FF5722] uppercase tracking-wider block mb-1">
                        {post.category}
                      </span>
                      <h4 className="text-xs font-bold text-[#1A1A2E] group-hover:text-[#5B4FBE] transition-colors leading-snug mb-1">
                        {post.title}
                      </h4>
                      <p className="text-[11px] text-gray-400">
                        {post.date} · {post.readTime}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other Sale Links */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#E8E8F0] space-y-4">
                <h3 className="font-bold text-[#1A1A2E] text-base flex items-center gap-2">
                  <ShoppingBag size={16} className="text-[#FF5722]" />
                  Trending Festival Sales
                </h3>
                <ul className="space-y-2 text-xs">
                  <li>
                    <Link
                      href="/festival-offers/diwali-offers"
                      className="text-[#4A4A6A] hover:text-[#5B4FBE] font-medium flex items-center justify-between py-1.5 border-b border-[#F0F0F8]"
                    >
                      <span>Diwali Offers</span>
                      <ChevronRight size={12} className="text-gray-400" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/festival-offers/black-friday-offers"
                      className="text-[#4A4A6A] hover:text-[#5B4FBE] font-medium flex items-center justify-between py-1.5 border-b border-[#F0F0F8]"
                    >
                      <span>Black Friday Offers</span>
                      <ChevronRight size={12} className="text-gray-400" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/festival-offers/cyber-monday-offers"
                      className="text-[#4A4A6A] hover:text-[#5B4FBE] font-medium flex items-center justify-between py-1.5 border-b border-[#F0F0F8]"
                    >
                      <span>Cyber Monday Offers</span>
                      <ChevronRight size={12} className="text-gray-400" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/festival-offers/christmas-offers"
                      className="text-[#4A4A6A] hover:text-[#5B4FBE] font-medium flex items-center justify-between py-1.5 border-b border-[#F0F0F8]"
                    >
                      <span>Christmas Offers</span>
                      <ChevronRight size={12} className="text-gray-400" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/festival-offers/new-year-offers"
                      className="text-[#4A4A6A] hover:text-[#5B4FBE] font-medium flex items-center justify-between py-1.5"
                    >
                      <span>New Year Offers</span>
                      <ChevronRight size={12} className="text-gray-400" />
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Read More Section */}
      <section className="py-12 sm:py-16 border-t border-[#E8E8F0] bg-[#F8F8FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest block mb-1">
              EXPLORE MORE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A2E]">
              Read More Blogs
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Discover more money-saving tips, shopping guides and exclusive deal updates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RELATED_POSTS.map((blog) => (
              <div
                key={blog.slug}
                className="bg-white border border-[#E8E8F0] rounded-3xl overflow-hidden shadow-xs hover:shadow-md hover:border-purple-200 transition-all flex flex-col justify-between"
              >
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
                  <NextImage
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="inline-block bg-[#F0EEFF] text-[#5B4FBE] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                      {blog.category}
                    </span>
                    <h3 className="font-extrabold text-base sm:text-lg text-[#1A1A2E] leading-snug">
                      {blog.title}
                    </h3>
                    <p className="text-xs text-[#4A4A6A] line-clamp-3 leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E8E8F0] flex items-center justify-between text-xs text-gray-500 font-medium">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={13} className="text-gray-400" />
                        {blog.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={13} className="text-gray-400" />
                        {blog.readTime}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="text-[#5B4FBE] font-bold hover:underline flex items-center gap-1"
                    >
                      <span>Read More</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-[#5B4FBE] text-[#5B4FBE] font-bold hover:bg-[#5B4FBE] hover:text-white transition-colors"
            >
              <span>View All Blogs</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

