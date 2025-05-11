
import React, { useState } from 'react';
import { X } from 'lucide-react';

interface QuoteRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteRequestModal: React.FC<QuoteRequestModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here we would normally send the data to a server
    // For this demo, we'll simulate a successful submission after a delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        service: '',
        message: '',
      });
      
      // Close modal after a delay
      setTimeout(() => {
        onClose();
        // Reset submitted state after modal is closed
        setTimeout(() => setIsSubmitted(false), 300);
      }, 3000);
    }, 1500);
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="relative bg-navy/10 rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
        <div className="p-6">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-navy hover:text-navyLight"
            aria-label="Close dialog"
          >
            <X size={24} />
          </button>
          
          <h2 className="text-2xl font-bold mb-4 text-navy text-center">Request a Free Quote</h2>
          
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-navy rounded-full mx-auto flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-navy">Thank You!</h3>
              <p className="text-navy">We've received your request and will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-navyLight/30 rounded-lg focus:ring-2 focus:ring-navy focus:outline-none bg-white/80 text-navy"
                  placeholder="John Smith"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-navyLight/30 rounded-lg focus:ring-2 focus:ring-navy focus:outline-none bg-white/80 text-navy"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-navyLight/30 rounded-lg focus:ring-2 focus:ring-navy focus:outline-none bg-white/80 text-navy"
                  placeholder="0400 000 000"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-navy mb-1">Property Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-3 border border-navyLight/30 rounded-lg focus:ring-2 focus:ring-navy focus:outline-none bg-white/80 text-navy"
                  placeholder="123 Main St, Goulburn NSW"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-navy mb-1">Service Needed</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-3 border border-navyLight/30 rounded-lg focus:ring-2 focus:ring-navy focus:outline-none bg-white/80 text-navy"
                  required
                >
                  <option value="">Select a Service</option>
                  <option value="residential">Residential Pressure Washing</option>
                  <option value="commercial">Commercial Pressure Washing</option>
                  <option value="driveway">Driveway Cleaning</option>
                  <option value="house">House Washing</option>
                  <option value="deck">Deck & Patio Cleaning</option>
                  <option value="roof">Roof Cleaning</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy mb-1">Additional Information</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 border border-navyLight/30 rounded-lg focus:ring-2 focus:ring-navy focus:outline-none bg-white/80 text-navy"
                  placeholder="Tell us more about your needs..."
                ></textarea>
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-navy text-white py-3 px-6 rounded-lg font-bold hover:bg-navyLight transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Get My Free Quote"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteRequestModal;
