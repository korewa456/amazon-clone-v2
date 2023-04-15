import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Frequent_purchase_carousel.css";
import Carousel_Product from './Carousel_Product';

function Frequent_purchase_Carousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 8
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className='carousel'>
      <div className='carousel__title'>Deals on frequently repurchased items</div>
      <div className='carousel__wrapper'>
        <Carousel responsive={responsive}
           className="carousel__container">
            <Carousel_Product />
            <Carousel_Product />
            <Carousel_Product />
            <Carousel_Product />
            <Carousel_Product />
            <Carousel_Product />
            <Carousel_Product />
            <Carousel_Product />
            <Carousel_Product />
            <Carousel_Product />
            <Carousel_Product />
            <Carousel_Product />
            <Carousel_Product />
            <Carousel_Product />
            <Carousel_Product />
            <Carousel_Product />
            <Carousel_Product />
            <Carousel_Product />
            <Carousel_Product />
            <Carousel_Product />

        </Carousel>
      </div>
    </div>
  )
}

export default Frequent_purchase_Carousel