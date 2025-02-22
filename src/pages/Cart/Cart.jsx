import React, { useState } from "react";
import Cart from "../../components/cart/Cart";
// import Order from "../../components/order/Order";
const CardPage = () => {
  const [Active, setActive] = useState(true);

  const active =
    "size-[45px] shadow-xl rounded-full bg-[#feb6bb] text-lg flex justify-center items-center";
  const deactive =
    "size-[45px] shadow-inner shadow-slate-300 rounded-full text-lg flex justify-center items-center";

  return (
    <div className="mt-10">
      <div className="flex justify-center items-center p-10">
        <div className={Active ? active : deactive}>1</div>
        <span className="w-[50px] h-[1px] bg-black flex items-center align-center"></span>
        <div className="size-[45px] shadow-inner shadow-slate-300 rounded-full text-lg flex justify-center items-center">
          2
        </div>
        <span className="w-[50px] h-[1px] bg-black flex items-center align-center"></span>
        <div className="size-[45px] shadow-inner shadow-slate-300 rounded-full text-lg flex justify-center items-center">
          3
        </div>
        <span className="w-[50px] h-[1px] bg-black flex items-center align-center"></span>
        <div className="size-[45px] shadow-inner shadow-slate-300 rounded-full text-lg flex justify-center items-center">
          4
        </div>
      </div>

      <Cart />


    </div>
  );
};

export default CardPage;
