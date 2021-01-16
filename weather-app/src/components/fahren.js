import React from "react";

const Fahren = ({ temp, min, max, feels_like }) => {
  const kel_to_fah = (k) => {
    return (k * (9 / 5) - 459.67).toFixed(2);
  };
  return (
    <>
      <h3>Current Temperature: {kel_to_fah(temp)}°F | °C</h3>
      <h3>
        Min: {kel_to_fah(min)}°F Max: {kel_to_fah(max)}°F Feels Like:{" "}
        {kel_to_fah(feels_like)}°F
      </h3>
    </>
  );
};

export default Fahren;
