import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function Filter() {
  return (
    <ToggleButtonGroup>
      <ToggleButton value="all">All</ToggleButton>
      <ToggleButton value="emergency">Emergency</ToggleButton>
      <ToggleButton value="entertainment">Entertainment</ToggleButton>
      <ToggleButton value="shopping">Shopping</ToggleButton>
      <ToggleButton value="food">Food</ToggleButton>
      <ToggleButton value="nature">Nature</ToggleButton>
    </ToggleButtonGroup>
  );
}
