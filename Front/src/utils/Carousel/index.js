import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/src/styles';
import SliderStyles from './slider.scss';

const Slider = () => (
  <AwesomeSlider cssModule={SliderStyles} bullets={false}>
    <div data-src="https://gratisography.com/thumbnails/gratisography-animal-crackers-thumbnail.jpg">
      <p>Bienvenue sur le site HAPPY APE!</p>
    </div>
    <div data-src="https://cdn.stocksnap.io/img-thumbs/960w/R7IOD2W1ZU.jpg">
      <p>HAPPY APE est le site de l'Association de Parents d'Élèves de votre école</p>
    </div>
    <div data-src="https://picography.co/wp-content/uploads/2019/04/picography-fireworks-at-night-768x576.jpg">
      <p>Retrouvez toutes nos actualités et nos évènements sur un seul point!</p>
    </div>
  </AwesomeSlider>
);


export default Slider;
