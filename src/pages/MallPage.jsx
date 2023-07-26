import React, { useEffect, useState } from "react";
import ListItemText from "@mui/material/ListItemText";
import axios from "axios";

const MallPage = () => {
  const [mall, setMall] = useState([]);

  async function getMall() {
    try {
      const { data } = await axios.get("http://localhost:8000/mall");
      setMall(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMall();
  }, []);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      {mall.map((item) => {
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

export default MallPage;
