import React from "react";
import { Link } from "react-router-dom";
import "./../Styles/Cart.css";

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
    <div className="cart-container">
      <div style={{ width: "100%" }}>
        <div className="cart-table">
          <h2>Product</h2>
          <h2>Price</h2>
          <h2>Quantity</h2>
          <h2>Subtotal</h2>
        </div>

        {cartItems.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item-row">
              <div className="cart-product-details">
                <div>
                  {" "}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove-btn"
                  >
                    x
                  </button>
                </div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div>
                  <h3>{item.name}</h3>
                  <p>
                    {item.size} | {item.color}
                  </p>
                </div>
              </div>
              <p className="cart-item-price">£{item.price}</p>
              <div className="cart-quantity">
                <button
                  onClick={() => handleDecrement(item.id)}
                  className="qty-btn"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleIncrement(item.id)}
                  className="qty-btn"
                >
                  +
                </button>
              </div>
              <p className="cart-item-subtotal">
                £{(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))
        )}
      </div>

      <div>
        <div className="cart-summary">
          <p style={{ fontWeight: "500", fontSize: "3vh" }}>Cart Totals</p>
          <div className="cart-summary-details">
            <p>Subtotal</p>
            <p style={{ color: "#38a3a5" }}>£{totalAmount.toFixed(2)}</p>
          </div>
          <div className="cart-summary-details">
            <p>Total</p>
            <p style={{ color: "#38a3a5" }}>£{totalAmount.toFixed(2)}</p>
          </div>
          <Link to="/checkout">
            <button className="checkout-btn">Proceed to Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
