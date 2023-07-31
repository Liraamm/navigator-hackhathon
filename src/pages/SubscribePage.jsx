import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useSubscribeContext } from "../contexts/SubscribeContext";

const BasicCard = () => {
  const { addProductToCart } = useSubscribeContext();

  const subStandard = {
    id: Date.now(),
    title: "Standard",
    description: "Standard Subs",
    price: 0,
    date: 0,
  };

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
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "#f0f0f0",
        height: "100vh",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <Card
        sx={{
          width: "200px",
          height: "300px",
          margin: "10px",
          backgroundColor: "#FAD0C9",
        }}
      >
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h5" component="div">
            0$/mo
          </Typography>
          <Typography
            sx={{ mb: 1.5, fontSize: "17px", color: "black" }}
            color="text.secondary"
          >
            STANDARD
          </Typography>
          <Typography variant="body2">
            This is Standard type of subscription
            <br />
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

      <Card
        sx={{
          width: "200px",
          height: "300px",
          margin: "10px",
          backgroundColor: "#FF9A8B",
          borderRadius: "10px",
        }}
      >
        <CardContent sx={{ textAlign: "center", color: "white" }}>
          <Typography variant="h5" component="div">
            15$/mo
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="black" fontSize="25px">
            PRO
          </Typography>
          <Typography variant="body2">
            This type of subscription allows you to get more content, and
            support us
            <br />
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

      <Card
        sx={{
          width: "200px",
          height: "300px",
          margin: "10px",
          backgroundColor: "#FF6B6B",
          borderRadius: "10px",
        }}
      >
        <CardContent sx={{ textAlign: "center", color: "white" }}>
          <Typography variant="h5" component="div">
            30$/mo
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="black" fontSize="25px">
            Extra
          </Typography>
          <Typography variant="body2">
            Extra type of subscription will give you full content of our project
            <br />
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
};

export default BasicCard;
