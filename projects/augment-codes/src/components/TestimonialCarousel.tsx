import React, { useState } from 'react';
import { testimonials } from '../testimonials';

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-blue-500 text-white py-12 px-4 sm:px-6 lg:px-8 relative rounded-lg">
      <div className="max-w-3xl mx-auto text-center">
        <svg className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-lg sm:text-xl md:text-2xl font-medium mb-6 sm:mb-8">{testimonials[currentIndex].text}</p>
        <div>
          <p className="font-semibold text-sm sm:text-base">{testimonials[currentIndex].author}</p>
          <p className="text-blue-200 text-xs sm:text-sm">{testimonials[currentIndex].date}</p>
        </div>
      </div>
      <div className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2">
        <button 
          onClick={prevTestimonial}
          className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
          aria-label="Previous testimonial"
        >
          <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      <div className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2">
        <button 
          onClick={nextTestimonial}
          className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
          aria-label="Next testimonial"
        >
          <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="flex justify-center mt-6 sm:mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full mx-1 ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
