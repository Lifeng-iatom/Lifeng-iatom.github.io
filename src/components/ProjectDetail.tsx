import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-24"
    >
      <button
        onClick={() => navigate('/')}
        className="mb-8 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
      >
        <ArrowLeft className="mr-2" size={20} />
        Back to Portfolio
      </button>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="relative">
          <div className="aspect-w-16 aspect-h-12 rounded-xl overflow-hidden shadow-2xl">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          {project.featured && (
            <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              Featured Project
            </div>
          )}
        </div>

        <div>
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {project.category}
          </span>
          <h1 className="text-4xl font-serif font-bold mt-2 mb-6">{project.title}</h1>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
            
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Project Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 dark:text-white">Category</h3>
                  <p className="text-gray-600 dark:text-gray-300">{project.category}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 dark:text-white">Project ID</h3>
                  <p className="text-gray-600 dark:text-gray-300">#{project.id}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;