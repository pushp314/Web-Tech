import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from './animations/FadeIn';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Full Stack Developer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      content: 'The MERN stack course was incredibly comprehensive. I went from knowing basic JavaScript to building full-stack applications. Now I work as a developer at a tech startup.',
    },
    {
      name: 'Michael Chen',
      role: 'Python Developer',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      content: 'The Python course was exactly what I needed to transition into data science. The instructors were knowledgeable and always available to help.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Digital Marketing Specialist',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      content: "The digital marketing course gave me practical skills I use daily. The SEO and social media strategies I learned have helped me grow our company's online presence significantly.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Student Success Stories
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Hear from our graduates who transformed their careers
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-lg p-6"
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
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}