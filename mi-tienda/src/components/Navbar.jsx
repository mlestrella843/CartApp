import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartQuantity = useSelector((state) => state.cart.cart.reduce((total, item) => total + item.quantity, 0));
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">🛒 My Store</Link>

        {/* Menú en Desktop */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-gray-300 transition">Home</Link>
          <Link to="/cart" className="relative flex items-center">
            🛍️ Cart
            {cartQuantity > 0 && (
              <span className="bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1 absolute -right-9">
                {cartQuantity}
              </span>
            )}
          </Link>
        </div>

        {/* Botón de Menú en Móviles */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
          ☰
        </button>
      </div>

      {/* Menú en Móvil */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white py-3 flex flex-col items-center gap-4 absolute w-full left-0 top-full">
          <Link to="/" className="hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/cart" className="relative flex items-center" onClick={() => setIsOpen(false)}>
            🛍️ Cart
            {cartQuantity > 0 && (
              <span className="bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1 -right-12">
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
