import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppGlobalTheme from "./indexStyles";
import AppTheme from "./styles/theme/AppTheme";

const ele = document.getElementById("root");
const root = ReactDOM.createRoot(ele as HTMLElement);

const theme: ThemeInterface = AppTheme;

root.render(
  <React.StrictMode>
    <AppGlobalTheme theme={theme} />
    <App />
  </React.StrictMode>
);
