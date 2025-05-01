import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const Order = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    district: "",
    subdistrict: "",
    address: "",
    receiverName: "",
    receiverLastName: "",
    receiverPhone: "",
    orderId: id,
  });

  const [delived, setDelived] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "Нэр заавал оруулна";
    if (!formData.lastName.trim()) newErrors.lastName = "Овог заавал оруулна";
    if (!formData.phone.trim()) newErrors.phone = "Утасны дугаар оруулна";
    if (!formData.email.trim()) newErrors.email = "И-мэйл хаяг оруулна";
    else if (!formData.email.includes("@")) newErrors.email = "И-мэйл буруу байна";

    if (delived) {
      if (!formData.district.trim()) newErrors.district = "Дүүрэг оруулна";
      if (!formData.subdistrict.trim()) newErrors.subdistrict = "Хороо оруулна";
      if (!formData.address.trim()) newErrors.address = "Хаяг оруулна";
      if (!formData.receiverName.trim()) newErrors.receiverName = "Нэр оруулна";
      if (!formData.receiverLastName.trim()) newErrors.receiverLastName = "Овог оруулна";
      if (!formData.receiverPhone.trim()) newErrors.receiverPhone = "Утас оруулна";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;
    setIsLoading(true);

    axios.post("https://tsetsegtuw.templateapi.xyz/order", formData)
      .then((res) => {
        return axios.post(`https://tsetsegtuw.templateapi.xyz/qpay/${id}`, {
          orderId: res.data.data._id,
        });
      })
      .then((el) => {
        navigate(`/payment/${el.data.invoice.sender_invoice_id}/${el.data.data.qr_text}/${formData.orderId}`);
        localStorage.setItem("qpay_urls", JSON.stringify(el.data.data.urls));
        localStorage.setItem("order_info", JSON.stringify(formData));
      })
      .catch(() => alert("Алдаа гарлаа"))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Нэр</label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className={`w-full p-3 rounded border ${errors.firstName ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Овог</label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className={`w-full p-3 rounded border ${errors.lastName ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Утас</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={`w-full p-3 rounded border ${errors.phone ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">И-мэйл</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full p-3 rounded border ${errors.email ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Хүргэлтийн хэсэг */}
        {delived && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700">Дүүрэг</label>
              <input
                name="district"
                value={formData.district}
                onChange={handleInputChange}
                className={`w-full p-3 rounded border ${errors.district ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.district && <p className="text-red-500 text-sm">{errors.district}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Хороо</label>
              <input
                name="subdistrict"
                value={formData.subdistrict}
                onChange={handleInputChange}
                className={`w-full p-3 rounded border ${errors.subdistrict ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.subdistrict && <p className="text-red-500 text-sm">{errors.subdistrict}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Хаяг</label>
              <input
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className={`w-full p-3 rounded border ${errors.address ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Хүлээн авагчийн нэр</label>
              <input
                name="receiverName"
                value={formData.receiverName}
                onChange={handleInputChange}
                className={`w-full p-3 rounded border ${errors.receiverName ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.receiverName && <p className="text-red-500 text-sm">{errors.receiverName}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Хүлээн авагчийн овог</label>
              <input
                name="receiverLastName"
                value={formData.receiverLastName}
                onChange={handleInputChange}
                className={`w-full p-3 rounded border ${errors.receiverLastName ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.receiverLastName && <p className="text-red-500 text-sm">{errors.receiverLastName}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Хүлээн авагчийн утас</label>
              <input
                name="receiverPhone"
                value={formData.receiverPhone}
                onChange={handleInputChange}
                className={`w-full p-3 rounded border ${errors.receiverPhone ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.receiverPhone && <p className="text-red-500 text-sm">{errors.receiverPhone}</p>}
            </div>
          </>
        )}
      </div>

      <div className="mt-6">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={delived}
            onChange={() => setDelived(!delived)}
            className="form-checkbox"
          />
          <span className="ml-2">Хүргүүлэх үү?</span>
        </label>
      </div>

      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="mt-6 px-6 py-3 bg-pink-500 text-white rounded shadow-md hover:bg-pink-600"
      >
        {isLoading ? "Илгээж байна..." : "Захиалах"}
      </button>
    </div>
  );
};
