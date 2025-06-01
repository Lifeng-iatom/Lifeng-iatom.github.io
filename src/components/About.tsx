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
                  <p className="text-xl font-bold text-gray-900 dark:text-white">3 Years Experience</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Hello! I’m Avocado Cat, a digital artist and illustrator based in Toulouse, France. With a background in Art History from the University of Leeds and a Master’s degree from the University of Toronto, my work sits at the intersection of art, science, and storytelling.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                I specialize in botanical and paleontological illustration—bringing to life the hidden worlds of plants, ancient ecosystems, and natural history through detailed, research-driven images. My passion lies in making science accessible and enchanting, whether through scientific diagrams or whimsical children’s picture books.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                One of my proudest collaborations is with Mango Dog, a paleobotanist and my creative partner at the Muséum national d’Histoire naturelle in Paris, French. Together, we create illustrated stories that weave art and plant science to inspire curiosity and wonder in audiences of all ages.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                When I’m not drawing microscopic plant structures or prehistoric landscapes, I’m often inspired by my cat, Dinger, who keeps me company during long creative sessions. Dinger even stars in some of my children’s books, like the story of his adventures exploring magical underground worlds with a glowing grape seed.\n
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Feel free to explore my portfolio, follow my creative journey on Instagram at @avocadocat_illustration, or get in touch for commissions and collaborations!
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