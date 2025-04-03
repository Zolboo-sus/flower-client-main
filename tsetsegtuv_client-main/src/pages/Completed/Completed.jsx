import React from "react";
import Header from "../../components/layout/Header/Header";
import { useState } from "react";
// import Footer from "../../components/layout/Footer/Footer";
// import Card from "../../components/card/Card";
// import Button from "../../components/Button/Button";
import flower from "../../assets/flower.png";
import DesktopHeader from "../../components/layout/Header/DesktopHeader";

const Completed = () => {
  const [Active, setActive] = useState(true);

  const active =
    "size-[45px] shadow-xl rounded-full bg-[#feb6bb] text-lg flex justify-center items-center";
  const deactive =
    "size-[45px] shadow-inner shadow-slate-300 rounded-full text-lg flex justify-center items-center";
  return (
    <div>
      {window.innerWidth < 720 ? (
        <div className="mb-[23vw]">
          {" "}
          <Header />{" "}
        </div>
      ) : null}

      {window.innerWidth > 721 ? (
        <div className="2xl:mb-[10vh] xl:mb-[6vw] lg:mb-[2vh] md:mb-[2vh]">
          {" "}
          <DesktopHeader />{" "}
        </div>
      ) : null}
      <div className="flex justify-center items-center p-10">
        <div className="size-[45px] shadow-inner shadow-slate-300 rounded-full text-lg flex justify-center items-center">
          1
        </div>
        <span className="w-[50px] h-[1px] bg-black flex items-center align-center"></span>
        <div className="size-[45px] shadow-inner shadow-slate-300 rounded-full text-lg flex justify-center items-center">
          2
        </div>
        <span className="w-[50px] h-[1px] bg-black flex items-center align-center"></span>
        <div className="size-[45px] shadow-inner shadow-slate-300 rounded-full text-lg flex justify-center items-center">
          3
        </div>
        <span className="w-[50px] h-[1px] bg-black flex items-center align-center"></span>
        <div className={Active ? active : deactive}>4</div>
      </div>
      <div>
        <span className="text-xl font-semibold text-center my-4 lg:text-[2vw]">
          Таны захиалга амжилттай баталгаажлаа💖
        </span>
        <div className="md:mx-[2v%] m-[5%] md:p-[2%] p-[5%]  shadow-xl md:flex ">
          <div className="md:w-[40%] ">
            <div className="imgs flex justify-evenly flex-wrap md:mb-[2%]">
              <div className="bg-white w-[157px]">
                <img src={flower} className="w-full" alt="flower" />
                <p className="font-medium text-[18px]">Өөр баглаа</p>
              </div>
              <div className="bg-white w-[157px]">
                <img src={flower} className="w-full" alt="flower" />
                <p className="font-medium text-[18px]">Цагаан баглаа</p>
              </div>
            </div>
          </div>
          <div className="medeelel md:w-[60%]  ">
            <div className="w-full rounded-lg px-2 py-1 mb-[3%]">
              <div className="bg-[#f2f3f2] py-2 rounded-lg text-left md:text-[24px] text-[18px] px-3 shadow-lg shadow-[#fcd7d7]">
                <p className="font-medium">Нийт төлсөн дүн: 376,000₮</p>
              </div>
            </div>
            <div className="w-full rounded-lg px-2 py-1 text-left md: mb-[3%]">
              <div className="md:font-medium font-normal bg-[#f2f3f2] rounded-lg md:text-[24px] text-[14px]  text-wrap px-3 py-5 space-y-2 shadow-lg shadow-[#fcd7d7]">
                <p>Хүлээн авагч: Энэрэл</p>
                <p>Хүлээн авагчийн утасны дугаар: 85855855</p>
                <p>Хүлээн авагчийн хаяг: Baga Toiruu, Chingis Museum</p>
                <p>Захиалагч: Золбоотбаатар</p>
                <p>Захиалагчийн утасны дугаар: 83948759</p>
              </div>
            </div>
            <div className="text-center mt-4 md:float-right">
              <div className=" px-2 rounded-lg">
                <a href="/">
                  <button className="bg-[#fcd7d7] rounded-lg p-1 w-full font-normal md: px-10 shadow-slate-300 shadow-md md:text-[23px] text-[16px]">
                    Дуусгах
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Completed;
