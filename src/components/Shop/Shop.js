import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Shop.css';


class Shop extends Component {
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
      <div className="shop_area">
      </div>
    );
  }
}


export default Shop;