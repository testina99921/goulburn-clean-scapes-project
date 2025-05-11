
import React, { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 h-full">
      <div className="text-[#4A90A7] mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-[#4A90A7]">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
