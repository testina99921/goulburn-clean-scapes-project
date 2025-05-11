
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Droplet } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2 text-sm">
          {/* Company Info */}
          <div>
            <h3 className="font-bold mb-1 text-sm">R Judd Enterprise</h3>
            <div className="flex items-center mb-1">
              <Phone size={12} className="mr-1" />
              <a href="tel:0417264292" className="hover:text-navyLight transition-colors text-xs">0417 264 292</a>
            </div>
            <div className="flex items-center mb-1">
              <Mail size={12} className="mr-1" />
              <a href="mailto:rossjudd@hotmail.com" className="hover:text-navyLight transition-colors text-xs">rossjudd@hotmail.com</a>
            </div>
            <div className="flex items-start mb-1">
              <MapPin size={12} className="mr-1 mt-0.5 flex-shrink-0" />
              <p className="text-xs">Goulburn & Canberra, NSW</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-1 text-sm">Quick Links</h3>
            <ul className="grid grid-cols-1 text-xs space-y-1">
              <li><Link to="/" className="hover:text-navyLight transition-colors">Home</Link></li>
              <li><a href="/#how-it-works" className="hover:text-navyLight transition-colors">How It Works</a></li>
              <li><a href="/#faq" className="hover:text-navyLight transition-colors">FAQ</a></li>
              <li><Link to="/contact" className="hover:text-navyLight transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-1 text-sm">Our Services</h3>
            <ul className="grid grid-cols-1 text-xs space-y-1">
              <li><Link to="/services" className="hover:text-navyLight transition-colors">Commercial Pressure Washing</Link></li>
              <li><Link to="/services" className="hover:text-navyLight transition-colors">Driveway Cleaning</Link></li>
              <li><Link to="/services" className="hover:text-navyLight transition-colors">House Washing</Link></li>
              <li><Link to="/services" className="hover:text-navyLight transition-colors">Roof Cleaning</Link></li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-bold mb-1 text-sm">Business Hours</h3>
            <div className="flex items-start text-xs mb-2">
              <Clock size={12} className="mr-1 mt-0.5 flex-shrink-0" />
              <div>
                <p>Monday - Friday: 8am - 6pm</p>
                <p>Saturday: 9am - 1pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
            
            <div>
              <Link to="/contact" className="bg-white text-navy py-1.5 px-3 rounded-lg text-center font-medium hover:bg-navyLight hover:text-white transition-colors inline-flex items-center text-xs">
                <Droplet className="w-3 h-3 mr-1" />
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
