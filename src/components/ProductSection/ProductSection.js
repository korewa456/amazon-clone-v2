import React from 'react'
import "./ProductSection.css";
import ProductSectionData from './ProductSectionData';


const ProductSection = () => {
  console.log(ProductSectionData);
  const productImage = ProductSectionData.map((product) =>
  <div>
      <img className="productSection__img" src={product.image} alt="" />
  </div>
  )
  const productImage2 = ProductSectionData.map((product) =>
  <div>
      <img className="productSection__img2" src={product.image} alt="" />
  </div>
  )
  const productName = ProductSectionData.map((name) =>
  <div>
      {name.name}
  </div>
  )
  const productPrice = ProductSectionData.map((price) =>
  <div>
      {price.price}
  </div>
  )
  return (
    <div className="productSection">
      <div className="productSection__container">
        <div className="productSection__category">
          <h3>Deals on frequently purchased items</h3>
          <div className="productSection__row">
            {productImage[0]}
            {productImage[1]}
          </div>
          <div className="productSection__row">
            {productImage[2]}
            {productImage[3]}
          </div>
        </div>
        <div className="productSection__category">
          <h3>Inspired by your purchase of "Breville Knock Box"</h3>
          <div className="productSection__row">
            {productImage[4]}
            {productImage[5]}
          </div>
          <div className="productSection__row">
            {productImage[6]}
            {productImage[7]}
          </div>
        </div>
        <div className="productSection__category">
          <h3>More to explore in Electronics</h3>
          <div className="productSection__row">
            {productImage[8]}
            {productImage[9]}
          </div>
          <div className="productSection__row">
            {productImage[10]}
            {productImage[11]}
          </div>
        </div>
        <div className="productSection__category">
          <div>
            <h3>More items to explore</h3>
            {productImage2[12]}
            {productName[12]}
            <p>{productPrice[12]}</p>
          </div>
        </div>
      </div>
      <div className="productSection__container2">
        <div className="productSection__relatedToText">
          <h3>Related to items you've viewed</h3>
          <span className="productSection__blueText productSection__relatedtoTextPadding productSectionOrangeTextHover productSectionUnderlineHover productSectionPointerHover">See more</span>
        </div>
        <div className="productSection__row2">
          {productImage2[13]}
          {productImage2[14]}
          {productImage2[15]}
          {productImage2[16]}
          {productImage2[17]}
          {productImage2[18]}
          {productImage2[19]}
        </div>
      </div>
      <br />
    </div>
  )
}

export default ProductSection;