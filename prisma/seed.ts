import { PrismaClient } from "../app/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // Delete all products and categories
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  // Create categories
  const electronics = await prisma.category.create({
    data: {
      name: "Electronics",
      slug: "electronics",
    },
  });

  const clothing = await prisma.category.create({
    data: {
      name: "Clothing",
      slug: "clothing",
    },
  });

  const home = await prisma.category.create({
    data: {
      name: "Home",
      slug: "home",
    },
  });

  await prisma.product.createMany({
    data: [
      {
        id: "1",
        name: "Smart Watch",
        description:
          "The Nike Running Shoes are designed for comfort and performance. They are made with a durable material and have a stylish design.",
        price: 100.99,
        image:
          "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        categoryId: electronics.id,
        slug: "smart-watch",
      },
      {
        id: "2",
        name: "Gucci Sunglasses",
        description:
          "The Gucci Sunglasses are designed for comfort and performance. They are made with a durable material and have a stylish design.",
        price: 200.99,
        image:
          "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        categoryId: clothing.id,
        slug: "gucci-sunglasses",
      },
      {
        id: "3",
        name: "Razer Headset",
        description:
          "The Razer Headset is designed for comfort and performance. They are made with a durable material and have a stylish design.",
        price: 350.99,
        image:
          "https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        categoryId: electronics.id,
        slug: "razer-headset",
      },
      {
        id: "4",
        name: "Cannon Camera",
        description:
          "The Cannon Camera is designed for comfort and performance. They are made with a durable material and have a stylish design.",
        price: 1000.99,
        image:
          "https://images.unsplash.com/photo-1524135220673-c731600a1a50?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        categoryId: electronics.id,
        slug: "cannon-camera",
      },
      {
        id: "5",
        name: "PS5 Gaming Console",
        description:
          "The PS5 Gaming Console is designed for comfort and performance. They are made with a durable material and have a stylish design.",
        price: 500.99,
        image:
          "https://images.unsplash.com/photo-1592840496694-26d035b52b48?q=80&w=825&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        categoryId: electronics.id,
        slug: "ps5-gaming-console",
      },
    ],
  });
}

main()
  .then(async () => {
    console.log("Seeding complete");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
