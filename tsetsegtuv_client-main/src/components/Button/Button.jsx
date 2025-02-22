import React from "react";

const Button = ({ text, onClicked, view }) => {
  return (
    <>
      <div className=" px-2 rounded-lg">
        <button
          onClick={() => {
            onClicked(view);
          }}
          className="bg-[#fcd7d7] rounded-lg p-1 w-full font-normal md: px-10 shadow-slate-300 shadow-md md:text-[23px] text-[16px]"
        >
          {text}
        </button>
      </div>
    </>
  );
};

export default Button;
