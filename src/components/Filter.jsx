import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { LIMIT } from "../utils/consts";
import { useNavigatorContext } from "../contexts/NavigatorContext";

export default function Filter() {
  const { setPage } = useNavigatorContext();
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
      setSearchParams({
        _limit: LIMIT,
        _page: _page || 1,
        q: q || "",
      });
    } else {
      setSearchParams({
        ...currentParams,
        category,
        _page: 1,
      });
      setPage(1);
    }
  }, [category]);

  return (
    <ToggleButtonGroup
      // color="primary"
      sx={{
        // backgroundColor: "#F4F2DE",
        flexWrap: "wrap",
      }}
      value={category}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton
        sx={{
          backgroundColor: "#F4F2DE",
          color: "#E9B384",
          border: "1px solid #E9B384",
        }}
        value="all"
      >
        All
      </ToggleButton>
      <ToggleButton
        sx={{
          backgroundColor: "#F4F2DE",
          color: "#E9B384",
          border: "1px solid #E9B384",
        }}
        value="Emergency"
      >
        Emergency
      </ToggleButton>
      <ToggleButton
        sx={{
          backgroundColor: "#F4F2DE",
          color: "#E9B384",
          border: "1px solid #E9B384",
        }}
        value="Entertainment"
      >
        Entertainment
      </ToggleButton>
      <ToggleButton
        sx={{
          backgroundColor: "#F4F2DE",
          color: "#E9B384",
          border: "1px solid #E9B384",
        }}
        value="Shopping"
      >
        Shopping
      </ToggleButton>
      <ToggleButton
        sx={{
          backgroundColor: "#F4F2DE",
          color: "#E9B384",
          border: "1px solid #E9B384",
        }}
        value="Food"
      >
        Food
      </ToggleButton>
      <ToggleButton
        sx={{
          backgroundColor: "#F4F2DE",
          color: "#E9B384",
          border: "1px solid #E9B384",
        }}
        value="Nature"
      >
        Nature
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
