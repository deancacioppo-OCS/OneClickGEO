import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="bg-surface">
      <div className="container mx-auto px-6 py-20 sm:py-28 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary">
          Ready to See Your Brand Through the Eyes of AI?
        </h2>
        <p className="max-w-2xl mx-auto mt-6 text-lg text-text-secondary">
          Discover your brand's AI footprint and get actionable insights with our proprietary audit tool. Your first step towards generative authority is just a click away.
        </p>
        <div className="mt-10">
          <a
            href="https://aurageoaudit.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent-primary text-background font-bold px-10 py-5 rounded-lg text-xl hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 inline-block"
          >
            Get Your Aura GEO Audit Today!
          </a>
        </div>
        <div className="mt-8 text-text-muted">
            <p>Or call us at <a href="tel:+19852500787" className="text-text-secondary hover:text-accent-primary font-semibold">+1 985-250-0787</a> to discuss a full GEO plan.</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;