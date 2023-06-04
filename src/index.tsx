import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const ele = document.getElementById("root");
const root = ReactDOM.createRoot(ele as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
