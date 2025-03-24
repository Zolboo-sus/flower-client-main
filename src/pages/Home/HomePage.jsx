import React from "react";
import Baantag from "../../assets/baantag.png";
import flower from "../../assets/flower1.png";
import "./Home.css";
import Birthday from "../../components/slider/BirthdayBouquets";
import Special from "../../components/slider/SpecialBouquets";
import Mother from "../../components/slider/MothersDay";
import Gifts from "../../components/slider/Gifts";
import { ThemeProvider } from "@material-tailwind/react";

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Example of Section with an id */}
      <div id="occasion" className="section">
        <h2>Birthday Bouquets</h2>
        <Birthday />
      </div>
      <div id="flowers" className="section">
        <h2>Special Bouquets</h2>
        <Special />
      </div>
      <div id="plants" className="section">
        <h2>Mother's Day Bouquets</h2>
        <Mother />
      </div>
      <div id="gift" className="section">
        <h2>Gifts</h2>
        <Gifts />
      </div>
    </div>
  );
};

export default HomePage;
