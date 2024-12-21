export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "MacBook Pro 16\"",
    price: 2499,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1000",
    category: "Laptops",
    description: "Apple M2 Pro chip, 16GB RAM, 512GB SSD"
  },
  {
    id: "2",
    name: "iPhone 15 Pro",
    price: 999,
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=1000",
    category: "Smartphones",
    description: "A17 Pro chip, 256GB storage, Titanium"
  },
  {
    id: "3",
    name: "Apple Watch Series 9",
    price: 399,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&q=80&w=1000",
    category: "Smartwatches",
    description: "GPS, 45mm, Aluminum case"
  },
  {
    id: "4",
    name: "Sony WH-1000XM5",
    price: 399,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=1000",
    category: "Audio",
    description: "Wireless Noise Cancelling Headphones"
  },
  {
    id: "5",
    name: "Dell XPS 15",
    price: 1999,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=1000",
    category: "Laptops",
    description: "Intel i9, 32GB RAM, 1TB SSD"
  },
  {
    id: "6",
    name: "Samsung Galaxy S24 Ultra",
    price: 1199,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=1000",
    category: "Smartphones",
    description: "Snapdragon 8 Gen 3, 512GB storage"
  }
];