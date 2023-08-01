import { Box, Container } from "@mui/system";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useFavouriteContext } from "../contexts/FavouriteContext";
import FavouriteItem from "../components/FavouriteItem";

const FavouritePage = () => {
  const { favourite, addToFavourite } = useFavouriteContext();
  const navigate = useNavigate();

  useEffect(() => {}, []);

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
    <Container>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "16px",
          justifyContent: "center",
          mt: 5,
        }}
      >
        {favourite.map((item) => (
          <FavouriteItem
            key={item.id}
            item={item}
            sx={{ height: "100%", overflow: "auto" }}
          />
        ))}
      </Box>
    </Container>
  );
};

export default FavouritePage;
