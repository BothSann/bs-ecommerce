import { Product } from "@/lib/mocks-data";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <div className="relative w-full h-48 mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <h2 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h2>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <p className="text-gray-600">{product.description}</p>
    </div>
  );
}
