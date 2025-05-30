import React from 'react';
import { Palette, Award, Clock, Image } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Artist at work" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-64">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 text-white p-3 rounded-lg">
                  <Award size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Over</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">10 Years Experience</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                I'm a passionate illustrator with over 10 years of experience creating unique visual narratives across various mediums. My work blends traditional techniques with digital innovation to create captivating images that tell compelling stories.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                My illustrations have been featured in magazines, books, and advertising campaigns globally. I believe in the power of visual storytelling to connect, inspire, and transform perspectives.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <Palette className="text-blue-600 dark:text-blue-400 mb-4" size={28} />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Creative Vision</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Bringing unique perspectives and creative solutions to every project.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <Image className="text-blue-600 dark:text-blue-400 mb-4" size={28} />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Technical Skill</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Mastery of both traditional and digital illustration techniques.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <Clock className="text-blue-600 dark:text-blue-400 mb-4" size={28} />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Timely Delivery</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Committed to meeting deadlines without compromising quality.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <Award className="text-blue-600 dark:text-blue-400 mb-4" size={28} />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Award Winning</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Recognized with multiple industry awards for outstanding work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;