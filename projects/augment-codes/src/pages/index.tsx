import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import robotLogo from '../images/robot.png';
import robotBlinkLogo from '../images/robot-blink.png';
import codebaseImage from '../images/codebase.png';
import devTeamImage from '../images/dev-team.png';
import companyImage from '../images/company.png';

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

const Home: React.FC = () => {
  const offsideStyle = { fontFamily: "'Offside', sans-serif" };

  return (
    <div className="min-h-screen bg-white" style={offsideStyle}>
      <Head>
        <title>Augment Code</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Offside&display=swap" rel="stylesheet" />
      </Head>

      <header className="fixed w-full bg-white z-50 py-3">
        <nav className="container mx-auto px-6">
          {/* ... existing nav content ... */}
        </nav>
      </header>

      <main className="flex flex-col">
        <div className="flex flex-col items-center justify-center min-h-screen pt-14">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center mb-12">
              <div className="mr-6">
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

      <footer className="bg-gray-100 py-6 relative z-20">
        {/* ... existing footer content ... */}
      </footer>
    </div>
  );
};

export default Home;