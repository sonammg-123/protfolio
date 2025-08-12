import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css"; // or "./style.css" depending on your file name

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
