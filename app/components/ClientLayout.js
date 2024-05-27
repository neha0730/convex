"use client"; 

import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import { CartProvider } from "../context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({ children }) {
  return (
    <div className={inter.className}>
      <CartProvider>
        <Navbar />
        {children}
      </CartProvider>
    </div>
  );
}
