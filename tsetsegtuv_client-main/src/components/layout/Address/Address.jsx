import React from "react";

const Address = () => {
  return (
    <div>
      <div className="md:flex  shadow-[#fee8eb] shadow-lg   mx-[5%] md:px-[2%] px-[5%] md:py-[2%] py-[7%] text-left space-y-3">
        <h1 className="md:hidden md:text-xl text-[18px] font-semibold">
          Захиалга очиж авах хаяг
        </h1>
        <div className=" gap-11 w-full md:flex  ">
          <div className="space-y-2">
            <h3 className="text-md font-semibold  md:text-[36px] text-[12px]">
              Захиалга очиж авах хаяг
            </h3>
            <p className="text-wrap w-full md:text-[24px]">
              Цэцэг төв дотор 1 давхарын зүүн гар талд Flower center mongolia
              цэцгийн дэлгүүр
            </p>
            <div className="flex gap-2">
              <div className="border-2 px-2 md:text-[24px] text-center border-slate-300">
                <p>Даваа-Баасан</p>
                <p>9:00-21:00</p>
              </div>
              <div className="border-2 px-5 md:text-[24px] text-center border-slate-300">
                <p>Бямба-Ням</p>
                <p>10:00-20:00</p>
              </div>
            </div>
            <p className="md:text-[24px] text-md font-semibold">
              Холбогдох утас: 95515588, 99182844
            </p>
          </div>
          <div className="md:w-1/2 w-full space-y-3">
            <h3 className="md:text-[36px] font-semibold">
              Захиалга очиж авах цаг
            </h3>
            <input
              type="text"
              className="md:w-1/3 shadow-lg shadow-[0, 10, 0, 0.5] border-slate-200"
            />
            <h3 className="md:text-[36px] font-semibold">Нэмэлт мэдээлэл</h3>
            <textarea
              name="extrainfo"
              id=""
              className="md:h-[230px] h-[100px] shadow-lg  border-slate-200 md: w-4/5"></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
