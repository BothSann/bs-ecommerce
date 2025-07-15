import { prisma } from "@/lib/prisma";
import ProductCard from "./ProductCard";

export default async function ProductList() {
  // Fetch products from the database
  const products = await prisma.product.findMany();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
