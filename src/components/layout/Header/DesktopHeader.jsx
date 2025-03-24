import React, { useState } from "react";
import { Link } from "react-scroll"; // import from react-scroll
import logo from "../../../assets/logo.svg";
import { AiOutlineShopping } from "react-icons/ai";

const DesktopHeader = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Menu items array
  const menuItems = [
    { name: "Баглаа", id: "occasion" },
    { name: "Flowers", id: "flowers" },
    { name: "Plants", id: "plants" },
    { name: "Gifts", id: "gift" },
    { name: "Sale", id: "sale" },
  ];

  return (
    <div className="flex pt-8 mb-[160px] justify-between pb-5 border-b-2 border-[#ffd1d4] fixed top-0 left-0 w-full z-50 bg-white px-5">
      <div className="flex w-[15%] h-auto border-1 border-white bg-[#ffedee] rounded-lg shadow-inner items-center">
        <img src={logo} alt="Flower Center Mongolia Logo" className="px-2 h-[3vw] my-1" />
        <a href="/">
          <span className="w-full text-[0.8vw] uppercase font-serif my-1 cursor-pointer">
            flower center mongolia
          </span>
        </a>
      </div>

      <div className="flex flex-col items-center justify-center w-[65%] rounded-lg px-5 mr-3">
        <div className="flex w-full items-center justify-between shadow-inner">
          {menuItems.map((item, index) => (
            <span
              key={index}
              className={`text-[1.2vw] md:text-[1.5vw] lg:text-[1.8vw] font-medium cursor-pointer px-4 py-2 text-gray-700 hover:text-[#ffd1d4] ${activeIndex === index
                ? "underline underline-offset-4 decoration-[#ffd1d4]"
                : ""
                }`}
              onClick={() => setActiveIndex(index)}
            >
              {/* Wrap the item name inside the Link component for scrolling */}
              <Link
                to={item.id} // This matches the id of the section you're scrolling to
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                {item.name}
              </Link>
            </span>
          ))}
          <Link to="/cart">
            <div className="flex items-center justify-center">
              <AiOutlineShopping className="cursor-pointer hover:text-[#ffd1d4] text-[2vw]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
