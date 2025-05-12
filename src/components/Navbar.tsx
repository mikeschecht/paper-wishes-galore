
import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center">
            <h1 className="text-2xl font-bold font-playfair tracking-tight text-gray-900">Elegant Cards</h1>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-blush transition-colors duration-200">Home</a>
          <a href="#categories" className="text-gray-700 hover:text-blush transition-colors duration-200">Categories</a>
          <a href="#featured" className="text-gray-700 hover:text-blush transition-colors duration-200">Featured</a>
          <a href="#about" className="text-gray-700 hover:text-blush transition-colors duration-200">About</a>
          <a href="#contact" className="text-gray-700 hover:text-blush transition-colors duration-200">Contact</a>
        </nav>

        {/* Cart Button */}
        <div className="flex items-center">
          <Button variant="ghost" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-2 -right-2 bg-blush text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">0</span>
          </Button>

          {/* Mobile menu button */}
          <button 
            className="ml-4 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? 
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> :
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blush">Home</a>
            <a href="#categories" className="block px-3 py-2 text-gray-700 hover:text-blush">Categories</a>
            <a href="#featured" className="block px-3 py-2 text-gray-700 hover:text-blush">Featured</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blush">About</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blush">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
