
import React from 'react';
import { CheckCircleIcon, InformationCircleIcon } from './Icons';

interface PlanProps {
  name: string;
  price: string;
  description: string;
  features: { text: string; tooltip?: string }[];
  isFeatured?: boolean;
}

const Tooltip: React.FC<{ text: string }> = ({ text }) => (
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-xs p-3 bg-background text-text-primary text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 border border-border">
        {text}
    </div>
);

const FeatureItem: React.FC<{ text: string; tooltip?: string }> = ({ text, tooltip }) => (
    <li className="flex items-start">
        <CheckCircleIcon className="h-6 w-6 text-accent-secondary mr-3 flex-shrink-0" />
        <div className="relative group flex items-center">
            <span className="text-text-muted">{text}</span>
            {tooltip && (
                <>
                    <InformationCircleIcon className="ml-2 h-4 w-4 text-text-muted cursor-pointer" />
                    <Tooltip text={tooltip} />
                </>
            )}
        </div>
    </li>
);

const PlanCard: React.FC<PlanProps> = ({ name, price, description, features, isFeatured }) => {
  const cardClasses = isFeatured 
    ? "bg-surface ring-2 ring-accent-primary shadow-2xl" 
    : "bg-surface";
  const buttonClasses = isFeatured
    ? "bg-accent-primary text-background hover:bg-opacity-90"
    : "bg-accent-secondary/20 text-accent-secondary hover:bg-accent-secondary/30";

  return (
    <div className={`rounded-xl p-8 flex flex-col h-full ${cardClasses}`}>
       {isFeatured && <div className="text-center mb-4"><span className="bg-accent-secondary text-background text-sm font-bold px-3 py-1 rounded-full uppercase">Most Popular</span></div>}
      <h3 className="text-2xl font-bold text-text-primary text-center">{name}</h3>
      <p className="text-center text-text-muted mt-2 h-12">{description}</p>
      <div className="text-center my-8">
        <span className="text-5xl font-extrabold text-text-primary">{price}</span>
        <span className="text-text-muted">/ month</span>
      </div>
      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, index) => (
          <FeatureItem key={index} text={feature.text} tooltip={feature.tooltip} />
        ))}
      </ul>
      <a href="#contact" className={`${buttonClasses} w-full mt-auto text-center font-bold py-3 rounded-lg transition-all duration-300`}>
        Select Plan
      </a>
    </div>
  );
};

const FAQItem: React.FC<{ question: string; children: React.ReactNode }> = ({ question, children }) => (
    <div className="bg-surface p-6 rounded-lg border border-border">
        <h4 className="font-semibold text-text-primary text-lg">{question}</h4>
        <p className="mt-2 text-text-muted">{children}</p>
    </div>
);

const Pricing: React.FC = () => {
  const faqs = [
    {
      q: "Why is the 3-Month Foundational Plan necessary?",
      a: "The foundational plan is critical for success. It allows us to perform the deep analysis, technical setup, and strategic planning required to effectively target AI engines. This setup ensures our ongoing efforts are built on a solid, data-driven base, maximizing your long-term ROI."
    },
    {
      q: "What exactly is an 'Answer-First Topic'?",
      a: "An 'Answer-First Topic' is a comprehensive content package focused on a core question your audience asks. It goes beyond a single blog post to include structured data, media assets, and 'quotable' snippets designed specifically to be picked up and cited by AI models like Google's AI Overviews."
    },
    {
      q: "Can I change my plan later?",
      a: "Absolutely. We understand that your needs can change. You can easily upgrade or downgrade your ongoing GEO plan at the end of any monthly cycle to ensure our services align perfectly with your business goals."
    },
    {
        q: "How do you track results without official data from Google?",
        a: "We use a proprietary suite of tools, including the Aura Visibility Score (AVS), combined with advanced analytics and commercial APIs. This allows us to monitor your brand's presence, sentiment, and share of voice across multiple AI platforms, giving you clear, actionable insights into performance."
    }, {
        q: "What is Generative Engine Optimization (GEO)?",
        a: "GEO is the practice of optimizing digital content to influence generative AI search results and to be cited, summarized, or featured in AI-generated responses. It aims to ensure your brand is discoverable and cited by these intelligent engines, becoming a central part of the conversation between the user and the AI model."
    }, {
        q: "How does GEO differ from traditional SEO?",
        a: "While traditional SEO focuses on optimizing for keyword rankings in standard search engine results pages (SERPs), GEO centers around tailoring content for AI-generated answers, which are based on trustworthiness, clarity, and semantic relevance. The goal of GEO is to be cited, summarized, or surfaced directly by AI tools, rather than just ranking pages."
    }, {
        q: "Why is GEO important in 2025?",
        a: "User behavior is shifting towards AI tools for search and discovery. Brands that ignore GEO risk losing visibility as an increasing share of searches happen through AI."
    }, {
        q: "How do AI-powered search engines rank content?",
        a: "AI search systems evaluate content based on relevance, clarity, depth, authority, and how well it matches user intent, not just keywords. Structured data and topical expertise also play a significant role. AI models prioritize content that is technically optimized for crawling, clearly structured, and authoritative."
    }
  ];
  
  const plans = {
    accelerator: {
        name: "Accelerator",
        price: "$999",
        description: "For businesses focused on establishing a strong initial GEO footprint.",
        features: [
            { text: "1 Answer-First Topic per Month", tooltip: "One comprehensive content package per month, designed to answer a specific user query and be cited by AI." },
            { text: "Aura Visibility Score (AVS) Tracking", tooltip: "Monthly tracking of your proprietary AVS metric to measure your brand's authority in AI search." },
            { text: "AI Presence Monitoring", tooltip: "Monitoring your brand's visibility across Google AI Overviews, ChatGPT, and Gemini." },
            { text: "Authority Citation Building", tooltip: "Proactive efforts to get your content cited as an authoritative source by AI platforms." },
            { text: "Content Answer-Targeting", tooltip: "Optimizing your existing and new content to directly answer questions AI is likely to use." },
            { text: "Monthly Performance Reporting", tooltip: "A detailed report on your AVS, share of voice, and overall GEO performance." }
        ]
    },
    growth: {
        name: "Growth",
        price: "$1,500",
        description: "For businesses aiming to expand their authority across multiple categories.",
        features: [
            { text: "2 Answer-First Topics per Month" },
            { text: "All Accelerator Features, plus:" },
            { text: "Share of Voice (SOV) Monitoring", tooltip: "Tracking your brand's visibility against key competitors within AI answers." },
            { text: "Mention Sentiment Analysis", tooltip: "Analyzing the tone (positive, neutral, negative) of how AI platforms mention your brand." },
            { text: "GMB Authority Posting", tooltip: "Optimizing your Google Business Profile with content designed for AI visibility in local search." },
            { text: "Bi-Weekly Strategy Calls", tooltip: "Regular check-ins to discuss performance, strategy, and upcoming topics." }
        ],
        isFeatured: true
    },
    scale: {
        name: "Scale",
        price: "$3,000",
        description: "For market leaders aiming to dominate the AI conversation.",
        features: [
            { text: "4 Answer-First Topics per Month" },
            { text: "All Growth Features, plus:" },
            { text: "Proactive Reputation Management", tooltip: "Actively monitoring for and responding to negative or inaccurate brand mentions in AI results." },
            { text: "Competitive Gap Analysis", tooltip: "Identifying topics where your competitors are winning in AI search and creating a strategy to outperform them." },
            { text: "Cross-Platform AVS Tracking", tooltip: "Advanced AVS tracking that segments performance across different AI platforms." },
            { text: "Weekly Strategy Calls & Reporting", tooltip: "In-depth weekly meetings and reports for maximum strategic alignment and agility." }
        ]
    }
  };


  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Transparent Pricing for Generative Authority</h2>
          <p className="mt-6 text-lg text-text-secondary">
            Our process begins with a comprehensive foundational strategy, followed by an ongoing monthly plan to ensure your brand's continued growth and dominance in AI search.
          </p>
        </div>

        {/* Step 1: Foundational Plan */}
        <div className="mt-20 max-w-5xl mx-auto">
            <div className="text-center mb-8">
                <span className="text-lg font-bold text-background bg-accent-primary py-2 px-4 rounded-full">Step 1</span>
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary mt-4">GEO Foundation & Strategy</h3>
            </div>
            <div className="bg-surface rounded-2xl border border-border p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2">
                        <h4 className="text-xl font-semibold text-text-primary mb-4">Your 3-Month Strategic Kickstart Includes:<br /></h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                            <li className="flex items-center text-text-muted"><CheckCircleIcon className="h-5 w-5 mr-2 text-accent-secondary flex-shrink-0" />Comprehensive GEO & AVS Audit</li>
                            <li className="flex items-center text-text-muted"><CheckCircleIcon className="h-5 w-5 mr-2 text-accent-secondary flex-shrink-0" />AI Search Competitor Analysis</li>
                            <li className="flex items-center text-text-muted"><CheckCircleIcon className="h-5 w-5 mr-2 text-accent-secondary flex-shrink-0" />"Answer-First" Content Roadmap</li>
                            <li className="flex items-center text-text-muted"><CheckCircleIcon className="h-5 w-5 mr-2 text-accent-secondary flex-shrink-0" />Foundational Schema Markup</li>
                            <li className="flex items-center text-text-muted"><CheckCircleIcon className="h-5 w-5 mr-2 text-accent-secondary flex-shrink-0" />GAS Benchmarking & Goal Setting</li>
                            <li className="flex items-center text-text-muted"><CheckCircleIcon className="h-5 w-5 mr-2 text-accent-secondary flex-shrink-0" />Initial "Citation-Ready" Content</li>
                            <li className="flex items-center text-text-muted"><CheckCircleIcon className="h-5 w-5 mr-2 text-accent-secondary flex-shrink-0" />Google Business Profile GEO Tuning</li>
                            <li className="flex items-center text-text-muted"><CheckCircleIcon className="h-5 w-5 mr-2 text-accent-secondary flex-shrink-0" />Technical SEO for AI Crawlability</li>
                            <li className="flex items-center text-text-muted"><CheckCircleIcon className="h-5 w-5 mr-2 text-accent-secondary flex-shrink-0" />Press Release</li>
                            <li className="flex items-center text-text-muted"><CheckCircleIcon className="h-5 w-5 mr-2 text-accent-secondary flex-shrink-0" />Content Strategy</li>
                            <li className="flex items-center text-text-muted"><CheckCircleIcon className="h-5 w-5 mr-2 text-accent-secondary flex-shrink-0" />Citation Audit & Clean Up</li>
                        </div>
                    </div>
                    <div className="text-center bg-background rounded-lg p-6 border border-border">
                        <p className="text-lg font-medium text-text-secondary">Investment</p>
                        <p className="text-5xl font-extrabold text-text-primary my-2">$1600</p>
                        <p className="text-text-muted mb-4">/ month for 3 months</p>
                        <a href="#contact" className="bg-accent-primary text-background w-full text-center font-bold py-3 rounded-lg transition-all duration-300 hover:bg-opacity-90">
                            Begin Foundation
                        </a>
                    </div>
                </div>
            </div>
        </div>

        {/* Step 2: Ongoing Plans */}
        <div className="text-center mt-20 sm:mt-28">
            <span className="text-lg font-bold text-background bg-accent-primary py-2 px-4 rounded-full">Step 2</span>
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mt-4">Choose Your Ongoing GEO Plan</h3>
            <p className="mt-4 text-lg text-text-secondary">Continue to build your Generative Authority and dominate AI search.</p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            <PlanCard {...plans.accelerator} />
            <PlanCard {...plans.growth} />
            <PlanCard {...plans.scale} />
        </div>

        {/* FAQ Section */}
        <div className="mt-20 sm:mt-28 max-w-4xl mx-auto">
             <h3 className="text-2xl md:text-3xl font-bold text-text-primary text-center mb-10">Frequently Asked Questions</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.q}>{faq.a}</FAQItem>
                ))}
             </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;