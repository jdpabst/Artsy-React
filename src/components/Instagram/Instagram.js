import React, { Component } from 'react';

import './Instagram.css';


class Insta extends Component {

  render() {
    return (
      <div className="insta">
        <ul>
          <li><div id='slot1'></div></li>
          <li><div id='slot2'></div></li>
          <li><div id='slot3'></div></li>
          <li><div id='slot4'></div></li>
        </ul>
        <p id="insta_tag">@ArstyWatercolors</p>
      </div>
    );
  }
}


export default Insta;