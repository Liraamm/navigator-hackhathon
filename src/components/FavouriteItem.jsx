import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useFavouriteContext } from "../contexts/FavouriteContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { isAdmin } from "@firebase/util";

const FavouriteItem = ({ item }) => {
  const { removeFromFavourite } = useFavouriteContext();

  const navigate = useNavigate();

  const handleRemoveFromFavourite = () => {
    removeFromFavourite(item.id);
  };

  return (
    <div className="card">
      <div>
        <div className="icon">
          <img width={150} src={item.image} alt={item.title} />
        </div>
        <strong>{item.title}</strong>
        <div className="card__body">Category: {item.category}</div>
        <div className="card__body">{item.description}</div>
      </div>
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <p>
          To get help
          <p>
            <a
              style={{
                textDecoration: "none",
                color: "#f4f2de",
              }}
              href="https://t.me/navBotikBot"
              target="_blank"
              rel="noopener noreferrer"
            >
              click here
            </a>
          </p>
        </p>
        <Link to={item.path}>
          <Button
            sx={{
              textTransform: "capitalize",
              color: "#F4F2DE",
              gap: "5px",
              fontSize: "0.5em",
            }}
          >
            Learn more
          </Button>
        </Link>
        <Link to={`/comments/${item.id}`}>
          <Button
            sx={{
              textTransform: "capitalize",
              color: "#F4F2DE",
              gap: "5px",
              fontSize: "0.5em",
            }}
          >
            Comments
          </Button>
        </Link>
        <Button
          sx={{
            textTransform: "capitalize",
            color: "#F4F2DE",
            gap: "5px",
            fontSize: "0.5em",
          }}
          onClick={handleRemoveFromFavourite}
        >
          Remove from Favourite
          <FavoriteIcon fontSize="small" />
        </Button>
        {isAdmin() && (
          <>
            <Button
              sx={{
                textTransform: "capitalize",
                color: "#F4F2DE",
                gap: "5px",
                fontSize: "0.5em",
              }}
              onClick={() => navigate(`/update/${item.id}`)}
            >
              Edit
              <BorderColorIcon fontSize="small" />
            </Button>
            <Button
              sx={{
                textTransform: "capitalize",
                color: "#F4F2DE",
                gap: "5px",
                fontSize: "0.5em",
              }}
            >
              Delete
              <DeleteIcon fontSize="small" />
            </Button>
          </>
        )}
      </span>
    </div>
  );
};

export default FavouriteItem;
