import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 mt-12">
      <p className="text-sm">&copy; 2025 Your Store. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="#" className="hover:text-gray-400 transition">Privacy Policy</a>
        <a href="#" className="hover:text-gray-400 transition">Terms of Service</a>
        <a href="#" className="hover:text-gray-400 transition">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;