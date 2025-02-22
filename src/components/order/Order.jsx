import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import LoaderButton from "../Button/LoaderButton";

const Order = () => {
  const [isIndividual, setIsIndividual] = useState(true);
  const [delived, setDeliver] = useState(true);
  const [Active, setActive] = useState(true);
  const [navigater, setNavigate] = useState(false);
  const { cart } = useCart();
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quality,
    0
  );

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyReg: "",
    companyName: "",
    phone: "",
    email: "",
    district: "",
    subdistrict: "",
    address: "",
    receiverName: "",
    receiverLastName: "",
    receiverPhone: "",
    deliveryTime: "",
    message: "",
    price: totalAmount,
    orders: cart,
  });

  const handleSelectChange = (event) => {
    setIsIndividual(event.target.value === "Хувь хүн");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setIsLoading(true);

    axios.post('https://tsetsegtuw.templateapi.xyz/tsetsegtuv/order', formData)
      .then((e) => {
        axios.post('https://tsetsegtuw.templateapi.xyz/tsetsegtuv/qpay/' + id, {
          orderId: e.data.data._id
        }).then((el) => {
          navigate('/payment/' + el.data.invoice.sender_invoice_id + '/' + el.data.data.qr_text + '/' + e.data.data._id);

          window.localStorage.setItem('qpay_urls', JSON.stringify(el.data.data.urls));
        })
          .finally(() => setIsLoading(false))
      })
      .catch(() => alert('ads'))
    // .finally(() => setIsLoading(false))
  };

  if (navigater) {
    navigate('/payment');
  }


  const active =
    "size-[45px] shadow-xl rounded-full bg-[#feb6bb] text-lg flex justify-center items-center";
  const deactive =
    "size-[45px] shadow-inner shadow-slate-300 rounded-full text-lg flex justify-center items-center";

  return (
    <div>
      <div className="flex justify-center items-center p-10">
        <div className="size-[45px] shadow-inner shadow-slate-300 rounded-full text-lg flex justify-center items-center">
          1
        </div>
        <span className="w-[50px] h-[1px] bg-black flex items-center align-center"></span>
        <div className={Active ? active : deactive}>2</div>
        <span className="w-[50px] h-[1px] bg-black flex items-center align-center"></span>
        <div className="size-[45px] shadow-inner shadow-slate-300 rounded-full text-lg flex justify-center items-center">
          3
        </div>
        <span className="w-[50px] h-[1px] bg-black flex items-center align-center"></span>
        <div className="size-[45px] shadow-inner shadow-slate-300 rounded-full text-lg flex justify-center items-center">
          4
        </div>
      </div>
      <div className="md:w-[100vw] xl:w-[100vw] flex justify-center items-center min-h-screen bg-gray-100">
        <div className="p-4 sm:p-6 md:w-[80vw]  xl:w-[100vw] mx-auto bg-white border rounded-lg shadow-custom-pink">
          {/* Main Layout */}
          <div className="flex flex-col-reverse md:flex-row gap-6 mb-10">
            {/* Left Section - Individual/Organization Form */}
            <div className="w-full sm:w-2/3 md:w-full xl:w-3/5">
              <div className="flex justify-between items-center">
                <select
                  onChange={handleSelectChange}
                  className="block p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFB6BA] appearance-none"
                >
                  <option value="Хувь хүн">Хувь хүн</option>
                  <option value="Байгуулга">Байгуулга</option>
                </select>
              </div>
              <div className="flex w-full justify-between">
                <div className="flex flex-wrap text-start justify-end  mt-4 w-full">
                  <div className="lg:w-[80vw] md:w-[100vw]">
                    {isIndividual ? (
                      <div className="flex w-[100%] gap-3">
                        <div className="w-1/2">
                          <label className="text-sm font-medium text-gray-700">
                            Нэр
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="border shadow-md bg-opacity-25 border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#FFB6BA]"
                          />
                        </div>
                        <div className="w-1/2">
                          <label className="text-sm font-medium text-gray-700">
                            Овог
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="border shadow-md bg-opacity-25 border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#FFB6BA]"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="flex w-full text-start gap-3">
                        <div className="w-1/2">
                          <label className="text-sm font-medium text-gray-700">
                            Байгууллагын регистр
                          </label>
                          <input
                            type="text"
                            name="companyReg"
                            value={formData.companyReg}
                            onChange={handleInputChange}
                            className="border shadow-md bg-opacity-25 border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#FFB6BA]"
                          />
                        </div>
                        <div className="w-1/2">
                          <label className="text-sm font-medium text-gray-700">
                            Байгууллагын нэр
                          </label>
                          <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            className="border shadow-md bg-opacity-25 border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#FFB6BA]"
                          />
                        </div>
                      </div>
                    )}
                    <div className="flex w-full text-start gap-3">
                      <div className="w-1/2">
                        <label className="text-sm font-medium text-gray-700">
                          Утасны дугаар
                        </label>
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="border shadow-md bg-opacity-25 border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#FFB6BA]"
                        />
                      </div>
                      <div className="w-1/2">
                        <label className="text-sm font-medium text-gray-700">
                          И-мэйл хаяг
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="border shadow-lg bg-opacity-25 border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#FFB6BA]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center ">
                  {window.innerWidth > 1025 ? (
                    <div className="w-full md:w-1/3">
                      <h2 className="text-xl font-bold mb-4 text-center">
                        Захиалга
                      </h2>
                      <div className="md:w-[20vw] 2xl:w-[50vh] p-4 border rounded-md shadow-md bg-gray-50">
                        {cart.map((e) => (
                          <div className="flex justify-between text-sm mb-2">
                            <span>{e.name}</span>
                            <span>{Intl.NumberFormat('en-us').format(e.price * e.quality)}₮</span>
                          </div>

                        ))}
                        <div className="flex justify-between font-semibold text-lg border-t border-gray-300 pt-2">
                          <span>Нийт дүн</span>
                          <span>{Intl.NumberFormat('en-us').format(totalAmount)}₮</span>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center  gap-4 my-4">
            <button
              onClick={() => setDeliver(false)}
              className="bg-[#b5b5b5] text-white py-2 px-4 rounded-md hover:bg-[#ff9fa5] focus:bg-[#FFB6BA] focus:outline-none"
            >
              Очиж авах
            </button>
            <button
              onClick={() => setDeliver(true)}
              className="bg-[#b5b5b5] text-white py-2 px-4 rounded-md hover:bg-[#ff9fa5] focus:bg-[#FFB6BA] focus:outline-none"
            >
              Хүргүүлэх
            </button>
          </div>

          <div className="p-4 border rounded-md bg-white mb-8 text-start shadow-custom-pink">
            <div className="grid md:grid-cols- gap-6">
              {delived ? <div className="flex flex-col">
                <h2 className="text-xl font-bold mb-4">Хүргүүлэх хаяг</h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700">
                      Дүүрэг
                    </label>
                    <input
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleInputChange}
                      className="border shadow-md bg-opacity-25 border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#FFB6BA]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700">
                      Хороо
                    </label>
                    <input
                      type="text"
                      name="subdistrict"
                      value={formData.subdistrict}
                      onChange={handleInputChange}
                      className="border shadow-lg bg-opacity-25 border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#FFB6BA]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Дэлгэрэнгүй хаяг
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows={4}
                    className="border shadow-lg bg-opacity-25 border-gray-300 p-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB6BA]"
                  />
                </div>
              </div> : null}

              {/* Receiver Info */}
              {delived ? <div className="flex flex-col">
                <h2 className="text-xl font-bold mb-4">
                  Хүлээн авагчийн мэдээлэл
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700">
                      Нэр
                    </label>
                    <input
                      type="text"
                      name="receiverName"
                      value={formData.receiverName}
                      onChange={handleInputChange}
                      className="border shadow-lg bg-opacity-25 border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#FFB6BA]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700">
                      Овог
                    </label>
                    <input
                      type="text"
                      name="receiverLastName"
                      value={formData.receiverLastName}
                      onChange={handleInputChange}
                      className="border shadow-lg bg-opacity-25 border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#FFB6BA]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700">
                      Утасны дугаар
                    </label>
                    <input
                      type="tel"
                      name="receiverPhone"
                      value={formData.receiverPhone}
                      onChange={handleInputChange}
                      className="border shadow-lg bg-opacity-25 border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#FFB6BA]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700">
                      Хүргүүлэх цаг
                    </label>
                    <input
                      type="time"
                      name="deliveryTime"
                      value={formData.deliveryTime}
                      onChange={handleInputChange}
                      className="border shadow-lg bg-opacity-25 border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#FFB6BA]"
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-4">
                  <label className="text-sm font-medium text-gray-700">
                    Захиа бичих
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="border shadow-lg bg-opacity-25 border-gray-300 p-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB6BA]"
                  />
                </div>
              </div> : null}

              {window.innerWidth < 1025 ? (
                <div className="w-full md:w-1/3">
                  <h2 className="text-xl font-bold mb-4 text-right">
                    Захиалга
                  </h2>
                  <div className="p-4 border rounded-md shadow-md bg-gray-50">
                    {cart.map((e) => (
                      <div className="flex justify-between text-sm mb-2">
                        <span>{e.name}</span>
                        <span>{Intl.NumberFormat('en-us').format(e.price * e.quality)}₮</span>
                      </div>
                    ))}
                    <div className="flex justify-between font-semibold text-lg border-t border-gray-300 pt-2">
                      <span>Нийт дүн</span>
                      <span>{Intl.NumberFormat('en-us').format(totalAmount)}₮</span>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="w-full flex justify-end">
            {isLoading ? <LoaderButton /> :
              <button onClick={handleSubmit} className="w-32 flex flex-col items-center text-center font-semibold py-2 px-5 border-b-2 rounded-lg bg-[#FFB6BA]">
                Захиалах
              </button>}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Order;
