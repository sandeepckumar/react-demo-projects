import "./App.css";
import React, { useEffect, useState } from "react";
import { Navbar, Search, WeatherCard, Wind } from "./components";
import axios from "axios";
import apiKey from "./apikey";

function App() {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      setLoading(true);
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=${apiKey}&units=metric`
      );
      setWeather(res.data);
      setLoading(false);
    })();
  }, []);

  const getTemp = async (city) => {
    try {
      setLoading(true);
      setWeather({});
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const getForecast = async (city) => {};

  const { wind, clouds, sys } = weather;

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Search getTemp={getTemp} />
        <WeatherCard weather={weather} loading={loading} />
        <Wind wind={wind} clouds={clouds} sys={sys} />
      </div>
    </div>
  );
}

export default App;
