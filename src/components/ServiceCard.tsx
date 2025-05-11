
import React, { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="glass-card rounded-xl transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl h-full flex flex-col p-7">
      <div className="text-navy mb-5 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-navy text-center">{title}</h3>
      <p className="text-navy/70 flex-grow text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;
