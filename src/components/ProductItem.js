import React, { useState } from "react";

const ProductItem = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [isSelected, setIsSelected] = useState(false);

  const handleAddToCart = () => {
    if (isSelected) {
      onAddToCart({ ...product, quantity });
    }
  };

  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Color: {product.color}</p>
      <p>Size: {product.size}</p>
      <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
      <p>Available Quantity: {product.quantity}</p>

      <input
        type="checkbox"
        checked={isSelected}
        onChange={() => setIsSelected(!isSelected)}
      />
      <span>Select</span>

      <input
        type="number"
        value={quantity}
        min="1"
        max={product.quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
