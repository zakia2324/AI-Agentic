import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white p-4 flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center mb-4 md:mb-0">
        <Image src="/robot.jpg" alt="Logo" className="h-10 w-10 mr-3" width={40} height={40} />
        <h1 className="text-2xl font-bold">Agentia World</h1>
      </div>
      <nav>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <li><a href="#home" className="hover:text-gray-400">AI Solutions</a></li>
          <li><a href="#about" className="hover:text-gray-400">Analytics</a></li>
          <li><a href="#services" className="hover:text-gray-400">Features</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
