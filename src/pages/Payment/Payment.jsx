import React, { useState } from "react";
import bank from "../../assets/capitron.png";
import { useNavigate, useParams } from "react-router-dom";
import QRCode from "react-qr-code";
import axios from "axios";
import { useCart } from "../../context/CartContext";
import LoaderButton from "../../components/Button/LoaderButton";
import "./Payment.css";

const Payment = () => {
  const { qr, invoiceId, orderId } = useParams();
  const { cart } = useCart();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [paymentError, setPaymentError] = useState(null);

  const qpay_urls = JSON.parse(window.localStorage.getItem('qpay_urls'));

  const totalAmount = cart ? cart.reduce(
    (acc, item) => acc + item.price * item.quality,
    0
  ) : 0;

  const checkPayment = () => {
    setIsLoading(true);
    axios.get('https://tsetsegtuw.templateapi.xyz/tsetsegtuv/qpay/callback/' + invoiceId)
      .then(() => navigate('/complete/' + orderId))
      .catch(() => {
        setPaymentError('Төлбөр төлөгдөөгүй байна');
      })
      .finally(() => setIsLoading(false));
  };

  // Step status helper function
  const stepClass = (step) => {
    return step === 3
      ? "size-[45px] shadow-xl rounded-full bg-[#feb6bb] text-lg flex justify-center items-center"
      : "size-[45px] shadow-inner shadow-slate-300 rounded-full text-lg flex justify-center items-center";
  };

  return (
    <div>
      <div className="flex justify-center items-center p-10">
        {[1, 2, 3, 4].map((step, index) => (
          <React.Fragment key={step}>
            <div className={stepClass(step)}>{step}</div>
            {index < 3 && <span className="w-[50px] h-[1px] bg-black flex items-center align-center"></span>}
          </React.Fragment>
        ))}
      </div>

      <div className="md:flex">
        <div className="md:w-1/2">
          <div className="flex flex-col justify-start md:gap-3 gap-2 px-[5%]">
            <p className="md:text-[36px] text-[16px] text-left">Төлбөр төлөх</p>
            <p className="md:text-[18px] text-[12px] text-left">Дансаар шилжүүлэх</p>
          </div>

          <div className="p-[5%] md:my-[0%] m-[5%] shadow-lg border-slate-300">
            <div className="flex">
              <img src={bank} alt="Bank Logo" />
              <h2>Капитрон банк</h2>
            </div>
            <div className="flex flex-col text-left">
              <p>Дансны дугаар: 3003000006</p>
              <p>Хүлээн авагч: Үр мандал</p>
              <p>Шилжүүлэх дүн: {Intl.NumberFormat('en-us').format(totalAmount)}₮</p>
            </div>
          </div>

          <QRCode className="max-md:h-[50vw] h-36 max-md:w-screen" value={qr} />

          <div className="grid grid-cols-3 w-[20vw] p-10 gap-2 max-md:w-screen max-md:justify-between max-md:gap-5">
            {qpay_urls.map((e, index) => (
              <div key={index} className="flex justify-center">
                <a href={e.link} className="flex flex-col">
                  <img className="h-[50px] w-[50px]" src={e.logo} alt={e.name} />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="right md:block md:w-[50%]">
          <div className="flex flex-start w-full md:pt-4 p-[5%] md:pb-12">
            <h2 className="md:text-[36px] text-xl font-semibold">Захиалга</h2>
          </div>

          <div className="bg-slate-100 mx-[5%] rounded-b-lg shadow-slate-300 shadow-lg">
            <div className="deed tal space-y-2 p-4 text-lg">
              {cart ? cart.map((e) => (
                <div key={e.id} className="deed taliin deed tal flex justify-between items-center">
                  <div className="zuun tal ">
                    <h2>{e.name}</h2>
                  </div>
                  <div className="baruun tal gap-9 flex items-center">
                    <span className="p-1 shadow-sm shadow-slate-500 border-slate-50 border-1 rounded-xl text-[10px] bg-slate-300">
                      {e.quality}
                    </span>
                    <div>{Intl.NumberFormat('en-us').format(e.price * e.quality)}₮</div>
                  </div>
                </div>
              )) : null}
            </div>

            <div className="dood_tal font-medium text-xl">
              <div className="bg-slate-200 p-1 rounded-lg">
                <div className="bg-slate-300 rounded-lg flex justify-between px-4">
                  <h2>Нийт дүн</h2>
                  <div className="Total">
                    {Intl.NumberFormat('en-us').format(totalAmount)}₮
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-[5%] md:flex md:justify-center md:w-full w-1/2 mt-5">
            <div className="px-2 rounded-lg">
              {isLoading ? (
                <LoaderButton />
              ) : (
                <button
                  onClick={checkPayment}
                  className="bg-[#fcd7d7] rounded-lg p-1 w-full font-normal md:px-10 shadow-slate-300 shadow-md md:text-[23px] text-[16px]"
                >
                  Төлбөр шалгах
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Display payment error if any */}
      {paymentError && (
        <div className="text-red-600 text-center mt-5">
          <p>{paymentError}</p>
        </div>
      )}
    </div>
  );
};

export default Payment;
