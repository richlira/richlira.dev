import ProductCard from '@/components/products/ProductCard';

export default function ProductsPage() {
  return (
    <>
      <header className="text-center mb-12">
        <h1 className="text-4xl font-semibold mb-3">Products</h1>
        <p className="text-lg opacity-70">Apps and tools I&apos;ve built</p>
      </header>

      <div className="products-grid">
        <ProductCard
          name="Afina AI"
          tagline="The prompt engineering lab for AI developers"
          slug="afina-ai"
          platform="ios"
          icon="/products/afina-ai/icon.png"
        />
        <ProductCard
          name="MeetingMind"
          tagline="AI-powered meeting assistant that listens, questions, and summarizes"
          slug="meeting-mind"
          platform="ios"
          icon="/products/meeting-mind/icon.png"
        />
      </div>
    </>
  );
}
