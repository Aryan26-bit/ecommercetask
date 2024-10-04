import React from "react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Thank You for Your Purchase!</h1>
      <p>Your order has been successfully processed.</p>
      <button onClick={() => navigate("/")}>Go Back to Home</button>
    </div>
  );
};

export default ThankYou;
