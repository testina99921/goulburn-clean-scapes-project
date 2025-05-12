
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  location: string;
  quote: string;
  rating: number;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const goToPrevious = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };
  
  const goToNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };
  
  useEffect(() => {
    // Auto-advance the carousel every 8 seconds
    const interval = setInterval(goToNext, 8000);
    
    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Testimonial */}
      <div className="glass-card rounded-xl p-8 md:p-10 shadow-lg">
        <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          <div className="flex justify-center mb-6">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-500 fill-yellow-500" />
            ))}
            {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i + testimonials[currentIndex].rating} className="h-6 w-6 text-gray-300" />
            ))}
          </div>
          
          <p className="text-lg md:text-xl text-navy text-center mb-8 italic">
            "{testimonials[currentIndex].quote}"
          </p>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold text-navy">{testimonials[currentIndex].name}</h3>
            <p className="text-black">{testimonials[currentIndex].location}</p>
          </div>
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <button 
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-navy text-white rounded-full p-2 shadow-lg hover:bg-green transition-colors"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-navy text-white rounded-full p-2 shadow-lg hover:bg-green transition-colors"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      {/* Dots */}
      <div className="flex justify-center space-x-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? 'bg-navy' : 'bg-navy/30'
            } transition-colors`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
