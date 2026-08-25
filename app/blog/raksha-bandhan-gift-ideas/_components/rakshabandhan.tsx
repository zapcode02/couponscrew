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
  Gift,
  Heart,
  Sparkles,
} from 'lucide-react'
import Navbar from '../../../../src/components/Navbar'
import Footer from '../../../../src/components/Footer'

const faqs = [
  {
    q: 'What are the best Raksha Bandhan gift ideas for sisters in 2026?',
    a: 'Top trends include personalized jewelry, skincare sets, smartwatches, luxury handbags, and customized gift hampers. Stacking store coupons with active bank card discounts ensures you get the best deal.',
  },
  {
    q: 'What are unique Rakhi gift ideas for brothers?',
    a: 'Popular gifts for brothers include wireless earbuds, premium grooming kits, personalized wallets, smart wearables, and tech accessories.',
  },
  {
    q: 'How can I save money on Raksha Bandhan online shopping in India?',
    a: 'Combine early festive sale discounts on Amazon, Flipkart, or Myntra with verified coupon codes from CouponsCrew. Apply instant bank card discounts (such as HDFC, ICICI, or SBI) at checkout for maximum savings.',
  },
  {
    q: 'When should I order Rakhi gifts online to ensure timely delivery?',
    a: 'Order at least 5 to 7 days before Raksha Bandhan to avoid last-minute shipping delays and price surges during peak festive delivery windows.',
  },
  {
    q: 'Can I send Rakhi gifts directly to another city in India with discounts?',
    a: 'Yes, most major platforms like Amazon, Flipkart, Ferns N Petals, and IGP allow direct delivery to recipient addresses while letting you apply promotional codes and card offers during payment.',
  },
]

export default function RakshaBandhan() {
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
            <span className="text-[#1A1A2E] font-medium truncate">Raksha Bandhan Gift Ideas</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* MAIN CONTENT */}
            <article className="lg:col-span-8">
              <span className="inline-block bg-[#F0EEFF] text-[#5B4FBE] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                Festive Guides
              </span>

              <div className="flex items-center gap-4 text-xs text-gray-400 font-medium mt-3 flex-wrap">
                <div className="flex items-center gap-1.5">
                  <Clock size={13} />
                  <span>8 min read</span>
                </div>
                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                <div className="flex items-center gap-1.5">
                  <Calendar size={13} />
                  <span>Aug 24, 2026</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A2E] leading-tight mt-4">
              10 Best Raksha Bandhan Gift Ideas 2026 — Discount Codes to Save More
              </h1>

              <p className="text-xs text-gray-400 font-medium mt-3">
              Published by CouponsCrew | Festive Deals & Gift Guides
              </p>

              <div className="relative w-full sm:h-130 rounded-3xl overflow-hidden mt-6 shadow-lg">
                <NextImage
                  src="https://res.cloudinary.com/dqjlffxja/image/upload/v1787588384/raksha-bandhan-gift-ideas_z16zzz.webp"
                  alt="Best Raksha Bandhan Gift Ideas — CouponsCrew"
                  fill
                  priority
                  referrerPolicy="no-referrer"
                  className="object-cover"
                />
              </div>

              <div className="prose-content max-w-4xl mx-auto mt-10 space-y-6 text-[#1A1A2E] text-[15px] leading-relaxed">


  {/* Intro Section */}
  <p>
    Raksha Bandhan is one of those festivals that genuinely makes you pause and think. Not about what you have to do — but about what you actually want to say to your sibling. That "I've got your back, always" feeling that no greeting card ever quite captures. And yet, year after year, the panic sets in around two weeks before the date: What do I even get them this time?
  </p>

  <p>
    If that sounds familiar, you're not alone. Whether you're shopping for a sister who has expensive taste or a brother who claims he "doesn't need anything" (he's lying), this guide has you covered. We've put together 10 genuinely thoughtful gift ideas for Raksha Bandhan 2026 — and paired each one with the best places to shop, so you can save money while you're at it.
  </p>

  <p className="font-bold text-[#1A1A2E]">
    Let's get into it.
  </p>

  {/* Cards List */}
  <div className="space-y-6 pt-2">
    
    {/* Item 1 */}
    <div className="bg-white border border-[#E8E8F0] rounded-2xl p-6 shadow-sm space-y-3">
      <h2 className="text-lg font-bold text-[#1A1A2E]">
        1. Personalised Jewellery — For the Sister Who Deserves to Shine
      </h2>
      <p className="text-[#4A4A6A] leading-relaxed">
        There's something about a piece of jewellery with her name or initials on it that hits differently. It's not just a gift; it's a reminder that you were thinking specifically about her. Name necklaces, birth month rings, charm bracelets — these never go out of style.
      </p>
      <p className="text-[#4A4A6A] leading-relaxed">
        Myntra has a solid range of personalised and fashion jewellery across budgets. Use a{' '}
        <a 
          href="https://www.couponscrew.com/stores/myntra-coupon-code" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#5B4FBE] font-bold hover:underline"
        >
          Myntra coupon code
        </a>{' '}
        before checkout and you'll often knock off a decent percentage on top of any sale pricing already running.
      </p>
    </div>

    {/* Item 2 */}
    <div className="bg-white border border-[#E8E8F0] rounded-2xl p-6 shadow-sm space-y-3">
      <h2 className="text-lg font-bold text-[#1A1A2E]">
        2. Skincare & Beauty Sets — A Thoughtful Hamper She'll Actually Use
      </h2>
      <p className="text-[#4A4A6A] leading-relaxed">
        A well-curated skincare set feels luxurious without being impractical. Think sheet masks, serums, SPF moisturisers — the stuff she might not splurge on herself but absolutely loves when someone else gifts it.
      </p>
      <p className="text-[#4A4A6A] leading-relaxed">
        Nykaa is the go-to for this. Their gifting section around Raksha Bandhan is genuinely well-stocked — beauty combos, skincare kits, and hampers that look like you put in serious effort (even if ordering took you 10 minutes). Grab a{' '}
        <a 
          href="https://www.couponscrew.com/stores/nykaa-coupon-code" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#5B4FBE] font-bold hover:underline"
        >
          Nykaa coupon code
        </a>{' '}
        from CouponsCrew to save on your order.
      </p>
    </div>

    {/* Item 3 */}
    <div className="bg-white border border-[#E8E8F0] rounded-2xl p-6 shadow-sm space-y-3">
      <h2 className="text-lg font-bold text-[#1A1A2E]">
        3. Trendy Ethnic Wear — For the Occasion and Beyond
      </h2>
      <p className="text-[#4A4A6A] leading-relaxed">
        Raksha Bandhan often involves a family get-together, a puja, or at minimum a nice home-cooked meal. Gifting ethnic wear — a kurta set, a saree, or even a co-ord set with a festive feel — is always a hit because it's something she can wear the same day and keep wearing after.
      </p>
      <p className="text-[#4A4A6A] leading-relaxed">
        AJIO is fantastic for ethnic and fusion fashion at genuinely competitive prices. Their Raksha Bandhan collection typically includes both traditional and contemporary options. An{' '}
        <a 
          href="https://www.couponscrew.com/stores/ajio-coupon-code" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#5B4FBE] font-bold hover:underline"
        >
          AJIO coupon code
        </a>{' '}
        at checkout makes it even easier on the wallet.
      </p>
    </div>

    {/* Item 4 */}
    <div className="bg-white border border-[#E8E8F0] rounded-2xl p-6 shadow-sm space-y-3">
      <h2 className="text-lg font-bold text-[#1A1A2E]">
        4. Premium Rakhi + Gift Combo — Sorted in One Go
      </h2>
      <p className="text-[#4A4A6A] leading-relaxed">
        Sometimes you want one clean, complete package — a beautiful rakhi paired with sweets, dry fruits, or a small keepsake. It saves time, looks polished, and feels intentional.
      </p>
      <p className="text-[#4A4A6A] leading-relaxed">
        Amazon has hundreds of curated Raksha Bandhan combo sets available for delivery across India, including same-day and next-day options in most cities. If you're cutting it close on time, this is your safest bet. Use an{' '}
        <a 
          href="https://www.couponscrew.com/stores/amazon-coupon-code" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#5B4FBE] font-bold hover:underline"
        >
          Amazon coupon code
        </a>{' '}
        to save on your order.
      </p>
    </div>

    {/* Item 5 */}
    <div className="bg-white border border-[#E8E8F0] rounded-2xl p-6 shadow-sm space-y-3">
      <h2 className="text-lg font-bold text-[#1A1A2E]">
        5. Books — For the Sibling Who's Always "In the Middle of Something"
      </h2>
      <p className="text-[#4A4A6A] leading-relaxed">
        Books are underrated as Raksha Bandhan gifts. If your sibling is a reader, this is actually a deeply personal choice — you're saying "I know what you love." A bestselling fiction title, a coffee table photography book, or a self-help book they've been talking about for months.
      </p>
      <p className="text-[#4A4A6A] leading-relaxed">
        Amazon remains the most reliable place for books in India — wide selection, fast delivery, and frequent deals on bestsellers. Check CouponsCrew for the latest{' '}
        <a 
          href="https://www.couponscrew.com/stores/amazon-coupon-code" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#5B4FBE] font-bold hover:underline"
        >
          Amazon coupon codes
        </a>{' '}
        before you order.
      </p>
    </div>

    {/* Item 6 */}
    <div className="bg-white border border-[#E8E8F0] rounded-2xl p-6 shadow-sm space-y-3">
      <h2 className="text-lg font-bold text-[#1A1A2E]">
        6. Fitness Gear or Supplements — For the Health-Conscious Brother
      </h2>
      <p className="text-[#4A4A6A] leading-relaxed">
        If your brother is gym-obsessed, into running, or has been talking about "eating clean" since January, lean into it. Protein supplements, resistance bands, a quality shaker bottle, or even a fitness tracker — these are gifts he'll actually use and appreciate.
      </p>
      <p className="text-[#4A4A6A] leading-relaxed">
        Flipkart stocks a strong range of fitness accessories and sports equipment, often at better prices than standalone brand websites. Look out for their festive deals running around Raksha Bandhan and stack a{' '}
        <a 
          href="https://www.couponscrew.com/stores/flipkart-coupon-code" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#5B4FBE] font-bold hover:underline"
        >
          Flipkart coupon code
        </a>{' '}
        for extra savings.
      </p>
    </div>

    {/* Item 7 */}
    <div className="bg-white border border-[#E8E8F0] rounded-2xl p-6 shadow-sm space-y-3">
      <h2 className="text-lg font-bold text-[#1A1A2E]">
        7. Home Décor & Kitchen Finds — For the Sibling Who Just Moved In
      </h2>
      <p className="text-[#4A4A6A] leading-relaxed">
        If your sister or brother recently moved into a new place — or has been redecorating — home gifts are incredibly well-received. Think aesthetic storage solutions, a nice scented candle set, a sleek coffee mug, or small wall art.
      </p>
      <p className="text-[#4A4A6A] leading-relaxed">
        JioMart has expanded its home and kitchen category significantly and often runs strong festive offers with fast delivery. A{' '}
        <a 
          href="https://www.couponscrew.com/stores/jiomart-coupon-code" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#5B4FBE] font-bold hover:underline"
        >
          JioMart coupon code
        </a>{' '}
        can bring the total down further on home essentials and lifestyle products.
      </p>
    </div>

    {/* Item 8 */}
    <div className="bg-white border border-[#E8E8F0] rounded-2xl p-6 shadow-sm space-y-3">
      <h2 className="text-lg font-bold text-[#1A1A2E]">
        8. Fashion Accessories — Bags, Sunglasses, Watches
      </h2>
      <p className="text-[#4A4A6A] leading-relaxed">
        Accessories are a smart gift choice because they work for most ages, styles, and occasions. A structured tote bag for a working sister, a sleek watch for a brother starting his career, or a pair of good sunglasses that actually suits their face — these feel personal without requiring you to know their exact size.
      </p>
      <p className="text-[#4A4A6A] leading-relaxed">
        <a 
          href="https://www.couponscrew.com/stores/myntra-coupon-code" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#5B4FBE] font-bold hover:underline"
        >
          Myntra
        </a>{' '}
        and{' '}
        <a 
          href="https://www.couponscrew.com/stores/ajio-coupon-code" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#5B4FBE] font-bold hover:underline"
        >
          AJIO
        </a>{' '}
        both carry strong accessories ranges across brands and price points. Check both before deciding — their pricing on the same brands often differs, and coupon codes on either platform can tip the value further in your favour.
      </p>
    </div>

    {/* Item 9 */}
    <div className="bg-white border border-[#E8E8F0] rounded-2xl p-6 shadow-sm space-y-3">
      <h2 className="text-lg font-bold text-[#1A1A2E]">
        9. Groceries & Gourmet Food Hampers — Sweet and Practical
      </h2>
      <p className="text-[#4A4A6A] leading-relaxed">
        This one works especially well if your sibling lives away from home or has a family of their own. A premium dry fruit box, an artisanal chocolate hamper, or a quality tea and snack assortment feels festive, is always useful, and requires zero guesswork about preferences.
      </p>
      <p className="text-[#4A4A6A] leading-relaxed">
        <a 
          href="https://www.couponscrew.com/stores/jiomart-coupon-code" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#5B4FBE] font-bold hover:underline"
        >
          JioMart
        </a>{' '}
        is a solid choice here for both grocery staples and gourmet gifting options.{' '}
        <a 
          href="https://www.couponscrew.com/stores/amazon-coupon-code" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#5B4FBE] font-bold hover:underline"
        >
          Amazon
        </a>{' '}
        also carries curated food hampers that ship quickly. Either way, grab a coupon code from CouponsCrew before you order.
      </p>
    </div>

    {/* Item 10 */}
    <div className="bg-white border border-[#E8E8F0] rounded-2xl p-6 shadow-sm space-y-3">
      <h2 className="text-lg font-bold text-[#1A1A2E]">
        10. Beauty Appliances — For the Sister Who Loves Getting Ready
      </h2>
      <p className="text-[#4A4A6A] leading-relaxed">
        A quality hair dryer, a straightener, a facial steamer, or a LED face mask — these are the kinds of gifts that feel indulgent but have everyday use. If your sister is into beauty routines or has mentioned wanting one of these, Raksha Bandhan is the perfect excuse.
      </p>
      <p className="text-[#4A4A6A] leading-relaxed">
        <a 
          href="https://www.couponscrew.com/stores/nykaa-coupon-code" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#5B4FBE] font-bold hover:underline"
        >
          Nykaa
        </a>{' '}
        stocks a well-curated range of beauty devices across brands and budgets.{' '}
        <a 
          href="https://www.couponscrew.com/stores/flipkart-coupon-code" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#5B4FBE] font-bold hover:underline"
        >
          Flipkart
        </a>{' '}
        is also worth comparing for electronics and appliances, especially during festive sale windows. Use coupon codes from CouponsCrew on either to keep more money in your pocket.
      </p>
    </div>

  </div>

  {/* Checklist Box */}
  <div className="bg-[#F0EEFF] border border-[#E4E0FF] rounded-2xl p-6 my-8 space-y-3">
    <h2 className="text-lg font-bold text-[#1A1A2E]">
      A Few Quick Tips Before You Shop
    </h2>
    <ul className="space-y-2 text-sm text-[#4A4A6A]">
      <li className="flex items-start gap-2">
        <span className="text-[#5B4FBE] font-bold">•</span>
        <span><strong>Order early.</strong> Delivery timelines can stretch during festive weeks. If Raksha Bandhan falls on a weekend, logistics slow down across the board. Give yourself at least 5–7 days buffer.</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-[#5B4FBE] font-bold">•</span>
        <span><strong>Check both the app and website.</strong> Many platforms — especially Myntra, Nykaa, and AJIO — run app-exclusive deals that don't show up on desktop.</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-[#5B4FBE] font-bold">•</span>
        <span><strong>Always check CouponsCrew first.</strong> Before you hit "Place Order" on any platform, visit the store page on CouponsCrew. Even a 5–10% off coupon code on a ₹2,000 order saves you a quick ₹100–200 for zero effort.</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-[#5B4FBE] font-bold">•</span>
        <span><strong>Don't overthink the budget.</strong> The gesture matters more than the price tag. A ₹500 book from a sibling who remembered your favourite author means more than a ₹5,000 gift that clearly came from panic-scrolling.</span>
      </li>
    </ul>
  </div>

  {/* Final Thought Section */}
  <div className="space-y-4 pt-2 border-t border-gray-200">
    <h2 className="text-xl font-extrabold text-[#1A1A2E]">
      Final Thought
    </h2>
    <p>
      Raksha Bandhan 2026 is a chance to be deliberate — to shop with intention instead of convenience. You don't need to spend a fortune. You just need to think about them for five minutes before you add something to your cart.
    </p>
    <p>
      The stores listed above — Amazon, Myntra, Flipkart, Nykaa, AJIO, and JioMart — cover everything you'd need across categories, budgets, and delivery timelines.
    </p>
    <p>
      And before you checkout anywhere, swing by CouponsCrew for the latest coupon codes. Because saving money on a gift you've already put thought into? That's just smart shopping.
    </p>
    <p className="font-bold text-[#1A1A2E] pt-1">
      Happy Raksha Bandhan. 🎀
    </p>
  </div>
</div>

         

             
            </article>

            {/* SIDEBAR */}
            <aside className="lg:col-span-4 space-y-5">
              <div className="bg-white rounded-2xl border border-[#E8E8F0] p-6 shadow-xs sticky top-24">
                <h3 className="text-sm font-bold text-[#1A1A2E] uppercase tracking-wide mb-4">Rakhi Savings Guarantee</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <ShieldCheck size={18} className="text-[#5B4FBE] shrink-0 mt-0.5" />
                    <span>Manually verified promo codes for top festive stores.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Tag size={18} className="text-[#5B4FBE] shrink-0 mt-0.5" />
                    <span>Stackable discounts across 500+ Indian platforms.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Gift size={18} className="text-[#5B4FBE] shrink-0 mt-0.5" />
                    <span>Exclusive festive offers updated daily.</span>
                  </li>
                </ul>
                <Link
                  href="/stores"
                  className="mt-5 w-full bg-[#5B4FBE] hover:bg-[#4a3fa8] text-white text-sm font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Explore All Stores</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="bg-gradient-to-br from-[#5B4FBE] to-[#7C3AED] rounded-2xl p-6 text-white shadow-sm">
                <h3 className="font-bold text-base flex items-center gap-2">
                  <Heart size={18} /> Festive Rakhi Deals
                </h3>
                <p className="text-white/70 text-xs mt-1.5 leading-relaxed">
                  Browse today's verified gift vouchers and festive promo codes.
                </p>
                <Link
                  href="/deals-of-the-day"
                  className="mt-4 w-full bg-white text-[#5B4FBE] text-sm font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-white/90 transition-colors"
                >
                  <span>🎁 View Today's Rakhi Deals</span>
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