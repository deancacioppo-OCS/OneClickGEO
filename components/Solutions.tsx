
import React from 'react';

const ServiceCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="bg-background p-6 rounded-lg border border-border">
        <h4 className="text-xl font-bold text-accent-primary">{title}</h4>
        <p className="mt-3 text-text-muted">{description}</p>
    </div>
);

const GasComponent: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <li className="flex items-start space-x-3">
        <svg className="flex-shrink-0 h-6 w-6 text-accent-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        <p><span className="font-semibold text-text-primary">{title}:</span> <span className="text-text-muted">{description}</span></p>
    </li>
);

const Solutions: React.FC = () => {
    return (
        <section className="bg-surface py-20 sm:py-28">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Unveiling the AI Black Box</h2>
                    <p className="mt-6 text-lg text-text-secondary">
                        Google won't provide data for AI Overview clicks or citations, creating a "measurement chasm". We leverage sophisticated technology to fill this void, providing the intelligence you need to measure and manage what Google won't.
                    </p>
                </div>

                <div className="mt-16">
                    <h3 className="text-2xl md:text-3xl font-bold text-text-primary text-center mb-10">Comprehensive Platform Coverage</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <ServiceCard
                            title="Google AI Overviews (AIOs)"
                            description="We track your brand mentions, website links, and historical trends within Google's direct answers, showing you the exact AI snippet featuring your business."
                        />
                        <ServiceCard
                            title="Google Gemini"
                            description="We monitor your brand's presence in Gemini's multimodal answers, tracking mentions, links, and how your competitors perform with high-granularity data."
                        />
                        <ServiceCard
                            title="OpenAI ChatGPT"
                            description="We track how ChatGPT describes your brand and expertise, how often you appear in answers, and if your website is linked, showing you actual responses."
                        />
                    </div>
                </div>

                <div className="mt-20 lg:mt-28 bg-background rounded-2xl p-8 lg:p-12 border border-border">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-text-primary">Generative Authority Score (GAS)</h3>
                            <p className="mt-4 text-lg text-accent-primary font-semibold">Your New North Star Metric</p>
                            <p className="mt-4 text-text-secondary">
                                We go beyond simple mentions. Our proprietary GAS is a powerful, weighted composite KPI that quantifies your brand's overall health and authority in the AI ecosystem. It's designed to replace "organic rank" as the primary KPI for success in the zero-click era.
                            </p>
                            <ul className="mt-6 space-y-4">
                               <GasComponent title="Mention Volume" description="How frequently your brand is cited by AI." />
                               <GasComponent title="Mention Quality" description="A score based on sentiment and citation granularity." />
                               <GasComponent title="Source Authority" description="Integrates external authority signals for every domain cited." />
                               <GasComponent title="Topical Relevance" description="Measures the semantic similarity between the AI's answer and your content." />
                            </ul>
                        </div>
                        <div className="flex items-center justify-center">
                             <div className="relative w-64 h-64">
                                <svg className="w-full h-full" viewBox="0 0 36 36">
                                    <path className="text-border" strokeWidth="3" fill="none" stroke="currentColor" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    <path className="text-accent-primary" strokeWidth="3" strokeDasharray="75, 100" strokeLinecap="round" fill="none" stroke="currentColor" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-5xl font-extrabold text-text-primary">75</span>
                                    <span className="text-lg font-semibold text-accent-primary">GAS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Solutions;