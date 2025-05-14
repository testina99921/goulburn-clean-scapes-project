
import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const ContactForm = () => {
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
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitSuccess(false);

    try {
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitSuccess(true);
        toast({
          title: "Message Sent",
          description: "We'll get back to you soon!",
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          binCleaning: false,
          message: ''
        });
      }, 2000);
    } catch (error) {
      setIsSubmitting(false);
      toast({
        title: "Error",
        description: "There was a problem sending your message.",
        variant: "destructive",
      });
    }
  };

  return (
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
        
        {/* Bin Cleaning Upsell with more prominent Popular tag */}
        <div className="p-4 bg-green/10 border border-green rounded-lg relative">
          <div className="absolute -top-3 -right-1 bg-red-600 text-white text-sm px-3 py-1 rounded-full font-bold transform -rotate-2 shadow-md flex items-center">
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
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold">Success!</span>
          </div>
          <span className="block sm:inline mt-1">Thank you for your message. We'll get back to you soon!</span>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
