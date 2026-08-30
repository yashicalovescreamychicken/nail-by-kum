import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-nail-cream shadow-lg sticky top-0 z-50 border-b-4 border-nail-maroon">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="text-3xl font-great-vibes text-nail-maroon font-bold flex items-center space-x-2 hover:text-nail-pink transition">
            <span className="text-4xl">💅</span>
            <span>Nail by Kum</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-nail-maroon hover:text-nail-pink font-serif font-bold transition">Home</a>
            <a href="/shop" className="text-nail-maroon hover:text-nail-pink font-serif font-bold transition">Shop</a>
            <a href="#about" className="text-nail-maroon hover:text-nail-pink font-serif font-bold transition">About</a>
            <a href="#contact" className="text-nail-maroon hover:text-nail-pink font-serif font-bold transition">Contact</a>
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a href="/cart" className="relative">
              <svg className="w-6 h-6 text-nail-maroon hover:text-nail-pink transition cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m10 0h2m-2 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-nail-maroon text-nail-cream text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">0</span>
            </a>
            <button
              className="md:hidden text-2xl text-nail-maroon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 bg-nail-light-pink rounded-b-lg">
            <a href="/" className="block py-2 text-nail-maroon hover:text-nail-pink font-serif font-bold">Home</a>
            <a href="/shop" className="block py-2 text-nail-maroon hover:text-nail-pink font-serif font-bold">Shop</a>
            <a href="#about" className="block py-2 text-nail-maroon hover:text-nail-pink font-serif font-bold">About</a>
            <a href="#contact" className="block py-2 text-nail-maroon hover:text-nail-pink font-serif font-bold">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}
