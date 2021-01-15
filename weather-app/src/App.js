import "./App.css";
import React, { useEffect, useState } from "react";
import { Navbar, Search, WeatherCard } from "./components";
import axios from "axios";
import apiKey from "./apikey";

function App() {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      setLoading(true);
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=${apiKey}`
      );
      console.log("apiresponse", res);
      setWeather(res.data);
      setLoading(false);
    })();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Search />
        <WeatherCard weather={weather} loading={loading} />
      </div>
    </div>
  );
}

export default App;
