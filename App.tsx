
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import WhatIsGEO from './components/WhatIsGEO';
import Solutions from './components/Solutions';
import WhyChooseUs from './components/WhyChooseUs';
import Pricing from './components/Pricing';
import BookDemo from './components/BookDemo';
import CTA from './components/CTA';
import Footer from './components/Footer';
import AVSExplained from './components/AVSExplained';
import TrustBar from './components/TrustBar';
import Testimonials from './components/Testimonials';
import AnimatedSection from './components/AnimatedSection';

const App: React.FC = () => {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main>
        <Hero />
        <AnimatedSection>
            <TrustBar />
        </AnimatedSection>
        <AnimatedSection id="problem">
          <Problem />
        </AnimatedSection>
        <AnimatedSection id="what-is-geo">
          <WhatIsGEO />
        </AnimatedSection>
        <AnimatedSection id="solutions">
          <Solutions />
        </AnimatedSection>

        <section className="py-20 bg-background">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Ready to See It in Action?</h2>
                <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
                    Let us show you how Generative Engine Optimization can transform your brand's visibility. Schedule a live demo with our experts today.
                </p>
                <a
                    href="#book-demo"
                    className="mt-8 inline-block bg-accent-primary text-background font-bold px-8 py-4 rounded-lg hover:bg-opacity-90 transform transition-all duration-300"
                >
                    Set Up a Demo
                </a>
            </div>
        </section>

        <AnimatedSection id="avs">
          <AVSExplained />
        </AnimatedSection>
        <AnimatedSection id="why-us">
          <WhyChooseUs />
        </AnimatedSection>
        <AnimatedSection>
            <Testimonials />
        </AnimatedSection>
        <AnimatedSection id="pricing">
          <Pricing />
        </AnimatedSection>
        <AnimatedSection id="book-demo"> {/* Changed id */}
          <BookDemo /> {/* Replaced CTA with BookDemo */}
        </AnimatedSection>
        <AnimatedSection id="contact"> {/* New section for Contact Form */}
          <CTA />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default App;