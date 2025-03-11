import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Usa el almacenamiento local
import cartReducer from "./cartReducer"; // Importamos el reducer del carrito

// Configuración de persistencia
const persistConfig = {
  key: "root",
  storage, // Se guardará en localStorage
};

// Combinar reducers (en caso de agregar más en el futuro)
const rootReducer = combineReducers({
  cart: cartReducer,
});

// Aplicamos Redux Persist al reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Crear el store con el reducer persistente
const store = configureStore({
  reducer: persistedReducer,
});

// Creamos el persistor para Redux Persist
const persistor = persistStore(store);

// Exportamos el store y el persistor
export { store, persistor };

