
import { useState } from 'react';
import { X, Send, Upload } from 'lucide-react';

interface QuoteRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  { id: 'residential', name: 'Residential Pressure Washing' },
  { id: 'commercial', name: 'Commercial Pressure Washing' },
  { id: 'driveway', name: 'Driveway & Concrete Cleaning' },
  { id: 'house', name: 'House Washing' },
  { id: 'deck', name: 'Deck & Patio Restoration' },
  { id: 'roof', name: 'Roof Cleaning' },
  { id: 'fence', name: 'Fence Cleaning' },
];

const QuoteRequestModal: React.FC<QuoteRequestModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setName('');
        setEmail('');
        setPhone('');
        setAddress('');
        setSelectedService('');
        setMessage('');
        setFiles([]);
        setSubmitted(false);
        onClose();
      }, 2000);
    }, 1000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" onClick={onClose}></div>
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4 md:p-0">
        <div className="glass-card w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl shadow-xl relative">
          <button 
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
          
          <div className="p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green rounded-full mx-auto flex items-center justify-center mb-6">
                  <svg 
                    className="w-8 h-8 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold mb-2 text-navy">Thank You!</h2>
                <p className="text-gray-600">Your quote request has been submitted successfully. We'll get back to you shortly.</p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-semibold mb-6 text-navy text-center">Request a Free Quote</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navy focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navy focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Phone Number</label>
                      <input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navy focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-gray-700 font-medium mb-1">Service Needed</label>
                      <select
                        id="service"
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navy focus:border-transparent"
                        required
                      >
                        <option value="">Select a Service</option>
                        {services.map((service) => (
                          <option key={service.id} value={service.id}>{service.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-gray-700 font-medium mb-1">Address</label>
                    <input
                      id="address"
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navy focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Additional Details</label>
                    <textarea
                      id="message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navy focus:border-transparent resize-none"
                      placeholder="Tell us more about your needs..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Attach Photos (Optional)</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                      <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-navy hover:text-navyLight">
                            <span>Upload files</span>
                            <input id="file-upload" name="file-upload" type="file" multiple className="sr-only" onChange={handleFileChange} />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                    
                    {files.length > 0 && (
                      <div className="mt-2">
                        <p className="text-sm font-medium text-gray-700 mb-2">Selected files:</p>
                        <ul className="space-y-1">
                          {files.map((file, index) => (
                            <li key={`${file.name}-${index}`} className="flex items-center justify-between text-sm bg-gray-50 p-2 rounded">
                              <span className="truncate max-w-xs">{file.name}</span>
                              <button 
                                type="button" 
                                onClick={() => removeFile(index)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <X size={16} />
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className={`w-full py-3 px-4 bg-navy text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center 
                      ${submitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-navyLight hover:shadow-glow transform hover:scale-105'}`}
                    >
                      {submitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          <Send size={18} className="mr-2" />
                          Submit
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuoteRequestModal;
