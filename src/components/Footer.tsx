import React from 'react';
import { socialLinks } from '../data/socialLinks';
import { Instagram, Dribbble, Linkedin, Figma } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Instagram':
        return <Instagram size={20} />;
      case 'Dribbble':
        return <Dribbble size={20} />;
      case 'Linkedin':
        return <Linkedin size={20} />;
      case 'Figma':
        return <Figma size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold tracking-tight">
              Studio<span className="text-blue-400">Illustra</span>
            </h3>
            <p className="mt-4 text-gray-300 max-w-md">
              Creating meaningful visual stories through illustration. From concept to final artwork, bringing imagination to life.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-blue-600 rounded-full transition-colors"
                  aria-label={link.name}
                >
                  {getIconComponent(link.icon)}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-blue-400 transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Digital Illustration</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Character Design</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Editorial Art</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Book Covers</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Concept Art</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {currentYear} StudioIllustra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;