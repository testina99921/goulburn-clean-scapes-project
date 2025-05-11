
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import ScrollAnimation from '../components/ScrollAnimation';
import ProcessCard from '../components/ProcessCard';
import PricingCard from '../components/PricingCard';
import QuoteRequestModal from '../components/QuoteRequestModal';

// Import icons
import { 
  Home as HomeIcon, 
  Building as BuildingIcon, 
  ClipboardCheck, 
  MessageCircle, 
  Calendar
} from 'lucide-react';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Placeholder images until client provides real ones
  const placeholderHero = "https://images.unsplash.com/photo-1616281677557-b3a7b9324426?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
  // Use uploaded before-after images
  const beforeImage = "/lovable-uploads/9dfe1d7e-09af-4d87-9b65-698dec49cbf6.png";
  const afterImage = "/lovable-uploads/07e5f244-19d5-4aec-8a61-497b67c13ace.png";
  const deckBeforeImage = "/lovable-uploads/7a6c7328-de8c-43a1-80cc-532f5b359b7d.png";
  const roofBeforeAfterImage = "/lovable-uploads/710c2b6a-0f4a-48b0-81d1-3e790c100c62.png";
  const pressureWashingImage = "https://images.unsplash.com/photo-1610501640036-c70e9c7f10c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80";

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-20 md:py-36 relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${pressureWashingImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transform Your Property with Professional Pressure Washing
            </h1>
          </ScrollAnimation>
          <ScrollAnimation>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Restore the beauty of your home or business with our expert pressure washing services in Goulburn, Canberra & NSW.
            </p>
          </ScrollAnimation>
          <ScrollAnimation>
            <button 
              onClick={openModal} 
              className="bg-white text-[#4A90A7] hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Free Quote
            </button>
          </ScrollAnimation>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Services" 
            subtitle="Professional pressure washing solutions for every surface"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation>
              <ServiceCard
                title="Residential Pressure Washing"
                description="Complete exterior cleaning for homes, including siding, driveways, decks, patios, walkways and fences."
                icon={<HomeIcon size={32} />}
              />
            </ScrollAnimation>
            
            <ScrollAnimation>
              <ServiceCard
                title="Commercial Pressure Washing"
                description="Maintain a professional appearance for your business with our building exterior, parking lot, and sidewalk cleaning."
                icon={<BuildingIcon size={32} />}
              />
            </ScrollAnimation>
            
            <ScrollAnimation>
              <ServiceCard
                title="Driveway & Concrete Cleaning"
                description="Remove oil stains, dirt, and grime from concrete, pavers, and other driveway surfaces."
                icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                </svg>}
              />
            </ScrollAnimation>
            
            <ScrollAnimation>
              <ServiceCard
                title="House Washing"
                description="Safely remove dirt, mold, and mildew from your home's exterior to restore its appearance."
                icon={<HomeIcon size={32} />}
              />
            </ScrollAnimation>
            
            <ScrollAnimation>
              <ServiceCard
                title="Deck & Patio Restoration"
                description="Bring your outdoor living spaces back to life with our deck and patio cleaning services."
                icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>}
              />
            </ScrollAnimation>
            
            <ScrollAnimation>
              <ServiceCard
                title="Roof Cleaning"
                description="Remove black streaks, moss, and algae from your roof to improve your home's appearance and extend roof life."
                icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>}
              />
            </ScrollAnimation>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/services" className="bg-[#4A90A7] text-white py-3 px-6 rounded-lg hover:bg-[#5EB0C9] transition-colors inline-block font-bold">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted by Goulburn Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <ScrollAnimation>
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img src={pressureWashingImage} alt="Pressure Washing Service" className="w-full object-cover" />
                </div>
              </ScrollAnimation>
            </div>
            <div className="md:w-2/3">
              <ScrollAnimation>
                <h2 className="text-3xl font-bold text-[#4A90A7] mb-4">Trusted by Goulburn</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Ross Judd of R JUDD Enterprises brings years of experience and a reputation for excellence to every pressure washing job. As a trusted name in Goulburn for many years, Ross has built a solid reputation for quality craftsmanship and customer satisfaction.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Now offering professional pressure washing services, we bring the same commitment to quality and attention to detail that has made R JUDD Enterprises a trusted name in the community.
                </p>
                <Link to="/about" className="text-[#4A90A7] font-medium hover:text-[#5EB0C9] transition-colors flex items-center">
                  Learn More About Us
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="See the Difference" 
            subtitle="Dramatic transformations with our professional pressure washing services"
          />
          
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <BeforeAfterSlider
                beforeImage={beforeImage}
                afterImage={afterImage}
                height="500px"
              />
            </ScrollAnimation>
            
            <div className="text-center mt-8">
              <Link to="/gallery" className="bg-[#4A90A7] text-white py-3 px-6 rounded-lg font-bold hover:bg-[#5EB0C9] transition-colors inline-block">
                View More Transformations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Why Choose Us" 
            subtitle="Experience the difference with our professional pressure washing services"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-[#4A90A7] rounded-full flex items-center justify-center mx-auto mb-4">
                  <BuildingIcon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#4A90A7]">Backed by R JUDD Enterprises</h3>
                <p className="text-gray-600">
                  A trusted local business with years of experience serving the Goulburn community with excellence.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#4A90A7]">Eco-Friendly Solutions</h3>
                <p className="text-gray-600">
                  We use environmentally responsible cleaning solutions that are effective yet safe for your family and property.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClipboardCheck size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#4A90A7]">100% Satisfaction Guarantee</h3>
                <p className="text-gray-600">
                  We stand behind our work with a complete satisfaction guarantee. Your happiness is our priority.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="How It Works" 
            subtitle="Getting your property clean is easy with our simple process"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation>
              <ProcessCard
                step={1}
                icon={<MessageCircle size={36} />}
                title="Request a Quote"
                description="Contact us for a free, no-obligation quote. We'll assess your needs and provide transparent pricing."
              />
            </ScrollAnimation>
            
            <ScrollAnimation>
              <ProcessCard
                step={2}
                icon={<Calendar size={36} />}
                title="Schedule Service"
                description="We'll find a time that works for you. Our team arrives on time, ready to transform your property."
              />
            </ScrollAnimation>
            
            <ScrollAnimation>
              <ProcessCard
                step={3}
                icon={<HomeIcon size={36} />}
                title="Enjoy the Results"
                description="Sit back and enjoy your beautifully cleaned property, free from dirt, grime, and buildup."
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Pricing" 
            subtitle="Transparent pricing for our professional pressure washing services"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ScrollAnimation>
              <PricingCard
                title="Basic Residential"
                price="From $199"
                description="Perfect for homeowners needing essential cleaning services"
                features={[
                  { text: "Driveway Cleaning", included: true },
                  { text: "Walkway Cleaning", included: true },
                  { text: "Patio Cleaning", included: true },
                  { text: "House Exterior Washing", included: false },
                  { text: "Roof Cleaning", included: false },
                  { text: "Free Sealing Treatment", included: false }
                ]}
              />
            </ScrollAnimation>
            
            <ScrollAnimation>
              <PricingCard
                title="Complete Home Package"
                price="From $399"
                description="Comprehensive cleaning for your entire property"
                recommended={true}
                features={[
                  { text: "Driveway Cleaning", included: true },
                  { text: "Walkway Cleaning", included: true },
                  { text: "Patio/Deck Cleaning", included: true },
                  { text: "House Exterior Washing", included: true },
                  { text: "Fence Cleaning", included: true },
                  { text: "Free Sealing Treatment", included: false }
                ]}
              />
            </ScrollAnimation>
            
            <ScrollAnimation>
              <PricingCard
                title="Commercial"
                price="Custom"
                description="Tailored solutions for businesses of all sizes"
                features={[
                  { text: "Building Exterior", included: true },
                  { text: "Parking Areas", included: true },
                  { text: "Walkways & Entrances", included: true },
                  { text: "Dumpster Areas", included: true },
                  { text: "Regular Maintenance Plans", included: true },
                  { text: "After-hours Service", included: true }
                ]}
                buttonText="Get Custom Quote"
              />
            </ScrollAnimation>
          </div>
          
          <div className="text-center mt-8 text-gray-600">
            <p>All prices are starting points and may vary based on the size and condition of the area to be cleaned.</p>
            <p>Contact us for a free, accurate quote tailored to your specific needs.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="What Our Customers Say" 
            subtitle="Read testimonials from satisfied customers in Goulburn"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollAnimation>
              <TestimonialCard
                name="John Smith"
                location="Goulburn, NSW"
                quote="The team at R Judd Enterprise did an amazing job on my driveway and house exterior. It looks like new again! Professional, punctual, and thorough."
              />
            </ScrollAnimation>
            
            <ScrollAnimation>
              <TestimonialCard
                name="Sarah Johnson"
                location="Goulburn, NSW"
                quote="I couldn't believe the difference in my patio after they cleaned it. Years of dirt gone in just hours. Great value for the quality of work."
              />
            </ScrollAnimation>
            
            <ScrollAnimation>
              <TestimonialCard
                name="Michael Thompson"
                location="Canberra, ACT"
                quote="As a business owner, I appreciate their professionalism and attention to detail. Our storefront has never looked better. Will definitely use their services again."
              />
            </ScrollAnimation>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/testimonials" className="bg-[#4A90A7] text-white py-3 px-6 rounded-lg font-bold hover:bg-[#5EB0C9] transition-colors inline-block">
              Read More Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-[#4A90A7] text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl max-w-3xl mx-auto mb-6">
              At R Judd Enterprise, our mission is to deliver exceptional pressure washing services that transform your property while upholding the highest standards of quality, customer satisfaction, and environmental responsibility.
            </p>
            <p className="text-lg max-w-3xl mx-auto">
              We believe in honesty, integrity, and building lasting relationships with our clients in Goulburn, Canberra and surrounding areas.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Special Offers" 
            subtitle="Take advantage of our limited-time deals"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="border-2 border-dashed border-green p-6 rounded-lg bg-green/5 text-center">
                <h3 className="text-2xl font-bold mb-2 text-[#4A90A7]">New Customer Special</h3>
                <p className="text-4xl font-bold text-green mb-4">15% OFF</p>
                <p className="text-gray-600 mb-6">Your first pressure washing service with us.</p>
                <button 
                  onClick={openModal} 
                  className="bg-[#4A90A7] text-white py-3 px-6 rounded-lg font-bold hover:bg-[#5EB0C9] transition-colors inline-block"
                >
                  Free Quote
                </button>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="border-2 border-dashed border-orange p-6 rounded-lg bg-orange/5 text-center">
                <h3 className="text-2xl font-bold mb-2 text-[#4A90A7]">Bundle & Save</h3>
                <p className="text-4xl font-bold text-orange mb-4">25% OFF</p>
                <p className="text-gray-600 mb-6">When you book 3 or more services together.</p>
                <button 
                  onClick={openModal} 
                  className="bg-[#4A90A7] text-white py-3 px-6 rounded-lg font-bold hover:bg-[#5EB0C9] transition-colors inline-block"
                >
                  Free Quote
                </button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Quote Request Modal */}
      <QuoteRequestModal isOpen={isModalOpen} onClose={closeModal} />

      <Footer />
    </div>
  );
};

export default Index;
