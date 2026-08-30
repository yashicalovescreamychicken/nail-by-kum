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
    <section className="py-20 bg-nail-cream">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-6xl font-great-vibes text-center mb-4 text-nail-maroon"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Featured Designs
        </motion.h2>
        <p className="text-center text-nail-maroon mb-12 text-lg font-serif italic">Handpicked selections for every occasion</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition border-4 border-nail-pink"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="text-6xl text-center py-12 bg-gradient-to-r from-nail-pink to-nail-light-pink relative">
                <div className="absolute top-2 right-2 text-3xl">✨</div>
                {product.image}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-great-vibes mb-2 text-nail-maroon">{product.name}</h3>
                <p className="text-nail-maroon mb-4 font-serif italic">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-nail-maroon">{product.price}</span>
                  <button className="bg-nail-maroon text-nail-cream px-4 py-2 rounded-full hover:bg-nail-dark-red transition font-serif font-bold">
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
