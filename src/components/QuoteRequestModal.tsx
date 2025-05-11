
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface QuoteRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteRequestModal: React.FC<QuoteRequestModalProps> = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    propertyType: '',
    urgency: '',
    additionalInfo: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote request submitted:', formData);
    
    toast({
      title: "Quote Request Submitted",
      description: "We'll get back to you with a quote as soon as possible.",
    });
    
    // Reset and close
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      service: '',
      propertyType: '',
      urgency: '',
      additionalInfo: ''
    });
    setStep(1);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      
      {/* Modal */}
      <div className="bg-white rounded-lg w-full max-w-md mx-4 z-10 relative">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold text-[#4A90A7]">Request a Free Quote</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <form onSubmit={step === 3 ? handleSubmit : (e) => e.preventDefault()}>
            {/* Step indicators */}
            <div className="flex justify-between mb-6">
              <div className={`w-1/3 h-1 rounded-full ${step >= 1 ? 'bg-[#4A90A7]' : 'bg-gray-300'}`}></div>
              <div className={`w-1/3 h-1 rounded-full mx-1 ${step >= 2 ? 'bg-[#4A90A7]' : 'bg-gray-300'}`}></div>
              <div className={`w-1/3 h-1 rounded-full ${step >= 3 ? 'bg-[#4A90A7]' : 'bg-gray-300'}`}></div>
            </div>
            
            {step === 1 && (
              <div className="space-y-4">
                <h4 className="font-medium text-gray-700 mb-4">Personal Information</h4>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90A7]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90A7]"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90A7]"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address*</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90A7]"
                  />
                </div>
              </div>
            )}
            
            {step === 2 && (
              <div className="space-y-4">
                <h4 className="font-medium text-gray-700 mb-4">Service Details</h4>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Type*</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90A7]"
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
                <div>
                  <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">Property Type*</label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90A7]"
                  >
                    <option value="">Select property type</option>
                    <option value="House">Single Family Home</option>
                    <option value="TownHome">Town Home</option>
                    <option value="Apartment">Apartment/Condo</option>
                    <option value="Office">Office Building</option>
                    <option value="Retail">Retail Space</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1">How soon do you need this service?</label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90A7]"
                  >
                    <option value="">Select timeframe</option>
                    <option value="Urgent">As soon as possible (1-3 days)</option>
                    <option value="Week">Within a week</option>
                    <option value="TwoWeeks">Within two weeks</option>
                    <option value="Month">Within a month</option>
                    <option value="Flexible">Flexible / Not urgent</option>
                  </select>
                </div>
              </div>
            )}
            
            {step === 3 && (
              <div className="space-y-4">
                <h4 className="font-medium text-gray-700 mb-4">Additional Information</h4>
                <div>
                  <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">Any additional details to help us prepare your quote:</label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90A7]"
                    placeholder="Surface area dimensions, specific concerns, etc."
                  ></textarea>
                </div>
                
                {/* Summary of input */}
                <div className="mt-4 bg-gray-50 p-4 rounded-md text-sm">
                  <h5 className="font-medium mb-2">Quote Request Summary</h5>
                  <p><strong>Name:</strong> {formData.name}</p>
                  <p><strong>Contact:</strong> {formData.email} | {formData.phone}</p>
                  <p><strong>Service:</strong> {formData.service}</p>
                  <p><strong>Property Type:</strong> {formData.propertyType}</p>
                  <p><strong>Address:</strong> {formData.address}</p>
                  <p><strong>Timeframe:</strong> {formData.urgency || "Not specified"}</p>
                </div>
              </div>
            )}
            
            {/* Navigation buttons */}
            <div className="flex justify-between mt-6">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Back
                </button>
              ) : (
                <div></div>
              )}
              
              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-4 py-2 bg-[#4A90A7] text-white rounded-md hover:bg-[#5EB0C9] transition-colors"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#4A90A7] text-white rounded-md hover:bg-[#5EB0C9] transition-colors"
                >
                  Submit Quote Request
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteRequestModal;
