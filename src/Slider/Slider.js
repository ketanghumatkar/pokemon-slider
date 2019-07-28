import React from 'react';
import './Slider.css';

import Slide from '../Slide/Slide';
import SliderNav from '../SliderNav/SliderNav';

function Slider () {
  return (
    <div className="slider">
      <Slide />
      <Slide />
      <Slide />
      <SliderNav />
    </div>
  );
}

export default Slider;