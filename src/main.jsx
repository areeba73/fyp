import React from "react";
import ReactDOM from "react-dom/client";

// 1. Tailwind wali CSS file ko yahan import karein (ZAROORI)
import "./index.css"; 

// 2. Bootstrap ko comment out kar dein agar Tailwind use karna hai
// import "bootstrap/dist/css/bootstrap.min.css"; 

import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);