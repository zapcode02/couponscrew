const fs = require('fs');
const path = require('path');

const offers = [
  {
    name: 'Halloween Offers',
    slug: 'halloween-offers',
    componentName: 'HalloweenOffers',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1790123058/halloween-offers_rol0om.webp'
  },
  {
    name: 'Veterans Day Offers',
    slug: 'veterans-day-offers',
    componentName: 'VeteransDayOffers',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1790123058/veterans_day_offers_twrsmv.webp'
  },
  {
    name: 'Thanksgiving Offers',
    slug: 'thanksgiving-offers',
    componentName: 'ThanksgivingOffers',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1790123058/thanks_giving_offers_zjdfx8.webp'
  },
  {
    name: 'Super Saturday Offers',
    slug: 'super-saturday-offers',
    componentName: 'SuperSaturdayOffers',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1790123058/super_saturday_offers_uarn6x.webp'
  },
  {
    name: 'Childrens Day Offers',
    slug: 'childrens-day-offers',
    componentName: 'ChildrensDayOffers',
    image: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1790123058/children_day_offer_mcxjne.webp'
  }
];

const basePath = path.join(__dirname, 'app', 'festival-offers');

offers.forEach(offer => {
  const dirPath = path.join(basePath, offer.slug);
  const componentsPath = path.join(dirPath, '_components');
  
  if (!fs.existsSync(componentsPath)) {
    fs.mkdirSync(componentsPath, { recursive: true });
  }

  const pageContent = `import type { Metadata } from 'next'
import ${offer.componentName} from './_components/${offer.componentName}'

export const metadata: Metadata = {
  title: '${offer.name} 2026 — CouponsCrew',
  description: 'Save big this ${offer.name} 2026 with verified coupon codes.',
}

export default function ${offer.componentName}Page() {
  return (
    <>
      <${offer.componentName} />
    </>
  )
}
`;

  const componentContent = `'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '../../../../src/components/Navbar';
import Footer from '../../../../src/components/Footer';

export default function ${offer.componentName}() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#4A4A6A] font-sans antialiased">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        <section className="w-full pt-6 pb-12">
          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-[#E8E8F0] shadow-sm flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                  <h1 className="text-3xl font-black text-[#1A1A2E] tracking-tight">${offer.name} 2026 — Best Deals!</h1>
                  <p className="text-sm md:text-base leading-relaxed text-[#4A4A6A]">
                    Enjoy amazing savings on ${offer.name}.
                  </p>
                </div>
              </div>
              <div className="hidden lg:flex lg:col-span-5 relative overflow-hidden rounded-3xl shadow-sm min-h-[300px] flex-col items-center justify-center text-white p-8 text-center gap-5">
                <img
                  src="${offer.image}"
                  alt="${offer.name}"
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="top-offers" className="space-y-4 max-w-4xl mx-auto">
          <h2 className="text-lg font-extrabold text-gray-900 leading-tight">Top ${offer.name} Offers</h2>
          <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-all relative p-6">
            <h3 className="font-extrabold text-lg text-gray-900 leading-snug">Awesome Deal for ${offer.name} - Up to 50% OFF</h3>
            <p className="text-xs text-gray-500 mt-1">Don't miss out on these fantastic discounts!</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
`;

  fs.writeFileSync(path.join(dirPath, 'page.tsx'), pageContent);
  fs.writeFileSync(path.join(componentsPath, offer.componentName + '.tsx'), componentContent);
});

console.log('Successfully created all festival offer pages.');
