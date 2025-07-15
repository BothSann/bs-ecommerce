import { Suspense } from "react";
import ProductList from "./_components/ProductList";
import ProductCardSkeleton from "./_components/ProductCardSkeleton";

export default function HomePage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Home</h1>

      <Suspense fallback={<ProductCardSkeleton />}>
        <ProductList />
      </Suspense>
    </main>
  );
}
