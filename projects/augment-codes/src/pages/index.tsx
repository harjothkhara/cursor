import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (parallaxRef.current) {
        const offset = window.pageYOffset;
        parallaxRef.current.style.transform = `translateY(${offset * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Augment Code</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="fixed w-full bg-white shadow-md transition-all duration-300 z-50" style={{ top: scrollY > 50 ? '-100px' : '0' }}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-end items-center">
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-800 hover:text-blue-500 transition-colors">Blog</a>
              <a href="#" className="text-gray-800 hover:text-blue-500 transition-colors">Team</a>
              <a href="#" className="text-gray-800 hover:text-blue-500 transition-colors">Careers</a>
              <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">Try Augment Code</a>
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-2">
              <a href="#" className="block text-gray-800 hover:text-blue-500 transition-colors">Blog</a>
              <a href="#" className="block text-gray-800 hover:text-blue-500 transition-colors">Team</a>
              <a href="#" className="block text-gray-800 hover:text-blue-500 transition-colors">Careers</a>
              <a href="#" className="block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">Try Augment Code</a>
            </div>
          )}
        </nav>
      </header>

      <main>
        <section className="hero min-h-screen flex items-center justify-center relative overflow-hidden">
          <div ref={parallaxRef} className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white z-0"></div>
          <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-end">
              <svg className="w-full max-w-md" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="80" fill="#3B82F6" />
                <rect x="60" y="80" width="80" height="60" rx="10" fill="white" />
                <circle cx="80" cy="100" r="10" fill="#3B82F6" />
                <circle cx="120" cy="100" r="10" fill="#3B82F6" />
                <path d="M70 130 Q100 150 130 130" stroke="#3B82F6" strokeWidth="5" fill="none" />
              </svg>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left md:pl-12">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">Augment Code</h1>
              <p className="text-xl md:text-2xl mb-10 text-gray-700 leading-relaxed">
                The best software comes from<br className="hidden md:inline" /> Augmenting developers —<br className="hidden md:inline" /> not replacing them.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center">
                <svg className="w-16 h-16 mb-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900">your codebase</h3>
              </div>
              <div className="flex flex-col items-center text-center">
                <svg className="w-16 h-16 mb-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900">your dev team</h3>
              </div>
              <div className="flex flex-col items-center text-center">
                <svg className="w-16 h-16 mb-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900">your company</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Add more sections here to replicate the content from the original landing page */}
      </main>

      <footer className="bg-gray-100 py-6 relative z-20">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Augment Computing, Inc.</p>
          <div className="mt-4">
            <a href="#" className="text-gray-600 mx-2 hover:text-blue-500 transition-colors">Blog</a>
            <a href="#" className="text-gray-600 mx-2 hover:text-blue-500 transition-colors">Contact Us</a>
            <a href="#" className="text-gray-600 mx-2 hover:text-blue-500 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;