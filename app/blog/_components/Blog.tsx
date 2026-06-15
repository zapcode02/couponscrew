'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  BookOpen,
  PenTool,
  Users,
  Star,
  Calendar,
  Clock,
  ArrowRight,
  Tag,
  Monitor,
  ShoppingBag,
  UtensilsCrossed,
  Plane,
  Mail,
  PiggyBank,
  CheckCircle,
  X,
  Sparkles
} from 'lucide-react';
import Navbar from '../../../src/components/Navbar';
import Footer from '../../../src/components/Footer';

// ==========================================
// TYPESCRIPT INTERFACES
// ==========================================
export interface BlogPost {
  id: string;
  title: string;
  category: string;
  image: string;
  authorName: string;
  authorInitials: string;
  authorColor: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  featured: boolean;
  content: string;
}

export interface PopularTopic {
  id: string;
  name: string;
  iconType: 'tag' | 'book' | 'star' | 'piggy' | 'monitor' | 'bag' | 'food' | 'plane';
  count: number;
  colorClass: string;
  bgClass: string;
  iconColor: string;
}

// ==========================================
// COMPREHENSIVE DATA
// ==========================================
const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: 'b-post-1',
    title: '10 Ways Indian Shoppers Leave Money on the Table at Checkout',
    category: 'Coupon Tips',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80',
    authorName: 'Rahul Sharma',
    authorInitials: 'RS',
    authorColor: '#5B4FBE',
    date: 'Jan 15, 2025',
    readTime: '8 min read',
    excerpt: 'Most Indian shoppers use one discount layer. Smart ones use four. Here are the ten moves that separate someone who saves 20% from someone who saves 60% on the same cart.',
    tags: ['Money Saving', 'Coupon Tips', 'Online Shopping'],
    featured: true,
    content: `50% of Indians shop online specifically because of cashback and deals, according to Mintel. Which means half the country is already deal-hunting. The gap is between the ones who grab the first code they see and the ones who know how to stack.

Here are the ten moves that actually move the needle:

1. Stack every layer available. Sale price + coupon code + bank card offer + cashback app. A Rs 5,499 pair of headphones on Amazon during GIF came down to Rs 2,900 using exactly this approach - ICICI card offer, a verified Couponscrew code, and a cashback app running in the background. Less than half price.

2. Use your bank card at the right stores. HDFC, ICICI, and SBI card offers typically save 10% instant. Most shoppers skip this because they forget to check at checkout. Do not forget.

3. Check the 90-day price history before any purchase above Rs 3,000. A TV listed as "40% off Rs 49,999" may have been priced at Rs 29,999 six weeks ago. Price tracking tools exist for exactly this reason.

4. Use first-order discounts on your biggest purchase, not a test order. A 60% off first order is worth Rs 600 on a Rs 1,000 order. It is worth Rs 1,800 on a Rs 3,000 order.

5. Only use verified codes. Six codes tried, six failures, checkout abandoned - that is the experience on most coupon sites. We verify before we publish. That is the only meaningful difference.

6. Browse in incognito when you know you want something. Dynamic pricing is real on some platforms.

7. Set price drop alerts on wishlist items on Flipkart and Amazon. Add, forget, get notified. Genuinely underused.

8. Check mid-week for flash codes. Brands drop deeper promos on Tuesdays and Wednesdays when weekend traffic thins out.

9. Download the app for app-only deals, then use the deal. Keep the app if it is useful. Delete it if not. Do not keep seven apps installed for one-time codes.

10. Do not spend Rs 150 on things you do not need to hit a free delivery threshold on a Rs 40 delivery fee. That is a net loss. Add a useful item or pay the fee.`
  },
  {
    id: 'b-post-2',
    title: 'Amazon GIF vs Flipkart BBD: Which Sale Actually Saves You More?',
    category: 'Brand Reviews',
    image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=600&q=80',
    authorName: 'Priya Mehta',
    authorInitials: 'PM',
    authorColor: '#FF5722',
    date: 'Jan 22, 2025',
    readTime: '12 min read',
    excerpt: "India's festive season hit $14 billion GMV in 2024. Both sales are real events. But they are not equal across categories - and most shoppers pick the wrong platform for what they are buying.",
    tags: ['Amazon', 'Flipkart', 'Brand Comparison'],
    featured: false,
    content: `India's festive season e-commerce hit $14 billion GMV in 2024, a 12% jump year on year. Both Amazon's Great Indian Festival and Flipkart's Big Billion Days are genuinely good sales - not marketing theatre. But they are not identical, and picking the wrong platform for what you want is a real cost.

Here is what the data actually shows:

Electronics: GIF is stronger. Amazon India tends to win on base pricing for phones, laptops, and audio gear. The bank card offers (SBI 10% on GIF) stack well on top. If you want a phone, start on Amazon.

Fashion and appliances: BBD is stronger. Flipkart owns Myntra, has deeper relationships with Indian fashion brands, and runs some of its most aggressive fashion markdowns during BBD. Up to 80% off is real in this category.

The timing matters more than the platform. The real Big Billion Day deal window is the first four hours. A phone marked down to Rs 18,999 from Rs 24,999 can be sold out by 12:08am. Set an alarm or accept that you will pay near-normal prices. This is not pessimism - it is just how inventory works at this scale.

The stacking angle: On both platforms, the bank card offer layer is where most people leave money. HDFC on Flipkart, SBI on Amazon GIF - both typically 10% instant. Stack that with a coupon code and you are using two layers most shoppers never touch.

Honest verdict: For electronics, go Amazon GIF with an SBI card offer. For fashion and home, go Flipkart BBD and check for Couponscrew codes before checkout. The platform is less important than the combination you use on it.`
  },
  {
    id: 'b-post-3',
    title: 'How to Stack Coupons: Sale Price + Code + Bank Offer + Cashback',
    category: 'Coupon Tips',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
    authorName: 'Arjun Patel',
    authorInitials: 'AP',
    authorColor: '#22C55E',
    date: 'Feb 1, 2025',
    readTime: '6 min read',
    excerpt: 'Most shoppers use one discount layer. The stacking approach uses four - and the difference is not marginal. A Rs 5,000 purchase can realistically land at Rs 2,500 if you know the layers.',
    tags: ['Coupon Stacking', 'Money Saving', 'Pro Tips'],
    featured: false,
    content: `Stacking is not a loophole. Every layer is an intentional offer from the brand, the platform, or the bank. You are just using all of them at the same time.

The four layers:

Layer 1 - Sale price. The platform runs a 30-40% markdown. This is the base. Everyone gets this.

Layer 2 - Coupon code. A verified Couponscrew code adds another Rs 100-500 flat or 5-15% extra on top of the already-reduced price. This is where most people stop - or worse, try five expired codes from one of the best coupon sites for online shopping and still find them expired.

Layer 3 - Bank card offer. HDFC, ICICI, and SBI offer 10% instant discounts during major sales. Axis on Zomato and travel platforms. These are not hidden - they are right there at checkout. Most people do not have the right card selected or do not know the offer exists.

Layer 4 - Cashback app. A browser extension or cashback platform running in the background earns 1-5% back on the order value. This is the most underused layer in India. Most shoppers have never tried one.

Combined realistic saving on a Rs 5,000 order: 35-80% off original price, depending on how aggressive the sale is and which cards you hold.

Real example: a Rs 5,499 pair of headphones during Amazon GIF. 30% sale, ICICI card offer (10%), a Couponscrew-verified Rs 300 code, plus a cashback app. Final price: Rs 2,900. Less than half price. All four layers legal, all four intentional offers from the respective providers.

The only rule: use verified codes only. Trying dead codes burns time and sometimes locks you out of applying a real one.`
  },
  {
    id: 'b-post-4',
    title: 'Myntra EORS vs Ajio vs Flipkart Fashion: Where the Real Discounts Are',
    category: 'Fashion Deals',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80',
    authorName: 'Sneha Reddy',
    authorInitials: 'SR',
    authorColor: '#EC4899',
    date: 'Feb 8, 2025',
    readTime: '9 min read',
    excerpt: "Myntra's End of Reason Sale typically runs 50-80% off across 500+ brands - and unlike some platform sales, the discounts are real. Here is how to tell the real markdowns from the inflated-MRP theatre.",
    tags: ['Fashion', 'Myntra', 'Ajio'],
    featured: false,
    content: `Fashion is where affiliate commissions are highest - 8-12% on Flipkart and 9% on Amazon - which means it is also the category where brands invest most in promotional codes. That is good for shoppers who know where to look.

Myntra EORS: Genuinely good. Unlike some platform sales that inflate the MRP before marking it down, Myntra's End of Reason Sale typically has real markdowns. 50-80% off across 500+ brands is the usual range. Worth planning a shopping list for rather than impulse browsing.

Ajio: Best for indie apparel and budget footwear. Flat Rs 500 off on orders above Rs 1,490 is a common code structure and it is usually real. If you are buying casual wear or want Indian design labels, Ajio's code drops are worth tracking.

Flipkart Fashion: Strong for daily wear and ethnic wear under Rs 499. The no-code sale prices are aggressive, especially on weekends. Less useful for premium brands - go to Myntra for those.

How to spot fake discounts: Check whether the "original price" was actually the price six weeks ago. Price tracking tools show the 90-day history. A Rs 2,999 kurta suddenly "discounted" to Rs 999 from a "Rs 2,499 MRP" that nobody ever paid is the oldest trick in the catalogue. The EORS discounts tend to be cleaner than most.

Pro tip: Fashion affiliate commissions are the highest category on both Amazon India (9%) and Flipkart (8-12%). This means there is real brand budget behind fashion coupon codes. When Couponscrew lists a fashion code, there is usually a genuine offer behind it.`
  },
  {
    id: 'b-post-5',
    title: 'Swiggy vs Zomato Promo Codes: What Actually Works Right Now',
    category: 'Food & Grocery',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80',
    authorName: 'Rahul Sharma',
    authorInitials: 'RS',
    authorColor: '#5B4FBE',
    date: 'Feb 14, 2025',
    readTime: '7 min read',
    excerpt: 'Food delivery codes rotate constantly. A code that worked yesterday may not work today. Never bookmark a food delivery code - bookmark the page where we track them live.',
    tags: ['Swiggy', 'Zomato', 'Food Deals'],
    featured: false,
    content: `Swiggy's first-order discount is typically 50-60% off up to Rs 120. Zomato's is typically 50-60% off up to Rs 150. If you have not used either platform yet, that first order discount is the most valuable coupon you will ever get on food delivery.

Use it wisely. Someone once used a 60% off first order on Swiggy for a Rs 180 chai and snacks order. Saved Rs 108. The same offer would have fully applied to an order up to Rs 250 - meaning a Rs 250 order would have saved Rs 150. They left Rs 42 of free discount on the table by ordering small. Use first-order discounts on your biggest first order.

Beyond first orders:

Swiggy tends to have stronger payment-partner codes. CRED and Simpl offers on Swiggy are genuinely useful if you use those platforms. Swiggy One bundles grocery delivery perks from Instamart with the dining discount.

Zomato Gold eliminates delivery fees on participating restaurants. If you order from the same few restaurants more than three times a week, the maths on Gold works out.

The honest truth about food delivery codes: they rotate faster than any other category. A code that worked at noon may be exhausted by evening. This is not Couponscrew's fault or any coupon site's fault - food platforms deliberately cap redemptions to control margin.

The only reliable strategy: check right before you order, not hours earlier. And do not bookmark codes. Bookmark the live tracking page.`
  },
  {
    id: 'b-post-6',
    title: 'How to Book Cheap Flights in India: MakeMyTrip, EaseMyTrip and the Bank Card Trick',
    category: 'Travel Deals',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80',
    authorName: 'Priya Mehta',
    authorInitials: 'PM',
    authorColor: '#FF5722',
    date: 'Feb 20, 2025',
    readTime: '11 min read',
    excerpt: 'MakeMyTrip, Cleartrip, EaseMyTrip - each platform has a different coupon structure. The bank card trick saves Rs 300-450 per traveller before any promo code. Here is the full picture.',
    tags: ['Travel', 'Flights', 'MakeMyTrip'],
    featured: false,
    content: `Travel coupon codes have more restrictions than any other category. Minimum fare requirements, specific routes only, new user only, specific bank cards only. Read the fine print before you build your budget around a code.

That said, there are consistent patterns worth knowing:

EaseMyTrip often runs zero-convenience-fee promotions. On a two-person booking, that is Rs 600-900 saved before any coupon code. Check for these first - they are flat savings with no conditions.

MakeMyTrip's best deals are almost always tied to bank cards. ICICI, HDFC, and SBI flat discounts of 12-15% during sale periods are real. The catch: you need the right card. If your spouse or family member has the right card, check if the booking can route through their payment method. Same-household SBI card use saved Rs 820 on a Rs 8,200 laptop purchase on Flipkart - the travel equivalent works the same way.

Cleartrip is strongest for international routes. Domestic deals are less consistent.

Book on Tuesdays if you have flexibility. Flight pricing algorithms refresh inventory mid-week and you will often find lower base fares before the weekend demand kicks in.

Always check Couponscrew's live travel code page before hitting purchase. Travel codes are time-sensitive - a code that exists at the time you start searching may not exist when you finish comparison shopping twenty minutes later.`
  },
  {
    id: 'b-post-7',
    title: 'Hostinger India Deals: When to Buy and When to Wait for 85% Off',
    category: 'Tech Deals',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80',
    authorName: 'Arjun Patel',
    authorInitials: 'AP',
    authorColor: '#22C55E',
    date: 'Mar 1, 2025',
    readTime: '5 min read',
    excerpt: "Hostinger's 72-85% off deals are real - verified and recurring. But the discount fluctuates. A freelancer who bookmarked a 72% off deal and waited came back two weeks later to find 85% off. Waiting is a real strategy here.",
    tags: ['Web Hosting', 'Hostinger', 'Tech'],
    featured: false,
    content: `Hostinger India deals are legitimately among the best in web hosting globally. The 80-85% off figures are real, not fake-MRP theatre. They deep discount to acquire customers on long-term plans.

The pattern: a freelancer needed hosting, checked Hostinger on a random Tuesday and found 72% off. Bookmarked it. Came back three days later - same deal. Came back two weeks later - 85% off. Bought immediately.

That is not luck. Hostinger's promotional pricing genuinely fluctuates. Waiting for a deeper discount is a real strategy here, not wishful thinking. If you are not under immediate time pressure to launch, check weekly for 4-6 weeks.

The honest caveat: renewal prices are higher. Always significantly higher. If you buy a 4-year plan at 85% off and then renew at full price, the lifetime cost looks different. Factor that in upfront before locking into a long contract based purely on the entry price.

What to buy: The Premium Web Hosting plan for 48 months gives you the lowest initial monthly rate, a free domain, free SSL, and enough bandwidth for most projects. For a food blog, portfolio, or small business site, this is the tier to start with.

What to avoid: buying the cheapest single-year plan to test it. The discount structure means short plans are nearly always a worse deal per month than the 4-year option. If you are serious about the site, commit to the long plan when the deal is at its deepest.`
  },
  {
    id: 'b-post-8',
    title: 'How to Cut Your Monthly Grocery Bill on BigBasket and Blinkit',
    category: 'Food & Grocery',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80',
    authorName: 'Sneha Reddy',
    authorInitials: 'SR',
    authorColor: '#EC4899',
    date: 'Mar 8, 2025',
    readTime: '8 min read',
    excerpt: 'Quick commerce hit Rs 60,000+ crore in FY25 and is growing at over 110% annually. The convenience comes with a margin cost. Here is how to keep both.',
    tags: ['BigBasket', 'Grocery', 'Money Saving'],
    featured: false,
    content: `Quick commerce - Blinkit, Zepto, Swiggy Instamart - hit Rs 7-8 billion in FY25 and is growing at 110-130% CAGR. That growth is driven by convenience, and convenience costs money. Delivery charges, handling fees, and slightly inflated prices on impulse items add up across a month.

There are straightforward ways to keep the convenience without paying the full convenience premium:

BigBasket BB Daily for staples. Set up recurring orders for milk, eggs, and staples on BB Daily. This qualifies you for recurring wallet cashback that standalone orders do not. Boring but effective.

Buy private-label groceries. BigBasket's BB Popular range and Amazon's Presto brand typically run 20-25% cheaper than branded equivalents for household staples like detergent, rice, and pulses. The quality difference is negligible on commodities.

Stack Instamart and Blinkit with payment cashbacks. CRED Pay and Paytm cashbacks on quick commerce orders add 3-5% back on order value. Small per order, meaningful over a month.

Time large orders to hit minimum thresholds once, not small orders multiple times. Five Rs 200 orders at Rs 20 delivery each costs Rs 100 in delivery fees. One Rs 1,000 order with free delivery costs nothing. Plan weekly rather than daily if you can.

Check Couponscrew's grocery codes weekly — one of the best coupon code websites for this category. We verify fresh grocery coupons specifically because the turnover is high - a code that is active today may not be active next week.`
  },
  {
    id: 'b-post-9',
    title: 'Nykaa Sale Strategy: How to Stack Discounts on Premium Beauty',
    category: 'Fashion Deals',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80',
    authorName: 'Priya Mehta',
    authorInitials: 'PM',
    authorColor: '#FF5722',
    date: 'Mar 15, 2025',
    readTime: '6 min read',
    excerpt: 'Nykaa sale discounts reach up to 60% off beauty products. But the real savings come from stacking bank card offers on top. Here is the timing and the strategy.',
    tags: ['Nykaa', 'Beauty', 'Fashion'],
    featured: false,
    content: `Nykaa sale discounts typically reach up to 60% off beauty products. The Pink Friday Sale and the Independence Day specials are the two calendar windows where premium brands actually participate - not just the budget lines.

The stacking opportunity: beauty and personal care commissions on Amazon India run 6-8% and Flipkart runs 6-10%. This category has real brand budget behind its promo codes. When a Nykaa code lands on Couponscrew, there is genuine margin behind it.

How to get the most out of a Nykaa sale:

Download the app. Nykaa reserves app-exclusive codes that are not available on desktop. This is not a rumour - it is a deliberate push to drive app installs. Install it for the sale, use the code, keep the app if you find it useful.

Check freebie bundles. Premium brands like MAC, Clinique, and Estee Lauder bundle gratis gifts worth Rs 1,000-1,500 during promotional weeks. This is not a discount but it changes the effective value of the purchase significantly.

Stack a bank card offer. HDFC and Kotak typically run 10% instant discounts on Nykaa during major sale events. The bank card layer is the one most shoppers miss.

Check whether the product is actually on sale. Nykaa's catalogue is huge and not everything participates in every sale. Filter by "Sale" specifically and compare the current price against what you remember paying or seeing a month ago. Price tracking before any Rs 3,000+ purchase is non-negotiable.`
  },
  {
    id: 'b-post-10',
    title: '5 Shopping Habits That Cost Indian Shoppers Thousands Every Year',
    category: 'Money Saving',
    image: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=600&q=80',
    authorName: 'Rahul Sharma',
    authorInitials: 'RS',
    authorColor: '#5B4FBE',
    date: 'Mar 22, 2025',
    readTime: '10 min read',
    excerpt: 'These are not obscure mistakes. They are the default behaviour for most Indian online shoppers. Each one costs real money, and each one has a straightforward fix.',
    tags: ['Money Saving', 'Shopping Tips', 'Mistakes'],
    featured: false,
    content: `These five habits are the defaults - most Indian online shoppers do at least two of them without realising the cost.

1. Buying to hit free delivery thresholds. Spending Rs 150 on something you do not need to avoid a Rs 40 delivery fee is a net loss of Rs 110. Accept the delivery charge or wait until you have a genuine reason to reach the threshold.

2. Trusting "sale" prices without checking the history. A TV listed at 40% off a Rs 49,999 MRP may have been Rs 29,999 six weeks earlier on the same platform. The 90-day price history tells the real story. Use a price tracking tool before any purchase above Rs 3,000.

3. Skipping the bank card offer at checkout. HDFC, ICICI, SBI - all three regularly offer 10% instant on major platforms during sales. Most shoppers either do not know or do not have the card selected. If your household has any of these cards, this is the easiest Rs 300-500 save with zero effort.

4. Using refer-and-earn schemes as a savings strategy. Someone spent 45 minutes referring friends to three apps to earn Rs 150 in credits. One expired before they could use it. Net saving: Rs 80. Time spent: 45 minutes. Do it once per app, then stop - you are doing unpaid marketing for a brand for Rs 50.

5. Trying coupon codes from sites that do not verify. Six codes, six failures, checkout abandoned. This is the experience on most coupon aggregators — even the best websites for couponing get this wrong. We verify before we publish. The 92.4% success rate on Couponscrew exists because we check the codes before listing them - not after you fail.`
  },
  {
    id: 'b-post-11',
    title: 'Cashback Apps in India: Which Ones Actually Pay Out?',
    category: 'Shopping Guides',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    authorName: 'Arjun Patel',
    authorInitials: 'AP',
    authorColor: '#22C55E',
    date: 'Apr 1, 2025',
    readTime: '9 min read',
    excerpt: '50% of Indians shop online because of cashback offers - more than product discounts. But most cashback apps have hidden redemption thresholds that dilute the actual value. Here is how to pick the right ones.',
    tags: ['Cashback', 'Apps', 'Shopping Guide'],
    featured: false,
    content: `50% of Indians shop online because of cashback offers versus 46% who cite product discounts, according to Mintel. Cashback is the primary motivator. Which makes it worth understanding which apps actually deliver and which ones bury the payout in conditions.

The most important things to check:

How does it actually pay out? Some apps offer "cashback" that is actually brand vouchers or in-app credits with minimum order conditions. Real cashback means UPI withdrawal or bank transfer. If it cannot go to your bank, it is not really cashback - it is a coupon in disguise.

What is the tracking window? Good apps confirm order tracking within 48 hours. Validation before payout takes longer - up to 60 days on some merchants due to return policy windows. This is standard, not a red flag. What is a red flag: no tracking confirmation at all.

What is the minimum redemption threshold? Some apps require Rs 500 or Rs 1,000 before you can withdraw. If you are earning Rs 30-50 per order and shopping occasionally, you could wait months.

Browser extension cashback apps are the most underused savings tool in India. Stack one with a Couponscrew coupon code on a sale day and you are running all four discount layers simultaneously. Most shoppers do not know this layer exists.

Honest bottom line: cashback apps are worth using as the final layer on top of a verified coupon and a bank card offer. They are not worth building a shopping strategy around on their own. The rates are small (1-5% typically) and the payout conditions matter.`
  },
  {
    id: 'b-post-12',
    title: 'How Couponscrew Works: Finding Verified Codes in Under 30 Seconds',
    category: 'Shopping Guides',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
    authorName: 'Sneha Reddy',
    authorInitials: 'SR',
    authorColor: '#EC4899',
    date: 'Apr 10, 2025',
    readTime: '4 min read',
    excerpt: 'We list 10,000+ coupons across 500+ brands. Our success rate is 92.4% because we verify before publishing, not after you fail. Here is exactly how to use the platform.',
    tags: ['Couponscrew', 'Beginners Guide', 'Coupon Tips'],
    featured: false,
    content: `Couponscrew — one of the best websites for couponing — lists 10,000+ active coupons across 500+ brands. The 92.4% success rate is the number we are most proud of - it exists because we verify every code before it goes live, not because we hope it works.

Here is how to use it in under 30 seconds:

Step 1: Search your store. Type the brand name - Amazon, Myntra, Zomato, Hostinger, whatever you are buying from - into the search bar. You will see all active verified codes for that brand.

Step 2: Check the details. Every code shows the discount value, minimum order if there is one, expiry date, and any category restrictions. We show you the terms upfront so you do not waste a click on a code that will not apply to your order.

Step 3: Click Get Code. The code copies automatically and the brand page opens in a new tab, ready for checkout.

Step 4: Paste at checkout. Drop the code in the promo field. Watch the total drop.

The whole thing takes under a minute. The code works 92.4% of the time. When it does not work, it is almost always because the brand has deactivated it within the last few hours - which we cannot control. What we can do is fix it fast when you report it.

One more thing: always check for a bank card offer at checkout after applying the coupon. The coupon is layer two. The bank card offer is layer three. Both are sitting there. Using only one of them is leaving money at checkout.`
  }
];

const POPULAR_TOPICS: PopularTopic[] = [
  { id: 't-1', name: 'Coupon Tips', iconType: 'tag', count: 3, colorClass: 'text-[#5B4FBE]', bgClass: 'bg-[#F0EEFF]', iconColor: '#5B4FBE' },
  { id: 't-2', name: 'Shopping Guides', iconType: 'book', count: 2, colorClass: 'text-blue-600', bgClass: 'bg-[#EEF4FF]', iconColor: '#0056D2' },
  { id: 't-3', name: 'Brand Reviews', iconType: 'star', count: 1, colorClass: 'text-amber-500', bgClass: 'bg-[#FFF8E7]', iconColor: '#FF9900' },
  { id: 't-4', name: 'Money Saving', iconType: 'piggy', count: 2, colorClass: 'text-emerald-600', bgClass: 'bg-[#F4FBEA]', iconColor: '#22C55E' },
  { id: 't-5', name: 'Tech Deals', iconType: 'monitor', count: 1, colorClass: 'text-purple-600', bgClass: 'bg-[#F5F2FF]', iconColor: '#7C3AED' },
  { id: 't-6', name: 'Fashion Deals', iconType: 'bag', count: 2, colorClass: 'text-pink-600', bgClass: 'bg-[#FFF0F4]', iconColor: '#EC4899' },
  { id: 't-7', name: 'Food & Grocery', iconType: 'food', count: 2, colorClass: 'text-orange-600', bgClass: 'bg-[#FFF5EC]', iconColor: '#FC8019' },
  { id: 't-8', name: 'Travel Deals', iconType: 'plane', count: 1, colorClass: 'text-rose-600', bgClass: 'bg-[#FEF0F0]', iconColor: '#E8262A' }
];

const CATEGORIES_LIST = [
  'All',
  'Coupon Tips',
  'Shopping Guides',
  'Brand Reviews',
  'Money Saving',
  'Tech Deals',
  'Fashion Deals',
  'Food & Grocery',
  'Travel Deals'
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Newsletter State
  const [newsEmail, setNewsEmail] = useState('');
  const [newsSubmitted, setNewsSubmitted] = useState(false);

  // Categories map to render their corresponding Icons
  const renderTopicIcon = (type: string, size: number = 18) => {
    switch (type) {
      case 'tag':
        return <Tag size={size} />;
      case 'book':
        return <BookOpen size={size} />;
      case 'star':
        return <Star size={size} />;
      case 'piggy':
        return <PiggyBank size={size} />;
      case 'monitor':
        return <Monitor size={size} />;
      case 'bag':
        return <ShoppingBag size={size} />;
      case 'food':
        return <UtensilsCrossed size={size} />;
      case 'plane':
        return <Plane size={size} />;
      default:
        return <Tag size={size} />;
    }
  };

  // Find Featured Post
  const featuredPost = useMemo(() => {
    return BLOG_POSTS_DATA.find((post) => post.featured) || BLOG_POSTS_DATA[0];
  }, []);

  // Filtered post records based on active category
  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') {
      return BLOG_POSTS_DATA;
    }
    return BLOG_POSTS_DATA.filter(
      (post) => post.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [activeCategory]);

  // Reset pagination on category toggle
  useEffect(() => {
    setVisibleCount(6);
  }, [activeCategory]);

  const displayedPosts = useMemo(() => {
    return filteredPosts.slice(0, visibleCount);
  }, [filteredPosts, visibleCount]);

  const handleTopicClick = (catName: string) => {
    setActiveCategory(catName);
    const element = document.getElementById('blog-grid-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubscribeNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsEmail.trim()) {
      setNewsSubmitted(true);
      setNewsEmail('');
      setTimeout(() => setNewsSubmitted(false), 4500);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans antialiased text-[#4A4A6A]">
      <Navbar />

      {/* ==========================================
          SECTION 1 - HERO BANNER
          ========================================== */}
      <section className="relative w-full min-h-[380px] bg-gradient-to-br from-[#1A1A2E] via-[#2D2570] to-[#5B4FBE] overflow-hidden flex items-center justify-center text-center py-16 px-6">

        {/* Decorative dot grids */}
        <div className="absolute top-10 left-10 grid grid-cols-5 gap-3 pointer-events-none opacity-20 z-0">
          {Array.from({ length: 25 }).map((_, idx) => (
            <div key={idx} className="w-1.5 h-1.5 bg-white rounded-full"></div>
          ))}
        </div>
        <div className="absolute right-12 bottom-12 grid grid-cols-6 gap-2.5 pointer-events-none opacity-10 z-0">
          {Array.from({ length: 18 }).map((_, idx) => (
            <div key={idx} className="w-1.5 h-1.5 bg-white rounded-full"></div>
          ))}
        </div>

        <div className="absolute top-[-80px] left-[-80px] w-80 h-80 bg-purple-500 rounded-full opacity-10 filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-80px] right-[-80px] w-80 h-80 bg-[#FF5722] rounded-full opacity-10 filter blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 space-y-5">
          {/* Breadcrumb row */}
          <div className="flex items-center justify-center gap-2 text-white/50 text-xs tracking-wider uppercase select-none">
            <Link href="/" className="hover:text-white transition-colors duration-200">HOME</Link>
            <ChevronRight size={12} className="text-white/40 shrink-0" />
            <span className="text-white font-semibold">BLOG</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mt-6">
            <span className="text-white">Our </span>
            <span className="text-[#FF5722]">Blog</span>
          </h1>

          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Real deal strategies, platform comparisons, and money-saving guides from people who spend their days verifying coupons. No filler, no generic listicles.
          </p>

          {/* 3 stat pills row */}
          <div className="pt-4 flex justify-center gap-4 flex-wrap select-none text-xs sm:text-sm">
            <div className="bg-white/10 border border-white/20 text-white font-semibold px-5 py-2 rounded-full flex items-center gap-2 hover:bg-white/15 transition-all duration-200">
              <BookOpen size={14} className="text-[#FF5722]" />
              <span>50+ Articles Published</span>
            </div>
            <div className="bg-white/10 border border-white/20 text-white font-semibold px-5 py-2 rounded-full flex items-center gap-2 hover:bg-white/15 transition-all duration-200">
              <PenTool size={14} className="text-[#FFD700]" />
              <span>Updated Weekly</span>
            </div>
            <div className="bg-white/10 border border-white/20 text-white font-semibold px-5 py-2 rounded-full flex items-center gap-2 hover:bg-white/15 transition-all duration-200">
              <Users size={14} className="text-teal-400" />
              <span>50,000+ Registered Users</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 2 - FEATURED POST (HERO ARTICLE)
          ========================================== */}
      <section className="bg-white py-14 px-6 relative z-10 border-b border-[#E8E8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* LEFT - Featured Image */}
            <div className="lg:col-span-5 relative group overflow-hidden max-w-xl mx-auto lg:max-w-none w-full">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                referrerPolicy="no-referrer"
                className="w-full h-[380px] object-cover rounded-3xl shadow-xl transition-transform duration-500 group-hover:scale-[1.02]"
              />

              {/* Overlays */}
              <span className="bg-[#FF5722] text-white text-xs font-bold px-4 py-2 rounded-full absolute top-4 left-4 flex items-center gap-1.5 shadow-md">
                <Star size={12} className="fill-white" />
                <span>FEATURED</span>
              </span>

              <span className="bg-[#5B4FBE] text-white text-xs font-semibold px-3 py-1 rounded-full absolute bottom-4 left-4 shadow-sm uppercase tracking-wide">
                {featuredPost.category}
              </span>
            </div>

            {/* RIGHT - Content */}
            <div className="lg:col-span-7 text-left space-y-4">
              <span className="bg-[#F0EEFF] text-[#5B4FBE] text-xs font-bold px-3 py-1.5 rounded-full inline-block tracking-wider uppercase">
                SHOPPING TIPS
              </span>

              <h2
                onClick={() => setSelectedPost(featuredPost)}
                className="text-3xl font-extrabold text-[#1A1A2E] leading-tight hover:text-[#5B4FBE] transition-colors cursor-pointer"
              >
                {featuredPost.title}
              </h2>

              <p className="text-[#4A4A6A] text-base leading-relaxed">
                {featuredPost.excerpt}
              </p>

              {/* Meta row */}
              <div className="flex items-center gap-4 flex-wrap text-xs md:text-sm text-gray-400 font-medium pt-1">
                <div className="flex items-center gap-2">
                  <div
                    className="w-8.5 h-8.5 rounded-full flex items-center justify-center text-white text-xs font-bold select-none shrink-0"
                    style={{ backgroundColor: featuredPost.authorColor }}
                  >
                    {featuredPost.authorInitials}
                  </div>
                  <span className="font-semibold text-[#1A1A2E]">{featuredPost.authorName}</span>
                </div>
                <span className="text-gray-300">&bull;</span>
                <div className="flex items-center gap-1">
                  <Calendar size={14} className="text-gray-400" />
                  <span>{featuredPost.date}</span>
                </div>
                <span className="text-gray-300">&bull;</span>
                <div className="flex items-center gap-1">
                  <Clock size={14} className="text-gray-400" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>

              {/* Tags row */}
              <div className="flex gap-2 flex-wrap pt-2">
                {featuredPost.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-[#F8F8FF] border border-[#E8E8F0] text-xs font-medium text-[#4A4A6A] px-3.5 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Read More button */}
              <button
                onClick={() => setSelectedPost(featuredPost)}
                className="bg-[#5B4FBE] hover:bg-[#4a3fa8] text-white px-8 py-3.5 rounded-full font-bold flex items-center justify-center gap-2 w-fit transition-all shadow-md hover:shadow-lg active:scale-95 duration-200 cursor-pointer text-sm mt-6"
              >
                <span>Read Full Article</span>
                <ArrowRight size={18} />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 3 - CATEGORY FILTER TABS + BLOG GRID
          ========================================== */}
      <section id="blog-grid-section" className="bg-[#F8F8FF] py-16 px-6">
        <div className="max-w-7xl mx-auto">

          {/* SECTION HEADING */}
          <div className="text-center mb-10">
            <h3 className="text-3xl font-extrabold text-[#1A1A2E]">
              Latest <span className="text-[#5B4FBE]">Insights</span>
            </h3>
            <div className="w-16 h-1 bg-[#FF5722] rounded-full mx-auto mt-3" />
          </div>

          {/* CATEGORY FILTER TABS */}
          <div className="flex items-center gap-2.5 overflow-x-auto justify-start md:justify-center pb-8 pt-2 no-scrollbar max-w-5xl mx-auto scroll-smooth">
            {CATEGORIES_LIST.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm cursor-pointer font-semibold transition-all duration-300 shrink-0 select-none shadow-xs border ${
                    isActive
                      ? 'bg-[#5B4FBE] border-[#5B4FBE] text-white'
                      : 'bg-white border-[#E8E8F0] text-[#4A4A6A] hover:border-[#5B4FBE] hover:text-[#5B4FBE]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* BLOG GRID */}
          {displayedPosts.length === 0 ? (
            <div className="py-20 text-center space-y-4 bg-white rounded-3xl border border-[#E8E8F0] max-w-4xl mx-auto shadow-xs">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto" />
              <h4 className="font-bold text-[#1A1A2E] text-lg">No articles found</h4>
              <p className="text-gray-400 text-sm max-w-sm mx-auto">
                No blog posts belong to the &quot;{activeCategory}&quot; category at the moment. Explore other categories tabs.
              </p>
              <button
                onClick={() => setActiveCategory('All')}
                className="bg-[#5B4FBE] text-white font-bold px-6 py-2.5 rounded-full text-xs cursor-pointer shadow-md"
              >
                View All Articles
              </button>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto space-y-5">
              {displayedPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl border border-[#E8E8F0] overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group flex flex-col md:flex-row shadow-xs"
                >
                  {/* LEFT - Image block */}
                  <div className="relative overflow-hidden md:w-56 shrink-0 h-48 md:h-auto min-h-[192px]">
                    <img
                      src={post.image}
                      alt={post.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Category badge */}
                    <span className="absolute top-3 left-3 bg-[#5B4FBE] text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {post.category}
                    </span>
                  </div>

                  {/* RIGHT - Content */}
                  <div className="flex-1 p-5 flex flex-col justify-between text-left">
                    <div>
                      {/* Meta row */}
                      <div className="flex items-center gap-3 text-xs text-gray-400 font-medium">
                        <div className="flex items-center gap-1 shrink-0">
                          <Calendar size={12} className="text-gray-400" />
                          <span>{post.date}</span>
                        </div>
                        <span className="w-1.5 h-1.5 bg-gray-200 rounded-full shrink-0" />
                        <div className="flex items-center gap-1 shrink-0">
                          <Clock size={12} className="text-gray-400" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h4
                        onClick={() => setSelectedPost(post)}
                        className="text-base sm:text-lg font-bold text-[#1A1A2E] leading-snug line-clamp-2 mt-2 hover:text-[#5B4FBE] transition-colors cursor-pointer"
                      >
                        {post.title}
                      </h4>

                      {/* Excerpt */}
                      <p className="text-sm text-[#4A4A6A] leading-relaxed line-clamp-2 mt-2 font-light">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Bottom Row */}
                    <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between gap-4 flex-wrap">
                      {/* Left: Author Row */}
                      <div className="flex items-center gap-2">
                        <div
                          className="w-7.5 h-7.5 rounded-full flex items-center justify-center text-white text-[10px] font-bold select-none shrink-0"
                          style={{ backgroundColor: post.authorColor }}
                        >
                          {post.authorInitials}
                        </div>
                        <span className="text-xs font-semibold text-[#1A1A2E]">{post.authorName}</span>
                      </div>

                      {/* Right: READ MORE */}
                      <button
                        onClick={() => setSelectedPost(post)}
                        className="text-xs font-extrabold text-[#FF5722] hover:text-orange-600 active:scale-95 flex items-center gap-1 cursor-pointer transition-all duration-200 uppercase tracking-widest pl-2 py-1 select-none"
                      >
                        <span>READ MORE</span>
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination Load More Button */}
          {filteredPosts.length > 0 && (
            <div className="text-center mt-10">
              {visibleCount >= filteredPosts.length ? (
                <button
                  disabled
                  className="bg-[#F0EEFF] text-[#5B4FBE] px-10 py-3.5 rounded-full font-bold border-2 border-[#F0EEFF] transition-all duration-200 mx-auto inline-block cursor-not-allowed text-sm"
                >
                  You&apos;re All Caught Up
                </button>
              ) : (
                <button
                  onClick={() => setVisibleCount(12)}
                  className="border-2 border-[#5B4FBE] text-[#5B4FBE] px-10 py-3.5 rounded-full font-bold hover:bg-[#5B4FBE] hover:text-white transition-all duration-200 mx-auto block active:scale-95 cursor-pointer text-sm shadow-xs"
                >
                  Load More Articles
                </button>
              )}
            </div>
          )}

        </div>
      </section>

      {/* ==========================================
          SECTION 4 - NEWSLETTER STRIP
          ========================================== */}
      <section className="bg-gradient-to-r from-[#5B4FBE] to-[#7C3AED] py-14 px-6 relative overflow-hidden text-center text-white">

        {/* Glow dots decor */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/5 rounded-full filter blur-2xl pointer-events-none" />
        <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-white/5 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 space-y-4">
          <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-white shrink-0 mx-auto border border-white/20">
            <Mail size={24} className="animate-pulse" />
          </div>

          <h3 className="text-3xl font-extrabold text-white tracking-tight">
            Never Miss a Couponscrew Deal Alert
          </h3>

          <p className="text-white/70 text-base max-w-xl mx-auto leading-relaxed">
            We verify 10,000+ coupons across 500+ brands. Get the best ones delivered to your inbox before they expire. Join 50,000+ shoppers who already get the alerts.
          </p>

          {/* Email Subscription Row */}
          <form onSubmit={handleSubscribeNewsletter} className="mt-8 flex flex-col sm:flex-row max-w-md mx-auto items-stretch gap-1 sm:gap-0 relative">
            <input
              type="email"
              required
              value={newsEmail}
              onChange={(e) => setNewsEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 bg-white rounded-t-full sm:rounded-y-full sm:rounded-l-full sm:rounded-r-none px-6 py-4 text-sm text-[#1A1A2E] focus:outline-none placeholder:text-gray-400 border border-transparent shadow-md"
            />
            <button
              type="submit"
              className="bg-[#FF5722] text-white px-8 py-4 rounded-b-full sm:rounded-y-full sm:rounded-r-full sm:rounded-l-none font-bold hover:bg-orange-500 transition-colors cursor-pointer text-sm tracking-wide shrink-0 whitespace-nowrap active:scale-[0.98] shadow-md border-t sm:border-t-0 sm:border-l border-white/10"
            >
              Subscribe
            </button>
          </form>

          {newsSubmitted && (
            <div className="text-teal-300 font-bold text-sm flex items-center justify-center gap-1.5 animate-pulse pt-2">
              <CheckCircle size={16} />
              <span>Done. Deal alerts are on their way.</span>
            </div>
          )}

          <p className="text-white/40 text-xs pt-1">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* ==========================================
          SECTION 5 - POPULAR TOPICS STRIP
          ========================================== */}
      <section className="bg-white py-12 px-6 border-t border-[#E8E8F0]">
        <div className="max-w-7xl mx-auto text-center">

          <h3 className="text-xl font-bold text-[#1A1A2E] mb-8 tracking-tight">
            Browse by Topic
          </h3>

          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {POPULAR_TOPICS.map((topic) => (
              <div
                key={topic.id}
                onClick={() => handleTopicClick(topic.name)}
                className="bg-[#F8F8FF] border border-[#E8E8F0] rounded-2xl px-6 py-4 flex items-center gap-3.5 cursor-pointer hover:border-[#5B4FBE] hover:bg-[#F0EEFF] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group select-none shadow-2xs shrink-0"
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold shrink-0 ${topic.bgClass} group-hover:bg-white group-hover:scale-105 transition-all duration-300`}
                  style={{ color: topic.iconColor }}
                >
                  {renderTopicIcon(topic.iconType, 16)}
                </div>

                <div className="text-left leading-none">
                  <span className="text-sm font-semibold text-[#1A1A2E] group-hover:text-[#5B4FBE] transition-colors block">
                    {topic.name}
                  </span>
                  <span className="text-[10px] text-gray-400 font-medium block mt-1 uppercase tracking-wider">
                    {topic.count} {topic.count === 1 ? 'article' : 'articles'}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================
          IMMERSIVE INTERACTIVE READER MODAL
          ========================================== */}
      {selectedPost && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs select-none">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col relative border border-[#E8E8F0] animate-in fade-in zoom-in duration-300">

            {/* Header image cover */}
            <div className="relative h-56 shrink-0">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 active:scale-90 transition-all cursor-pointer shadow-md"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-left">
                <span className="bg-[#5B4FBE] text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {selectedPost.category}
                </span>
                <h3 className="text-white text-lg md:text-xl font-bold mt-2 select-text tracking-tight line-clamp-2">
                  {selectedPost.title}
                </h3>
              </div>
            </div>

            {/* Content body area */}
            <div className="p-6 overflow-y-auto flex-1 text-left space-y-4 select-text">
              {/* Meta row */}
              <div className="flex items-center gap-3 text-xs text-gray-400 font-medium pb-2 border-b border-gray-100 flex-wrap">
                <div className="flex items-center gap-2">
                  <div
                    className="w-6.5 h-6.5 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0"
                    style={{ backgroundColor: selectedPost.authorColor }}
                  >
                    {selectedPost.authorInitials}
                  </div>
                  <span className="font-semibold text-gray-600">{selectedPost.authorName}</span>
                </div>
                <span className="text-gray-200">|</span>
                <div className="flex items-center gap-1.5 label text-xs text-gray-400">
                  <Calendar size={12} />
                  <span>{selectedPost.date}</span>
                </div>
                <span className="text-gray-200">|</span>
                <div className="flex items-center gap-1.5 label text-xs text-gray-400">
                  <Clock size={12} />
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>

              {/* Content */}
              <div className="text-[#4A4A6A] text-sm leading-relaxed whitespace-pre-wrap font-sans space-y-3 pt-2">
                {selectedPost.content}
              </div>

              {/* Tags */}
              <div className="pt-4 flex gap-1.5 flex-wrap">
                {selectedPost.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-[#F8F8FF] border border-[#E8E8F0] text-[10px] font-semibold text-gray-500 px-3 py-1 rounded-full uppercase"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer bar */}
            <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end shrink-0 select-none">
              <button
                onClick={() => setSelectedPost(null)}
                className="bg-[#5B4FBE] text-white hover:bg-[#4a3fa8] font-bold text-xs px-6 py-2.5 rounded-full active:scale-95 cursor-pointer transition shadow-md"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
