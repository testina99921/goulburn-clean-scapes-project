import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import TestimonialCarousel from '../components/TestimonialCarousel';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import AnimateOnScroll from '../components/AnimateOnScroll';
import ProcessCard from '../components/ProcessCard';
import QuoteRequestModal from '../components/QuoteRequestModal';

// Import icons
import { 
  Home as HomeIcon, 
  Building as BuildingIcon, 
  ClipboardCheck, 
  MessageCircle, 
  Calendar,
  Droplet,
  SprayCan,
  House,
  ShowerHead,
  Wrench,
  Award
} from 'lucide-react';

// SEO meta tags component
const SEOMetaTags = () => {
  useEffect(() => {
    // Update document title for SEO
    document.title = "R Judd Enterprise | Professional Pressure Washing Services Goulburn, Canberra & NSW";
    
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = "description";
    metaDescription.content = "R Judd Enterprise provides top-quality pressure washing services for residential and commercial properties in Goulburn, Canberra & NSW. Transform your property today!";
    document.head.appendChild(metaDescription);
    
    // Add keywords
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = "keywords";
    metaKeywords.content = "pressure washing, pressure cleaning, house washing, roof cleaning, driveway cleaning, Goulburn, Canberra, NSW, R Judd Enterprise";
    document.head.appendChild(metaKeywords);
    
    // Add canonical link
    const canonicalLink = document.createElement('link');
    canonicalLink.rel = "canonical";
    canonicalLink.href = window.location.origin;
    document.head.appendChild(canonicalLink);
    
    return () => {
      // Clean up only the tags we've added
      const tags = document.head.querySelectorAll('meta[name="description"], meta[name="keywords"], link[rel="canonical"]');
      tags.forEach(tag => document.head.removeChild(tag));
    };
  }, []);
  
  return null;
};

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Hero image - using the roof before/after image
  const heroImage = "/lovable-uploads/17ebbf29-bccf-463d-8e21-bc70614e1f85.png";
  
  // Before-After Images
  const beforeImage = "/lovable-uploads/7a6c7328-de8c-43a1-80cc-532f5b359b7d.png"; 
  const afterImage = "/lovable-uploads/710c2b6a-0f4a-48b0-81d1-3e790c100c62.png";

  // Testimonials data
  const testimonials = [
    {
      name: "Alex Wilson",
      location: "Goulburn, NSW",
      quote: "The team at R Judd Enterprise did an amazing job on my driveway and house exterior. It looks like new again! Professional, punctual, and thorough.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      location: "Goulburn, NSW",
      quote: "I couldn't believe the difference in my patio after they cleaned it. Years of dirt gone in just hours. Great value for the quality of work.",
      rating: 5
    },
    {
      name: "Michael Thompson",
      location: "Canberra, ACT",
      quote: "As a business owner, I appreciate their professionalism and attention to detail. Our storefront has never looked better. Will definitely use their services again.",
      rating: 4
    },
    {
      name: "Emma Davis",
      location: "Goulburn, NSW",
      quote: "Ross and his team were extremely professional. They cleaned our roof and it looks amazing. The price was fair and the service exceptional.",
      rating: 5
    },
    {
      name: "David Wilson",
      location: "Canberra, ACT",
      quote: "Excellent service from start to finish. The fence cleaning was done perfectly and they left no mess behind. Very impressed.",
      rating: 4
    }
  ];

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Initialize animation observers
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-section');
    elements.forEach(el => observer.observe(el));

    // Check if we need to scroll to specific section based on hash
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient">
      <Header />
      <SEOMetaTags />
      
      {/* Hero Section - Improved text contrast */}
      <section 
        className="pt-32 pb-24 md:py-40 relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll className="mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Transform Your Property with <span className="font-semibold">Professional</span> Pressure Washing
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll className="mb-8" delay={200}>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] bg-navy/20 p-3 rounded-lg inline-block">
              Restore the beauty of your home or business with our expert pressure washing services in Goulburn, Canberra & NSW.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={400} className="flex flex-col md:flex-row justify-center items-center gap-4">
            <button 
              onClick={openModal} 
              className="cta-button animate-glow flex items-center justify-center"
            >
              <Droplet className="w-5 h-5 mr-2" />
              Get A Free Quote
            </button>
            <Link 
              to="/services"
              className="neumorphic-button bg-white text-navy hover:bg-navyLight hover:text-white flex items-center"
            >
              <SprayCan className="w-5 h-5 mr-2" />
              Learn More
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Trusted by Goulburn Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <AnimateOnScroll className="md:w-1/3">
              <div className="rounded-lg overflow-hidden shadow-xl card-3d">
                <img src="/lovable-uploads/4c20fc47-a9f3-4cac-817d-1719c44d45b8.png" alt="Ross Judd" className="w-full object-cover h-72" />
              </div>
            </AnimateOnScroll>
            <div className="md:w-2/3">
              <AnimateOnScroll>
                <h2 className="text-3xl font-light text-navy mb-4">Trusted by <span className="font-semibold">Goulburn</span></h2>
                <p className="text-lg text-navy mb-4">
                  Ross Judd of R JUDD Enterprises brings years of experience and a reputation for excellence to every pressure washing job. As a trusted name in Goulburn for many years, Ross has built a solid reputation for quality craftsmanship and customer satisfaction.
                </p>
                <p className="text-lg text-navy mb-6">
                  Now offering professional pressure washing services, we bring the same commitment to quality and attention to detail that has made R JUDD Enterprises a trusted name in the community.
                </p>
                <Link to="/about" className="text-navy font-medium hover:text-navyLight transition-colors flex items-center fancy-link">
                  Learn More About Us
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Showcase */}
      <section className="py-16 bg-navyLight/10" id="before-after">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <SectionTitle 
              title="See the Difference" 
              subtitle="Dramatic transformations with our professional pressure washing services"
            />
          </AnimateOnScroll>
          
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll delay={200}>
              <BeforeAfterSlider
                beforeImage={beforeImage}
                afterImage={afterImage}
                height="500px"
              />
            </AnimateOnScroll>
            
            <div className="text-center mt-8">
              <AnimateOnScroll delay={400}>
                <Link to="/gallery" className="neumorphic-button inline-flex items-center">
                  <Droplet className="w-5 h-5 mr-2" />
                  View More Transformations
                </Link>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-white" id="services">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <SectionTitle 
              title="Our Services" 
              subtitle="Professional pressure washing solutions for every surface"
            />
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimateOnScroll delay={100}>
              <ServiceCard
                title="Residential Pressure Washing"
                description="Complete exterior cleaning for homes, including siding, driveways, decks, patios, walkways and fences."
                icon={<House size={48} className="text-navy" />}
              />
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={200}>
              <ServiceCard
                title="Commercial Pressure Washing"
                description="Maintain a professional appearance for your business with our building exterior, parking lot, and sidewalk cleaning."
                icon={<BuildingIcon size={48} className="text-green" />}
              />
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={300}>
              <ServiceCard
                title="Driveway & Concrete Cleaning"
                description="Remove oil stains, dirt, and grime from concrete, pavers, and other driveway surfaces."
                icon={<SprayCan size={48} className="text-orange" />}
              />
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={400}>
              <ServiceCard
                title="House Washing"
                description="Safely remove dirt, mold, and mildew from your home's exterior to restore its appearance."
                icon={<HomeIcon size={48} className="text-navy" />}
              />
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={500}>
              <ServiceCard
                title="Deck & Patio Restoration"
                description="Bring your outdoor living spaces back to life with our deck and patio cleaning services."
                icon={<ShowerHead size={48} className="text-greenLight" />}
              />
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={600}>
              <ServiceCard
                title="Roof Cleaning"
                description="Remove black streaks, moss, and algae from your roof to improve your home's appearance and extend roof life."
                icon={<Droplet size={48} className="text-orangeLight" />}
              />
            </AnimateOnScroll>
          </div>
          
          <div className="text-center mt-10">
            <AnimateOnScroll>
              <Link to="/services" className="neumorphic-button inline-flex items-center">
                <Wrench className="w-5 h-5 mr-2" />
                View All Services
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-navyLight/10">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <SectionTitle 
              title="Why Choose Us" 
              subtitle="Experience the difference with our professional pressure washing services"
            />
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimateOnScroll delay={100}>
              <div className="glass-card rounded-xl p-8 text-center h-full flex flex-col">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BuildingIcon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">Backed by R JUDD Enterprises</h3>
                <p className="text-navy">
                  A trusted local business with years of experience serving the Goulburn community with excellence.
                </p>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={200}>
              <div className="glass-card rounded-xl p-8 text-center h-full flex flex-col">
                <div className="w-16 h-16 bg-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplet size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">Eco-Friendly Solutions</h3>
                <p className="text-navy">
                  We use environmentally responsible cleaning solutions that are effective yet safe for your family and property.
                </p>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={300}>
              <div className="glass-card rounded-xl p-8 text-center h-full flex flex-col">
                <div className="w-16 h-16 bg-orange-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClipboardCheck size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">100% Satisfaction Guarantee</h3>
                <p className="text-navy">
                  We stand behind our work with a complete satisfaction guarantee. Your happiness is our priority.
                </p>
                <div className="mt-auto pt-4 flex justify-center">
                  <Award size={32} className="text-orange-700" />
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white" id="how-it-works">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <SectionTitle 
              title="How It Works" 
              subtitle="Getting your property clean is easy with our simple process"
            />
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimateOnScroll delay={100}>
              <ProcessCard
                step={1}
                icon={<MessageCircle size={48} className="text-green" />}
                title="Request a Quote"
                description="Contact us for a free, no-obligation quote. We'll assess your needs and provide transparent pricing."
              />
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={200}>
              <ProcessCard
                step={2}
                icon={<Calendar size={48} className="text-green" />}
                title="Schedule Service"
                description="We'll find a time that works for you. Our team arrives on time, ready to transform your property."
              />
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={300}>
              <ProcessCard
                step={3}
                icon={<HomeIcon size={48} className="text-green" />}
                title="Enjoy the Results"
                description="Sit back and enjoy your beautifully cleaned property, free from dirt, grime, and buildup."
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-navyLight/10">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <SectionTitle 
              title="What Our Customers Say" 
              subtitle="Read testimonials from satisfied customers in Goulburn and Canberra"
            />
          </AnimateOnScroll>
          
          <AnimateOnScroll delay={200}>
            <TestimonialCarousel testimonials={testimonials} />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl font-light mb-6">Our Mission</h2>
            <p className="text-xl max-w-3xl mx-auto mb-6 opacity-90">
              At R Judd Enterprise, our mission is to deliver exceptional pressure washing services that transform your property while upholding the highest standards of quality, customer satisfaction, and environmental responsibility.
            </p>
            <p className="text-lg max-w-3xl mx-auto opacity-80">
              We believe in honesty, integrity, and building lasting relationships with our clients in Goulburn, Canberra and surrounding areas.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-navy/10" id="faq">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <SectionTitle 
              title="Frequently Asked Questions" 
              subtitle="Get answers to common questions about our pressure washing services"
            />
          </AnimateOnScroll>
          
          <AnimateOnScroll delay={200}>
            <FAQSection />
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-navy text-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Property?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Contact us today to schedule your pressure washing service. We'll help you restore your property's appearance and protect your investment.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <button
                  onClick={openModal}
                  className="bg-white text-navy py-3 px-6 rounded-lg font-bold hover:bg-green hover:text-white transition-colors inline-flex items-center justify-center"
                >
                  <Droplet className="w-5 h-5 mr-2" />
                  Get A Free Quote
                </button>
                <Link
                  to="/contact"
                  className="bg-transparent border-2 border-white text-white py-3 px-6 rounded-lg font-bold hover:bg-white hover:text-navy transition-colors inline-flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Us
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Quote Request Modal */}
      <QuoteRequestModal isOpen={isModalOpen} onClose={closeModal} />

      <Footer />
    </div>
  );
};

export default Index;
