import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import LoaderButton from "../Button/LoaderButton";

const Cart = () => {
  const { cart, updateCartItem, removeFromCart } = useCart();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleIncrement = (id, quality) => {
    updateCartItem({ id, quality });
  };


  const handleDecrement = (id, quality) => {
    if (quality > 0) {
      updateCartItem({ id, quality });
    } else {
      removeFromCart(id);
    }
  };


  const totalAmount = cart ? cart.reduce(
    (acc, item) => acc + item.price * item.quality,
    0
  ) : 0;

  const invoiceSend = () => {
    setIsLoading(true);

    axios.post('https://tsetsegtuw.templateapi.xyz/invoice', {
      price: totalAmount
    }).then((e) => {
      navigate('/order/' + e.data.data.id);
    })
      .finally(() => setIsLoading(false));
  }

  return (
    <div className="flex flex-col p-6 mx-auto max-w-4xl">
      <h2 className="text-2xl font-bold mb-6">Таны сагс</h2>

      {cart && cart.length > 0 ? (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 border-b border-gray-300"
            >
              {/* Product Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={'https://tsetsegtuw.templateapi.xyz/' + item.image}
                  alt={item.productName}
                  className="w-20 h-20 object-cover rounded-md shadow-md"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-500">{item.price}₮</p>
                </div>
              </div>

              {/* quality Controls */}
              <div className="flex items space-x-4">
                <button
                  onClick={() => handleDecrement(item.id, item.quality - 1)}
                  className="px-2 py-1 border border-gray-300 rounded-md hover:bg-gray-200"
                >
                  -
                </button>
                <span className="px-4 py-2 border border-gray-300 rounded-md">
                  {item.quality}
                </span>
                <button
                  onClick={() => handleIncrement(item.id, item.quality + 1)}
                  className="px-2 py-1 border border-gray-300 rounded-md hover:bg-gray-200"
                >
                  +
                </button>
              </div>

              {/* Product Total */}
              <div className="text-lg font-semibold">
                {Intl.NumberFormat('en-us').format(item.price * item.quality)}₮
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="px-4 py-2 text-red-500 hover:text-red-700"
              >
                Хасах
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center border-t border-gray-300 pt-4 mt-6">
            <h3 className="text-xl font-bold">Нийт:</h3>
            <span className="text-2xl font-semibold">{Intl.NumberFormat('en-us').format(totalAmount)}₮</span>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Таны сагс хоосон байна.</p>
      )}

      {cart && cart.length > 0 && (
        <div className="mt-6">
          {isLoading ? <LoaderButton /> :
            <button onClick={() => invoiceSend()} className="w-full px-10 bg-pink-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-pink-600">
              Үргэлжлүүлэх
            </button>}
        </div>
      )}
    </div>
  );
};

export default Cart;
