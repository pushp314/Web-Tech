import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FadeIn } from './animations/FadeIn';
import { ScaleIn } from './animations/ScaleIn';
import { CourseCard } from './CourseCard';
import { coursesData } from '../data/coursesData';

export function Courses() {
  const navigate = useNavigate();

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Courses
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Comprehensive training programs to boost your career
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {coursesData.map((course, index) => (
            <ScaleIn key={course.id} delay={index * 0.1}>
              <CourseCard
                title={course.title}
                description={course.description}
                duration={course.duration}
                level={course.level}
                image={course.image}
                onClick={() => navigate(`/courses/${course.id}`)}
              />
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
}