
import React from 'react';

const ContactInfo: React.FC = () => {
  return (
    <div className="glass-card p-6 rounded-xl">
      <h3 className="text-2xl font-semibold text-navy mb-4">Contact Information</h3>
      <p className="text-navy mb-2">
        <strong>Address:</strong> 123 Main Street, Goulburn, NSW 2580
      </p>
      <p className="text-navy mb-2">
        <strong>Phone:</strong> <a href="tel:+61412345678" className="text-navy hover:text-navyLight transition-colors">+61 412 345 678</a>
      </p>
      <p className="text-navy mb-4">
        <strong>Email:</strong> <a href="mailto:info@example.com" className="text-navy hover:text-navyLight transition-colors">info@example.com</a>
      </p>
      <h4 className="text-xl font-semibold text-navy mt-6 mb-3">Business Hours</h4>
      <p className="text-navy">Monday - Friday: 9am - 5pm</p>
      <p className="text-navy">Saturday: 9am - 12pm</p>
      <p className="text-navy">Sunday: Closed</p>
    </div>
  );
};

export default ContactInfo;
