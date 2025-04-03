import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import LoaderButton from "../Button/LoaderButton";

const Order = () => {
  const [isIndividual, setIsIndividual] = useState(true);
  const [delived, setDeliver] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { cart } = useCart();
  const navigate = useNavigate();
  const { id } = useParams();

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quality, 0);

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
    deliveryDate: "",
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

  const validateForm = () => {
    if (isIndividual) {
      if (!formData.firstName.trim() || !formData.lastName.trim()) {
        alert("Нэр болон овог оруулна уу!");
        return false;
      }
    } else {
      if (!formData.companyReg.trim() || !formData.companyName.trim()) {
        alert("Байгууллагын регистр болон нэрийг оруулна уу!");
        return false;
      }
    }

    if (!/^\d{8}$/.test(formData.phone)) {
      alert("Утасны дугаар 8 оронтой тоо байх ёстой!");
      return false;
    }

    if (delived) {
      if (!formData.district.trim() || !formData.subdistrict.trim() || !formData.address.trim()) {
        alert("Хүргүүлэх хаягийн бүх мэдээллийг бөглөнө үү!");
        return false;
      }
      if (!formData.receiverName.trim() || !formData.receiverLastName.trim() || !/^\d{8}$/.test(formData.receiverPhone)) {
        alert("Хүлээн авагчийн мэдээллийг зөв оруулна уу!");
        return false;
      }
      if (!formData.deliveryDate || !formData.deliveryTime) {
        alert("Хүргэлтийн огноо болон цагийг заавал сонгоно уу!");
        return false;
      }
    }

    return true;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    setIsLoading(true);
    axios.post('https://tsetsegtuw.templateapi.xyz/tsetsegtuv/order', formData)
      .then((e) => {
        axios.post(`https://tsetsegtuw.templateapi.xyz/tsetsegtuv/qpay/${id}`, {
          orderId: e.data.data._id
        }).then((el) => {
          navigate(`/payment/${el.data.invoice.sender_invoice_id}/${el.data.data.qr_text}/${e.data.data._id}`);
          window.localStorage.setItem('qpay_urls', JSON.stringify(el.data.data.urls));
        })
        .finally(() => setIsLoading(false));
      })
      .catch(() => {
        alert('Захиалга илгээхэд алдаа гарлаа!');
        setIsLoading(false);
      });
  };

  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-6 w-full max-w-3xl mx-auto bg-white border rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Захиалга хийх</h2>

        <div className="mb-4">
          <label className="block font-medium mb-2">Хувь хүн / Байгууллага</label>
          <select onChange={handleSelectChange} className="w-full p-3 border rounded">
            <option value="Хувь хүн">Хувь хүн</option>
            <option value="Байгуулга">Байгууллага</option>
          </select>
        </div>

        {isIndividual ? (
          <div className="flex gap-4">
            <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="Нэр" className="border p-3 w-1/2 rounded" />
            <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Овог" className="border p-3 w-1/2 rounded" />
          </div>
        ) : (
          <div className="flex gap-4">
            <input type="text" name="companyReg" value={formData.companyReg} onChange={handleInputChange} placeholder="Байгууллагын регистр" className="border p-3 w-1/2 rounded" />
            <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} placeholder="Байгууллагын нэр" className="border p-3 w-1/2 rounded" />
          </div>
        )}

        <div className="mt-4">
          <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Утасны дугаар" className="border p-3 w-full rounded" />
        </div>

        {delived && (
          <>
            <div className="mt-4 flex gap-4">
              <input type="text" name="district" value={formData.district} onChange={handleInputChange} placeholder="Дүүрэг" className="border p-3 w-1/2 rounded" />
              <input type="text" name="subdistrict" value={formData.subdistrict} onChange={handleInputChange} placeholder="Хороо" className="border p-3 w-1/2 rounded" />
            </div>
            <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Дэлгэрэнгүй хаяг" className="border p-3 w-full mt-4 rounded" />
            <div className="mt-4 flex gap-4">
              <input type="date" name="deliveryDate" value={formData.deliveryDate} onChange={handleInputChange} className="border p-3 w-1/2 rounded" />
              <input type="time" name="deliveryTime" value={formData.deliveryTime} onChange={handleInputChange} className="border p-3 w-1/2 rounded" />
            </div>
          </>
        )}

        <div className="mt-6">
          {isLoading ? <LoaderButton /> : <button onClick={handleSubmit} className="w-full bg-pink-500 text-white p-3 rounded">Захиалах</button>}
        </div>
      </div>
    </div>
  );
};

export default Order;
