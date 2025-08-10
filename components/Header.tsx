
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'The Problem', href: '#problem' },
    { name: 'What is GEO?', href: '#what-is-geo' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'AVS Score', href: '#avs' },
    { name: 'Pricing', href: '#pricing' },
        { name: 'FAQ', href: '#pricing' }, // Added FAQ link
    { name: 'Book a Demo', href: '#book-demo' }, // Added Book a Demo link, // Added FAQ link,
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    
    const sectionIds = navLinks.map(link => link.href.substring(1));
    const sections = sectionIds.map(id => document.getElementById(id));
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    }, { rootMargin: '-30% 0px -70% 0px' }); // This triggers when the top of a section is about 30% from the top of the viewport

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);
  
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  }

  const headerClasses = isScrolled || isMenuOpen
    ? 'bg-surface/80 backdrop-blur-lg border-b border-border'
    : 'bg-transparent';
  
  const getLinkClasses = (href: string) => {
    return activeSection === href
      ? 'text-accent-primary font-semibold'
      : 'text-text-secondary hover:text-accent-primary';
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClasses}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2" onClick={handleLinkClick} aria-label="One Click GEO - Generative Engine Optimization">
            <span className="text-2xl font-bold text-text-primary">One Click <span className="text-accent-primary">GEO</span></span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={`transition-colors duration-200 font-medium ${getLinkClasses(link.href)}`}>
                {link.name}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center">
             <a href="#pricing" className="bg-accent-primary text-background font-bold px-5 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-200">
                View Plans
             </a>
          </div>
          <div className="md:hidden">
            <button onClick={handleMenuToggle} className="text-text-primary focus:outline-none" aria-label="Toggle menu" aria-expanded={isMenuOpen}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-lg">
          <nav className="flex flex-col items-center space-y-4 py-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={handleLinkClick} className={`text-xl transition-colors duration-200 font-medium ${getLinkClasses(link.href)}`}>
                {link.name}
              </a>
            ))}
            <a href="#pricing" onClick={handleLinkClick} className="mt-4 bg-accent-primary text-background font-bold px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-200">
                View Plans
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;