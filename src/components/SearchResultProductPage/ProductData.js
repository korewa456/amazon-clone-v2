import React from 'react'
import "./SearchResultProductPage.css"

function ProductData(props) {
  return (
    <div>
      <img className="image" src={props.image} alt="" />
      <span>{props.name}</span><br />
      <span>${props.price}</span>
    </div>
  )
}

export default ProductData;
