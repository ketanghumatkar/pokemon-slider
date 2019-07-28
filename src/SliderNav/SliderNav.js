import React from 'react';
import './SliderNav.css';

import Button from './../Button/Button'

class SliderNav extends React.Component {
  render() {
    return(
      <div className="slider-nav">
        <Button name="Previous" class="primary prev"></Button>
        <Button name="Next" class="primary next"></Button>
        <div className="clear"></div>
      </div>
    );
  }
}

export default SliderNav;