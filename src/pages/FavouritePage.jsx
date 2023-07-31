import { Box, Container } from "@mui/system";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSubscribeContext } from "../contexts/SubscribeContext";
import {
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const CartPage = () => {
  const {
    cart,
    getCart,
    addProductToCart,
    isAlreadyInCart,
    deleteProductFromCart,
    increaseCount,
    decreaseCount,
    clearCart,
  } = useSubscribeContext();
  const navigate = useNavigate();

  useEffect(() => {
    getCart();
  }, []);

  console.log(cart);

  if (cart.products.length < 1) {
    return (
      <>
        <Container>
          <div className="bag-content">
            <div className="header">
              <h1 className="bag-header">Your cart is empty</h1>
              <div className="bag-header-message">
                <span>Sign In to see if you have purchased subs.</span>
                <span style={{ marginLeft: "8px" }}>Or continue shopping</span>
              </div>
            </div>
            <div className="bag-buttons">
              <Button variant="contained" onClick={() => navigate("/auth")}>
                Sign in
              </Button>
              <Button variant="contained" onClick={() => navigate("/")}>
                Continue
              </Button>
            </div>
          </div>
        </Container>
      </>
    );
  }
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="left">Days</TableCell>
            <TableCell align="end">Sub Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.products.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.title}
              </TableCell>
              <TableCell align="right"></TableCell>

              <TableCell align="right">{item.price}</TableCell>
              <TableCell align="right">{item.subPrice}</TableCell>
              <TableCell sx={{ display: "flex", alignItems: "center" }}>
                <Typography component={"span"} variant="h6">
                  {item.count}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CartPage;
