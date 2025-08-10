
import React from 'react';

const StatCard: React.FC<{ value: string; label: string; description: string }> = ({ value, label, description }) => (
  <div className="bg-background p-6 rounded-lg border border-border text-center">
    <p className="text-5xl font-extrabold text-accent-primary">{value}</p>
    <p className="text-xl font-semibold mt-2 text-text-primary">{label}</p>
    <p className="text-text-muted mt-3">{description}</p>
  </div>
);

const Problem: React.FC = () => {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            The Great Decoupling:<br />Clicks Are Declining, Citations Are the New Currency.
          </h2>
          <p className="mt-6 text-lg text-text-secondary">
            The digital marketing landscape has undergone a tectonic shift. The era of "ten blue links" is over. AI engines like Google's AI Overviews, ChatGPT, and Gemini now provide direct, synthesized answers, often bypassing website visits entirely. This severs the link between high rankings and referral traffic.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <StatCard
            value="~50%"
            label="Drop in Click Likelihood"
            description="Users are nearly half as likely to click a traditional organic link when an AI Overview is present (from 15% down to 8% of visits)."
          />
          <StatCard
            value="75%+"
            label="Zero-Click Mobile Searches"
            description="In 2024, over three-quarters of global mobile searches did not result in a click to a website, a trend accelerated by AI answers."
          />
          <StatCard
            value="60-70%"
            label="Traffic Drop for Publishers"
            description="Some media companies and blogs have seen organic traffic plummet by as much as 70% following the widespread AIO rollout."
          />
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
            <p className="text-lg text-text-secondary">
                This isn't the death of SEO; it's its <span className="text-accent-primary font-semibold">forced and rapid maturation</span>. Generative Engine Optimization (GEO) is the solution. It's about becoming the authoritative source that informs the AI's answer. Success is now measured by the citation, not merely the click.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;