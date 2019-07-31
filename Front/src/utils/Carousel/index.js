import React from 'react';
import Carousel from 'nuka-carousel';
import './slider.scss';

// https://github.com/FormidableLabs/nuka-carousel


const Slider = () => (
  <Carousel
    autoplay
    initialSlideHeight={250}
  >
    <img src="https://gratisography.com/thumbnails/gratisography-animal-crackers-thumbnail.jpg" />
    <img src="https://cdn.stocksnap.io/img-thumbs/960w/R7IOD2W1ZU.jpg" />
    <img src="https://picography.co/wp-content/uploads/2019/04/picography-fireworks-at-night-768x576.jpg" />
  </Carousel>
);


export default Slider;
