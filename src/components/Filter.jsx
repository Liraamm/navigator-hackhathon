import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(
    searchParams.get("category") || "all"
  );
  const handleChange = (_, value) => {
    value && setCategory(value);
  };

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    if (category === "all") {
      const { _limit, _page, q } = currentParams;
      setSearchParams({});
    } else {
      setSearchParams({
        ...currentParams,
        category,
        _page: 1,
      });
    }
  }, [category]);

  return (
    <ToggleButtonGroup
      color="primary"
      value={category}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="all">All</ToggleButton>
      <ToggleButton value="Emergency">Emergency</ToggleButton>
      <ToggleButton value="Entertainment">Entertainment</ToggleButton>
      <ToggleButton value="Shopping">Shopping</ToggleButton>
      <ToggleButton value="Food">Food</ToggleButton>
      <ToggleButton value="Nature">Nature</ToggleButton>
    </ToggleButtonGroup>
  );
}
