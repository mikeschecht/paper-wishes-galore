
import React from 'react';
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden card-shadow">
              <img
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80"
                alt="Our workshop"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-lg bg-blush/20 -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-lg bg-sage/20 -z-10"></div>
          </div>
          
          {/* Content Side */}
          <div className="lg:pl-6">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">Our Handcrafted Story</h2>
            
            <div className="space-y-4 text-gray-600">
              <p>
                At Elegant Cards, we believe that every special moment deserves to be celebrated with a beautiful, thoughtfully designed card. Our journey began in 2015 when our founder, Emma, started creating handmade cards for friends and family.
              </p>
              <p>
                Today, our small team of skilled artisans create each card with the same care and attention to detail as those first handmade designs. We use only premium, sustainable materials and employ traditional crafting techniques alongside modern design.
              </p>
              <p>
                Every card that leaves our studio is a work of art, created to help you express your feelings and connect with your loved ones in a meaningful way.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="bg-sage/80 hover:bg-sage text-primary-foreground px-6 py-6 rounded-md font-medium">
                Our Process
              </Button>
              <Button variant="outline" className="border-sage text-gray-700 hover:bg-sage/10 px-6 py-6 rounded-md font-medium">
                Meet The Team
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
              <div className="text-center">
                <h3 className="text-3xl font-bold font-playfair text-blush">7+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold font-playfair text-sage">100%</h3>
                <p className="text-gray-600">Recyclable</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold font-playfair text-powder">5000+</h3>
                <p className="text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
