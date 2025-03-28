// ✅ LayoutWithNavbar.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LayoutWithNavbar = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main
        className={`flex-grow overflow-y-auto transition-all duration-300
        ${isMenuOpen ? "pt-24" : "pt-8 md:pt-16"} pb-16`}
      >
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default LayoutWithNavbar;

