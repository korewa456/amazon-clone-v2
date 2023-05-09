import React from 'react';
import "./Carousel_Product";
import { Check } from 'react-feather';
import "./Carousel_Product"


function CarouselComponentTemplate ({id, image, title, rating, price}) {
  return (
    <div className='container__outer'>
    <div className='container__productImg'>
        <img src={image} alt="" />
     </div>
    <div className='container__productTitle'>
        <p>{title}</p>
     </div>
    <div className='container__productShippingInfo'>
        <p>Ground</p>
     </div>
    <div className='container__rating'>
        {Array(rating)
            .fill()
            .map((_) => (
                <p>⭐</p>
            ))}
     </div>
    <div className='container__price'>
        <small>$</small>
        <strong>{price}</strong>
     </div>
    <div className='container__subscribeText'>$8.89 with Subscribe & Save discount</div>
    <div className='container__primeLogo'>
        <p>
            <Check 
                color='#FFC000'
                size={12}
                strokeWidth={4}
                
            />
        </p>
        <h1 className='prime__text'>prime</h1>
        <p className='prime__textTwo'>Two-Day</p>
    </div>
    <div className='container__delivery'>FREE delivery Sun, Apr 23 on $25 of items shipped by Amazon</div>
    <button className="container__button">Add to Cart</button>
   
   
   </div>
  )
}

export default CarouselComponentTemplate 