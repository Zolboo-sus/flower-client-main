import React, { useState, useEffect } from "react";
import axios from "axios";
import "./slider.title.css";
import { Link } from "react-router-dom";

const Special = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    axios
      .get("https://tsetsegtuw.templateapi.xyz/tsetsegtuv/product/special")
      .then((res) => {
        const products = res?.data?.data || [];
        const fixedProducts = products.map((product) => {
          const fixedImages = product.productImages.map((image) =>
            image.replace(/\\/g, "/")
          );
          return { ...product, productImages: fixedImages };
        });
        setFlowers(fixedProducts);
      })
      .catch((er) => console.log(er?.response?.data));
  }, []);

  return (
    <div
      className="flex flex-col w-full relative mt-6 drop-shadow-xl shadow-black font-thin justify-center items-center overflow-hidden"
      id="bouquets"
    >
      <h1 className="text-lg font-thin md:text-[35px] md:mb-10">
        Онцгой Баглаа
      </h1>

      <div
        key={`carousel`}
        id="controls-carousel"
        className="relative w-full mt-6"
        data-carousel="static"
      >
        {flowers.length > 0 && (
          <a href={`/product/${flowers._id}`}>
            <div className="flex relative h-[15vh] overflow-hidden md:h-[35vw] w-[85%] items-center justify-center mx-[7.5vw]">
              <Link to={'/product/' + flowers[3]?._id}
                className="w-[80%] duration-700 ease-in-out self-center"
                data-carousel-item="active"
              >
                <img
                  src={`https://tsetsegtuw.templateapi.xyz/tsetsegtuv/${flowers[0]?.productImages[0] || ""
                    }`}
                  alt={flowers[0]?.productName || "Product Image"}
                  className="absolute block object-contain h-[50vh] w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                />
              </Link>
            </div>
          </a>
        )}
      </div>

      <div
        key={`images`}
        className="mt-1 flex w-full justify-center gap-1 relative shadow-lg shadow-[#00000]"
      >
        {flowers.length > 0 && (
          <>
            <div className="flex flex-col w-[19vh] md:w-[42.2%] md:h-[40vw] gap-1">
              <Link to={'/product/' + flowers[3]?._id}>
                <img
                  src={`https://tsetsegtuw.templateapi.xyz/tsetsegtuv/${flowers[1]?.productImages[0] || ""
                    }`}
                  alt={flowers[1]?.productName || "Product 1"}
                  className=" object-contain h-[10vh] md:h-[20vw] w-full"
                />
              </Link>
              <Link to={'/product/' + flowers[3]?._id}>
                <img
                  src={`https://tsetsegtuw.templateapi.xyz/tsetsegtuv/${flowers[2]?.productImages[0] || ""
                    }`}
                  alt={flowers[2]?.productName || "Product 2"}
                  className=" object-contain h-[10vh] md:h-[19.7vw] w-full"
                />
              </Link>
            </div>
            <Link to={'/product/' + flowers[3]?._id} className="w-[19.5vh] md:w-[42.5%] md:h-[40vw] h-full flex flex-col">
              <img
                src={`https://tsetsegtuw.templateapi.xyz/tsetsegtuv/${flowers[3]?.productImages[0] || ""
                  }`}
                alt={flowers[3]?.productName || "Product 3"}
                className="object-contain h-[20.5vh] md:h-[40vw]"
              />
            </Link>
          </>
        )}
      </div>

      <div className="md:w-full h-full ml-2 mr-2 mt-10 flex flex-col items-start justify-start md:justify-center md:items-center md:mt-[4vw]">
        <span className="font-serif italic text-sm mb-6 md:text-[35px] text-[#464441] md:not-italic md:font-sans md:font-medium md:self-start md:ml-[10vw] md:mb-[2vw]">
          Бусад онцгой баглаа
        </span>

        <div className="flex md:w-[85%] md:gap-10 gap-4 w-full md:justify-start overflow-x-auto">
          {flowers.map((list, index) => (
            <Link to={'/product/' + list._id}>
              <img
                key={`more-images-${index}`}
                src={`https://tsetsegtuw.templateapi.xyz/tsetsegtuv/${list?.productImages[0] || ""}`}
                alt={list?.productName || "Product Image"}
                className="w-auto h-[8vh] md:h-[16vw]"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Special;
