import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-gray-900 font-semibold mb-3">Company</h3>
            <ul className="text-gray-600">
              <li className="mb-2"><a href="#" className="hover:text-gray-900">About Us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-900">Careers</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-gray-900 font-semibold mb-3">Resources</h3>
            <ul className="text-gray-600">
              <li className="mb-2"><a href="#" className="hover:text-gray-900">Blog</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-900">Documentation</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-900">FAQ</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-gray-900 font-semibold mb-3">Legal</h3>
            <ul className="text-gray-600">
              <li className="mb-2"><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h3 className="text-gray-900 font-semibold mb-3">Connect</h3>
            <ul className="text-gray-600">
              <li className="mb-2"><a href="#" className="hover:text-gray-900">Twitter</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-900">LinkedIn</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-900">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-sm text-gray-500 text-center">
          <p>&copy; 2023 Augment Code. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
