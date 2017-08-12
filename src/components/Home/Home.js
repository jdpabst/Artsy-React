import React, { Component } from 'react';

import Header from './../Header/Header.js';
import Landing from './../Landing/Landing.js';
import Category1 from './../Category1/Category1.js';
import Category2 from './../Category2/Category2.js';
import Instagram from './../Instagram/Instagram.js';
import Footer from './../Footer/Footer.js';
import './Home.css';


class Home extends Component {

  render() {
    return (
      <div className="home">
          <Header/>
          <Landing/> 
          <Category1/>
          <Category2/>
          <Instagram/>
          <Footer/>
          {/* { router } */}
      </div>
    );
  }
}


export default Home;