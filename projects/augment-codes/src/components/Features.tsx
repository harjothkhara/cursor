import React from 'react';
import Image from 'next/image';
import codebaseImage from '../images/codebase.png';
import devTeamImage from '../images/dev-team.png';
import companyImage from '../images/company.png';

const Features: React.FC = () => {
  return (
    <div className="container mx-auto px-6 mt-4 mb-8 md:mt-8 md:mb-32"> {/* Reduced margins for mobile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8"> {/* Reduced gap for mobile */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 text-gray-500">your codebase</h3> {/* Reduced text size and margin for mobile */}
          <Image
            src={codebaseImage}
            alt="Your Codebase"
            width={60}
            height={60}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 text-gray-500">your dev team</h3> {/* Reduced text size and margin for mobile */}
          <Image
            src={devTeamImage}
            alt="Your Dev Team"
            width={60}
            height={60}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 text-gray-500">your company</h3> {/* Reduced text size and margin for mobile */}
          <Image
            src={companyImage}
            alt="Your Company"
            width={60}
            height={60}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
