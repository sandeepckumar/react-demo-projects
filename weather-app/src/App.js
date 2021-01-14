import "./App.css";
import React, { useEffect, useState } from "react";
import { Navbar, Search } from "./components";
import axios from "axios";
import apiKey from "./apikey";

function App() {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getWeather = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=${apiKey}`
        );
        console.log(res);
        setWeather(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getWeather();
  }, []);

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
