import { Prisma } from "@/app/generated/prisma";

export function formatPrice(price: number | string | Prisma.Decimal): string {
  let numericPrice: number;

  if (price instanceof Prisma.Decimal) {
    numericPrice = price.toNumber();
  } else {
    numericPrice = typeof price === "string" ? parseFloat(price) : price;
  }

  if (
    isNaN(numericPrice) ||
    numericPrice === null ||
    numericPrice === undefined
  ) {
    return "$0.00";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(numericPrice);
}
