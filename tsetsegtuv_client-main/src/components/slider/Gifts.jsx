import React, { useEffect, useState } from "react";
import bear1 from "../../assets/smailBear.svg";
import bear from "../../assets/Bear.svg";
import axios from "axios";

const Gifts = () => {
  const [gifts, setGifts] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    if (isLoading) {
      axios.get('https://tsetsegtuw.templateapi.xyz/item')
        .then((e) => setGifts(e.data.data))
        .catch((e) => console.log(e))
        .finally(() => setIsLoading(false));
    }
  }, [isLoading]);

  if (isLoading) {
    return <div></div>
  }

  return (
    <div className="w-auto mx-5 my-8 md:mb-[5vw]" id="gift">
      <span className="w-full text-md font-sans text-left italic block mb-3 text-[#464441] md:text-[2vw] md:font-sans md:font-medium">
        Бэлэг
      </span>
      <div className="flex w-full h-[19.5vh] justify-center gap-2 md:gap-[10vw] items-start shadow-md shadow-[#888a8c] rounded-md md:h-[30vw] md:mt-[3vw]">
        <div className="flex flex-col h-full mr-2 relative md:h-full md:self-start">
          <img src={'https://tsetsegtuw.templateapi.xyz/' + gifts ? gifts[0].itemImages[0].image : ''}
            alt="" className="h-full md:h-full" />
          <span className="w-[100%]  text-white h-[6.5vw] left-0 bottom-0  absolute z-10 opacity-40 bg-[#000000] justify-end items-end text-[8px] text-nowrap rounded-t-sm md:rounded-t-xl md:text-[2.2vw]">
            {gifts ? gifts[0].item_name : ''} <br />{" "}
            <span className="text-[12px] md:text-[2vw] md:font-light">
              {gifts ? gifts[0].price : ''}
            </span>
          </span>
        </div>
        <div className="w-[45vw] grid grid-cols-3 overflow-auto h-[19.5vh] md:w-[46vw] md:h-[30vw] gap-1 md:gap-2 md:justify-start md:items-start">
          {gifts.map((e) => (
            <div className="relative w-[86%]">
              <img
                src={'https://tsetsegtuw.templateapi.xyz/' + e.itemImages[0].image}
                alt=""
                className="h-auto w-[57px]  rounded-sm md:w-[12vw] "
              />
              <span className="md:rounded-t-lg w-[95%] text-white h-[3vw] md:text-[1vw] md:text-white opacity left-0 bottom-0 md:bottom-0 absolute z-10 opacity-40 bg-[#000000] justify-end items-end text-[8px] text-nowrap rounded-t-sm">
                Үнэ: {Intl.NumberFormat('en-us').format(e.price)}₮
              </span>
            </div>))}
        </div>
      </div>
    </div>
  );
};

export default Gifts;
