import React, { Component } from 'react';

import './Craft.css';


class Craft extends Component {

  render() {
    return (
      <div className="craft">
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


export default Craft;