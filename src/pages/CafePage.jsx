import React, { useEffect, useState } from "react";
import ListItemText from "@mui/material/ListItemText";
import axios from "axios";

const CafePage = () => {
  const [cafe, setCafe] = useState([]);

  async function getCafe() {
    try {
      const { data } = await axios.get("http://localhost:8000/cafe");
      setCafe(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCafe();
  }, []);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      {cafe.map((item) => {
        return (
          <div key={item.id}>
            <div>
              <div>
                <img width={200} src={item.image} />
              </div>
              <div>
                <ListItemText
                  primary={item.name}
                  secondary={item.destination}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CafePage;
