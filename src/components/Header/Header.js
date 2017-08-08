import React, { Component } from 'react';

import './Header.css';


class Header extends Component {

  render() {
    return (
      <div className="header">
          <section id="mobile_header">
              <div className = 'ham'><img src=''/></div>
              <h1 className = "header_logo">Artsy</h1>
          </section>

      </div>
    );
  }
}


export default Header;