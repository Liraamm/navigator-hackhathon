import { Button } from "@mui/material";
import React from "react";

const NavigatorItem = ({ item }) => {
  return (
    <div class="card">
      <div class="icon">
        <img width={150} src={item.image} />
      </div>
      <strong>{item.title}</strong>
      <div class="card__body">{item.description}</div>
      <div class="card__body">Category: {item.category}</div>
      <span>
        <p>Learn more</p>
        <div>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </div>
      </span>
    </div>
  );
};

export default NavigatorItem;
