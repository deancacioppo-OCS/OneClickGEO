
import React from 'react';
import { ShieldCheckIcon, ChartBarIcon, LightBulbIcon } from './Icons';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-surface p-8 rounded-lg border border-border transform hover:-translate-y-2 transition-transform duration-300">
    <div className="flex-shrink-0 bg-accent-primary/10 p-3 rounded-full w-max mb-4">
        {icon}
    </div>
    <h3 className="text-xl font-bold text-text-primary mb-3">{title}</h3>
    <p className="text-text-muted">{children}</p>
  </div>
);

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Experience Meets Innovation:<br />Your Strategic Partner in the AI-First World
          </h2>
          <p className="mt-6 text-lg text-text-secondary">
            In a rapidly changing digital world, you need a partner who understands both the foundations of search and the future of AI. For Generative Engine Optimization (GEO), One Click offers both.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<ShieldCheckIcon className="h-8 w-8 text-accent-primary" />}
            title="Two Decades of Proven SEO Success"
          >
            We're not new to search. Our 20 years of experience means we understand the nuances of how content performs, how algorithms evolve, and how to deliver real ROI.
          </FeatureCard>
          <FeatureCard
            icon={<ChartBarIcon className="h-8 w-8 text-accent-primary" />}
            title="Proprietary & Defensible Metrics"
          >
            Our Generative Authority Score (GAS) provides a unique, quantifiable measure of your AI visibility that goes beyond simple keyword rankings to empower informed decisions.
          </FeatureCard>
          <FeatureCard
            icon={<LightBulbIcon className="h-8 w-8 text-accent-primary" />}
            title="Advanced Technical Capabilities"
          >
            We employ a hybrid database architecture and leverage official APIs for reliable, high-fidelity data. We handle the technical complexities so you don't have to.
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;