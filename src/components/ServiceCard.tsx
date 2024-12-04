import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  onClick: () => void;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  features,
  onClick
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-lg shadow-lg p-6 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center">
        <div className="rounded-lg p-3 bg-blue-50">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="ml-4 text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      
      <p className="mt-4 text-gray-600">{description}</p>
      
      <ul className="mt-4 space-y-2">
        {features.slice(0, 3).map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-500">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      
      <motion.div
        whileHover={{ x: 5 }}
        className="mt-6 flex items-center text-blue-600"
      >
        Learn More
        <ChevronRight className="h-4 w-4 ml-1" />
      </motion.div>
    </motion.div>
  );
}