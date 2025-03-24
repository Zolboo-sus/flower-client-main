import React, { useState } from "react";
import Cart from "../../components/cart/Cart";
import { Link } from "react-scroll";

const CardPage = () => {
  const [active, setActive] = useState(true);

  const activeClass =
    "w-[45px] h-[45px] shadow-xl rounded-full bg-[#feb6bb] text-lg flex justify-center items-center";
  const deactiveClass =
    "w-[45px] h-[45px] shadow-inner shadow-slate-300 rounded-full text-lg flex justify-center items-center";

  return (
    <div className="mt-10">
      {/* Step Indicator */}
      <div className="flex justify-center items-center p-10 space-x-2">
        <div className={active ? activeClass : deactiveClass}>1</div>
        <span className="w-[50px] h-[1px] bg-black"></span>
        <div className={deactiveClass}>2</div>
        <span className="w-[50px] h-[1px] bg-black"></span>
        <div className={deactiveClass}>3</div>
        <span className="w-[50px] h-[1px] bg-black"></span>
        <div className={deactiveClass}>4</div>
      </div>

      {/* Cart */}
      <Cart />

      {/* You can add smooth scroll to other sections in the page */}
      <div id="step2" style={{ height: "100vh", backgroundColor: "lightblue" }}>
        Step 2 Content
      </div>
      <Link to="step2" smooth={true} duration={500}>
        Go to Step 2
      </Link>
    </div>
  );
};

export default CardPage;
