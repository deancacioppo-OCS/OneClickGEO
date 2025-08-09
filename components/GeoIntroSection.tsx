
import React from 'react';
import { GEO_PRINCIPLES } from '../constants';
import type { InfoCardItem } from '../types';

const InfoCard: React.FC<{ item: InfoCardItem }> = ({ item }) => (
  <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 flex flex-col h-full transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-cyan-500/10">
    <div className="flex-shrink-0">
      {item.icon}
      <h3 className="text-xl font-bold text-white mt-4">{item.title}</h3>
      <p className="mt-2 text-gray-400">{item.description}</p>
    </div>
  </div>
);

const GeoIntroSection: React.FC = () => {
  return (
    <section id="what-is-geo" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What is Generative Engine Optimization?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            GEO is the evolution of SEO. It's a holistic discipline for optimizing your entire digital presence to ensure it’s not only visible but favorably represented within AI-generated responses. It moves beyond keywords and backlinks to a broader strategy encompassing content quality, data structure, and brand authority.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {GEO_PRINCIPLES.map((principle) => (
            <InfoCard key={principle.title} item={principle} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GeoIntroSection;
