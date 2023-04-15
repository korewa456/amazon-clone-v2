import React from 'react'
import "./ShoppingCartPage.css"
import ShoppingCartPageBanner from "./ShoppingCartPageBanner.png"

function ShoppingCartPage() {
  return (
    <div>
      <div className="shoppingCartPage">
        <div className="shoppingCartPage__bannerContainer">
          <img className="shoppingCartPage__Banner" src={ShoppingCartPageBanner} alt=""/>
        </div>
        <div className="yourAmazonCartIsEmpty">
          <h2>Your Amazon Cart is empty.</h2>
          <span>Your Shopping Cart lives to serve. Give it purpose - fill it with groceries, clothing, household supplies, electronics, and more.</span>
          <span>Continue shopping on the <span className="shoppingCartPage__blueText shoppingCartPage__link">Amazon.com homepage</span>, learn about <span className="shoppingCartPage__blueText shoppingCartPage__link">today's deals</span>, or visit your <span className="shoppingCartPage__blueText shoppingCartPage__link">Wish List</span>.</span>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCartPage;
