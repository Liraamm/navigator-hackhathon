import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import NavigatorContext from "./contexts/NavigatorContext";
import Toastify from "./components/Toastify";
import AuthContext from "./contexts/AuthContext";
import SubscribeContext from "./contexts/SubscribeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContext>
      <NavigatorContext>
        <SubscribeContext>
          <Toastify />
          <App />
        </SubscribeContext>
      </NavigatorContext>
    </AuthContext>
  </BrowserRouter>
);
