
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { PhoneCall, Mail, MapPin, Clock, Droplet, Building, Check } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    additionalServices: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Load Google Maps script
    const loadGoogleMaps = () => {
      // Remove any existing Google Maps scripts to prevent duplicates
      const existingScripts = document.querySelectorAll('script[src*="maps.googleapis.com"]');
      existingScripts.forEach(script => script.remove());

      const googleMapScript = document.createElement('script');
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAVbnaG1G6Mom3fvBoA0EAGKdiUasCk8Fc&libraries=places&callback=initGoogleMap`;
      googleMapScript.async = true;
      googleMapScript.defer = true;
      window.document.body.appendChild(googleMapScript);
      
      // Define the callback function globally
      window.initGoogleMap = initGoogleMap;
    };

    // Initialize Google Maps
    function initGoogleMap() {
      const mapElement = document.getElementById('google-map');
      if (mapElement && window.google && window.google.maps) {
        const mapOptions = {
          center: { lat: -34.7548, lng: 149.7186 }, // Goulburn coordinates
          zoom: 13,
          styles: [
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#24afbc"
                },
                {
                  "lightness": 17
                }
              ]
            },
            {
              "featureType": "landscape",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#f5f5f5"
                },
                {
                  "lightness": 20
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#ffffff"
                },
                {
                  "lightness": 17
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#ffffff"
                },
                {
                  "lightness": 29
                },
                {
                  "weight": 0.2
                }
              ]
            }
          ]
        };

        const map = new window.google.maps.Map(
          mapElement,
          mapOptions
        );

        // Add marker for business location
        new window.google.maps.Marker({
          position: { lat: -34.7548, lng: 149.7186 },
          map,
          title: 'R Judd Enterprise',
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            fillColor: '#24AFBC',
            fillOpacity: 1,
            strokeColor: '#ffffff',
            strokeWeight: 2,
            scale: 10,
          },
        });
      }
    }

    // Add initGoogleMap function to window
    window.initGoogleMap = initGoogleMap;
    
    // Load Google Maps
    loadGoogleMaps();

    // Cleanup
    return () => {
      // Remove global function
      if (window.initGoogleMap) {
        delete window.initGoogleMap;
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAdditionalServiceChange = (service: string) => {
    setFormData(prevState => {
      const updatedServices = prevState.additionalServices.includes(service)
        ? prevState.additionalServices.filter(s => s !== service)
        : [...prevState.additionalServices, service];
      
      return {
        ...prevState,
        additionalServices: updatedServices,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted with data:", {
        ...formData,
        email: "rossjudd@hotmail.com" // Email where the form will be sent
      });
      
      toast({
        title: "Message Sent!",
        description: "We've received your message and will be in touch shortly.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        additionalServices: []
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Get in touch with our team to schedule a service or request a free quote.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Info */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mr-4 text-white shrink-0">
                <PhoneCall size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-navy">Phone</h3>
                <p className="text-black">
                  <a href="tel:0417264292" className="hover:text-navyLight transition-colors">0417 264 292</a>
                </p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mr-4 text-white shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-navy">Email</h3>
                <p className="text-black">
                  <a href="mailto:rossjudd@hotmail.com" className="hover:text-navyLight transition-colors">rossjudd@hotmail.com</a>
                </p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mr-4 text-white shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-navy">Service Area</h3>
                <p className="text-black">Goulburn, Canberra & surrounding areas in NSW</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mr-4 text-white shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-navy">Business Hours</h3>
                <p className="text-black">Mon-Fri: 8am-6pm | Sat: 9am-1pm | Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-navy text-center">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium text-navy">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-2 border border-navyLight/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-1 font-medium text-navy">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-2 border border-navyLight/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block mb-1 font-medium text-navy">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-2 border border-navyLight/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block mb-1 font-medium text-navy">Service Interested In</label>
                  <select 
                    id="service" 
                    name="service" 
                    value={formData.service} 
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-navyLight/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                  >
                    <option value="">Select a service</option>
                    <option value="residential">Residential Pressure Washing</option>
                    <option value="commercial">Commercial Pressure Washing</option>
                    <option value="driveway">Driveway & Concrete Cleaning</option>
                    <option value="house">House Washing</option>
                    <option value="deck">Deck & Patio Restoration</option>
                    <option value="roof">Roof Cleaning</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block mb-1 font-medium text-navy">Additional Services (Optional)</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-1">
                  {[
                    { id: 'gutter', label: 'Gutter Cleaning' },
                    { id: 'window', label: 'Window Washing' },
                    { id: 'fence', label: 'Fence Restoration' },
                    { id: 'paver', label: 'Paver Sealing' }
                  ].map(service => (
                    <div key={service.id} className="flex items-center">
                      <div
                        onClick={() => handleAdditionalServiceChange(service.id)}
                        className={`w-5 h-5 border rounded mr-2 flex items-center justify-center cursor-pointer ${
                          formData.additionalServices.includes(service.id)
                            ? 'bg-navy border-navy'
                            : 'border-navy/40'
                        }`}
                      >
                        {formData.additionalServices.includes(service.id) && <Check size={12} className="text-white" />}
                      </div>
                      <label 
                        htmlFor={`service-${service.id}`} 
                        className="text-black cursor-pointer"
                        onClick={() => handleAdditionalServiceChange(service.id)}
                      >
                        {service.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-1 font-medium text-navy">Message</label>
                <Textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange}
                  rows={4} 
                  className="w-full px-4 py-2 border border-navyLight/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                  placeholder="Tell us about your project or ask any questions"
                />
              </div>
              
              <div className="pt-2">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-navy hover:bg-green text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2 h-5 w-5" /> Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      {/* Google Map */}
      <section className="py-16 bg-navyLight/10">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Find Us" 
            subtitle="Serving Goulburn, Canberra & surrounding areas"
          />
          
          <div className="max-w-5xl mx-auto mt-8">
            <div id="google-map" className="w-full h-[400px] rounded-xl shadow-lg"></div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Areas We Serve" 
            subtitle="Our service area covers Goulburn, Canberra and surrounding regions"
          />
          
          <div className="max-w-4xl mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-card p-6 rounded-lg bg-navyLight/5 flex flex-col items-center">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mb-4 text-white">
                  <Building size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy">Goulburn</h3>
                <ul className="text-black text-center">
                  <li>Goulburn City</li>
                  <li>Bradfordville</li>
                  <li>Eastgrove</li>
                  <li>Kenmore</li>
                  <li>Run-o-Waters</li>
                </ul>
              </div>
              
              <div className="glass-card p-6 rounded-lg bg-navyLight/5 flex flex-col items-center">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mb-4 text-white">
                  <Building size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy">Canberra</h3>
                <ul className="text-black text-center">
                  <li>Civic</li>
                  <li>Belconnen</li>
                  <li>Woden</li>
                  <li>Tuggeranong</li>
                  <li>Gungahlin</li>
                </ul>
              </div>
              
              <div className="glass-card p-6 rounded-lg bg-navyLight/5 flex flex-col items-center">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mb-4 text-white">
                  <Building size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy">Surrounding Areas</h3>
                <ul className="text-black text-center">
                  <li>Marulan</li>
                  <li>Bungonia</li>
                  <li>Windellama</li>
                  <li>Crookwell</li>
                  <li>Taralga</li>
                </ul>
              </div>
            </div>
            
            <p className="text-center mt-8 text-navy">
              Don't see your area? Contact us to inquire about service availability in your location.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today for a free, no-obligation quote on our professional pressure washing services.
            </p>
            <div className="flex justify-center">
              <a 
                href="tel:0417264292" 
                className="bg-white text-navy py-3 px-6 rounded-lg font-bold hover:bg-green hover:text-white transition-colors inline-flex items-center"
              >
                <PhoneCall className="mr-2 h-5 w-5" /> Call Now: 0417 264 292
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
