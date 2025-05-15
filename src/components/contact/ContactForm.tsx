
import React, { useState } from 'react';
import { Mail, Upload, Trash2, Award } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

type AdditionalServicesType = {
  gutterCleaning: boolean;
  paverConcreteSealing: boolean;
  windowWashing: boolean;
  solarPanelCleaning: boolean;
  fenceRestoration: boolean;
  highPressureCleaning: boolean;
};

type FormDataType = {
  name: string;
  email: string;
  phone: string;
  service: string;
  binCleaning: boolean;
  additionalServices: AdditionalServicesType;
  message: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    email: '',
    phone: '',
    service: '',
    binCleaning: false,
    additionalServices: {
      gutterCleaning: false,
      paverConcreteSealing: false,
      windowWashing: false,
      solarPanelCleaning: false,
      fenceRestoration: false,
      highPressureCleaning: false
    },
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    if (name.includes('.')) {
      const [group, field] = name.split('.');
      if (group === 'additionalServices' && typeof formData.additionalServices === 'object') {
        setFormData(prev => ({
          ...prev,
          additionalServices: {
            ...prev.additionalServices,
            [field]: checked
          }
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFiles(Array.from(e.target.files));
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
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
          additionalServices: {
            gutterCleaning: false,
            paverConcreteSealing: false,
            windowWashing: false,
            solarPanelCleaning: false,
            fenceRestoration: false,
            highPressureCleaning: false
          },
          message: ''
        });
        setFiles([]);
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
      <h2 className="text-3xl font-semibold text-navy mb-8 text-center flex justify-center items-center">
        <Mail className="text-green mr-2" size={28} /> 
        Send Us a Message
      </h2>
      
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
              Email Address*
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
              Service Needed
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
        
        {/* Additional Services */}
        <div className="p-4 border border-gray-200 rounded-lg">
          <p className="font-medium text-navy mb-3">Additional Services (Optional)</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <div className="flex items-start">
              <input
                id="gutterCleaning"
                name="additionalServices.gutterCleaning"
                type="checkbox"
                checked={formData.additionalServices.gutterCleaning}
                onChange={handleChange}
                className="h-4 w-4 mt-1 border border-gray-300 rounded"
              />
              <label htmlFor="gutterCleaning" className="ml-2 text-sm text-gray-700">
                Gutter Cleaning
              </label>
            </div>
            
            <div className="flex items-start">
              <input
                id="paverConcreteSealing"
                name="additionalServices.paverConcreteSealing"
                type="checkbox"
                checked={formData.additionalServices.paverConcreteSealing}
                onChange={handleChange}
                className="h-4 w-4 mt-1 border border-gray-300 rounded"
              />
              <label htmlFor="paverConcreteSealing" className="ml-2 text-sm text-gray-700">
                Paver & Concrete Sealing
              </label>
            </div>
            
            <div className="flex items-start">
              <input
                id="windowWashing"
                name="additionalServices.windowWashing"
                type="checkbox"
                checked={formData.additionalServices.windowWashing}
                onChange={handleChange}
                className="h-4 w-4 mt-1 border border-gray-300 rounded"
              />
              <label htmlFor="windowWashing" className="ml-2 text-sm text-gray-700">
                Window Washing
              </label>
            </div>
            
            <div className="flex items-start">
              <input
                id="solarPanelCleaning"
                name="additionalServices.solarPanelCleaning"
                type="checkbox"
                checked={formData.additionalServices.solarPanelCleaning}
                onChange={handleChange}
                className="h-4 w-4 mt-1 border border-gray-300 rounded"
              />
              <label htmlFor="solarPanelCleaning" className="ml-2 text-sm text-gray-700">
                Solar Panel Cleaning
              </label>
            </div>
            
            <div className="flex items-start">
              <input
                id="fenceRestoration"
                name="additionalServices.fenceRestoration"
                type="checkbox"
                checked={formData.additionalServices.fenceRestoration}
                onChange={handleChange}
                className="h-4 w-4 mt-1 border border-gray-300 rounded"
              />
              <label htmlFor="fenceRestoration" className="ml-2 text-sm text-gray-700">
                Fence Restoration
              </label>
            </div>
            
            <div className="flex items-start">
              <input
                id="highPressureCleaning"
                name="additionalServices.highPressureCleaning"
                type="checkbox"
                checked={formData.additionalServices.highPressureCleaning}
                onChange={handleChange}
                className="h-4 w-4 mt-1 border border-gray-300 rounded"
              />
              <label htmlFor="highPressureCleaning" className="ml-2 text-sm text-gray-700">
                High Pressure Cleaning
              </label>
            </div>
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-navy">
            Your Message*
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
            placeholder="Tell us about your project or any questions you may have..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        
        {/* Upload Images - Made smaller */}
        <div>
          <label className="block mb-2 text-sm font-medium text-navy">
            Upload Images (Optional)
          </label>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full py-2 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex flex-col items-center justify-center py-2">
                <Upload className="w-6 h-6 mb-1 text-gray-400" />
                <p className="text-xs text-gray-500">Click to upload images</p>
              </div>
              <input 
                id="dropzone-file" 
                type="file" 
                className="hidden" 
                multiple
                accept="image/*"
                onChange={handleFileChange}
              />
            </label>
          </div>
          {files.length > 0 && (
            <div className="mt-2 space-y-1">
              {files.map((file, index) => (
                <div key={index} className="flex justify-between items-center p-1 bg-gray-50 rounded text-xs">
                  <span className="truncate text-gray-700">{file.name}</span>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="text-center">
          <div className="flex items-center justify-center mb-5">
            <div className="inline-flex items-center justify-center p-2 border border-gray-300 rounded-full">
              <Award className="text-black" size={20} />
            </div>
            <span className="ml-2 text-sm font-medium text-black">100% Satisfaction Guarantee</span>
          </div>
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
                Submit Free Quote
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
