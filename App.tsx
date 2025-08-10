
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import WhatIsGEO from './components/WhatIsGEO';
import Solutions from './components/Solutions';
import WhyChooseUs from './components/WhyChooseUs';
import Pricing from './components/Pricing';
import BookDemo from './components/BookDemo';
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
      </main>
      <Footer />
    </div>
  );
};

export default App;