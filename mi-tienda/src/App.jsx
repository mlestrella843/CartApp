
// ✅ App.jsx (Rutas)
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Landing from "./pages/Landing";
import LayoutWithNavbar from "./layouts/LayoutWithNavbar";
import LayoutWithoutNavbar from "./layouts/LayoutWithoutNavbar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <LayoutWithoutNavbar>
              <Landing />
            </LayoutWithoutNavbar>
          }
        />

        <Route
          path="/home"
          element={
            <LayoutWithNavbar>
              <Home />
            </LayoutWithNavbar>
          }
        />

        <Route
          path="/cart"
          element={
            <LayoutWithNavbar>
              <Cart />
            </LayoutWithNavbar>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

