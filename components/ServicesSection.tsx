
import React from 'react';
import { GEO_SERVICES } from '../constants';
import type { InfoCardItem } from '../types';

const ServiceCard: React.FC<{ item: InfoCardItem }> = ({ item }) => (
  <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-indigo-500/10">
    <div className="flex-shrink-0">
      {item.icon}
      <h3 className="text-xl font-bold text-white mt-4">{item.title}</h3>
      <p className="mt-2 text-gray-400">{item.description}</p>
    </div>
  </div>
);

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Comprehensive GEO Services
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            We provide an end-to-end solution to adapt your digital presence for the age of AI answers. Our services are designed to build your authority and secure your visibility where it matters most.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {GEO_SERVICES.map((service) => (
            <ServiceCard key={service.title} item={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
