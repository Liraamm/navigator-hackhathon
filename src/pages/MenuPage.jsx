import React, { useEffect } from "react";
import NavigatorList from "../components/NavigatorList";
import { useSearchParams } from "react-router-dom";
import { useNavigatorContext } from "../contexts/NavigatorContext";
import { LIMIT } from "../utils/consts";
import { Box, Pagination } from "@mui/material";

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
      <NavigatorList />
      <Box
        sx={{
          maxWidth: "max-content",
          margin: "50px auto",
          backgroundColor: "#35A29F",
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
