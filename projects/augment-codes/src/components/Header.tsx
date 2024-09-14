import React from 'react';
import Button from './Button';

const Header: React.FC = () => {
  return (
    <header className="fixed w-full bg-white z-50 py-4">
      <nav className="container mx-auto px-6">
        <div className="flex justify-between md:justify-end items-center">
          <div className="flex md:mr-4">
            <a href="#" className="font-inter text-nowrap py-2 hover:text-gray-600 text-gray-600 mr-4 text-sm">Blog</a>
            <a href="#" className="font-inter text-nowrap py-2 hover:text-gray-600 text-gray-600 mr-4 text-sm">Team</a>
            <a href="#" className="font-inter text-nowrap py-2 hover:text-gray-600 text-gray-600 mr-4 text-sm">Careers</a>
          </div>
          <Button className="text-sm px-4 py-2 sm:text-base">
            <span className="hidden sm:inline">Try Augment Code</span>
            <span className="sm:hidden">Try Now</span>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
