import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-nail-pink to-nail-purple py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to Nail by Kum
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Custom nail art designs for your unique style
        </motion.p>
        <motion.a
          href="/shop"
          className="inline-block bg-white text-nail-pink px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Shop Now
        </motion.a>
      </div>
    </div>
  );
}