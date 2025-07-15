import { formatPrice } from "@/helpers/formatPrice";
import { Product } from "@/app/generated/prisma";
import Image from "next/image";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="pt-0 overflow-hidden">
      <div className="relative w-full h-48 mb-4">
        {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            fill
            className="object-cover"
          />
        )}
      </div>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <p>{formatPrice(product.price)}</p>
      </CardFooter>
    </Card>
  );
}
