import React from 'react';
import './Slide.css';

class Slide extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'ivysaur',
      id: 2,
      photoPath: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
    }
  }
 render () {
   return (
     <div className="slide">
      <div className="slideHeader">
        <div className="slideTitle">
          {this.state.name}
        </div>
        <div className="slideId">
          ID: {this.state.id}
        </div>
        <div className="clear"></div>
      </div>
      <div className="slidePhoto">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" alt="Image missing"></img>
      </div>
     </div>
   );
 }
}

export default Slide;