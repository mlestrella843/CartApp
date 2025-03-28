// src/layouts/LayoutWithNavbar.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LayoutWithNavbar = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden scroll-smooth">
      <Navbar className="fixed top-0 left-0 w-full z-10" />
      <main className="flex-grow overflow-y-auto pt-16 pb-16">
        <Outlet />
      </main>
      <Footer className="w-full z-10" />
    </div>
  );
};

export default LayoutWithNavbar;

