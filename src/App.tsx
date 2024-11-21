import React from "react";
import "./App.css";
import { ProductTable } from "./components";

const App = () => {
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
        <div style={{ marginLeft: "auto" }}>
          Region:
          <select>
            <option value="UK">UK ☕</option>
            <option value="US">USA 🌎</option>
            <option value="EU">EU ⭐</option>
            <option value="JP">Japan 🗻</option>
          </select>
        </div>
      </nav>
      <ProductTable />
    </div>
  );
};

export default App;
