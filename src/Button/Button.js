import React from 'react';
import './Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null
    }
  }
  render () {
    return (
      <button className={this.props.class}>{ this.props.name }</button>
    );
  }
}

export default Button;