// ✅ LayoutWithoutNavbar.jsx
import React from "react";

const LayoutWithoutNavbar = ({ children }) => {
  return <div className="min-h-screen overflow-hidden">{children}</div>;
};

export default LayoutWithoutNavbar;