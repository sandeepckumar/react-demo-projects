import React from "react";

const Celcius = ({ min, max, temp, feels_like }) => {
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
        <h2>Current Temperature: {temp}°C | °F</h2>
      </div>
      <div style={userStyle}>
        <div className="card text-center" style={color}>
          <h3>Min</h3>
          <h2>{min}°C</h2>
        </div>

        <div className="card text-center" style={color}>
          <h3>Max</h3>
          <h2>{max}°C</h2>
        </div>

        <div className="card text-center" style={color}>
          <h3>Feels Like</h3>
          <h2>{feels_like}°C</h2>
        </div>
      </div>
    </>
  );
};

export default Celcius;
