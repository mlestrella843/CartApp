import React, { useState } from "react";
import { useDispatch } from "react-redux";
import products from "../data/products";

const categories = ["All", ...new Set(products.map((p) => p.category))];

const Home = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const addToCart = (product) => {
    dispatch({ type: "ADD_PRODUCT", payload: product });
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="p-4 md:p-8">
      {/* Contenedor principal para el título y los filtros */}
      <div className="flex flex-col md:flex-row md:justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center md:text-left">🛍️ Available Products</h1>
        {/* Contenedor responsivo para los filtros */}
        <div className="flex flex-wrap justify-center md:justify-end gap-2 md:gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full transition-all duration-500 ease-in-out transform hover:scale-105 ${
                selectedCategory === category
                  ? "bg-yellow-300 hover:bg-yellow-500 text-black"
                  : "bg-gray-300 hover:bg-gray-500 text-black"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Mostrar mensaje si no hay productos en la categoría */}
      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500 text-lg mt-10">
          No products found in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-700 ease-out transform hover:-translate-y-2 hover:scale-105 p-4 text-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover mb-4 rounded-lg hover:scale-110 transition-transform duration-500"
              />
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-700 font-bold">${product.price}</p>
              </div>
              <button
                className="mt-3 bg-yellow-300 hover:bg-yellow-500 text-black text-sm py-2 px-6 rounded-full transition-all duration-500 ease-in-out transform hover:scale-110"
                onClick={() => addToCart(product)}
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;