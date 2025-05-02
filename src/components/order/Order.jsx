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
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const { cart } = useCart();
  const [get, setGet] = useState(true);

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
    date: new Date().toISOString(),
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

  const handleSubmit = async () => {
  const requiredFields = [
    "phone", "email",
    delived && "district",
    delived && "subdistrict",
    delived && "address",
    delived && "receiverName",
    delived && "receiverLastName",
    delived && "receiverPhone",
    delived && "deliveryTime"
  ].filter(Boolean);

  for (const field of requiredFields) {
    if (!formData[field]) {
      alert("Та бүх талбарыг бүрэн бөглөнө үү.");
      return;
    }
  }

  // 📧 Email format validation
  if (!formData.email.includes('@')) {
    alert("Зөв имэйл хаяг оруулна уу. '@' тэмдэгт заавал байх ёстой.");
    return;
  }

  try {
    setIsLoading(true);

    const orderRes = await axios.post('https://tsetsegtuw.templateapi.xyz/order', {
      ...formData,
      date: new Date().toISOString(),
    });

    const paymentRes = await axios.post(`https://tsetsegtuw.templateapi.xyz/qpay/${id}`, {
      orderId: orderRes.data.data._id,
    });

    window.localStorage.setItem('qpay_urls', JSON.stringify(paymentRes.data.data.urls));
    window.localStorage.setItem('order_info', JSON.stringify(formData));

    navigate(`/payment/${paymentRes.data.invoice.sender_invoice_id}/${paymentRes.data.data.qr_text}/${orderRes.data.data._id}`);
  } catch (error) {
    alert("Алдаа гарлаа. Та дахин оролдоно уу.");
    console.error(error);
  } finally {
    setIsLoading(false);
  }
};


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
                          type="tel"
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
              onClick={() => setGet(true)}
              className="bg-[#b5b5b5] text-white py-2 px-4 rounded-md hover:bg-[#ff9fa5] focus:bg-[#FFB6BA] focus:outline-none"
            >
              Очиж авах
            </button>
            
            <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700">
                      Очиж авах цаг
                    </label>
                    <input
                      type="time"
                      name="deliveryTime"
                      value={formData.deliveryTime}
                      onChange={handleInputChange}
                      className="border shadow-lg bg-opacity-25 border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#FFB6BA]"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700">
                      Очиж авах өдөр
                    </label>
                    <input
                      type="date"
                      name="deliveryDate"
                      value={formData.deliveryDate}
                      onChange={handleInputChange}
                      className="border shadow-lg bg-opacity-50 border-gray-600 rounded-md p-4 w-full focus:outline-none focus:ring-4 focus:ring-[#FFB6BA]"
                    />
                  </div>

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

                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700">
                      Хүргүүлэх өдөр
                    </label>
                    <input
                      type="date"
                      name="deliveryDate"
                      value={formData.deliveryDate}
                      onChange={handleInputChange}
                      className="border shadow-lg bg-opacity-50 border-gray-600 rounded-md p-4 w-full focus:outline-none focus:ring-4 focus:ring-[#FFB6BA]"
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
