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
    <div className="p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">🛒 Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-4 md:p-6">
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex flex-col md:flex-row justify-between items-center border-b py-4 gap-4 md:gap-6"
            >
              <div className="flex items-center gap-4 w-full md:w-auto">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-700 font-bold">${product.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-4">
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-3 rounded"
                  onClick={() => decreaseQty(product.id)}
                >
                  ➖
                </button>
                <span className="text-lg font-bold">{product.quantity}</span>
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-3 rounded"
                  onClick={() => increaseQty(product.id)}
                >
                  ➕
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg"
                  onClick={() => removeFromCart(product.id)}
                >
                  ❌
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4 text-center md:text-right text-xl font-bold">
            Total: ${cart.reduce((acc, product) => acc + product.price * product.quantity, 0)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;