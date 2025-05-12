
import React from 'react';
import { Button } from "@/components/ui/button";
import { Star } from 'lucide-react';

const featuredCards = [
  {
    id: 1,
    name: 'Floral Birthday Card',
    description: 'Elegant birthday card with hand-painted flowers.',
    price: 8.99,
    rating: 4.9,
    reviews: 28,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 2,
    name: 'Wedding Congratulations',
    description: 'Premium wedding card with gold foil details.',
    price: 12.99,
    rating: 5.0,
    reviews: 17,
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 3,
    name: 'Thank You Card',
    description: 'Simple and elegant thank you card.',
    price: 6.99,
    rating: 4.8,
    reviews: 42,
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 4,
    name: 'Anniversary Love',
    description: 'Special anniversary card with embossed details.',
    price: 9.99,
    rating: 4.9,
    reviews: 36,
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
  }
];

const FeaturedCards = () => {
  return (
    <section id="featured" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-2">Featured Cards</h2>
            <p className="text-gray-600">Our most popular handcrafted designs.</p>
          </div>
          <Button variant="link" className="text-gray-800 hover:text-blush font-medium mt-4 md:mt-0">
            View All Products →
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredCards.map((card) => (
            <div key={card.id} className="group">
              <div className="rounded-lg overflow-hidden card-shadow mb-4 bg-white relative">
                <div className="absolute top-4 right-4 z-10">
                  <button className="p-2 bg-white rounded-full shadow-sm hover:bg-blush hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="w-full bg-white text-gray-800 hover:bg-blush hover:text-white transition-colors">
                    Quick View
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">{card.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{card.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">${card.price}</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-gold fill-gold" />
                    <span className="text-sm ml-1">{card.rating} <span className="text-gray-500">({card.reviews})</span></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCards;
