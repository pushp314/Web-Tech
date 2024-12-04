import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FadeIn } from '../components/animations/FadeIn';
import { CourseCard } from '../components/CourseCard';
import { coursesData } from '../data/coursesData';

export function CoursesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Our Courses
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Comprehensive training programs to boost your career
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {coursesData.map((course, index) => (
            <FadeIn key={course.id} delay={index * 0.1}>
              <CourseCard
                title={course.title}
                description={course.description}
                duration={course.duration}
                level={course.level}
                image={course.image}
                onClick={() => navigate(`/courses/${course.id}`)}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}