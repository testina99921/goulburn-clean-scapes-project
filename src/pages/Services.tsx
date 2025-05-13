
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import { Button } from '@/components/ui/button';
import AnimateOnScroll from '../components/AnimateOnScroll';
import { 
  Home, 
  Building, 
  Droplet,
  SprayCan,
  ShowerHead,
  Wrench,
  Leaf,
  PaintBucket,
  Trash2,
  Brush,
  PhoneCall
} from 'lucide-react';
import { Link } from 'react-router-dom';

// SEO meta tags component
const SEOMetaTags = () => {
  useEffect(() => {
    // Update document title for SEO
    document.title = "Professional Pressure Washing Services | R Judd Enterprise";
    
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = "description";
    metaDescription.content = "R Judd Enterprise offers comprehensive pressure washing services for residential and commercial properties in Goulburn, Canberra & NSW. From house washing to driveway cleaning.";
    document.head.appendChild(metaDescription);
    
    // Add keywords
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = "keywords";
    metaKeywords.content = "pressure washing, pressure cleaning, house washing, roof cleaning, driveway cleaning, Goulburn, Canberra, NSW";
    document.head.appendChild(metaKeywords);
    
    return () => {
      // Clean up only the tags we've added
      const tags = document.head.querySelectorAll('meta[name="description"], meta[name="keywords"]');
      tags.forEach(tag => document.head.removeChild(tag));
    };
  }, []);
  
  return null;
};

const Services = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <SEOMetaTags />
      
      {/* Core Services Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <SectionTitle 
              title="Core Pressure Washing Services" 
              subtitle="Our most popular cleaning solutions"
            />
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Service 1 - Residential */}
            <AnimateOnScroll>
              <div className="glass-card rounded-xl overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                    alt="Residential Pressure Washing" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-orange flex items-center justify-center mr-4">
                      <Home className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-black">Residential Pressure Washing</h3>
                  </div>
                  <p className="mb-4 text-navy">
                    Maintain your home's appearance and protect your investment with our comprehensive residential pressure washing services.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <span className="text-green mr-2">✓</span>
                      <span>House exterior washing</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green mr-2">✓</span>
                      <span>Driveway and walkway cleaning</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green mr-2">✓</span>
                      <span>Deck and patio restoration</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green mr-2">✓</span>
                      <span>Fence cleaning and brightening</span>
                    </li>
                  </ul>
                  <Link to="/contact">
                    <Button className="w-full bg-navy hover:bg-green text-white">
                      Request a Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
            
            {/* Service 2 - Commercial */}
            <AnimateOnScroll delay={200}>
              <div className="glass-card rounded-xl overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/lovable-uploads/c45bafd1-9bca-4cc4-80bb-60f2ad40c6e5.png" 
                    alt="Commercial Pressure Washing" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-green flex items-center justify-center mr-4">
                      <Building className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-black">Commercial Pressure Washing</h3>
                  </div>
                  <p className="mb-4 text-navy">
                    Enhance your business's curb appeal and create a welcoming environment for customers with our professional commercial cleaning services.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <span className="text-green mr-2">✓</span>
                      <span>Storefront and building exterior cleaning</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green mr-2">✓</span>
                      <span>Parking lot and garage cleaning</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green mr-2">✓</span>
                      <span>Dumpster pad and loading dock cleaning</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green mr-2">✓</span>
                      <span>Graffiti removal</span>
                    </li>
                  </ul>
                  <Link to="/contact">
                    <Button className="w-full bg-navy hover:bg-green text-white">
                      Request a Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      
      {/* Specialty Services */}
      <section className="py-16 bg-navyLight/10">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <SectionTitle 
              title="Specialty Services" 
              subtitle="Specialized cleaning solutions for specific needs"
            />
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1 - Driveway & Concrete */}
            <AnimateOnScroll>
              <div className="glass-card p-6 rounded-lg h-full">
                <div className="h-16 w-16 rounded-full bg-orangeLight flex items-center justify-center mb-4 mx-auto">
                  <SprayCan className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-black">Driveway & Walkway Cleaning</h3>
                <p className="text-navy text-center mb-4">
                  Remove oil stains, dirt, and grime from concrete, pavers, and other hard surfaces.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-green mr-2">✓</span>
                    <span>Oil and grease removal</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green mr-2">✓</span>
                    <span>Gum and stain treatment</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green mr-2">✓</span>
                    <span>Concrete sealing available</span>
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>
            
            {/* Service 2 - House Washing */}
            <AnimateOnScroll delay={100}>
              <div className="glass-card p-6 rounded-lg h-full">
                <div className="h-16 w-16 rounded-full bg-green flex items-center justify-center mb-4 mx-auto">
                  <Home className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-black">House Washing</h3>
                <p className="text-navy text-center mb-4">
                  Safely remove dirt, mold, and mildew from your home's exterior surfaces.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-green mr-2">✓</span>
                    <span>Vinyl, aluminum, and wood siding</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green mr-2">✓</span>
                    <span>Brick and stone surfaces</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green mr-2">✓</span>
                    <span>Eaves and trim cleaning</span>
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>
            
            {/* Service 3 - Roof Cleaning */}
            <AnimateOnScroll delay={200}>
              <div className="glass-card p-6 rounded-lg h-full">
                <div className="h-16 w-16 rounded-full bg-navy flex items-center justify-center mb-4 mx-auto">
                  <Droplet className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-black">Roof Cleaning</h3>
                <p className="text-navy text-center mb-4">
                  Remove black streaks, moss, and algae to improve appearance and extend roof life.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-green mr-2">✓</span>
                    <span>Low-pressure soft washing</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green mr-2">✓</span>
                    <span>Moss and algae treatment</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green mr-2">✓</span>
                    <span>Safe for all roof types</span>
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>
            
            {/* Service 4 - Deck & Patio */}
            <AnimateOnScroll delay={300}>
              <div className="glass-card p-6 rounded-lg h-full">
                <div className="h-16 w-16 rounded-full bg-orangeLight flex items-center justify-center mb-4 mx-auto">
                  <ShowerHead className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-black">Deck & Patio Restoration</h3>
                <p className="text-navy text-center mb-4">
                  Bring your outdoor living spaces back to life with our restoration services.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-green mr-2">✓</span>
                    <span>Wood, composite, and vinyl deck cleaning</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green mr-2">✓</span>
                    <span>Stain and sealant application</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green mr-2">✓</span>
                    <span>Paver and stone patio cleaning</span>
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>
            
            {/* Service 5 - Fence Cleaning */}
            <AnimateOnScroll delay={400}>
              <div className="glass-card p-6 rounded-lg h-full">
                <div className="h-16 w-16 rounded-full bg-green flex items-center justify-center mb-4 mx-auto">
                  <PaintBucket className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-black">Fence Cleaning</h3>
                <p className="text-navy text-center mb-4">
                  Restore the beauty of your fences with our specialized cleaning services.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-green mr-2">✓</span>
                    <span>Wood, vinyl, and metal fences</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green mr-2">✓</span>
                    <span>Mold and mildew removal</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green mr-2">✓</span>
                    <span>Staining and sealing available</span>
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>
            
            {/* Service 6 - Garbage Bin Cleaning */}
            <AnimateOnScroll delay={500}>
              <div className="glass-card p-6 rounded-lg h-full">
                <div className="h-16 w-16 rounded-full bg-navy flex items-center justify-center mb-4 mx-auto">
                  <Trash2 className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-black">Garbage Bin Cleaning</h3>
                <p className="text-navy text-center mb-4">
                  Eliminate odors and bacteria from your waste containers with our sanitizing service.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-green mr-2">✓</span>
                    <span>Residential and commercial bins</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green mr-2">✓</span>
                    <span>Deodorizing and sanitizing</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green mr-2">✓</span>
                    <span>Eco-friendly cleaning solutions</span>
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <SectionTitle 
              title="Additional Services" 
              subtitle="Custom cleaning solutions for your unique needs"
            />
          </AnimateOnScroll>
          
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll>
              <div className="glass-card rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-navy">Custom Cleaning Solutions</h3>
                <p className="mb-6 text-navy">
                  We understand that every property has unique cleaning challenges. If you don't see the specific service you're looking for, please contact us to discuss your needs. Our team is equipped to handle a wide range of exterior cleaning projects.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium mb-3 text-black">Additional Residential Services</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-green mr-2 mt-1">✓</span>
                        <span>Gutter exterior cleaning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green mr-2 mt-1">✓</span>
                        <span>Window washing (exterior)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green mr-2 mt-1">✓</span>
                        <span>Solar panel cleaning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green mr-2 mt-1">✓</span>
                        <span>Pool deck cleaning</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-3 text-black">Additional Commercial Services</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-green mr-2 mt-1">✓</span>
                        <span>Awning cleaning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green mr-2 mt-1">✓</span>
                        <span>Drive-through lane cleaning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green mr-2 mt-1">✓</span>
                        <span>Construction cleanup</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green mr-2 mt-1">✓</span>
                        <span>Restaurant patio cleaning</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Link to="/contact">
                    <Button className="bg-navy hover:bg-green text-white px-8 py-3">
                      Request a Custom Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Property?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today to schedule a service or request a free, no-obligation quote.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-white text-navy py-3 px-6 rounded-lg font-bold hover:bg-green hover:text-white transition-colors inline-flex items-center justify-center"
              >
                <Wrench className="mr-2 h-5 w-5" /> Request a Quote
              </Link>
              <a 
                href="tel:0417264292" 
                className="bg-transparent border-2 border-white text-white py-3 px-6 rounded-lg font-bold hover:bg-white hover:text-navy transition-colors inline-flex items-center justify-center"
              >
                <PhoneCall className="mr-2 h-5 w-5" /> Call: 0417 264 292
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
