import React, { Component } from 'react';

import './Paintings.css';


class Paint extends Component {

  render() {
    return (
      <div className="paint">
          <ul>
              <li>
                  <div>
                    <div id="img"></div>
                    <p id='price'></p>
                    <p id="desc"></p>
                  </div>
              </li>
              <li>
                  <div>
                    <div id="img"></div>
                    <p id='price'></p>
                    <p id="desc"></p>
                  </div>
              </li>
              <li>
                  <div>
                    <div id="img"></div>
                    <p id='price'></p>
                    <p id="desc"></p>
                  </div>
              </li>
          </ul>

      </div>
    );
  }
}


export default Paint;