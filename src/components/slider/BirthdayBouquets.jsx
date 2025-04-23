import React, { useState, useEffect } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import axios from "axios";

const MothersDay = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {

    
    axios
      .get("https://tsetsegtuw.templateapi.xyz/product")
      .then((res) => {
        // const products = res?.data?.data || [];
        // Fix image paths for all products
        // const fixedProducts = products.map((product) => {
        //   const fixedImages = product.productImages.map((image) =>
        //     image.replace(/\\/g, "/")
        //   );
        //   return { ...product, productImages: fixedImages };
        // });
        setFlowers(res.data.data);
      })
      .catch((er) => console.log(er?.response?.data));
  }, []);

  return (
    <div
      className="w-full mt-6 text-[#464441] drop-shadow-xl shadow-black font-thin md:mt-10 md:mb-10"
      id="flowers"
    >
      <h1 className="text-lg font-thin md:text-[35px] md:mb-10">
        Баглаа
      </h1>
      <div className="px-5">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          navigation
          modules={[Navigation]}
          className="justify-between"
        >
          {flowers.map((flower, index) => (
            <SwiperSlide className="my-3" key={index}>
              <a href={`/product/${flower._id}`}>
                <div className="shadow-md shadow-[#d3d3d3] rounded-lg w-[max-content] md:relative">
                  {/* Loop through multiple images if needed */}
                  <img
                    src={`https://tsetsegtuw.templateapi.xyz/${flower.productImages[0]}`}
                    alt={flower.productName}
                    className="h-[109px] w-[87px] md:h-[20vw] md:w-[14vw] rounded-lg"
                  />
                  <div className="flex flex-col w-full absolute justify-center items-center bg-[#FFFFFF] opacity-[76%] bottom-0 rounded-b-lg">
                    <span className="text-[1vw] font-semibold text-[#313131]">
                      {flower.productName}
                    </span>
                    <span className="text-[0.9vw] font-normal text-[#505050]">
                      {flower.price} MNT
                    </span>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MothersDay;
