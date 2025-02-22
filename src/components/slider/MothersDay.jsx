import React from "react";
import flower from "../../assets/mother.svg";
import slide from "../../assets/flower.png";

const MothersDay = () => {
  return (
    <div className="w-full mt-8 md:mt-[5vw]" id="occasion">
      <h1 className="md:text-[2vw] md:font-sans md:font-medium text-[#464441]">
        Mothers day{" "}
      </h1>
      <div className="flex mt-8 w-full shadow-md shadow-[#888a8c] h-full md:h-[30vw]">
        <div className="flex w-auto relative md:h-full">
          <img src={flower} alt="" className="md:w-auto md:h-full" />
          <span className="absolute z-10 w-[110px] md:w-[30vw] text-left left-[85px] md:left-[19vw] top-7 md:top-[9vw] text-[11px] md:text-[2.5vw] font-serif italic">
            "Ээжийн хайр орчлонд ганцхан, Энгэрт нь хэзээ ч ганцаарддаггүй юм."
          </span>
        </div>
        <div className="flex flex-col justify-center md:h-full">
          <div className="flex gap-2 md:gap-5 ">
            <img
              src={slide}
              alt=""
              className="w-auto h-[9vh] md:h-[18vw] rounded-sm shadow-md  shadow-[#888a8c]"
            />
            <img
              src={slide}
              alt=""
              className="w-auto h-[9vh] md:h-[18vw] rounded-sm shadow-md  shadow-[#888a8c]"
            />
            <img
              src={slide}
              alt=""
              className="w-auto h-[9vh] md:h-[18vw] rounded-sm shadow-md  shadow-[#888a8c]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MothersDay;
