import React, { createContext, useContext, useState } from "react";
import { notify } from "../components/Toastify";

const favouriteContext = createContext();

export function useFavouriteContext() {
  return useContext(favouriteContext);
}

const FavouriteProvider = ({ children }) => {
  const [favourite, setFavourite] = useState([]);

  function addToFavourite(place) {
    setFavourite((prevFavourite) => [...prevFavourite, place]);
    notify("success");
  }

  function removeFromFavourite(placeId) {
    setFavourite((prevFavourite) =>
      prevFavourite.filter((place) => place.id !== placeId)
    );
    notify("deleted");
  }

  const value = {
    favourite,
    addToFavourite,
    removeFromFavourite,
  };

  return (
    <favouriteContext.Provider value={value}>
      {children}
    </favouriteContext.Provider>
  );
};

export default FavouriteProvider;
