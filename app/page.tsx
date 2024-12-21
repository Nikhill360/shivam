import ProductGrid from '@/components/ProductGrid';
import Hero from '@/components/Hero';
import FeaturedCategories from '@/components/FeaturedCategories';

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedCategories />
      <ProductGrid />
    </main>
  );
}