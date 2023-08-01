import React, { createContext, useContext } from "react";

const favoritesContext = createContext();

export function useFavoriteContext() {
  return useContext(favoritesContext);
}

function getDataFromLS() {
  let data = JSON.parse(localStorage.getItem("favorite")) || [];
  return data;
}

const FavoritesContext = () => {
  return <div></div>;
};

export default FavoritesContext;
