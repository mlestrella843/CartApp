import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";

const Car = () => {
  const cart = useSelector((state) => state.cart.cart); // Access the cart array
  const dispatch = useDispatch();

  const removeProduct = (id) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: id });
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">🛒 Shopping Cart</h1>

      {cart.length === 0 ? (
        <motion.p 
          className="text-center text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Your cart is empty.
        </motion.p>
      ) : (
        <motion.div 
          className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {cart.map((product) => (
            <motion.div 
              key={product.id} 
              className="flex justify-between items-center border-b py-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-20 h-20 rounded-md"
                />
                <div>
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-700 font-bold">${product.price} x {product.quantity}</p>
                </div>
              </div>
              <motion.button 
                className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg"
                whileTap={{ scale: 0.9 }}
                onClick={() => removeProduct(product.id)}
              >
                Remove
              </motion.button>
            </motion.div>
          ))}
          <div className="mt-4 text-right text-xl font-bold">
            Total: ${cart.reduce((acc, product) => acc + product.price * product.quantity, 0)}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Car;
