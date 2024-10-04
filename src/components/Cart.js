import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, updateQuantity, removeFromCart }) => {
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleIncrement = (id) => {
    updateQuantity(id, (prevQty) => prevQty + 1);
  };

  const handleDecrement = (id) => {
    updateQuantity(id, (prevQty) => (prevQty > 1 ? prevQty - 1 : 1));
  };

  return (
    <div>
      <h2>Cart Summary</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-items-alignment">
              <div className="cart-inside-elements-alignment">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <div>
                  <button onClick={() => handleDecrement(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item.id)}>+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
              <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>
      )}
      <div
        style={{
          padding: "3vh",
          display: "flex",
          flexDirection: "column",
          gap: "2vh",
        }}
      >
        <h3>Total: ${totalAmount.toFixed(2)}</h3>
        <Link to="/checkout">
          <button
            style={{
              padding: "10px",
              background: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
