
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
    <div className="relative p-6 bg-white rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1">
      <div className="absolute -top-5 -left-5 bg-[#4A90A7] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
        {step}
      </div>
      <div className="text-green mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-[#4A90A7]">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ProcessCard;
