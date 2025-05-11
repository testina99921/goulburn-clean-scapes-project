
import { useRef, useState, useEffect } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  height?: string;
}

const BeforeAfterSlider = ({ 
  beforeImage, 
  afterImage, 
  beforeLabel = 'Before', 
  afterLabel = 'After',
  height = '400px'
}: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const position = (x / rect.width) * 100;
      
      // Clamp the position between 0 and 100
      const clampedPosition = Math.max(0, Math.min(100, position));
      setSliderPosition(clampedPosition);
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const position = (x / rect.width) * 100;
      
      // Clamp the position between 0 and 100
      const clampedPosition = Math.max(0, Math.min(100, position));
      setSliderPosition(clampedPosition);
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef} 
      className="before-after-slider rounded-xl overflow-hidden shadow-xl"
      style={{ height }}
    >
      <div className="slider-container">
        <div className="slider-before h-full w-full">
          <img 
            src={beforeImage} 
            alt="Before" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-md text-base font-medium">
            {beforeLabel}
          </div>
        </div>
        
        <div 
          className="slider-after h-full"
          style={{ 
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` 
          }}
        >
          <img 
            src={afterImage} 
            alt="After" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-navy text-white px-4 py-2 rounded-md text-base font-medium">
            {afterLabel}
          </div>
        </div>
        
        <div 
          className="slider-divider"
          style={{ left: `${sliderPosition}%` }}
        ></div>
        
        <div 
          className="slider-handle"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        ></div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
