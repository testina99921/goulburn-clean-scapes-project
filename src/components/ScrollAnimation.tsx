
import React, { useEffect, useRef } from 'react';

interface Props {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
}

const ScrollAnimation: React.FC<Props> = ({ children, threshold = 0.1, rootMargin = '0px' }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          ref.current.classList.add('revealed');
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    const currentElement = ref.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin]);

  return (
    <div ref={ref} className="animate-on-scroll">
      {children}
    </div>
  );
};

export default ScrollAnimation;
