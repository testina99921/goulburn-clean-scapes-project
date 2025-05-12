
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import TestimonialCard from './TestimonialCard';

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

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="rounded-2xl bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-2">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i} size={24} className="text-yellow-500 fill-yellow-500" />
            ))}
            {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i + testimonials[currentIndex].rating} size={24} className="text-gray-300" />
            ))}
          </div>
          <p className="text-lg md:text-xl text-navy italic mb-6">&ldquo;{testimonials[currentIndex].quote}&rdquo;</p>
          <h3 className="text-lg font-semibold text-navy">{testimonials[currentIndex].name}</h3>
          <p className="text-black font-medium">{testimonials[currentIndex].location}</p>
        </div>
        
        <div className="flex justify-center items-center space-x-2">
          {testimonials.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === slideIndex ? 'bg-navy' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${slideIndex + 1}`}
            >
            </button>
          ))}
        </div>
      </div>
      
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg text-navy hover:text-navyLight transition-colors"
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-lg text-navy hover:text-navyLight transition-colors"
        aria-label="Next testimonial"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default TestimonialCarousel;
