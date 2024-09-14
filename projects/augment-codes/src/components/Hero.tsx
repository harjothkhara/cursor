import React from 'react';
import BlinkingRobot from './BlinkingRobot';

const Hero: React.FC = () => {
  return (
    <div className="flex items-center justify-center pt-24 pb-8 md:pt-48 md:pb-16"> {/* Reduced padding for mobile */}
      <div className="flex flex-col items-center md:flex-row md:items-end">
        <div className="mr-0 md:mr-6 pb-6 md:pb-8 scale-75 md:scale-100"> {/* Added scaling for mobile */}
          <BlinkingRobot />
        </div>
        <div className="flex flex-col items-end mt-4 md:mt-0">
          <h1 className="text-5xl md:text-[78px] font-bold text-gray-900 leading-none text-right"> {/* Reduced text size for mobile */}
            Augment
          </h1>
          <span className="text-3xl md:text-[48px] font-bold text-gray-900 leading-[3rem] mt-[-0.2em] lowercase text-right"> {/* Reduced text size for mobile */}
            code
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
