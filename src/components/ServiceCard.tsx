
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link = '/services',
}) => {
  return (
    <div className="glass-card p-6 rounded-lg transition-all duration-300 hover:shadow-lg group animate-on-scroll">
      <div className="bg-navy/5 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-green group-hover:bg-navy group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-navy text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to={link}
        className="text-navy font-medium flex items-center hover:text-green transition-colors"
      >
        Learn More
        <svg
          className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </Link>
    </div>
  );
};

export default ServiceCard;
