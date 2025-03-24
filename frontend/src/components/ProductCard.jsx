import React from "react";

const ProductCard = ({ image, title, price, description }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <p className="product-description">{description}</p>
      <p className="product-price">${price}</p>
      <button className="buy-button">Buy Now</button>
    </div>
  );
};

export default ProductCard;
