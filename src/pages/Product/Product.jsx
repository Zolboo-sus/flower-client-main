import React, { useState, useEffect } from "react";
import flower from "../../assets/flower.png";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../../context/CartContext"; // Import Cart Context

const Product = () => {
  const [counter, setCounter] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const { id, catid } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [categoryProducts, setCategoryProducts] = useState([]);
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
    setIsLoading(true);
    setAddedToCart(false); // Reset cart status when product changes
    Promise.all([
      axios.get(`https://tsetsegtuw.templateapi.xyz/product/id/${id}`),
      axios.get(`https://tsetsegtuw.templateapi.xyz/product?category=${catid}`),
    ])
      .then(([product, category]) => {
        setData(product.data.data);
        setCategoryProducts(category.data.data);
      })
      .finally(() => setIsLoading(false));

    if (cart) {
      if (cart.some((item) => item.id === id)) {
        setAddedToCart(true);
      }
    }
  }, [id, cart, catid]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    if (addedToCart) {
      alert("Бүтээгдэхүүн аль хэдийн сагсанд хийгдсэн байна.");
      return;
    }

    const newCard = {
      id: data._id,
      name: data.productName,
      price: data.price,
      quality: counter,
      image: data.productImages[0],
    };

    addCardToCart(newCard);
    setAddedToCart(true);
  };

  return (
    <div className="flex flex-col w-auto p-10 md:mx-[7vh] min-h-[77vh]">
      <div className="w-full mb-4">
        <span className="flex text-start text-[4.5vw] font-normal font-sans text-[#464441] italic md:text-[4.5vh]">
          {data.productName} - {data.category?.catName}
        </span>
      </div>

<div className="w-full flex flex-col md:flex-row items-center md:items-start gap-6 mt-5">
  {/* LEFT: Flower Image */}
  <div className="w-full md:w-[50%] flex justify-center items-center">
    {data.productImages && data.productImages.length > 0 ? (
      <img
        src={`https://tsetsegtuw.templateapi.xyz/${data.productImages[0]}`}
        alt="Flower"
        className="w-[80vw] max-w-[400px] h-auto md:w-[50vh] md:h-[60vh] object-cover shadow-xl"
        style={{ borderRadius: "10px" }}
      />
    ) : (
      <div className="text-gray-400">No image available</div>
    )}
  </div>

  {/* RIGHT: Product Info */}
  <div className="w-full md:w-[50%] flex flex-col items-start space-y-4">
    <h2 className="text-[5vw] font-semibold md:text-[4.5vh]">
      {data.productName}
    </h2>

    <div className="text-lg text-gray-600 border-b border-[#d4d4d4] pb-2 md:text-[3vh] md:pb-5">
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

<div className="flex justify-between w-full md:justify-start md:space-x-[10vh] gap-2 mt-4">
      {/* Quantity Control */}
      <div className="w-fit h-fit flex items-center gap-4 border rounded-md shadow-lg md:w-[30vh]">
        <button
          type="button"
          className="text-xl font-bold px-2 hover:bg-gray-300 border-r md:text-[4.5vh] text-gray-400"
          onClick={handleDecrement}
        >
          -
        </button>
        <span className="md:text-[3.5vh]">{counter}</span>
        <button
          type="button"
          className="text-xl font-bold px-2 hover:bg-gray-300 border-l md:text-[4.5vh]"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className={`px-2 py-2 rounded-md shadow-lg text-sm w-[40vw] md:w-[20vh] md:text-[2.5vh]
          ${addedToCart ? "bg-[#ffd1d4]" : "border hover:bg-gray-300"}`}
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
            {categoryProducts
              .filter((el) => el._id !== id)
              .map((el, index) => (
                <Link
                  to={"/product/" + el._id + "/" + catid}
                  key={index}
                  className="flex cursor-pointer hover:scale-105 transition-all duration-300 flex-col w-[25vw] max-md:w-[35vw] items-start gap-2 shrink-0"
                >
                  <img
                    className="w-[15vw] h-[15vw] max-md:w-[45vw] max-md:h-[45vw] object-cover shadow-md rounded-md"
                    src={
                      el.productImages
                        ? "https://tsetsegtuw.templateapi.xyz/" +
                          el.productImages[0]
                        : "no-jpg"
                    }
                    alt=""
                  />
                  <p>{Intl.NumberFormat("en-us").format(el.price)}₮</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
