import React from 'react';
import './Slide.css';

class Slide extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: null,
      id: null,
      photoUrl: null,
      error: null
    }
  }

  componentDidMount() {
    fetch(this.props.url)
    .then(res => res.json())
    .then(
      (data) => {
        this.setState({
          name: data.name,
          id: data.id,
          photoUrl: data.sprites.front_default
        });
      },
      (error) => {
        this.setState({
          error: error
        });
      }
    );
  }

  render () {
    const { error, name, id, photoUrl } = this.state;
    if (error) {
      return (
        <div className="slide">
        <div className="slideHeader">
          <div className="slideTitle">
            {name}
          </div>
          <div className="slideId">
            ID: {id}
          </div>
          <div className="clear"></div>
        </div>
        <div className="slidePhoto">
          <p>{error.message}</p>
        </div>
       </div>
      )
    } else {
      return (
        <div className="slide">
         <div className="slideHeader">
           <div className="slideTitle">
             {name}
           </div>
           <div className="slideId">
             ID: {id}
           </div>
           <div className="clear"></div>
         </div>
         <div className="slidePhoto">
           <img src={photoUrl} alt="Missing URL"></img>
         </div>
        </div>
      );
    }
 }
}

export default Slide;