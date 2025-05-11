
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Company Info */}
          <div className="mb-2">
            <h3 className="font-bold text-base mb-1">R Judd Enterprise</h3>
            <div className="flex items-center mb-1 text-xs">
              <Phone size={14} className="mr-2" />
              <a href="tel:0417264292" className="hover:text-navyLight transition-colors">0417 264 292</a>
            </div>
            <div className="flex items-center mb-1 text-xs">
              <Mail size={14} className="mr-2" />
              <a href="mailto:rossjudd@hotmail.com" className="hover:text-navyLight transition-colors">rossjudd@hotmail.com</a>
            </div>
            <div className="flex items-start mb-1 text-xs">
              <MapPin size={14} className="mr-2 mt-0.5 flex-shrink-0" />
              <p>Goulburn & Canberra, NSW, Australia</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-2">
            <h3 className="font-bold text-base mb-1">Quick Links</h3>
            <ul className="grid grid-cols-2 text-xs">
              <li><Link to="/" className="hover:text-navyLight transition-colors">Home</Link></li>
              <li><a href="/#faq" className="hover:text-navyLight transition-colors">FAQ</a></li>
              <li><Link to="/services" className="hover:text-navyLight transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-navyLight transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="mb-2">
            <h3 className="font-bold text-base mb-1">Our Services</h3>
            <ul className="grid grid-cols-2 text-xs gap-y-0.5">
              <li><Link to="/services" className="hover:text-navyLight transition-colors">Commercial Pressure Washing</Link></li>
              <li><Link to="/services" className="hover:text-navyLight transition-colors">Driveway Cleaning</Link></li>
              <li><Link to="/services" className="hover:text-navyLight transition-colors">House Washing</Link></li>
              <li><Link to="/services" className="hover:text-navyLight transition-colors">Deck & Patio Cleaning</Link></li>
              <li><Link to="/services" className="hover:text-navyLight transition-colors">Roof Cleaning</Link></li>
              <li><Link to="/services" className="hover:text-navyLight transition-colors">Fence Cleaning</Link></li>
              <li><Link to="/contact" className="hover:text-navyLight transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="mb-2">
            <h3 className="font-bold text-base mb-1">Business Hours</h3>
            <div className="flex items-start text-xs mb-2">
              <Clock size={14} className="mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <p>Monday - Friday: 8am - 6pm</p>
                <p>Saturday: 9am - 1pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
            
            <div>
              <Link to="/contact" className="bg-white text-navy py-1.5 px-3 rounded-lg text-center font-medium hover:bg-navyLight hover:text-white transition-colors inline-block text-xs">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-2 pt-2 text-center text-white text-xs">
          <p>© {currentYear} R Judd Enterprise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
