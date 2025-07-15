import ProductCard from "./_components/ProductCard";
import { prisma } from "@/lib/prisma";

export default async function HomePage() {
  // Fetch products from the database
  const products = await prisma.product.findMany();
  console.log(products);

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Home</h1>
      <p>Showing {products.length} products</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
