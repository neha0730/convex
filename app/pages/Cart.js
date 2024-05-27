"use client"; 
import { checkout } from "../components/Checkout";
import { useCart } from "../context/CartContext";
import Image from "next/image";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="lg:flex">
        <div className="lg:w-3/4">
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => (
                  <tr key={item.id} className="border-b">
                    <td className="p-4">
                      <Image src={item.image} alt={item.name} width={50} height={50} />
                    </td>
                    <td className="p-4">{item.name}</td>
                    <td className="p-4">${item.price.toFixed(2)}</td>
                    <td className="p-4">
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="w-16 border p-2"
                        min="1"
                      />
                    </td>
                    <td className="p-4">${(item.price * item.quantity).toFixed(2)}</td>
                    <td className="p-4">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div className="lg:w-1/4 p-8 bg-gray-100 rounded-lg lg:ml-8">
          <h2 className="text-2xl font-bold mb-4">Summary</h2>
          <p className="text-lg font-semibold mb-4">Total: ${total.toFixed(2)}</p>
          <button 
  className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
  onClick={() => {
    checkout({
      lineItems: [{ price: "300", quantity: 1 }]
    });
  }}
>
  Checkout
</button>
        </div>
      </div>
    </main>
  );
} 
