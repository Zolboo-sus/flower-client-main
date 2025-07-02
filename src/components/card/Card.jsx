import React, { useEffect, useState } from "react";
import Flower from "../../assets/flower.png";

export default function Card() {
  const [count, setCount] = useState(120000); // Initial price
  const [doubles, setDoubles] = useState(0); // Count * 2
  const [counter, setCounter] = useState(0); // quality counter

  useEffect(() => {
    // Update the "doubles" value based on the count * counter
    setDoubles(() => count * counter);
  }, [count, counter]); // Watch both count and counter

  // Increment counter and update the total price (doubles)
  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  // Decrement counter and ensure it doesn't go below zero
  const decrementCounter = () => {
    setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0));
  };

  return (
    <div>
      <div className="container bg-[#feffff] gap-3 flex p-4 shadow-lg shadow-inner-xl">
        <div className="img">
          <img
            src={Flower}
            className="md:w-[124px] w-[80px] bg-cover"
            alt="flower"
          />
        </div>
        <div className="right-side gap-5 flex flex-col w-2/3">
          <h2 className="text-start md:text-[18px] text-[12px] font-semibold">
            Цагаан баглаа
          </h2>
          <div className="flex flex-col text-[14px] align-center">
            <div className="flex items-center justify-end gap-3">
              <span className="text-[12px] font-semibold">{count}₮</span>
              <div className="flex items-center border border-gray-300 rounded-md overflow-hidden text-[12px]">
                <button
                  className="px-2 py-1 bg-gray-100 hover:bg-gray-200"
                  onClick={decrementCounter}
                >
                  −
                </button>
                <span className="px-3 py-1">{counter}</span>
                <button
                  className="px-2 py-1 bg-gray-100 hover:bg-gray-200"
                  onClick={incrementCounter}
                >
                  +
                </button>
              </div>
              <span className="text-[12px] font-semibold">{doubles}₮</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
