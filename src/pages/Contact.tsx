
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/contact/ContactForm';
import ContactMap from '../components/contact/ContactMap';
import ContactInfo from '../components/contact/ContactInfo';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient">
      <Header />
      
      {/* Page Header */}
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
      
      {/* Contact Information */}
      <section className="py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactInfo />
          <ContactMap />
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </section>
      
      {/* Full Width Map */}
      <section className="py-12 bg-navyLight/10">
        <ContactMap fullWidth={true} />
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
