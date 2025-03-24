import React from "react";
import DesktopHeader from "../components/DesktopHeader"; // Adjust the path if needed
import "./Plants.css"; // If you use the above CSS file


const Plants = () => {
  return (
    <div>
      {/* Include the DesktopHeader */}
      <DesktopHeader />

      {/* Simple Page Content for Plants */}
      <h1>Welcome to the Plants Page</h1>
      <p>Explore our collection of beautiful plants!</p>
    </div>
  );
};

export default Plants;
