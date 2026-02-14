import React, { useEffect, useState } from "react";
import "./Home.css";
// Removed unused ChevronLeft, ChevronRight, Baantag, and flower imports
import slider from "../../assets/slider.png";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (isLoading) {
      Promise.all([
        // Fixed: Replaced double quotes with backticks for proper template strings
        axios.get(`https://tsetsegtuw.templateapi.xyz/categories?_t=${Date.now()}`),
        axios.get(`https://tsetsegtuw.templateapi.xyz/product?_t=${Date.now()}`),
      ])
        .then(([category, product]) => {
          setCategories(category.data.data);
          setProducts(product.data.data);
        })
        .finally(() => setIsLoading(false));
    }
  }, [isLoading]);

  if (isLoading) {
    return <div className="loader"></div>;
  }

  // Removed unused scroll function and scrollRef to pass ESLint

  return (
    <div className="max-md:pt-5">
      {/* Added meaningful alt text */}
      <img src={slider} className="w-screen h-auto " alt="Flower Center Mongolia Banner" />
      
      {categories.map((e) => (
        <div key={e._id} className="flex flex-col w-screen relative">
          <div className="flex w-full items-center justify-center gap-10 py-4">
            <div className="w-full h-[1px] bg-black/80" />
            <p id={e._id} className="text-xl w-max">
              {e.catName}
            </p>
            <div className="w-full h-[1px] bg-black/80" />
          </div>
          <div>
            <div
              className="flex w-full overflow-x-scroll px-[5%] scrollbar-hide"
            >
              <div className="flex gap-4">
                {products
                  .filter((el) => el.category === e._id)
                  .map((el, index) => (
                    <Link
                      to={"/product/" + el._id + "/" + e._id}
                      key={index}
                      className="flex flex-col w-[25vw] max-md:w-[35vw] items-start gap-2 shrink-0"
                    >
                      <img
                        className="w-[20vw] h-[20vw] max-md:w-[45vw] max-md:h-[45vw] object-cover shadow-md rounded-md"
                        src={
                          el.productImages
                            ? "https://tsetsegtuw.templateapi.xyz/" +
                              el.productImages[0]
                            : "no-jpg"
                        }
                        // Added alt text for product images
                        alt={el.productName || "Product"}
                      />
                      <p>{Intl.NumberFormat("en-us").format(el.price)}₮</p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="w-full mt-6 md:mt-12 flex items-end">
        <div className="w-full md:h-[18vw] flex justify-center md:items-center bg-pink-200 border-[2px] border-black rounded-lg shadow-lg">
          <div className="w-full px-4 md:px-8">
            <span className="text-[10px] sm:text-[20px] md:text-[50px] lg:text-[1.8vw] font-sans leading-0">
              <b className="md:font-semibold">“FLOWER CENTER MONGOLIA”</b> Цэцэг
              төв нь Монгол улсын анхны цэцгийн дэлгүүр болон мэндэлсэн цагаас
              таны аз жаргалтай мөч бүхэнтэй хамт байгаадаа бид үргэлж баяртай
              байдаг шүү"
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;