import React from 'react';
import "./ProductComponentTemplate.css";



function ProductComponentTemplate({id, image, title, shipping_info, rating, price}) {
  return (
   <div className='container__outer'>
    <div className='container__productImg'>
        <img src={image} alt="" />
     </div>
    <div className='container__productTitle'>
        <p>{title}</p>
     </div>
    <div className='container__productShippingInfo'>
        <p>{shipping_info}</p>
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
        <img className='prime__logo'
            src='https://i.imgur.com/C3OSacE.png'
            alt=''
        />
    </div>
    <div className='container__delivery'>FREE delivery Sun, Apr 23 on $25 of items shipped by Amazon</div>
    <button className="container__button">Add to Cart</button>
   
   
   </div>




  )
}

export default ProductComponentTemplate