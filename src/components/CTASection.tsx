
import React from 'react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
  openModal?: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Ready to Transform Your Property?",
  subtitle = "Contact us today for a free, no-obligation quote on our professional pressure washing services.",
  buttonText = "Get a Free Quote",
  buttonLink = "#",
  backgroundImage,
  openModal
}) => {
  // Handle the button click
  const handleButtonClick = (e: React.MouseEvent) => {
    if (openModal) {
      e.preventDefault();
      openModal();
    }
  };

  return (
    <section 
      className="py-20 relative bg-navy text-white"
      style={backgroundImage ? {
        backgroundImage: `linear-gradient(rgba(15, 52, 96, 0.85), rgba(15, 52, 96, 0.85)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : {}}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">{title}</h2>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-on-scroll">{subtitle}</p>
        {openModal ? (
          <button 
            onClick={handleButtonClick}
            className="neumorphic-button bg-white text-navy hover:bg-gray-100 inline-block animate-on-scroll"
          >
            {buttonText}
          </button>
        ) : (
          <Link 
            to={buttonLink}
            className="neumorphic-button bg-white text-navy hover:bg-gray-100 inline-block animate-on-scroll"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
};

export default CTASection;
