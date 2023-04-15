import React from 'react';
import HeroSlider, {Slide} from 'hero-slider';
import "./Carousel.css";



const carsouelOne = "https://m.media-amazon.com/images/I/61wN4MKAlYL._SX3000_.jpg";
const carsouelTwo = "https://m.media-amazon.com/images/I/71g9jNemm0L._SX3000_.jpg";
const carsouelThree = "https://m.media-amazon.com/images/I/71XSVbwhJPL._SX3000_.jpg";

const Carousel = () => {
  return (
    <HeroSlider 
      className='slider'
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      autoplay
      onBeforeChange={(previousSlide, nextSlide) => console.log("onBeforeChange", previousSlide, nextSlide)}
      onChange={nextSlide => console.log("onChange", nextSlide)}
      onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.33"
      }}
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 500,
        height: "100vh"
      }}
    >
      <Slide
        background={{
          backgroundImageSrc: carsouelOne,
          backgroundAttachment: "fixed"
        }}
      />
        <Slide
        background={{
          backgroundImageSrc: carsouelTwo,
          backgroundAttachment: "fixed"
        }}
      />
        <Slide
        background={{
          backgroundImageSrc: carsouelThree,
          backgroundAttachment: "fixed"
        }}
      />

    </HeroSlider>
  )
}

export default Carousel;