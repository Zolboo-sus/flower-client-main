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
            <div className="w-[90%] sm:w-[75%] md:w-[50%]">
             <span className="text-sm sm:text-base lg:text-lg custom-lg">Your text here</span>
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-sans leading-normal">
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
                className="absolute left-0 top-[-15vw] sm:left-[2vw] md:left-[0.7vw] md:top-[-16vw] w-[40%] sm:w-[30%] md:w-[20%]"
              />
              <img
                src={flower}
                alt="Flower decoration"
                className="absolute right-0 top-[-5vw] sm:top-[-10vw] md:top-[-9vw] w-[30%] sm:w-[25%] md:w-[18%]"
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
