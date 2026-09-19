'use client'

import { useState } from 'react'
import Link from 'next/link'
import NextImage from 'next/image'
import {
  ChevronRight,
  Calendar,
  Clock,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Tag,
  Sparkles,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  Check,
} from 'lucide-react'
import Navbar from '../../../../src/components/Navbar'
import Footer from '../../../../src/components/Footer'

const PAGE_URL = 'https://www.couponscrew.com/blog/how-to-save-money-shopping-online-india'
const PAGE_TITLE = 'How to Save Money Shopping Online in India — Introducing CouponsCrew'

const RELATED_POSTS = [
  {
    slug: 'raksha-bandhan-gift-ideas',
    title: '10 Best Raksha Bandhan Gift Ideas 2026 — Discount Codes to Save More',
    category: 'Festive Guides',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1787588384/raksha-bandhan-gift-ideas_z16zzz.webp',
    date: 'Aug 24, 2026',
    readTime: '8 min read',
    excerpt: 'Discover thoughtful and trending Raksha Bandhan gift ideas for brothers and sisters, and learn how to stack coupons, bank offers, and cashback to save extra on every gift.',
  },
  {
    slug: 'bigg-boss-season-20-where-to-watch-deals',
    title: 'Bigg Boss Season 20 (2026): Where to Watch, Price & Best Deals',
    category: 'Entertainment Guides',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1789314709/bigg-boss-season-20-where-to-watch-deals_ggtlzz.webp',
    date: 'Sep 6, 2026',
    readTime: '7 min read',
    excerpt: "Bigg Boss 20 is streaming on JioHotstar from September 6, 2026. Here's where to watch, what it costs, confirmed contestants, and the best deals to make your BB nights cheaper.",
  },
]

const faqs = [
  {
    q: 'What is the most effective way to save money shopping online in India?',
    a: 'Stack layers instead of picking one. Start with the sale price, add a verified coupon code on top, apply a bank card offer at checkout, and run a cashback app in the background. Each layer is a separate, legal discount — combined, they realistically save 35–80% on the same order.',
  },
  {
    q: 'Should I use a credit or debit card for online shopping?',
    a: 'Whichever one has an active bank offer on the platform you’re buying from. HDFC, ICICI, and SBI all run instant 10% discounts on Amazon, Flipkart, and most major sites during sale events. Check before you check out — it’s usually sitting right there, unselected.',
  },
  {
    q: 'When is the best time to buy expensive items online in India?',
    a: 'During Amazon’s Great Indian Festival or Flipkart’s Big Billion Days — but only in the first few hours. Most of the genuinely deep stock sells out fast. Outside festive sales, track the price for a few weeks; platforms quietly run smaller discounts more often than people assume.',
  },
  {
    q: 'Do coupon codes actually work, or are most of them expired?',
    a: 'Most listed online are dead. Coupon sites that scrape codes without checking them are why "six codes, six failures" feels normal. Codes that are manually tested before publishing — which is what CouponsCrew does — work far more reliably. Our success rate sits at 92.4%.',
  },
  {
    q: 'What’s the easiest savings layer most people skip?',
    a: 'The bank card offer. It costs zero effort, applies automatically at payment, and most shoppers simply forget to check for it. If your card qualifies, it’s the closest thing to free money at checkout.',
  },
]

export default function ShoppingIndia() {
  const [copied, setCopied] = useState(false)

  const handleCopyLink = () => {
    navigator.clipboard.writeText(PAGE_URL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans antialiased text-[#4A4A6A]">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 flex-wrap">
            <Link href="/" className="hover:text-[#5B4FBE] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/blog" className="hover:text-[#5B4FBE] transition-colors">Blog</Link>
            <ChevronRight size={12} />
            <span className="text-[#1A1A2E] font-medium truncate">How to Save Money Shopping Online in India</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* MAIN CONTENT */}
            <article className="lg:col-span-8">
              <span className="inline-block bg-[#F0EEFF] text-[#5B4FBE] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                Shopping Guides
              </span>

              <div className="flex items-center gap-4 text-xs text-gray-400 font-medium mt-3 flex-wrap">
                <div className="flex items-center gap-1.5">
                  <Clock size={13} />
                  <span>9 min read</span>
                </div>
                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                <div className="flex items-center gap-1.5">
                  <Calendar size={13} />
                  <span>Jun 22, 2026</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A2E] leading-tight mt-4">
                How to Save Money Shopping Online in India — Introducing CouponsCrew
              </h1>

              <p className="text-xs text-gray-400 font-medium mt-3">
                Reviewed by the Couponscrew Coupon Team · Codes last checked Jun 22, 2026
              </p>

              <div className="relative w-full h-64 sm:h-96 rounded-3xl overflow-hidden mt-6 shadow-lg">
                <NextImage
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1783240314/how-to-save-money-shopping-online-india_hdltd5.webp"
                  alt="How to Save Money Shopping Online in India — CouponsCrew"
                  fill
                  priority
                  referrerPolicy="no-referrer"
                  className="object-cover"
                />
              </div>

              <div className="prose-content mt-8 space-y-6 text-[#1A1A2E] text-[15px] leading-relaxed">
                <p className="font-semibold text-[#1A1A2E]">
                  The short answer: stack your discounts instead of using one. Start with the sale price, add a verified coupon code, apply a bank card offer at checkout, and let a cashback app run in the background. Done right, that combination realistically saves 35–80% on the same order — not a typo, just four layers instead of one.
                </p>

                <p>
                  Here&apos;s the part nobody tells you: you&apos;ve probably tried this already and given up. You found a code on some random site, typed it in, got an error. Tried another one. Error. Tried a third. Checkout abandoned, dignity slightly dented, browser tab closed in disgust. Six codes, six failures — that&apos;s not bad luck, that&apos;s just what happens when a site lists every code it can scrape and never checks if any of them still work.
                </p>

                <p>
                  This guide is the version of that process that actually works. Eight ways to shop smarter in India, then a straight introduction to CouponsCrew — what it does differently, and why that difference is the whole point.
                </p>

                <h2 className="text-2xl font-extrabold text-[#1A1A2E] pt-2">1. Check the Price History Before You Trust the Discount</h2>
                <p>
                  Every platform runs sales — GIF, BBD, EORS, end-of-season clearances — and the discount shown is a starting point, not a verified fact. Someone once noticed a TV listed as &quot;40% off ₹49,999&quot; that had quietly sold for ₹29,999 on the same platform six weeks earlier. The &quot;original price&quot; had been inflated specifically so the markdown looked bigger. Nobody ever paid ₹49,999 for that TV. The 90-day price history told the whole story in about four seconds.
                </p>
                <div className="bg-[#F0EEFF] border border-[#E4E0FF] rounded-2xl p-5 space-y-3">
                  <p className="font-bold text-[#1A1A2E] text-sm flex items-center gap-2">
                    <CheckCircle size={16} className="text-[#5B4FBE]" />
                    Before any purchase above ₹3,000:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#5B4FBE] font-bold">•</span>
                      <span>Check the 90-day price history with any price-tracking browser extension.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#5B4FBE] font-bold">•</span>
                      <span>Compare the same product across at least two platforms before checkout.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#5B4FBE] font-bold">•</span>
                      <span>Treat &quot;limited time&quot; banners as marketing, not urgency — most sales repeat monthly.</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-2xl font-extrabold text-[#1A1A2E] pt-2">2. Stack a Bank Card Offer — It&apos;s Free Money You&apos;re Already Owed</h2>
                <p>
                  HDFC, ICICI, and SBI all run instant 10% discount offers during major sale events on Amazon, Flipkart, and most large platforms. This layer sits quietly at checkout, and most shoppers walk past it because they forget to check, or don&apos;t know it exists. Someone once got to checkout for an ₹8,200 laptop on Flipkart, realised they didn&apos;t personally hold an SBI card — but their spouse did. Same household, one card swap, ₹820 saved in about thirty seconds. (Worth checking who in your house has which card. Couples therapy, but for bank offers.)
                </p>

                <h2 className="text-2xl font-extrabold text-[#1A1A2E] pt-2">3. Verify Your Coupon Code Before You Trust It</h2>
                <p>
                  This is the layer most shoppers get wrong — not because they skip it, but because they use codes nobody bothered to check. SAVE50. Error. FLAT50. Error. MYNTRA50. Error. Six codes, six failures, checkout abandoned — that&apos;s the default experience on most coupon sites, and it&apos;s not an accident. Listing dead codes costs a site nothing. Verifying them takes actual work, and most sites skip it because the traffic shows up either way: you land on the page searching &quot;brand coupon code,&quot; the site gets the click, and whether the code works is somehow not its problem.
                </p>
                <p>
                  A coupon that&apos;s actually been checked will show you the discount value, the minimum order, the expiry date, and any restrictions — before you click anything. If a site doesn&apos;t show you that upfront, that&apos;s the tell that nobody checked. Two verified codes beat 47 expired ones every single time, and honestly that math isn&apos;t close.
                </p>

                <h2 className="text-2xl font-extrabold text-[#1A1A2E] pt-2">4. Time Big Purchases Around Real Sale Windows — But Set an Alarm</h2>
                <p>
                  India&apos;s festive e-commerce season hit $14 billion in GMV in 2024, up 12% year on year. GIF and BBD are real events, not marketing theatre — but the actual deal window is brutally short. Someone set a 12:01am alarm for Big Billion Day once, watched a phone marked down to ₹18,999 from ₹24,999, refreshed the page at 12:08am, and it was already gone. Checked again at 9am: still gone, except now a third-party seller had it relisted at ₹21,500. The deal existed. The window was seven minutes.
                </p>

                <h2 className="text-2xl font-extrabold text-[#1A1A2E] pt-2">5. Run a Cashback Layer in the Background</h2>
                <p>
                  Browser-extension cashback tools and cashback-linked payment apps add another 1–5% back on top of everything else, with zero extra steps at checkout. It&apos;s the most underused savings tool in Indian online shopping. Most people don&apos;t even know the layer exists — they just see a popup once, dismiss it, and forget cashback apps are a category of thing you can have running quietly forever.
                </p>

                <h2 className="text-2xl font-extrabold text-[#1A1A2E] pt-2">6. Use the Wishlist + Price-Drop Trick (Then Actually Forget About It)</h2>
                <p>
                  Add the item to your wishlist, turn on price-drop notifications, and walk away. This works especially well on Flipkart and Amazon, and it&apos;s probably the single most underused feature in Indian e-commerce — mostly because everyone&apos;s instinct is to keep checking manually instead of letting the app do it. (Yes, this means your wishlist becomes a graveyard of things you&apos;ll buy in six months. That&apos;s fine. That&apos;s the system working.)
                </p>

                <h2 className="text-2xl font-extrabold text-[#1A1A2E] pt-2">7. Spend Your First-Order Discount on Your Biggest Order, Not a Test Run</h2>
                <p>
                  First-order discounts are a one-time thing, which means using them on a small order is just leaving money behind. Someone downloaded a food delivery app for the first time, got a 60% off offer, and used it on a ₹180 chai-and-snacks order — saved ₹108. The same offer had a ₹150 cap, meaning it would have applied just as fully to an order up to ₹250. They had a one-time discount and spent it on the smallest possible order. Save the first-order code for the order you were going to place anyway, not the test one.
                </p>

                <h2 className="text-2xl font-extrabold text-[#1A1A2E] pt-2">8. Stack All Four Layers on the Same Order</h2>
                <p>
                  This is the part the other ten-tips listicles skip: these layers aren&apos;t alternatives, they&apos;re additive. A pair of ₹5,499 headphones during a festive sale, with a 30% sale price already applied, plus an ICICI bank card offer (extra 10%), plus a verified ₹300 coupon code, plus a cashback app running quietly in the background — final price, ₹2,900. Less than half. Every layer was a real, legal, intentional offer from the brand, the platform, or the bank. The only thing that changed was using all four at once instead of stopping after the first one.
                </p>

                <div className="bg-[#ECFDF5] border border-[#BBF7D0] rounded-2xl p-6 mt-2">
                  <p className="font-bold text-[#15803D] flex items-center gap-2 text-sm uppercase tracking-wide">
                    <Sparkles size={16} />
                    Why This Matters
                  </p>
                  <p className="text-[#1A1A2E] text-sm mt-2 leading-relaxed">
                    Stacking isn&apos;t a loophole — every layer is an offer the brand, platform, or bank already intended you to use. On a typical ₹5,000 order, sale price plus coupon plus bank offer plus cashback realistically lands a 35–80% total saving, depending on how aggressive the sale already is. Most shoppers use exactly one layer. The gap between that and using all four is rarely luck.
                  </p>
                </div>

                <h2 className="text-2xl font-extrabold text-[#1A1A2E] pt-2">Introducing CouponsCrew</h2>
                <p>
                  Most coupon sites list expired codes and don&apos;t care, because it&apos;s a traffic play — they rank for &quot;brand coupon code,&quot; you land, you try five dead codes, you leave frustrated, and the site already got its click either way. That&apos;s the only meaningful difference between a real coupon site and a directory of disappointments, and it&apos;s the entire reason CouponsCrew exists.
                </p>
                <p>
                  We manually test coupons from 500+ brands — Amazon, Flipkart, Myntra, Swiggy, Hostinger, and hundreds more — before any code goes live. Right now that&apos;s 10,000+ verified coupons, with a 92.4% real-world success rate at checkout. When a code stops working, we pull it fast instead of letting it sit there wasting the next person&apos;s time. (We&apos;ve also definitely refreshed a code page at midnight just to double-check an expiry. No regrets.)
                </p>
                <p>
                  It&apos;s free to use — no subscription, no paywall, no account required to copy a code. We earn a small affiliate commission from brands only when you actually complete a purchase through a listed link. You don&apos;t pay anything extra for that, and your data is never sold.
                </p>

                <h2 className="text-2xl font-extrabold text-[#1A1A2E] pt-2">How to Use CouponsCrew in Under 30 Seconds</h2>
                <div className="space-y-3">
                  {[
                    { step: '1', text: 'Search your store. Type the brand name into the search bar — Amazon, Myntra, Zomato, Hostinger, whatever you’re buying from.' },
                    { step: '2', text: 'Check the details. Every code shows its discount value, minimum order, expiry date, and any restrictions upfront.' },
                    { step: '3', text: 'Click Get Code. The code copies automatically and the brand page opens, ready for checkout.' },
                    { step: '4', text: 'Paste at checkout, then check for a bank card offer before you pay — that’s your next layer of savings.' },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 p-4 bg-white rounded-2xl border border-[#E8E8F0]">
                      <div className="w-8 h-8 rounded-xl bg-[#5B4FBE] text-white flex items-center justify-center text-sm font-black shrink-0">
                        {item.step}
                      </div>
                      <p className="text-sm text-[#1A1A2E] leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>

                <p className="pt-2">
                  That&apos;s the whole system — sale price, verified code, bank offer, cashback, in that order. Go stack something. Your cart has had it too easy for too long.
                </p>
              </div>

              {/* FAQ */}
              <div className="mt-12 pt-8 border-t border-[#E8E8F0]">
                <h2 className="text-2xl font-extrabold text-[#1A1A2E] mb-6">Frequently Asked Questions</h2>
                <div className="space-y-5">
                  {faqs.map((item) => (
                    <div key={item.q} className="bg-white rounded-2xl border border-[#E8E8F0] p-5">
                      <p className="font-bold text-[#1A1A2E] text-sm">{item.q}</p>
                      <p className="text-sm text-[#4A4A6A] leading-relaxed mt-2">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>

             
              {/* Share this Blog */}
              <div className="bg-[#F0EEFF] rounded-2xl p-6 border border-[#5B4FBE]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#5B4FBE] shrink-0">
                    <Share2 size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-[#1A1A2E]">Share this Blog</p>
                    <p className="text-xs text-[#4A4A6A] mt-0.5">Found this helpful? Share it with your friends and family!</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(PAGE_URL)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Facebook"
                    className="flex flex-col items-center gap-1.5 group"
                  >
                    <span className="w-11 h-11 rounded-full bg-[#1877F2] text-white flex items-center justify-center group-hover:opacity-90 transition-opacity">
                      <Facebook size={19} fill="currentColor" />
                    </span>
                    <span className="text-[10px] font-semibold text-[#4A4A6A]">Facebook</span>
                  </a>

                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(PAGE_URL)}&text=${encodeURIComponent(PAGE_TITLE)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Twitter"
                    className="flex flex-col items-center gap-1.5 group"
                  >
                    <span className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center group-hover:opacity-90 transition-opacity">
                      <Twitter size={18} fill="currentColor" />
                    </span>
                    <span className="text-[10px] font-semibold text-[#4A4A6A]">Twitter</span>
                  </a>

                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`${PAGE_TITLE} ${PAGE_URL}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on WhatsApp"
                    className="flex flex-col items-center gap-1.5 group"
                  >
                    <span className="w-11 h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center group-hover:opacity-90 transition-opacity">
                      <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12.001 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.763.462 3.486 1.34 5.003L2 22l5.114-1.341a9.958 9.958 0 0 0 4.887 1.245h.004c5.514 0 9.997-4.483 9.997-9.997 0-2.67-1.04-5.18-2.929-7.07a9.935 9.935 0 0 0-7.072-2.834zm5.879 15.87a8.293 8.293 0 0 1-5.883 2.437h-.003a8.284 8.284 0 0 1-4.223-1.156l-.303-.18-3.135.822.837-3.055-.198-.313a8.28 8.28 0 0 1-1.269-4.428c0-4.583 3.73-8.312 8.316-8.312a8.256 8.256 0 0 1 5.879 2.437 8.256 8.256 0 0 1 2.435 5.881 8.294 8.294 0 0 1-2.453 5.867z" />
                      </svg>
                    </span>
                    <span className="text-[10px] font-semibold text-[#4A4A6A]">WhatsApp</span>
                  </a>

                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(PAGE_URL)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on LinkedIn"
                    className="flex flex-col items-center gap-1.5 group"
                  >
                    <span className="w-11 h-11 rounded-full bg-[#0A66C2] text-white flex items-center justify-center group-hover:opacity-90 transition-opacity">
                      <Linkedin size={18} fill="currentColor" />
                    </span>
                    <span className="text-[10px] font-semibold text-[#4A4A6A]">LinkedIn</span>
                  </a>

                  <button
                    onClick={handleCopyLink}
                    aria-label="Copy link"
                    className="flex flex-col items-center gap-1.5 group cursor-pointer"
                  >
                    <span className={`w-11 h-11 rounded-full text-white flex items-center justify-center transition-colors ${copied ? 'bg-emerald-500' : 'bg-[#5B4FBE] group-hover:opacity-90'}`}>
                      {copied ? <Check size={18} /> : <Link2 size={18} />}
                    </span>
                    <span className="text-[10px] font-semibold text-[#4A4A6A]">{copied ? 'Copied!' : 'Copy Link'}</span>
                  </button>
                </div>
              </div>

              {/* Read More Blogs */}
              <div className="pt-4 mt-8">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-[#5B4FBE] text-xs font-bold uppercase tracking-widest">Explore More</span>
                  <span className="flex-1 h-px bg-[#E8E8F0]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A2E]">Read More Blogs</h2>
                <p className="text-[#4A4A6A] text-sm mt-2 mb-6">
                  Discover more money-saving tips, shopping guides and exclusive deal updates.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {RELATED_POSTS.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="bg-white rounded-2xl border border-[#E8E8F0] shadow-xs overflow-hidden hover:shadow-md transition-shadow flex flex-col"
                    >
                      <div className="relative w-full h-44">
                        <NextImage
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5 flex flex-col gap-3 flex-1">
                        <span className="inline-block w-fit bg-[#F0EEFF] text-[#5B4FBE] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                          {post.category}
                        </span>
                        <h3 className="text-base font-bold text-[#1A1A2E] leading-snug">{post.title}</h3>
                        <p className="text-xs text-[#4A4A6A] leading-relaxed line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center justify-between pt-2 mt-auto border-t border-[#E8E8F0] text-[11px] text-gray-500 font-medium">
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
                            <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                          </div>
                          <span className="text-[#5B4FBE] font-bold flex items-center gap-1">
                            Read More <ArrowRight size={12} />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="flex justify-center mt-8">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 border-2 border-[#5B4FBE] text-[#5B4FBE] hover:bg-[#5B4FBE] hover:text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors"
                  >
                    <span>View All Blogs</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>

            {/* SIDEBAR */}
            <aside className="lg:col-span-4 space-y-5">
              <div className="bg-white rounded-2xl border border-[#E8E8F0] p-6 shadow-xs sticky top-24">
                <h3 className="text-sm font-bold text-[#1A1A2E] uppercase tracking-wide mb-4">How CouponsCrew Works</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <ShieldCheck size={18} className="text-[#5B4FBE] shrink-0 mt-0.5" />
                    <span>Every coupon is manually tested before it goes live.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Tag size={18} className="text-[#5B4FBE] shrink-0 mt-0.5" />
                    <span>10,000+ verified codes across 500+ brands.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#5B4FBE] shrink-0 mt-0.5" />
                    <span>92.4% real-world success rate at checkout.</span>
                  </li>
                </ul>
                <Link
                  href="/stores"
                  className="mt-5 w-full bg-[#5B4FBE] hover:bg-[#4a3fa8] text-white text-sm font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Browse All Stores</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-2xl p-6 text-white shadow-sm">
                <h3 className="font-bold text-base">Start Saving Today</h3>
                <p className="text-white/70 text-xs mt-1.5 leading-relaxed">
                  Browse today&apos;s best verified deals — no account needed, no catch.
                </p>
                <Link
                  href="/deals-of-the-day"
                  className="mt-4 w-full bg-white text-[#5B4FBE] text-sm font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-white/90 transition-colors"
                >
                  <span>🔥 Today&apos;s Best Deals</span>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
