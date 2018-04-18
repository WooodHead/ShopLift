import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactDrawer from 'react-drawer';
import shoppingcart from '../picture/shopping-cart.png';
import emptycart from '../picture/empty-cart.png';

 
/* if you using webpack, should not apply identity to this css */
import 'react-drawer/lib/react-drawer.css';
 
export default class DrawerCart extends Component{
  constructor() {
    super();
    this.state = {
      open: false,
      position: 'right',
      noOverlay: false
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.onDrawerClose = this.onDrawerClose.bind(this);
    this.setPosition = this.setPosition.bind(this);
  }

  setPosition(e) {
    this.setState({position: e.target.value});
  }

  toggleDrawer() {
    this.setState({open: !this.state.open});
  }
  closeDrawer() {
    this.setState({open: false});
  }
  onDrawerClose() {
    this.setState({open: false});
  }

  render() {
    return (
      <div>
        <div>
	     	<img width={35} height={35} src={shoppingcart} onClick={this.toggleDrawer}
	            disabled={this.state.open }/>
        </div>

        <ReactDrawer className="drawer"
          open={this.state.open}
          position={this.state.position}
          onClose={this.onDrawerClose}
          noOverlay={this.state.noOverlay}>
          
          <i onClick={this.closeDrawer} className="icono-cross"></i>
          
          <h2 className = "shoppingcartstyle">Shopping Cart</h2>
	      <img style={{width:'250px', height:'150px'}} src={emptycart} alt="emptycart" />
          <div>
       		<a href="/cart">
          	<button type="button" class="btn btn-dark"><p>VIEW CART</p></button></a>
          </div>

        
        </ReactDrawer>
      </div>
    );
  }
}
