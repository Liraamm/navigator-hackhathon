import React from "react";
import { Button } from "@mui/material";
import { useNavigatorContext } from "../contexts/NavigatorContext";
import { Link, useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { useAuthContext } from "../contexts/AuthContext";

const NavigatorItem = ({ item }) => {
  const { removePlace } = useNavigatorContext();
  const { isAdmin } = useAuthContext();
  const navigate = useNavigate();

  return (
    <div className="card">
      <div>
        <div className="icon">
          <img width={150} src={item.image} />
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
          <a href="https://t.me/navBotikBot" target="_blank">
            click here
          </a>
        </p>
        <Link to={item.path}>
          <p>Learn more</p>
        </Link>
        {isAdmin() && (
          <>
            <Button
              sx={{ textTransform: "capitalize", color: "#F4F2DE", gap: "5px" }}
              onClick={() => navigate(`/update/${item.id}`)}
            >
              Edit
              {<BorderColorIcon fontSize="small" />}
            </Button>
            <Button
              sx={{ textTransform: "capitalize", color: "#F4F2DE", gap: "5px" }}
              onClick={() => removePlace(item.id)}
            >
              Delete
              {<DeleteIcon fontSize="small" />}
            </Button>
          </>
        )}
      </span>
    </div>
  );
};

export default NavigatorItem;
