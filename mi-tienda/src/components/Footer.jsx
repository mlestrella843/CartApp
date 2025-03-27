import React from "react";

const Footer = () => {
  return (
<footer className="bg-white/80 backdrop-blur-md text-gray-800 text-center py-10 px-4 shadow-inner border-t border-yellow-100 rounded-t-3xl">
      <p className="text-sm text-gray-600">&copy; 2025 Your Store. All rights reserved.</p>
      <div className="flex justify-center gap-6 mt-4 flex-wrap text-sm font-medium">
        <a href="#" className="hover:text-yellow-600 transition-colors duration-300">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-yellow-600 transition-colors duration-300">
          Terms of Service
        </a>
        <a href="#" className="hover:text-yellow-600 transition-colors duration-300">
          Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;
