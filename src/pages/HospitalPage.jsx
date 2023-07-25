import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box/Box";
import axios from "axios";

const HospitalPage = () => {
  const [hospital, setHospital] = useState([]);

  async function getHospitals() {
    try {
      const { data } = await axios.get("http://localhost:8000/hospital");
      setHospital(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getHospitals();
  }, []);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      {hospital.map((item) => {
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

export default HospitalPage;
