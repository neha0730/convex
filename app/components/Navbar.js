"use client"
import React from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";
const Navbar = () => {

  const { cart } = useCart();
  return (
    <>
  <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="text-white text-2xl font-bold">Convex Energy</div>
        </Link>
        <div>
          <Link href="/cart">
            <div className="text-white">
              Cart ({cart.length})
            </div>
          </Link>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;