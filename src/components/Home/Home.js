import React, { Component } from 'react';

import Header from './../Header/Header.js';
import Landing from './../Landing/Landing.js';
import './Home.css';


class Home extends Component {

  render() {
    return (
      <div className="home">
          <Header/>
          {/* <Landing/> */}
          {/* { router } */}
      </div>
    );
  }
}


export default Home;