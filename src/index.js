import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import NavigatorContext from "./contexts/NavigatorContext";
import Toastify from "./components/Toastify";
import AuthContext from "./contexts/AuthContext";
import SubscribeContext from "./contexts/SubscribeContext";
import "semantic-ui-css/semantic.min.css";
import CommentsContext from "./contexts/CommentsContext";
import FavouriteContext from "./contexts/FavouriteContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContext>
      <NavigatorContext>
        <SubscribeContext>
          <FavouriteContext>
            <CommentsContext>
              <Toastify />
              <App />
            </CommentsContext>
          </FavouriteContext>
        </SubscribeContext>
      </NavigatorContext>
    </AuthContext>
  </BrowserRouter>
);
