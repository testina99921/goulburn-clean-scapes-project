
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Droplet } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToFAQ = (e) => {
    e.preventDefault();
    // First go to home page if not already there
    if (window.location.pathname !== '/') {
      window.location.href = '/#faq';
    } else {
      // If already on home page, just scroll to FAQ section
      const faqSection = document.getElementById('faq');
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const scrollToHowItWorks = (e) => {
    e.preventDefault();
    // First go to home page if not already there
    if (window.location.pathname !== '/') {
      window.location.href = '/#how-it-works';
    } else {
      // If already on home page, just scroll to How It Works section
      const howItWorksSection = document.getElementById('how-it-works');
      if (howItWorksSection) {
        howItWorksSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-navy/90 backdrop-blur-lg shadow-md' : 'bg-navy/80 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex-1 md:flex-none">
            <img 
              src="/lovable-uploads/8a093671-0946-4af7-90da-c5407a4a6c0a.png" 
              alt="Elevated Pressure Washing" 
              className="h-10 md:h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <Link to="/" className="text-white hover:text-navyLight font-bold mx-4 transition-colors">Home</Link>
            <Link to="/services" className="text-white hover:text-navyLight font-bold mx-4 transition-colors">Services</Link>
            <a href="/#how-it-works" onClick={scrollToHowItWorks} className="text-white hover:text-navyLight font-bold mx-4 transition-colors">How It Works</a>
            <Link to="/testimonials" className="text-white hover:text-navyLight font-bold mx-4 transition-colors">Testimonials</Link>
            <a href="/#faq" onClick={scrollToFAQ} className="text-white hover:text-navyLight font-bold mx-4 transition-colors">FAQ</a>
            <Link to="/contact" className="text-white hover:text-navyLight font-bold mx-4 transition-colors">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center">
            <Link to="/contact" className="neumorphic-button bg-white text-navy hover:bg-navyLight hover:text-white flex items-center justify-center py-2 px-4">
              <Droplet className="w-4 h-4 mr-2" />
              <span>Free Quote</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`fixed inset-y-0 right-0 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} w-4/5 bg-white shadow-xl z-50 transition-transform duration-300 ease-in-out md:hidden overflow-y-auto`}>
        <div className="p-6">
          <div className="flex justify-end">
            <button 
              className="text-navy"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="mt-8 flex flex-col space-y-6">
            <Link 
              to="/" 
              className="text-navy hover:text-navyLight font-bold text-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="text-navy hover:text-navyLight font-bold text-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <a
              href="/#how-it-works" 
              className="text-navy hover:text-navyLight font-bold text-lg transition-colors"
              onClick={scrollToHowItWorks}
            >
              How It Works
            </a>
            <Link 
              to="/testimonials" 
              className="text-navy hover:text-navyLight font-bold text-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <a
              href="/#faq" 
              className="text-navy hover:text-navyLight font-bold text-lg transition-colors"
              onClick={scrollToFAQ}
            >
              FAQ
            </a>
            <Link 
              to="/contact" 
              className="text-navy hover:text-navyLight font-bold text-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/contact" 
              className="bg-navy text-white py-3 px-6 rounded-lg text-center font-bold text-lg hover:bg-navyLight transition-colors flex items-center justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Droplet className="w-5 h-5 mr-2" />
              Free Quote
            </Link>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
