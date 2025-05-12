
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-cream to-white py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left content */}
        <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-6 leading-tight">
            Beautiful Cards for <span className="text-blush">Special Moments</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Handcrafted greeting cards to celebrate life's most precious occasions. Made with premium paper and thoughtful designs.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-blush hover:bg-opacity-90 text-primary-foreground px-6 py-6 rounded-md font-medium">
              Shop Collection
            </Button>
            <Button variant="outline" className="border-blush text-gray-700 hover:bg-blush/10 px-6 py-6 rounded-md font-medium">
              Learn More
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-6">
            <div className="flex -space-x-2">
              <img
                className="w-8 h-8 rounded-full border-2 border-white"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=100&q=80"
                alt="User"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-white"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=100&q=80"
                alt="User"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-white"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=100&q=80"
                alt="User"
              />
            </div>
            <div className="text-sm text-gray-500">
              <span className="font-semibold text-gray-700">500+</span> happy customers
            </div>
          </div>
        </div>
        
        {/* Right image */}
        <div className="md:w-1/2 relative">
          <div className="relative z-10">
            <div className="relative rounded-lg overflow-hidden card-shadow bg-white p-2 rotate-3 transform transition-transform hover:rotate-1 duration-300">
              <img
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                alt="Elegant greeting card"
                className="rounded w-full h-auto"
              />
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/4 -right-12 w-24 h-24 bg-sage rounded-full opacity-50 blur-lg"></div>
          <div className="absolute -bottom-10 right-1/3 w-16 h-16 bg-powder rounded-full opacity-70 blur-md"></div>
          <div className="absolute top-1/2 -left-6 w-12 h-12 bg-blush rounded-full opacity-60 blur-md"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
