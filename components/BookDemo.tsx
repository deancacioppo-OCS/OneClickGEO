import React, { useEffect } from 'react';

const BookDemo: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://go.oneclickseo.com/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-8">
          Book Your Free Demo
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-text-secondary mb-10">
          Schedule a personalized demo to see how Generative Engine Optimization can transform your brand's AI visibility.
        </p>
        <div className="max-w-3xl mx-auto">
          <iframe
            src="https://go.oneclickseo.com/widget/booking/eCZezHIqPUP3ewxKmezY"
            style={{ width: '100%', border: 'none', overflow: 'hidden', height: '800px' }} // Added height for visibility
            scrolling="no"
            id="eCZezHIqPUP3ewxKmezY_1754828599811"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default BookDemo;
