
// ✅ Navbar.jsx (Recibe props desde el layout)
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const cartQuantity = useSelector((state) =>
    state.cart.cart.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <nav className="bg-white text-gray-900 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/home" className="text-xl font-bold flex items-center gap-2">
          🛒 <span>My Store</span>
        </Link>

        <div className="hidden md:flex gap-6">
          <Link to="/home" className="hover:text-yellow-500 transition">Home</Link>
          <Link to="/cart" className="relative flex items-center gap-1">
            🛍️ Cart
            {cartQuantity > 0 && (
              <span className="ml-2 inline-flex items-center justify-center bg-yellow-500 text-white text-xs font-bold rounded-full w-6 h-6 shadow-md">
                {cartQuantity}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-2xl text-yellow-600"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white text-gray-800 py-4 flex flex-col items-center gap-4 border-t border-yellow-100 shadow-md">
          <Link
            to="/home"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-yellow-600 font-medium"
          >
            Home
          </Link>
          <Link
            to="/cart"
            onClick={() => setIsMenuOpen(false)}
            className="relative flex items-center gap-1 font-medium hover:text-yellow-600"
          >
            🛍️ Cart
            {cartQuantity > 0 && (
              <span className="ml-2 inline-flex items-center justify-center bg-yellow-500 text-white text-xs font-bold rounded-full w-6 h-6 shadow-md">
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

