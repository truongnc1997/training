import React, { Component } from "react";
import Slider from "react-slick";
// import { baseUrl } from "./config";

export default class SlickGoTo extends React.Component {
  state = {
    slideIndex: 0,
    updateCount: 0
  };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: () =>
        this.setState(state => ({ updateCount: state.updateCount + 1 })),
      beforeChange: (current, next) => this.setState({ slideIndex: next })
    };
    return (
      <div>
        <h2>Slick Go To</h2>
        <p>Total updates: {this.state.updateCount} </p>
        <input
          onChange={e => this.slider.slickGoTo(e.target.value)}
          value={this.state.slideIndex}
          type="range"
          min={0}
          max={3}
        />
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div>
            <img src="https://d1k2oi80tv211b.cloudfront.net/uploads/photo/president-cruise-546-820-440.jpg" />
          </div>
          <div>
            <img src= "https://d1k2oi80tv211b.cloudfront.net/uploads/photo/president-cruise-546-820-440.jpg"/>
          </div>
          <div>
            <img src="https://d1k2oi80tv211b.cloudfront.net/uploads/photo/president-cruise-546-820-440.jpg"/>
          </div>
          <div>
            <img src= "https://d1k2oi80tv211b.cloudfront.net/uploads/photo/president-cruise-546-820-440.jpg"/>
          </div>
        </Slider>
      </div>
    );
  }
}