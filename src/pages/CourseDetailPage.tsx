import React from 'react';
import { useParams } from 'react-router-dom';
import { CourseDetail } from '../pages/CourseDetail';
import { coursesData } from '../data/coursesData';

export function CourseDetailPage() {
  const { id } = useParams();
  const course = coursesData.find(c => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Course not found</p>
      </div>
    );
  }

  return <CourseDetail {...course} />;
}