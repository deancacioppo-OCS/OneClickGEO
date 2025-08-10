
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
          <div>
            <a href="#" className="flex items-center justify-center md:justify-start space-x-2 mb-2">
               <span className="text-2xl font-bold text-text-primary">One Click <span className="text-accent-primary">GEO</span></span>
            </a>
            <p className="text-text-muted">Redefining Digital Marketing for the AI Era with Generative Engine Optimization.</p>
          </div>
          <div className="text-text-muted">
            <p className="font-semibold text-text-primary">Contact Us</p>
            <p>Phone: <a href="tel:+19852500787" className="hover:text-accent-primary">+1 985-250-0787</a></p>
            <p>Email: <a href="mailto:info@oneclick.agency" className="hover:text-accent-primary">info@oneclick.agency</a></p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border text-center text-sm text-text-muted">
          <div className="mb-4"> {/* New div for legal links */}
            <a href="/privacy-policy.html" className="text-text-muted hover:text-accent-primary" rel="nofollow">Privacy Policy</a>
          </div>
          <p>&copy; {currentYear} One Click GEO. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;