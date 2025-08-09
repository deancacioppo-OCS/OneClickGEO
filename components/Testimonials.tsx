
import React from 'react';

const TestimonialCard: React.FC<{ quote: string; author: string; company: string }> = ({ quote, author, company }) => (
    <div className="bg-surface p-8 rounded-lg border border-border h-full flex flex-col">
        <blockquote className="text-text-secondary text-lg italic flex-grow">"{quote}"</blockquote>
        <footer className="mt-6">
            <p className="font-bold text-text-primary">{author}</p>
            <p className="text-accent-primary">{company}</p>
        </footer>
    </div>
);

const Testimonials: React.FC = () => {
    return (
        <section className="bg-background py-20 sm:py-28">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                        From Our Clients: The Impact of Generative Authority
                    </h2>
                    <p className="mt-6 text-lg text-text-secondary">
                        Don't just take our word for it. Here's how we're helping businesses thrive in the new era of AI search.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <TestimonialCard
                        quote="One Click GEO completely shifted our perspective. We were obsessed with ranking #1, but our traffic was plummeting. Their AVS metric showed us the real picture. Now, we focus on being cited by AI, and our brand visibility has never been stronger."
                        author="Angie Cole"
                        company="CEO, Innovate Corp"
                    />
                    <TestimonialCard
                        quote="The 'measurement chasm' was real for us. We were flying blind. The foundational plan gave us a clear roadmap, and the ongoing reporting from One Click GEO finally allows us to demonstrate the ROI of our content strategy in the AI era. It's a game-changer."
                        author="Grant Clayton"
                        company="Founder of 1 Percent Lists"
                    />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;