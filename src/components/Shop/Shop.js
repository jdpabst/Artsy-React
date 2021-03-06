import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Footer from './../Footer/Footer'
import Header2 from './../Header2/Header2'
import './Shop.css';


class Shop extends Component {
  render() {
    return (
      <div className="shop_area">
          <Link to='/' style={{textDecoration: 'none', color: 'black'}}><h1 className="header_logo">Artsy</h1></Link>
          <Header2/>
          <div id="mobile_filter">
              <div id="orient">
                <p>Orientation</p>
                <select>
                    <option value="vert">VERTICAL</option>
                    <option value="hori">HORIZONTAL</option>
                    <option value="sq">SQUARE</option>
                </select>
            </div>
            <div id="price">
              <p>Price</p>
              <select>
                <option value="lowest">UNDER $500</option>
                <option value="low">$500-$1000</option>
                <option value="high">$1000-$2000</option>
                <option value="highest">$2000+</option>
              </select>
            </div>
          </div>
          <div id="products">
              <div className="product" id="product1"></div>
              <div className="product" id="product2"></div>
              <Link to='/cactus'><div className="product" id="product3"></div></Link>
              <div className="product" id="product4"></div>
              <div className="product" id="product5"></div>
              <div className="product" id="product6"></div>
          </div>
          <div className="footer_shop_area">
        <div id="categories">
          <ul>
            <li>Our Story</li>
            <li>Get in Touch</li>
            <li>Connect</li>
          </ul>
        </div>
        <section id='socials'>
            <img src="https://static1.squarespace.com/static/54c1c3d5e4b0707229678eed/54d57a95e4b0b8799a5a38b7/54d57a95e4b0b8799a5a38b8/1423276921378/iconmonstr-facebook-4-icon.png"/>
            <img src="http://static1.squarespace.com/static/51685161e4b0e454d76e8167/55f0ab3ee4b029a70084f3dd/55f0ae7de4b09c801f7cd30e/1441836746255/pinterest.png"/>
            <img src="https://www.cycleto.ca/sites/default/files/twitter-icon-circle-logo.png"/>
            <img id='img' src="https://static1.squarespace.com/static/573a1dd13c44d82cb701948c/57680f16725e25caf907775a/57680f16c534a58437d78054/1466437399798/instagram+logo.png"/>
        </section>
        <h4>&copy; arsty.jdpabst.com</h4>
      </div>
      </div>
    );
  }
}


export default Shop;