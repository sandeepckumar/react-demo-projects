import React from "react";

const Fahren = ({ temp, min, max, feels_like }) => {
  const cel_to_fah = (c) => {
    return (c * (9 / 5) + 32).toFixed(2);
  };
  const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gridGap: "1rem",
  };
  const color = {
    background: "#65737e",
    "border-radius": "10px 10px",
  };
  return (
    <>
      <div className="card text-center" style={color}>
        <h2>Current Temperature: {cel_to_fah(temp)}°F | °C</h2>
      </div>
      <div style={userStyle}>
        <div className="card text-center" style={color}>
          <h3>Min</h3>
          <h2>{cel_to_fah(min)}°F</h2>
        </div>

        <div className="card text-center" style={color}>
          <h3>Max</h3>
          <h2>{cel_to_fah(max)}°F</h2>
        </div>

        <div className="card text-center" style={color}>
          <h3>Feels Like</h3>
          <h2>{cel_to_fah(feels_like)}°F</h2>
        </div>
      </div>
    </>
  );
};

export default Fahren;
