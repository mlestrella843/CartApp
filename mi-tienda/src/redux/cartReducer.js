const cartReducer = (state = { cart: [] }, action) => {
    switch (action.type) {
      case "ADD_PRODUCT":
        const existingProduct = state.cart.find((p) => p.id === action.payload.id);
        if (existingProduct) {
          return {
            cart: state.cart.map((p) =>
              p.id === action.payload.id ? { ...p, quantity: p.quantity + 1 } : p
            ),
          };
        }
        return { cart: [...state.cart, { ...action.payload, quantity: 1 }] };
  
      case "INCREASE_QUANTITY":
        return {
          cart: state.cart.map((p) =>
            p.id === action.payload ? { ...p, quantity: p.quantity + 1 } : p
          ),
        };
  
      case "DECREASE_QUANTITY":
        return {
          cart: state.cart
            .map((p) =>
              p.id === action.payload ? { ...p, quantity: p.quantity - 1 } : p
            )
            .filter((p) => p.quantity > 0), // Remueve productos con cantidad 0
        };
  
      case "REMOVE_PRODUCT":
        return { cart: state.cart.filter((p) => p.id !== action.payload) };
  
      case "CLEAR_CART":
        return { cart: [] };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  