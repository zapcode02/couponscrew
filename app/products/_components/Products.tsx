'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import NextImage from 'next/image';
import {
  ChevronRight,
  ChevronLeft,
  Package,
  Store,
  Tag,
  ShieldCheck,
  Search,
  LayoutGrid,
  List,
  Star,
  Truck,
  Zap,
  Heart,
  X,
  Check,
  Filter,
  RefreshCw,
  Lock,
  ArrowRight,
  TrendingUp, 
  HelpCircle, 
  CheckCircle,
  Clock,
  Shirt,
  Sparkles, 
  Home,
  Activity,
  Sliders,
  Percent
} from 'lucide-react';
import Navbar from '../../../src/components/Navbar';
import Footer from '../../../src/components/Footer';

// ============================================================================
// TYPESCRIPT INTERFACES
// ============================================================================
export interface Product {
  id: string;
  name: string;
  brand: string;
  brandColor: string;
  category: string;
  image: string; // Unsplash URL
  originalPrice: number;
  dealPrice: number;
  discountPercent: number;
  rating: number;
  reviewCount: string;
  hasFreeDelivery: boolean;
  isWishlisted: boolean;
  isFeatured: boolean;
  dealType: 'deal' | 'code';
  code: string;
}

export interface FilterState {
  selectedCategory: string;
  priceRange: number; // max value
  selectedDiscounts: number[];
  selectedBrands: string[];
  searchQuery: string;
  sortBy: string;
  viewMode: 'grid' | 'list';
  currentPage: number;
}

// ============================================================================
// HARDCODED PRODUCTS COLLECTION (40 ITEMS ENTIRELY WRITTEN)
// ============================================================================
const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-41',
    name: "Acnos Premium Girl's Heart Shape Bangle Analog Watch, Pack of 2",
    brand: 'Acnos',
    brandColor: '#5B4FBE',
    category: 'Watches & Accessories',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80',
    originalPrice: 1999,
    dealPrice: 299,
    discountPercent: 85,
    rating: 4.0,
    reviewCount: '2.3K',
    hasFreeDelivery: true,
    isWishlisted: false,
    isFeatured: false,
    dealType: 'code',
    code: 'SAVE50'
  },
  {
    id: 'prod-42',
    name: 'Minimalist Anti-Pigmentation Kit, Face Wash, Serum & Sunscreen Combo',
    brand: 'Minimalist',
    brandColor: '#5B4FBE',
    category: 'Beauty & Personal Care',
    image: 'https://images.unsplash.com/photo-1556228720-da4e95ac3699?w=400&q=80',
    originalPrice: 1299,
    dealPrice: 1147,
    discountPercent: 12,
    rating: 4.1,
    reviewCount: '306',
    hasFreeDelivery: true,
    isWishlisted: false,
    isFeatured: false,
    dealType: 'code',
    code: 'SAVE50'
  },
  {
    id: 'prod-43',
    name: "DEELMO Men's Cotton Blend Mandarin Collar Casual Short Kurta",
    brand: 'DEELMO',
    brandColor: '#5B4FBE',
    category: 'Fashion & Clothing',
    image: 'https://images.unsplash.com/photo-1622445275576-721325763afe?w=400&q=80',
    originalPrice: 2199,
    dealPrice: 479,
    discountPercent: 78,
    rating: 3.6,
    reviewCount: '2.3K',
    hasFreeDelivery: true,
    isWishlisted: false,
    isFeatured: false,
    dealType: 'code',
    code: 'SAVE50'
  },
  {
    id: 'prod-44',
    name: 'Desidiya Moon Crystal Ball Night Light with Wooden Base',
    brand: 'Desidiya',
    brandColor: '#5B4FBE',
    category: 'Home & Kitchen',
    image: 'https://images.unsplash.com/photo-1532634896-26909d0d4b6a?w=400&q=80',
    originalPrice: 1999,
    dealPrice: 197,
    discountPercent: 90,
    rating: 4.0,
    reviewCount: '5.5K',
    hasFreeDelivery: true,
    isWishlisted: false,
    isFeatured: false,
    dealType: 'code',
    code: 'SAVE45'
  },
  {
    id: 'prod-45',
    name: 'PulGos 15-in-1 Foldable Pushup Board for Home Workout',
    brand: 'PulGos',
    brandColor: '#5B4FBE',
    category: 'Sports & Fitness',
    image: 'https://images.unsplash.com/photo-1571388208497-71bedc66e932?w=400&q=80',
    originalPrice: 499,
    dealPrice: 299,
    discountPercent: 40,
    rating: 3.8,
    reviewCount: '1K',
    hasFreeDelivery: false,
    isWishlisted: false,
    isFeatured: false,
    dealType: 'code',
    code: 'SAVE40'
  }
];

// ============================================================================
// METADATA DEFINITIONS
// ============================================================================
interface CategoryItem {
  name: string;
  count: string;
}

const SIDEBAR_CATEGORIES: CategoryItem[] = [
  { name: 'All Products', count: '5' },
  { name: 'Watches & Accessories', count: '1' },
  { name: 'Beauty & Personal Care', count: '1' },
  { name: 'Fashion & Clothing', count: '1' },
  { name: 'Home & Kitchen', count: '1' },
  { name: 'Sports & Fitness', count: '1' }
];

interface BrandItem {
  name: string;
  count: string;
}

const SIDEBAR_BRANDS: BrandItem[] = [
  { name: 'Acnos', count: '1' },
  { name: 'Minimalist', count: '1' },
  { name: 'DEELMO', count: '1' },
  { name: 'Desidiya', count: '1' },
  { name: 'PulGos', count: '1' }
];

const DISCOUNT_TIERS = [
  { label: '10% and above', value: 10, count: '4,523' },
  { label: '20% and above', value: 20, count: '3,452' },
  { label: '30% and above', value: 30, count: '2,345' },
  { label: '40% and above', value: 40, count: '1,234' },
  { label: '50% and above', value: 50, count: '876' }
];

export default function Products() {
  const router = useRouter();
  // Global product list state to persist wishlisted items in memory
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');
  const [priceRange, setPriceRange] = useState<number>(50000);
  const [selectedDiscounts, setSelectedDiscounts] = useState<number[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [brandSearch, setBrandSearch] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('Popularity');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // UI States
  const [categoriesExpanded, setCategoriesExpanded] = useState<boolean>(false);
  const [brandsExpanded, setBrandsExpanded] = useState<boolean>(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);

  // Dynamic filter lists calculation
  const displayedCategories = useMemo(() => {
    return categoriesExpanded ? SIDEBAR_CATEGORIES : SIDEBAR_CATEGORIES.slice(0, 8);
  }, [categoriesExpanded]);

  const filteredBrandsList = useMemo(() => {
    let result = SIDEBAR_BRANDS;
    if (brandSearch.trim() !== '') {
      const q = brandSearch.toLowerCase();
      result = result.filter((b) => b.name.toLowerCase().includes(q));
    }
    return brandsExpanded ? result : result.slice(0, 5);
  }, [brandSearch, brandsExpanded]);

  // Wishlist heart switcher
  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isWishlisted: !p.isWishlisted } : p))
    );
  };

  // Helper trigger activation popup modal
  const handleGetDeal = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (product.id === 'prod-41' || product.name.toLowerCase().includes('heart shape bangle')) {
      router.push('/products/acnos-bangle-watch-pack-of-2');
      return;
    }
    if (product.id === 'prod-42' || product.name.toLowerCase().includes('anti-pigmentation')) {
      router.push('/products/minimalist-anti-pigmentation-kit');
      return;
    }
    if (product.id === 'prod-43' || product.name.toLowerCase().includes('mandarin collar')) {
      router.push('/products/deelmo-mens-mandarin-collar-kurta');
      return;
    }
    if (product.id === 'prod-44' || product.name.toLowerCase().includes('moon crystal ball')) {
      router.push('/products/desidiya-moon-crystal-night-light');
      return;
    }
    if (product.id === 'prod-45' || product.name.toLowerCase().includes('pushup board')) {
      router.push('/products/pulgos-15-in-1-pushup-board');
      return;
    }
  };

  // Check if any filter is active so we conditional render the Clear Filters button
  const isAnyFilterActive = useMemo(() => {
    return (
      selectedCategory !== 'All Products' ||
      priceRange !== 50000 ||
      selectedDiscounts.length > 0 ||
      selectedBrands.length > 0 ||
      searchQuery !== ''
    );
  }, [selectedCategory, priceRange, selectedDiscounts, selectedBrands, searchQuery]);

  const resetAllFilters = () => {
    setSelectedCategory('All Products');
    setPriceRange(50000);
    setSelectedDiscounts([]);
    setSelectedBrands([]);
    setSearchQuery('');
    setBrandSearch('');
    setCurrentPage(1);
    setIsMobileSidebarOpen(false);
  };

  // Multiple selection checklist togglers
  const toggleDiscountSelection = (percent: number) => {
    setSelectedDiscounts((prev) => {
      if (prev.includes(percent)) {
        return prev.filter((p) => p !== percent);
      } else {
        return [...prev, percent];
      }
    });
    setCurrentPage(1);
  };

  const toggleBrandSelection = (brandName: string) => {
    setSelectedBrands((prev) => {
      if (prev.includes(brandName)) {
        return prev.filter((b) => b !== brandName);
      } else {
        return [...prev, brandName];
      }
    });
    setCurrentPage(1);
  };

  // Auto-reset currentpage if global search or selected Category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, priceRange, selectedDiscounts, selectedBrands, sortBy]);

  // ============================================================================
  // COMPREHENSIVE FILTER & SORTING STREAM PIPELINE
  // ============================================================================
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // 1. Text Search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    // 2. Category Filter
    if (selectedCategory !== 'All Products') {
      result = result.filter(
        (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // 3. Price Filter
    result = result.filter((p) => p.dealPrice <= priceRange);

    // 4. Discount Filter (checked if it meets ANY selected minimum rate)
    if (selectedDiscounts.length > 0) {
      result = result.filter((p) =>
        selectedDiscounts.some((minD) => p.discountPercent >= minD)
      );
    }

    // 5. Brand Filter
    if (selectedBrands.length > 0) {
      result = result.filter((p) => selectedBrands.includes(p.brand));
    }

    // 6. Sorting Block
    if (sortBy === 'Popularity') {
      // Featured first
      result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    } else if (sortBy === 'Newest First') {
      // Simple reverse order for prototype freshness logic
      result.reverse();
    } else if (sortBy === 'Price: Low to High') {
      result.sort((a, b) => a.dealPrice - b.dealPrice);
    } else if (sortBy === 'Price: High to Low') {
      result.sort((a, b) => b.dealPrice - a.dealPrice);
    } else if (sortBy === 'Highest Discount') {
      result.sort((a, b) => b.discountPercent - a.discountPercent);
    } else if (sortBy === 'Best Rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [products, selectedCategory, priceRange, selectedDiscounts, selectedBrands, searchQuery, sortBy]);

  // Pagination calculations: 20 per page
  const itemsPerPage = 20;
  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage) || 1;
  
  const paginatedProducts = useMemo(() => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedProducts.slice(startIdx, startIdx + itemsPerPage);
  }, [filteredAndSortedProducts, currentPage]);

  // Page Numbers Array Builder
  const pageNumbers = useMemo(() => {
    const list: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) list.push(i);
    } else {
      if (currentPage <= 3) {
        list.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        list.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        list.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return list;
  }, [currentPage, totalPages]);

  return (
    <div className="min-h-screen bg-[#F8F8FF] flex flex-col font-sans antialiased text-[#4A4A6A]">
      <Navbar />

      {/* ============================================================================
          SECTION 1  -  HERO BANNER
          ============================================================================ */}
      <section className="relative w-full bg-[#F0EEFF] overflow-hidden py-5 px-6">
        {/* Subtle scattered purple and orange CSS diamonds */}
        <span className="absolute top-10 left-[15%] text-[#5B4FBE]/30 text-xl pointer-events-none select-none">◆</span>
        <span className="absolute bottom-12 left-[35%] text-[#FF5722]/30 text-base pointer-events-none select-none">◆</span>
        <span className="absolute top-8 right-[30%] text-[#22C55E]/20 text-lg pointer-events-none select-none">◆</span>
        <span className="absolute bottom-16 right-[10%] text-[#5B4FBE]/40 text-2xl pointer-events-none select-none">◆</span>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Column (50%) */}
          <div className="md:col-span-6 flex flex-col items-start space-y-4">
            
            {/* Breadcrumbs */}
            <div className="inline-flex items-center gap-1.5 text-sm text-[#4A4A6A]">
              <Link href="/" className="hover:text-[#5B4FBE] transition-colors font-medium">Home</Link>
              <ChevronRight size={14} className="text-gray-400" />
              <span className="text-[#5B4FBE] font-semibold">Products</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A2E] tracking-tight leading-tight select-none">
              All Products
            </h1>

            <p className="text-[#4A4A6A] text-sm md:text-base leading-relaxed max-w-md">
              5 hand-picked products. 5 trusted brands. Every one already on deal — verified before it lists.
            </p>

            {/* 4 Stat Mini Cards Row */}
            <div className="pt-4 grid grid-cols-2 lg:grid-cols-4 gap-3 w-full">
              <div id="stat-products-count" className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3.5 shadow-xs">
                <div className="bg-[#F0EEFF] p-2.5 rounded-xl text-[#5B4FBE] shrink-0">
                  <Package className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="font-extrabold text-[#1A1A2E] text-base leading-tight truncate">5</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">Products</div>
                </div>
              </div>

              <div id="stat-brands-count" className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3.5 shadow-xs">
                <div className="bg-[#FFF2ED] p-2.5 rounded-xl text-[#FF5722] shrink-0">
                  <Store className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="font-extrabold text-[#1A1A2E] text-base leading-tight truncate">5</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">Brands</div>
                </div>
              </div>

            

              <div id="stat-verified-claim" className="bg-white border border-[#E8E8F0] rounded-2xl px-4 py-3 flex items-center gap-3.5 shadow-xs">
                <div className="bg-[#FEFBE8] p-2.5 rounded-xl text-[#F59E0B] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="font-extrabold text-[#1A1A2E] text-base leading-tight truncate">100%</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">Verified Deals</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (50%) */}
          <div className="hidden md:col-span-6 md:flex items-center justify-center relative">
            <div className="relative w-full max-2w-md aspect-[4/3]">
              <NextImage
                src="https://res.cloudinary.com/dgy1atvb8/image/upload/v1782634507/all-product_dtkmbs.jpg"
                alt="Browse all products on CouponScrew"
                fill
                sizes="(max-width: 1024px) 0px, 448px"
                referrerPolicy="no-referrer"
                className="object-contain rounded-3xl"
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================================
          SECTION 2  -  MAIN CONTENT AREA
          ============================================================================ */}
      <section className="bg-white py-8 px-6 flex-1">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-7">

          {/* ============================================================================
              LEFT SIDEBAR  -  ADVANCED PRODUCTS FILTERS FILTERBAR (Sticky on LG)
              ============================================================================ */}
          <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-24 self-start space-y-5">
            
            {/* Categories sidebar box block */}
            <div id="sidebar-categories-block" className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm">
              <h2 className="font-bold text-[#1A1A2E] text-base mb-3 leading-tight select-none flex items-center justify-between">
                <span>Categories</span>
                <span className="text-[10px] font-black uppercase text-[#5B4FBE] bg-[#F0EEFF] px-2 py-0.5 rounded-full">Catalog</span>
              </h2>
              
              <div className="space-y-1">
                {displayedCategories.map((cat, idx) => {
                  const isActive = selectedCategory === cat.name;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedCategory(cat.name)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-200 focus:outline-none ${
                        isActive
                          ? 'bg-[#5B4FBE] text-white font-semibold shadow-sm'
                          : 'hover:bg-[#F0EEFF] text-[#4A4A6A] hover:text-[#5B4FBE]'
                      }`}
                    >
                      <span className="text-sm text-left truncate pr-2">{cat.name}</span>
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          isActive ? 'bg-white/20 text-white' : 'bg-[#F8F8FF] text-gray-400'
                        }`}
                      >
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* View More expansion button */}
              <button
                onClick={() => setCategoriesExpanded(!categoriesExpanded)}
                className="mt-3.5 w-full text-xs font-bold text-[#5B4FBE] hover:text-indigo-700 flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>{categoriesExpanded ? 'View Less' : 'View More Categories'}</span>
                <ChevronRight size={12} className={`stroke-[3.5] transition-transform ${categoriesExpanded ? 'rotate-[-90deg]' : 'rotate-90'}`} />
              </button>
            </div>

            {/* Filter-By core block containing Sub-sections */}
            <div id="sidebar-filters-block" className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm space-y-6">
              
              {/* Filter By Header Title */}
              <div className="pb-3 border-b border-[#E8E8F0] flex items-center justify-between">
                <h2 className="font-bold text-[#1A1A2E] text-base leading-none select-none flex items-center gap-2">
                  <Filter size={16} className="text-[#5B4FBE]" />
                  <span>Filter By</span>
                </h2>
              </div>

              {/* Price Range sub-section */}
              <div id="price-range-filter" className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-[#1A1A2E]">Price Range</span>
                  <span className="text-xs font-bold text-[#5B4FBE]">₹0  -  ₹{priceRange.toLocaleString('en-IN')}</span>
                </div>
                
                <input
                  type="range"
                  min={0}
                  max={50000}
                  step={500}
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-[#5B4FBE] cursor-pointer mt-2"
                />

                <div className="flex justify-between items-center premium-range-labels text-gray-400 text-xs mt-1">
                  <span>₹0</span>
                  <span>₹50,000+</span>
                </div>
              </div>

              {/* Discount checkboxes sub-section */}
              <div id="discount-tiers-filter" className="space-y-3 pt-2">
                <span className="font-semibold text-sm text-[#1A1A2E] block">Discount</span>
                
                <div className="space-y-2.5">
                  {DISCOUNT_TIERS.map((tier) => {
                    const isChecked = selectedDiscounts.includes(tier.value);
                    return (
                      <div
                        key={tier.value}
                        onClick={() => toggleDiscountSelection(tier.value)}
                        className="flex items-center gap-3 cursor-pointer group select-none"
                      >
                        {/* Custom Checkbox Design */}
                        {isChecked ? (
                          <div className="w-4.5 h-4.5 bg-[#5B4FBE] border border-[#5B4FBE] rounded flex items-center justify-center text-white shrink-0">
                            <Check size={12} className="stroke-[3.5]" />
                          </div>
                        ) : (
                          <div className="w-4.5 h-4.5 border-2 border-[#E8E8F0] rounded group-hover:border-gray-400 shrink-0 transition-colors bg-white" />
                        )}

                        <span className="text-sm text-[#4A4A6A] leading-none group-hover:text-[#1A1A2E] transition-colors pr-1">
                          {tier.label}
                        </span>
                        
                        <span className="text-xs text-gray-400 ml-auto font-medium">
                          ({tier.count})
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Brand multi-checkbox list sub-section (With Search) */}
              <div id="brand-checklist-filter" className="space-y-3 pt-2">
                <span className="font-semibold text-sm text-[#1A1A2E] block">Brand</span>
                
                {/* Brand search input */}
                <div className="relative">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={brandSearch}
                    onChange={(e) => setBrandSearch(e.target.value)}
                    placeholder="Search brand..."
                    className="border border-[#E8E8F0] rounded-xl pl-9 pr-3 py-2 text-xs w-full focus:outline-none focus:border-[#5B4FBE] placeholder:text-gray-400 transition-colors text-[#1A1A2E] font-medium"
                  />
                  {brandSearch && (
                    <button
                      onClick={() => setBrandSearch('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                    >
                      <X size={10} />
                    </button>
                  )}
                </div>

                <div className="space-y-2.5 pt-1.5 max-h-[220px] overflow-y-auto pr-1">
                  {filteredBrandsList.map((brand) => {
                    const isChecked = selectedBrands.includes(brand.name);
                    return (
                      <div
                        key={brand.name}
                        onClick={() => toggleBrandSelection(brand.name)}
                        className="flex items-center gap-3 cursor-pointer group select-none"
                      >
                        {/* Custom Checkbox Design */}
                        {isChecked ? (
                          <div className="w-4.5 h-4.5 bg-[#5B4FBE] border border-[#5B4FBE] rounded flex items-center justify-center text-white shrink-0">
                            <Check size={12} className="stroke-[3.5]" />
                          </div>
                        ) : (
                          <div className="w-4.5 h-4.5 border-2 border-[#E8E8F0] rounded group-hover:border-gray-400 shrink-0 transition-colors bg-white" />
                        )}

                        <span className="text-sm text-[#4A4A6A] leading-none group-hover:text-[#1A1A2E] transition-colors pr-2 truncate">
                          {brand.name}
                        </span>
                        
                        <span className="text-xs text-gray-400 ml-auto font-medium shrink-0">
                          ({brand.count})
                        </span>
                      </div>
                    );
                  })}

                  {filteredBrandsList.length === 0 && (
                    <p className="text-xs text-gray-400 text-center py-2">No matching brands</p>
                  )}
                </div>

                {/* View More Brands toggle */}
                {brandSearch.trim() === '' && (
                  <button
                    onClick={() => setBrandsExpanded(!brandsExpanded)}
                    className="mt-2 text-xs font-bold text-[#5B4FBE] hover:text-indigo-700 flex items-center gap-1 cursor-pointer"
                  >
                    <span>{brandsExpanded ? 'View Less' : 'View More Brands'}</span>
                    <ChevronRight size={12} className={`stroke-[3.5] transition-transform ${brandsExpanded ? 'rotate-[-90deg]' : 'rotate-90'}`} />
                  </button>
                )}
              </div>

              {/* Clear All Filters button overlay */}
              {isAnyFilterActive && (
                <button
                  onClick={resetAllFilters}
                  className="w-full mt-4 border border-[#EF4444] text-[#EF4444] py-2.5 rounded-xl text-sm font-semibold hover:bg-red-50 transition flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
                >
                  <X size={16} className="stroke-[2.5]" />
                  <span>Clear All Filters</span>
                </button>
              )}

            </div>
          </aside>

          {/* ============================================================================
              RIGHT CONTENT PANEL  -  SEARCH INPUT, GRID/LIST TOGGLES & ITEMS CARDS
              ============================================================================ */}
          <main className="flex-1 space-y-6">
            
            {/* Compact Header search control panel and View Toggle Switch board */}
            <div className="p-4 bg-white rounded-2xl border border-[#E8E8F0] shadow-2xs flex flex-col sm:flex-row gap-4 items-center justify-between">
              
              {/* Product level instant live dynamic search box filter */}
              <div className="relative flex-1 w-full sm:max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4.5 h-4.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products, brands, models..."
                  className="w-full pl-10 pr-10 py-3 bg-[#F8F8FF] border border-[#E8E8F0] focus:border-[#5B4FBE] rounded-xl text-sm focus:outline-none text-[#1A1A2E] font-medium leading-none placeholder:text-gray-400 transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 bg-gray-200/50 hover:bg-gray-200 p-1 rounded-full transition-colors focus:outline-none"
                  >
                    <X size={10} />
                  </button>
                )}
              </div>

              {/* Combined Sorting + Grid view toggles */}
              <div className="flex items-center gap-3 w-full sm:w-auto shrink-0 justify-end">
                
                {/* Sorting Select Button */}
                <div className="relative flex-1 sm:flex-auto">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    aria-label="Sort products"
                    className="w-full sm:w-[180px] appearance-none border border-[#E8E8F0] hover:border-gray-300 focus:border-[#5B4FBE] rounded-xl pl-4 pr-10 py-3 text-sm text-[#1A1A2E] font-bold bg-white cursor-pointer focus:outline-none transition-all"
                  >
                    <option value="Popularity">Sort: Popularity</option>
                    <option value="Newest First">Newest First</option>
                    <option value="Price: Low to High">Price: Low to High</option>
                    <option value="Price: High to Low">Price: High to Low</option>
                    <option value="Highest Discount">Highest Discount</option>
                    <option value="Best Rating">Best Rating</option>
                  </select>
                  <ChevronRight size={14} className="rotate-90 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                {/* Mobile Filter Drawer Button (Visible on medium/small screen sizes) */}
                <button
                  onClick={() => setIsMobileSidebarOpen(true)}
                  className="lg:hidden p-3 bg-[#F8F8FF] border border-[#E8E8F0] text-[#1A1A2E] hover:text-[#5B4FBE] hover:border-[#5B4FBE] rounded-xl transition-all focus:outline-none flex items-center justify-center shrink-0 cursor-pointer"
                  title="Show Filters"
                >
                  <Filter size={18} />
                </button>

                {/* Layout View Toggler */}
                <div className="flex items-center gap-1 bg-[#F8F8FF] border border-[#E8E8F0] p-1.5 rounded-xl shrink-0 select-none">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg cursor-pointer transition-all ${
                      viewMode === 'grid'
                        ? 'bg-[#5B4FBE] text-white shadow-xs font-bold'
                        : 'text-[#4A4A6A] hover:bg-[#F0EEFF] hover:text-[#5B4FBE]'
                    }`}
                    title="Grid layout view mode"
                  >
                    <LayoutGrid size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg cursor-pointer transition-all ${
                      viewMode === 'list'
                        ? 'bg-[#5B4FBE] text-white shadow-xs font-bold'
                        : 'text-[#4A4A6A] hover:bg-[#F0EEFF] hover:text-[#5B4FBE]'
                    }`}
                    title="List layout view mode"
                  >
                    <List size={16} />
                  </button>
                </div>

              </div>

            </div>

            {/* Results Counters Label & Pill Indicator Alerts */}
            <div className="flex items-center justify-between flex-wrap gap-2 px-1 py-0.5 select-none">
              
              <p className="text-sm font-semibold text-[#4A4A6A]">
                Showing{' '}
                <span className="text-[#1A1A2E] font-black">
                  {filteredAndSortedProducts.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1}
                </span>{' '}
                 - {' '}
                <span className="text-[#1A1A2E] font-black">
                  {Math.min(currentPage * itemsPerPage, filteredAndSortedProducts.length)}
                </span>{' '}
                of{' '}
                <span className="text-[#5B4FBE] font-black">
                  {filteredAndSortedProducts.length.toLocaleString()}
                </span>{' '}
                matching products
              </p>

              {/* Active Category Display Badge */}
              {selectedCategory !== 'All Products' && (
                <div className="inline-flex items-center gap-1 text-[11px] font-black tracking-wider uppercase text-[#5B4FBE] bg-[#F0EEFF] px-3 py-1 rounded-full border border-indigo-200">
                  <span>Category: {selectedCategory}</span>
                </div>
              )}

            </div>

            {/* ============================================================================
                CRITICAL VALUE OR EMPTY RESULTS FALLBACK EXCEPTION RENDER
                ============================================================================ */}
            {filteredAndSortedProducts.length === 0 ? (
              <div className="py-20 text-center space-y-4 bg-white rounded-3xl border border-[#E8E8F0] shadow-2xs max-w-2xl mx-auto px-6">
                <div className="w-16 h-16 bg-[#FFF2ED] text-[#FF5722] rounded-full flex items-center justify-center mx-auto">
                  <Search size={28} />
                </div>
                <h3 className="font-extrabold text-[#1A1A2E] text-lg">No matching products found</h3>
                <p className="text-gray-400 text-sm max-w-sm mx-auto leading-relaxed">
                  We currently do not have products meeting your specified criteria. Try clearing some filters or searching for alternative keywords.
                </p>
                <button
                  onClick={resetAllFilters}
                  className="bg-[#5B4FBE] hover:bg-opacity-95 text-white font-extrabold text-xs px-6 py-3 rounded-xl cursor-pointer shadow-md transition-all active:scale-[0.98]"
                >
                  Clear All Filters
                </button>
              </div>
            ) : viewMode === 'grid' ? (
              
              /* ============================================================================
                  GRID LAYOUT RENDER (4 Columns on Desktop as requested)
                  ============================================================================ */
              <div id="products-grid-layout" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {paginatedProducts.map((p) => {
                  const savings = p.originalPrice - p.dealPrice;
                  return (
                    <div
                      key={p.id}
                      onClick={(e) => handleGetDeal(p, e)}
                      className="bg-white rounded-2xl border border-[#E8E8F0] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative flex flex-col justify-between"
                    >
                      {/* Image Frame Section */}
                      <div className="relative bg-[#F8F8FF] aspect-square p-3 select-none">
                        
                        {/* Discount Badge */}
                        {p.discountPercent >= 10 && (
                          <div className="absolute top-3 left-3 bg-[#FF5722] border border-orange-600/10 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-lg shadow-xs z-10 uppercase tracking-wide">
                            {p.discountPercent}% OFF
                          </div>
                        )}

                        {/* Heart Wishlist toggler */}
                        <button
                          onClick={(e) => toggleWishlist(p.id, e)}
                          className="absolute top-3 right-3 bg-white hover:bg-opacity-95 text-[#EF4444] rounded-full p-2 shadow-md cursor-pointer z-10 transition-transform active:scale-90 focus:outline-none"
                          aria-label="Wishlist button"
                        >
                          <Heart
                            size={16}
                            className={p.isWishlisted ? 'fill-[#EF4444] text-[#EF4444]' : 'text-gray-400 hover:text-[#EF4444] transition-colors'}
                          />
                        </button>

                        <NextImage
                          src={p.image}
                          alt={p.name}
                          width={300}
                          height={300}
                          sizes="(max-width: 768px) 45vw, 200px"
                          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 rounded-lg"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Content Panel */}
                      <div className="p-4 flex flex-col flex-1 justify-between text-left">
                        <div className="space-y-1.5">
                          {/* Brand pill */}
                          <span className="bg-[#F0EEFF] text-[#5B4FBE] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full inline-block uppercase tracking-wider">
                            {p.brand}
                          </span>

                          {/* Product name */}
                          <h3 className="text-sm font-bold text-[#1A1A2E] leading-snug line-clamp-2 hover:text-[#5B4FBE] transition-colors" title={p.name}>
                            {p.name}
                          </h3>

                          {/* Rating and Reviews Row */}
                          <div className="flex items-center gap-1 select-none">
                            <Star size={13} className="text-[#F59E0B] fill-[#F59E0B]" />
                            <span className="text-xs font-bold text-[#1A1A2E]">{p.rating}</span>
                            <span className="text-gray-400 text-[11px] font-medium">({p.reviewCount})</span>
                          </div>
                        </div>

                        {/* Bottom alignment section */}
                        <div className="mt-3.5 space-y-2">
                          
                          {/* Price details line */}
                          <div>
                            <div className="flex items-baseline flex-wrap">
                              <span className="font-black text-lg text-[#1A1A2E]">
                                ₹{p.dealPrice.toLocaleString('en-IN')}
                              </span>
                              <span className="line-through text-xs text-gray-400 ml-2 font-medium">
                                ₹{p.originalPrice.toLocaleString('en-IN')}
                              </span>
                            </div>
                            <div className="text-xs font-black text-[#22C55E] tracking-tight mt-0.5 uppercase leading-none select-none">
                              Save ₹{savings.toLocaleString('en-IN')}
                            </div>
                          </div>

                          {/* Free Delivery Promo layout link */}
                          {p.hasFreeDelivery && (
                            <div id="free-delivery-claim" className="bg-[#F0FDF4] text-[#22C55E] text-[10px] font-black uppercase tracking-wide px-2.5 py-0.5 rounded-full inline-flex items-center gap-1 select-none">
                              <Truck size={11} className="stroke-[2.5]" />
                              <span>FREE Delivery</span>
                            </div>
                          )}

                          {/* Get Deal CTA trigger */}
                          <button
                            onClick={(e) => handleGetDeal(p, e)}
                            className="mt-2 w-full bg-[#FF5722] hover:bg-orange-600 text-white py-2.5 rounded-xl font-extrabold text-sm transition-all flex items-center justify-center gap-2 active:scale-[0.98] select-none cursor-pointer focus:outline-none"
                          >
                            <Zap size={14} className="fill-white font-medium shrink-0" />
                            <span>Get Deal</span>
                          </button>

                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            ) : (
              
              /* ============================================================================
                  LIST LAYOUT RENDER (Single Column layout)
                  ============================================================================ */
              <div id="products-list-layout" className="space-y-4">
                {paginatedProducts.map((p) => {
                  const savings = p.originalPrice - p.dealPrice;
                  return (
                    <div
                      key={p.id}
                      onClick={(e) => handleGetDeal(p, e)}
                      className="bg-white rounded-2xl border border-[#E8E8F0] overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col md:flex-row text-left"
                    >
                      {/* Left Side image container */}
                      <div className="md:w-48 flex-shrink-0 relative bg-[#F8F8FF] aspect-video md:aspect-auto select-none">
                        
                        {p.discountPercent >= 10 && (
                          <div className="absolute top-3 left-3 bg-[#FF5722] text-white text-[11px] font-black px-2.5 py-1 rounded-lg shadow-xs z-10 uppercase tracking-wide">
                            {p.discountPercent}% OFF
                          </div>
                        )}

                        <NextImage
                          src={p.image}
                          alt={p.name}
                          width={192}
                          height={192}
                          sizes="(max-width: 768px) 100vw, 192px"
                          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Center Side info container */}
                      <div className="flex-1 p-5 flex flex-col justify-between">
                        <div>
                          
                          {/* Row 1 brand pill + heart wishlist indicator */}
                          <div className="flex justify-between items-start select-none">
                            <span className="bg-[#F0EEFF] text-[#5B4FBE] text-[10px] font-black px-2.5 py-0.5 rounded-full inline-block uppercase tracking-wider">
                              {p.brand}
                            </span>
                            
                            <button
                              onClick={(e) => toggleWishlist(p.id, e)}
                              className="bg-[#F8F8FF] hover:bg-red-50 text-[#EF4444] rounded-full p-2 transition-colors cursor-pointer focus:outline-none"
                              aria-label="Wishlist toggle list"
                            >
                              <Heart
                                size={14}
                                className={p.isWishlisted ? 'fill-[#EF4444] text-[#EF4444]' : 'text-gray-400'}
                              />
                            </button>
                          </div>

                          <h3 className="text-lg font-bold text-[#1A1A2E] mt-2 line-clamp-1 group-hover:text-[#5B4FBE] transition-colors">
                            {p.name}
                          </h3>

                          {/* Ratings info */}
                          <div className="flex items-center gap-1 mt-1.5 select-none">
                            <Star size={13} className="text-[#F59E0B] fill-[#F59E0B]" />
                            <span className="text-xs font-bold text-[#1A1A2E]">{p.rating}</span>
                            <span className="text-gray-400 text-xs">({p.reviewCount} Ratings &amp; Reviews)</span>
                          </div>

                          {/* Custom Generated Dynamic Description string */}
                          <p className="text-sm text-[#4A4A6A] mt-2 leading-relaxed line-clamp-1">
                            Save massive amounts on this authentic, top-rated {p.brand} {p.category} gadget. Original brand warrantied.
                          </p>
                        </div>

                        {/* Free Delivery label if true */}
                        {p.hasFreeDelivery && (
                          <div className="mt-3 bg-[#F0FDF4] text-[#22C55E] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full inline-flex items-center gap-1 select-none w-fit">
                            <Truck size={12} className="stroke-[2.5]" />
                            <span>FREE Delivery &amp; Express Shipping Included</span>
                          </div>
                        )}

                      </div>

                      {/* Right side checkout and pricing details bar (Desktop Left-Bordered) */}
                      <div className="p-5 flex flex-col justify-center items-stretch md:w-52 border-t md:border-t-0 md:border-l border-[#E8E8F0] shrink-0 bg-[#FBFBFF]">
                        
                        <div className="text-left md:text-center space-y-1 pb-3 leading-none select-none">
                          <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">Deal Price</div>
                          <div className="font-black text-2xl text-[#1A1A2E]">
                            ₹{p.dealPrice.toLocaleString('en-IN')}
                          </div>
                          <div className="flex items-center justify-start md:justify-center gap-1.5 pt-1 flex-wrap">
                            <span className="line-through text-xs text-gray-400 font-medium">
                              ₹{p.originalPrice.toLocaleString('en-IN')}
                            </span>
                            <span className="text-xs font-extrabold text-[#22C55E]">
                              (Save ₹{savings.toLocaleString('en-IN')})
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={(e) => handleGetDeal(p, e)}
                          className="w-full bg-[#FF5722] hover:bg-orange-600 text-white py-2.5 rounded-xl font-black text-xs transition-all flex items-center justify-center gap-1.5 focus:outline-none active:scale-[0.98] cursor-pointer"
                        >
                          <Zap size={12} className="fill-white" />
                          <span>GET DEAL REGISTERED</span>
                        </button>

                      </div>

                    </div>
                  );
                })}
              </div>
            )}

            {/* ============================================================================
                PAGINATION SYSTEM CONTROLS (Formatted matching standard beautiful Stores Pagination)
                ============================================================================ */}
            {filteredAndSortedProducts.length > 0 && totalPages > 1 && (
              <div id="products-pagination-board" className="flex items-center justify-center gap-2 mt-10 select-none">
                
                {/* Previous Button control */}
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all ${
                    currentPage === 1
                      ? 'border-gray-200 bg-gray-50 text-gray-300 cursor-not-allowed'
                      : 'border-[#E8E8F0] bg-white text-[#4A4A6A] hover:border-[#5B4FBE] hover:text-[#5B4FBE] cursor-pointer'
                  }`}
                  title="Previous Products Page"
                >
                  <ChevronLeft size={16} />
                </button>

                {/* Main numbers buttons mapped array */}
                {pageNumbers.map((num, idx) => {
                  if (num === '...') {
                    return (
                      <span
                        key={`gap-${idx}`}
                        className="w-9 h-9 flex items-center justify-center text-gray-400 text-sm font-semibold select-none"
                      >
                        ...
                      </span>
                    );
                  }

                  const active = currentPage === num;
                  return (
                    <button
                      key={`page-${num}`}
                      onClick={() => setCurrentPage(num as number)}
                      className={`w-9 h-9 rounded-xl font-extrabold text-sm flex items-center justify-center transition-all focus:outline-none cursor-pointer ${
                        active
                          ? 'bg-[#5B4FBE] text-white shadow-md font-bold'
                          : 'bg-white border border-[#E8E8F0] text-[#4A4A6A] hover:border-[#5B4FBE] hover:text-[#5B4FBE]'
                      }`}
                    >
                      {num}
                    </button>
                  );
                })}

                {/* Next Button control */}
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all ${
                    currentPage === totalPages
                      ? 'border-gray-200 bg-gray-50 text-gray-300 cursor-not-allowed'
                      : 'border-[#E8E8F0] bg-white text-[#4A4A6A] hover:border-[#5B4FBE] hover:text-[#5B4FBE] cursor-pointer'
                  }`}
                  title="Next Products Page"
                >
                  <ChevronRight size={16} />
                </button>

              </div>
            )}

          </main>
        </div>
      </section>

      {/* ============================================================================
          SECTION 3  -  TRUST BADGES DEALS STRIP
          ============================================================================ */}
      <section className="bg-[#F8F8FF] border-t border-[#E8E8F0] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 select-none">
            
            {/* Badge Item 1 */}
            <div className="text-center group">
              <div className="w-16 h-16 rounded-3xl bg-[#F0EEFF] text-[#5B4FBE] flex items-center justify-center mx-auto shadow-xs border border-indigo-100 group-hover:scale-105 transition-transform duration-300">
                <ShieldCheck size={32} className="stroke-[1.5]" />
              </div>
              <h2 className="text-base font-bold text-[#1A1A2E] mt-4 leading-tight">
                100% Original Products
              </h2>
              <p className="text-xs text-[#4A4A6A] mt-1.5 leading-relaxed">
                Every product links to the official brand or retailer. No third-party sellers, no counterfeits.
              </p>
            </div>

            {/* Badge Item 2 */}
            <div className="text-center group">
              <div className="w-16 h-16 rounded-3xl bg-[#FFF2ED] text-[#FF5722] flex items-center justify-center mx-auto shadow-xs border border-orange-100 group-hover:scale-105 transition-transform duration-300">
                <Tag size={32} className="stroke-[1.5]" />
              </div>
              <h2 className="text-base font-bold text-[#1A1A2E] mt-4 leading-tight">
                Best Prices Guaranteed
              </h2>
              <p className="text-xs text-[#4A4A6A] mt-1.5 leading-relaxed">
                We check prices across retailers and only list a product when it&apos;s genuinely discounted.
              </p>
            </div>

            {/* Badge Item 3 */}
            <div className="text-center group">
              <div className="w-16 h-16 rounded-3xl bg-[#F0FDF4] text-[#22C55E] flex items-center justify-center mx-auto shadow-xs border border-emerald-100 group-hover:scale-105 transition-transform duration-300">
                <RefreshCw size={32} className="stroke-[1.5] animate-pulse" />
              </div>
              <h2 className="text-base font-bold text-[#1A1A2E] mt-4 leading-tight">
                Easy Returns
              </h2>
              <p className="text-xs text-[#4A4A6A] mt-1.5 leading-relaxed">
                Returns go through the retailer&apos;s own policy — the same process you&apos;d use buying direct.
              </p>
            </div>

            {/* Badge Item 4 */}
            <div className="text-center group">
              <div className="w-16 h-16 rounded-3xl bg-[#FEFBE8] text-[#F59E0B] flex items-center justify-center mx-auto shadow-xs border border-yellow-150 group-hover:scale-105 transition-transform duration-300">
                <Lock size={32} className="stroke-[1.5]" />
              </div>
              <h2 className="text-base font-bold text-[#1A1A2E] mt-4 leading-tight">
                Secure Payments
              </h2>
              <p className="text-xs text-[#4A4A6A] mt-1.5 leading-relaxed">
                Clicking through takes you to the retailer&apos;s site. Your payment is handled entirely by them.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================================
          INTERACTIVE DRAWER SIDEBAR FOR MOBILE VIEWPORTS ONLY
          ============================================================================ */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden lg:hidden" aria-modal="true" role="dialog">
          
          {/* Black background modal backdrop */}
          <div
            onClick={() => setIsMobileSidebarOpen(false)}
            className="absolute inset-0 bg-black/60 transition-opacity backdrop-blur-xs cursor-pointer"
          />

          <div className="absolute inset-y-0 right-0 max-w-full flex">
            <div className="w-screen max-w-sm bg-white shadow-2xl flex flex-col justify-between">
              
              {/* Drawer Title Header row */}
              <div className="px-6 py-5 border-b border-[#E8E8F0] flex items-center justify-between bg-[#F8F8FF]">
                <div className="flex items-center gap-2">
                  <Filter size={18} className="text-[#5B4FBE]" />
                  <span className="font-extrabold text-[#1A1A2E] text-base">Adjust Filters</span>
                </div>
                <button
                  onClick={() => setIsMobileSidebarOpen(false)}
                  className="text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 p-1.5 rounded-full transition-colors focus:outline-none"
                  aria-label="Close Filter Drawer"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Drawer Content Area (Self-Scrolled list) */}
              <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
                
                {/* Categories multi select filter wrapper */}
                <div className="space-y-3">
                  <span className="font-bold text-sm text-[#1A1A2E] uppercase tracking-wider block">Category</span>
                  <div className="space-y-1 max-h-[200px] overflow-y-auto border border-[#E8E8F0] p-3 rounded-2xl bg-[#F8F8FF]/50 pr-1">
                    {SIDEBAR_CATEGORIES.map((cat, idx) => {
                      const isActive = selectedCategory === cat.name;
                      return (
                        <button
                          key={`mob-cat-${idx}`}
                          onClick={() => setSelectedCategory(cat.name)}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors focus:outline-none ${
                            isActive
                              ? 'bg-[#5B4FBE] text-white font-black'
                              : 'hover:bg-[#F0EEFF] text-[#4A4A6A]'
                          }`}
                        >
                          <span className="truncate pr-2">{cat.name}</span>
                          <span className={isActive ? 'text-white/80' : 'text-gray-400 font-bold'}>{cat.count}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Price range selector inside mobile view block */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between text-sm font-bold">
                    <span className="text-[#1A1A2E]">PRICE BAND LIMIT</span>
                    <span className="text-[#5B4FBE]">₹{priceRange.toLocaleString('en-IN')} max</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={50000}
                    step={500}
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full accent-[#5B4FBE] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                    <span>₹0</span>
                    <span>₹50,000+</span>
                  </div>
                </div>

                {/* Discount selectors checklist stream for mobile */}
                <div className="space-y-3 pt-2">
                  <span className="font-bold text-sm text-[#1A1A2E] uppercase tracking-wider block">Discount Percent</span>
                  <div className="space-y-2">
                    {DISCOUNT_TIERS.map((tier) => {
                      const isChecked = selectedDiscounts.includes(tier.value);
                      return (
                        <div
                          key={`mob-dis-${tier.value}`}
                          onClick={() => toggleDiscountSelection(tier.value)}
                          className="flex items-center gap-3 cursor-pointer select-none group"
                        >
                          {isChecked ? (
                            <div className="w-5 h-5 bg-[#5B4FBE] border border-[#5B4FBE] rounded flex items-center justify-center text-white shrink-0">
                              <Check size={12} className="stroke-[3.5]" />
                            </div>
                          ) : (
                            <div className="w-5 h-5 border-2 border-[#E8E8F0] rounded group-hover:border-gray-400 shrink-0 transition-colors bg-white" />
                          )}
                          <span className="text-sm text-[#4A4A6A] pr-1">{tier.label}</span>
                          <span className="text-xs text-gray-400 ml-auto">({tier.count})</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Brand search list checklists */}
                <div className="space-y-3 pt-2">
                  <span className="font-bold text-sm text-[#1A1A2E] uppercase tracking-wider block">Brands selection</span>
                  
                  <div className="space-y-2.5 max-h-[180px] overflow-y-auto border border-[#E8E8F0] p-3 rounded-2xl bg-[#F8F8FF]/50 pr-1">
                    {SIDEBAR_BRANDS.map((brand) => {
                      const isChecked = selectedBrands.includes(brand.name);
                      return (
                        <div
                          key={`mob-brand-${brand.name}`}
                          onClick={() => toggleBrandSelection(brand.name)}
                          className="flex items-center gap-3 cursor-pointer select-none group"
                        >
                          {isChecked ? (
                            <div className="w-4.5 h-4.5 bg-[#5B4FBE] border border-[#5B4FBE] rounded flex items-center justify-center text-white shrink-0">
                              <Check size={12} className="stroke-[3.5]" />
                            </div>
                          ) : (
                            <div className="w-4.5 h-4.5 border-2 border-[#E8E8F0] rounded group-hover:border-gray-400 shrink-0 transition-colors bg-white" />
                          )}
                          <span className="text-sm text-[#4A4A6A] truncate pr-2">{brand.name}</span>
                          <span className="text-xs text-gray-400 ml-auto font-medium shrink-0">({brand.count})</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Drawer Apply footer bar controls overlay button */}
              <div className="p-6 border-t border-[#E8E8F0] space-y-2.5 bg-[#FBFBFF]">
                {isAnyFilterActive && (
                  <button
                    onClick={resetAllFilters}
                    className="w-full border border-red-500 text-red-500 py-3 rounded-xl text-xs font-black uppercase tracking-wider focus:outline-none cursor-pointer"
                  >
                    Reset Filter Forms
                  </button>
                )}
                
                <button
                  onClick={() => setIsMobileSidebarOpen(false)}
                  className="w-full bg-[#5B4FBE] text-white py-3 rounded-xl text-xs font-black uppercase tracking-wider shadow-md focus:outline-none cursor-pointer"
                >
                  Verify ({filteredAndSortedProducts.length}) Results
                </button>
              </div>

            </div>
          </div>

        </div>
      )}

      <section className="bg-[#F8F8FF] py-16 px-6 border-t border-[#E8E8F0]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-10">

        {/* LEFT - MAIN EDITORIAL CONTENT (70%) */}
        <div className="lg:col-span-7 space-y-10">

          {/* ARTICLE BLOCK 1 */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#5B4FBE] rounded-full block"></span>
              <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">Catalog Overview</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              5 Hand-Picked Products — All With Active Deals
            </h2>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <p>
                Most shopping platforms show you products. Couponscrew is a discount code website that shows you products that are actually on deal — right now, today, with the savings already calculated before you even click.
              </p>
              <p>
                Every product listed on this page comes with a verified discount. You can see exactly how much you are saving — in real amounts, not just percentages — before you decide to buy. Whether it is a fashion accessory at 85% off, a skincare combo with a verified price drop, or a home workout kit with a confirmed markdown — what you see here is what you actually pay less for.
              </p>
              <p>
                Across categories like Watches &amp; Accessories, Beauty &amp; Personal Care, Fashion &amp; Clothing, Home &amp; Kitchen, and Sports &amp; Fitness — Couponscrew&apos;s Products page is built for shoppers who want to browse deals the same way they browse any top shopping platform, but with one critical difference: every product here is already discounted, and every listing is hand-verified rather than auto-imported in bulk.
              </p>
              <p>
                Use the category filter on the left to narrow down by what you are shopping for. Use the price range slider to stay within budget. Sort by highest savings, newest arrivals, or biggest discount percentage. Then click on any product that interests you and get the deal instantly.
              </p>
            </div>
          </div>

          {/* ARTICLE BLOCK 2 */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#22C55E] rounded-full block"></span>
              <span className="text-xs font-black text-[#22C55E] uppercase tracking-widest">Sourcing Metric</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              How Couponscrew Sources and Verifies Product Deals
            </h2>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <p>
                Listing products with accurate savings figures is not something that happens automatically. Not every discount website bothers with this level of upkeep, which is why Couponscrew keeps this catalog small and hand-verified rather than padded out with thousands of unchecked listings. Here is how Couponscrew keeps the Products page reliable and genuinely useful.
              </p>
              <ul className="space-y-3 pl-1 mt-2">
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Direct brand and affiliate data.</strong> Product listings on Couponscrew are sourced directly from brand partnerships and verified affiliate feeds. This means the prices, savings amounts, and availability data you see here are pulled from the actual brand or retailer — not estimated or approximated.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Real savings figures, not inflated MRPs.</strong> The savings figure on every product card reflects the difference between the current deal price and the actual market price of that product. We do not inflate original prices to make discounts look bigger than they are — a practice unfortunately common across e-commerce. What you see on Couponscrew is the real saving.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Ratings and reviews included.</strong> Every product card shows the real user rating and review count from the retailer. A listing showing thousands of genuine reviews gives you real purchase confidence — not just a deal pitch.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Free delivery flagged upfront.</strong> Products with free delivery are clearly marked on the card before you click. No surprise shipping charges at checkout. You know the full cost of your order before you commit.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Regular price checks.</strong> Our team runs regular checks across all active product listings to ensure the deal price is still live and the savings figure is accurate. If a product&apos;s price changes, the listing is updated immediately.</p>
                </li>
              </ul>
            </div>
          </div>

          {/* ARTICLE BLOCK 3 */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#FF9900] rounded-full block"></span>
              <span className="text-xs font-black text-[#FF9900] uppercase tracking-widest">Live Segments</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              Product Categories You Can Shop With Deals Today
            </h2>
            <p className="mt-3 text-sm text-[#4A4A6A] leading-relaxed">
              Couponscrew&apos;s Products page is small by design — every category below has at least one hand-verified deal live right now:
            </p>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <Sparkles className="w-4 h-4 text-[#5B4FBE]" />,
                  title: "Watches & Accessories",
                  body: "Watches, bangles, and everyday accessories with verified discounts. Brands like Acnos are featured here with deep, real markdowns rather than inflated MRP comparisons."
                },
                {
                  icon: <Sparkles className="w-4 h-4 text-[#FC2779]" />,
                  title: "Beauty & Personal Care",
                  body: "Skincare, haircare, makeup, grooming, and wellness products from brands like Minimalist. Beauty deals on Couponscrew frequently include combo offers and free gifts with purchase — making the real value higher than the headline discount suggests."
                },
                {
                  icon: <Shirt className="w-4 h-4 text-[#FF3F6C]" />,
                  title: "Fashion & Clothing",
                  body: "Clothing and accessories from brands like DEELMO, each one checked for fit, quality, and an honest discount before it gets listed here."
                },
                {
                  icon: <Home className="w-4 h-4 text-[#8B5CF6]" />,
                  title: "Home & Kitchen",
                  body: "Home decor and lifestyle products from brands like Desidiya. Home deals are especially strong during festive seasons and new collection launches."
                },
                {
                  icon: <Activity className="w-4 h-4 text-[#EF4444]" />,
                  title: "Sports & Fitness",
                  body: "Fitness gear from brands like PulGos. Sports deals are particularly active around New Year fitness resolution season and pre-summer months."
                }
              ].map((cat, idx) => (
                <div key={idx} className="rounded-2xl border border-[#E8E8F0] p-5 hover:border-[#5B4FBE] transition-colors bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-gray-50 flex items-center justify-center">
                      {cat.icon}
                    </div>
                    <h3 className="text-sm font-extrabold text-[#1A1A2E]">{cat.title}</h3>
                  </div>
                  <p className="text-xs text-[#4A4A6A] mt-2 leading-relaxed">{cat.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ARTICLE BLOCK 4 */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#8B5CF6] rounded-full block"></span>
              <span className="text-xs font-black text-[#8B5CF6] uppercase tracking-widest">Interface</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              How to Shop Products on Couponscrew
            </h2>
            <div className="mt-4 text-sm text-[#4A4A6A] leading-relaxed">
              <p className="mb-4">
                Finding and buying a discounted product on Couponscrew is straightforward. Here is the exact process:
              </p>
              <div className="space-y-3">
                {[
                  { step: "1", title: "Browse or filter", desc: "Use the category sidebar on the left to select what you are shopping for. Adjust the price range slider to match your budget. Sort the grid by highest discount, biggest absolute saving, newest listings, or top rated." },
                  { step: "2", title: "Read the product card", desc: "Before clicking, check the brand tag, rating, review count, deal price, original price, the saving amount, and whether free delivery is included. All of this is visible on the card without opening the product." },
                  { step: "3", title: "Click on the product", desc: "Tap the product card to open the full deal page. Here you will find more details about the product, additional images, full specifications, and the active deal or coupon code attached to it." },
                  { step: "4", title: "Get the deal", desc: "Click \"Get Deal\" to be taken directly to the product on the retailer's website with the deal price already applied, or copy the coupon code if one is required at checkout." },
                  { step: "5", title: "Complete your purchase", desc: "Add to cart on the retailer's site, apply any coupon code if needed, and confirm your order at the discounted price." },
                  { step: "6", title: "Stack additional savings", desc: "Before paying, check if your bank card has a cashback offer running with that retailer. Combining a Couponscrew product deal with a bank card offer is the fastest way to maximise savings on any order — the kind of stacking that the best coupon sites for online shopping are built around." }
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 p-4 bg-[#F8F8FF] rounded-2xl border border-[#E8E8F0]">
                    <div className="w-8 h-8 rounded-xl bg-[#5B4FBE] text-white flex items-center justify-center text-sm font-black shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#1A1A2E]">{item.title}</p>
                      <p className="text-xs text-[#4A4A6A] mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ARTICLE BLOCK 5 */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-[#FF5722] rounded-full block"></span>
              <span className="text-xs font-black text-[#FF5722] uppercase tracking-widest">Tactics</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight">
              Tips to Shop Smarter on the Products page
            </h2>
            <div className="mt-4 space-y-3 text-sm text-[#4A4A6A] leading-relaxed">
              <ul className="space-y-3 pl-1">
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Sort by biggest saving for big-ticket purchases.</strong> If you are shopping for something expensive — a phone, laptop, or appliance — sorting by highest absolute saving instantly surfaces the products where the real saving is largest. A 30% discount on a high-ticket laptop saves far more in absolute terms than a 70% discount on a low-priced item.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Check ratings before chasing discounts.</strong> A 71% discount on a product with 2.1 stars from 200 reviews is not a good deal — it is a clearance sale on something people did not like. Always cross-check the star rating and review count on the product card before buying purely on discount percentage.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Use the price range filter to find hidden deals.</strong> Most shoppers browse the default view and miss great deals in price brackets they do not usually explore. Slide the price range to the lower bracket and you will often find the deepest discounts of the lot — some of the listings here run 70–90% off their listed price.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Free delivery matters more on lower-priced products.</strong> On a lower-priced product with a big percentage saving, free delivery is a significant part of the value. Always factor shipping cost into the actual saving — Couponscrew flags free delivery upfront so you can compare accurately.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-[#FF5722] rounded-full mt-2 shrink-0"></span>
                  <p><strong>Revisit the page during sale season.</strong> Big Billion Days, Great Indian Festival, End of Reason Sale, and Nykaa Pink Friday are when the savings figures on this page go to their annual peaks. Bookmark Couponscrew and come back during these windows for the deepest product discounts of the year.</p>
                </li>
              </ul>
            </div>
          </div>

          {/* ARTICLE BLOCK 6 - FAQ SECTION */}
          <div className="bg-white rounded-3xl border border-[#E8E8F0] p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle className="w-4 h-4 text-[#5B4FBE]" />
              <span className="text-xs font-black text-[#5B4FBE] uppercase tracking-widest">FAQ</span>
            </div>
            <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                { q: "How many products are listed on Couponscrew?", a: "5 right now — a small, hand-verified catalog rather than a bulk import. New products are added one at a time as deals are checked and confirmed, and the count next to each category reflects active listings only." },
                { q: "Are the savings figures on product cards accurate?", a: "Yes. The saving shown is the difference between the deal price and the actual retail price — not a comparison to an inflated fake MRP. We check this." },
                { q: "Do all products have free delivery?", a: "No — but it's flagged clearly on every card that qualifies. If it's not flagged, check shipping cost on the retailer's checkout before you commit." },
                { q: "Can I filter products by brand?", a: "Yes. The sidebar has a brand filter and a search box. Type any brand name — Acnos, Minimalist, DEELMO — and the grid narrows to that brand's current deals." },
                { q: "How often are product listings updated?", a: "Daily. If a deal price changes, the listing updates. If it expires, it gets pulled. Dead listings don't stick around." },
                { q: "Is it safe to buy through Couponscrew product links?", a: "Yes. Clicking a product takes you to the official retailer — Amazon, Flipkart, Myntra, whoever stocks it. Your purchase and payment happen entirely on their platform. Couponscrew earns a small affiliate commission at no extra cost to you." },
                { q: "What if the deal price is different when I reach the retailer?", a: "Prices can move between when we list and when you click. The retailer's site shows the live price before checkout. If it's changed, check back here for an updated listing or browse alternatives in the same category." }
              ].map((faq, index) => (
                <div key={index} className="border-b border-[#E8E8F0] pb-4 last:border-0 last:pb-0">
                  <h3 className="text-sm font-extrabold text-[#1A1A2E] mb-1.5">{faq.q}</h3>
                  <p className="text-xs text-[#4A4A6A] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ARTICLE BLOCK 7 - FOOTER/CALL TO ACTION */}
          <div className="bg-gradient-to-br from-[#1A1A2E] to-[#2D2570] rounded-3xl p-8 text-white">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-white/40 rounded-full block"></span>
              <span className="text-xs font-black text-white/60 uppercase tracking-widest">Guarantee</span>
            </div>
            <h2 className="text-2xl font-black text-white leading-tight">
              5 Verified Products. Real Savings. Zero Guesswork.
            </h2>
            <div className="mt-4 space-y-3 text-sm text-white/75 leading-relaxed">
              <p>
                Shopping online should not feel like a gamble — buying something and then finding out an hour later that someone else got it for 40% less.
              </p>
              <p>
                Couponscrew&apos;s Products page removes that uncertainty. Every product here is already on deal. Every saving is already calculated. Every deal is already verified. That is what separates the best coupon sites for online shopping from the ones that just list and leave you to figure out the rest. You browse, you pick, you save — in that order, every time.
              </p>
              <p>
                5 hand-picked products. 5 trusted brands. One page that tells you exactly how much you are saving before you click Buy.
              </p>
              <p className="text-white font-semibold text-base pt-2">
                Go check what&apos;s on deal right now. Something you already want is already discounted — we just found it for you.
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT - SIDEBAR CARDS (30%) */}
        <div className="lg:col-span-3 space-y-5">

          {/* SIDEBAR CARD 1 - Matrix Metrics */}
          <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm sticky top-24">
            <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-1 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#5B4FBE]" />
              What&apos;s Behind Every Listing
            </h3>
            <p className="text-xs text-[#4A4A6A] mb-4">The numbers behind every product on this page.</p>
            <div className="space-y-2">
              {[
                { layer: "Live Catalog", val: "5 Hand-Picked Products" },
                { layer: "Data Sourcing", val: "Direct Affiliate Feeds" },
                { layer: "Pricing Audits", val: "Daily Updates" },
                { layer: "MRP Valuation", val: "Zero Inflation Policy" }
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-[#E8E8F0] last:border-0">
                  <span className="text-xs text-[#4A4A6A] font-medium">{row.layer}</span>
                  <span className="text-[10px] font-black text-[#5B4FBE] bg-[#F0EEFF] px-2 py-0.5 rounded-full">{row.val}</span>
                </div>
              ))}
              <div className="flex items-center justify-center pt-2 mt-1 bg-[#1A1A2E] rounded-xl px-3 py-2.5 text-center">
                <span className="text-xs font-black text-white tracking-wide uppercase">Every Deal Verified</span>
              </div>
            </div>
          </div>

          {/* SIDEBAR CARD 2 - Interface Controls */}
          <div className="bg-white rounded-2xl border border-[#E8E8F0] p-5 shadow-sm">
            <h3 className="font-extrabold text-[#1A1A2E] text-sm mb-3 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-[#22C55E]" />
              Use the Filters
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-[#F4FBF7] border border-[#22C55E]/20 rounded-xl">
                <div className="flex items-center gap-1.5 text-xs font-black text-[#155724] uppercase tracking-wider mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
                  Sidebar Filters
                </div>
                <p className="text-[11px] text-[#4A4A6A] leading-normal">
                  Category, price range, discount level, brand — use them together to find the exact deal you want among our 5 verified products.
                </p>
              </div>
              <div className="p-3 bg-[#FFF9F2] border border-[#FF9900]/20 rounded-xl">
                <div className="flex items-center gap-1.5 text-xs font-black text-[#8A5100] uppercase tracking-wider mb-1">
                  <Percent className="w-3.5 h-3.5 text-[#FF9900]" />
                  Value Flags
                </div>
                <p className="text-[11px] text-[#4A4A6A] leading-normal">
                  Free delivery and ratings are shown on every card before you click. You know what you&apos;re getting into before you commit.
                </p>
              </div>
            </div>
          </div>

          {/* SIDEBAR CARD 3 - Highlight Label */}
          <div className="bg-gradient-to-br from-[#FF5722] to-[#FF8A50] rounded-2xl p-5 text-white">
            <div className="flex items-center gap-2 mb-2">
              <ArrowRight className="w-4 h-4 text-white" />
              <span className="text-xs font-black uppercase tracking-wider">Buyer Protection</span>
            </div>
            <h3 className="text-sm font-extrabold text-white leading-snug">Official Portals Only</h3>
            <p className="text-white/80 text-xs mt-2 leading-relaxed">
              Every product links directly to the official retailer — Amazon, Flipkart, Myntra, and others. You complete your purchase on their platform, with their buyer protection.
            </p>
          </div>

        </div>

      </div>
    </section>

      <Footer />
    </div>
  );
}

