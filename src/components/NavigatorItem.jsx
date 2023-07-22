import React from "react";
import { Button } from "@mui/material";
import { useNavigatorContext } from "../contexts/NavigatorContext";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const NavigatorItem = ({ item }) => {
  const { removePlace } = useNavigatorContext();
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="icon">
        <img width={150} src={item.image} />
      </div>
      <strong>{item.title}</strong>
      <div className="card__body">{item.description}</div>
      <div className="card__body">Category: {item.category}</div>
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <p>Learn more</p>
        <Button
          sx={{ textTransform: "capitalize", color: "#e50087", gap: "5px" }}
          onClick={() => navigate(`/update/${item.id}`)}
        >
          Edit
          {<BorderColorIcon fontSize="small" />}
        </Button>
        <Button
          sx={{ textTransform: "capitalize", color: "#e50087", gap: "5px" }}
          onClick={() => removePlace(item.id)}
        >
          Delete
          {<DeleteIcon fontSize="small" />}
        </Button>
      </span>
    </div>
  );
};

export default NavigatorItem;
