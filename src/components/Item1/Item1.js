import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import Footer from './../Footer/Footer.js'
import './Item1.css';


class Item1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            drop: false
        }
        this.handleDropDown = this.handleDropDown.bind(this);
    }

    handleDropDown(){
        if(!this.state.drop){
            document.getElementById('mobile_menu').style.display = 'block';
            this.setState({
                drop: true,
            })
        } else{
            document.getElementById('mobile_menu').style.display = 'none';
            this.setState({
                drop: false,
            })
        }
    }

  render() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
      <div className="shop">
          <Link to='/' style={{textDecoration: 'none', color: 'black'}}><h1 className="header_logo">Artsy</h1></Link>
          <section id="mobile_header_shop">
                <div className='ham'  onClick={ this.handleDropDown }>
                  <div id="bar1"></div>
                  <div id="bar2"></div>
                  <div id="bar3"></div>
                </div>
                <section id="mobile_menu">
                    <Link to='/' style={{textDecoration: 'none', color: 'black'}}><div>HOME</div></Link>
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
          <section id="desktop_header_shop_area">
              <div id="desktop_menu_item">
                <ul id="first_ul">
                    <Link to='/' style={{textDecoration: 'none', color: 'black'}}><li>HOME</li></Link>
                    <Link to='/shop' style={{textDecoration: 'none', color: 'black'}}><li>SHOP</li></Link>
                    <li>ABOUT US</li>
                </ul>
                <ul id="second_ul">
                    <li>CONTACT</li>
                    <li>CONNECT</li>
                    <li>CART<div id='desktop_cart'>0</div></li>
                </ul>
              </div>
        </section>
          <section id="content_area">
            <div id="img_slider">
                {/*If I was doing this with a backend, I would use an API call to hit the database and populate the img tags accordingly*/}
                <Slider {...settings}>
                    <div className='img1'></div>
                    <div className="img2"></div>
                </Slider>
            </div>
            <div id="painting_info">
                <h1>Prickly Pear</h1>
                <h2>Jessica Rowe</h2>
                <p>$362.00</p>
            </div>
            <div id="painting_paragraph">
                <p>Original watercolor painting on archival watercolor paper, signed on the back by Jessica Rowe. Matted, framed and ready-to-hang.</p>
            </div>
            <section id="specs_area">
              <div id="size_picker">
                  <p>SIZE</p>
                  <select>
                    <option value="smallest">11"x14"</option>
                    <option value="medium">16"x20"</option>
                    <option value="large">20"x30"</option>
                    <option value="largest">22"x32"</option>
                  </select>
              </div>
              <div id="qty_picker">
                  <p>QTY</p>
                  <select>
                    <option value="one">1</option>
                    <option value="two">2</option>
                    <option value="three">3</option>
                    <option value="four">4</option>
                  </select>
              </div>
            </section>
            <div id="add_bttn">ADD TO CART</div>
          </section> 
          <section id="insta_spoof">     
            <img id="gif" src="https://media.giphy.com/media/xTcnT2ZYSaCTdkTSmI/giphy.gif"/> 
            <p><span style={{fontFamily: "'Homemade Apple', cursive", fontSize: '25px'}}>LOVE</span> what you see? Check us out on Instagram @ArtsyWatercolors</p>   
          </section> 
          <section id="more_like">
              <p>more like this</p>
              <div id="more1"></div>
              <div id="more2"></div>
              <div id="more3"></div>
          </section>
          <section className="footer_shop">
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
            </section> 
      </div>
    );
  }
}


export default Item1;