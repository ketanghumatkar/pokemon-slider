import React from 'react';
import './Slider.css';

import Slide from '../Slide/Slide';
import SliderNav from '../SliderNav/SliderNav';

class Slider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      nextUrl: null,
      prevUrl: null,
      items: []
    };
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=3')
    .then(res => res.json())
    .then(
      (data) => {
        this.setState({
          isLoaded: true,
          items: data.results,
          prevUrl: data.previous,
          nextUrl: data.next
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render () {
    const { error, isLoaded, items, prevUrl, nextUrl } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="slider">
          {
            items.map(item => (
              <Slide name={item.name} url={item.url} />
            ))
          }
          <SliderNav next-url={nextUrl} prev-url={prevUrl} />
        </div>
      );
    }
  }
}

export default Slider;