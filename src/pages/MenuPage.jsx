import React, { useEffect } from "react";
import NavigatorList from "../components/NavigatorList";
import { useSearchParams } from "react-router-dom";
import { useNavigatorContext } from "../contexts/NavigatorContext";
import { LIMIT } from "../utils/consts";
import { Box, Pagination } from "@mui/material";
import Filter from "../components/Filter";

const MenuPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { getPlaces, pageTotalCount, page, setPage } = useNavigatorContext();

  useEffect(() => {
    getPlaces();
  }, [searchParams]);

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);

    setSearchParams({
      ...currentParams,
      _page: page,
      _limit: LIMIT,
    });
  }, [page]);

  return (
    <div>
      <Box sx={{ maxWidth: "max-content", margin: "30px auto" }}>
        <Filter />
      </Box>
      <NavigatorList />
      <Box
        sx={{
          maxWidth: "max-content",
          margin: "50px auto",
          backgroundColor: "#7C9D96",
          borderRadius: "10px",
        }}
      >
        <Pagination
          count={pageTotalCount}
          page={page}
          onChange={(_, value) => setPage(value)}
        />
      </Box>
    </div>
  );
};

export default MenuPage;
