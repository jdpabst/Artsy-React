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
                </section>
                <h1 className="header_logo">Artsy</h1>
          </section>
          {/*//////DESKTOP//////  */}
          <section id="desktop_header">
              <div id="desktop_control">
                <div className="header_logo">Artsy</div>
                <div className="desktop_menu">
                    <div>HOME</div>
                    <div>SHOP</div>
                    <div>CART</div>
                </div>
              </div>
              <div id="categories_holder">
                <section id="categories">
                    <div>paintings</div> 
                    {/*oil, watercolor, abstract  */}
                    <div>seasonal</div>
                    {/*christmas, halloween, fall, spring, summer  */}
                    <div>photography</div>
                    {/*nature, animals, places  */}
                    <div>crafts</div>
                    {/*rustic, coastal, modern, natural  */}
                </section>
              </div>
          </section>
      </div>
    );
  }
}


export default Header;