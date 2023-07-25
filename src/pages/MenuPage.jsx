import React, { useEffect } from "react";
import NavigatorList from "../components/NavigatorList";
import Filter from "../components/Filter";
import { Box } from "@mui/material";
import { useNavigatorContext } from "../contexts/NavigatorContext";

const MenuPage = () => {
  const { getPlaces } = useNavigatorContext();

  useEffect(() => {
    getPlaces();
  });

  return (
    <div>
      <Box sx={{ maxWidth: "max-content", margin: "30px auto" }}>
        <Filter />
      </Box>
      <NavigatorList />
    </div>
  );
};

export default MenuPage;
