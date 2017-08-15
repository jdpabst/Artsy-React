import React, { Component } from 'react';
import { Slider } from 'react-slick';
import { Link } from 'react-router-dom';
import './Shop.css';


class Shop extends Component {

  render() {
    return (
      <div className="shop">
          <h1 className="header_logo">Artsy</h1>
          <section id="mobile_header">
                <div className='ham'  onClick={ this.handleDropDown }>
                  <div id="bar1"></div>
                  <div id="bar2"></div>
                  <div id="bar3"></div>
                </div>
                <section id="mobile_menu">
                    <div>HOME</div>
                    <Link to='/shop' style={{textDecoration: 'none', color: 'black'}}><div>SHOP</div></Link>
                    <div>CART</div>
                    <div>CONTACT</div>
                    <div>ABOUT US</div>
                    <div>CONNECT</div>
                    <section id='socials'>
                        <img src="https://static1.squarespace.com/static/54c1c3d5e4b0707229678eed/54d57a95e4b0b8799a5a38b7/54d57a95e4b0b8799a5a38b8/1423276921378/iconmonstr-facebook-4-icon.png"/>
                        <img src="http://static1.squarespace.com/static/51685161e4b0e454d76e8167/55f0ab3ee4b029a70084f3dd/55f0ae7de4b09c801f7cd30e/1441836746255/pinterest.png"/>
                        <img src="https://www.cycleto.ca/sites/default/files/twitter-icon-circle-logo.png"/>
                        <img id='img' src="https://static1.squarespace.com/static/573a1dd13c44d82cb701948c/57680f16725e25caf907775a/57680f16c534a58437d78054/1466437399798/instagram+logo.png"/>
                    </section>
                </section>
                <div id="cart_items">0</div>
          </section>
          <section id="content_area">
              <div id="img_slider">
                  {/*If I was doing this with a backend, I would use an API call to hit the database and populate the img tags accordingly*/}
                  <img src="https://s-media-cache-ak0.pinimg.com/originals/a3/07/58/a30758819c5b2a928bdb4bb7a8456ebe.jpg"/>
                  <img src="https://ctl.s6img.com/society6/img/QayJERhyocmxd7vsukZC78nSjug/h_550,w_550/prints/~artwork/s6-0071/a/28912150_11227258/~~/green-paddle-cactus-ii-prints.jpg"/>
              </div>
          </section>
      </div>
    );
  }
}


export default Shop;