import { STORES_DATA, Store } from '../../data/stores';

const STOPWORDS = new Set([
  'offers', 'offer', 'deals', 'deal', 'coupon', 'coupons', 'code', 'codes',
  'discount', 'discounts', 'ke', 'ka', 'ki', 'do', 'de', 'dedo', 'please', 'pls', 'bhai',
]);

// name -> category-page slug, matching the categories already listed on /stores/categories
const CATEGORY_SLUGS: Record<string, string> = {
  'Fashion': 'fashion',
  'Beauty': 'beauty',
  'Exercise & Fitness': 'exercise-and-fitness',
  'Home & Kitchen': 'home-and-kitchen',
  'Clothing & Accessories': 'clothing-and-accessories',
  'Electronics': 'electronics',
  'Food & Grocery': 'food-and-grocery',
  'Travel': 'travel',
  'Education': 'education',
  'Entertainment': 'entertainment',
  'Finance': 'finance',
  'Web Hosting': 'web-hosting',
  'Health': 'health',
  'Sports': 'sports',
  'Software': 'software',
  'Gaming': 'gaming',
};

export interface MatchResult {
  stores: Store[];
  matchedCategory: { name: string; slug: string } | null;
}

export function matchQuery(rawQuery: string): MatchResult {
  const query = rawQuery.trim().toLowerCase();
  if (!query) return { stores: [], matchedCategory: null };

  const words = query.split(/\s+/).filter((w) => w.length > 0 && !STOPWORDS.has(w));
  const signalTerms = words.length > 0 ? words : [query];

  const matchesTerms = (field: string) =>
    signalTerms.some((term) => field.includes(term) || query.includes(field));

  const byName = STORES_DATA.filter((store) => matchesTerms(store.name.toLowerCase()));
  if (byName.length > 0) return { stores: byName.slice(0, 6), matchedCategory: null };

  const matchedCategoryName = Object.keys(CATEGORY_SLUGS).find((name) => matchesTerms(name.toLowerCase()));

  const byCategory = STORES_DATA.filter((store) =>
    matchesTerms(store.category.toLowerCase()) ||
    store.categories.some((c) => matchesTerms(c.toLowerCase()))
  );

  if (byCategory.length === 0) return { stores: [], matchedCategory: null };

  const categoryName = matchedCategoryName ?? byCategory[0].category;
  const slug = CATEGORY_SLUGS[categoryName];

  return {
    stores: byCategory.slice(0, 6),
    matchedCategory: slug ? { name: categoryName, slug } : null,
  };
}
