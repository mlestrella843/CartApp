import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartQuantity = useSelector((state) =>
    state.cart.cart.reduce((total, item) => total + item.quantity, 0)
  );
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/70 backdrop-blur-md text-gray-800 shadow-md fixed w-full top-0 z-50 border-b border-yellow-100">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-8 py-4">
        {/* Logo */}
        <Link to="/home" className="text-xl font-bold tracking-tight">
          🛒 My Store
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link
            to="/home"
            className="hover:text-yellow-600 transition-colors duration-300 font-medium"
          >
            Home
          </Link>
          <Link
            to="/cart"
            className="relative flex items-center hover:text-yellow-600 transition-colors duration-300 font-medium"
          >
            🛍️ Cart
            {cartQuantity > 0 && (
              <span className="ml-2 inline-flex items-center justify-center bg-yellow-500 text-white text-xs font-bold rounded-full w-6 h-6 shadow-md">
                {cartQuantity}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-yellow-600"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md left-0 w-full absolute top-full text-gray-800 py-4 flex flex-col items-center gap-4 border-t border-yellow-100 shadow-md rounded-b-2xl">
          <Link
            to="/home"
            className="hover:text-yellow-600 transition-colors duration-300 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/cart"
            className="flex items-center gap-2 relative font-medium hover:text-yellow-600 transition"
          >
            🛍️ <span>Cart</span>

            {cartQuantity > 0 && (
              <span className="inline-flex items-center justify-center bg-yellow-500 text-white text-xs font-bold rounded-full w-6 h-6 shadow-md">
                {cartQuantity}
              </span>
            )}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

