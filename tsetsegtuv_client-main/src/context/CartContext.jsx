import React, { createContext, useContext, useState, useEffect } from "react";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addCardToCart = (newCard) => {
    setCart((prevCart) => {
      const existingCard = prevCart ? prevCart.find((item) => item.id === newCard.id) : false;
      if (existingCard) {
        return prevCart.map((item) =>
          item.id === newCard.id
            ? { ...item, quality: item.quality + newCard.quality }
            : item
        );
      } else {
        return prevCart ? [...prevCart, newCard] : [newCard];
      }
    });
  };

  const updateCartItem = (updatedCard) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === updatedCard.id
          ? { ...item, quality: updatedCard.quality }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cart, addCardToCart, updateCartItem, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
