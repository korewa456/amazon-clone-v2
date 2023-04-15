import React from "react";
import "./ProductWidget.css";

function ProductWidget() {
  return (
    <div className="widget">
      <h3>$80.74</h3>
      <p style={{ color: "#0E86D4" }}>
        <p style={{ color: "#FEDE00", display: "inline" }}>✓</p>prime
      </p>
      <p>FREE Returns</p>
      <br></br>
      <p>
        FREE delivery <b>Wednesday, March 15</b>.{" "}
        <p style={{ color: "green", display: "inline" }}>
          Order within 4 hrs 26 mins
        </p>
      </p>
      <br></br>
      <p style={{ fontSize: "8px" }}>
        <img src="https://m.media-amazon.com/images/S/sash/kIT-Lj9i1Bch8yi.png"></img>
        Deliver to John - Irvine 92618‌
      </p>
      <select>
        <option value="Qty1">Qty1</option>
        <option value="Qty2">Qty2</option>
        <option value="Qty3">Qty3</option>
        <option value="Qty4">Qty4</option>
      </select>
      <br></br>
      <br></br>
      <button className="button" name="myButton">
        Add to Cart
      </button>
      <button className="button buyNow" name="myButton">
        Buy Now
      </button>
    </div>
  );
}

export default ProductWidget;
