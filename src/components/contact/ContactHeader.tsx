
import React from 'react';
import SectionTitle from '../SectionTitle';

const ContactHeader = () => {
  return (
    <section className="bg-navyLight/10 py-20">
      <div className="container mx-auto px-4 text-center">
        <SectionTitle 
          title="Contact Us" 
          subtitle="Get in touch with our team for inquiries and service requests"
        />
        <p className="text-xl text-navy mt-4">
          We're here to help with all your pressure washing needs. Contact us today for a free quote!
        </p>
      </div>
    </section>
  );
};

export default ContactHeader;
