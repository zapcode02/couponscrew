import {
  Shirt,
  Smartphone,
  Utensils,
  Plane,
  HeartPulse,
  Home,
  Monitor,
  GraduationCap,
  Tv,
  Wallet,
  Activity,
  Car,
  PawPrint,
  BookOpen,
  MoreHorizontal,
  type LucideIcon,
} from 'lucide-react';

export interface NavCategory {
  name: string;
  icon: LucideIcon;
  offerCount: number;
  brandCount: number;
}

export const NAV_CATEGORIES: NavCategory[] = [
  { name: 'Fashion & Lifestyle', icon: Shirt, offerCount: 2345, brandCount: 120 },
  { name: 'Electronics', icon: Smartphone, offerCount: 1987, brandCount: 95 },
  { name: 'Food & Grocery', icon: Utensils, offerCount: 1876, brandCount: 85 },
  { name: 'Travel', icon: Plane, offerCount: 1543, brandCount: 70 },
  { name: 'Health & Beauty', icon: HeartPulse, offerCount: 987, brandCount: 60 },
  { name: 'Home & Kitchen', icon: Home, offerCount: 1234, brandCount: 75 },
  { name: 'Web Hosting', icon: Monitor, offerCount: 678, brandCount: 35 },
  { name: 'Education', icon: GraduationCap, offerCount: 543, brandCount: 40 },
  { name: 'Entertainment', icon: Tv, offerCount: 1234, brandCount: 55 },
  { name: 'Finance', icon: Wallet, offerCount: 1102, brandCount: 65 },
  { name: 'Sports & Fitness', icon: Activity, offerCount: 657, brandCount: 40 },
  { name: 'Automotive', icon: Car, offerCount: 321, brandCount: 25 },
  { name: 'Pet Supplies', icon: PawPrint, offerCount: 234, brandCount: 20 },
  { name: 'Books & Stationery', icon: BookOpen, offerCount: 432, brandCount: 30 },
  { name: 'Others', icon: MoreHorizontal, offerCount: 668, brandCount: 50 },
];
