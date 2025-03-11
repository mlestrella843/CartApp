import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const increaseQuantity = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: id });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: id });
  };

  const removeProduct = (id) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">🛒 Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 transition-all duration-700 ease-out transform hover:-translate-y-2 hover:shadow-2xl">
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center border-b py-4 transition-all duration-700 ease-out transform hover:scale-105"
            >
              <div className="flex items-center gap-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 rounded-md hover:scale-110 transition-transform duration-500"
                />
                <div>
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-700 font-bold">${product.price} x {product.quantity}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="bg-gray-300 px-3 py-1 rounded-lg hover:bg-gray-400 transition-transform duration-500 hover:scale-110"
                  onClick={() => decreaseQuantity(product.id)}
                >
                  -
                </button>
                <span className="font-semibold">{product.quantity}</span>
                <button
                  className="bg-gray-300 px-3 py-1 rounded-lg hover:bg-gray-400 transition-transform duration-500 hover:scale-110"
                  onClick={() => increaseQuantity(product.id)}
                >
                  +
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-all duration-500 ease-in-out transform hover:scale-110"
                  onClick={() => removeProduct(product.id)}
                >
                  ❌
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4 text-right text-xl font-bold">
            Total: ${cart.reduce((acc, product) => acc + product.price * product.quantity, 0)}
          </div>
          <button
            className="w-full mt-4 bg-red-600 hover:bg-red-800 text-white py-2 px-4 rounded-lg transition-all duration-500 ease-in-out transform hover:scale-105"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
