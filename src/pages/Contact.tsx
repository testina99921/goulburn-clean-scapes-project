
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import ScrollAnimation from '../components/ScrollAnimation';
import { Mail, Phone, MapPin, Clock, Upload } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    message: ''
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real implementation, you would send this data to your backend/email service
    console.log('Form submitted:', formData);
    console.log('File attached:', selectedFile);
    
    // Show success toast
    toast({
      title: "Message Sent",
      description: "We've received your message and will contact you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      service: '',
      message: ''
    });
    setSelectedFile(null);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-12 bg-[#4A90A7] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with our team for a free quote or to learn more about our services.
          </p>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Get in Touch" 
            subtitle="Send us a message and we'll get back to you as soon as possible"
          />
          
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <ScrollAnimation>
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90A7]"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90A7]"
                        placeholder="Your email"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90A7]"
                        placeholder="Your phone"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                      Address*
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90A7]"
                      placeholder="Your address"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90A7]"
                    >
                      <option value="">Select a service</option>
                      <option value="Residential">Residential Pressure Washing</option>
                      <option value="Commercial">Commercial Pressure Washing</option>
                      <option value="Driveway">Driveway Cleaning</option>
                      <option value="House">House Washing</option>
                      <option value="Deck">Deck & Patio Cleaning</option>
                      <option value="Roof">Roof Cleaning</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90A7]"
                      placeholder="Tell us about your project or ask us a question..."
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="photo" className="block text-gray-700 font-medium mb-2">
                      Attach Photos (Optional)
                    </label>
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="photo"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-2 text-gray-500" />
                          <p className="mb-1 text-sm text-gray-500">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">PNG, JPG or JPEG (MAX. 10MB)</p>
                        </div>
                        <input
                          id="photo"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>
                    {selectedFile && (
                      <p className="mt-2 text-sm text-gray-600">
                        Selected file: {selectedFile.name}
                      </p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-[#4A90A7] text-white py-3 px-6 rounded-lg hover:bg-[#5EB0C9] transition-colors font-medium"
                  >
                    Submit
                  </button>
                </form>
              </ScrollAnimation>
            </div>
            
            <div className="lg:w-1/2">
              <ScrollAnimation>
                <div className="h-full min-h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-md">
                  {/* Replace with actual Google Maps embed */}
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106204.95327670622!2d149.6629872091797!3d-34.75398800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1662a77da33727%3A0x50609b490441910!2sGoulburn%20NSW%202580%2C%20Australia!5e0!3m2!1sen!2sus!4v1701020046489!5m2!1sen!2sus"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Goulburn Map"
                  ></iframe>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-[#4A90A7] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <Phone size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-[#4A90A7]">Call Us</h3>
                <p className="text-gray-600 mb-2">Have a question? Call us now</p>
                <a href="tel:0417264292" className="text-green hover:underline font-medium">0417 264 292</a>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-[#4A90A7] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <Mail size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-[#4A90A7]">Email Us</h3>
                <p className="text-gray-600 mb-2">Send us an email anytime</p>
                <a href="mailto:rossjudd@hotmail.com" className="text-green hover:underline font-medium">rossjudd@hotmail.com</a>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-[#4A90A7] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <MapPin size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-[#4A90A7]">Visit Us</h3>
                <p className="text-gray-600 mb-2">Based in Goulburn, NSW</p>
                <p className="text-green font-medium">Serving Goulburn, Canberra & surrounding areas</p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-[#4A90A7] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <Clock size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-[#4A90A7]">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 8am - 6pm</p>
                <p className="text-gray-600">Saturday: 9am - 1pm</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Quick answers to common questions about our services"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-3 text-[#4A90A7]">How quickly can you schedule a service?</h3>
                <p className="text-gray-600">
                  We typically can schedule services within 3-5 business days, though this may vary during peak seasons. For urgent requests, we'll do our best to accommodate your timeline.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-3 text-[#4A90A7]">Do you offer free quotes?</h3>
                <p className="text-gray-600">
                  Yes! We provide free, no-obligation quotes for all our services. Contact us by phone, email, or through our website to request yours.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-3 text-[#4A90A7]">What areas do you serve?</h3>
                <p className="text-gray-600">
                  We serve Goulburn, Canberra and surrounding areas, including Marulan, Crookwell, Taralga, Bungonia, and Windellama. If you're unsure if we service your area, please contact us.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-3 text-[#4A90A7]">Do I need to be home during the service?</h3>
                <p className="text-gray-600">
                  It's not necessary for you to be present during the entire service, though we do recommend being available at the beginning and end to discuss any specific concerns and to review the completed work.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
