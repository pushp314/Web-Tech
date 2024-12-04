import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, Smartphone, Search, TrendingUp, BookOpen, Database } from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';
import { ServiceCard } from '../components/ServiceCard';
import { servicesData } from '../data/servicesData';

export function ServicesPage() {
  const navigate = useNavigate();
  const icons = {
    'web-development': Code,
    'app-development': Smartphone,
    'seo-services': Search,
    'digital-marketing': TrendingUp,
    'programming-courses': BookOpen,
    'database-management': Database,
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Comprehensive solutions for all your technology needs
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={icons[service.id as keyof typeof icons]}
                features={service.features.map(f => f.title)}
                onClick={() => navigate(`/services/${service.id}`)}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}