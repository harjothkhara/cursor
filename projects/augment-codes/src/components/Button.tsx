import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <button 
      onClick={onClick}
      className={`font-inter bg-blue-500 hover:bg-blue-600 text-white font-normal py-2 px-6 rounded-full ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
