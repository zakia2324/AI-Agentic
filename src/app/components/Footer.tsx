import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">Agentic AI World</p>
        <p className="text-sm mt-2">© 2023 Agentic AI World. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-blue-300 hover:text-blue-500 mx-2">Privacy Policy</a>
          <a href="#" className="text-blue-300 hover:text-blue-500 mx-2">Terms of Service</a>
          <a href="#" className="text-blue-300 hover:text-blue-500 mx-2">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
