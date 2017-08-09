import React, { Component } from 'react';

import './Header.css';


class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            drop: false
        }
        this.handleDropDown = this.handleDropDown.bind(this);
        this.handlePaintings = this.handlePaintings.bind(this);
        this.handleSeasonal = this.handleSeasonal.bind(this);
        this.handlePhoto = this.handlePhoto.bind(this);
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
    handlePaintings(){
        if(!this.state.drop){
            document.getElementById('painting_drop').style.display = 'block';
            document.getElementById('seasonal_drop').style.display = 'none';
            document.getElementById('photo_drop').style.display = 'none';
            this.setState({
                drop: true,
            })
        } else{
            document.getElementById('painting_drop').style.display = 'none';
            this.setState({
                drop: false,
            })
        }
    }
    handleSeasonal(){
        if(!this.state.drop){
            document.getElementById('seasonal_drop').style.display = 'block';
            document.getElementById('painting_drop').style.display = 'none';
            document.getElementById('photo_drop').style.display = 'none';
            this.setState({
                drop: true,
            })
        } else{
            document.getElementById('seasonal_drop').style.display = 'none';
            this.setState({
                drop: false,
            })
        }
    }
    handlePhoto(){
        if(!this.state.drop){
            document.getElementById('photo_drop').style.display = 'block';
            document.getElementById('seasonal_drop').style.display = 'none';
            document.getElementById('painting_drop').style.display = 'none';
            this.setState({
                drop: true,
            })
        } else{
            document.getElementById('photo_drop').style.display = 'none';
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
                    <div onClick = { this.handlePaintings }>paintings</div> 
                    {/*oil, watercolor, abstract  */}
                    <div id="bullet">|</div>
                    <div onClick={ this.handleSeasonal }>seasonal</div>
                    {/*christmas, halloween, fall, spring, summer  */}
                    <div id="bullet">|</div>
                    <div onClick={ this.handlePhoto }>photography</div>
                    {/*nature, animals, places  */}
                    <div id="bullet">|</div>
                    <div>crafts</div>
                    {/*rustic, coastal, modern, natural  */}
                </section>
                {/*onClick - change color of category word, drop down menu for that category*/}
                <section id="painting_drop">
                    <ul>
                        <li>oil</li>
                        <li>watercolor</li>
                        <li>abstract</li>
                        <li>all</li>
                    </ul>
                </section>
                <section id="seasonal_drop">
                    <ul>
                        <li>christmas</li>
                        <li>fall</li>
                        <li>halloween</li>
                        <li>spring</li>
                        <li>summer</li>
                        <li>all</li>
                    </ul>
                </section>
                <section id="photo_drop">
                    <ul>
                        <li>nature</li>
                        <li>animals</li>
                        <li>places</li>
                        <li>all</li>
                    </ul>
                </section>
                <section id="craft_drop">
                </section>
              </div>
          </section>
      </div>
    );
  }
}


export default Header;