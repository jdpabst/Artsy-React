import React, { Component } from 'react';

import './Seasonal.css';


class Season extends Component {

  render() {
    return (
      <div className="season">
        <h2>Shop for the season</h2>
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


export default Season;