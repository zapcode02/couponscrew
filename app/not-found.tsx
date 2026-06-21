import Link from 'next/link'
import { Search, Home, Tag } from 'lucide-react'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans antialiased text-[#4A4A6A]">
      <Navbar />

      <main className="flex-1">
        <section className="relative overflow-hidden py-20 md:py-28 px-6">
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-[#E4E0FF] opacity-50 blur-3xl pointer-events-none"></div>
          <div className="absolute left-[-10%] bottom-[-10%] w-[35rem] h-[35rem] rounded-full bg-[#FFE5DA] opacity-40 blur-3xl pointer-events-none"></div>

          <div className="max-w-2xl mx-auto text-center relative z-10 space-y-6">
            <span className="inline-flex items-center gap-1.5 border border-[#5B4FBE] bg-white text-[#5B4FBE] text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase shadow-xs">
              <Tag className="w-3.5 h-3.5" />
              <span>ERROR 404</span>
            </span>

            <h1 className="font-black text-7xl sm:text-8xl md:text-9xl leading-none tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B4FBE] to-[#FF5722]">
                404
              </span>
            </h1>

            <h2 className="font-extrabold text-2xl sm:text-3xl text-[#1A1A2E] tracking-tight">
              This code expired before you got here.
            </h2>

            <p className="text-[#4A4A6A] text-base sm:text-lg leading-relaxed max-w-md mx-auto">
              The page you&apos;re looking for doesn&apos;t exist or has moved. Even our best coupon hunters couldn&apos;t track this one down.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <Link
                href="/"
                className="bg-[#5B4FBE] hover:bg-[#4a3fa8] text-white px-7 py-3.5 rounded-full font-bold flex items-center gap-2 transition-all shadow-md hover:shadow-lg active:scale-95 duration-200 cursor-pointer text-sm"
              >
                <Home className="w-4.5 h-4.5" />
                <span>Back to Home</span>
              </Link>
              <Link
                href="/stores"
                className="bg-white border border-[#E8E8F0] hover:border-[#5B4FBE] hover:text-[#5B4FBE] text-[#1A1A2E] px-7 py-3.5 rounded-full font-bold flex items-center gap-2 transition-all shadow-xs active:scale-95 duration-200 cursor-pointer text-sm"
              >
                <Search className="w-4.5 h-4.5" />
                <span>Browse Stores</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
