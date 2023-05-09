import React from 'react';
import "./Frequent_purchase_carousel.css";
import CarouselComponentTemplate from "./CarouselComponentTemplate " 


function Carousel_Product() {
  return (
    <div>
        <CarouselComponentTemplate 
            id="1"
            image="https://i.imgur.com/zuT9KYw.png"
            title="Maxwell House Original Medium Roast Ground Coffee (30.6 oz Canister)"
            rating={4}
            price="9.36 ($0.31/Ounce)"

        />
    </div>
  )
}

export default Carousel_Product