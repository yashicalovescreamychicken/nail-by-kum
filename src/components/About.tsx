import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">About Nail by Kum</h2>
        <div className="max-w-3xl mx-auto text-center text-gray-700">
          <p className="text-lg mb-6">
            Welcome to Nail by Kum, your destination for premium customized nail art designs.
          </p>
          <p className="text-lg mb-6">
            Each nail is carefully crafted with attention to detail, using high-quality materials to ensure durability and stunning aesthetics.
          </p>
          <p className="text-lg">
            We believe that nails are an extension of your personality, and our designs reflect that philosophy.
          </p>
        </div>
      </div>
    </section>
  );
}