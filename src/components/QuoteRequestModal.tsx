import React, { useState } from 'react';
import { X, Mail, Check, Upload, Award, Trash2 } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface QuoteRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteRequestModal = ({ isOpen, onClose }: QuoteRequestModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    additionalServices: [] as string[],
    binCleaning: false,
    message: ''
  });
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreviewUrls, setImagePreviewUrls] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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

  const handleBinCleaningChange = () => {
    setFormData(prevState => ({
      ...prevState,
      binCleaning: !prevState.binCleaning
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newFiles: File[] = [];
    const newPreviewUrls: string[] = [];

    // Process each selected file
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.startsWith('image/')) {
        newFiles.push(file);
        newPreviewUrls.push(URL.createObjectURL(file));
      }
    }

    setImageFiles([...imageFiles, ...newFiles]);
    setImagePreviewUrls([...imagePreviewUrls, ...newPreviewUrls]);
  };

  const removeImage = (index: number) => {
    const updatedFiles = [...imageFiles];
    const updatedUrls = [...imagePreviewUrls];
    
    // Revoke the object URL to avoid memory leaks
    URL.revokeObjectURL(updatedUrls[index]);
    
    updatedFiles.splice(index, 1);
    updatedUrls.splice(index, 1);
    
    setImageFiles(updatedFiles);
    setImagePreviewUrls(updatedUrls);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Quote request submitted:', {
        ...formData,
        email: "rossjudd@hotmail.com", // Email where the quote will be sent
        imageCount: imageFiles.length
      });
      
      toast({
        title: "Quote Request Sent!",
        description: "We've received your request and will contact you shortly with a free quote.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        service: '',
        additionalServices: [],
        binCleaning: false,
        message: ''
      });
      
      // Clear images
      imagePreviewUrls.forEach(url => URL.revokeObjectURL(url));
      setImageFiles([]);
      setImagePreviewUrls([]);
      
      setIsSubmitting(false);
      onClose();
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg p-0 bg-white rounded-xl">
        <div className="p-6 bg-navy text-white rounded-t-xl">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-semibold">Request a Free Quote</h2>
            <button onClick={onClose} className="text-white hover:text-gray-200">
              <X size={24} />
            </button>
          </div>
          <p>Fill out this form to receive a no-obligation quote for our services.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 max-h-[70vh] overflow-y-auto">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email address"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Your phone number"
                  className="w-full"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Property Address</label>
              <Input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                placeholder="Address where service is needed"
                className="w-full"
              />
            </div>
            
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy"
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

            {/* Highlighted Bin Cleaning Upsell - Modified with popular tag */}
            <div className="p-4 bg-green/10 border border-green rounded-lg relative">
              <div className="absolute -top-3 right-3 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                Popular
              </div>
              <div className="flex items-center">
                <div
                  onClick={handleBinCleaningChange}
                  className={`w-5 h-5 border rounded mr-2 flex items-center justify-center cursor-pointer ${
                    formData.binCleaning
                      ? 'bg-green border-green'
                      : 'border-gray-400'
                  }`}
                >
                  {formData.binCleaning && <Check size={12} className="text-white" />}
                </div>
                <div className="flex items-center">
                  <Trash2 size={18} className="mr-2 text-green" />
                  <label 
                    htmlFor="bin-cleaning" 
                    className="text-gray-700 cursor-pointer font-medium"
                    onClick={handleBinCleaningChange}
                  >
                    Add Garbage Bin Cleaning Service
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Additional Services (Optional)</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'gutter', label: 'Gutter Cleaning' },
                  { id: 'window', label: 'Window Washing' },
                  { id: 'fence', label: 'Fence Restoration' },
                  { id: 'paver', label: 'Paver Sealing' },
                  { id: 'solar', label: 'Solar Panel Cleaning' },
                  { id: 'pressure', label: 'High Pressure Cleaning' }
                ].map(service => (
                  <div key={service.id} className="flex items-center">
                    <div
                      onClick={() => handleAdditionalServiceChange(service.id)}
                      className={`w-5 h-5 border rounded mr-2 flex items-center justify-center cursor-pointer ${
                        formData.additionalServices.includes(service.id)
                          ? 'bg-navy border-navy'
                          : 'border-gray-400'
                      }`}
                    >
                      {formData.additionalServices.includes(service.id) && <Check size={12} className="text-white" />}
                    </div>
                    <label 
                      htmlFor={`service-${service.id}`} 
                      className="text-gray-700 cursor-pointer text-sm"
                      onClick={() => handleAdditionalServiceChange(service.id)}
                    >
                      {service.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Image upload section - moved before additional details and reduced in size */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload Images (Optional)</label>
              <div className="flex items-center justify-center w-full">
                <label 
                  htmlFor="image-upload" 
                  className="flex flex-col items-center justify-center w-full h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                >
                  <div className="flex flex-col items-center justify-center pt-2 pb-2">
                    <Upload className="w-5 h-5 mb-1 text-gray-400" />
                    <p className="text-xs text-gray-500">
                      <span className="font-semibold">Click to upload</span> images
                    </p>
                  </div>
                  <Input 
                    id="image-upload" 
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
              
              {/* Image previews */}
              {imagePreviewUrls.length > 0 && (
                <div className="mt-2">
                  <p className="text-sm font-medium text-gray-700 mb-1">Uploaded Images:</p>
                  <div className="grid grid-cols-3 gap-2">
                    {imagePreviewUrls.map((url, index) => (
                      <div key={index} className="relative rounded-md overflow-hidden h-20">
                        <img 
                          src={url} 
                          alt={`Uploaded preview ${index + 1}`} 
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Tell us more about your project (size, timeline, specific needs)"
                className="w-full"
              />
            </div>

            <div className="flex items-center justify-center mb-2">
              <Award className="text-green mr-2" size={20} />
              <p className="font-medium text-gray-700">100% Satisfaction Guarantee</p>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-navy hover:bg-green text-white py-3"
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
                <>
                  <Mail className="mr-2 h-5 w-5" /> Request Free Quote
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteRequestModal;
