import video from "../assets/video.mp4";
import { Button } from "@mui/material";
import * as React from "react";

const HomePage = () => {
  return (
    <div className="home">
      <div className="overplay"></div>
      <video src={video} autoPlay loop muted />
      <div className="content">
        <h1>City Map</h1>
        {/* <p>Welcome</p> */}
        <Button
          variant="contained"
          sx={{
            margin: "20px",
            backgroundColor: "black",
            borderRadius: "100px 10px 100px 10px",
          }}
        >
          Welcome
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
