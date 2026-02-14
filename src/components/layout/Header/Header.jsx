import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import logo from "../../../assets/logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="w-full border-b-[1px] border-[#ffd1d4] pb-2 fixed top-0 left-0 z-50 bg-white">
      <div className="flex h-full justify-between mt-[20px]">
        {/* Empty div to maintain spacing/centering if needed, or remove for left-aligned logo */}
        <div className="ml-4 w-[34px]"></div> 

        <a href="/">
          <div className="justify-center">
            <img
              src={logo}
              alt="Logo"
              className="w-full h-[50px] self-center"
            />
          </div>
        </a>

        <a href="/cart">
          <div className="mr-4 self-center p-[2px] rounded-md bg-[#f1f0f2] shadow-xl drop-shadow-xl">
            <AiOutlineShopping size={30} />
          </div>
        </a>
      </div>
      <div className="text-center">
        <a href="/">
          <span className="uppercase font-serif text-sm">
            flower center mongolia
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;