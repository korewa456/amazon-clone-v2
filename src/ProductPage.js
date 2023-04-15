import React from "react";
import "./ProductPage.css";
import ProductWidget from "./ProductWidget";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function ProductPage() {
  return (
    <div>
      <div className="container">
        <div>
          <ProductDetails />
        </div>
        <div className="widgetContainer">
          <ProductWidget />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
