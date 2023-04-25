import React from 'react'
import ProductComponentTemplate from './ProductComponentTemplate'

function ProductComponent() {
  return (
    <div>
        <ProductComponentTemplate 
            id="1"
            image="https://i.imgur.com/zuT9KYw.png"
            title="Maxwell House Original Medium Roast Ground Coffee (30.6 oz Canister)"
            rating={4}
            price="9.36 ($0.31/Ounce)"

        />
    </div>
  )
}

export default ProductComponent




