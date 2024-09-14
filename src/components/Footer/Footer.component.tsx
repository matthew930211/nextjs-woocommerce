import React from 'react';

/**
 * Renders Footer of the application.
 * @function Footer
 * @returns {JSX.Element} - Rendered component
 */
const Footer = () => (
  <footer className="w-full bg-white">
    <div className="container flex items-center justify-between px-6 py-3 mx-auto mt-0 md:min-w-96">
      <div className="text-gray-700">
        Copyright &copy; {new Date().getFullYear()} Daniel / w3bdesign
      </div>
    </div>
  </footer>
);

export default Footer;
