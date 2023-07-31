import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const PolicePage = () => {
  const [police, setPolice] = useState([]);

  async function getPolice() {
    try {
      const { data } = await axios.get("http://localhost:8000/police");
      setPolice(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPolice();
  }, []);
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
      }}
    >
      {police.map((item) => {
        return (
          <Card sx={{ maxWidth: 345, margin: "0 auto", marginTop: "40px" }}>
            <CardActionArea key={item.id}>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.destination}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </div>
  );
};

export default PolicePage;
