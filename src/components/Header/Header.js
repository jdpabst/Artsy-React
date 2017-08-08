import React, { Component } from 'react';

import './Header.css';


class Header extends Component {
    constructor(props){
        super(props);
        
    }

  render() {
    return (
      <div className="header">
          <section id="mobile_header">
              <div className='ham' >
                  <div id="bar1"></div>
                  <div id="bar2"></div>
                  <div id="bar3"></div>
              </div>
            <section id="mobile_menu">
                <div>HOME</div>
                <div>SHOP</div>
                <div>CART</div>
            </section>
              <h1 className="header_logo">Artsy</h1>
          </section>

      </div>
    );
  }
}


export default Header;