import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./../Styles/Style.css";

const ProductListing = ({ addToCart }) => {
  const [products] = useState([
    {
      id: 1,
      name: "Woo Ninja",
      color: "Pink",
      price: 35,
      stock: "In stock",
      image: "/images/hoodie.jpg",
      category: "Hoodie",
      size: "L",
      quantity: 1,
    },
    {
      id: 2,
      name: "Woo Logo",
      color: "Blue",
      price: 35,
      stock: "In stock",
      image: "/images/hoodiethree.jpg",
      category: "Hoodie",
      size: "XL",
      quantity: 1,
    },
    {
      id: 3,
      name: "Patient Ninja",
      color: "Pink",
      price: 35,
      stock: "In stock",
      image: "/images/hoodietwo.jpg",
      category: "Hoodie",
      size: "M",
      quantity: 1,
    },
    {
      id: 4,
      name: "Ninja Silhouette",
      color: "Black",
      price: 35,
      stock: "In stock",
      image: "/images/tshirt.jpg",
      category: "T-Shirt",
      size: "XL",
      quantity: 1,
    },
    {
      id: 5,
      name: "T-Shirt Ninja",
      color: "Green",
      price: 25,
      stock: "In stock",
      image: "/images/tshirtwo.jpg",
      category: "T-Shirt",
      size: "M",
      quantity: 1,
    },
  ]);

  const [selectedItems, setSelectedItems] = useState([]);
  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => ({ ...acc, [product.id]: 0 }), {})
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const handleQuantityChange = (id, type) => {
    setQuantities((prev) => {
      const newQuantity =
        type === "increment" ? prev[id] + 1 : Math.max(prev[id] - 1, 1);
      return { ...prev, [id]: newQuantity };
    });
  };

  const handleAddToCart = (product) => {
    if (selectedItems.includes(product.id)) {
      addToCart({ ...product, quantity: quantities[product.id] });
      toast.success(`${product.name} added to cart!`);
    } else {
      toast.error(`Please select the product first!`);
    }
  };

  const toggleSelectProduct = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    const matchesSize = selectedSize ? product.size === selectedSize : true;
    return matchesSearch && matchesCategory && matchesSize;
  });

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setSelectedSize("");
  };

  return (
    <div className="product-listing-container">
      <h2>Product Listing</h2>

      <div className="filters">
        <div className="filter-options">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Hoodie">Hoodie</option>
            <option value="T-Shirt">T-Shirt</option>
          </select>

          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            <option value="">All Sizes</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>

          <button className="reset-btn" onClick={resetFilters}>
            Reset
          </button>
        </div>

        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>

      {filteredProducts.length > 0 ? (
        <table className="product-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Image</th>
              <th>Color</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Select</th>
              <th>Add to Cart</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                </td>
                <td>{product.color}</td>
                <td>${product.price}</td>
                <td>{product.stock}</td>
                <td>{product.size}</td>
                <td className="btns-alignment">
                  <button
                    onClick={() =>
                      handleQuantityChange(product.id, "decrement")
                    }
                  >
                    -
                  </button>
                  <span>{quantities[product.id]}</span>
                  <button
                    onClick={() =>
                      handleQuantityChange(product.id, "increment")
                    }
                  >
                    +
                  </button>
                </td>
                <td>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(product.id)}
                      onChange={() => toggleSelectProduct(product.id)}
                    />
                  </label>
                </td>
                <td>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="add-to-cart-btn"
                  >
                    Add to Cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default ProductListing;
