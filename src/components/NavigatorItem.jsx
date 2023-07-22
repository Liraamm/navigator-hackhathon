import React from "react";
import { Button } from "@mui/material";
import { useNavigatorContext } from "../contexts/NavigatorContext";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

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
          justifyContent: "center",
        }}
      >
        <p>Learn more</p>
        <div>
          <Button>Edit</Button>
          <Button
            size="large"
            endIcon={<DeleteIcon />}
            onClick={() => removePlace(item.id)}
          ></Button>
        </div>
      </span>
    </div>
  );
};

export default NavigatorItem;
