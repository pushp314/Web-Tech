import React from 'react';
import { BookOpen, Code, Rocket } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './animations/FadeIn';

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative pt-20 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <FadeIn>
            <motion.h1 
              className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.span 
                className="block"
                animate={{ 
                  color: ['#1E40AF', '#3B82F6', '#1E40AF'],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Transform Your Career with
              </motion.span>
              <motion.span
                className="block text-blue-600"
                animate={{ 
                  textShadow: [
                    "0 0 0px rgba(59,130,246,0.5)",
                    "0 0 20px rgba(59,130,246,0.8)",
                    "0 0 0px rgba(59,130,246,0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Web Tech Academy
              </motion.span>
            </motion.h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Master the latest technologies with our comprehensive courses in Web Development, App Development, SEO, and Digital Marketing.
            </p>
          </FadeIn>

          <motion.div 
            className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="rounded-md shadow">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#courses"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
              >
                Explore Courses
              </motion.a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </motion.div>
    </div>
  );
}