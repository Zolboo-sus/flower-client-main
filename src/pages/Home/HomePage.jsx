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
          <div className="w-full md:h-[18vw] flex justify-center md:items-center bg-[#fcd7d7] rounded-lg shadow-lg">
            <div className="w-[50%]">
              <span className="text-[10px] sm:text-[20px] md:text-[20px] lg:text-[1.8vw] font-sans leading-0">
                <b className="md:font-semibold">“FLOWER CENTER MONGOLIA”</b>{" "}
                Цэцэг төв нь Монгол улсын анхны цэцгийн дэлгүүр болон мэндэлсэн
                цагаас таны аз жаргалтай мөч бүхэнтэй хамт байгаадаа бид үргэлж
                баяртай байдаг юм"
              </span>
            </div>
            <div className="flex w-screen justify-between absolute ">
              <img
                src={Baantag}
                alt=""
                className="absolute left-0 md:left-[0.7vw] md:top-[-16vw] top-[-15vw] md:h-[32vw]"
              />
              <img
                src={flower}
                alt=""
                className="absolute right-0 top-[-5vw] md:h-[18vw] md:top-[-9vw] md:right-[0.6vw]"
              />
            </div>
          </div>
        </div>
        <Birthday />
        <Special />
        <Mother />
        <Gifts />
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
// #fcd7d7
