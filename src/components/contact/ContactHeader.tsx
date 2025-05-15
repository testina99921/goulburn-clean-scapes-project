
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
      </div>
    </section>
  );
};

export default ContactHeader;
