import React, { Component } from 'react';

import './Header.css';


class Header extends Component {
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
    return (
      <div className="header">
        <h1 className="header_logo">Artsy</h1>
        <div id="water_color_bg"></div>
        <div className="quote_holder">
            <h2 id="quote">Every painting is a voyage into a sacred harbor</h2>
            <p id='author'>Ciatto di Bandone</p>
        </div>
          {/*//////MOBILE//////  */}
          <section id="mobile_header">
                <div className='ham'  onClick={ this.handleDropDown }>
                  <div id="bar1"></div>
                  <div id="bar2"></div>
                  <div id="bar3"></div>
                </div>
                <section id="mobile_menu">
                    <div>HOME</div>
                    <div>SHOP</div>
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
          {/*//////DESKTOP//////  */}
          <section id="desktop_header">
              <div id="desktop_menu">
                <ul id="first_ul">
                    <li>HOME</li>
                    <li>SHOP</li>
                    <li>ABOUT US</li>
                </ul>
                <ul id="second_ul">
                    <li>CONTACT</li>
                    <li>Connect</li>
                    <li>Cart<div id='desktop_cart'>0</div></li>
                </ul>
              </div>
        </section>
        </div>
    );
  }
}


export default Header;