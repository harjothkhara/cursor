import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import robotLogo from '../images/robot.png';
import robotBlinkLogo from '../images/robot-blink.png';
import codebaseImage from '../images/codebase.png';
import devTeamImage from '../images/dev-team.png';
import companyImage from '../images/company.png';
import { testimonials } from '../testimonials';

const BlinkingRobot: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-[120px] h-[120px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={isHovered ? robotBlinkLogo : robotLogo}
        alt="Robot Logo"
        layout="fill"
        objectFit="contain"
        className="transition-opacity duration-300"
      />
    </div>
  );
};

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-blue-500 text-white py-16 px-4 sm:px-6 lg:px-8 relative rounded-lg">
      <div className="max-w-3xl mx-auto text-center">
        <svg className="w-12 h-12 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-2xl font-medium mb-8">{testimonials[currentIndex].text}</p>
        <div>
          <p className="font-semibold">{testimonials[currentIndex].author}</p>
          <p className="text-blue-200">{testimonials[currentIndex].date}</p>
        </div>
      </div>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button 
          onClick={prevTestimonial}
          className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
          aria-label="Previous testimonial"
        >
          ←
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button 
          onClick={nextTestimonial}
          className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
          aria-label="Next testimonial"
        >
          →
        </button>
      </div>
      <div className="flex justify-center mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full mx-1 ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const offsideStyle = { fontFamily: "'Offside', sans-serif" };

  return (
    <div className="min-h-screen bg-white" style={offsideStyle}>
      <Head>
        <title>Augment Code</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Offside&display=swap" rel="stylesheet" />
      </Head>

      <header className="fixed w-full bg-white z-50 py-4">
        <nav className="container mx-auto px-6">
          <div className="flex justify-end items-center">
            <a href="#" className="font-inter text-nowrap py-4 hover:text-gray-600 md:py-2 text-gray-600 mx-4 text-sm">Blog</a>
            <a href="#" className="font-inter text-nowrap py-4 hover:text-gray-600 md:py-2 text-gray-600 mx-4 text-sm">Team</a>
            <a href="#" className="font-inter text-nowrap py-4 hover:text-gray-600 md:py-2 text-gray-600 mx-4 text-sm">Careers</a>
            <a href="#" className="font-inter bg-blue-500 hover:bg-blue-600 text-white font-normal py-2 px-6 rounded-full ml-4">
              <span className="hidden md:inline">Try Augment Code</span>
              <span className="md:hidden">Try Now</span>
            </a>
          </div>
        </nav>
      </header>

      <main className="flex flex-col">
        <div className="flex flex-col items-center justify-center min-h-screen pt-14">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center mb-12">
              <div className="mr-6 pb-12">
                <BlinkingRobot />
              </div>
              <div className="text-center flex flex-col items-end">
                <h1 className="text-[78px] font-bold text-gray-900 leading-none font-[700]">
                  Augment
                </h1>
                <span className="text-[48px] font-bold text-gray-900 leading-[3rem] mt-[-0.2em] font-[700] lowercase">
                  code
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-2xl font-semibold mb-3" style={{ color: 'rgb(107, 114, 128)' }}>your codebase</h3>
                <Image
                  src={codebaseImage}
                  alt="Your Codebase"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="text-2xl font-semibold mb-3" style={{ color: 'rgb(107, 114, 128)' }}>your dev team</h3>
                <Image
                  src={devTeamImage}
                  alt="Your Dev Team"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="text-2xl font-semibold mb-3" style={{ color: 'rgb(107, 114, 128)' }}>your company</h3>
                <Image
                  src={companyImage}
                  alt="Your Company"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Users Are Saying</h2>
          <TestimonialCarousel />
        </div>
      </section>

      <footer className="bg-gray-100 py-6 relative z-20">
        {/* ... existing footer content ... */}
      </footer>
    </div>
  );
};

export default Home;