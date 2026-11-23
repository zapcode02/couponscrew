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
import { Coupon, ASICS_COUPONS } from './asicsCoupons';

export type { Coupon };

const AFFILIATE_URL = '#';

export default function AsicsStore() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeModalCoupon, setActiveModalCoupon] = useState<Coupon | null>(null);
  const [expandedCouponId, setExpandedCouponId] = useState<string | null>(null);

  const coupons: Coupon[] = ASICS_COUPONS;

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
            <span className="text-[#5B4FBE] font-semibold">Asics Coupon Code</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-[#E8E8F0] shadow-sm flex flex-col justify-between">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex flex-col items-center gap-3">
                  <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" className="w-28 h-28 bg-white border border-[#E8E8F0] rounded-2xl flex items-center justify-center p-4 shadow-sm shrink-0">
                    <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1795430116/axis-logo_yemmqi.webp" alt="Asics Logo" className="w-full h-auto object-contain" />
                  </a>
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1 bg-[#FFF8E7] text-[#FFB000] px-2.5 py-0.5 rounded-full text-xs font-bold border border-[#FFE7B3]">
                      <Star size={12} className="fill-current" />
                      <span>4.5 / 5</span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-semibold uppercase">User Rating</span>
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">Asics Coupon Codes</h1>
                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Save more on premium performance footwear with an ASICS coupon code in Nov 2026. Verified offers include up to 50% off the JOLT 4, GEL-EXCITE 10, TRABUCO 14, and TIGER RUNNER II, plus 40% off the GEL-VENTURE 11 and GEL-KAYANO 20. Wondering if ASICS has a discount code? Yes, you can also unlock savings on running shoes, trail shoes, sportstyle sneakers, and training footwear through regularly updated promotions. Compare the latest deals before checkout to maximize your savings.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E8E8F0] flex flex-wrap items-center gap-4">
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" className="bg-[#FF5722] hover:bg-[#E64A19] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer">
                  <span>Visit Asics</span>
                  <ExternalLink size={16} />
                </a>
                <a href="https://www.google.com/preferences/source?q=couponscrew.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center hover:opacity-90 transition-opacity active:scale-95">
                  <img src="https://res.cloudinary.com/dqjlffxja/image/upload/v1788011120/google-preferred-sources-561_m6yj79.webp" alt="Google Preferred Source" className="h-[56px] w-auto object-contain" />
                </a>
              </div>
            </div>

            <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer nofollow sponsored" className="hidden lg:block lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm h-full aspect-[770/563] bg-[#5B4FBE]/5">
              <NextImage src="https://res.cloudinary.com/dqjlffxja/image/upload/v1795430116/axis-logo_yemmqi.webp" alt="Asics Offers" fill sizes="(max-width: 1024px) 0px, 480px" referrerPolicy="no-referrer" className="object-contain w-full h-full p-12" priority />
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
            <div><div className="text-lg font-black text-[#1A1A2E] leading-none">₹1500+</div><div className="text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wider">You Can Save</div></div>
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
                <h2 className="text-2xl font-black text-[#1A1A2E] tracking-tight">Asics Coupons & Offers</h2>
                <p className="text-xs text-gray-400 mt-1">Save more with these verified Asics coupon codes & offers.</p>
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
    How to Apply an ASICS Discount Code
  </h3>

  <ol className="space-y-3.5 text-xs font-semibold text-[#4A4A6A] list-decimal list-inside">
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Go to asics.com/in and add your shoes or sportswear to the cart.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        At checkout, look for the "Promo / Coupon Code" field.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Enter your ASICS coupon code exactly as shown — codes are case-sensitive.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Click Apply and confirm the saving updates in your order total.
      </span>
    </li>
    <li className="leading-relaxed">
      <span className="text-[#2C2C40]">
        Complete payment. If you're a first-time buyer, the flat 10% new-user offer (valid November 30, 2026) applies at checkout before you enter payment details — verify it's reflected before you pay.
      </span>
    </li>
  </ol>

  <p className="mt-4 pt-3.5 border-t border-[#E8E8F0] text-xs font-semibold text-[#2C2C40] leading-relaxed">
    Free shipping on orders above ₹1,299. Cash on delivery is available in select pin codes only and carries an additional ₹50 charge on orders above that threshold. Prepaid payment avoids the COD surcharge.
  </p>
</div>

<div className="bg-white border border-[#E8E8F0] rounded-3xl p-6 shadow-xs text-left max-w-3xl mx-auto my-6">
  <h3 className="font-extrabold text-[#1A1A2E] text-lg mb-4 tracking-tight border-b border-[#E8E8F0] pb-3 select-none">
    ASICS Offers — November 2026
  </h3>

  <p className="text-xs font-semibold text-[#2C2C40] leading-relaxed mb-4">
    ASICS India's current savings don't all require a code. Here's what's active right now:
  </p>

  <div className="space-y-4">
    <div>
      <p className="text-xs font-extrabold text-[#1A1A2E] mb-2">
        Automatic sitewide discounts (no code needed):
      </p>
      <ul className="space-y-2.5 text-xs font-semibold text-[#4A4A6A] list-disc list-inside">
        <li className="leading-relaxed">
          <span className="text-[#2C2C40]">
            Up to 60% off sitewide on selected shoes, clothing, and accessories
          </span>
        </li>
        <li className="leading-relaxed">
          <span className="text-[#2C2C40]">
            Up to 50% off bestselling running shoes + extra 10% on top (limited period)
          </span>
        </li>
        <li className="leading-relaxed">
          <span className="text-[#2C2C40]">
            Up to 50% off women's footwear and clothing
          </span>
        </li>
        <li className="leading-relaxed">
          <span className="text-[#2C2C40]">
            Up to 50% off kids' collection including running and cricket shoes
          </span>
        </li>
        <li className="leading-relaxed">
          <span className="text-[#2C2C40]">
            Up to 60% off kids' running shoes specifically (no code required)
          </span>
        </li>
        <li className="leading-relaxed">
          <span className="text-[#2C2C40]">
            Up to 40% off bestsellers and last-chance styles
          </span>
        </li>
        <li className="leading-relaxed">
          <span className="text-[#2C2C40]">
            Flat 20% off sportstyle shoes (from ₹2,000)
          </span>
        </li>
        <li className="leading-relaxed">
          <span className="text-[#2C2C40]">
            Up to 30% off men's and women's new arrivals (from ₹399)
          </span>
        </li>
        <li className="leading-relaxed">
          <span className="text-[#2C2C40]">
            Up to 50% off accessories (from ₹399)
          </span>
        </li>
        <li className="leading-relaxed">
          <span className="text-[#2C2C40]">
            Flat 30% off selected apparel on orders above ₹6,999
          </span>
        </li>
      </ul>
    </div>

    <div className="pt-3.5 border-t border-[#E8E8F0]">
      <p className="text-xs font-extrabold text-[#1A1A2E] mb-2">
        Code-based offers:
      </p>
      <ul className="space-y-2.5 text-xs font-semibold text-[#4A4A6A] list-disc list-inside">
        <li className="leading-relaxed">
          <span className="text-[#2C2C40]">
            Flat 12% off for new users — minimum cart ₹5,999
          </span>
        </li>
        <li className="leading-relaxed">
          <span className="text-[#2C2C40]">
            Flat 10% off first order — capped at ₹1,000, valid till November 30, 2026
          </span>
        </li>
      </ul>
    </div>
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
          ASICS Coupon Code: Save on Running Shoes and Sportswear in India (November 2026)
        </h2>

        <div className="text-gray-600 font-normal leading-relaxed space-y-6">
          <p>
            An ASICS coupon code is a promo code entered at checkout on asics.com/in to reduce the price of running shoes, sportswear, or accessories. ASICS India&apos;s discount structure leans more on seasonal sales and category offers than on single-use codes — the site currently runs up to 60% off sitewide, up to 50% off bestselling running shoes with an extra 10% on top, flat 12% off for new users (minimum ₹5,999), and flat 10% off on a first order (valid till November 30, 2026). Free shipping applies on orders above ₹1,299.
          </p>

          <div>
            <div className="space-y-4 text-slate-700">
              <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                What ASICS Actually Sells in India — And Where the Value Is
              </h3>

              <p>
                ASICS (Asahi Kasei Shoes, founded in Japan in 1949) has been making running shoes since before most Indian fitness brands existed. The India catalogue covers performance running, casual sportstyle, kids&apos; footwear, cricket shoes, and training apparel — but running is where the brand has the clearest reason to exist.
              </p>

              <p>
                The entry point for ASICS running shoes in India starts around ₹2,249 for women&apos;s footwear and around ₹4,800 for performance running in the sale section. Premium flagship models like the GEL-Kayano 33 sit at ₹16,999, and the SuperBlast 3 (the brand&apos;s race-day super trainer) is higher. Kids&apos; shoes start around ₹1,799. Accessories and apparel (socks, caps, wristbands, hoodies) start from ₹179 and go up to around ₹6,999 for outerwear.
              </p>

              <p>
                What makes ASICS worth buying over cheaper alternatives is specific to the shoe. If you want a fashion sneaker or a gym shoe you&apos;ll wear twice a week, the premium isn&apos;t justified. If you&apos;re running more than 20km a week, the biomechanical engineering in the GEL cushioning system and the midsole construction starts to matter — both for comfort over distance and for reducing the cumulative load on your joints.
              </p>

              <hr className="my-6 border-slate-200" />

              <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                ASICS GEL Technology: What It Is and Why It Matters for Runners
              </h3>

              <p>
                GEL is what most people associate with ASICS, and for good reason — it&apos;s been the brand&apos;s defining technology since 1986 when it debuted in the original GT-II running shoe. Understanding what GEL does helps you decide which ASICS model is worth buying for your running style.
              </p>

              <p>
                GEL is a semi-fluid silicone compound placed at the heel and forefoot of the midsole. Its job is to absorb vertical impact — the force of your foot hitting the ground — and disperse that energy away from the joint rather than sending it straight up through the ankle and knee. For heel strikers in particular, rearfoot GEL reduces the sharp shock of landing. Forefoot GEL handles toe-off for runners with a midfoot or forefoot strike pattern.
              </p>

              <p>
                The practical difference between a GEL shoe and a standard foam shoe shows up around the 30–40 minute mark of a run. Foam alone can degrade over a session — GEL maintains its cushioning properties consistently. For short 20-minute sessions, the difference may be negligible. For long training runs at 90 minutes or more, the reduced cumulative joint load is real.
              </p>

              <p>
                ASICS pairs GEL with their foam technologies — FF BLAST, FF BLAST PLUS, FF BLAST MAX — depending on the model. These foams add bounce and propulsion, while GEL handles the impact absorption. The combination is what distinguishes performance-tier ASICS models from the brand&apos;s lower-priced, foam-only options.
              </p>

              <hr className="my-6 border-slate-200" />

              <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                The GEL-Kayano 33: ASICS&apos;s Flagship Stability Shoe in India (₹16,999)
              </h3>

              <p>
                The GEL-Kayano 33 is the latest version of ASICS&apos;s longest-running stability line, launched in India at ₹16,999. If you&apos;re a runner who tends to overpronate — where the foot rolls inward excessively during landing — the Kayano is built specifically to address that.
              </p>

              <p>
                The 33&apos;s headline update is FluidSupport technology, a reworked stability system that works with the natural motion of your foot rather than fighting it. Earlier Kayano versions used a harder medial post (a firmer foam section on the inner edge of the midsole) to resist overpronation. The 33 takes a different approach — the support is shaped to guide the foot through its landing and push-off arc more naturally, which reduces the rigid, corrective feel that some runners found uncomfortable in older stability shoes.
              </p>

              <p>
                Underneath that is a dual-layer midsole: FF BLAST MAX on top (lighter, more responsive) over FF BLAST PLUS (firmer, more structured), with PureGEL at the heel for impact absorption. The upper is redesigned engineered mesh — lighter and more breathable than the previous generation.
              </p>

              <p>
                Who should consider the GEL-Kayano 33: long-distance runners who need stability without sacrificing cushioning, runners with a history of knee or hip discomfort from overpronation, and anyone logging high weekly mileage who wants a training shoe they can wear day after day without fatigue.
              </p>

              <p>
                Who should look at a different model: neutral runners who don&apos;t overpronate (you&apos;d be buying stability features you don&apos;t need), and runners who prefer a firmer, faster-feeling shoe.
              </p>

              <hr className="my-6 border-slate-200" />

              <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                The SuperBlast 3: ASICS&apos;s Race-Day Super Trainer
              </h3>

              <p>
                The SuperBlast 3 was launched in India earlier in 2026, ahead of the TCS World 10K Bengaluru, as ASICS&apos;s highest-performance running shoe. It sits in a category called &quot;super trainers&quot; — shoes built to deliver race-day feel in training conditions.
              </p>

              <p>
                The defining technology is FF Leap foam, which ASICS describes as its lightest and most responsive cushioning yet. Combined with FF BLAST PLUS in a dual-layer construction, the shoe gives a bouncy, propulsive feel that doesn&apos;t sacrifice the plush cushioning longer runs require. A redesigned trampoline pod in the midsole improves energy return, particularly over the later kilometres when fatigue sets in.
              </p>

              <p>
                The SuperBlast 3 is not an everyday training shoe. It&apos;s aimed at runners who already have a foundation of weekly mileage and are looking to either race or simulate race conditions in training. If you&apos;re training for a 10K, half marathon, or full marathon and want to feel what race pace actually feels like in your legs before race day, this is the ASICS shoe for that purpose. For general fitness jogging or gym use, it&apos;s significantly overbuilt.
              </p>

              <hr className="my-6 border-slate-200" />

              <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                How to Pick the Right ASICS Shoe for Your Running Style
              </h3>

              <p>
                This is the question most people get wrong before they buy, and a wrong pick at ₹10,000+ is an expensive mistake.
              </p>

              <p>
                If you&apos;re a new runner or running under 25km a week: Start with the GEL-Excite or GEL-Contend range — these are ASICS&apos;s entry-level performance shoes, available in the sale section from around ₹2,000–₹4,800. They include rearfoot GEL and basic FlyteFoam construction without the premium of the flagship models.
              </p>

              <p>
                If you&apos;re a regular runner (25–60km a week) with no specific foot issues: The GEL-Cumulus range is built for neutral runners at this mileage. It&apos;s a step up from the entry models in cushioning and durability, sits in the mid-range price band, and handles a wide variety of paces and surfaces.
              </p>

              <p>
                If you overpronate: The GEL-Kayano or GT-2000 series. The Kayano is the premium stability option; the GT-2000 gives similar stability at a lower price point.
              </p>

              <p>
                If you want speed work or race-day performance: The SuperBlast 3 or MetaSpeed series. These are built for performance over comfort and are not designed for daily high-mileage training.
              </p>

              <p>
                If you&apos;re buying for a child: ASICS&apos;s kids&apos; range covers running and cricket, starting from ₹1,799. The same GEL cushioning principles apply — worth considering for children who run regularly rather than for occasional school use.
              </p>

              <hr className="my-6 border-slate-200" />

              <h3 className="text-xl font-black text-[#5B4FBE] mb-4">
                ASICS Promo Code Not Working? What to Check
              </h3>

              <p>
                The most common reason an ASICS discount code doesn&apos;t apply is a mismatch between the code&apos;s conditions and the cart.
              </p>

              <p>
                New-user codes on existing accounts. The flat 10% and flat 12% codes are for first-time buyers. If your email is already registered with an order history on asics.com/in, these will not activate regardless of how the code was advertised.
              </p>

              <p>
                Minimum cart not met. The flat 12% code requires a cart above ₹5,999. The flat 30% apparel offer requires above ₹6,999. If your subtotal is just under, adding a lower-cost accessory (socks from ₹179, a cap or wristband) can push you over the threshold.
              </p>

              <p>
                Sale price vs code combination. ASICS&apos;s platform typically applies one discount layer at a time. Items already reduced by 40–60% in the sitewide sale may not accept an additional percentage-off code on top. The new-user 10% flat code is the exception — it applies to the checkout total and is not always excluded from sale items.
              </p>

              <p>
                COD pin code availability. Cash on delivery isn&apos;t available in all locations. If your payment step shows no COD option, your area is excluded — use a card or UPI instead.
              </p>

              <p>
                Returns reminder. ASICS allows returns within 7 days of delivery, and the return service is free. Cancellations are not accepted once an order is confirmed, so verify your size before placing the order. If you&apos;re between ASICS sizes, most runners find that going half a size up works for longer runs where the foot swells.
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
                What is the best ASICS coupon code for India right now?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                As of November 2026, the most broadly useful code-based offer is flat 10% off for first-time buyers (valid till November 30, 2026). For larger first orders, flat 12% off applies on carts above ₹5,999. The sitewide sale (up to 60% off) and the bestseller extra 10% offer are automatic — no code needed. Check CouponsCrew for the latest active codes before checkout.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <h3 className="font-black text-black text-base">
                Is ASICS footwear available on Flipkart or Myntra?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yes, ASICS shoes are listed on both Flipkart and Myntra. However, official discounts and codes from asics.com/in are platform-specific — a code that works on the ASICS website will not apply on a third-party marketplace. Each platform runs its own promotions independently.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <h3 className="font-black text-black text-base">
                How long does ASICS India delivery take?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Standard delivery on asics.com/in takes 4–5 working days. Free shipping applies on orders above ₹1,299.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <h3 className="font-black text-black text-base">
                Can I return ASICS shoes if they don&apos;t fit?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yes. ASICS India accepts returns within 7 days of delivery, and return shipping is free. Cancellations are not accepted after an order is placed — returns must be initiated post-delivery.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-2">
              <h3 className="font-black text-black text-base">
                What is the difference between GEL-Kayano and GEL-Cumulus?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                GEL-Kayano is ASICS&apos;s stability shoe, designed for runners who overpronate. GEL-Cumulus is a neutral shoe for runners without significant pronation issues. Both use GEL cushioning and are built for high-mileage training, but the Kayano adds structured medial support (FluidSupport in the 33) that the Cumulus doesn&apos;t have. If you&apos;re unsure whether you overpronate, check your older running shoes — if the inner heel wears faster than the outer edge, overpronation is likely.
              </p>
            </div>

          </div>

          <hr className="my-10 border-gray-200" />

          <p>
            ASICS&apos;s pricing in India is on the premium side compared to domestic fitness brands, but the gap narrows significantly during the sale windows. At up to 60% off sitewide plus the new-user 10% code on a first purchase, flagship performance shoes become far more accessible. If you&apos;re buying your first pair of ASICS, combining the new-user code with a sale-priced GEL-Excite or GEL-Cumulus model gives you performance-tier cushioning at a price closer to what mid-range brands charge at full price.
          </p>

        </div>
      </div>

      {/* Sidebar Column */}
      <div className="space-y-10">
        <div className="bg-[#f0eeff] rounded-[40px] p-10 border border-[#5B4FBE]/5">
          <h3 className="text-black font-black text-lg mb-8 uppercase tracking-widest">
            Popular ASICS Searches
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {["ASICS Coupons", "Running Shoes Offers", "GEL-Kayano 33 Deals", "Sportswear Discounts", "SuperBlast 3 Sale", "First Order Offer", "CouponsCrew Home"].map(tag => (
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
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">Use the code <span className="font-extrabold text-[#5B4FBE]">{activeModalCoupon.code}</span> at Asics checkout for instant discounts.</p>
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
                <span>Continue to Asics</span>
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
