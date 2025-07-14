# Suspense & UI Components

## Streaming with Suspense

- Next.js uses React Suspense for progressive loading
- Components can stream data from server to client
- Loading states show while data is fetching
- Content appears progressively as it's ready

Example with Suspense:

```tsx
// Wrap data-fetching components in Suspense
<Suspense fallback={<ProductsSkeleton />}>
  <Products page={page} />
</Suspense>;

// Async component that triggers Suspense
async function Products({ page }: { page: number }) {
  const products = await prisma.product.findMany({
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
```

Key concepts:

- `fallback` shows during loading
- Async components trigger Suspense
- Server streams HTML progressively
- No client-side data fetching needed

## Skeleton Components

- Match dimensions of final content
- Prevent layout shift during loading
- Use same component structure
- Animate with pulse effect

Example skeleton:

```tsx
// Single product card skeleton
export function ProductCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video">
        <Skeleton className="h-full w-full" />
      </div>
      <CardHeader>
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-full mt-2" />
      </CardHeader>
      <CardFooter>
        <Skeleton className="h-5 w-24" />
      </CardFooter>
    </Card>
  );
}

// Grid of skeletons
export default function ProductsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}
```

Best practices:

- Match real component hierarchy
- Use consistent spacing/dimensions
- Show approximate content shapes
- Keep animations subtle

## Pagination with Server Components

- URL parameters control current page
- Server handles data fetching
- Loading states during page transitions
- Maintains scroll position

Example implementation:

```tsx
// Page component with pagination
export default async function Page({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = Number(searchParams.page) || 1;
  const total = await prisma.product.count();
  const totalPages = Math.ceil(total / pageSize);

  return (
    <>
      <Suspense key={page} fallback={<ProductsSkeleton />}>
        <Products page={page} />
      </Suspense>

      <Pagination>
        <PaginationContent>
          <PaginationPrevious href={`?page=${page - 1}`} />
          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationLink
              key={i}
              href={`?page=${i + 1}`}
              isActive={page === i + 1}
            >
              {i + 1}
            </PaginationLink>
          ))}
          <PaginationNext href={`?page=${page + 1}`} />
        </PaginationContent>
      </Pagination>
    </>
  );
}
```

Important details:

- `key` prop forces Suspense reset
- Links update URL params
- Server re-renders on page change
- Maintains browser history
