import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
const Checkout = ({ cartItems }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleConfirmPayment = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/thankyou");
    }, 2000);
  };
  return (
    <div style={{ paddingTop: "3vh" }}>
      <h2>Checkout</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
              }}
            >
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ${item.price * item.quantity}</p>
            </div>
          ))}
          <h3>
            Total Amount: $
            {cartItems.reduce(
              (acc, item) => acc + item.price * item.quantity,
              0
            )}
          </h3>
          <button
            onClick={handleConfirmPayment}
            style={{
              padding: "10px 20px",
              backgroundColor: "#38a3a5",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Confirm Payment
          </button>
          {loading && <Spinner />}
        </div>
      ) : (
        <p>No items in cart</p>
      )}
    </div>
  );
};

export default Checkout;
