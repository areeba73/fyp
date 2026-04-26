import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; 
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// --- Ye do lines add karni hain ---
import { Provider } from "react-redux";
import { store } from "./store/store"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}> {/* 1. Provider se wrap karein */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);