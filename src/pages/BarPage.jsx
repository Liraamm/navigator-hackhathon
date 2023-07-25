import React, { useEffect, useState } from "react";
import ListItemText from "@mui/material/ListItemText";
import axios from "axios";

const BarPage = () => {
  const [bar, setBar] = useState([]);

  async function getBar() {
    try {
      const { data } = await axios.get("http://localhost:8000/bar");
      setBar(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBar();
  }, []);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      {bar.map((item) => {
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

export default BarPage;
