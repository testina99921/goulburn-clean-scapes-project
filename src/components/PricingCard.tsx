
import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  recommended?: boolean;
  buttonText?: string;
  buttonLink?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  recommended = false,
  buttonText = 'Get Started',
  buttonLink = '/contact'
}) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${
        recommended ? 'border-2 border-green' : 'border border-gray-200'
      }`}
    >
      {recommended && (
        <div className="bg-red-600 text-white py-2 px-4 font-bold text-center text-base">
          Most Popular
        </div>
      )}
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-bold text-navy mb-2">{title}</h3>
        <div className="flex items-baseline">
          <span className="text-3xl font-bold text-navy">{price}</span>
          {price !== 'Custom' && <span className="text-gray-500 ml-1">{price !== 'From' ? '/service' : ''}</span>}
        </div>
        <p className="mt-4 text-gray-600">{description}</p>
        <ul className="mt-6 space-y-3">
          {features.map((feature, index) => (
            <li 
              key={index} 
              className="flex items-center"
            >
              <Check 
                className={`w-5 h-5 mr-2 ${
                  feature.included ? 'text-green' : 'text-gray-300'
                }`} 
              />
              <span 
                className={feature.included ? 'text-gray-700' : 'text-gray-400'}
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Link 
            to={buttonLink} 
            className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-colors ${
              recommended 
                ? 'bg-green text-white hover:bg-green/90' 
                : 'bg-navy text-white hover:bg-navy/90'
            }`}
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
