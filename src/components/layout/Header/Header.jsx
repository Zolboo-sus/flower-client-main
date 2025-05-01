import React from "react";
import { IoIosMenu } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";
import logo from "../../../assets/logo.svg";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full border-b-[1px] border-[#ffd1d4] pb-2 fixed top-0 left-0 z-50 bg-white">
      <div
        id="mySidenav"
        className="sidenav"
        style={{ width: isOpen ? "250px" : "0" }}
      >
        <a
          href="#!"
          className="closebtn hover:text-[#ffd1d4]"
          onClick={closeNav}
        >
          &times;
        </a>
        <a href="#Баглаа" onClick={closeNav}>
          Occasion
        </a>
        <a href="#flowers" onClick={closeNav}>
          Flowers
        </a>
        <a href="#bouquets" onClick={closeNav}>
          Bouquets
        </a>
        <a href="/plants" target="_blank" onClick={closeNav}>
          Plants
        </a>
        <a href="#gift" to onClick={closeNav}>
          Gifts
        </a>
        <a href="#sale" onClick={closeNav}>
          Sale
        </a>
      </div>
      <div className="flex h-full justify-between mt-[20px]">
        {/* Drawer Toggle Button */}
        <div className="ml-4 self-center p-[2px] rounded-md bg-[#f1f0f2] shadow-xl drop-shadow-xl">
          <IoIosMenu size={30} onClick={openNav} />
        </div>
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
      <a href="/">
        <span className="uppercase font-serif text-sm">
          flower center mongolia
        </span>
      </a>
    </div>
  );
};

export default Header;
