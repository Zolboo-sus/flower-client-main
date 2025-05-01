import React, { useState, useEffect } from "react";
import flower from "../../assets/flower.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../../context/CartContext"; // Import Cart Context

const Product = () => {
  const [counter, setCounter] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { addCardToCart, cart } = useCart();

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleDecrement = () => {
    if (counter > 1) {
      setCounter((prevCounter) => prevCounter - 1);
    }
  };

  useEffect(() => {
    if (isLoading) {
      axios
        .get(`https://tsetsegtuw.templateapi.xyz/product/id/${id}`)
        .then((res) => setData(res.data.data))
        .catch((er) => console.log(er))
        .finally(() => setIsLoading(false));
    }
    if (cart) {
      if (cart.some((item) => item.id === id)) {
        setAddedToCart(true);
      }
    }
  }, [isLoading, id, cart]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    setAddedToCart(true);

    const newCard = {
      id: data._id,
      name: data.productName,
      price: data.price,
      quality: counter,
      image: data.productImages[0],

    };

    addCardToCart(newCard);
  };

  return (
    <div className="flex flex-col w-auto p-10 md:mx-[7vh] min-h-[77vh]">
      <div className="w-full mb-4">
        <span className="flex text-start text-[4.5vw] font-normal font-sans text-[#464441] italic md:text-[4.5vh]">
          {data.productName} - {data.category?.catName}
        </span>
      </div>

      <div className="w-full flex items-start gap-6 mt-5">
        <div className="md:w-[100%] w-auto relative">
          {data.productImages ? <img
            src={"https://tsetsegtuw.templateapi.xyz/" + data.productImages[0]}
            alt="Flower"
            className="w-[25vw] h-auto md:w-[50vh] md:h-[60vh] object-cover shadow-xl"
          /> : null}
        </div>

        <div className="md:w-full flex flex-col space-y-2 md:space-y-[5vh]">
          <h2 className="md:w-full text-start text-[4.5vw] font-semibold md:text-[4.5vh]">
            {data.productName}
          </h2>
          <div className="w-full text-start text-lg text-gray-600 border-b border-[#d4d4d4] md:text-[3vh] md:pb-5">
            Үнэ: <span className="font-semibold">{data.price}₮</span>
          </div>

          {/* <div className="w-full flex items-center gap-2 border-b border-[#d4d4d4] md:pb-5 md:text-[3vh] md:mb-[10vh]">
            <span className="drop-shadow-xl">Баглааны орц</span>
            <select name="" id="" className="text-sm md:text-[3vh] md:w-auto">
              <option value=""></option>
              <option value="">Цэцэг</option>
              <option value="">Лили</option>
              <option value="">Ромашка</option>
              <option value="">Улаан сарнай</option>
            </select>
          </div> */}

          <div className="flex justify-between md:mt-[5vh] md:justify-start md:space-x-[10vh] gap-2">
            <div className="w-fit h-fit flex items-center gap-4 border rounded-md shadow-lg md:w-[30vh]">
              <button
                type="button"
                className="text-xl font-bold px-2 hover:bg-gray-300 border-r md:text-[4.5vh] md:w-full md:font-normal text-gray-400 md:h-full"
                onClick={handleDecrement}
              >
                -
              </button>
              <span className="md:text-[3.5vh] md:w-full md:h-full md:font-normal">
                {counter}
              </span>
              <button
                type="button"
                className="text-xl font-bold px-2 hover:bg-gray-300 border-l md:text-[4.5vh] md:w-full md:font-normal md:h-full"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className={`px-1 py-2 rounded-md shadow-lg text-sm w-[25vw] md:w-[20vh] md:text-[2.5vh] 
                ${addedToCart ? "bg-[#ffd1d4]" : "border hover:bg-gray-300"
                }`}
            >
              {addedToCart ? "Сагсанд хийлээ" : "Сагсанд хийх"}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 md:space-y-20">
        <h1 className="text-lg drop-shadow-lg mb-4 font-normal font-sans md:text-[3vh]">
          Төстэй баглаанууд
        </h1>
        <div className="w-full flex gap-4">
          <div className="flex md:w-full md:gap-10 gap-4 w-full md:justify-start overflow-x-auto">
            <img src={flower} alt="" className="w-auto h-[11vh] md:h-[16vw]" />
            <img src={flower} alt="" className="w-auto h-[11vh] md:h-[16vw]" />
            <img src={flower} alt="" className="w-auto h-[11vh] md:h-[16vw]" />
            <img src={flower} alt="" className="w-auto h-[11vh] md:h-[16vw]" />
            <img src={flower} alt="" className="w-auto h-[11vh] md:h-[16vw]" />
            <img src={flower} alt="" className="w-auto h-[11vh] md:h-[16vw]" />
            <img src={flower} alt="" className="w-auto h-[11vh] md:h-[16vw]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
