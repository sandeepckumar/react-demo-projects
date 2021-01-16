import spinner from "./loading.png";
import React from "react";

const Spinner = () => {
  return (
    <>
      <img
        src={spinner}
        alt="loading"
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </>
  );
};

export default Spinner;
