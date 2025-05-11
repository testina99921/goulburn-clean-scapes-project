
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import CTASection from '../components/CTASection';
import ScrollAnimation from '../components/ScrollAnimation';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

const Services = () => {
  // Use uploaded images for the service page
  const residentialImage = "/lovable-uploads/710c2b6a-0f4a-48b0-81d1-3e790c100c62.png"; // Using one of the uploaded images
  const commercialImage = "/lovable-uploads/7a6c7328-de8c-43a1-80cc-532f5b359b7d.png"; // Using another uploaded image

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Professional pressure washing solutions for residential and commercial properties in Goulburn and surrounding areas.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation>
              <p className="text-lg text-navy mb-8">
                At R Judd Enterprise, we offer comprehensive pressure washing services designed to effectively clean and restore various surfaces. With our state-of-the-art equipment and experienced team, we deliver superior results that enhance the appearance and longevity of your property.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="neumorphic-button inline-block">
                  Request a Quote
                </Link>
                <Link to="/gallery" className="bg-navy text-white py-3 px-6 rounded-lg hover:bg-navyLight transition-colors inline-block">
                  View Our Gallery
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Residential Services */}
      <section className="py-16 bg-navyLight/10" id="residential">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Residential Services" 
            subtitle="Keep your home looking its best with our professional pressure washing"
          />
          
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
            <div className="lg:w-1/2">
              <ScrollAnimation>
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src={residentialImage} 
                    alt="Residential Pressure Washing" 
                    className="w-full h-auto"
                  />
                </div>
              </ScrollAnimation>
            </div>
            <div className="lg:w-1/2">
              <ScrollAnimation>
                <p className="text-navy mb-6">
                  Our residential pressure washing services are designed to restore and maintain the beauty of your home. From removing unsightly stains on your driveway to eliminating mold and mildew from your siding, we have the expertise and equipment to tackle any cleaning challenge.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-navy mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-navy"><span className="font-medium">Driveway & Walkway Cleaning:</span> Remove oil stains, grime, and algae to restore your concrete or paver surfaces.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-navy mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-navy"><span className="font-medium">House Washing:</span> Safely clean siding, brick, stucco, and other exterior surfaces to remove dirt, mold, and mildew.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-navy mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-navy"><span className="font-medium">Deck & Patio Cleaning:</span> Revitalize your outdoor living spaces by removing dirt, mold, and weathering.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-navy mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-navy"><span className="font-medium">Fence Cleaning:</span> Remove grime, algae, and discoloration from wood, vinyl, or metal fences.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-navy mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-navy"><span className="font-medium">Roof Cleaning:</span> Safely remove black streaks, moss, and algae to extend your roof's life and improve curb appeal.</span>
                  </li>
                </ul>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-16 bg-white" id="commercial">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Commercial Services" 
            subtitle="Maintain a professional appearance for your business"
          />
          
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 mb-12">
            <div className="lg:w-1/2">
              <ScrollAnimation>
                <p className="text-navy mb-6">
                  First impressions matter for your business. Our commercial pressure washing services help maintain a clean, professional appearance that impresses clients and customers. We work efficiently to minimize disruption to your operations.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-navy mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-navy"><span className="font-medium">Building Exteriors:</span> Clean facades, walls, and windows to maintain a professional appearance.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-navy mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-navy"><span className="font-medium">Parking Areas:</span> Clean parking lots, garages, and loading docks to remove oil stains, gum, and debris.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-navy mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-navy"><span className="font-medium">Walkways & Entrances:</span> Make a great first impression with clean, well-maintained entryways.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-navy mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-navy"><span className="font-medium">Dumpster Areas:</span> Sanitize and deodorize waste collection areas to eliminate odors and maintain hygiene.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-navy mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-navy"><span className="font-medium">Regular Maintenance Plans:</span> Custom cleaning schedules to keep your property looking its best year-round.</span>
                  </li>
                </ul>
              </ScrollAnimation>
            </div>
            <div className="lg:w-1/2">
              <ScrollAnimation>
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src={commercialImage} 
                    alt="Commercial Pressure Washing" 
                    className="w-full h-auto"
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-16 bg-navyLight/10" id="specialty">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Specialty Services" 
            subtitle="Custom solutions for specific cleaning challenges"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation>
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="mb-3 text-navy">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">Graffiti Removal</h3>
                <p className="text-navy flex-grow">
                  Our specialized techniques and solutions safely remove graffiti from various surfaces without causing damage. We restore your property's appearance quickly and effectively.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="mb-3 text-navy">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">Gutter Cleaning</h3>
                <p className="text-navy flex-grow">
                  Clean gutters are essential for proper water drainage. We remove leaves, debris, and buildup to prevent water damage and extend the life of your gutter system.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="mb-3 text-navy">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">Solar Panel Cleaning</h3>
                <p className="text-navy flex-grow">
                  Maximize the efficiency of your solar panels with our gentle cleaning process. Remove dust, bird droppings, and other debris that can reduce energy production.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="mb-3 text-navy">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">Fleet Washing</h3>
                <p className="text-navy flex-grow">
                  Keep your commercial vehicles looking professional with our fleet washing services. Regular cleaning maintains appearance and helps prevent premature paint deterioration.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="mb-3 text-navy">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">Construction Cleanup</h3>
                <p className="text-navy flex-grow">
                  After construction or renovation, our thorough cleaning removes dust, debris, and marks to reveal the beauty of your newly completed project.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="mb-3 text-navy">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">Pre-Sale Property Cleaning</h3>
                <p className="text-navy flex-grow">
                  Boost your property's curb appeal before listing it for sale. Our comprehensive cleaning services can help you achieve a better selling price and faster sale.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-white" id="process">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Process" 
            subtitle="What to expect when you choose our services"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-0 bottom-0 w-1 bg-navyLight/30 hidden md:block"></div>
              
              <div className="space-y-12">
                <ScrollAnimation>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex md:justify-end">
                      <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center text-white font-bold relative z-10">
                        1
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-semibold mb-2 text-navy">Initial Consultation</h3>
                      <p className="text-navy">
                        We begin with a thorough assessment of your cleaning needs. This can be done over the phone, via email, or with an on-site visit for complex jobs. We'll discuss your specific concerns, priorities, and timeline.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
                
                <ScrollAnimation>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex md:justify-end">
                      <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center text-white font-bold relative z-10">
                        2
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-semibold mb-2 text-navy">Customized Quote</h3>
                      <p className="text-navy">
                        Based on your needs, we provide a detailed, transparent quote outlining the scope of work, pricing, and estimated time frame. We'll answer any questions you have to ensure you're comfortable with the proposed service.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
                
                <ScrollAnimation>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex md:justify-end">
                      <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center text-white font-bold relative z-10">
                        3
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-semibold mb-2 text-navy">Preparation</h3>
                      <p className="text-navy">
                        Before we begin, we'll prepare the area by covering sensitive items, closing windows, and moving outdoor furniture as needed. Our goal is to protect your property while ensuring thorough cleaning.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
                
                <ScrollAnimation>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex md:justify-end">
                      <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center text-white font-bold relative z-10">
                        4
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-semibold mb-2 text-navy">Professional Cleaning</h3>
                      <p className="text-navy">
                        Our trained technicians use the appropriate equipment and techniques for each surface. We adjust pressure, temperature, and cleaning solutions as needed to ensure effective yet safe cleaning that won't damage your property.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
                
                <ScrollAnimation>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex md:justify-end">
                      <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center text-white font-bold relative z-10">
                        5
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-semibold mb-2 text-navy">Final Walkthrough</h3>
                      <p className="text-navy">
                        Once cleaning is complete, we conduct a thorough inspection with you to ensure everything meets your expectations. We want you to be completely satisfied before we consider the job done.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
