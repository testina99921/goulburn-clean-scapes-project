
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-navy text-xl font-bold flex items-center gap-2">
            <span className="text-navy font-bold">R Judd Enterprise</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-navy hover:text-green font-medium transition-colors">Home</Link>
            <Link to="/about" className="text-navy hover:text-green font-medium transition-colors">About Us</Link>
            <Link to="/services" className="text-navy hover:text-green font-medium transition-colors">Services</Link>
            <Link to="/gallery" className="text-navy hover:text-green font-medium transition-colors">Gallery</Link>
            <Link to="/testimonials" className="text-navy hover:text-green font-medium transition-colors">Testimonials</Link>
            <Link to="/blog" className="text-navy hover:text-green font-medium transition-colors">Blog</Link>
            <Link to="/contact" className="text-navy hover:text-green font-medium transition-colors">Contact</Link>
            <Link to="/contact" className="neumorphic-button bg-navy text-white hover:bg-navyLight">
              Get a Free Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-navy"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
            >
              <X size={24} />
            </button>
          </div>

          <nav className="mt-8 flex flex-col space-y-6">
            <Link 
              to="/" 
              className="text-navy hover:text-green font-medium text-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-navy hover:text-green font-medium text-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className="text-navy hover:text-green font-medium text-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/gallery" 
              className="text-navy hover:text-green font-medium text-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              to="/testimonials" 
              className="text-navy hover:text-green font-medium text-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              to="/blog" 
              className="text-navy hover:text-green font-medium text-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="text-navy hover:text-green font-medium text-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/contact" 
              className="bg-navy text-white py-3 px-6 rounded-lg text-center font-medium hover:bg-navyLight transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Free Quote
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
