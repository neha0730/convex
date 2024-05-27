"use client"; // This marks the file as a client component

import Image from "next/image";
import "./home/homepage.css";
import { useCart } from "./context/CartContext";

export default function Home() {
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: 'Product 1', price: 29.99, image: '/car1.jpg' },
    { id: 2, name: 'Product 2', price: 49.99, image: '/car2.jpg' },
    { id: 3, name: 'Product 3', price: 19.99, image: '/car3.jpg' },
  ];

  return (
    <main className="">
      <section className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded-lg">
            <Image src={product.image} alt={product.name} width={300} height={200} />
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}
