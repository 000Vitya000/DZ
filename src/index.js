// import ReactDOM from "react-dom";
import App from "./App";
import "./i18n";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/style.scss";
import reportWebVitals from "./reportWebVitals";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
