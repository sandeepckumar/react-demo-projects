import React from "react";

const Celcius = ({ temp, min, max, feels_like }) => {
  const kel_to_cel = (k) => {
    return (k - 273.15).toFixed(2);
  };
  return (
    <>
      <h3>Current Temperature: {kel_to_cel(temp)}°C | °F</h3>
      <h3>
        Min: {kel_to_cel(min)}°C Max: {kel_to_cel(max)}°C Feels Like:{" "}
        {kel_to_cel(feels_like)}°C
      </h3>
    </>
  );
};

export default Celcius;
