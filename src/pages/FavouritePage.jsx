import { Box, Container } from "@mui/system";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useFavouriteContext } from "../contexts/FavouriteContext";
import FavouriteItem from "../components/FavouriteItem";

const FavouritePage = () => {
  const { favourite, addToFavourite } = useFavouriteContext();
  const navigate = useNavigate();

  useEffect(() => {
    // Ваш код для получения избранных мест (если требуется)
    // Например, если у вас есть данные из API, можно сделать запрос здесь
    // и установить полученные данные в стейт favourite
  }, []);

  if (favourite.length < 1) {
    return (
      <Container>
        <Box sx={{ mt: 5 }}>
          <p>Your favourite list is empty.</p>
        </Box>
      </Container>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt: 5,
      }}
    >
      {/* {favourite.map((item) => (
        <FavouriteItem key={item.id} item={item} />
      ))} */}
      {favourite.map((item) => (
        <FavouriteItem key={item.id} item={item} />
      ))}
    </Box>
  );
};

export default FavouritePage;
