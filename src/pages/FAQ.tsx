
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import ScrollAnimation from '../components/ScrollAnimation';
import { Link } from 'react-router-dom';

const FAQ = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-12 bg-[#4A90A7] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Find answers to common questions about our pressure washing services
          </p>
        </div>
      </section>
      
      {/* FAQ Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionTitle 
            title="Common Questions"
            subtitle="Everything you need to know about our services"
          />
          
          <div className="space-y-8 mt-10">
            <ScrollAnimation>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-[#4A90A7]">What services do you offer?</h3>
                <p className="text-gray-600">
                  We offer a comprehensive range of pressure washing services including residential house washing, driveway and walkway cleaning, deck and patio restoration, roof cleaning, fence washing, and commercial pressure washing for businesses.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-[#4A90A7]">How much does pressure washing cost?</h3>
                <p className="text-gray-600">
                  Our pricing varies based on the specific service, size of the area, and condition of the surfaces being cleaned. We offer competitive rates starting from $199 for basic residential services. Contact us for a free, no-obligation quote tailored to your specific needs.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-[#4A90A7]">What areas do you service?</h3>
                <p className="text-gray-600">
                  We provide pressure washing services throughout Goulburn, Canberra and surrounding areas including Marulan, Crookwell, Taralga, Bungonia, and Windellama. If you're unsure if we service your area, please contact us to confirm.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-[#4A90A7]">How long does pressure washing take?</h3>
                <p className="text-gray-600">
                  The time required depends on the size and condition of the area being cleaned. A typical residential driveway may take 1-2 hours, while a complete house exterior could take 3-5 hours. We'll provide you with a time estimate when we quote your project.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-[#4A90A7]">Is pressure washing safe for all surfaces?</h3>
                <p className="text-gray-600">
                  Different surfaces require different cleaning approaches. We adjust our equipment, pressure levels, and cleaning solutions to safely clean various surfaces without causing damage. Our experienced technicians know exactly how to handle each surface type properly.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-[#4A90A7]">How often should I have my property pressure washed?</h3>
                <p className="text-gray-600">
                  For most residential properties, annual pressure washing is recommended to maintain appearance and prevent buildup. However, factors like tree coverage, climate, and local conditions may require more frequent cleaning. Commercial properties in high-traffic areas often benefit from quarterly cleaning.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-[#4A90A7]">Do I need to be home during the service?</h3>
                <p className="text-gray-600">
                  While it's not necessary for you to be present during the entire service, we recommend being available at the beginning to discuss any specific concerns and at the end to review the completed work. We're happy to accommodate your schedule.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-[#4A90A7]">What cleaning solutions do you use?</h3>
                <p className="text-gray-600">
                  We use environmentally responsible, biodegradable cleaning solutions that effectively remove dirt, mold, mildew, and algae while being safe for your family, pets, plants, and the environment. Our cleaning approach balances effectiveness with environmental responsibility.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-[#4A90A7]">Are you insured?</h3>
                <p className="text-gray-600">
                  Yes, R Judd Enterprise is fully insured with comprehensive liability coverage. This protects both your property and our team in the unlikely event of any issues during the service.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-[#4A90A7]">How do I prepare for pressure washing service?</h3>
                <p className="text-gray-600">
                  Before we arrive, please remove vehicles from the driveway, clear the area of personal items (furniture, plants, decorations), close all windows and doors, and ensure exterior water spigots are functioning. This helps us perform our work efficiently and safely.
                </p>
              </div>
            </ScrollAnimation>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Still have questions? We're here to help!
            </p>
            <Link to="/contact" className="bg-[#4A90A7] text-white py-3 px-6 rounded-lg font-bold hover:bg-[#5EB0C9] transition-colors inline-block">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
