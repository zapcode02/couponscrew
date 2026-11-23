'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Star,
  Tag,
  ShieldCheck,
  ExternalLink,
  Check,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';
import { Coupon, FNP_COUPONS } from './fnpCoupons';

export type { Coupon };

const AFFILIATE_URL = '#';

export default function FnpStore() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeModalCoupon, setActiveModalCoupon] = useState<Coupon | null>(null);
  const [expandedCouponId, setExpandedCouponId] = useState<string | null>(null);

  const coupons: Coupon[] = FNP_COUPONS;

  const handleCopyCode = (coupon: Coupon) => {
    navigator.clipboard.writeText(coupon.code);
    setCopiedCode(coupon.code);
    setActiveModalCoupon(coupon);
    setShowModal(true);
    setTimeout(() => { setCopiedCode(null); }, 3000);
  };

  const handleGetDeal = () => {
    window.open(AFFILIATE_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans antialiased text-[#4A4A6A]">
      <Navbar />

      <section className="w-full bg-[#FFFFFF] pt-6 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs md:text-sm text-[#4A4A6A] select-none mb-6">
            <Link href="/" className="hover:text-[#5B4FBE] transition-colors font-medium">Home</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <Link href="/stores" className="hover:text-[#5B4FBE] transition-colors font-medium">Stores</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-[#5B4FBE] font-semibold">FNP Coupon Code</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-[#E8E8F0] shadow-sm flex flex-col justify-between">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex flex-col items-center gap-3">
                  <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" className="w-28 h-28 bg-white border border-[#E8E8F0] rounded-2xl flex items-center justify-center p-4 shadow-sm shrink-0">
                    <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1795429835/fnp-logo_j29tu9.webp" alt="FNP Logo" className="w-full h-auto object-contain" />
                  </a>
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1 bg-[#FFF8E7] text-[#FFB000] px-2.5 py-0.5 rounded-full text-xs font-bold border border-[#FFE7B3]">
                      <Star size={12} className="fill-current" />
                      <span>4.3 / 5</span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-semibold uppercase">User Rating</span>
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">FNP Coupon Codes</h1>
                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Celebrate every occasion for less with an FNP coupon code in Nov 2026. Verified offers include up to 70% off the Shubh Diwali Silver Gift Hamper, 50% off the Snake Plant with Gold Tone Metal Pot, and 44% off personalised couple mugs. Looking for an FNP discount code? You'll also find savings on flowers, cakes, chocolates, personalised gifts, festive hampers, spa gift boxes, and plants with regularly updated deals to help you send thoughtful gifts at better prices.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E8E8F0] flex flex-wrap items-center gap-4">
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" className="bg-[#FF5722] hover:bg-[#E64A19] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer">
                  <span>Visit FNP</span>
                  <ExternalLink size={16} />
                </a>
                <a href="https://www.google.com/preferences/source?q=couponscrew.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center hover:opacity-90 transition-opacity active:scale-95">
                  <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788011120/google-preferred-sources-561_m6yj79.webp" alt="Google Preferred Source" className="h-[56px] w-auto object-contain" />
                </a>
              </div>
            </div>

            <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" className="hidden lg:block lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm h-full aspect-[770/563] bg-[#5B4FBE]/5">
              <NextImage src="https://res.cloudinary.com/dqjlffxja/image/upload/v1795429835/fnp-logo_j29tu9.webp" alt="FNP Offers" fill sizes="(max-width: 1024px) 0px, 480px" referrerPolicy="no-referrer" className="object-contain w-full h-full p-12" priority />
            </a>
          </div>
        </div>
      </section>

      <section className="hidden lg:block bg-white border-b border-[#E8E8F0] py-6 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 select-none">
          <div className="flex items-center gap-3.5 border-r border-[#E8E8F0]/70 pr-4">
            <div className="w-11 h-11 bg-[#F0EEFF] text-[#5B4FBE] rounded-2xl flex items-center justify-center shrink-0"><Tag size={18} /></div>
            <div><div className="text-lg font-black text-[#1A1A2E] leading-none">15+</div><div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Active Offers</div></div>
          </div>
          <div className="flex items-center gap-3.5 md:border-r border-[#E8E8F0]/70 pr-4">
            <div className="w-11 h-11 bg-[#FFF2ED] text-[#FF5722] rounded-2xl flex items-center justify-center shrink-0"><TrendingUp size={18} /></div>
            <div><div className="text-lg font-black text-[#1A1A2E] leading-none">Up to 30%</div><div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Best Discount</div></div>
          </div>
          <div className="flex items-center gap-3.5 border-r border-[#E8E8F0]/70 pr-4">
            <div className="w-11 h-11 bg-[#EAFDF3] text-emerald-600 rounded-2xl flex items-center justify-center shrink-0"><span className="text-lg font-black">₹</span></div>
            <div><div className="text-lg font-black text-[#1A1A2E] leading-none">₹300+</div><div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">You Can Save</div></div>
          </div>
          <div className="flex items-center gap-3.5 pr-4">
            <div className="w-11 h-11 bg-[#F0EEFF] text-[#5B4FBE] rounded-2xl flex items-center justify-center shrink-0"><ShieldCheck size={18} /></div>
            <div><div className="text-lg font-black text-[#1A1A2E] leading-none">100%</div><div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Verified Offers</div></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          <main className="flex-1 space-y-10 order-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E8E8F0] select-none">
              <div>
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">FNP Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified FNP coupon codes & offers.</p>
              </div>
            </div>

            <div className="space-y-6 max-w-5xl mx-auto p-4">
              {coupons.map((coupon) => {
                const isExpanded = expandedCouponId === coupon.id;
                const isCopied = copiedCode === coupon.code;
                return (
                  <div key={coupon.id} className="bg-[#F8F9FA] rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">
                    <div className="flex flex-row items-stretch">
                      <div className="w-24 sm:w-32 lg:w-40 bg-[#5B4FBE] flex flex-col items-center justify-center py-6 px-2 text-white relative shrink-0">
                        <div className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-[#F8F9FA]"></div>
                        <div className="absolute -right-3 -bottom-3 w-6 h-6 rounded-full bg-[#F8F9FA]"></div>
                        <span className="text-[9px] sm:text-[11px] uppercase tracking-[1px] font-medium opacity-90 text-center">{coupon.badgeType || 'UP TO'}</span>
                        <span className="text-xl sm:text-3xl lg:text-[38px] font-black leading-none tracking-tight my-1.5 text-center">{coupon.badge ? coupon.badge.replace('UP TO ', '').replace('FLAT ', '') : '10%'}</span>
                        <span className="text-[9px] sm:text-[11px] uppercase tracking-[1px] font-medium opacity-90 text-center">OFF</span>
                      </div>
                      <div className="flex-1 flex flex-col lg:flex-row items-stretch">
                        <div className="flex-1 p-4 sm:p-5 lg:p-6 flex flex-col justify-center">
                          <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                            <span className="bg-[#FF5722]/10 text-[#FF5722] text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">{coupon.type || 'Best Offer'}</span>
                            <span className="bg-[#E6F7ED] text-[#00A854] text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">{coupon.verified || 'Verified'}</span>
                          </div>
                          <h3 className="text-base sm:text-lg lg:text-[22px] font-black text-[#0B1A30] leading-snug tracking-tight">{coupon.title}</h3>
                          <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed max-w-2xl">{coupon.description}</p>
                          {coupon.points && coupon.points.length > 0 && (
                            <button onClick={() => setExpandedCouponId(isExpanded ? null : coupon.id)} className="mt-3 flex items-center gap-1 text-xs sm:text-sm font-bold text-[#5B4FBE] hover:opacity-80 w-fit transition-opacity">
                              View Details
                              {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                            </button>
                          )}
                          {isExpanded && coupon.points && (
                            <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 border-t border-dashed border-slate-200 pt-4">
                              {coupon.points.map((point, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B4FBE]" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                        <div className="lg:w-64 w-full border-t lg:border-t-0 lg:border-l border-dashed border-slate-300 p-4 sm:p-5 lg:p-6 flex flex-col justify-center items-center lg:items-stretch bg-transparent gap-3">
                          
                          <button onClick={() => (coupon.code ? handleCopyCode(coupon) : handleGetDeal())} className={`w-full h-11 sm:h-12 rounded-2xl font-bold text-sm sm:text-base transition-all shadow-sm ${isCopied ? 'bg-green-600 text-white' : 'bg-[#FF5722] hover:bg-[#E64A19] text-white'}`}>
                            {isCopied ? 'Copied!' : 'Get Deal'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </main>

          <aside className="w-full lg:w-80 flex-shrink-0 self-start space-y-6 order-2">

            <div className="bg-white border border-[#E8E8F0] rounded-3xl p-6 shadow-xs text-left max-w-3xl mx-auto my-6">
  <h3 className="font-extrabold text-[#1A1A2E] text-lg mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    How to Use an FNP Coupon Code
  </h3>

  <ol className="space-y-3.5 text-xs font-semibold text-[#4A4A6A] list-decimal list-inside">
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Go to fnp.com and add your flowers, cake, or gift to the cart.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        On the cart or checkout page, find the "Apply Coupon" field.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Enter the FNP discount code exactly — codes are case-sensitive. Use the full code as listed (for example, FCD10FB rather than 10FB).
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Click Apply and confirm the saving has updated in your order total.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        If you're using a bank card code (HDFC20, FNP20IC, etc.), the discount applies when you select payment — enter the promo code first, then choose your card at the payment step.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Complete the order. For same-day and midnight deliveries, check the delivery slot availability before checkout — these slots fill early on peak occasions.
      </span>
    </li>
  </ol>

  <p className="mt-4 pt-3.5 border-t border-[#E8E8F0] text-xs font-semibold text-[#2C2C40] leading-relaxed">
    FNP codes cannot be combined with each other. If two discounts apply, use the one that gives a higher total saving. Bank card codes stack on top of a sitewide sale but not on top of another coupon code.
  </p>
</div>

<div className="bg-white border border-[#E8E8F0] rounded-3xl p-6 shadow-xs text-left max-w-3xl mx-auto my-6">
  <h3 className="font-extrabold text-[#1A1A2E] text-lg mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    FNP in 2026: From a 200 Sq Ft Shop to 400 Stores Across India
  </h3>

  <div className="space-y-3.5 text-xs font-semibold text-[#2C2C40] leading-relaxed">
    <p>
      Ferns N Petals was founded in 1994 by Vikaas Gutgutia in South Extension, New Delhi. The first store was 200 square feet, started with a ₹2.5 lakh investment from a friend, and employed four people. That origin story matters for how the brand works today — FNP was built around India's gifting culture, not imported from a Western delivery model.
    </p>

    <p>
      By 2026, FNP has 400 stores across 133 Indian cities and delivers to over 70 countries internationally, including the UAE, Singapore, Qatar, Saudi Arabia, and Malaysia. The website launched in 2002, making FNP one of India's earliest e-commerce gifting platforms.
    </p>

    <p>
      What's changed recently is delivery speed. FNP currently delivers to around 300 pin codes within one hour and is rolling out under-one-hour delivery across 50 cities. For planned gifting (a birthday next week, an anniversary next month), standard delivery works without any special coordination. For last-minute situations, same-day and midnight delivery slots are available in select cities — the slot availability shows at checkout before you confirm.
    </p>

    <p>
      The product range covers flowers, cakes, personalised gifts, plants, dry fruit hampers, chocolates, soft toys, and combo orders. FNP also runs a corporate gifting arm and owns Udman Hotels and Resorts, which is relevant mainly if you're planning a destination celebration.
    </p>
  </div>
</div>


          </aside>
        </div>
      </section>

  <section className="py-24 bg-[#f5f5f5]">
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">

        {/* Main Content Column */}
        <div className="prose max-w-none">
          
          {/* Main Title - H2 as requested */}
          <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
            FNP Coupon Code: Save on Flowers, Cakes and Gifts at Ferns N Petals (November 2026)
          </h2>

          <div className="text-gray-600 font-normal leading-relaxed space-y-6">
            <p>
              An FNP coupon code is a promo code entered at checkout on fnp.com to reduce the price of flowers, cakes, plants, or gifts. FNP (Ferns N Petals) runs category-specific codes rather than one blanket sitewide code — so the code you use depends on what you're ordering. For flower bunches, FCD10FB gives 10% off (minimum ₹299). For birthday cakes, FCD125BC takes ₹125 off orders above ₹849. If you're buying a combo of flowers and cakes, FNP150FC gives a flat ₹150 off on orders above ₹999. Bank card holders get additional discounts of 15–20% with FNP's HDFC, ICICI, Kotak, HSBC, and American Express codes.
            </p>

            <div>
              <div className="space-y-4 text-slate-700">
                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                  Which FNP Code to Use for Each Occasion
                </h3>

                <p>
                  FNP's category-specific code structure means picking the right code matters more than on platforms that run one flat sitewide discount. Here's how to match the code to the order.
                </p>

                <p>
                  <strong>Birthday orders:</strong> If your order is primarily a cake, FCD125BC (₹125 off, min ₹849) is the most direct saving. If you're adding birthday gifts to the order — a soft toy, a personalised mug, a hamper — FCD10BG (10% off, min ₹299) applies on the gift portion. For a flower-and-cake combo, FNP150FC (₹150 off, min ₹999) covers the full combo in one code.
                </p>

                <p>
                  <strong>Anniversary orders:</strong> FCD10AG (10% off anniversary gifts, min ₹299) applies specifically to the anniversary category. For rose arrangements, FCD12RO (12% off, min ₹499) gives a slightly higher percentage and applies on the roses section.
                </p>

                <p>
                  <strong>Flowers without occasion:</strong> FCD10FB (10% off flower bunches, min ₹299) works across the general flower bunch category with the lowest minimum order on the platform. FCD12BSF (12% off best-sellers, min ₹499) applies on FNP's bestselling flower arrangements — typically the bouquets and hand-tied bunches that are pre-assembled.
                </p>

                <p>
                  <strong>High-value orders (₹2,599+):</strong> FCD500S gives a flat ₹500 off on select products above ₹2,599. At that order value, FCD500S often beats a 10–15% percentage code — ₹500 on a ₹2,600 order works out to 19.2%, which is better than FCD15S (15% off, capped at ₹500 = ₹390 on a ₹2,600 order).
                </p>

                <p>
                  <strong>Bank card holders:</strong> HDFC20 gives 20% off (capped at ₹700, min ₹999) on fnp.com only — the highest cap among all bank codes. If you have an HDFC card, this is the most valuable bank code for orders between ₹999 and ₹3,500. Above ₹3,500 the ₹700 cap means FCD500S may save more in absolute terms.
                </p>

                <hr className="my-6 border-slate-200" />

                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                  How FNP's Delivery Works — and When to Order
                </h3>

                <p>
                  Understanding FNP's delivery structure helps you avoid the most common ordering mistake: placing an order on the day of an occasion without checking slot availability.
                </p>

                <p>
                  FNP operates four delivery types. Standard delivery covers most of its 133-city network with 4–6 hour windows. Same-day delivery (order and receive the same day) is available in select cities with specific cut-off times — usually before noon for afternoon delivery. Midnight delivery targets a specific time window around midnight, mostly in metro areas, for birthdays and surprise occasions. Early morning delivery (6–8 AM) is available in select cities and is designed for first-thing surprises.
                </p>

                <p>
                  For peak occasions — Valentine's Day, Raksha Bandhan, Diwali, Mother's Day — midnight and same-day slots fill up 24–48 hours in advance. If you're planning for one of these dates, ordering two to three days ahead gives you slot choice. Last-minute bookings on peak dates often only have standard delivery remaining.
                </p>

                <p>
                  FNP delivers internationally to over 70 countries. For international orders, delivery timelines vary by country — the UAE and Singapore are covered through FNP's own international operations, while some other destinations are served through partner florists.
                </p>

                <p>
                  One important policy note: FNP's perishable products — flowers and cakes — typically cannot be cancelled after the order enters processing. The cancellation window is usually a few hours after placing the order, not close to delivery. If there's any chance the occasion or recipient details might change, place the order as late as practically possible while still securing the slot you want.
                </p>

                <hr className="my-6 border-slate-200" />

                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                  FNP Promo Code Not Working? What to Check
                </h3>

                <p>
                  <strong>Wrong product category for the code.</strong> FCD12RO applies only to roses. If your cart has tulips or lilies, the code won't activate. FCD10AG is anniversary gifts only — it won't apply to general flowers or birthday orders even if they're for an anniversary. Match the code exactly to the category listed.
                </p>

                <p>
                  <strong>Cart below the minimum.</strong> FCD125BC requires a minimum of ₹849. If your birthday cake order comes in at ₹799, the code won't apply. Add a small add-on (a greeting card, a 100g chocolate piece) to push the cart over.
                </p>

                <p>
                  <strong>Combining two discount codes.</strong> FNP allows only one coupon code per order. If you've applied FCD10FB and then try to enter FCD15S, the second code will reject. Remove the first code before entering the second.
                </p>

                <p>
                  <strong>Bank card code with the wrong card.</strong> HDFC20 requires HDFC payment. FNP15KTK requires a Kotak card or net banking. Using an HDFC code with a Kotak card won't work. Confirm the code matches your payment instrument before entering it.
                </p>

                <p>
                  <strong>Code only valid on fnp.com, not the app.</strong> HDFC20 specifically applies on fnp.com only. If you're booking through the FNP app, switch to the website for that code.
                </p>

                <hr className="my-6 border-slate-200" />

                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                  What to Order on FNP When You're Not Sure
                </h3>

                <p>
                  FNP's product depth is wide enough that picking for someone you don't know extremely well is easier than it looks. A few starting points that have consistently high order volumes:
                </p>

                <p>
                  Roses remain the most-ordered item on the platform — the 12% FCD12RO code makes the entry point affordable. For something beyond flowers, the combo orders (flowers plus a cake, or flowers plus chocolates) tend to land better for Indian gifting occasions because they cover multiple gestures in one delivery. The FNP150FC code is specifically designed for these.
                </p>

                <p>
                  For plants, FNP's lucky bamboo range (covered by FCD50LB and FA15LB) is worth considering for housewarming and office gifting because it's low-maintenance and doesn't expire the way flowers do. The ₹50 flat off on lucky bamboo (minimum ₹399) brings the entry price under ₹350 for basic arrangements.
                </p>

                <p>
                  For corporate gifting, FNP's tiered gifts code FCD300A — which gives ₹50 off on orders below ₹1,000, ₹150 off between ₹1,001–₹2,000, and ₹300 off above ₹2,000 — scales proportionally with order value and is the only FNP code designed for multi-tier cart sizes.
                </p>
              </div>
            </div>

            <hr className="my-10 border-gray-200" />

            {/* FAQs Section Header */}
            <h3 className="text-2xl font-black text-black mt-16 mb-8">
              Frequently Asked Questions
            </h3>

            {/* FAQ List */}
            <div className="space-y-4">
              
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                <h3 className="font-black text-black text-base">
                  What is the best FNP coupon code right now?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The best code depends on your order type. For flower bunches, FCD10FB (10% off, min ₹299) has the lowest entry requirement. For birthday cakes, FCD125BC (₹125 off, min ₹849) gives a flat saving. HDFC20 (20% off, capped at ₹700, min ₹999) is the highest-value code for HDFC card holders. Check CouponsCrew before checkout for the latest verified active codes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                <h3 className="font-black text-black text-base">
                  Can I use an FNP discount code on international orders?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  FNP's coupon codes are listed as excluding international deliveries. For orders to UAE, Singapore, or other countries, the standard international pricing applies without the code-based discount. Bank card codes are also typically India-only.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                <h3 className="font-black text-black text-base">
                  Does FNP offer same-day flower delivery?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Yes, FNP offers same-day delivery in select cities with order cut-off times that vary by location. Check slot availability at checkout — on peak gifting occasions (Valentine's Day, Mother's Day, Rakhi), same-day slots fill early and may not be available close to the date.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                <h3 className="font-black text-black text-base">
                  How long does an FNP order take to deliver?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Standard delivery is 4–6 hours within FNP's metro coverage area. FNP currently covers around 300 pin codes for 1-hour delivery and is expanding this to 50 cities. Same-day, midnight, and early-morning delivery slots are available in major cities depending on the occasion.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                <h3 className="font-black text-black text-base">
                  Is FNP the same as Ferns N Petals?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Yes. FNP is the brand's shorter name used across its website (fnp.com), app, and marketing. The full legal name is Ferns N Petals. The brand was founded in 1994 and both names refer to the same company.
                </p>
              </div>

            </div>

            <hr className="my-10 border-gray-200" />

            <p>
              FNP's pricing is in the mid-to-premium range for Indian flower and gift delivery — the same bouquet will cost less from a local vendor, but FNP brings delivery reliability, slot scheduling, and consistent packaging quality that matters when the gift is the gesture. The category-specific codes (FCD series) reduce the effective price by 10–15% across most order types, and HDFC card holders can push savings up to 20%. For first-time buyers, checking CouponsCrew for the most current code before confirming the order is worth the 30 seconds it takes.
            </p>

          </div>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-10">
          <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
            <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
              Popular FNP Searches
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {["FNP Coupons", "Ferns N Petals Offers", "Flower Delivery Deals", "Birthday Cake Discounts", "Anniversary Gifts", "HDFC Bank Offers", "CouponsCrew Home"].map(tag => (
                <span
                  key={tag}
                  className="bg-white px-4 py-2.5 rounded-full text-[12px] font-black text-[#5B4FBE] uppercase tracking-widest shadow-sm border border-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  {/* ==========================================
      INTERACTIVE CODE COPYING MODAL / POPUP
      ========================================== */}
  {showModal && activeModalCoupon && (
    <div
      onClick={() => setShowModal(false)}
      className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-xs select-none"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl border border-[#E8E8F0] shadow-2xl p-6 md:p-8 max-w-md w-full text-center relative space-y-5 animate-in fade-in zoom-in-95 duration-200"
      >

        {/* Success icon */}
        <div className="w-16 h-16 bg-[#EAFDF3] border border-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-500">
          <Check size={28} className="stroke-[3]" />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-black text-[#1A1A2E]">Coupon Code Copied!</h3>
          <p className="text-xs text-gray-400 leading-relaxed font-semibold">
            Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at FNP checkout for instant discounts.
          </p>
        </div>

        {/* Code Box */}
        <div className="bg-[#F8F8FF] border border-[#E8E8F0] rounded-2xl py-3 px-4 flex items-center justify-between gap-4">
          <span className="font-mono font-bold text-sm tracking-wider text-gray-500 select-all">
            {activeModalCoupon.code}
          </span>
          <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100 uppercase">
            Copied
          </span>
        </div>

        <div className="text-xs font-semibold text-gray-500 flex items-center gap-1.5 justify-center bg-gray-50 py-2.5 px-4 rounded-xl border border-gray-100">
          <AlertCircle size={14} className="text-gray-400" />
          <span>Make sure to paste code before finalizing payment.</span>
        </div>

        <div className="pt-2 flex flex-col gap-2">
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            onClick={() => setShowModal(false)}
            className="w-full bg-[#FF5722] hover:bg-[#E64A19] text-white py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
          >
            <span>Continue to FNP</span>
            <ExternalLink size={14} />
          </a>

          <button
            onClick={() => setShowModal(false)}
            className="w-full text-xs font-bold text-gray-400 hover:text-[#1A1A2E] py-2 transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  )}


      {showModal && activeModalCoupon && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-xs select-none">
          <div className="bg-white rounded-3xl border border-[#E8E8F0] shadow-2xl p-6 md:p-8 max-w-md w-full text-center relative space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-[#EAFDF3] border border-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-500">
              <Check size={28} className="stroke-[3]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-black text-[#1A1A2E]">Coupon Code Copied!</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at FNP checkout for instant discounts.</p>
            </div>
            <div className="bg-[#F8F8FF] border border-[#E8E8F0] rounded-2xl py-3 px-4 flex items-center justify-between gap-4">
              <span className="font-mono font-bold text-sm tracking-wider text-gray-500 select-all">{activeModalCoupon.code}</span>
              <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100 uppercase">Copied</span>
            </div>
            <div className="text-xs font-semibold text-gray-500 flex items-center gap-1.5 justify-center bg-gray-50 py-2.5 px-4 rounded-xl border border-gray-100">
              <AlertCircle size={14} className="text-gray-400" />
              <span>Make sure to paste code before finalizing payment.</span>
            </div>
            <div className="pt-2 flex flex-col gap-2">
              <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" onClick={() => setShowModal(false)} className="w-full bg-[#FF5722] hover:bg-[#E64A19] text-white py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md">
                <span>Continue to FNP</span>
                <ExternalLink size={14} />
              </a>
              <button onClick={() => setShowModal(false)} className="w-full text-xs font-bold text-gray-400 hover:text-[#1A1A2E] py-2 transition-colors cursor-pointer">Close Window</button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
