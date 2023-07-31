import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useSubscribeContext } from "../contexts/SubscribeContext";

export default function BasicCard() {
  const { addProductToCart, isAlreadyInCart, deleteProductFromCart } =
    useSubscribeContext();

  const subPro = {
    id: Date.now(),
    title: "Pro",
    description: "Pro Subs",
    price: 15,
    date: 30,
  };

  const subExtra = {
    id: Date.now(),
    title: "Extra",
    description: "Extra Subs",
    price: 30,
    date: 60,
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "row",
        backgroundImage: "url(https://wallpaperaccess.com/full/333537.jpg)",
      }}
    >
      {/* First card */}
      <Card sx={{ width: "25vw", height: "40vh", margin: "10%" }}>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            sub/price
          </Typography>
          <Typography variant="h5" component="div">
            0$/mo
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            standard
          </Typography>
          <Typography variant="body2">
            standard type of sub
            <br />
            {'"free type of sub"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            size="small"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "30%",
            }}
          >
            Sign Up
          </Button>
        </CardActions>
      </Card>

      {/* Second Card */}
      <Card
        sx={{
          width: "25vw",
          height: "40vh",
          margin: "10%",
          backgroundColor: "gray",
          borderRadius: "40px 40px 40px 40px",
        }}
      >
        <CardContent sx={{ textAlign: "center", color: "white" }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            sub/price
          </Typography>
          <Typography variant="h5" component="div">
            15$/mo
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="black" fontSize="25px">
            Pro
          </Typography>
          <Typography variant="body2">
            Pro type of sub
            <br />
            {'"free type of sub"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => addProductToCart(subPro)}
            variant="contained"
            size="small"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "33%",
            }}
          >
            Get
          </Button>
        </CardActions>
      </Card>

      {/* Third Card */}
      <Card
        sx={{
          width: "30vw",
          height: "40vh",
          margin: "10%",
          backgroundColor: "gold",
          borderRadius: "40px 40px 40px 40px",
        }}
      >
        <CardContent sx={{ textAlign: "center", color: "white" }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            sub/price
          </Typography>
          <Typography variant="h5" component="div">
            30$/mo
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="black" fontSize="25px">
            Extra
          </Typography>
          <Typography variant="body2">
            Extra type of sub
            <br />
            {'"free type of sub"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => addProductToCart(subExtra)}
            variant="contained"
            size="small"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "35%",
            }}
          >
            Get
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
