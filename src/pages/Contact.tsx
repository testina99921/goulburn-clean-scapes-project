
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SectionTitle from '../components/SectionTitle';
import { Mail, Phone, MapPin, Clock, Send, Upload, Check } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
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
        setMessage('');
        setFiles([]);
        setSubmitted(false);
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

  return (
    <div className="min-h-screen bg-gradient">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Get in Touch Section */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto glass-card rounded-xl p-8 md:p-12 shadow-lg">
              <AnimateOnScroll>
                <SectionTitle
                  title="Get In Touch"
                  subtitle="Send us a message and we'll get back to you soon"
                />
              </AnimateOnScroll>
              
              <div className="mt-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green rounded-full mx-auto flex items-center justify-center mb-6">
                      <Check size={32} className="text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold mb-2 text-navy">Thank You!</h2>
                    <p className="text-gray-600">Your message has been sent successfully. We'll get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <AnimateOnScroll delay={100}>
                        <div>
                          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                          <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navy focus:border-transparent"
                            required
                          />
                        </div>
                      </AnimateOnScroll>
                      <AnimateOnScroll delay={200}>
                        <div>
                          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                          <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navy focus:border-transparent"
                            required
                          />
                        </div>
                      </AnimateOnScroll>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <AnimateOnScroll delay={300}>
                        <div>
                          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                          <input
                            id="phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navy focus:border-transparent"
                            required
                          />
                        </div>
                      </AnimateOnScroll>
                      <AnimateOnScroll delay={400}>
                        <div>
                          <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Address</label>
                          <input
                            id="address"
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navy focus:border-transparent"
                            required
                          />
                        </div>
                      </AnimateOnScroll>
                    </div>

                    <AnimateOnScroll delay={500}>
                      <div>
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                        <textarea
                          id="message"
                          rows={5}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navy focus:border-transparent resize-none"
                          required
                        ></textarea>
                      </div>
                    </AnimateOnScroll>

                    <AnimateOnScroll delay={600}>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Attach Photos (Optional)</label>
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
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </AnimateOnScroll>
                    
                    <AnimateOnScroll delay={700}>
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={submitting}
                          className={`py-3 px-6 bg-navy text-white text-lg font-bold rounded-lg transition-all duration-300 flex items-center justify-center 
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
                    </AnimateOnScroll>
                  </form>
                )}
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-16">
            <div className="max-w-5xl mx-auto">
              <AnimateOnScroll>
                <SectionTitle
                  title="Contact Information"
                  subtitle="Get in touch with our friendly team"
                />
              </AnimateOnScroll>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <AnimateOnScroll delay={100}>
                  <div className="glass-card p-6 rounded-xl text-center">
                    <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-navy">Phone</h3>
                    <p className="text-gray-600">Call us for a free quote</p>
                    <a href="tel:0417264292" className="text-lg font-semibold text-navy hover:text-navyLight transition-colors">0417 264 292</a>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll delay={200}>
                  <div className="glass-card p-6 rounded-xl text-center">
                    <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-navy">Email</h3>
                    <p className="text-gray-600">Send us a message anytime</p>
                    <a href="mailto:rossjudd@hotmail.com" className="text-navy hover:text-navyLight transition-colors">rossjudd@hotmail.com</a>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll delay={300}>
                  <div className="glass-card p-6 rounded-xl text-center">
                    <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-navy">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8am - 6pm</p>
                    <p className="text-gray-600">Saturday: 9am - 1pm</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </section>

          {/* Service Area */}
          <section>
            <div className="max-w-4xl mx-auto text-center">
              <AnimateOnScroll>
                <h2 className="text-3xl font-light text-navy mb-4">Service Areas</h2>
                <p className="text-lg text-gray-600 mb-6">
                  We proudly provide pressure washing services to the following areas:
                </p>
                <div className="glass-card p-6 rounded-xl max-w-2xl mx-auto">
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="bg-navy/10 text-navy px-4 py-2 rounded-full font-medium">Goulburn</span>
                    <span className="bg-navy/10 text-navy px-4 py-2 rounded-full font-medium">Canberra</span>
                    <span className="bg-navy/10 text-navy px-4 py-2 rounded-full font-medium">Queanbeyan</span>
                    <span className="bg-navy/10 text-navy px-4 py-2 rounded-full font-medium">Yass</span>
                    <span className="bg-navy/10 text-navy px-4 py-2 rounded-full font-medium">Bungendore</span>
                    <span className="bg-navy/10 text-navy px-4 py-2 rounded-full font-medium">Collector</span>
                    <span className="bg-navy/10 text-navy px-4 py-2 rounded-full font-medium">Gunning</span>
                    <span className="bg-navy/10 text-navy px-4 py-2 rounded-full font-medium">Marulan</span>
                    <span className="bg-navy/10 text-navy px-4 py-2 rounded-full font-medium">Moss Vale</span>
                    <span className="bg-navy/10 text-navy px-4 py-2 rounded-full font-medium">Southern Highlands</span>
                  </div>
                  <p className="mt-6 text-gray-600">Don't see your area listed? Contact us to check if we service your location.</p>
                </div>
              </AnimateOnScroll>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
