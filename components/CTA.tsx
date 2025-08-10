import React, { useEffect } from 'react';

const CTA: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://go.oneclickseo.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="bg-background">
      <div className="container mx-auto px-6 py-20 sm:py-28 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary">
          Ready to See Your Brand Through the Eyes of AI?
        </h2>
        <p className="max-w-2xl mx-auto mt-6 text-lg text-text-secondary">
          Discover your brand's AI footprint and get actionable insights with our proprietary audit tool. Your first step towards generative authority is just a click away.
        </p>
        <div className="mt-10">
         <iframe
            src="https://go.oneclickseo.com/widget/form/3dO3wPzui5deDlyafyrg"
            style={{width:"100%", height:"569px", border:"none", borderRadius:"1px"}}
            id="inline-3dO3wPzui5deDlyafyrg"
            data-layout='{"id":"INLINE"}'
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="One Click GEO - more information "
            data-height="569"
            data-layout-iframe-id="inline-3dO3wPzui5deDlyafyrg"
            data-form-id="3dO3wPzui5deDlyafyrg"
            title="One Click GEO - more information "
                >
        </iframe>
        </div>
        <div className="mt-8 text-text-muted">
            <p>Or call us at <a href="tel:+19852500787" className="text-text-secondary hover:text-accent-primary font-semibold">+1 985-250-0787</a> to discuss a full GEO plan.</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
