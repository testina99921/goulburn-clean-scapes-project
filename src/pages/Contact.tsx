
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
      
      {/* Contact Information and Form */}
      <section className="py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactInfo />
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
