import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src="/robot.jpg" alt="Logo" className="h-10 w-10 mr-3" />
        <h1 className="text-2xl font-bold">AI Agent World</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#services" className="hover:text-gray-400">Services</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
