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
import { Coupon, BOAT_COUPONS } from './boatCoupons';

export type { Coupon };

const AFFILIATE_URL = '#';

export default function BoatStore() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeModalCoupon, setActiveModalCoupon] = useState<Coupon | null>(null);
  const [expandedCouponId, setExpandedCouponId] = useState<string | null>(null);

  const coupons: Coupon[] = BOAT_COUPONS;

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
            <span className="text-[#5B4FBE] font-semibold">boAt Coupon Code</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-[#E8E8F0] shadow-sm flex flex-col justify-between">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex flex-col items-center gap-3">
                  <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" className="w-28 h-28 bg-white border border-[#E8E8F0] rounded-2xl flex items-center justify-center p-4 shadow-sm shrink-0">
                    <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1795429823/boat-logo_p2orbz.webp" alt="boAt Logo" className="w-full h-auto object-contain" />
                  </a>
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1 bg-[#FFF8E7] text-[#FFB000] px-2.5 py-0.5 rounded-full text-xs font-bold border border-[#FFE7B3]">
                      <Star size={12} className="fill-current" />
                      <span>4.4 / 5</span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-semibold uppercase">User Rating</span>
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">boAt Coupon Codes</h1>
                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Upgrade your tech for less with a boAt coupon code and unlock huge savings in Nov 2026. Verified offers include up to 87% off the boAt Nirvana Ivy, 86% off the Storm Call 3 smartwatch, and 82% off the Nirvana Ion ANC earbuds. Looking for a discount code? You'll also find deals on Airdopes earbuds, Rockerz neckbands, Bluetooth speakers, soundbars, power banks, and smartwatches, with prices starting from ₹799 through regularly updated promotions.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E8E8F0] flex flex-wrap items-center gap-4">
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" className="bg-[#FF5722] hover:bg-[#E64A19] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer">
                  <span>Visit boAt</span>
                  <ExternalLink size={16} />
                </a>
                <a href="https://www.google.com/preferences/source?q=couponscrew.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center hover:opacity-90 transition-opacity active:scale-95">
                  <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788011120/google-preferred-sources-561_m6yj79.webp" alt="Google Preferred Source" className="h-[56px] w-auto object-contain" />
                </a>
              </div>
            </div>

            <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" className="hidden lg:block lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm h-full aspect-[770/563] bg-[#5B4FBE]/5">
              <NextImage src="https://res.cloudinary.com/dqjlffxja/image/upload/v1795429823/boat-logo_p2orbz.webp" alt="boAt Offers" fill sizes="(max-width: 1024px) 0px, 480px" referrerPolicy="no-referrer" className="object-contain w-full h-full p-12" priority />
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
            <div><div className="text-lg font-black text-[#1A1A2E] leading-none">Up to 40%</div><div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Best Discount</div></div>
          </div>
          <div className="flex items-center gap-3.5 border-r border-[#E8E8F0]/70 pr-4">
            <div className="w-11 h-11 bg-[#EAFDF3] text-emerald-600 rounded-2xl flex items-center justify-center shrink-0"><span className="text-lg font-black">₹</span></div>
            <div><div className="text-lg font-black text-[#1A1A2E] leading-none">₹500+</div><div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">You Can Save</div></div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">boAt Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified boAt coupon codes & offers.</p>
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
    How to Use a boAt Discount Code
  </h3>

  <ol className="space-y-3.5 text-xs font-semibold text-[#4A4A6A] list-decimal list-inside">
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Go to boat-lifestyle.com and add your product to the cart.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        On the cart page, click "Apply Coupon" or look for the discount code field.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Type the boAt coupon code exactly as shown — codes are case-sensitive.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Click Apply and confirm the discount has been deducted.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Choose prepaid payment (UPI, card, net banking) if using BOATHEAD or any prepaid-specific code — COD orders won't trigger the prepaid discount.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Complete the order. boAt applies the discount before the final payment screen, so verify the saving is reflected before you confirm.
      </span>
    </li>
  </ol>

  <p className="mt-4 pt-3.5 border-t border-[#E8E8F0] text-xs font-semibold text-[#2C2C40] leading-relaxed">
    boAt runs active flash sales and Payday offers that can offer 50–80% off on select products automatically — no code needed during those windows. If you're buying during a sale event, compare the sale price against the code-discounted regular price to confirm which is lower.
  </p>
</div>

<div className="bg-white border border-[#E8E8F0] rounded-3xl p-6 shadow-xs text-left max-w-3xl mx-auto my-6">
  <h3 className="font-extrabold text-[#1A1A2E] text-lg mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    From Cables to India's #1 Audio Brand: boAt's Story
  </h3>

  <div className="space-y-3.5 text-xs font-semibold text-[#2C2C40] leading-relaxed">
    <p>
      boAt was founded in 2016 by Aman Gupta and Sameer Mehta in Gurugram, bootstrapped with roughly ₹30 lakh. The company didn't start with earphones — it started with cables. The original business was selling durable, affordable charging cables and earphone accessories into a market where the standard was cheap cables that broke in weeks. That problem-first approach carried forward when boAt moved into audio hardware.
    </p>

    <p>
      By 2026, boAt holds a 29.2% share of India's wearables market according to IDC's annual report — the largest share of any brand in the category. The company posted ₹2,931 crore in operating revenue for FY26, with profit after tax of ₹84.5 crore — a 38% improvement over the previous year. Its wearables segment turned profitable in FY26 for the first time.
    </p>

    <p>
      The brand calls its customers boAtheads. It's not a formal loyalty program — more a cultural positioning that the brand has built around music, sports, and young Indian buyers who want audio gear that looks good and doesn't cost what international brands charge. boAt currently sells through Amazon, Flipkart, and its own website, as well as offline retail. The distribution width is part of why codes and sale prices vary by platform.
    </p>

    <p>
      One thing worth knowing for buyers: boAt's official website often carries codes and prepaid discounts not available on third-party marketplaces. If you're buying a boAt product and not checking boat-lifestyle.com directly, you may be missing the best available price.
    </p>
  </div>
</div>

          </aside>
        </div>
      </section>

      <>
  <section className="py-24 bg-[#f5f5f5]">
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20">

        {/* Main Content Column */}
        <div className="prose max-w-none">
          
          {/* Main Title - H2 */}
          <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
            boAt Coupon Code: Save on Earphones, Headphones and Smartwatches in India (November 2026)
          </h2>

          <div className="text-gray-600 font-normal leading-relaxed space-y-6">
            <p>
              A boAt coupon code is a promo code entered at checkout on boat-lifestyle.com to reduce the price of earphones, earbuds, headphones, neckbands, smartwatches, or accessories. boAt's most broadly applicable code right now is BOATHEAD, which gives an extra 5% off on prepaid orders sitewide — confirmed directly on boat-lifestyle.com's coupon page. For flat rupee savings, BIG100 (₹100 off) has the highest verified success rate among active codes. For multi-product orders, BOAT6 (6% off on 2 or more items) reduces the per-unit cost on bulk buys.
            </p>

            <div>
              <div className="space-y-4 text-slate-700">
                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                  The boAt Product Range: What to Buy and When
                </h3>

                <p>
                  boAt's catalogue is wide enough that picking the right product requires some navigation. The brand covers five main audio categories with meaningful differences between them.
                </p>

                <p>
                  <strong>Truly wireless earbuds (Airdopes series):</strong> boAt's Airdopes are the most popular category. Models like the Airdopes 141 and 181 are budget TWS options in the ₹800–₹1,500 range. The Airdopes Alpha sits higher with better drivers and noise handling. These are for users who want wireless, compact earbuds for daily use, commuting, and casual listening.
                </p>

                <p>
                  <strong>Neckbands:</strong> boAt's Rockerz neckband series (like the Rockerz 255 and 333) connects behind the neck and is preferred by gym users and outdoor runners — the magnetic earpiece tips hold together when not in use and the form factor is harder to lose than TWS buds. Battery life is typically longer than TWS in this price range. Prices run from ₹700–₹2,000.
                </p>

                <p>
                  <strong>Over-ear headphones:</strong> The Rockerz 450 and 550 series are over-ear wireless headphones in the ₹1,500–₹3,500 range. These make sense for home listening, work-from-home use, and situations where you want passive sound isolation without the premium of active noise cancellation. If you need ANC, boAt's higher-end headphone models carry it.
                </p>

                <p>
                  <strong>Wired earphones:</strong> The Bassheads series covers wired earphones from ₹300 upward. For users who prefer a wired connection — lower latency for video editing or gaming, no charging required, simpler pairing — the Bassheads remain one of boAt's most volume-consistent categories.
                </p>

                <p>
                  <strong>Smartwatches:</strong> boAt's Wave series smartwatches (Wave Pro, Wave Sigma) run from ₹1,500–₹3,500 and cover fitness tracking, SpO2, heart rate monitoring, and calling features. They're not competing with Apple Watch or Galaxy Watch on features — they're competing on price-to-feature ratio for first-time smartwatch buyers.
                </p>

                <hr className="my-6 border-slate-200" />

                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                  Understanding boAt's Model Numbers
                </h3>

                <p>
                  boAt uses a numbering system in its product names that's worth understanding before you search for a code or buy.
                </p>

                <p>
                  In the Airdopes range, higher model numbers generally indicate newer generations or better specifications — Airdopes 181 is a step above the Airdopes 141. But this isn't a strict rule across all categories: the numbers sometimes indicate specific sub-series rather than a simple hierarchy. For the Rockerz headphone and neckband range, the 500-series models are generally the premium tier and the 200–300-series covers everyday options.
                </p>

                <p>
                  What matters for buying decisions: when two models have the same code working, the higher-numbered model in the same sub-series (say Airdopes 181 vs 141) will give you a better-performing product at a higher base price. Applying a flat ₹500 code is worth more in percentage terms on a ₹1,000 product than on a ₹2,000 one, but the lower-priced model may not have the driver quality or battery life of the pricier one. The sweet spot for most buyers is a mid-range Airdopes or Rockerz model at sale price, which gives you roughly 60–70% of the flagship experience at 40–50% of the cost.
                </p>

                <hr className="my-6 border-slate-200" />

                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                  boAt Website vs Amazon vs Flipkart: Where to Buy
                </h3>

                <p>
                  boAt products are available across all three channels and prices regularly differ between them. This matters for how you use a boAt discount code.
                </p>

                <p>
                  <strong>On boat-lifestyle.com:</strong> The official site runs its own prepaid discount (BOATHEAD, 5% extra) and coupon codes that don't work on third-party marketplaces. If you have a boAt code from CouponsCrew, it will apply on the official site, not on Amazon or Flipkart. The official site also occasionally has limited-edition colours and bundles not available on marketplaces.
                </p>

                <p>
                  <strong>On Amazon and Flipkart:</strong> These platforms run their own sale events (Great Indian Festival, Big Billion Days, Prime Day) where boAt products can be discounted 40–70% — often steeper than the official site's standard sale. boAt-specific coupon codes won't work here, but platform-level bank card discounts and wallet cashback offers can stack on top of the sale price.
                </p>

                <p>
                  The practical strategy: check the boAt website with the best available code and compare it against the current marketplace price. During non-sale periods, the boAt site with a code usually wins. During major Amazon and Flipkart sale events, the marketplace price often goes lower than what any code can match on the official site.
                </p>

                <hr className="my-6 border-slate-200" />

                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                  boAt Promo Code Not Working? Here's Why
                </h3>

                <p>
                  <strong>Prepaid code with COD selected.</strong> BOATHEAD is a prepaid offer — it won't apply if you select cash on delivery at payment. Switch to UPI, debit card, credit card, or net banking.
                </p>

                <p>
                  <strong>Product-specific code on the wrong model.</strong> UNLOCK15 is for the Airdopes 163. If your cart has a Rockerz neckband or any other model, the code will reject. These model-locked codes appear during product launches or sales on specific stock.
                </p>

                <p>
                  <strong>Code already expired.</strong> boAt runs seasonal codes — MONSOON500 and SUMMER500 are season-specific and are likely inactive outside those windows even if the string appears on third-party lists. Check CouponsCrew for the currently active set before trying a code you found elsewhere.
                </p>

                <p>
                  <strong>Multiple codes applied.</strong> The boAt site allows one coupon code per order. If you've already applied one code, entering a second will reject. Remove the first code and try the new one.
                </p>

                <p>
                  <strong>Cart minimum not met.</strong> Some flat-off codes (BTXDD for ₹500 off) may require a minimum cart value not shown publicly — if the discount doesn't apply on a small order, try adding a second item to push the total higher.
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
                  What is the best boAt coupon code right now?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  BOATHEAD gives an extra 5% off on all prepaid orders on boat-lifestyle.com and is confirmed on boAt's official coupon page. For flat savings, BIG100 (₹100 off) has a consistently high success rate. For multi-product orders, BOAT6 (6% off on 2+ items) gives a percentage discount that scales with order size. Check CouponsCrew for the most current verified codes before checkout.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                <h3 className="font-black text-black text-base">
                  Can I use a boAt discount code on Amazon or Flipkart?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  No. boAt coupon codes apply only on boat-lifestyle.com. Amazon and Flipkart have their own discount structures — platform bank card offers and sale events — that work independently of boAt's own codes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                <h3 className="font-black text-black text-base">
                  Does boAt offer a warranty on its products?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  boAt products carry a manufacturer's warranty (typically 1 year for audio products). Claims are handled through boAt's customer support and service centres. The warranty doesn't cover physical damage or water damage beyond the product's rated resistance level.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                <h3 className="font-black text-black text-base">
                  Which boAt earphone is best under ₹1,500?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The Airdopes 181 and Airdopes Alpha are in this range and have strong user reviews for call quality and battery life among budget TWS options. The Rockerz 255 neckband covers similar ground at similar pricing with longer battery life — better for active use. The right pick depends on whether you prefer truly wireless or don't mind the neckband form.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                <h3 className="font-black text-black text-base">
                  Is boat-lifestyle.com safe to buy from?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Yes. boat-lifestyle.com is boAt's official direct-to-consumer website. It uses standard HTTPS payment processing and ships via standard courier services. Orders are refundable as per boAt's return policy, and the site shows order tracking post-dispatch.
                </p>
              </div>

            </div>

            <hr className="my-10 border-gray-200" />

            <p>
              boAt's pricing is designed for the Indian market — most of its catalogue sits between ₹500 and ₹5,000, which is where the volume of audio purchases in India happens. The BOATHEAD prepaid code gives a consistent 5% off that applies to any order on the official site, and stacks reasonably on top of whatever sale price the product is already at. For anyone buying a boAt product for the first time, applying that code at checkout and paying via UPI or card is the simplest way to get the best price without waiting for a sale event.
            </p>

          </div>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-10">
          <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
            <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
              Popular boAt Searches
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {["boAt Coupons", "boAt Airdopes Offers", "Rockerz Headphones Deals", "boAt Smartwatch Discounts", "BOATHEAD Code", "Prepaid Offers", "CouponsCrew Home"].map(tag => (
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
            Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at boAt checkout for instant discounts.
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
            <span>Continue to boAt</span>
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
</>

      {showModal && activeModalCoupon && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-xs select-none">
          <div className="bg-white rounded-3xl border border-[#E8E8F0] shadow-2xl p-6 md:p-8 max-w-md w-full text-center relative space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-[#EAFDF3] border border-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-500">
              <Check size={28} className="stroke-[3]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-black text-[#1A1A2E]">Coupon Code Copied!</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at boAt checkout for instant discounts.</p>
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
                <span>Continue to boAt</span>
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
