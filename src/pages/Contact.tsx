
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
      
      {/* Contact Information Header */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <ContactInfo layout="horizontal" />
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <ContactForm />
        </div>
      </section>
      
      {/* Full Width Map */}
      <ContactFullWidthMap />
      
      <Footer />
    </div>
  );
};

export default Contact;
