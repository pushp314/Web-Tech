import React from 'react';
import { motion } from 'framer-motion';
import { Clock, BookOpen, ChevronRight } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  level: string;
  image: string;
  onClick: () => void;
}

export function CourseCard({
  title,
  description,
  duration,
  level,
  image,
  onClick
}: CourseCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 mr-1" />
            {duration}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600 line-clamp-2">{description}</p>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <BookOpen className="h-4 w-4 mr-1" />
            {level}
          </div>
          <motion.div
            whileHover={{ x: 5 }}
            className="flex items-center text-blue-600"
          >
            View Details
            <ChevronRight className="h-4 w-4 ml-1" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}