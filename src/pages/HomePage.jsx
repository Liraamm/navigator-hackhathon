import video from "../assets/video.mp4";
import { Button } from "@mui/material";
import * as React from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  React.useEffect(() => {
    setSearchParams({});
  }, []);

  return (
    <div className="home">
      <div className="overplay"></div>
      <video src={video} autoPlay loop muted />
      <div className="content">
        <h1>Kayakta</h1>
        {/* <p>Welcome</p> */}
        <Button
          variant="contained"
          sx={{
            margin: "20px",
            backgroundColor: "#E9B384",
            borderRadius: "100px 10px 100px 10px",
          }}
          onClick={() => navigate("/subscribe")}
        >
          Welcome
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
