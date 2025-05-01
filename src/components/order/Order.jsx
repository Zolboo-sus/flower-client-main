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

  const handleSubmit = () => {
    // Validate required fields
    const requiredFields = ['phone', 'email'];
    if (isIndividual) {
      requiredFields.push('firstName', 'lastName');
    } else {
      requiredFields.push('companyReg', 'companyName');
    }

    if (delived) {
      requiredFields.push(
        'district',
        'subdistrict',
        'address',
        'receiverName',
        'receiverLastName',
        'receiverPhone',
        'deliveryDate',
        'deliveryTime'
      );
    }

    const emptyFields = requiredFields.filter((field) => !formData[field]?.trim());
    if (emptyFields.length > 0) {
      alert('Бүх шаардлагатай талбарыг бөглөнө үү.');
      return;
    }

    setIsLoading(true);

    axios.post('https://tsetsegtuw.templateapi.xyz/order', formData)
      .then((e) => {
        axios.post('https://tsetsegtuw.templateapi.xyz/qpay/' + id, {
          orderId: e.data.data._id
        }).then((el) => {
          navigate('/payment/' + el.data.invoice.sender_invoice_id + '/' + el.data.data.qr_text + '/' + e.data.data._id);
          localStorage.setItem('qpay_urls', JSON.stringify(el.data.data.urls));
          localStorage.setItem('order_info', JSON.stringify(formData));
        })
        .finally(() => setIsLoading(false));
      })
      .catch(() => {
        alert('Захиалга илгээхэд алдаа гарлаа.');
        setIsLoading(false);
      });
  };

  // ... rest of the component (unchanged layout)

  return (
    <div>
      {/* ... existing layout */}

      {delived && (
        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-4">Хүргүүлэх огноо</h2>
          <input
            type="date"
            name="deliveryDate"
            value={formData.deliveryDate}
            onChange={handleInputChange}
            className="border shadow-lg bg-opacity-25 border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#FFB6BA]"
          />
        </div>
      )}

      <div className="w-full flex justify-end mt-6">
        {isLoading ? (
          <LoaderButton />
        ) : (
          <button
            onClick={handleSubmit}
            className="w-32 flex flex-col items-center text-center font-semibold py-2 px-5 border-b-2 rounded-lg bg-[#FFB6BA]"
          >
            Захиалах
          </button>
        )}
      </div>
    </div>
  );
};

export default Order;
