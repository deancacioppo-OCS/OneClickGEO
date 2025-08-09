
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-text-primary overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop')` }}>
         <div className="absolute inset-0 bg-background/80 backdrop-blur-md"></div>
      </div>
      <div className="relative z-10 p-6 flex flex-col items-center">
        <div className="bg-accent-primary/10 border border-accent-primary/30 rounded-full px-4 py-1 mb-6 text-sm text-accent-primary font-semibold">
          The Evolution of Digital Visibility
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 max-w-4xl leading-tight text-text-primary">
          Beyond the Click: Your Brand, Front and Center in AI Search.
        </h1>
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mb-8">
          We redefine digital marketing for the AI era. Ensure your brand isn't just found, but becomes the trusted answer across Google's AI Overviews, ChatGPT, and Gemini.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#pricing"
            className="bg-accent-primary text-background font-bold px-8 py-4 rounded-lg hover:bg-opacity-90 transform transition-all duration-300 animate-pulse-slow"
          >
            See Our GEO Plans
          </a>
          <a
            href="#problem"
            className="bg-surface/30 text-text-primary font-bold px-8 py-4 rounded-lg border border-text-primary hover:bg-surface/50 transform hover:scale-105 transition-all duration-300"
          >
            Why GEO Matters
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;