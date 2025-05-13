import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, Clock, Send, Upload, X, Check, Trash2, Award } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import AnimateOnScroll from '../components/AnimateOnScroll';
import emailjs from '@emailjs/browser';

// Form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(5, { message: "Please enter a valid phone number." }),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  additionalServices: z.array(z.string()).optional(),
});

// SEO meta tags component
const SEOMetaTags = () => {
  useEffect(() => {
    document.title = "Contact R Judd Enterprise | Professional Pressure Washing Services";
    
    const metaDescription = document.createElement('meta');
    metaDescription.name = "description";
    metaDescription.content = "Contact R Judd Enterprise for professional pressure washing services in Goulburn, Canberra & NSW. Get in touch for a free quote today!";
    document.head.appendChild(metaDescription);
    
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = "keywords";
    metaKeywords.content = "contact, pressure washing, pressure cleaning, Goulburn, Canberra, NSW, quote, pressure washing services";
    document.head.appendChild(metaKeywords);
    
    return () => {
      const tags = document.head.querySelectorAll('meta[name="description"], meta[name="keywords"]');
      tags.forEach(tag => document.head.removeChild(tag));
    };
  }, []);
  
  return null;
};

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [additionalServices, setAdditionalServices] = useState<string[]>([]);
  const [binCleaning, setBinCleaning] = useState(false);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreviewUrls, setImagePreviewUrls] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      additionalServices: [],
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    try {
      // Prepare data to include additional services
      const submissionData = {
        ...values,
        additionalServices: additionalServices.join(", "),
        binCleaning: binCleaning ? "Yes" : "No",
        to_email: "rossjudd@hotmail.com", // Recipient email
        imageCount: imageFiles.length,
      };

      console.log("Form submitted:", submissionData);

      // Initialize EmailJS (replace with your actual service ID, template ID, and public key)
      await emailjs.send(
        'service_id', // Service ID
        'template_id', // Template ID
        submissionData,
        'public_key' // Public Key
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you shortly.",
      });

      // Reset form
      form.reset();
      setAdditionalServices([]);
      setBinCleaning(false);
      
      // Clear images
      imagePreviewUrls.forEach(url => URL.revokeObjectURL(url));
      setImageFiles([]);
      setImagePreviewUrls([]);
      
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAdditionalServiceChange = (service: string) => {
    setAdditionalServices(prev => {
      if (prev.includes(service)) {
        return prev.filter(s => s !== service);
      } else {
        return [...prev, service];
      }
    });
  };

  const handleBinCleaningChange = () => {
    setBinCleaning(prev => !prev);
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

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <SEOMetaTags />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <SectionTitle 
              title="Contact Us" 
              subtitle="Get in touch with our team for professional pressure washing services"
            />
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Contact Information - Made smaller */}
            <AnimateOnScroll className="md:col-span-1">
              <div className="glass-card rounded-lg p-6 h-full shadow-lg">
                <h3 className="text-xl font-semibold mb-6 text-navy">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-navy rounded-full p-2 mr-4 flex-shrink-0">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Phone</p>
                      <a href="tel:0417264292" className="text-navy hover:underline">0417 264 292</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-navy rounded-full p-2 mr-4 flex-shrink-0">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Email</p>
                      <a href="mailto:rossjudd@hotmail.com" className="text-navy hover:underline">rossjudd@hotmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-navy rounded-full p-2 mr-4 flex-shrink-0">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Location</p>
                      <p>Goulburn, NSW, Australia</p>
                      <p className="text-sm text-gray-500">Serving Goulburn, Canberra & surrounds</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-navy rounded-full p-2 mr-4 flex-shrink-0">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Business Hours</p>
                      <p>Monday - Friday: 7:00 AM - 5:00 PM</p>
                      <p>Saturday: 8:00 AM - 3:00 PM</p>
                      <p>Sunday: By appointment</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
            
            {/* Contact Form - Made larger */}
            <AnimateOnScroll className="md:col-span-2" delay={200}>
              <div className="glass-card rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-center mb-4">
                  <Award className="text-green mr-2" size={22} />
                  <h3 className="text-xl font-semibold text-navy">Send Us a Message</h3>
                </div>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="Your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="Message subject" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    {/* Highlighted Bin Cleaning Upsell */}
                    <div className="p-4 bg-green/10 border border-green rounded-lg">
                      <div className="flex items-center">
                        <div
                          onClick={handleBinCleaningChange}
                          className={`w-5 h-5 border rounded mr-2 flex items-center justify-center cursor-pointer ${
                            binCleaning
                              ? 'bg-green border-green'
                              : 'border-gray-400'
                          }`}
                        >
                          {binCleaning && <Check size={12} className="text-white" />}
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
                      <p className="text-sm text-gray-500 mt-1 ml-7">
                        Our popular bin cleaning service eliminates odors and bacteria from your waste containers
                      </p>
                    </div>
                    
                    {/* Additional Services section */}
                    <div>
                      <FormLabel>Additional Services (Optional)</FormLabel>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-1">
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
                                additionalServices.includes(service.id)
                                  ? 'bg-navy border-navy'
                                  : 'border-gray-400'
                              }`}
                            >
                              {additionalServices.includes(service.id) && <Check size={12} className="text-white" />}
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
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your project or any questions you may have..." 
                              className="min-h-[120px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {/* Image upload section */}
                    <div>
                      <FormLabel>Upload Images (Optional)</FormLabel>
                      <div className="flex items-center justify-center w-full mt-1">
                        <label 
                          htmlFor="contact-image-upload" 
                          className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-10 h-10 mb-3 text-gray-400" />
                            <p className="mb-2 text-sm text-gray-500">
                              <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-500">PNG, JPG, JPEG (MAX. 5MB)</p>
                          </div>
                          <Input 
                            id="contact-image-upload" 
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
                        <div className="mt-4">
                          <p className="text-sm font-medium text-gray-700 mb-2">Uploaded Images:</p>
                          <div className="grid grid-cols-3 gap-2">
                            {imagePreviewUrls.map((url, index) => (
                              <div key={index} className="relative rounded-md overflow-hidden h-24">
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
                                  <X size={14} />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-navy hover:bg-green"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" /> Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
