import React, { useState } from 'react';

const allProducts = [
  { id: 1, name: 'Classic French Tips', price: 15, category: 'classic' },
  { id: 2, name: 'Glitter Gradient', price: 18, category: 'glitter' },
  { id: 3, name: 'Marble Dream', price: 20, category: 'art' },
  { id: 4, name: 'Neon Vibes', price: 17, category: 'neon' },
  { id: 5, name: 'Floral Elegance', price: 19, category: 'floral' },
  { id: 6, name: 'Metallic Gold', price: 16, category: 'metallic' },
];

export default function ShopGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filtered = selectedCategory === 'all'
    ? allProducts
    : allProducts.filter(p => p.category === selectedCategory);

  return (
    <div>
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {['all', 'classic', 'glitter', 'art', 'neon', 'floral', 'metallic'].map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-full transition ${
              selectedCategory === cat
                ? 'bg-nail-pink text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <div className="bg-gradient-to-r from-nail-pink to-nail-purple h-48 rounded mb-4 flex items-center justify-center text-4xl">
              💅
            </div>
            <h3 className="text-lg font-bold mb-2">{product.name}</h3>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-nail-pink">${product.price}</span>
              <button className="bg-nail-pink text-white px-4 py-2 rounded hover:bg-nail-purple transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}