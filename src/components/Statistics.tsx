import React from 'react';
import { Users, Award, BookOpen, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from './animations/FadeIn';

export function Statistics() {
  const stats = [
    { name: 'Students Trained', value: '5000+', icon: Users },
    { name: 'Expert Instructors', value: '50+', icon: Award },
    { name: 'Courses Offered', value: '100+', icon: BookOpen },
    { name: 'Success Stories', value: '1000+', icon: Trophy },
  ];

  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/10 rounded-lg p-6 text-center"
              >
                <stat.icon className="h-8 w-8 mx-auto text-white" />
                <p className="mt-4 text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-blue-100">{stat.name}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}