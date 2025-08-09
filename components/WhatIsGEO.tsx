
import React from 'react';
import { BookOpenIcon, MagnifyingGlassIcon, WrenchScrewdriverIcon, RocketLaunchIcon } from './Icons';

const PillarCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 bg-accent-primary/10 p-3 rounded-full">
            {icon}
        </div>
        <div>
            <h4 className="text-xl font-semibold text-text-primary">{title}</h4>
            <p className="mt-1 text-text-muted">{children}</p>
        </div>
    </div>
);

const WhatIsGEO: React.FC = () => {
    return (
        <section className="bg-background py-20 sm:py-28">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="lg:pr-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary">What is Generative Engine Optimization (GEO)?</h2>
                        <h3 className="mt-4 text-xl text-accent-primary font-semibold">The Evolution of SEO, Built on 20 Years of Expertise.</h3>
                        <p className="mt-6 text-lg text-text-secondary">
                            Generative Engine Optimization (GEO), or Answer Engine Optimization (AEO), is the holistic discipline of optimizing your entire digital presence. Its purpose is to ensure your brand is not only visible but also <span className="font-bold text-text-primary">favorably represented within the AI-generated responses</span> of platforms like Google's AI Overviews, ChatGPT, and Perplexity.
                        </p>
                        <p className="mt-4 text-lg text-text-secondary">
                            At One Click, we're not just adapting; we're leading the charge. We build on our two decades of SEO expertise and proven strategies to ensure your brand is the answer in the new AI-driven search economy.
                        </p>
                    </div>
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-text-primary mb-6 border-b-2 border-accent-primary pb-2">How GEO Builds on Traditional SEO</h3>
                        <PillarCard icon={<MagnifyingGlassIcon className="h-6 w-6 text-accent-primary" />} title="Deep Intent Research">
                            We go beyond keywords to understand the queries that trigger AI answers, identifying the exact questions your audience asks.
                        </PillarCard>
                        <PillarCard icon={<BookOpenIcon className="h-6 w-6 text-accent-primary" />} title="Content Authority (E-E-A-T)">
                            Our long-standing focus on Experience, Expertise, Authoritativeness, and Trustworthiness is paramount, as AI models prioritize these signals.
                        </PillarCard>
                        <PillarCard icon={<WrenchScrewdriverIcon className="h-6 w-6 text-accent-primary" />} title="Advanced Technical Optimization">
                            Proper URL structure, fast sites, and advanced Schema Markup are more critical than ever, acting as "sticky notes" for AI to read and trust your content.
                        </PillarCard>
                         <PillarCard icon={<RocketLaunchIcon className="h-6 w-6 text-accent-primary" />} title="High-Quality Content & Links">
                            We create original, "AI-resistant" content and secure quality backlinks that serve as strong authority signals for AI models.
                        </PillarCard>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatIsGEO;