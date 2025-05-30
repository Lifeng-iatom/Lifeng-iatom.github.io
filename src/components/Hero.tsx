import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 pb-32 overflow-hidden bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 md:pr-12">
            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 dark:text-white leading-tight">
                Bringing <span className="text-blue-600 dark:text-blue-400">imagination</span> to life through illustration
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl">
                Professional illustrator specializing in digital art, character design, and editorial illustration. Creating visual stories that captivate and inspire.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#portfolio"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-all shadow-lg hover:shadow-xl inline-flex items-center"
              >
                View Portfolio
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-transparent border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-md transition-all"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/3700513/pexels-photo-3700513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Featured illustration"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#portfolio" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <ArrowDown />
        </a>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-purple-200 dark:bg-purple-900/30 rounded-full blur-3xl opacity-30 -z-10"></div>
    </section>
  );
};

export default Hero;