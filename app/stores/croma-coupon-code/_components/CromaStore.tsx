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
  Copy,
  Check,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';
import { Coupon, CROMA_COUPONS } from './cromaCoupons';

export type { Coupon };

const AFFILIATE_URL = '#';

export default function CromaStore() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeModalCoupon, setActiveModalCoupon] = useState<Coupon | null>(null);
  const [expandedCouponId, setExpandedCouponId] = useState<string | null>(null);

  const coupons: Coupon[] = CROMA_COUPONS;

  const handleCopyCode = (coupon: Coupon) => {
    navigator.clipboard.writeText(coupon.code);
    setCopiedCode(coupon.code);
    setActiveModalCoupon(coupon);
    setShowModal(true);
    setTimeout(() => {
      setCopiedCode(null);
    }, 3000);
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
            <span className="text-[#5B4FBE] font-semibold">Croma Coupon Code</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-[#E8E8F0] shadow-sm flex flex-col justify-between">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex flex-col items-center gap-3">
                  <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" className="w-28 h-28 bg-white border border-[#E8E8F0] rounded-2xl flex items-center justify-center p-4 shadow-sm shrink-0">
                    <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1795429812/croma-logo_msqmld.webp" alt="Croma Logo" className="w-full h-auto object-contain" />
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
                  <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Croma Coupon Codes</h1>
                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Upgrade your home and tech for less with a Croma coupon code in Nov 2026. Verified offers include up to 73% off selected keyboards and mice, up to 60% off TVs, laptops, and home appliances, plus up to 51% off gaming laptops. Looking for a discount code? You can also save up to 30% on home appliances, earn up to 10% back in NeuCoins, and unlock extra bank offers on eligible purchases with regularly updated deals.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E8E8F0] flex flex-wrap items-center gap-4">
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" className="bg-[#FF5722] hover:bg-[#E64A19] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer">
                  <span>Visit Croma</span>
                  <ExternalLink size={16} />
                </a>
                <a href="https://www.google.com/preferences/source?q=couponscrew.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center hover:opacity-90 transition-opacity active:scale-95">
                  <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788011120/google-preferred-sources-561_m6yj79.webp" alt="Google Preferred Source" className="h-[56px] w-auto object-contain" />
                </a>
              </div>
            </div>

            <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" className="hidden lg:block lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm h-full aspect-[770/563] bg-[#5B4FBE]/5">
              <NextImage src="https://res.cloudinary.com/dqjlffxja/image/upload/v1795429812/croma-logo_msqmld.webp" alt="Croma Offers" fill sizes="(max-width: 1024px) 0px, 480px" referrerPolicy="no-referrer" className="object-contain w-full h-full p-12" priority />
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
            <div><div className="text-lg font-black text-[#1A1A2E] leading-none">Up to 20%</div><div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Best Discount</div></div>
          </div>
          <div className="flex items-center gap-3.5 border-r border-[#E8E8F0]/70 pr-4">
            <div className="w-11 h-11 bg-[#EAFDF3] text-emerald-600 rounded-2xl flex items-center justify-center shrink-0"><span className="text-lg font-black">₹</span></div>
            <div><div className="text-lg font-black text-[#1A1A2E] leading-none">₹2000+</div><div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">You Can Save</div></div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Croma Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Croma coupon codes & offers.</p>
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
    How to Apply a Croma Discount Code or Offer
  </h3>

  <ol className="space-y-3.5 text-xs font-semibold text-[#4A4A6A] list-decimal list-inside">
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Go to croma.com and add your product to the cart.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        On the cart page, click "Apply Coupon / Promo Code" if you have a code — enter it exactly as listed and click Apply.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        For bank card instant discounts (HDFC EMI, Axis EMI), the reduction applies automatically when you select that card and payment type at the payment step — no code entry needed.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        For Tata Neu NeuCoins offers, link your Tata Neu account before checkout. The NeuCoins earning or redemption applies when you pay with an eligible Tata Neu HDFC Credit Card.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Confirm the saving is reflected before you place the order.
      </span>
    </li>
  </ol>

  <p className="mt-4 pt-3.5 border-t border-[#E8E8F0] text-xs font-semibold text-[#2C2C40] leading-relaxed">
    If you have multiple offers available — say a bank EMI discount and a Tata Neu NeuCoins offer — check at checkout which applies automatically and whether both can stack. Croma's bank offers typically cannot be combined with one another, but NeuCoins redemption generally stacks on top of a sale price.
  </p>
</div>

<div className="bg-white border border-[#E8E8F0] rounded-3xl p-6 shadow-xs text-left max-w-3xl mx-auto my-6">
  <h3 className="font-extrabold text-[#1A1A2E] text-lg mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    Croma in 2026: India's Largest Omnichannel Electronics Retailer
  </h3>

  <div className="space-y-3.5 text-xs font-semibold text-[#2C2C40] leading-relaxed">
    <p>
      Croma is a retail brand of Infiniti Retail Limited, a Tata Group company. It opened its first store in Juhu, Mumbai in October 2006 and now operates more than 550 stores across 200+ Indian cities — a physical footprint no pure-play online electronics retailer can match. The 500th store opened in Chennai's Kattupakkam locality in June 2024, marking a scale milestone that few consumer electronics chains in India have reached.
    </p>

    <p>
      Croma's parent structure matters for how you save on the platform. Infiniti Retail was originally a wholly-owned Tata Sons entity; in 2021, Tata Sons transferred ownership to Tata Digital, the same arm that runs Tata Neu, BigBasket, and other digital properties. That structural alignment is why Tata Neu and Croma are now tightly integrated: NeuCoins earned on Croma purchases can be redeemed across the Tata Digital ecosystem, and the most powerful Croma discounts consistently come from Tata Neu HDFC Bank Credit Cards.
    </p>

    <p>
      The brand carries more than 16,000 products across 550+ brands — spanning smartphones, laptops, televisions, air conditioners, washing machines, refrigerators, audio equipment, cameras, and accessories. It also runs a private-label brand under the Croma name, launched in 2008, covering select appliances and accessories at competitive price points. For Apple buyers specifically, Croma operates Tribe by Croma — 13 Apple-exclusive stores that stock the full Apple range with Croma's service infrastructure behind them.
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
            Croma Coupon Code: Save on Electronics, Appliances and Smartphones in India (November 2026)
          </h2>

          <div className="text-gray-600 font-normal leading-relaxed space-y-6">
            <p>
              A Croma coupon code is a promo code or bank card offer applied at checkout on croma.com or in-store to reduce the price of smartphones, laptops, televisions, appliances, and accessories. Croma's savings structure is built more around bank card discounts and Tata Neu integration than single-use coupon strings — the strongest consistent saving right now comes from paying with a Tata Neu HDFC Credit Card, which earns up to 10% back as NeuCoins on select categories. For high-value electronics purchases, bank EMI card offers — including 7.5% instant discount via HDFC Bank and up to ₹20,000 off via Axis Bank — give the most direct price reduction.
            </p>

            <div>
              <div className="space-y-4 text-slate-700">
                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                  The Tata Neu Strategy: How NeuCoins Stack With Croma Savings
                </h3>

                <p>
                  For regular Croma shoppers, the Tata Neu HDFC Credit Card is the most consistent way to increase the effective discount on every purchase — and understanding how NeuCoins work helps you decide whether the card is worth getting.
                </p>

                <p>
                  NeuCoins are Tata's rewards currency, earned on purchases across the Tata Digital ecosystem (Croma, BigBasket, Air India, Tata 1mg, IHCL hotels, and others). On Croma purchases through croma.com, the Tata Neu app, or in-store, an eligible Tata Neu HDFC Credit Card earns NeuCoins as a percentage of your spend — and those NeuCoins can be redeemed as cash-equivalent credit on a future Croma purchase.
                </p>

                <p>
                  For category-specific offers (Apple products, Google Pixel, home and audio products, select Croma-brand items), the NeuCard earns up to 10% in NeuCoins — 5% standard plus 5% additional — when used for a full-swipe payment (EMI transactions are excluded from the bonus earning). For everything else, the standard earning is 5% NeuCoins on an Infinity card and 2% on a Plus or Visa/RuPay card.
                </p>

                <p>
                  The practical value: a ₹30,000 smartphone purchase on a NeuCard Infinity earns ₹1,500 in NeuCoins that can come off your next Croma or Tata Digital purchase. If the product also falls into a category with the 10% NeuCoins offer (say, a Google Pixel phone in a Croma smartphone sale), that same ₹30,000 purchase earns ₹3,000 in NeuCoins. These aren't instant discounts — they're credits for the next purchase — but over multiple purchases they represent a meaningful ongoing saving that most other payment methods on croma.com don't match.
                </p>

                <p>
                  One important restriction: the NeuCoins bonus applies only to full-swipe payments. Converting the same purchase to a no-cost EMI removes the additional NeuCoins earning and leaves only the base rate. If you're deciding between immediate EMI cash flow and NeuCoins accumulation, that trade-off is worth calculating for high-value orders.
                </p>

                <hr className="my-6 border-slate-200" />

                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                  EMI Bank Offer Strategy: Day of Week Matters at Croma
                </h3>

                <p>
                  Croma's bank card instant discounts don't run every day — they're tied to specific days of the week, which means timing your purchase around the right day gives you a meaningfully lower price on the same product.
                </p>

                <p>
                  The HDFC Bank Easy EMI offer (7.5% instant discount, capped at ₹3,000, minimum cart ₹10,000) runs Friday through Sunday. If you're buying a laptop priced at ₹40,000 on the HDFC EMI offer on a Saturday, that's ₹3,000 off the final price — the equivalent of roughly 7.5% on a ₹40,000 purchase. Making the same purchase on a Tuesday or Wednesday means you miss the offer entirely at no benefit.
                </p>

                <p>
                  Axis Bank's EMI offer (up to ₹20,000 instant discount) runs Saturdays and Sundays. This is primarily relevant for large purchases — high-end televisions, premium laptops, air conditioners — where the discount value scales with the product price.
                </p>

                <p>
                  If you have an HDFC Bank card and are buying something above ₹10,000, waiting until Friday to place the order on croma.com is a straightforward way to add an instant saving without any coupon code or additional step. Check CouponsCrew for the current bank offer schedule before your purchase, since Croma updates these offers periodically.
                </p>

                <hr className="my-6 border-slate-200" />

                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                  Croma Exchange Offers: What You Get for Your Old Device
                </h3>

                <p>
                  Croma runs an exchange program in-store that can reduce the net cost of a new product meaningfully, particularly on laptops and smartphones.
                </p>

                <p>
                  The standard exchange benefit gives you an assessed value for your old device against a new purchase. For appliances, Croma runs a 3X exchange offer — where the effective exchange benefit is tripled — with the total benefit capped at ₹5,000. This applies on carts above ₹25,000, and only one item can be exchanged per invoice.
                </p>

                <p>
                  For laptops and smartphones, Croma offers an additional exchange bonus of up to ₹21,000 over and above the base device assessment. This makes the effective trade-in value on a good-condition old flagship phone or laptop significantly higher than the second-hand market value you'd get selling it yourself — particularly because Croma evaluates working devices generously during offer periods.
                </p>

                <p>
                  For non-working or broken devices, Croma offers a flat ₹500 e-waste benefit on purchases above ₹25,000. This isn't an exchange offer in the traditional sense — the device value is zero — but the ₹500 incentive for responsible e-waste disposal is worth noting if you have an old device you wouldn't otherwise get anything for.
                </p>

                <p>
                  Exchange offer rates vary by device model, condition, and Croma campaign period. The exact rate card is available at the nearest Croma store or when you initiate the exchange process online. For large purchases where exchange is part of the buying plan, checking the in-store rate card before the purchase can help you structure the deal to maximise the total saving from exchange plus any bank card discount on the same cart.
                </p>

                <hr className="my-6 border-slate-200" />

                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                  ZipCare: Croma's Extended Warranty Program
                </h3>

                <p>
                  One thing Croma offers that online-only electronics retailers typically don't is in-store after-sales service infrastructure, backed by an extended warranty program called ZipCare.
                </p>

                <p>
                  ZipCare extends manufacturer warranty coverage beyond the standard warranty period for products like smartphones, laptops, tablets, air conditioners, televisions, and other electronics. It covers mechanical and electrical failure — the kind of breakdowns that happen through normal use, not accidents. Accidental damage (drops, screen cracks, liquid spills) is not included in the standard extended warranty; Croma offers separate ZipCare Protect plans for those scenarios.
                </p>

                <p>
                  Who benefits from ZipCare: buyers who plan to keep a product for three or more years beyond the standard manufacturer warranty period. Consumer electronics failure rates typically increase after year two of use, which is exactly when the manufacturer warranty has expired. For products like air conditioners and high-end televisions, where repair costs can be substantial, the extended warranty reduces the financial exposure from a component failure at year three or four.
                </p>

                <p>
                  Who can skip it: buyers who regularly upgrade devices every 1–2 years, or those buying a product within a category where replacement costs have come down significantly (budget smartphones, entry-level audio gear). For those buyers, the cost of the extended warranty often exceeds the likely repair cost on the second-hand replacement.
                </p>

                <hr className="my-6 border-slate-200" />

                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                  Why Croma Promo Codes Work Differently From Other Retail Categories
                </h3>

                <p>
                  If you've used promo codes on fashion, food, or travel platforms and expect Croma to work the same way, the structure is different and worth understanding before checkout.
                </p>

                <p>
                  Consumer electronics margins in India are significantly tighter than in categories like fashion or food delivery. At a retail level, the gap between the manufacturer's selling price and the retailer's purchase price on a Samsung television or an Apple laptop is narrow — which is why Croma and other electronics retailers can't offer 20–30% sitewide coupon codes the way a fashion app might. What they can offer is bank card cashback (funded partly by the bank as an acquisition cost for card spend), NeuCoins (funded by Tata's ecosystem economics), and exchange bonuses (where the trade-in device has real resale value that offsets the discount). These are real savings, but they require matching the right payment method to the right offer.
                </p>

                <p>
                  The practical implication: for most Croma purchases above ₹10,000, the highest available saving will come from a combination of timing (buy on a bank offer day), payment method (Tata Neu HDFC for NeuCoins, or whichever bank has the highest instant discount on that day), and category (take advantage of product-specific NeuCoins multipliers on Apple, Pixel, or home appliance buys). Check CouponsCrew before checkout to see which of these currently applies to your product.
                </p>

                <hr className="my-6 border-slate-200" />

                <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                  Croma Promo Code Not Working? Here's What to Check
                </h3>

                <p>
                  <strong>Bank code not applying.</strong> HDFC Bank Easy EMI discounts are only valid Friday–Sunday and only on EMI transactions above ₹10,000. A regular non-EMI purchase won't trigger it. Check both the day and the payment method before concluding the offer isn't active.
                </p>

                <p>
                  <strong>NeuCoins not earned on EMI.</strong> The 5–10% NeuCoins earning for specific categories requires a full-swipe payment on the NeuCard, not an EMI conversion. If you've converted to EMI at checkout, the bonus NeuCoins won't apply — only the base 2–5% standard earning.
                </p>

                <p>
                  <strong>Exchange offer applied incorrectly.</strong> The 3X appliance exchange benefit requires a minimum cart of ₹25,000. If your purchase is under that threshold, the standard (non-tripled) exchange value still applies — but the multiplier won't activate.
                </p>

                <p>
                  <strong>Offer limited to croma.com (not in-store, or vice versa).</strong> Some bank card offers apply online only. The HDFC Bank debit card cashback for e-vouchers works online; in-store instant discounts may have different terms. Confirm the channel before expecting the same offer at the counter.
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
                  What is the best Croma coupon code right now?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Croma's saving structure runs through bank card offers and Tata Neu NeuCoins rather than traditional promo codes. The most broadly applicable saving is 2–5% in NeuCoins on all purchases using a Tata Neu HDFC Credit Card (valid till December 31, 2026), with up to 10% NeuCoins on Apple, Google Pixel, home and audio, and select Croma-brand products. For instant cash-off, HDFC Bank Easy EMI gives 7.5% off (capped at ₹3,000) on orders above ₹10,000, valid Friday to Sunday. Check CouponsCrew for the latest verified active offers and any exclusive codes before checkout.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                <h3 className="font-black text-black text-base">
                  Does Croma offer a discount for first-time buyers?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Croma occasionally runs first-order offers through its app and website. The availability and terms change by season. Check the croma.com homepage or app for any active new-user savings before your first purchase.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                <h3 className="font-black text-black text-base">
                  Can I use a Croma discount code on the Tata Neu app?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Most Croma offers — including NeuCoins-earning offers and select bank card discounts — apply on the Tata Neu app as well as croma.com. Some specific bank card instant discounts may be limited to croma.com only; check the offer terms at checkout to confirm.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                <h3 className="font-black text-black text-base">
                  How does the Croma exchange offer work?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Bring your old device to a Croma store or initiate the exchange online. Croma assesses the device's condition and quotes a base exchange value. For appliances, a 3X multiplier (capped at ₹5,000) applies on carts above ₹25,000. For laptops and smartphones, an additional exchange bonus of up to ₹21,000 may apply depending on the offer period. The final saving is applied against the new product's price.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                <h3 className="font-black text-black text-base">
                  Is ZipCare extended warranty worth buying at Croma?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  ZipCare covers mechanical and electrical failure beyond the manufacturer warranty period. It's most worthwhile on high-ticket products you plan to use for three-plus years — premium laptops, ACs, televisions — where out-of-warranty repair costs are high. It doesn't cover accidental damage, which requires a separate ZipCare Protect plan.
                </p>
              </div>

            </div>

            <hr className="my-10 border-gray-200" />

            <p>
              Croma's combination of physical scale, Tata ecosystem integration, and bank card partnerships makes the saving strategy more structured than a simple code at checkout. The consistent approach: time your purchase for a bank offer day, pay with a Tata Neu HDFC Card for NeuCoins, and check whether your product category carries the 10% NeuCoins multiplier. For large purchases, adding an exchange device to the transaction stacks a third saving layer on top. CouponsCrew keeps the current bank offer schedule and any exclusive Croma codes updated — worth checking before you confirm any significant purchase.
            </p>

          </div>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-10">
          <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
            <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
              Popular Croma Searches
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {["Croma Coupons", "Croma Bank Offers", "Tata Neu Coins", "Smartphone Deals", "Laptop Discounts", "Croma Exchange Offer", "CouponsCrew Home"].map(tag => (
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
            Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at Croma checkout for instant discounts.
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
            <span>Continue to Croma</span>
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
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at Croma checkout for instant discounts.</p>
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
                <span>Continue to Croma</span>
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
