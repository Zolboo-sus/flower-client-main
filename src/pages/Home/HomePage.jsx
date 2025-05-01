import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slider from "../../assets/slider.png";
import Baantag from "../../assets/baantag.png";
import flower from "../../assets/flower1.png";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const scrollRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if(isLoading) {
      Promise.all([
        axios.get('https://tsetsegtuw.templateapi.xyz/categories'),
        axios.get('https://tsetsegtuw.templateapi.xyz/product'),
      ]).then(([category, product]) => {
        setCategories(category.data.data);
        setProducts(product.data.data);
      }).finally(() => setIsLoading(false));
    }
  }, [isLoading]);

  if(isLoading) {
    return <div className="loader"></div>
  }

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="max-md:pt-5">
      <img src={slider} className="w-screen h-auto " alt="" />
      {categories.map((e) => ( 
        <div className="flex flex-col w-screen relative">
        <div className="flex w-full items-center justify-center gap-10 py-4">
          <div className="w-full h-[1px] bg-black/80" />
          <p className="text-xl w-max" >{e.catName}</p>
          <div className="w-full h-[1px] bg-black/80" />
        </div>
        <div>
          {/* Arrow buttons */}
          <button
        //    onClick={() => scroll("left")}
        //    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow"
          >
           <ChevronLeft />
          </button>
          <button
        //    onClick={() => scroll("right")}
        //    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow"
          >
            <ChevronRight />
          </button>
          <div
            ref={scrollRef}
            className="flex w-full overflow-x-scroll px-[5%] scrollbar-hide"
          >
            <div className="flex gap-4">
              {products.filter((el) => el.category === e._id).map((el, index) => (
                <Link
                to={'/product/' + el._id}
                  key={index}
                  className="flex flex-col w-[25vw] max-md:w-[35vw] items-start gap-2 shrink-0"
                >
                  <img
                    className="w-[20vw] h-[20vw] max-md:w-[45vw] max-md:h-[45vw] object-cover shadow-md rounded-md"
                    src={el.productImages ? "https://tsetsegtuw.templateapi.xyz/"+ el.productImages[0] : 'no-jpg'}
                    alt=""
                  />
                  <p>{Intl.NumberFormat("en-us").format(el.price)}₮</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>))}
      <div className="w-full mt-6 md:mt-12 flex items-end">
        <div className="w-full md:h-[18vw] flex justify-center md:items-center bg-pink-200 rounded-lg shadow-lg">
          <div className="w-[50%]">
            <span className="text-[10px] sm:text-[20px] md:text-[20px] lg:text-[1.8vw] font-sans leading-0">
              <b className="md:font-semibold">“FLOWER CENTER MONGOLIA”</b> Цэцэг
              төв нь Монгол улсын анхны цэцгийн дэлгүүр болон мэндэлсэн цагаас
              таны аз жаргалтай мөч бүхэнтэй хамт байгаадаа бид үргэлж баяртай
              байдаг шүү"
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
    </div>
  );
};

export default HomePage;
