import { formatPrice } from "@/helpers/formatPrice";
import Image from "next/image";
import { Product } from "@/app/generated/prisma";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
      <div className="relative w-full h-48 mb-4">
        {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            fill
            className="object-cover rounded-md"
          />
        )}
      </div>
      <h2 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h2>
      <p className="text-gray-600">{formatPrice(product.price)}</p>
      <p className="text-gray-600">{product.description}</p>
    </div>
  );
}
