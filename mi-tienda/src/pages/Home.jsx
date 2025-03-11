import React from "react";
import { useDispatch } from "react-redux";
import products from "../data/products";

const Home = () => {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch({ type: "ADD_PRODUCT", payload: product });
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">🛍️ Available Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div 
          key={product.id} 
          className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-700 ease-out transform hover:-translate-y-2 hover:scale-105 p-4 text-center"
        >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-64 object-cover mb-4 rounded-lg"
            />
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-700 font-bold">${product.price}</p>
            </div>
            <button 
              className="mt-3 bg-yellow-300 hover:bg-yellow-700 text-black text-sm py-2 px-6 rounded-full transition duration-300"
              onClick={() => addToCart(product)}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
