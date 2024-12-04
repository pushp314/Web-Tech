import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from './animations/FadeIn';

export function Projects() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform built with MERN stack, featuring user authentication, product management, and payment integration.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, built using React and Firebase.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
    },
    {
      title: 'AI Learning Platform',
      description: 'An educational platform with AI-powered learning recommendations and progress tracking.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['Python', 'TensorFlow', 'Django', 'React'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Student Projects
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Showcase of amazing projects built by our students
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  className="h-48 w-full object-cover"
                  src={project.image}
                  alt={project.title}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <p className="mt-2 text-gray-600">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm text-blue-600 bg-blue-100 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="#"
                      className="flex items-center text-blue-600 hover:text-blue-500"
                    >
                      <Github className="h-5 w-5 mr-2" />
                      Code
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="#"
                      className="flex items-center text-blue-600 hover:text-blue-500"
                    >
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}