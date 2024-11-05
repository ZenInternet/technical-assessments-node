import React from "react";
import "./App.css";
import { ProductTable } from "./components";

const currencies = {
  USD: "$",
  EUR: "€",
  JPY: "¥",
  GBP: "£",
};

function App() {
  return (
    <div className="App">
      <nav
        style={{
          backgroundColor: "teal",
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          color: "white",
        }}
      >
        <img
          src="zen-logo.svg"
          alt="Logo"
          style={{ height: "40px", marginRight: "1rem" }}
        />
        <span>Zen Technical Assessment</span>
      </nav>
      <ProductTable />
    </div>
  );
}

export default App;
