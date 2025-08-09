import React from 'react';
import { ChartBarIcon, CheckCircleIcon, LightBulbIcon, MagnifyingGlassIcon, ShieldCheckIcon, SparklesIcon } from './Icons';

const FactorCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-surface p-6 rounded-lg border border-border">
    <div className="flex items-center space-x-3 mb-3">
      {icon}
      <h4 className="text-lg font-bold text-text-primary">{title}</h4>
    </div>
    <p className="text-text-muted">{children}</p>
  </div>
);


const AVSExplained: React.FC = () => {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Introducing the Aura Visibility Score (AVS): Your New North Star in AI Search
          </h2>
          <p className="mt-6 text-lg text-text-secondary">
            In today's AI-driven world, traditional SEO metrics are failing. Google's AI Overviews and other generative AI platforms are providing direct answers, making brand visibility less about website clicks and more about being the trusted source cited by the AI itself.
          </p>
          <p className="mt-4 text-lg text-text-secondary">
            Aura pioneers a new standard for measuring your brand's influence in this evolving landscape: the <b className="text-accent-primary">Aura Visibility Score (AVS)</b>. This proprietary, weighted composite metric (calculated on a scale of 0-100) quantifies your brand's "AI footprint" and provides a holistic measure of your authority and prominence within AI-generated search results across platforms like Google AI Overviews, ChatGPT, and Gemini.
          </p>
        </div>

        <div className="mt-16 max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary text-center mb-10">The AVS is more than just a number; it's a comprehensive reflection of your Generative Authority, integrating crucial factors:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FactorCard icon={<MagnifyingGlassIcon className="h-6 w-6 text-accent-primary" />} title="Mention Volume">
                    How frequently and consistently your brand is mentioned within AI responses.
                </FactorCard>
                <FactorCard icon={<SparklesIcon className="h-6 w-6 text-accent-primary" />} title="Mention Quality">
                    A sophisticated evaluation of each mention, factoring in sentiment and granularity. A high-granularity, API-verified mention from Gemini is valued more than a scraped one.
                </FactorCard>
                <FactorCard icon={<ShieldCheckIcon className="h-6 w-6 text-accent-primary" />} title="Source Authority">
                     We integrate external validation by including the average Moz Domain Authority for all unique domains cited as sources for your brand's mentions, making the AVS a trustworthy metric.
                </FactorCard>
                <FactorCard icon={<ChartBarIcon className="h-6 w-6 text-accent-primary" />} title="Platform Dominance (Share of Voice)">
                    Your brand's percentage of the AI-generated conversation across all tracked platforms, revealing "who owns the AI conversation on this topic".
                </FactorCard>
                <FactorCard icon={<LightBulbIcon className="h-6 w-6 text-accent-primary" />} title="Topical Relevance">
                    A score based on how semantically aligned the mention's context is with the target keyword's intent.
                </FactorCard>
                <FactorCard icon={<CheckCircleIcon className="h-6 w-6 text-accent-primary" />} title="Citation Prominence">
                    A critical weighting that prioritizes mentions appearing "before the scroll" in the initial, collapsed AI Overview view over those hidden behind a "show more" click.
                </FactorCard>
            </div>
        </div>
        
        <div className="mt-16 text-center max-w-4xl mx-auto">
            <p className="text-lg text-text-secondary">
                By synthesizing these vital data points, the AVS transforms complex AI visibility into a single, defensible KPI that allows you to track progress, report to stakeholders, and justify your investment in Generative Engine Optimization (GEO). It's the essential tool for managing and optimizing your brand's presence in the AI-driven information ecosystem.
            </p>
            <div className="mt-10">
              <a
                href="https://aurageoaudit.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-primary text-background font-bold px-10 py-4 rounded-lg text-lg hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 inline-block"
                aria-label="Get Your Aura GEO Audit Today!"
              >
                Get Your Aura GEO Audit Today!
              </a>
            </div>
        </div>

      </div>
    </section>
  );
};

export default AVSExplained;