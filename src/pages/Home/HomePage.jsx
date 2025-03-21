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
    <ThemeProvider>
      <div className="home-container">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <span className="hero-heading">Your text here</span>
            <span className="hero-text">
              <strong>“FLOWER CENTER MONGOLIA”</strong> Цэцэг төв нь Монгол
              улсын анхны цэцгийн дэлгүүр болон мэндэлсэн цагаас таны аз
              жаргалтай мөч бүхэнтэй хамт байгаадаа бид үргэлж баяртай байдаг
              байгаа
            </span>
          </div>
          <div className="hero-image-container">
            <img
              src={Baantag}
              alt="Baantag image of flower arrangement"
              className="hero-image left"
            />
            <img
              src={flower}
              alt="Flower decoration"
              className="hero-image right"
            />
          </div>
        </div>

        {/* Product Sections */}
        <section>
          <h2>Birthday Bouquets</h2>
          <Birthday />
        </section>
        <section>
          <h2>Special Bouquets</h2>
          <Special />
        </section>
        <section>
          <h2>Mother's Day Bouquets</h2>
          <Mother />
        </section>
        <section>
          <h2>Gifts</h2>
          <Gifts />
        </section>
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
