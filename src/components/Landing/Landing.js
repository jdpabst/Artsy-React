import React, { Component } from 'react';

import Paintings from './Paintings/Paintings'
import Seasonal from './Seasonal/Seasonal'
import Photos from './Photos/Photos'
import Craft from './Craft/Craft'
import './Landing.css';


class Landing extends Component {

  render() {
    return (
      <div className="landing">
          Welcome!
          <Paintings/>
          <Seasonal/>
          <Photos/>
          <Craft/>
      </div>
    );
  }
}


export default Landing;