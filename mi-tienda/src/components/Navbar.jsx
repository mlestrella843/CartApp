import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartQuantity = useSelector((state) => state.cart.cart.length);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">🛒 Online Store</Link>
        <div className="flex gap-4">
          <Link to="/" className="hover:text-gray-300 transition">Home</Link>
          <Link to="/cart" className="relative">
            🛍️ Cart 
            {cartQuantity > 0 && (
              <span className="bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1 absolute -right-8">
                {cartQuantity}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;