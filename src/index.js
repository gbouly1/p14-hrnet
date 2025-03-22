import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { EmployeeProvider } from "./context/EmployeeContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <EmployeeProvider>
        <App />
      </EmployeeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
