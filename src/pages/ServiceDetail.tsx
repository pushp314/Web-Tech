import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Clock, Trophy } from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServicePackage {
  name: string;
  price: string;
  features: string[];
}

interface ServiceDetailProps {
  title: string;
  description: string;
  features: ServiceFeature[];
  packages: ServicePackage[];
  benefits: string[];
}

export function ServiceDetail({
  title,
  description,
  features,
  packages,
  benefits
}: ServiceDetailProps) {
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
            </div>

            <div className="px-8 py-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Key Features</h2>
                  <div className="mt-6 space-y-6">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gray-50 rounded-lg p-6"
                      >
                        <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                        <p className="mt-2 text-gray-600">{feature.description}</p>
                      </motion.div>
                    ))}
                  </div>

                  <h2 className="mt-12 text-2xl font-bold text-gray-900">Benefits</h2>
                  <div className="mt-6 bg-gray-50 rounded-lg p-6">
                    <ul className="space-y-4">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Service Packages</h2>
                  <div className="mt-6 space-y-6">
                    {packages.map((pkg, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gray-50 rounded-lg p-6"
                      >
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-semibold text-gray-900">{pkg.name}</h3>
                          <span className="text-blue-600 font-bold">{pkg.price}</span>
                        </div>
                        <ul className="mt-4 space-y-2">
                          {pkg.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-gray-600">
                              <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                          Choose Plan
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}