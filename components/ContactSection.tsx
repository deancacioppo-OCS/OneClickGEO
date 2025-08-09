
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 relative overflow-hidden">
        <div className="absolute -inset-40 bg-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="relative text-center max-w-3xl mx-auto bg-slate-800/50 border border-slate-700/50 rounded-2xl p-10 md:p-16 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Reclaim Your Search Visibility?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            The shift to AI search is happening now. Don't get left behind. Contact us for a free, no-obligation analysis of your GEO readiness and discover how you can win in the new search economy.
          </p>
          <div className="mt-8">
            <a
              href="mailto:hello@oneclick.com"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg transition-transform transform hover:scale-105 inline-block"
            >
              Request Your Free Analysis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
