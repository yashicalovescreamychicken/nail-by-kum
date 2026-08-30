import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="bg-nail-stripes relative overflow-hidden py-32 text-nail-maroon">
      {/* Decorative sparkles */}
      <div className="absolute top-10 left-10 text-4xl opacity-30">✨</div>
      <div className="absolute bottom-10 right-10 text-4xl opacity-30">💎</div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          className="mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <div className="inline-block bg-nail-cream rounded-full p-8 border-4 border-nail-maroon">
            <div className="text-7xl">💅</div>
          </div>
        </motion.div>
        
        <motion.h1
          className="text-6xl md:text-7xl font-bold mb-4 font-serif"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nail by Kum
        </motion.h1>
        <motion.p
          className="text-2xl md:text-3xl mb-8 font-serif italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Custom nail art designs for your unique style
        </motion.p>
        <motion.a
          href="/shop"
          className="inline-block bg-nail-maroon text-nail-cream px-10 py-4 rounded-full font-bold text-xl font-serif hover:bg-nail-dark-red transition shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Shop Now ✨
        </motion.a>
      </div>
    </div>
  );
}