import React from 'react';
import { useParams } from 'react-router-dom';
import { ServiceDetail } from '../pages/ServiceDetail';
import { servicesData } from '../data/servicesData';

export function ServiceDetailPage() {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Service not found</p>
      </div>
    );
  }

  return <ServiceDetail {...service} />;
}