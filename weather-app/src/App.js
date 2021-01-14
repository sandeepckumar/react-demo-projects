import "./App.css";
import React from "react";
import { Navbar, Search } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Search />
      </div>
    </div>
  );
}

export default App;
