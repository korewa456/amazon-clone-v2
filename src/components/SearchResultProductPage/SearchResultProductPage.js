import React from 'react'
import "./SearchResultProductPage.css"
import Banner from "./Advertisement.png"
import BannerBottom from "./AdvertisementBottom.png"
import BrandsRelatedToYourSearch from "./BrandsRelatedToYourSearch.png"
import SearchResultPagination from "../SearchResultPagination/SearchResultPagination"
import Product from "./ProductData"
import ProductData from "./SearchResultProductData.json"



function SearchResultProductPage() {
  return (
    <div className="SearchResultProductPage">
      <img src={Banner} alt="" />
      <span>Check each product page for other buying options.</span>
      <div className="SearchResultProductContainer">
        {ProductData.map((data)=>(
          <div className="SearchResultProduct">
          <Product
            image={data.image}
            name={data.name}
            price={data.price}
          />
        </div>
        ))}
      </div>
      <SearchResultPagination />
      <span>BRANDS RELATED TO YOUR SEARCH</span>
      <img src={BrandsRelatedToYourSearch} alt="" />
      <h3>Need Help?</h3>
      <span>Visit the help section or contact us</span>
      <img className="BannerBottom" src={BannerBottom} alt="" />
    </div>
  )
}

export default SearchResultProductPage;
