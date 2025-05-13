
import React, { useState } from 'react';
import { Check, Mail, X, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import SectionTitle from '../components/SectionTitle';

// Leaflet fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    binCleaning: false,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prevData => ({
      ...prevData,
      [name]: e.target.type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitSuccess(false);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        binCleaning: false,
        message: ''
      });
    }, 2000);
  };

  // Fix the position type to be a proper LatLngTuple
  const position: [number, number] = [-34.7544, 149.7188];

  return (
    <div className="min-h-screen bg-gradient">
      <Header />
      
      {/* Page Header */}
      <section className="bg-navyLight/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle 
            title="Contact Us" 
            subtitle="Get in touch with our team for inquiries and service requests"
          />
          <p className="text-xl text-navy mt-4">
            We're here to help with all your pressure washing needs. Contact us today for a free quote!
          </p>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-2xl font-semibold text-navy mb-4">Contact Information</h3>
            <p className="text-navy mb-2">
              <strong>Address:</strong> 123 Main Street, Goulburn, NSW 2580
            </p>
            <p className="text-navy mb-2">
              <strong>Phone:</strong> <a href="tel:+61412345678" className="text-navy hover:text-navyLight transition-colors">+61 412 345 678</a>
            </p>
            <p className="text-navy mb-4">
              <strong>Email:</strong> <a href="mailto:info@example.com" className="text-navy hover:text-navyLight transition-colors">info@example.com</a>
            </p>
            <h4 className="text-xl font-semibold text-navy mt-6 mb-3">Business Hours</h4>
            <p className="text-navy">Monday - Friday: 9am - 5pm</p>
            <p className="text-navy">Saturday: 9am - 12pm</p>
            <p className="text-navy">Sunday: Closed</p>
          </div>

          {/* Map */}
          <div className="glass-card rounded-xl overflow-hidden">
            <MapContainer 
              center={position} 
              zoom={13} 
              style={{ height: '300px', width: '100%' }}
              className="rounded-xl"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>
                  R Judd Enterprise <br /> We are located here.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass-card p-8 rounded-xl">
            <h2 className="text-3xl font-semibold text-navy mb-8 text-center">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-navy">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-navy">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-navy">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block mb-2 text-sm font-medium text-navy">
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a Service</option>
                    <option value="Residential Pressure Washing">Residential Pressure Washing</option>
                    <option value="Commercial Pressure Washing">Commercial Pressure Washing</option>
                    <option value="Driveway & Concrete Cleaning">Driveway & Concrete Cleaning</option>
                    <option value="House Washing">House Washing</option>
                    <option value="Deck & Patio Restoration">Deck & Patio Restoration</option>
                    <option value="Roof Cleaning">Roof Cleaning</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>
              </div>
              
              {/* Bin Cleaning Upsell with more prominent Popular tag - Updated to be more visible */}
              <div className="p-4 bg-green/10 border border-green rounded-lg relative">
                <div className="absolute -top-3 -left-1 bg-red-600 text-white text-sm px-3 py-1 rounded-full font-bold transform -rotate-2 shadow-md flex items-center">
                  <span className="text-white font-bold px-1">POPULAR</span>
                </div>
                <div className="flex items-start mt-2">
                  <div className="flex items-center h-5 mt-1">
                    <input
                      id="binCleaning"
                      name="binCleaning"
                      type="checkbox"
                      checked={formData.binCleaning}
                      onChange={handleChange}
                      className="w-4 h-4 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="binCleaning" className="font-medium text-navy">Add Bin Cleaning Service</label>
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-navy">
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit" 
                  className="bg-navy hover:bg-navyLight text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2" size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
            
            {isSubmitSuccess && (
              <div className="mt-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                <div className="flex items-center">
                  <Check className="mr-2" size={20} />
                  <span className="font-semibold">Success!</span>
                </div>
                <span className="block sm:inline mt-1">Thank you for your message. We'll get back to you soon!</span>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="py-12 bg-navyLight/10">
        <div className="container mx-auto px-4">
          <div className="glass-card rounded-xl overflow-hidden">
            <MapContainer 
              center={position} 
              zoom={13} 
              style={{ height: '400px', width: '100%' }}
              className="rounded-xl"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>
                  R Judd Enterprise <br /> We are located here.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
