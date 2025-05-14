
import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X, Mail, Upload, Check } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

interface QuoteRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteRequestModal: React.FC<QuoteRequestModalProps> = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: 'house-washing',
    message: '',
    binCleaning: false,
    preferredContact: 'email',
    files: [] as File[]
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFormData(prev => ({
        ...prev,
        files: [...prev.files, ...newFiles]
      }));
    }
  };

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      toast({
        title: "Quote request sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form after submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          service: 'house-washing',
          message: '',
          binCleaning: false,
          preferredContact: 'email',
          files: []
        });
        setSubmitStatus('idle');
        onClose();
      }, 1500);
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-semibold text-navy">Request a Free Quote</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          {submitStatus === 'success' ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quote Request Received!</h3>
              <p className="text-gray-600">
                Thank you for your request. We'll get back to you as soon as possible with a free quote.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                
                {/* Address */}
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              
              {/* Preferred Contact Method */}
              <div>
                <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Contact Method
                </label>
                <select
                  id="preferredContact"
                  name="preferredContact"
                  value={formData.preferredContact}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="text">Text Message</option>
                </select>
              </div>
              
              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="house-washing">House Washing</option>
                  <option value="roof-cleaning">Roof Cleaning</option>
                  <option value="driveway-cleaning">Driveway Cleaning</option>
                  <option value="deck-cleaning">Deck & Patio Cleaning</option>
                  <option value="commercial">Commercial Pressure Washing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Highlighted Bin Cleaning Upsell with obvious Popular tag - Updated to be more visible */}
              <div className="p-4 bg-green/10 border border-green rounded-lg relative">
                <div className="absolute -top-3 -right-1 bg-red-600 text-white px-4 py-1.5 rounded-full font-bold transform -rotate-2 shadow-lg">
                  <span className="text-white font-bold text-sm tracking-wide uppercase">POPULAR!</span>
                </div>
                <div className="flex items-start mt-2">
                  <div className="flex items-center h-5 mt-1">
                    <input
                      id="binCleaning"
                      name="binCleaning"
                      type="checkbox"
                      checked={formData.binCleaning}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-green border-gray-300 rounded"
                    />
                  </div>
                  <label htmlFor="binCleaning" className="ml-3 block text-sm font-medium text-gray-700">
                    <span className="font-bold">Add Bin Cleaning Service</span> - Keep your bins clean and odor-free with our professional cleaning service
                  </label>
                </div>
              </div>
              
              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              
              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Photos (Optional)
                </label>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="file-upload"
                    className="w-full flex flex-col items-center px-4 py-6 bg-white text-navy rounded-lg border-2 border-dashed border-gray-300 cursor-pointer hover:bg-gray-50"
                  >
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-600">
                      Drag & drop photos here, or click to select
                    </p>
                    <p className="text-xs text-gray-500">
                      JPG, PNG or PDF up to 10MB
                    </p>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      multiple
                      accept="image/*,application/pdf"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
                
                {/* File List */}
                {formData.files.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {formData.files.map((file, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span className="truncate text-sm text-gray-700">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={submitStatus === 'loading'}
                  className={`w-full py-3 px-4 rounded-md font-semibold text-white bg-navy transition-colors ${
                    submitStatus === 'loading' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-navyLight'
                  }`}
                >
                  {submitStatus === 'loading' ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Mail className="h-5 w-5 mr-2" />
                      Submit Quote Request
                    </span>
                  )}
                </button>
              </div>
            </>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteRequestModal;
