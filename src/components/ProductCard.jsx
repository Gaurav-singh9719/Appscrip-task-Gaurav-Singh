import React from "react";
import "../styles/products.css";

const ProductCard = ({ image, title, brand, price }) => {
  return (
    <div className="product-card">
      <div className="product-img-wrapper">
        <img src={image} alt={title} className="product-img" />
      </div>
      <div className="product-details">
        <p className="product-brand">{brand}</p>
        <h4 className="product-title">{title}</h4>
        <p className="product-price">₹{price}</p>
      </div>
    </div>
  );
};

// default dummy data if not passed
ProductCard.defaultProps = {
  image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=60",
  title: "Classic Cotton T-Shirt",
  brand: "ZARA",
  price: "799",
};

export default ProductCard;
