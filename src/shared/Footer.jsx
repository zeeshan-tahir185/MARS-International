import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0d4f9e] text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-sm">&copy; {new Date().getFullYear()} MARS International. All rights reserved.</p>
        <p className="text-sm mt-2 md:mt-0">
          Designed & Developed by <a href="https://www.solutionsinnov8.com/" target='_blank' className="font-semibold">Solutions Innov8</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
