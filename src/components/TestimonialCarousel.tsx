
import React, { useRef, useEffect } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import TestimonialCard from './TestimonialCard';

interface Testimonial {
  name: string;
  location: string;
  quote: string;
  rating: number;
  result?: string;
  image?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const carouselRef = useRef(null);

  // Animation for elements that should animate on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-section');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="testimonial-carousel">
      <Carousel
        ref={carouselRef}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4 pr-4">
              <TestimonialCard 
                name={testimonial.name}
                location={testimonial.location}
                quote={testimonial.quote}
                rating={testimonial.rating}
                result={testimonial.result}
                image={testimonial.image}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-6 gap-4">
          <CarouselPrevious className="relative inset-auto bg-navy text-white hover:bg-navyLight hover:text-white" />
          <CarouselNext className="relative inset-auto bg-navy text-white hover:bg-navyLight hover:text-white" />
        </div>
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
