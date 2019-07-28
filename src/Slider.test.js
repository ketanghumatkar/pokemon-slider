import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './Slider/Slider';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Slider />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('find previous', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Slider />, div);
  var previous =  document.getElementById('prev')
  ReactDOM.unmountComponentAtNode(div);
});