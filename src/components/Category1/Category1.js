import React, { Component } from 'react';

import './Category1.css';


class Flowers extends Component {

  render() {
    return (
      <div className="flowers">
        <div id="flower_desktop"></div>
        <img src="https://media.giphy.com/media/dJhRyqOtXc3MA/giphy.gif" id="gif1"/>
        <div id='flower_cover'></div>
        <div id="shop_desktop"><p>Shop Now</p></div>
        <div id="shop_now"><p id="flower_p">Shop Now</p></div>

        {/* // desktop view // */}
          <div id="animal_desktop"></div>
          <img src="https://media.giphy.com/media/4yr4MpEIJg4DK/giphy.gif" id="gif2"/>
          <div id='flower_cover'></div>
          <div id="shop_desktop2"><p>Shop Now</p></div>
          <div id="shop_now"><p id="flower_p">Shop Now</p></div>
      </div>
      
    );
  }
}


export default Flowers;