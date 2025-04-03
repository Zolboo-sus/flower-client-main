// src/pages/Plants.jsx
import React from "react";
import DesktopHeader from "../components/DesktopHeader"; // Make sure the import path is correct
// src/pages/Plants.jsx
import React from "react";
import DesktopHeader from "../components/DesktopHeader";
import "./Plants.css"; // Import the CSS file

// Rest of your Plants component code...


const Plants = () => {
  return (
    <div>
      {/* Include DesktopHeader */}
      <DesktopHeader />

      {/* Page Content */}
      <h1>Our Plants Collection</h1>
      <p>Choose your favorite plants from the categories below:</p>

      {/* Categories Section */}
      <div className="category-container">
        <div className="category-card">
          <h2>Indoor Plants</h2>
          <p>Explore a variety of indoor plants for your home.</p>
          <button>Shop Now</button>
        </div>
        <div className="category-card">
          <h2>Outdoor Plants</h2>
          <p>Find outdoor plants to beautify your garden.</p>
          <button>Shop Now</button>
        </div>
        <div className="category-card">
          <h2>Flowering Plants</h2>
          <p>Get beautiful flowering plants to brighten up your space.</p>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Plants;
