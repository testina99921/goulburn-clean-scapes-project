
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-xl mb-4">R Judd Enterprise</h3>
            <p className="mb-6 text-gray-300">Professional pressure washing services in Goulburn NSW and surrounding areas.</p>
            <div className="flex items-center mb-3">
              <Phone size={18} className="mr-2" />
              <a href="tel:0417264292" className="hover:text-green transition-colors">0417 264 292</a>
            </div>
            <div className="flex items-center mb-3">
              <Mail size={18} className="mr-2" />
              <a href="mailto:rossjudd@hotmail.com" className="hover:text-green transition-colors">rossjudd@hotmail.com</a>
            </div>
            <div className="flex items-start mb-3">
              <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
              <p>Goulburn, NSW, Australia</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-green transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-green transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-green transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-green transition-colors">Gallery</Link></li>
              <li><Link to="/testimonials" className="hover:text-green transition-colors">Testimonials</Link></li>
              <li><Link to="/blog" className="hover:text-green transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-green transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-xl mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="hover:text-green transition-colors">Residential Pressure Washing</Link></li>
              <li><Link to="/services" className="hover:text-green transition-colors">Commercial Pressure Washing</Link></li>
              <li><Link to="/services" className="hover:text-green transition-colors">Driveway Cleaning</Link></li>
              <li><Link to="/services" className="hover:text-green transition-colors">House Washing</Link></li>
              <li><Link to="/services" className="hover:text-green transition-colors">Deck & Patio Cleaning</Link></li>
              <li><Link to="/services" className="hover:text-green transition-colors">Roof Cleaning</Link></li>
              <li><Link to="/services" className="hover:text-green transition-colors">Fence Cleaning</Link></li>
            </ul>
          </div>

          {/* Business Hours & Newsletter */}
          <div>
            <h3 className="font-bold text-xl mb-4">Business Hours</h3>
            <div className="space-y-2 mb-6">
              <div className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p>Monday - Friday: 8am - 6pm</p>
                  <p>Saturday: 9am - 1pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <h3 className="font-bold text-xl mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-green transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
            </div>

            <div className="mt-8">
              <Link to="/contact" className="bg-white text-navy py-3 px-6 rounded-lg text-center font-medium hover:bg-gray-200 transition-colors inline-block">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>© {currentYear} R Judd Enterprise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
