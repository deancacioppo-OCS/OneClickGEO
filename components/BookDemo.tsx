import React, { useEffect } from 'react';

const BookDemo: React.FC = () => {
  

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
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
          <iframe src="https://api.leadconnectorhq.com/widget/booking/zve6c0m24kbAcCRgHggE" style={{ width: '100%', border: 'none', overflow: 'hidden' }} scrolling="no" id="zve6c0m24kbAcCRgHggE_1755199728949"></iframe>
        </div>
      </div>
    </section>
  );
};

export default BookDemo;
