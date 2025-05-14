
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import CTASection from '../components/CTASection';
import ScrollAnimation from '../components/ScrollAnimation';

const About = () => {
  // Use the image from Index page for consistency
  const ownerImage = "/lovable-uploads/4c20fc47-a9f3-4cac-817d-1719c44d45b8.png";
  const ctaBackground = "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80";

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-12 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Learn more about R Judd Enterprise and our commitment to excellence in pressure washing services.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <ScrollAnimation>
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src={ownerImage} 
                    alt="Ross Judd" 
                    className="w-full h-auto"
                  />
                </div>
              </ScrollAnimation>
            </div>
            <div className="md:w-1/2">
              <ScrollAnimation>
                <h2 className="text-3xl font-bold text-navy mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  R Judd Enterprise is led by Ross Judd, a respected name in Goulburn's business community with many years of trusted service. With a strong foundation in property maintenance and improvement through R JUDD Enterprises, we recognized the need for high-quality, professional pressure washing services in our community.
                </p>
                <p className="text-gray-600 mb-4">
                  We bring the same commitment to excellence, meticulous attention to detail, and exceptional customer service that has made R JUDD Enterprises successful. Our pressure washing division delivers comprehensive solutions tailored to both residential and commercial clients throughout Goulburn and surrounding areas.
                </p>
                <p className="text-gray-600">
                  Our experienced team uses the latest pressure washing technology and techniques to deliver outstanding results that transform properties and consistently exceed our customers' expectations.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Values" 
            subtitle="The principles that guide everything we do"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ScrollAnimation>
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mb-4 text-white">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">Quality</h3>
                <p className="text-gray-600">
                  We never compromise on quality. From the equipment we use to our cleaning techniques, we ensure every job meets our high standards.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-green rounded-full flex items-center justify-center mb-4 text-white">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">Integrity</h3>
                <p className="text-gray-600">
                  We conduct our business with honesty and transparency. From accurate quotes to honest recommendations, you can trust us to do what's right.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mb-4 text-white">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">Customer Focus</h3>
                <p className="text-gray-600">
                  Your satisfaction is our priority. We listen to your needs, address your concerns, and tailor our services to exceed your expectations.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Our Equipment Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Equipment" 
            subtitle="Professional-grade tools for superior results"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold mb-3 text-navy">Commercial-Grade Pressure Washers</h3>
                <p className="text-gray-600">
                  We use high-quality, commercial-grade pressure washers that provide powerful cleaning with adjustable pressure settings for different surfaces.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold mb-3 text-navy">Surface Cleaners</h3>
                <p className="text-gray-600">
                  Our specialized surface cleaners ensure even cleaning across large areas like driveways and patios, eliminating streaking and maximizing efficiency.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold mb-3 text-navy">Environmentally Friendly Solutions</h3>
                <p className="text-gray-600">
                  We use biodegradable, environmentally responsible cleaning solutions that effectively remove dirt, mold, and algae without harming plants or animals.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Our Service Area */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Service Area" 
            subtitle="Serving Goulburn, Canberra and surrounding communities"
          />
          
          <div className="max-w-3xl mx-auto">
            <ScrollAnimation>
              <div className="bg-white p-6 rounded-lg shadow-inner">
                <p className="text-center text-gray-600 mb-4">
                  We proudly serve residential and commercial clients throughout:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="font-medium text-navy">Goulburn</p>
                  </div>
                  <div className="text-center">
                    <p className="font-medium text-navy">Canberra</p>
                  </div>
                  <div className="text-center">
                    <p className="font-medium text-navy">Marulan</p>
                  </div>
                  <div className="text-center">
                    <p className="font-medium text-navy">Crookwell</p>
                  </div>
                  <div className="text-center">
                    <p className="font-medium text-navy">Taralga</p>
                  </div>
                  <div className="text-center">
                    <p className="font-medium text-navy">Bungonia</p>
                  </div>
                  <div className="text-center">
                    <p className="font-medium text-navy">Windellama</p>
                  </div>
                </div>
                <p className="text-center text-gray-600 mt-4">
                  If you don't see your location listed, please contact us as we may still be able to serve you.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Transform Your Property?"
        subtitle="Contact us today for a free, no-obligation quote on our professional pressure washing services."
        buttonText="Get Your Free Quote"
        buttonLink="/contact"
        backgroundImage={ctaBackground}
      />

      <Footer />
    </div>
  );
};

export default About;
