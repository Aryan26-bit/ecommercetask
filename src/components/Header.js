import React, { useState } from "react";

const Header = ({ filterProducts, resetFilters }) => {
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");

  const handleFilter = () => {
    filterProducts({ category, size });
  };

  return (
    <div className="header">
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">-- Category --</option>
        <option value="Hoodie">Hoodie</option>
      </select>

      <select value={size} onChange={(e) => setSize(e.target.value)}>
        <option value="">-- Size --</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
      </select>

      <button onClick={handleFilter}>Filter</button>
      <button onClick={resetFilters}>Reset</button>

      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => filterProducts({ keyword: e.target.value })}
      />
    </div>
  );
};

export default Header;
