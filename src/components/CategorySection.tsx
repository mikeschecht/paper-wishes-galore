
import React from 'react';
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: 1,
    name: 'Birthday Cards',
    description: 'Celebrate another year of life with our beautiful birthday card collection.',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    bgColor: 'bg-blush/10',
  },
  {
    id: 2,
    name: 'Wedding Cards',
    description: 'Celebrate the special union with our elegant wedding card collection.',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    bgColor: 'bg-sage/10',
  },
  {
    id: 3,
    name: 'Thank You Cards',
    description: 'Express your gratitude with our thoughtful thank you card collection.',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80',
    bgColor: 'bg-powder/10',
  }
];

const CategorySection = () => {
  return (
    <section id="categories" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Browse by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of handcrafted cards for every occasion and celebration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className={`rounded-lg overflow-hidden card-shadow transition-transform duration-300 hover:translate-y-[-8px] ${category.bgColor}`}
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-playfair mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Button variant="link" className="p-0 text-gray-800 hover:text-blush font-medium">
                  Shop Now →
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-gray-300 text-gray-800 hover:bg-gray-100">
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
