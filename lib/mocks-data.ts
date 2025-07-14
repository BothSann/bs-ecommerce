export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Nike Running Shoes",
    description:
      "The Nike Running Shoes are designed for comfort and performance. They are made with a durable material and have a stylish design.",
    price: 100,
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Shoes",
  },
  {
    id: "2",
    name: "Gucci Sunglasses",
    description:
      "The Gucci Sunglasses are designed for comfort and performance. They are made with a durable material and have a stylish design.",
    price: 200,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Sunglasses",
  },
  {
    id: "3",
    name: "Razer Headset",
    description:
      "The Razer Headset is designed for comfort and performance. They are made with a durable material and have a stylish design.",
    price: 350,
    image:
      "https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Headphones",
  },
  {
    id: "4",
    name: "Cannon Camera",
    description:
      "The Cannon Camera is designed for comfort and performance. They are made with a durable material and have a stylish design.",
    price: 1000,
    image:
      "https://images.unsplash.com/photo-1524135220673-c731600a1a50?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Camera",
  },
  {
    id: "5",
    name: "PS5 Gaming Console",
    description:
      "The PS5 Gaming Console is designed for comfort and performance. They are made with a durable material and have a stylish design.",
    price: 500,
    image:
      "https://images.unsplash.com/photo-1592840496694-26d035b52b48?q=80&w=825&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Gaming",
  },
];
