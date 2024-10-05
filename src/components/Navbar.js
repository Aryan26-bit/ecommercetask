import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <h1>eCommerce App</h1>
      <Link to="/" style={{fontWeight:"bold"}}>Products</Link>
      <Link to="/cart"><FaShoppingCart style={{fontSize:"3vh"}}/></Link>
    </nav>
  );
};

export default Navbar;
