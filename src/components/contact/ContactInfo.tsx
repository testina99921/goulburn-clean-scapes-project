
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
        <h3 className="text-2xl font-semibold text-navy mb-4">Contact Information</h3>
      )}
      
      <div className={`${isHorizontal ? 'flex items-center mb-2 mr-6' : 'mb-2'}`}>
        <MapPin className="text-navy inline mr-2" size={isHorizontal ? 20 : 18} />
        <p className="text-navy inline">
          <strong>Address:</strong> 123 Main Street, Goulburn, NSW 2580
        </p>
      </div>
      
      <div className={`${isHorizontal ? 'flex items-center mb-2 mr-6' : 'mb-2'}`}>
        <Phone className="text-navy inline mr-2" size={isHorizontal ? 20 : 18} />
        <p className="text-navy inline">
          <strong>Phone:</strong> <a href="tel:+61412345678" className="text-navy hover:text-navyLight transition-colors">+61 412 345 678</a>
        </p>
      </div>
      
      <div className={`${isHorizontal ? 'flex items-center mb-2' : 'mb-4'}`}>
        <Mail className="text-navy inline mr-2" size={isHorizontal ? 20 : 18} />
        <p className="text-navy inline">
          <strong>Email:</strong> <a href="mailto:info@example.com" className="text-navy hover:text-navyLight transition-colors">info@example.com</a>
        </p>
      </div>
      
      {!isHorizontal && (
        <>
          <h4 className="text-xl font-semibold text-navy mt-6 mb-3 flex items-center">
            <Clock className="text-navy mr-2" size={18} />
            Business Hours
          </h4>
          <p className="text-navy">Monday - Friday: 9am - 5pm</p>
          <p className="text-navy">Saturday: 9am - 12pm</p>
          <p className="text-navy">Sunday: Closed</p>
        </>
      )}
    </div>
  );
};

export default ContactInfo;
