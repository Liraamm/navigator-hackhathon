import { Box, CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigatorContext } from "../contexts/NavigatorContext";
import NavigatorItem from "./NavigatorItem";

const NavigatorList = () => {
  const { places, getPlaces } = useNavigatorContext();
  useEffect(() => {
    getPlaces();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        rowGap: "30px",
        // flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        mt: 5,
      }}
    >
      {places.length > 0 ? (
        places.map((item) => <NavigatorItem key={item.id} item={item} />)
      ) : (
        <div>
          <CircularProgress
            sx={{ mx: "auto", mt: 5, displaY: "block" }}
            size={100}
          />
        </div>
      )}
    </Box>
  );
};

export default NavigatorList;
