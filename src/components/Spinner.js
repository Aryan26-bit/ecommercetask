import React from "react";
import "./../Styles/Spinner.css";

const Spinner = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner"></div>
      {/* <p>Processing Payment</p> */}
    </div>
  );
};

export default Spinner;
