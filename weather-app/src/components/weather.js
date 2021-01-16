import React, { useState } from "react";
import Spinner from "./Spinner";
import Celcius from "./Celcius";
import Fahren from "./fahren";

const WeatherCard = ({ weather, loading }) => {
  const { name, sys, main } = weather;
  const [cel, setCel] = useState(true);
  const styles = {
    background: "#343d46",
    "border-radius": "10px 10px",
    color: "white",
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {cel ? (
            <div
              className="card text-center"
              onClick={() => setCel(!cel)}
              style={styles}
            >
              <h1>
                {name}, {sys?.country}
              </h1>
              <Celcius
                temp={main?.temp}
                min={main?.temp_min}
                max={main?.temp_max}
                feels_like={main?.feels_like}
              />
            </div>
          ) : (
            <div
              className="card text-center"
              onClick={() => setCel(!cel)}
              style={styles}
            >
              <h1>
                {name}, {sys?.country}
              </h1>
              <Fahren
                temp={main?.temp}
                min={main?.temp_min}
                max={main?.temp_max}
                feels_like={main?.feels_like}
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default WeatherCard;
