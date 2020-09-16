import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { Auth } from "./context/store/Auth";

ReactDOM.render(
  <Auth>
    <App />
  </Auth>,
  document.getElementById("app")
);
