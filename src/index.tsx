import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppGlobalTheme from "./indexStyles";

const ele = document.getElementById("root");
const root = ReactDOM.createRoot(ele as HTMLElement);

root.render(
  <React.StrictMode>
    <AppGlobalTheme />
    <App />
  </React.StrictMode>
);
