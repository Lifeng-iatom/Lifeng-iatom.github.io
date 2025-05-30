import React, { useState } from 'react';
import { projects } from '../data/projects';
import { Project } from '../types';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">Portfolio</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore my latest works and creative projects
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  
  return (
    <motion.div 
      className="group relative overflow-hidden rounded-xl shadow-lg bg-white dark:bg-gray-900"
      variants={itemVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="aspect-w-16 aspect-h-12 relative overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {project.featured && (
          <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold uppercase px-2 py-1 rounded">
            Featured
          </span>
        )}
      </div>
      
      <div className="p-6">
        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{project.category}</span>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">{project.description}</p>
        
        <div className={`mt-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button 
            onClick={() => navigate(`/project/${project.id}`)}
            className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            View Details
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;