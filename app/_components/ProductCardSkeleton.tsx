import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductCardSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <Card key={index} className="pt-0 overflow-hidden animate-pulse">
          <div className="relative w-full h-48 mb-4">
            <Skeleton className="w-full h-48" />
          </div>
          <CardHeader>
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
          </CardHeader>

          <CardFooter className="flex justify-between items-center">
            <Skeleton className="w-24 h-6" />
            <Skeleton className="w-20 h-6" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
