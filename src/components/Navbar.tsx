import React, { useState } from 'react';

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
              <svg className="w-6 h-6 hover:text-nail-pink transition cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m10 0h2m-2 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-nail-pink text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </a>
            <button
              className="md:hidden text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? '✕' : '☰'}
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