
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import ContactHeader from '../components/contact/ContactHeader';
import ContactFullWidthMap from '../components/contact/ContactFullWidthMap';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient">
      <Header />
      
      {/* Page Header */}
      <ContactHeader />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Information */}
          <div className="md:w-1/3">
            <ContactInfo layout="vertical" />
          </div>
          
          {/* Contact Form */}
          <div className="md:w-2/3">
            <ContactForm />
          </div>
        </div>
      </div>
      
      {/* Full Width Map */}
      <ContactFullWidthMap />
      
      <Footer />
    </div>
  );
};

export default Contact;
