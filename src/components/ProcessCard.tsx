
import React, { ReactNode } from 'react';

interface ProcessCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  step: number;
}

const ProcessCard: React.FC<ProcessCardProps> = ({
  title,
  description,
  icon,
  step
}) => {
  return (
    <div className="relative p-7 glass-card rounded-xl shadow-lg transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl">
      <div className="absolute -top-5 -left-5 bg-navy text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
        {step}
      </div>
      <div className="text-navy mb-5 flex justify-center">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-navy text-center">{title}</h3>
      <p className="text-gray-700 text-center">{description}</p>
    </div>
  );
};

export default ProcessCard;
