import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import robotLogo from '../images/robot.png';
import codebaseImage from '../images/codebase.png';
import devTeamImage from '../images/dev-team.png';
import companyImage from '../images/company.png';

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const offsideStyle = { fontFamily: "'Offside', sans-serif" };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Augment Code</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Offside&display=swap" rel="stylesheet" />
      </Head>

      <header className="fixed w-full bg-white z-50 py-3">
        <nav className="container mx-auto px-6">
          <div className="flex justify-end items-center">
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-800 hover:text-blue-500 transition-colors">Blog</a>
              <a href="#" className="text-gray-800 hover:text-blue-500 transition-colors">Team</a>
              <a href="#" className="text-gray-800 hover:text-blue-500 transition-colors">Careers</a>
              <a href="#" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors text-lg font-semibold">Try Augment Code</a>
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
              <a href="#" className="inline-block bg-blue-500 text-white px-4 py-1 rounded-full hover:bg-blue-600 transition-colors text-sm font-semibold">Try Now</a>
            </div>
          )}
        </nav>
      </header>

      <main className="flex flex-col" style={offsideStyle}>
        <div className="flex flex-col items-center justify-center min-h-screen pt-14">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center mb-12">
              <div className="mr-6">
                <Image
                  src={robotLogo}
                  alt="Robot Logo"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <div className="text-center flex flex-col items-end">
                <h1 className="text-[78px] font-bold text-gray-900 leading-none font-[700]">
                  Augment
                </h1>
                <span className="text-[45px] font-bold text-gray-900 leading-[4rem] mt-[-0.2em] font-[700] lowercase">
                  code
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'rgb(107, 114, 128)' }}>your codebase</h3>
                <Image
                  src={codebaseImage}
                  alt="Your Codebase"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'rgb(107, 114, 128)' }}>your dev team</h3>
                <Image
                  src={devTeamImage}
                  alt="Your Dev Team"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'rgb(107, 114, 128)' }}>your company</h3>
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