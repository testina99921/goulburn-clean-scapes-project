
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface ContactInfoProps {
  layout?: 'vertical' | 'horizontal';
}

const ContactInfo: React.FC<ContactInfoProps> = ({ layout = 'vertical' }) => {
  const isHorizontal = layout === 'horizontal';
  
  return (
    <div className={`glass-card p-6 rounded-xl ${isHorizontal ? 'flex flex-wrap justify-around items-center' : ''}`}>
      {!isHorizontal && (
        <h3 className="text-2xl font-semibold text-navy mb-6">Contact Information</h3>
      )}
      
      <div className={`${isHorizontal ? 'mb-2 mr-6' : 'mb-6'}`}>
        <div className="flex items-start">
          <div className="bg-cyan-500 rounded-full p-2 mr-4 flex-shrink-0">
            <Phone className="text-white" size={isHorizontal ? 20 : 24} />
          </div>
          <div>
            <p className="text-gray-600 font-medium">Phone</p>
            <p className="text-cyan-500 font-medium">
              <a href="tel:+61412345678" className="hover:text-navyLight transition-colors">0417 264 292</a>
            </p>
          </div>
        </div>
      </div>
      
      <div className={`${isHorizontal ? 'mb-2 mr-6' : 'mb-6'}`}>
        <div className="flex items-start">
          <div className="bg-cyan-500 rounded-full p-2 mr-4 flex-shrink-0">
            <Mail className="text-white" size={isHorizontal ? 20 : 24} />
          </div>
          <div>
            <p className="text-gray-600 font-medium">Email</p>
            <p className="text-cyan-500 font-medium">
              <a href="mailto:rossjudd@hotmail.com" className="hover:text-navyLight transition-colors">rossjudd@hotmail.com</a>
            </p>
          </div>
        </div>
      </div>
      
      <div className={`${isHorizontal ? 'mb-2' : 'mb-6'}`}>
        <div className="flex items-start">
          <div className="bg-cyan-500 rounded-full p-2 mr-4 flex-shrink-0">
            <MapPin className="text-white" size={isHorizontal ? 20 : 24} />
          </div>
          <div>
            <p className="text-gray-600 font-medium">Location</p>
            <p className="text-gray-800">Goulburn, NSW, Australia</p>
            <p className="text-gray-500 text-sm">Serving Goulburn, Canberra & surrounds</p>
          </div>
        </div>
      </div>
      
      {!isHorizontal && (
        <div className="mb-4">
          <div className="flex items-start">
            <div className="bg-cyan-500 rounded-full p-2 mr-4 flex-shrink-0">
              <Clock className="text-white" size={24} />
            </div>
            <div>
              <p className="text-gray-600 font-medium">Business Hours</p>
              <p className="text-gray-800">Monday - Friday: 7:00 AM - 5:00 PM</p>
              <p className="text-gray-800">Saturday: 8:00 AM - 3:00 PM</p>
              <p className="text-gray-800">Sunday: By appointment</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactInfo;
