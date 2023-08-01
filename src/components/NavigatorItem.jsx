import React from "react";
import { Button, Box } from "@mui/material";
import { useNavigatorContext } from "../contexts/NavigatorContext";
import { Link, useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { useAuthContext } from "../contexts/AuthContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useFavouriteContext } from "../contexts/FavouriteContext";

const NavigatorItem = ({ item }) => {
  const { removePlace } = useNavigatorContext();
  const { addToFavourite } = useFavouriteContext();
  const { isAdmin } = useAuthContext();
  const navigate = useNavigate();

  return (
    <Box
      className="card"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
        borderRadius: "5px",
        width: "100%",
        maxWidth: "300px",
        margin: "10px",
        "@media (max-width: 768px)": {
          maxWidth: "100%",
        },
      }}
    >
      <div>
        <div className="icon">
          <img width={150} src={item.image} alt={item.title} />
        </div>
        <strong
          style={{
            fontSize: "1.2rem",
            margin: "10px 0",
          }}
        >
          {item.title}
        </strong>
        <div
          className="card__body"
          style={{
            color: "#464853",
            fontSize: "1rem",
            lineHeight: "1.2",
          }}
        >
          Category: {item.category}
        </div>
        <div
          className="card__body"
          style={{
            color: "#464853",
            fontSize: "1rem",
            lineHeight: "1.2",
          }}
        >
          {item.description}
        </div>
      </div>
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <p style={{ fontSize: "0.8rem", marginBottom: "5px" }}>
          To get help
          <a
            style={{
              textDecoration: "none",
              color: "#f4f2de",
              fontSize: "0.8rem",
            }}
            href="https://t.me/navBotikBot"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here
          </a>
        </p>
        <Link to={item.path}>
          <p
            style={{
              textDecoration: "none",
              color: "#f4f2de",
              fontSize: "0.8rem",
            }}
          >
            Learn more
          </p>
        </Link>
        <Link to={`/comments/${item.id}`}>
          <p
            style={{
              textDecoration: "none",
              color: "#f4f2de",
              fontSize: "0.8rem",
            }}
          >
            Comments
          </p>
        </Link>
        {isAdmin() && (
          <>
            <Button
              variant="contained"
              style={{
                textTransform: "capitalize",
                color: "#F4F2DE",
                gap: "5px",
                fontSize: "0.8rem",
                backgroundColor: "transparent", // Убираем фон кнопки
                "&:hover": {
                  backgroundColor: "transparent", // Убираем фон при наведении
                },
              }}
              onClick={() => navigate(`/update/${item.id}`)}
            >
              Edit
              {<BorderColorIcon fontSize="small" />}
            </Button>
            <Button
              variant="contained"
              style={{
                textTransform: "capitalize",
                color: "#F4F2DE",
                gap: "5px",
                fontSize: "0.8rem",
                backgroundColor: "transparent", // Убираем фон кнопки
                "&:hover": {
                  backgroundColor: "transparent", // Убираем фон при наведении
                },
              }}
              onClick={() => removePlace(item.id)}
            >
              Delete
              {<DeleteIcon fontSize="small" />}
            </Button>
            <Button
              variant="contained"
              style={{
                textTransform: "capitalize",
                color: "#F4F2DE",
                gap: "5px",
                fontSize: "0.8rem",
                backgroundColor: "transparent", // Убираем фон кнопки
                "&:hover": {
                  backgroundColor: "transparent", // Убираем фон при наведении
                },
              }}
              onClick={() => addToFavourite(item)}
            >
              Add to Favourite
              {<FavoriteIcon fontSize="small" />}
            </Button>
          </>
        )}
      </span>
    </Box>
  );
};

export default NavigatorItem;
