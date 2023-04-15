import React from 'react';
import "./SearchResultProductComponent.css";

function SearchResultProductComponent() {
  return (
    <div className='product__container'>
      <img className='product__img'
        src='https://m.media-amazon.com/images/I/91mRYUO8huL._AC_UL640_FMwebp_QL65_.jpg
        ' alt='coffee'/>
        <div className='product__info'>
            <div>
                <h2 className='product__description'>Maxwell House Original Medium Roast Ground Coffee (30.6 oz Canister)</h2>
            </div>
            <div>
                <p className='product__shippingInfo'>Ground · 1.91 Pound (Pack of 1)</p>
            </div>
            <img 
                src='https://i.imgur.com/I7A8hBa.png'
                alt=''
            />
            <div className='product__priceContainer'>
                <p className='product__price'>$9.36</p>
                <p className='product__weight'>($0.31/Ounce)</p>
                <p className='product__priceOld'> $9.96</p>
            </div>
            <div className='product__discount'>
                <p>$8.89 with Subscribe & Save discount</p>
            </div>
            <div className='product__ebt'>
                <p>SNAP EBT eligible</p>
            </div>
            <img 
                src='https://i.imgur.com/C3OSacE.png'
                alt=''
            />
            <div className='product__delivery'>
                <p>FREE delivery Today 10 AM - 3 PM on $25 of qualifying items</p>
            </div>
            <div className='product__option'>
                <p className='options'>Options:</p>
                <p className='sizes'>2 sizes</p>
            </div>
            <button className='product__button'>Add to Cart</button>

        </div>

      </div>
  )
}

export default SearchResultProductComponent



