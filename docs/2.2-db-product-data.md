# Database & Product Data

## Prisma Schema

- Prisma is our type-safe ORM (Object-Relational Mapping)
- Schema defines the structure of our database
- Provides automatic TypeScript type generation
- Handles database migrations and seeding

Basic schema example:

```prisma
model Product {
  id          String   @id @default(cuid())
  name        String
  price       Decimal  @db.Decimal(10, 2)
  description String
  images      String[]
  visible     Boolean  @default(true)
}
```

Key concepts:

- `@id`: Marks a field as the primary key
- `@default`: Sets default values
- `@db.Decimal`: Specifies exact database type
- `String[]`: Array type for multiple values

## Database Relations

- Relations define connections between different models
- Prisma handles foreign keys and joins automatically
- Types are generated for related data queries

Example relation:

```prisma
model Category {
  id       String    @id @default(cuid())
  name     String
  slug     String    @unique
  products Product[]
}

model Product {
  id          String   @id
  category    Category @relation(fields: [categoryId], references: [id])
  categoryId  String
}
```

Understanding relations:

- One-to-Many: A category can have many products
- Foreign Keys: `categoryId` links to the Category's `id`
- `@relation`: Defines how models are connected
- `@unique`: Ensures no duplicate values

## Server Actions

- Server Actions are server-side functions in Next.js
- They can safely interact with the database
- Provide type-safe database operations
- Run on the server, keeping sensitive operations secure

Example action:

```typescript
// lib/actions/index.ts
"use server";

export async function getProducts() {
  const products = await prisma.product.findMany({
    where: { visible: true },
    include: { category: true },
    orderBy: { createdAt: "desc" },
  });
  return products;
}
```

Key features:

- `"use server"`: Marks code as server-only
- Type-safe queries with Prisma
- Automatic relation loading with `include`
- Built-in error handling

## Database Seeding

- Seeding populates the database with initial data
- Useful for development and testing
- Ensures consistent data across environments
- Can be run with `npx prisma db seed`

Example seed script:

```typescript
// prisma/seed.ts
const products = [
  {
    name: "Wireless Headphones",
    description: "Premium noise-cancelling headphones",
    price: 199.99,
    images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e"],
    slug: "wireless-headphones",
    categoryId: "electronics-id",
    inventory: 25,
  },
];

async function main() {
  // Clean existing data
  await prisma.product.deleteMany();

  // Insert new data
  for (const product of products) {
    await prisma.product.create({ data: product });
  }
}
```

Important concepts:

- Clean existing data before seeding
- Create related data (categories) first
- Handle foreign key relationships
- Include error handling

## Prisma Client

- Prisma Client is the auto-generated database client
- Provides type-safe database queries
- Handles database connections efficiently
- Supports complex filters and relations

Example usage:

```typescript
// Fetch products with category
const products = await prisma.product.findMany({
  where: {
    visible: true,
    price: { lt: 100 }, // less than 100
  },
  include: {
    category: true,
  },
  orderBy: {
    createdAt: "desc",
  },
});

// Create a new product
const product = await prisma.product.create({
  data: {
    name: "New Product",
    price: 29.99,
    category: {
      connect: { id: categoryId },
    },
  },
});
```

Key operations:

- `findMany`: Get multiple records
- `create`: Insert new records
- `where`: Filter conditions
- `include`: Load relations
- `orderBy`: Sort results

## Common Patterns

### Decimal Handling

```typescript
// Price is returned as Decimal string
const product = await prisma.product.findFirst();
const price = Number(product.price); // Convert to number for formatting
```

### Error Handling

```typescript
try {
  const products = await prisma.product.findMany();
} catch (error) {
  console.error("Database error:", error);
  throw new Error("Failed to fetch products");
}
```

### Singleton Pattern

```typescript
// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
```

## Development Tools

Helpful commands:

```bash
# Generate Prisma Client
npx prisma generate

# Create migration
npx prisma migrate dev

# Reset database
npx prisma migrate reset

# View/edit data
npx prisma studio

# Format schema
npx prisma format
```

Best practices:

- Always run migrations for schema changes
- Use `prisma studio` for data inspection
- Keep migrations small and focused
- Handle decimals as numbers in the UI
- Implement proper error handling
