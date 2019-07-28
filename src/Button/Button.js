import React from 'react';
import './Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name
    }
  }

  render () {
    return (
      <button className={this.props.class} onClick={() => this.props.updateSlider(this.props.url)}>{ this.state.name }</button>
    );
  }
}

export default Button;