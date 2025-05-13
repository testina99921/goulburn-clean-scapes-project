
import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X, Mail, Upload, Check } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast"

interface QuoteRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  service: string;
  propertyType: string;
  addBinCleaning: boolean;
  preferredDate: string;
  additionalDetails: string;
}

const QuoteRequestModal = ({ isOpen, onClose }: QuoteRequestModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    propertyType: '',
    addBinCleaning: false,
    preferredDate: '',
    additionalDetails: '',
  });
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const { toast } = useToast()
  
  const handleInputChange = (key: keyof FormData, value: any) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setIsSubmitSuccess(false);

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset form and set success state
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      service: '',
      propertyType: '',
      addBinCleaning: false,
      preferredDate: '',
      additionalDetails: '',
    });
    setUploadedFile(null);
    setIsSubmitting(false);
    setIsSubmitSuccess(true);
    toast({
      title: "Success!",
      description: "Your quote request has been submitted. We'll contact you soon!",
    })
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-semibold text-navy">Request a Free Quote</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Personal Information Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-navy">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-navy">
                  Full Name*
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-navy">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="address" className="block mb-2 text-sm font-medium text-navy">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                  placeholder="Your Address"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                />
              </div>
            </div>
          </div>
          
          {/* Service Information Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-navy">Service Information</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="service" className="block mb-2 text-sm font-medium text-navy">
                  Service Type*
                </label>
                <select
                  id="service"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                  value={formData.service}
                  onChange={(e) => handleInputChange('service', e.target.value)}
                  required
                >
                  <option value="">Select a Service</option>
                  <option value="Residential Pressure Washing">Residential Pressure Washing</option>
                  <option value="Commercial Pressure Washing">Commercial Pressure Washing</option>
                  <option value="Driveway & Concrete Cleaning">Driveway & Concrete Cleaning</option>
                  <option value="House Washing">House Washing</option>
                  <option value="Deck & Patio Restoration">Deck & Patio Restoration</option>
                  <option value="Roof Cleaning">Roof Cleaning</option>
                  <option value="Other">Other (Please Specify)</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="propertyType" className="block mb-2 text-sm font-medium text-navy">
                  Property Type*
                </label>
                <select
                  id="propertyType"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                  value={formData.propertyType}
                  onChange={(e) => handleInputChange('propertyType', e.target.value)}
                  required
                >
                  <option value="">Select Property Type</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Industrial">Industrial</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Highlighted Bin Cleaning Upsell with obvious Popular tag - Updated to be more visible */}
              <div className="p-4 bg-green/10 border border-green rounded-lg relative">
                <div className="absolute -top-3 -left-1 bg-red-600 text-white text-sm px-3 py-1 rounded-full font-bold transform -rotate-2 shadow-md flex items-center">
                  <span className="text-white font-bold px-1">POPULAR</span>
                </div>
                <div className="flex items-start mt-2">
                  <div className="flex items-center h-5 mt-1">
                    <input
                      id="binCleaning"
                      type="checkbox"
                      checked={formData.addBinCleaning}
                      onChange={(e) => handleInputChange('addBinCleaning', e.target.checked)}
                      className="w-4 h-4 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="binCleaning" className="font-medium text-navy">Add Bin Cleaning Service</label>
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="preferredDate" className="block mb-2 text-sm font-medium text-navy">
                  Preferred Service Date
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                  value={formData.preferredDate}
                  onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                />
              </div>
              
              <div>
                <label htmlFor="additionalDetails" className="block mb-2 text-sm font-medium text-navy">
                  Additional Details
                </label>
                <textarea
                  id="additionalDetails"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                  rows={4}
                  placeholder="Please provide any additional information that might help us understand your needs better."
                  value={formData.additionalDetails}
                  onChange={(e) => handleInputChange('additionalDetails', e.target.value)}
                ></textarea>
              </div>
              
              <div>
                <label className="block mb-2 text-sm font-medium text-navy">
                  Upload Image (Optional)
                </label>
                <div className="flex items-center justify-center w-full">
                  <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-2 text-gray-500" />
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">PNG, JPG or JPEG (MAX. 5MB)</p>
                    </div>
                    <input 
                      id="dropzone-file" 
                      type="file" 
                      className="hidden" 
                      onChange={handleFileChange}
                      accept=".jpg,.jpeg,.png"
                    />
                  </label>
                </div>
                {uploadedFile && (
                  <div className="mt-2 flex items-center justify-between bg-gray-100 p-2 rounded-md">
                    <span className="text-sm truncate max-w-[80%]">{uploadedFile.name}</span>
                    <button 
                      type="button"
                      onClick={() => setUploadedFile(null)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X size={18} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-navy text-white py-3 px-6 rounded-lg font-bold hover:bg-navyLight transition-colors flex items-center justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
              ) : (
                <Mail className="w-5 h-5 mr-2" />
              )}
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>
          </div>
        </form>
        
        {/* Success Message */}
        {isSubmitSuccess && (
          <div className="mt-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <div className="flex items-center">
              <Check className="mr-2" size={20} />
              <span className="font-semibold">Success!</span>
            </div>
            <span className="block sm:inline mt-1">Your quote request has been submitted. We'll contact you soon!</span>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default QuoteRequestModal;
