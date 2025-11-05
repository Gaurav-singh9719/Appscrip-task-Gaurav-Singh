import React from "react";
import "../styles/products.css";

const SortDropdown = () => {
  return (
    <div className="sort-container">
      <label htmlFor="sort" className="sort-label">SORT BY</label>
      <select id="sort" className="sort-select">
        <option value="recommended">Recommended</option>
        <option value="newest">Newest First</option>
        <option value="popular">Popular</option>
        <option value="lowtohigh">Price: Low to High</option>
        <option value="hightolow">Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortDropdown;
