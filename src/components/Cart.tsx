import React, { useState } from 'react';

export default function Cart() {
  const [cartItems] = useState([]);

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-2xl text-gray-600 mb-6">Your cart is empty</p>
        <a
          href="/shop"
          className="inline-block bg-nail-pink text-white px-8 py-3 rounded-lg font-bold hover:bg-nail-purple transition"
        >
          Continue Shopping
        </a>
      </div>
    );
  }

  return (
    <div className="py-12">
      {/* Cart items would be displayed here */}
      <p>Cart functionality coming soon!</p>
    </div>
  );
}