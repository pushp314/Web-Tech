import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
}

export function InfiniteTestimonials() {
  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      role: 'Full Stack Developer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      content: 'The MERN stack course was incredibly comprehensive. I went from knowing basic JavaScript to building full-stack applications.',
    },
    {
      name: 'Michael Chen',
      role: 'Python Developer',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      content: 'The Python course was exactly what I needed to transition into data science. The instructors were knowledgeable and always available.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Digital Marketing Specialist',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      content: 'The digital marketing course gave me practical skills I use daily. The SEO strategies I learned have helped significantly.',
    },
    // Duplicate testimonials for infinite scroll effect
    {
      name: 'David Kim',
      role: 'UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      content: 'The design principles and practical exercises helped me improve my skills dramatically. Highly recommended!',
    },
    {
      name: 'Lisa Wang',
      role: 'Mobile Developer',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      content: 'The mobile development bootcamp was intense but rewarding. I now have the confidence to build complex applications.',
    },
  ];

  // Duplicate the testimonials array for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Student Success Stories
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Hear from our graduates who transformed their careers
          </p>
        </div>

        <div className="relative">
          <motion.div
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="flex gap-8"
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[400px] bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mt-4 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-gray-600">{testimonial.content}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}