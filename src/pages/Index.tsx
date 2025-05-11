
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
  Check
} from 'lucide-react';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Pressure washing image
  const pressureWashingHero = "https://images.unsplash.com/photo-1623767322495-1c208883ad06?q=80&w=2070&auto=format&fit=crop";
  
  // Before-After Images
  const beforeImage = "/lovable-uploads/7a6c7328-de8c-43a1-80cc-532f5b359b7d.png"; 
  const afterImage = "/lovable-uploads/710c2b6a-0f4a-48b0-81d1-3e790c100c62.png";

  // Testimonials data
  const testimonials = [
    {
      name: "John Smith",
      location: "Goulburn, NSW",
      quote: "The team at R Judd Enterprise did an amazing job on my driveway and house exterior. It looks like new again! Professional, punctual, and thorough.",
      result: "Driveway looks brand new"
    },
    {
      name: "Sarah Johnson",
      location: "Goulburn, NSW",
      quote: "I couldn't believe the difference in my patio after they cleaned it. Years of dirt gone in just hours. Great value for the quality of work.",
      result: "Patio restored to original condition"
    },
    {
      name: "Michael Thompson",
      location: "Canberra, ACT",
      quote: "As a business owner, I appreciate their professionalism and attention to detail. Our storefront has never looked better. Will definitely use their services again.",
      result: "Increased foot traffic to business"
    },
    {
      name: "Emma Davis",
      location: "Goulburn, NSW",
      quote: "Ross and his team were extremely professional. They cleaned our roof and it looks amazing. The price was fair and the service exceptional.",
      result: "Extended roof lifespan by years"
    },
    {
      name: "David Wilson",
      location: "Canberra, ACT",
      quote: "Excellent service from start to finish. The fence cleaning was done perfectly and they left no mess behind. Very impressed.",
      result: "Fence restored to original color"
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
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-24 md:py-40 relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${pressureWashingHero})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <AnimateOnScroll className="mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
              Transform Your Property with <span className="font-semibold">Professional</span> Pressure Washing
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll className="mb-8" delay={200}>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 font-light">
              Restore the beauty of your home or business with our expert pressure washing services in Goulburn, Canberra & NSW.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={400}>
            <button 
              onClick={openModal} 
              className="cta-button animate-glow"
            >
              Free Quote
            </button>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Trusted by Goulburn Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <AnimateOnScroll className="md:w-1/3">
              <div className="rounded-lg overflow-hidden shadow-xl card-3d">
                <img src="https://images.unsplash.com/photo-1610501640036-c70e9c7f10c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Pressure Washing Service" className="w-full object-cover h-72" />
              </div>
            </AnimateOnScroll>
            <div className="md:w-2/3">
              <AnimateOnScroll>
                <h2 className="text-3xl font-light text-navy mb-4">Trusted by <span className="font-semibold">Goulburn</span></h2>
                <p className="text-lg text-gray-600 mb-4">
                  Ross Judd of R JUDD Enterprises brings years of experience and a reputation for excellence to every pressure washing job. As a trusted name in Goulburn for many years, Ross has built a solid reputation for quality craftsmanship and customer satisfaction.
                </p>
                <p className="text-lg text-gray-600 mb-6">
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
      <section className="py-16 bg-gradient" id="before-after">
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
                <Link to="/gallery" className="neumorphic-button inline-block">
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
                icon={<HomeIcon size={48} />}
              />
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={200}>
              <ServiceCard
                title="Commercial Pressure Washing"
                description="Maintain a professional appearance for your business with our building exterior, parking lot, and sidewalk cleaning."
                icon={<BuildingIcon size={48} />}
              />
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={300}>
              <ServiceCard
                title="Driveway & Concrete Cleaning"
                description="Remove oil stains, dirt, and grime from concrete, pavers, and other driveway surfaces."
                icon={<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                </svg>}
              />
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={400}>
              <ServiceCard
                title="House Washing"
                description="Safely remove dirt, mold, and mildew from your home's exterior to restore its appearance."
                icon={<HomeIcon size={48} />}
              />
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={500}>
              <ServiceCard
                title="Deck & Patio Restoration"
                description="Bring your outdoor living spaces back to life with our deck and patio cleaning services."
                icon={<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>}
              />
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={600}>
              <ServiceCard
                title="Roof Cleaning"
                description="Remove black streaks, moss, and algae from your roof to improve your home's appearance and extend roof life."
                icon={<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>}
              />
            </AnimateOnScroll>
          </div>
          
          <div className="text-center mt-10">
            <AnimateOnScroll>
              <Link to="/services" className="neumorphic-button inline-block">
                View All Services
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <SectionTitle 
              title="Why Choose Us" 
              subtitle="Experience the difference with our professional pressure washing services"
            />
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimateOnScroll delay={100}>
              <div className="glass-card rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <BuildingIcon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">Backed by R JUDD Enterprises</h3>
                <p className="text-gray-600">
                  A trusted local business with years of experience serving the Goulburn community with excellence.
                </p>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={200}>
              <div className="glass-card rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">Eco-Friendly Solutions</h3>
                <p className="text-gray-600">
                  We use environmentally responsible cleaning solutions that are effective yet safe for your family and property.
                </p>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={300}>
              <div className="glass-card rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClipboardCheck size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">100% Satisfaction Guarantee</h3>
                <p className="text-gray-600">
                  We stand behind our work with a complete satisfaction guarantee. Your happiness is our priority.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
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
                icon={<MessageCircle size={48} />}
                title="Request a Quote"
                description="Contact us for a free, no-obligation quote. We'll assess your needs and provide transparent pricing."
              />
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={200}>
              <ProcessCard
                step={2}
                icon={<Calendar size={48} />}
                title="Schedule Service"
                description="We'll find a time that works for you. Our team arrives on time, ready to transform your property."
              />
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={300}>
              <ProcessCard
                step={3}
                icon={<HomeIcon size={48} />}
                title="Enjoy the Results"
                description="Sit back and enjoy your beautifully cleaned property, free from dirt, grime, and buildup."
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient">
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

      {/* Special Offers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <SectionTitle 
              title="Special Offers" 
              subtitle="Take advantage of our limited-time deals"
            />
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimateOnScroll delay={100}>
              <div className="glass-card p-8 rounded-xl text-center transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                <h3 className="text-2xl font-semibold mb-2 text-navy">New Customer Special</h3>
                <p className="text-4xl font-bold text-green mb-4">15% OFF</p>
                <p className="text-gray-600 mb-6">Your first pressure washing service with us.</p>
                <button 
                  onClick={openModal} 
                  className="neumorphic-button inline-block"
                >
                  Free Quote
                </button>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={200}>
              <div className="glass-card p-8 rounded-xl text-center transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                <h3 className="text-2xl font-semibold mb-2 text-navy">Bundle & Save</h3>
                <p className="text-4xl font-bold text-orange mb-4">25% OFF</p>
                <p className="text-gray-600 mb-6">When you book 3 or more services together.</p>
                <button 
                  onClick={openModal} 
                  className="neumorphic-button inline-block"
                >
                  Free Quote
                </button>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient" id="faq">
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
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <CTASection openModal={openModal} />
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
