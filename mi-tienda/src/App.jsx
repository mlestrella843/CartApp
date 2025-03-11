import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <Router>
      <div className="h-screen flex flex-col overflow-hidden scroll-smooth">
        <Navbar className="fixed top-0 left-0 w-full z-10" />
        <main className="flex-grow overflow-y-auto pt-16 pb-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer className="w-full z-10" />
      </div>
    </Router>
  );
};

export default App;
