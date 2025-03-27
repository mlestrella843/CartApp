import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeProduct } from "../redux/cartReducer";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const increaseQty = (id) => {
    dispatch(increaseQuantity(id));
  };

  const decreaseQty = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const removeFromCart = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <div className="p-4 md:p-8 mt-4">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">🛒 Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-4 md:p-6 overflow-x-auto">
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex flex-col sm:flex-row justify-between items-center border-b py-4 gap-4 sm:gap-6 text-center sm:text-left"
            >
              <div className="flex flex-col items-center sm:flex-row sm:items-center gap-4 w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-md sm:text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-700 font-bold">${product.price}</p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-2 w-full sm:w-auto">
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-2 rounded"
                  onClick={() => decreaseQty(product.id)}
                >
                  ➖
                </button>
                <span className="text-md sm:text-lg font-bold">{product.quantity}</span>
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-2 rounded"
                  onClick={() => increaseQty(product.id)}
                >
                  ➕
                </button>
                <button
                  className="bg-yellow-400 hover:bg-yellow-700 text-white py-1 px-2 rounded"
                  onClick={() => removeFromCart(product.id)}
                >
                  ❌
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4 text-center sm:text-right text-lg sm:text-xl font-bold">
            Total: ${cart.reduce((acc, product) => acc + product.price * product.quantity, 0)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;