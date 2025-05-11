
import React from 'react';

interface TestimonialCardProps {
  name: string;
  location: string;
  quote: string;
  result?: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  location, 
  quote,
  result,
  image 
}) => {
  return (
    <div className="testimonial-card">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-navy text-white flex items-center justify-center font-medium text-lg">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div className="ml-4">
          <h4 className="font-semibold text-navy">{name}</h4>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
      <div className="text-gray-600 flex-grow">
        <svg
          className="text-green w-8 h-8 mb-2 opacity-50"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-3v-10h8.983zm10.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3v-10h9z" />
        </svg>
        <p className="mb-4">{quote}</p>
        {result && (
          <div className="mt-3 border-t border-gray-200 pt-3">
            <p className="text-navy font-medium">Result: {result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;
