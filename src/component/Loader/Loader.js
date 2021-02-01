import React from "react";
import loader from "../../../src/assets/loader.svg";

const Loader = () => {
  return (
    <div className="text-center mt-5">
      <img src={loader} alt="Loader" />
    </div>
  );
};

export default Loader;
