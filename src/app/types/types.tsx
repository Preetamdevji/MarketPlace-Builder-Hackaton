export interface Product {
  _id: string;
  name: string;
  price: number;
  oldPrice: number;
  description: string;
  image: string; // This assumes "image.asset->url" returns a string URL
  category: string;
  discountPercent: number;
  isNew: boolean;
  colors: string[];
  sizes: string[];
  rating: number;
  slug: string; // "slug.current" is fetched as a string
}
