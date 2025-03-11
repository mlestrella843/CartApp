import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

// Cart Reducer
const cartReducer = (state = { cart: [] }, action) => {
  switch (action.type) {
    case "ADD_PRODUCT": {
      const exists = state.cart.find((p) => p.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          cart: state.cart.map((p) =>
            p.id === action.payload.id ? { ...p, quantity: p.quantity + 1 } : p
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    }
    
    case "REMOVE_PRODUCT": {
      const updatedCart = state.cart.map((p) =>
        p.id === action.payload ? { ...p, quantity: p.quantity - 1 } : p
      ).filter((p) => p.quantity > 0);
      return { ...state, cart: updatedCart };
    }
    
    case "CLEAR_CART":
      return { ...state, cart: [] };
    
    default:
      return state;
  }
};



// Redux Persist Configuration
const persistConfig = { key: "root", storage };
const rootReducer = combineReducers({ cart: cartReducer });
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
