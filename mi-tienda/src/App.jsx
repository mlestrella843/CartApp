import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import LayoutWithNavbar from "./layouts/LayoutWithNavbar";

const App = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <Router>
      <Routes>
        {/* Landing page SIN navbar */}
        <Route path="/" element={<Landing />} />

        {/* Rutas CON navbar y footer */}
        <Route element={<LayoutWithNavbar />}>
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

