import React, { useEffect } from "react";
import NavigatorItem from "./NavigatorItem";
import { useNavigatorContext } from "../contexts/NavigatorContext";
import { Box, CircularProgress } from "@mui/material";

const NavigatorList = () => {
  const { places, getPlaces } = useNavigatorContext();

  useEffect(() => {
    setTimeout(() => {
      getPlaces();
    }, 50);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap", // Добавляем flex-wrap: wrap, чтобы элементы переносились на следующую строку при необходимости
        gap: "20px",
        justifyContent: "center", // Центрируем элементы по горизонтали
        alignItems: "center", // Выравниваем элементы по вертикали
        mt: 5,
        flexWrap: "wrap",
      }}
    >
      {places.length > 0 ? (
        places.map((item) => <NavigatorItem key={item.id} item={item} />)
      ) : (
        <div>
          <CircularProgress
            sx={{ mx: "auto", mt: 5, display: "block" }}
            size={100}
          />
        </div>
      )}
    </Box>
  );
};

export default NavigatorList;
