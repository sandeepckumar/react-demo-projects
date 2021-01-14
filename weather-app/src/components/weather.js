import React from "react";

const WeatherCard = ({ weather }) => {
  console.log(weather.name);
  const { name, sys, main } = weather;
  const kel_to_cel = (k) => {
    return (k - 273.15).toFixed(2);
  };

  return (
    <div className="card text-center">
      <h1>
        {name}, {sys.country}
      </h1>
      <h3>Current Temperature: {kel_to_cel(main.temp)}°C</h3>
      <h3>
        Min: {kel_to_cel(main.temp_min)}°C Max: {kel_to_cel(main.temp_max)}°C
        Feels Like: {kel_to_cel(main.feels_like)}°C
      </h3>
    </div>
  );
};

export default WeatherCard;
