
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white pt-8 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-2">R Judd Enterprise</h3>
            <p className="mb-2 text-gray-100 text-sm">Professional pressure washing services in Goulburn, Canberra NSW and surrounding areas.</p>
            <div className="flex items-center mb-2 text-sm">
              <Phone size={14} className="mr-2" />
              <a href="tel:0417264292" className="hover:text-green transition-colors">0417 264 292</a>
            </div>
            <div className="flex items-center mb-2 text-sm">
              <Mail size={14} className="mr-2" />
              <a href="mailto:rossjudd@hotmail.com" className="hover:text-green transition-colors">rossjudd@hotmail.com</a>
            </div>
            <div className="flex items-start mb-2 text-sm">
              <MapPin size={14} className="mr-2 mt-1 flex-shrink-0" />
              <p>Goulburn & Canberra, NSW, Australia</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="/" className="hover:text-green transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-green transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-green transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-green transition-colors">Gallery</Link></li>
              <li><Link to="/blog" className="hover:text-green transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-green transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-2">Our Services</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="/services" className="hover:text-green transition-colors">Commercial Pressure Washing</Link></li>
              <li><Link to="/services" className="hover:text-green transition-colors">Driveway Cleaning</Link></li>
              <li><Link to="/services" className="hover:text-green transition-colors">House Washing</Link></li>
              <li><Link to="/services" className="hover:text-green transition-colors">Deck & Patio Cleaning</Link></li>
              <li><Link to="/services" className="hover:text-green transition-colors">Roof Cleaning</Link></li>
              <li><Link to="/services" className="hover:text-green transition-colors">Fence Cleaning</Link></li>
              <li><Link to="/contact" className="hover:text-green transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-bold text-lg mb-2">Business Hours</h3>
            <div className="space-y-1 mb-3 text-sm">
              <div className="flex items-start">
                <Clock size={14} className="mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p>Monday - Friday: 8am - 6pm</p>
                  <p>Saturday: 9am - 1pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="mt-3">
              <Link to="/contact" className="bg-white text-navy py-2 px-4 rounded-lg text-center font-medium hover:bg-gray-200 transition-colors inline-block text-sm">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300/30 mt-4 pt-3 text-center text-gray-200 text-xs">
          <p>© {currentYear} R Judd Enterprise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
