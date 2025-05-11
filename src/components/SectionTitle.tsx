
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  lightMode?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  alignment = 'center',
  lightMode = false
}) => {
  const textAlign = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`${textAlign[alignment]} mb-12`}>
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          lightMode ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg ${
            lightMode ? 'text-gray-200' : 'text-gray-600'
          } max-w-2xl mx-auto`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`h-1 w-20 rounded-full mt-4 ${
          lightMode ? 'bg-white' : 'bg-green'
        } ${alignment === 'center' ? 'mx-auto' : alignment === 'right' ? 'ml-auto' : ''}`}
      ></div>
    </div>
  );
};

export default SectionTitle;
