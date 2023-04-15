import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

function Product({ id, title, price, rating, image }) {
  return (
    <div className="product">
      <div className="product__info">
        <Link to="/ProductPage">
          <p>{title}</p>
        </Link>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />

      <button className="">Add to Cart</button>
    </div>
  );
}

export default Product;
