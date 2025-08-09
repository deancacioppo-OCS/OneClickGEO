
import React from 'react';
import { ChartBarIcon, NoSymbolIcon, SparklesIcon } from './Icons';

const stats = [
  {
    icon: <NoSymbolIcon className="h-8 w-8 text-rose-400" />,
    value: "~60%",
    label: "of Google searches ended without a click in 2024.",
  },
  {
    icon: <ChartBarIcon className="h-8 w-8 text-yellow-400" />,
    value: "34.5%",
    label: "drop in click-through rate for pages in position one when an AIO is present.",
  },
  {
    icon: <SparklesIcon className="h-8 w-8 text-cyan-400" />,
    value: "70%+",
    label: "projected zero-click searches by 2025.",
  },
];

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            The Great Decoupling: Rankings No Longer Equal Traffic
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            A seismic shift is underway. Google's AI Overviews are severing the long-held link between high search rankings and website traffic. This "Great Decoupling" invalidates a generation of marketing strategies, creating an urgent need for new expertise.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 shadow-lg">
              <div className="flex justify-center items-center mb-4">
                {stat.icon}
              </div>
              <p className="text-4xl font-extrabold text-white">{stat.value}</p>
              <p className="mt-2 text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;