import React, { useEffect } from 'react'; // Import useEffect
import Header from './Header';
import Footer from './Footer';

const ThankYou: React.FC = () => {
  useEffect(() => {
    // Ensure fbq is available before tracking
    if (window.fbq) {
      window.fbq('track', 'Lead');
    }
  }, []); // Run once after component mounts

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center text-center py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-4">
            Thank You!
          </h1>
          <p className="text-lg md:text-xl text-text-secondary mb-8">
            Someone will be in touch shortly.
          </p>
          <a
            href="/"
            className="bg-accent-primary text-background font-bold px-8 py-4 rounded-lg hover:bg-opacity-90 transform transition-all duration-300 inline-block"
          >
            Back to Home
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;
