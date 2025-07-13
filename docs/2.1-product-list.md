# Product List

## Routing

- In Next.js, the file structure of your app folder determines your routes
- Files named page.tsx define routes that users can visit

Examples:

- app/page.tsx → / (root route)
- app/products/page.tsx → /products
- app/products/[id]/page.tsx → /products/123 (dynamic route)"

## Server Components

- Next.js uses React Server Components by default for all components
- Server Components run on the server and don't increase client-side JavaScript bundle
- They can directly access server resources like databases, filesystem, and APIs

Examples:

- Data fetching directly in components
- Secure API keys and tokens on the server
- Improved performance by reducing client-side JavaScript

## Type Safety

- TypeScript provides static type checking to catch errors before runtime
- Helps developers write more reliable and maintainable code
- Improves code readability and documentation through type definitions

Examples:

- Defining interfaces for API responses
- Type checking for component props
- Autocomplete and inline documentation in IDEs

```tsx
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};
```

Example products:

```tsx
export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    description:
      "Premium noise-cancelling wireless headphones with long battery life.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    category: "Electronics",
  },
  {
    id: "2",
    name: "Smart Watch",
    description:
      "Fitness tracker with heart rate monitoring and sleep analysis.",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    category: "Electronics",
  },
];
```

## Optimized Images

- Next.js provides the `<Image/>` component for automatic image optimization
- Optimizes images for performance, reducing bandwidth and improving load times
- Supports responsive images and lazy loading out of the box

Benefits:

- Automatic image resizing and format conversion
- Prevents layout shift with proper aspect ratio maintenance
- Improves Core Web Vitals scores

Example:

```tsx
<Image
  src={`${product.image}`}
  alt={product.name}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="object-cover"
/>
```

Explanation:

- `src`: URL of the image with query parameters for resizing and cropping
- `alt`: Alternative text for accessibility
- `fill`: Makes the image fill its parent container
- `sizes`: Defines image sizes for different viewport widths
- `className`: Applies CSS for proper image display

Understanding Viewport Width (vw):

- Viewport width is the visible area of the screen
- The `sizes` attribute informs the browser about the image's display size at different viewport widths, helping it select the appropriate image size to download
- Example: If an image is displayed in a container that is 50% of the viewport width on tablets, the `sizes` attribute can specify `(max-width: 768px) 50vw` to ensure the browser downloads an image optimized for that size
- This optimization reduces bandwidth usage and improves load times by serving appropriately sized images based on the device's screen size
