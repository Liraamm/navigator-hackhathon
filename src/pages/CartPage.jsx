import { Box, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSubscribeContext } from "../contexts/SubscribeContext";
import { Button, IconButton } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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

  console.log(cart.products);

  if (cart.products.length < 1) {
    return (
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: 5,
          }}
        >
          <Typography variant="h5" gutterBottom>
            Your cart is empty
          </Typography>
          <Typography variant="body1" gutterBottom>
            Sign In to see if you have purchased subs.
            <br /> Or continue shopping.
          </Typography>
          <Box sx={{ mt: 2, display: "flex", gap: "10px" }}>
            <Button variant="contained" onClick={() => navigate("/auth")}>
              Sign in
            </Button>
            <Button variant="contained" onClick={() => navigate("/")}>
              Continue
            </Button>
          </Box>
        </Box>
      </Container>
    );
  }

  return (
    <Container>
      <TableContainer component={Paper} sx={{ mt: 5 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Days</TableCell>
              <TableCell align="right">Sub Price</TableCell>
              <TableCell align="right">Total Price</TableCell>
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
                <TableCell align="right">{item.date}</TableCell>
                <TableCell align="right">${item.price}</TableCell>
                <TableCell align="right">${item.subPrice}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableRow>
            <TableCell colSpan={4} /> {/* This fills the cell to the end */}
            <TableCell align="right">Total Days: {cart.totalDate}</TableCell>
            <TableCell align="right">Total Price: ${cart.totalPrice}</TableCell>
          </TableRow>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 3,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Total Days: {cart.totalDate}
        </Typography>
        <Typography variant="h5" gutterBottom>
          Total Price: ${cart.totalPrice}
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{ mt: 2, width: "200px" }}
        >
          Buy
        </Button>
      </Box>
    </Container>
  );
};

export default CartPage;
