
import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

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
    services: [] as string[],
    additionalServices: [] as string[],
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleServiceChange = (service: string) => {
    setFormData(prevState => {
      const updatedServices = prevState.services.includes(service)
        ? prevState.services.filter(s => s !== service)
        : [...prevState.services, service];
      
      return {
        ...prevState,
        services: updatedServices,
      };
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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here we would normally send the data to a server
    // For this demo, we'll simulate a successful submission after a delay
    setTimeout(() => {
      console.log("Form submitted with data:", {
        ...formData,
        email: "rossjudd@hotmail.com" // Email where the form will be sent
      });
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        services: [],
        additionalServices: [],
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
      <div className="relative bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
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
                  className="w-full p-3 border border-navyLight/30 rounded-lg focus:ring-2 focus:ring-navy focus:outline-none bg-white text-navy"
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
                  className="w-full p-3 border border-navyLight/30 rounded-lg focus:ring-2 focus:ring-navy focus:outline-none bg-white text-navy"
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
                  className="w-full p-3 border border-navyLight/30 rounded-lg focus:ring-2 focus:ring-navy focus:outline-none bg-white text-navy"
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
                  className="w-full p-3 border border-navyLight/30 rounded-lg focus:ring-2 focus:ring-navy focus:outline-none bg-white text-navy"
                  placeholder="123 Main St, Goulburn NSW"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-navy mb-2">Services Needed</label>
                <div className="grid grid-cols-1 gap-2 mt-1">
                  {[
                    { id: 'residential', label: 'Residential Pressure Washing' },
                    { id: 'commercial', label: 'Commercial Pressure Washing' },
                    { id: 'driveway', label: 'Driveway Cleaning' },
                    { id: 'house', label: 'House Washing' },
                    { id: 'deck', label: 'Deck & Patio Cleaning' },
                    { id: 'roof', label: 'Roof Cleaning' },
                    { id: 'other', label: 'Other' }
                  ].map(service => (
                    <div key={service.id} className="flex items-center">
                      <div
                        onClick={() => handleServiceChange(service.id)}
                        className={`w-5 h-5 border rounded mr-2 flex items-center justify-center cursor-pointer ${
                          formData.services.includes(service.id)
                            ? 'bg-navy border-navy'
                            : 'border-navy/40'
                        }`}
                      >
                        {formData.services.includes(service.id) && <Check size={12} className="text-white" />}
                      </div>
                      <label 
                        htmlFor={`service-${service.id}`} 
                        className="text-navy cursor-pointer"
                        onClick={() => handleServiceChange(service.id)}
                      >
                        {service.label}
                      </label>
                    </div>
                  ))}
                </div>
                {formData.services.length === 0 && (
                  <p className="text-xs text-orange mt-1">Please select at least one service</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-2">Additional Services (Optional)</label>
                <div className="grid grid-cols-1 gap-2 mt-1">
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
                        htmlFor={`additional-service-${service.id}`} 
                        className="text-navy cursor-pointer"
                        onClick={() => handleAdditionalServiceChange(service.id)}
                      >
                        {service.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy mb-1">Additional Information</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 border border-navyLight/30 rounded-lg focus:ring-2 focus:ring-navy focus:outline-none bg-white text-navy"
                  placeholder="Tell us more about your needs..."
                ></textarea>
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting || formData.services.length === 0}
                  className="w-full bg-navy text-white py-3 px-6 rounded-lg font-bold hover:bg-navyLight transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
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
