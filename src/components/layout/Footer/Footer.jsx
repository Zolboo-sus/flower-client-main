/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="flex flex-col bg-pink-200 md:p-[5%] p-5 text-center bottom-0 ">
      <div className="flex w-full md: justify-between h-full text-[6px] text-wrap md: gap-4 text-start items-center">
        <div className="md:size-[216px] size-[70px] md:my-5 bg-cover">
          <img src={logo} alt="flower" className="w-full h-full bg-cover" />
        </div>
        <div className="flex gap-3 md:w-[80%] w-full md: relative justify-between">
          <div className="flex flex-col gap-2 w-auto">
            <h2 className="font-medium md:text-[24px] text-[8px] text-balance ">
              Ангилал
            </h2>
            <div className="h-full text-wrap text-[6px] flex flex-col space-y-1">
              <a className="md:text-[20px] text-[6px]">Нүүр</a>
              <a className="md:text-[20px] text-[6px]">Үйлчилгээний нөхцөл</a>
              <a className="md:text-[20px] text-[6px]">Бараа буцаалт</a>
              <a className="md:text-[20px] text-[6px]">Цэцэг арчилгаа</a>
              <a className="md:text-[20px] text-[6px]">Бидний тухай</a>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:w-auto w-1/3">
            <h2 className="font-medium md:text-[24px] text-[8px] text-wrap">
              Хаяг
            </h2>
            <p className="md:text-[20px] text-[6px]">
              ЧД, 1-р хороо, Бага тойруу, Цэцэг төв 1 давхар
            </p>
          </div>
          <div className="flex flex-col gap-1 md:w-auto w-1/3">
            <h2 className="font-medium md:text-[24px] text-[8px] text-balance">
              Холбоо барих
            </h2>
            <p className="md:text-[20px] text-[6px]">95515588, 99182844 </p>
            <a className="md:text-[20px] text-[6px] ">
              flowercentermongolia@gmail.com
            </a>
          </div>
          <div className="md:sticky absolute md: right-0 md: bottom-2 md:flex flex md:flex-col  md:justify-start justify-between md:w-auto w-[45%] md:gap-1">
            <h2 className="font-medium md:text-[24px] text-[8px] text-left ">
              Social
            </h2>
            <div className="Social_icons md:gap-2 flex md: w-full md: justify-evenly cursor-pointer">
              <a href="https://www.facebook.com/profile.php?id=100091057334970">
                <svg
                  className="md:size-[35px] size-[15px]"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle
                    cx="8.5"
                    cy="8.5"
                    r="7.5"
                    stroke="black"
                    stroke-width="0.3"
                  />
                  <path
                    d="M8.90991 9.091V11.6767H7.72212V9.091H6.73535V8.04256H7.72212V7.6611C7.72212 6.24489 8.31373 5.50024 9.56547 5.50024C9.94922 5.50024 10.0452 5.56192 10.2553 5.61217V6.6492C10.02 6.60808 9.95379 6.58524 9.70938 6.58524C9.41928 6.58524 9.26396 6.66747 9.12234 6.82965C8.98072 6.99183 8.90991 7.27278 8.90991 7.6748V8.04484H10.2553L9.8944 9.09329H8.90991V9.091Z"
                    stroke="black"
                    stroke-width="0.3"
                  />
                </svg>
              </a>
              <a href="">
                <svg
                  className="md:size-[35px] size-[15px]"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle
                    cx="7.93774"
                    cy="8.5"
                    r="7.5"
                    stroke="black"
                    stroke-width="0.3"
                  />
                  <path
                    d="M9.69902 11.2353H6.17468C5.68767 11.2353 5.28979 10.8374 5.28979 10.3504V6.82605C5.28979 6.33904 5.68767 5.94116 6.17468 5.94116H9.69902C10.186 5.94116 10.5839 6.33904 10.5839 6.82605V10.3504C10.5839 10.8396 10.1882 11.2353 9.69902 11.2353Z"
                    stroke="black"
                    stroke-width="0.3"
                  />
                  <path
                    d="M6.97698 9.55031C7.23353 9.80687 7.57487 9.94819 7.93796 9.94819C8.30105 9.94819 8.64022 9.80687 8.89895 9.55031C9.1555 9.29376 9.29682 8.95242 9.29682 8.58933C9.29682 8.22624 9.1555 7.8849 8.89895 7.62834C8.64239 7.37179 8.30105 7.23047 7.93796 7.23047C7.57487 7.23047 7.23353 7.37179 6.97698 7.62834C6.72042 7.8849 6.5791 8.22624 6.5791 8.58933C6.5791 8.95242 6.72042 9.29376 6.97698 9.55031Z"
                    stroke="black"
                    stroke-width="0.3"
                  />
                  <path
                    d="M9.56169 7.18588C9.70578 7.18588 9.8226 7.06907 9.8226 6.92497C9.8226 6.78087 9.70578 6.66406 9.56169 6.66406C9.41759 6.66406 9.30078 6.78087 9.30078 6.92497C9.30078 7.06907 9.41759 7.18588 9.56169 7.18588Z"
                    stroke="black"
                    stroke-width="0.3"
                  />
                </svg>
              </a>
              <a href="">
                <svg
                  className="md:size-[35px] size-[15px]"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle
                    cx="8.375"
                    cy="8.5"
                    r="7.5"
                    stroke="black"
                    stroke-width="0.3"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.20022 5.50024H5.19824L7.57189 8.61916L5.35009 11.2355H6.37663L8.05706 9.25669L9.54921 11.2174H11.5512L9.10857 8.00781L9.11289 8.01334L11.216 5.53668H10.1895L8.62765 7.37589L7.20022 5.50024ZM6.3033 6.04647H6.92654L10.4461 10.6711H9.82288L6.3033 6.04647Z"
                    fill="black"
                  />
                </svg>
              </a>
              <a href="">
                <svg
                  className="md:size-[35px] size-[15px]"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle
                    cx="7.8125"
                    cy="8.5"
                    r="7.5"
                    stroke="black"
                    stroke-width="0.3"
                  />
                  <path
                    d="M10.691 7.27725C10.534 6.93045 10.3088 6.6191 10.0227 6.35077C9.73667 6.08498 9.40507 5.87488 9.03549 5.72806C8.65326 5.57618 8.24824 5.50024 7.83057 5.50024C7.4129 5.50024 7.00788 5.57618 6.62565 5.72806C6.25607 5.87488 5.92447 6.08245 5.63843 6.35077C5.35238 6.6191 5.1271 6.93045 4.97015 7.27725C4.80815 7.6367 4.72461 8.02146 4.72461 8.41635C4.72461 9.1074 4.9828 9.77062 5.45616 10.2971L5.20303 11.6767L6.54971 11.0768C6.95219 11.2489 7.37999 11.335 7.82803 11.335C8.24571 11.335 8.65072 11.259 9.03296 11.1072C9.40253 10.9603 9.73414 10.7528 10.0202 10.4845C10.3062 10.2161 10.5315 9.90478 10.6884 9.55798C10.8505 9.19853 10.934 8.81377 10.934 8.41888C10.9365 8.02146 10.853 7.63923 10.691 7.27725Z"
                    stroke="black"
                    stroke-width="0.3"
                  />
                  <path
                    d="M9.09039 8.99875C8.95876 8.93293 8.86258 8.89243 8.79423 8.86712C8.7512 8.85193 8.64994 8.80637 8.6145 8.83421C8.50312 8.92534 8.38415 9.18354 8.25758 9.23163C7.9437 9.17088 7.65259 8.95571 7.42477 8.73549C7.32352 8.6393 7.1362 8.36591 7.0957 8.2925C7.0881 8.21656 7.22479 8.11531 7.25517 8.05709C7.41211 7.8799 7.29314 7.76852 7.27289 7.69511C7.23745 7.61917 7.1767 7.48247 7.12355 7.3711C7.07798 7.29769 7.06785 7.18884 6.98684 7.14834C6.64258 6.97114 6.44515 7.32553 6.36414 7.51032C5.87559 8.68739 8.81194 10.9276 9.40934 9.38351C9.43972 9.24935 9.42706 9.19872 9.38149 9.13797C9.29037 9.07469 9.18405 9.04684 9.09039 8.99875Z"
                    stroke="black"
                    stroke-width="0.3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
