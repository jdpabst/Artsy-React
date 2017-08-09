import React, { Component } from 'react';

import './Photos.css';


class Photos extends Component {

  render() {
    return (
      <div className="photos">
        <h2>Shop for photos</h2>
          <ul>
              <li>
                  <div>
                    <div id="img1"></div>
                    <p id='price'>$75.00</p>
                    <p id="desc">Lorem Ipsum</p>
                  </div>
              </li>
              <li>
                  <div>
                    <div id="img2"></div>
                    <p id='price'>$75.00</p>
                    <p id="desc">Lorem Ipsum</p>
                  </div>
              </li>
              <li>
                  <div>
                    <div id="img3"></div>
                    <p id='price'>$75.00</p>
                    <p id="desc">Lorem Ipsum</p>
                  </div>
              </li>
          </ul>

      </div>
    );
  }
}


export default Photos;