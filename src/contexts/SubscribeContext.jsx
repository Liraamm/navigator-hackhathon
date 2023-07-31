import React, { createContext, useContext, useState } from "react";
import { notify } from "../components/Toastify";

const subscribeContext = createContext();
export function useSubscribeContext() {
  return useContext(subscribeContext);
}

const initState = {
  products: [],
  totalPrice: 0,
  totalDate: 0,
};

function getCartFromLS() {
  let data = JSON.parse(localStorage.getItem("cart"));
  if (!data) {
    data = {
      products: [],
      totalPrice: 0,
      totalDate: 0,
    };
  }
  return data;
}

const SubscribeContext = ({ children }) => {
  const [cart, setCart] = useState(initState);

  function getCart() {
    const data = getCartFromLS();
    setCart(data);
  }

  function addProductToCart(product) {
    const data = getCartFromLS();
    data.products.push({
      ...product,
      count: 1,
      subPrice: product.price,
      subDate: product.date,
    });

    data.totalPrice = data.products.reduce(
      (acc, item) => acc + item.subPrice,
      0
    );

    data.totalDate = data.products.reduce((acc, item) => acc + item.subDate, 0);

    localStorage.setItem("cart", JSON.stringify(data));
    getCart();
    notify("success");
  }

  function deleteProductFromCart(id) {
    const data = getCartFromLS();
    data.products = data.products.filter((item) => item.id !== id);
    data.totalPrice = data.products.reduce(
      (acc, item) => acc + item.subPrice,

      0
    );
    data.totalDate = data.products.reduce((acc, item) => acc + item.subDate, 0);

    localStorage.setItem("cart", JSON.stringify(data));
    getCart();
    notify("deleted");
  }

  function isAlreadyInCart(id) {
    const data = getCartFromLS();
    const isInCart = data.products.some((item) => item.id === id);
    return isInCart;
  }

  function increaseCount(id) {
    const data = getCartFromLS();

    data.products = data.products.map((item) => {
      if (item.id === id) {
        item.count += 1;
        item.subPrice += item.price;
        item.subDate += item.date;
      }
      return item;
    });
    data.totalPrice = data.products.reduce(
      (acc, item) => acc + item.subPrice,
      0
    );
    data.totalDate = data.products.reduce((acc, item) => acc + item.subDate, 0);

    localStorage.setItem("cart", JSON.stringify(data));
    getCart();
  }
  function decreaseCount(id) {
    const data = getCartFromLS();

    data.products = data.products.map((item) => {
      if (item.id === id) {
        item.count -= 1;
        item.subPrice -= item.price;
        item.subDate -= item.date;
      }
      return item;
    });
    data.totalPrice = data.products.reduce(
      (acc, item) => acc + item.subPrice,
      0
    );
    data.totalDate = data.products.reduce((acc, item) => acc + item.subDate, 0);

    localStorage.setItem("cart", JSON.stringify(data));
    getCart();
  }

  function clearCart() {
    localStorage.removeItem("cart");
    getCart();
  }
  const values = {
    cart,
    getCart,
    addProductToCart,
    isAlreadyInCart,
    deleteProductFromCart,
    increaseCount,
    decreaseCount,
    clearCart,
  };

  return (
    <subscribeContext.Provider value={values}>
      {children}
    </subscribeContext.Provider>
  );
};

export default SubscribeContext;
