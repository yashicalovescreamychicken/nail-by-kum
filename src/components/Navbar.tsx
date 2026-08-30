import React, { useState } from 'react';
import { FaShoppingCart, FaMenu, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-nail-pink">
            💅 Nail by Kum
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-nail-pink transition">Home</a>
            <a href="/shop" className="hover:text-nail-pink transition">Shop</a>
            <a href="#about" className="hover:text-nail-pink transition">About</a>
            <a href="#contact" className="hover:text-nail-pink transition">Contact</a>
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a href="/cart" className="relative">
              <FaShoppingCart size={24} className="hover:text-nail-pink transition" />
              <span className="absolute -top-2 -right-2 bg-nail-pink text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </a>
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes size={24} /> : <FaMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="/" className="block py-2 hover:text-nail-pink">Home</a>
            <a href="/shop" className="block py-2 hover:text-nail-pink">Shop</a>
            <a href="#about" className="block py-2 hover:text-nail-pink">About</a>
            <a href="#contact" className="block py-2 hover:text-nail-pink">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}