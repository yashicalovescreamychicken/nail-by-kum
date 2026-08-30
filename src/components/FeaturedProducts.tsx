import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Classic French Tips',
    price: '$15',
    image: '🌸',
    description: 'Timeless elegance',
  },
  {
    id: 2,
    name: 'Glitter Gradient',
    price: '$18',
    image: '✨',
    description: 'Sparkle and shine',
  },
  {
    id: 3,
    name: 'Marble Dream',
    price: '$20',
    image: '🎨',
    description: 'Artistic masterpiece',
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Designs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="text-6xl text-center py-8 bg-gradient-to-r from-nail-pink to-nail-purple">
                {product.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-nail-pink">{product.price}</span>
                  <button className="bg-nail-pink text-white px-4 py-2 rounded hover:bg-nail-purple transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}