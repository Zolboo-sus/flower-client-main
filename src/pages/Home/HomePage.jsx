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
      <div className="overflow-hidden">
        <div className="w-full mt-6 md:mt-12 flex items-end">
          <div className="relative w-full md:h-[18vw] flex justify-center md:items-center bg-[#fcd7d7] rounded-lg shadow-lg">
            <div className="w-[50%]">
              <span className="text-sm sm:text-base lg:text-lg font-sans leading-normal">
                <b className="md:font-semibold">“FLOWER CENTER MONGOLIA”</b>{" "}
                Цэцэг төв нь Монгол улсын анхны цэцгийн дэлгүүр болон мэндэлсэн
                цагаас таны аз жаргалтай мөч бүхэнтэй хамт байгаадаа бид үргэлж
                баяртай байдаг байгаа
              </span>
            </div>
            <div className="flex w-screen justify-between absolute">
              <img
                src={Baantag}
                alt="Baantag image"
                className="absolute left-0 top-[-15vw] md:left-[1vw] md:top-[-20vw] w-[30%] md:w-[20%]"
              />
              <img
                src={flower}
                alt="Flower decoration"
                className="absolute right-0 top-[-5vw] md:h-[18vw] md:top-[-9vw] md:right-[0.6vw]"
              />
            </div>
          </div>
        </div>
        <section className="bg-white py-6 md:py-12">
          <Birthday />
          <Special />
          <Mother />
          <Gifts />
        </section>
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
