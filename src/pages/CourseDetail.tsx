import React from 'react';
import { motion } from 'framer-motion';
import { Clock, BookOpen, Target, Award, CheckCircle } from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';

interface CourseModule {
  title: string;
  topics: string[];
}

interface CourseDetailProps {
  title: string;
  description: string;
  duration: string;
  level: string;
  price: string;
  modules: CourseModule[];
  prerequisites: string[];
  outcomes: string[];
}

export function CourseDetail({ 
  title, 
  description, 
  duration, 
  level, 
  price, 
  modules, 
  prerequisites, 
  outcomes 
}: CourseDetailProps) {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeIn>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-12 text-white">
              <motion.h1 
                className="text-4xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {title}
              </motion.h1>
              <p className="mt-4 text-lg text-blue-100">{description}</p>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center">
                  <Clock className="h-6 w-6" />
                  <span className="ml-2">{duration}</span>
                </div>
                <div className="flex items-center">
                  <Target className="h-6 w-6" />
                  <span className="ml-2">{level}</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-6 w-6" />
                  <span className="ml-2">{price}</span>
                </div>
              </div>
            </div>

            <div className="px-8 py-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-gray-900">Course Modules</h2>
                  <div className="mt-6 space-y-6">
                    {modules.map((module, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gray-50 rounded-lg p-6"
                      >
                        <h3 className="text-lg font-semibold text-gray-900">{module.title}</h3>
                        <ul className="mt-4 space-y-2">
                          {module.topics.map((topic, i) => (
                            <li key={i} className="flex items-center text-gray-600">
                              <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h2 className="text-xl font-bold text-gray-900">Prerequisites</h2>
                    <ul className="mt-4 space-y-2">
                      {prerequisites.map((prereq, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                          {prereq}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 bg-gray-50 rounded-lg p-6">
                    <h2 className="text-xl font-bold text-gray-900">Learning Outcomes</h2>
                    <ul className="mt-4 space-y-2">
                      {outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Enroll Now
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}