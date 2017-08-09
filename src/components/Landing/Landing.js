import React, { Component } from 'react';

import Paintings from './Paintings/Paintings'
import './Landing.css';


class Landing extends Component {

  render() {
    return (
      <div className="landing">
          Welcome!
          <Paintings/>
      </div>
    );
  }
}


export default Landing;