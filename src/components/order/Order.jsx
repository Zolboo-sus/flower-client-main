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

  if (navigater) {
    navigate('/payment');
  }

  return (
    <div>
      {/* Your full JSX code remains unchanged here */}
      {/* Keep your full form layout as before */}
    </div>
  );
};

export default Order;
