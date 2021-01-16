import React from "react";
import Spinner from "./Spinner";

const Wind = ({ wind, sys, clouds, loading }) => {
  const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gridGap: "1rem",
    border: "none",
  };
  const color = {
    background: "#c0c5ce",
    "border-radius": "10px 10px",
  };

  const toUTC = (t) => {
    return new Date(t).toLocaleTimeString("en-US");
  };
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div style={userStyle}>
          <div className="card text-center" style={color}>
            <h1>
              <i className="fas fa-wind"></i>
            </h1>

            <h3>Wind</h3>
            <h2>{wind?.speed} m/s</h2>
          </div>
          <div className="card text-center" style={color}>
            <h1>
              <i className="fas fa-sun"></i>
            </h1>

            <h3>Sunrise</h3>
            <h2>{toUTC(sys?.sunrise)} UTC</h2>
          </div>
          <div className="card text-center" style={color}>
            <h1>
              <i className="fas fa-moon"></i>
            </h1>

            <h3>Sunset</h3>
          </div>
          <div className="card text-center" style={color}>
            <h1>
              <i className="fas fa-cloud"></i>
            </h1>

            <h3>Clouds</h3>
            <h4>{clouds?.all}%</h4>
          </div>
        </div>
      )}
    </>
  );
};

export default Wind;
