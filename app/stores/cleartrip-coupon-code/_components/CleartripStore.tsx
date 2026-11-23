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
import { Coupon, CLEARTRIP_COUPONS } from './cleartripCoupons';

export type { Coupon };

const AFFILIATE_URL = '#';

export default function CleartripStore() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeModalCoupon, setActiveModalCoupon] = useState<Coupon | null>(null);
  const [expandedCouponId, setExpandedCouponId] = useState<string | null>(null);

  const coupons: Coupon[] = CLEARTRIP_COUPONS;

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
            <span className="text-[#5B4FBE] font-semibold">Cleartrip Coupon Code</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-[#E8E8F0] shadow-sm flex flex-col justify-between">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex flex-col items-center gap-3">
                  <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" className="w-28 h-28 bg-white border border-[#E8E8F0] rounded-2xl flex items-center justify-center p-4 shadow-sm shrink-0">
                    <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1795429790/cleartrip-logo_kpk4xn.webp" alt="Cleartrip Logo" className="w-full h-auto object-contain" />
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
                  <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Cleartrip Coupon Codes</h1>
                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Travel smarter with a Cleartrip coupon code and unlock exclusive savings in Nov 2026. Verified offers include up to 50% off IndiGo add-ons, up to 40% off hotel bookings, and up to 20% off Akasa Air flights. Looking for a discount code? You can also enjoy up to 21% off international flights, 15% off domestic flights, and bank offers from HDFC, SBI, and Axis on eligible bookings. Regularly updated deals help you save on flights, hotels, and bus travel with confidence.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E8E8F0] flex flex-wrap items-center gap-4">
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" className="bg-[#FF5722] hover:bg-[#E64A19] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer">
                  <span>Visit Cleartrip</span>
                  <ExternalLink size={16} />
                </a>
                <a href="https://www.google.com/preferences/source?q=couponscrew.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center hover:opacity-90 transition-opacity active:scale-95">
                  <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788011120/google-preferred-sources-561_m6yj79.webp" alt="Google Preferred Source" className="h-[56px] w-auto object-contain" />
                </a>
              </div>
            </div>

            <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" className="hidden lg:block lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm h-full aspect-[770/563] bg-[#5B4FBE]/5">
              <NextImage src="https://res.cloudinary.com/dqjlffxja/image/upload/v1795429790/cleartrip-logo_kpk4xn.webp" alt="Cleartrip Offers" fill sizes="(max-width: 1024px) 0px, 480px" referrerPolicy="no-referrer" className="object-contain w-full h-full p-12" priority />
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
            <div><div className="text-lg font-black text-[#1A1A2E] leading-none">Up to 15%</div><div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">Best Discount</div></div>
          </div>
          <div className="flex items-center gap-3.5 border-r border-[#E8E8F0]/70 pr-4">
            <div className="w-11 h-11 bg-[#EAFDF3] text-emerald-600 rounded-2xl flex items-center justify-center shrink-0"><span className="text-lg font-black">₹</span></div>
            <div><div className="text-lg font-black text-[#1A1A2E] leading-none">₹2500+</div><div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">You Can Save</div></div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Cleartrip Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Cleartrip coupon codes & offers.</p>
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
    How to Apply a Cleartrip Promo Code
  </h3>

  <ol className="space-y-3.5 text-xs font-semibold text-[#4A4A6A] list-decimal list-inside">
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Go to cleartrip.com or open the Cleartrip app and search for your flight, hotel, bus, or train.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Select your booking and proceed to the payment page.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Look for the "Coupon / Promo Code" field — it's on the payment screen before you enter card details.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Type the Cleartrip coupon code exactly as shown. Codes are case-sensitive.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Click Apply and confirm the discount has been deducted from your total.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Complete payment. The discounted amount is what you pay — if the code didn't apply, the page will say so before you proceed.
      </span>
    </li>
  </ol>

  <p className="mt-4 pt-3.5 border-t border-[#E8E8F0] text-xs font-semibold text-[#2C2C40] leading-relaxed">
    If you're using a bank card offer (NOVCC for SBI/ICICI credit cards, NOVDC for ICICI debit cards, NOVUPI for UPI), the discount is calculated automatically when you enter payment details with the matching instrument. You don't need to enter those codes manually — they appear in the available offers section during checkout.
  </p>
</div>

<div className="bg-white border border-[#E8E8F0] rounded-3xl p-6 shadow-xs text-left max-w-3xl mx-auto my-6">
  <h3 className="font-extrabold text-[#1A1A2E] text-lg mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    The CTFIRST Code: What New Users Should Know Before Booking
  </h3>

  <div className="space-y-3.5 text-xs font-semibold text-[#2C2C40] leading-relaxed">
    <p>
      CTFIRST is the most broadly useful Cleartrip discount code for anyone who hasn't booked on the platform before. It covers three separate booking types under a single code — which is unusual for OTA first-timer offers, most of which are flight-only.
    </p>

    <p>
      On domestic flights: 10% off, capped at ₹1,000. For a ₹5,000 ticket, that's the full ₹500 saved. For anything above ₹10,000, you hit the ₹1,000 cap.
    </p>

    <p>
      On international flights: 8% off, capped at ₹1,500. Applied to international bookings, the cap is higher, so it stretches further on longer routes.
    </p>

    <p>
      On domestic hotels: 25% off with a minimum booking of ₹3,999, capped at ₹2,500. For a ₹10,000 hotel booking, that's the full ₹2,500. For bookings between ₹3,999 and ₹10,000, you get 25% of whatever the total is.
    </p>

    <p>
      The code applies on the desktop site, Android/iOS apps, and the mobile site. It doesn't apply to train or bus bookings. The hotel version works specifically on your first domestic hotel booking after account login — if you've booked a hotel before under the same account, the code will reject. Check CouponsCrew for updated terms before checkout, since Cleartrip can modify or withdraw the offer without prior notice.
    </p>

    <p className="pt-3.5 border-t border-[#E8E8F0]">
      One thing to plan around: the CTFIRST hotel code requires a minimum cart of ₹3,999. If you're booking a budget stay that falls just under that, it may be worth upgrading to a slightly higher room tier — the 25% discount on a ₹4,000 booking (₹1,000 off) is worth more than whatever you'd save by staying at ₹3,500.
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
        
        {/* Main Title - Top Heading in H2 */}
        <h2 className="text-3xl font-black text-black mb-10 leading-tight italic">
          Cleartrip Coupon Code: Save on Flights, Hotels and Buses in India (November 2026)
        </h2>

        <div className="text-gray-600 font-normal leading-relaxed space-y-6">
          <p>
            A Cleartrip coupon code is a promo code entered at checkout on cleartrip.com to reduce your flight, hotel, bus, or train booking price. The most reliable starting code right now is CTFIRST — it gives 10% off your first domestic flight (capped at ₹1,000) and 25% off your first domestic hotel booking (minimum ₹3,999, capped at ₹2,500), valid till December 31, 2026. Bank card codes like NOVCC and NOVUPI stack further savings of up to 35% off domestic flights, depending on your payment method.
          </p>

          <div>
            <div className="space-y-4 text-slate-700">
              <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                Cleartrip Coupon Codes — November 2026
              </h3>

              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
                  <thead>
                    <tr className="bg-[#5B4FBE] text-white">
                      <th className="p-4 font-bold">Code</th>
                      <th className="p-4 font-bold">Offer</th>
                      <th className="p-4 font-bold">Applicable On</th>
                      <th className="p-4 font-bold">Max Saving</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                    <tr>
                      <td className="p-4 font-semibold">CTFIRST</td>
                      <td className="p-4">10% off first domestic flight booking</td>
                      <td className="p-4">First-time customers only</td>
                      <td className="p-4">₹1,000</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="p-4 font-semibold">CTFIRST</td>
                      <td className="p-4">8% off first international flight</td>
                      <td className="p-4">First-time customers only</td>
                      <td className="p-4">₹1,500</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">CTFIRST</td>
                      <td className="p-4">25% off first domestic hotel (min ₹3,999)</td>
                      <td className="p-4">First-time hotel booking</td>
                      <td className="p-4">₹2,500</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="p-4 font-semibold">NOVCC</td>
                      <td className="p-4">Up to 35% off domestic flights</td>
                      <td className="p-4">SBI/ICICI credit cards</td>
                      <td className="p-4">—</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">NOVUPI</td>
                      <td className="p-4">Up to 35% off domestic flights</td>
                      <td className="p-4">UPI payments</td>
                      <td className="p-4">—</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="p-4 font-semibold">NOVDC</td>
                      <td className="p-4">Up to 20% off international flights</td>
                      <td className="p-4">ICICI debit cards</td>
                      <td className="p-4">—</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">CTINDIGO</td>
                      <td className="p-4">Up to ₹5,000 off IndiGo flights</td>
                      <td className="p-4">Select IndiGo routes</td>
                      <td className="p-4">₹5,000</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="p-4 font-semibold">CTAKASA</td>
                      <td className="p-4">Up to ₹5,000 off Akasa Air</td>
                      <td className="p-4">Select Akasa routes</td>
                      <td className="p-4">₹5,000</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">CTPLUSONE</td>
                      <td className="p-4">Up to ₹5,000 off on 2+ passengers</td>
                      <td className="p-4">Group bookings</td>
                      <td className="p-4">₹5,000</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="p-4 font-semibold">CTPLUSONE</td>
                      <td className="p-4">Up to ₹6,000 off (SBI cards/EMI)</td>
                      <td className="p-4">Domestic + international</td>
                      <td className="p-4">₹6,000</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">BBDMAX</td>
                      <td className="p-4">Up to ₹25,000 off international flights</td>
                      <td className="p-4">Select international routes</td>
                      <td className="p-4">₹25,000</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="p-4 font-semibold">CTPREMIUM</td>
                      <td className="p-4">Up to 15% off premium/business class</td>
                      <td className="p-4">Premium cabin bookings</td>
                      <td className="p-4">—</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">CTFKSBIC</td>
                      <td className="p-4">Flat 20% off + 5% cashback on hotels</td>
                      <td className="p-4">Flipkart SBI Card</td>
                      <td className="p-4">—</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="p-4 font-semibold">CTFKAXIS</td>
                      <td className="p-4">Flat 20% off + 5% cashback on hotels</td>
                      <td className="p-4">Flipkart Axis Bank Card</td>
                      <td className="p-4">—</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">SBICC</td>
                      <td className="p-4">Flat 25% off domestic hotels; 10% off buses</td>
                      <td className="p-4">SBI credit cards</td>
                      <td className="p-4">—</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="p-4 font-semibold">CTMBK25</td>
                      <td className="p-4">Flat ₹450 off on flights</td>
                      <td className="p-4">MobiKwik wallet</td>
                      <td className="p-4">₹450</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">FAMILY</td>
                      <td className="p-4">Group discount on domestic flights (3+ passengers)</td>
                      <td className="p-4">Axis/ICICI cards</td>
                      <td className="p-4">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <hr className="my-6 border-slate-200" />

              <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                What Cleartrip Is — and Why It&apos;s Different from Other OTAs
              </h3>

              <p>
                Cleartrip was founded in 2006 by Stuart Crighton, Hrush Bhatt, and Matthew Spacie in Mumbai as a clean, interface-first alternative to the booking portals of that era. Where most OTAs were loading pages with filters, pop-ups, and add-on upsells, Cleartrip launched with a deliberately minimal design philosophy. The name wasn&apos;t a tagline — it was a product principle: make the booking clear, not complicated.
              </p>

              <p>
                In April 2021, Walmart-owned Flipkart acquired Cleartrip. That acquisition matters for how you use the platform today: Cleartrip is integrated into the Flipkart ecosystem, which means Flipkart-branded bank cards (Flipkart SBI, Flipkart Axis) carry some of the strongest discount codes on the platform. If you hold either card, the CTFKSBIC or CTFKAXIS codes on hotel bookings are among the highest-value codes available — 20% off plus an additional 5% cashback, stacking two savings in one checkout.
              </p>

              <p>
                Cleartrip operates across India and the Middle East — UAE, Oman, Qatar, Kuwait, Bahrain, and Saudi Arabia — where it acquired Saudi-based Flyin in 2018. For Indian travellers booking to any of these Gulf destinations, Cleartrip often has airline-specific codes that other booking platforms don&apos;t surface for those routes.
              </p>

              <hr className="my-6 border-slate-200" />

              <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                FreedomFare: Cleartrip&apos;s Zero-Cancellation Option for International Flights
              </h3>

              <p>
                One thing most coupon pages don&apos;t cover is Cleartrip&apos;s FreedomFare option, which is worth knowing about if you&apos;re booking international flights but aren&apos;t certain about your dates.
              </p>

              <p>
                FreedomFare is an add-on you select at booking time for international flights. It allows you to cancel your ticket for personal reasons — including on non-refundable fares — and get the full airfare refunded, as long as you cancel at least 24 hours before departure. The refund goes back to your account or original payment method within 7 working days.
              </p>

              <p>
                The catch is that the premium itself (the extra cost you pay for FreedomFare) and the convenience fee are non-refundable. And you can only use the refund if you cancel through Cleartrip&apos;s website or app — cancelling directly with the airline voids the benefit.
              </p>

              <p>
                For international bookings where there&apos;s real uncertainty about travel dates — a business trip that could get postponed, visa timelines, or anything where you might need to cancel at short notice — FreedomFare reduces the financial risk of booking early. For domestic flights, the cancellation costs are lower anyway, so the add-on matters less there.
              </p>

              <hr className="my-6 border-slate-200" />

              <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                Group and Family Bookings: Codes That Scale With Passenger Count
              </h3>

              <p>
                Cleartrip has specific codes for multi-passenger bookings that individual travellers miss. If you&apos;re booking for two or more people, CTPLUSONE applies up to ₹5,000 off depending on the route, or up to ₹6,000 off when paying with SBI cards or via EMI. For families travelling with three or more passengers, FAMILY (domestic) and INTFAMILY (international) offer further savings through Axis Bank or ICICI credit cards.
              </p>

              <p>
                These group codes work differently from the individual codes — the savings are route-dependent and confirmed at checkout rather than being a fixed percentage. The benefit is that you&apos;re negotiating a higher base fare, so even a moderate percentage saves more in absolute terms.
              </p>

              <p>
                For families planning an annual vacation or a group trip, it&apos;s worth checking both the CTPLUSONE and FAMILY codes against the base fare before assuming one is better. The bank card requirement for FAMILY means it&apos;s only relevant if at least one person in the booking holds an Axis or ICICI card.
              </p>

              <hr className="my-6 border-slate-200" />

              <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                Airline-Specific Cleartrip Discount Codes
              </h3>

              <p>
                Two of Cleartrip&apos;s current codes are tied to specific airlines and can offer better savings than the platform-wide codes on those routes.
              </p>

              <p>
                CTINDIGO — Up to ₹5,000 off on select IndiGo flights. IndiGo is India&apos;s highest-frequency domestic carrier, so this code covers a large portion of domestic routes. The cap is route-specific and the actual discount depends on fare class and availability.
              </p>

              <p>
                CTAKASA — Up to ₹5,000 off on Akasa Air routes. Akasa has expanded rapidly across Indian metros and tier-2 cities since 2022, and its base fares are often competitive. When the route exists on Akasa, CTAKASA applied on top of an already-low base fare can produce better total savings than IndiGo at higher fares with CTINDIGO.
              </p>

              <p>
                For international, CTMHSPL covers Malaysia Airlines bookings with up to ₹10,000 off, and BBDMAX goes up to ₹25,000 off on select long-haul international routes — primarily relevant for high-value bookings where the absolute saving justifies checking.
              </p>

              <hr className="my-6 border-slate-200" />

              <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                Why Some Cleartrip Coupon Codes Stop Working
              </h3>

              <p>
                If a Cleartrip promo code isn&apos;t applying at checkout, one of these is usually the reason:
              </p>

              <p>
                Wrong payment method. The NOVCC code works only with SBI or ICICI credit cards. NOVUPI works only with UPI. Using a different card or wallet means the code won&apos;t activate regardless of how it was advertised.
              </p>

              <p>
                Code already used on this account. CTFIRST is strictly one use — once it&apos;s applied to a flight or hotel booking, it won&apos;t work on a second booking under the same account, even for a different category.
              </p>

              <p>
                Airline or category excluded. Airline-specific codes like CTINDIGO work only on IndiGo-operated flights. If your Cleartrip search returns a mix of airlines and you&apos;ve selected a different carrier, the code won&apos;t apply.
              </p>

              <p>
                Monthly code has changed. Bank codes like NOVCC, NOVDC, and NOVUPI rotate monthly — the November codes won&apos;t work in December. Check CouponsCrew at the start of each month for the updated codes before booking.
              </p>

              <p>
                Minimum fare not met. CTFIRST for hotels requires a minimum of ₹3,999 at checkout. If your hotel subtotal is just under that after taxes and fees, the code will reject. The minimum applies to the booking total, not the per-night rate.
              </p>
            </div>
          </div>

          <hr className="my-10 border-gray-200" />

          {/* FAQs Section Header in H3 */}
          <h3 className="text-2xl font-black text-black mt-16 mb-8">
            Frequently Asked Questions
          </h3>

          {/* FAQ List */}
          <div className="space-y-4">
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <h3 className="font-black text-black text-base">
                What is the best Cleartrip coupon code for new users?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                CTFIRST gives 10% off a first domestic flight (capped at ₹1,000), 8% off a first international flight (capped at ₹1,500), and 25% off a first domestic hotel booking with a minimum of ₹3,999 (capped at ₹2,500). It&apos;s valid till December 31, 2026 and applies on the website, app, and mobile site.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <h3 className="font-black text-black text-base">
                Can I use more than one Cleartrip discount code?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Generally, only one coupon code can be applied per booking. However, some bank card offers apply automatically in addition to a promo code — for example, using UPI with NOVUPI can apply on top of a base price that also reflects a sale fare. Check the discount breakdown at checkout to see what has applied before confirming.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <h3 className="font-black text-black text-base">
                How do I book a flight on Cleartrip with the best discount?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                For new users, start with CTFIRST. For returning users, check whether your payment method qualifies for a bank card code (NOVCC for SBI/ICICI credit, NOVUPI for UPI) — these typically offer higher percentage discounts on domestic flights. For specific airlines, CTINDIGO and CTAKASA can offer up to ₹5,000 off. CouponsCrew lists the latest verified codes before checkout.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <h3 className="font-black text-black text-base">
                Does Cleartrip have codes for train bookings?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Cleartrip&apos;s promo codes primarily cover flights, hotels, and buses. Train bookings through Cleartrip don&apos;t typically have separate code-based discounts — savings there come from avoiding the IRCTC convenience fee on some plans.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <h3 className="font-black text-black text-base">
                What is Cleartrip FreedomFare?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                FreedomFare is an optional add-on for international flights that allows full airfare refund if you cancel at least 24 hours before departure — including on non-refundable tickets. The refund goes back within 7 working days. The add-on premium and convenience fee are non-refundable.
              </p>
            </div>

          </div>

          <hr className="my-10 border-gray-200" />

          <p>
            Cleartrip&apos;s most accessible saving for a first-time booking is CTFIRST applied at checkout for a domestic flight or hotel. For recurring bookings, the value shifts to bank card codes — especially if you hold a Flipkart-affiliated SBI or Axis card, where the hotel codes stack cashback on top of the flat discount. The airline-specific codes (CTINDIGO, CTAKASA) are worth checking when your route happens to be on those carriers. CouponsCrew updates all codes as Cleartrip rotates them each month.
          </p>

        </div>
      </div>

      {/* Sidebar Column */}
      <div className="space-y-10">
        <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Popular Cleartrip Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {["Cleartrip Coupons", "Flight Offers", "Hotel Discounts", "Bus Booking Deals", "CTFIRST Offer", "FreedomFare", "CouponsCrew Home"].map(tag => (
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


      {showModal && activeModalCoupon && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-xs select-none">
          <div className="bg-white rounded-3xl border border-[#E8E8F0] shadow-2xl p-6 md:p-8 max-w-md w-full text-center relative space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-[#EAFDF3] border border-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-500">
              <Check size={28} className="stroke-[3]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-black text-[#1A1A2E]">Coupon Code Copied!</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at Cleartrip checkout for instant discounts.</p>
            </div>
            <div className="bg-[#F8F8FF] border border-[#E8E8F0] rounded-2xl py-3 px-4 flex items-center justify-between gap-4">
              <span className="font-mono font-bold text-sm tracking-wider text-gray-500 select-all">{activeModalCoupon.code}</span>
              <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100 uppercase">Copied</span>
            </div>
            <div className="text-xs font-semibold text-gray-500 flex items-center gap-1.5 justify-center bg-gray-50 py-2.5 px-4 rounded-xl border border-gray-100">
              <AlertCircle size={14} className="text-gray-400" />
              <span>Make sure to paste code before finalizing booking.</span>
            </div>
            <div className="pt-2 flex flex-col gap-2">
              <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" onClick={() => setShowModal(false)} className="w-full bg-[#FF5722] hover:bg-[#E64A19] text-white py-3.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md">
                <span>Continue to Cleartrip</span>
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
