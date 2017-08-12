import React, { Component } from 'react';

import Header from './../Header/Header.js';
import Landing from './../Landing/Landing.js';
import Category1 from './../Category1/Category1.js';
import './Home.css';


class Home extends Component {

  render() {
    return (
      <div className="home">
          <Header/>
          <Landing/> 
          <Category1/>
          {/* { router } */}
      </div>
    );
  }
}


export default Home;