import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartReducer";
import products from "../data/products";

const categories = ["All", ...new Set(products.map((p) => p.category))];

const Home = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [notification, setNotification] = useState(null);
  const [addedProducts, setAddedProducts] = useState({});

  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
  }, []);

  const addToCart = (product) => {
    dispatch(addProduct(product));
    setNotification(`${product.name} added to cart!`);
    setAddedProducts((prev) => ({ ...prev, [product.id]: true }));

    setTimeout(() => {
      setNotification(null);
      setAddedProducts((prev) => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-gray-50 px-4 md:px-10">
      <div className="pt-32 md:pt-24">
        {notification && (
          <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-md transition-opacity duration-500 ease-in-out opacity-100 z-50">
            {notification}
          </div>
        )}

        <div className="flex flex-col md:flex-row md:justify-between items-center mb-8 md:mb-12 gap-6">
          <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left text-gray-800 tracking-tight">
            🛍️ Available Products
          </h1>
          <div className="flex flex-wrap justify-center md:justify-end gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 shadow ${
                  selectedCategory === category
                    ? "bg-yellow-400 text-black hover:bg-yellow-500"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500 text-lg mt-16">
            No products found in this category.
          </p>
        ) : (
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 ease-out transform hover:-translate-y-1 hover:scale-105 p-6 text-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover mb-4 rounded-xl hover:scale-105 transition-transform duration-500"
                />
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-yellow-600 font-bold text-base">${product.price}</p>
                </div>

                {addedProducts[product.id] && (
                  <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded shadow-md">
                    Added
                  </div>
                )}

                <button
                  className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black text-sm py-2 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow"
                  onClick={() => addToCart(product)}
                >
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

