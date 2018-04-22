import React, { Component } from "react";
import { Dropdown,
         DropdownToggle,
         DropdownMenu,
         DropdownItem } from 'reactstrap';
import user from "../picture/user.png";

import fire from '../fire';

export default class UserDropDown extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  logout(){
    fire.auth()
    .signOut()
    .then(() => {
      this.props.loggedIn(false);
    }, function(error) {
      console.log("Error!" + error);
    });
  }

  render() {
    var currentUser = fire.auth().currentUser;
    if (!currentUser){
      return (
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
  
          <DropdownToggle className = 'dropdown' color ={'white'}>
            <img width={45} height={45} src={user} alt={user}/>
          </DropdownToggle>
  
          <DropdownMenu>
            <DropdownItem><a href="/login">LOG IN</a></DropdownItem>
            <DropdownItem divider />
            <DropdownItem><a href="/signup">SIGN UP</a></DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );
    }
    else{
      return (
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
  
          <DropdownToggle className = 'dropdown' color ={'white'}>
            <img width={45} height={45} src={user} alt={user}/>
          </DropdownToggle>
  
          <DropdownMenu>
            <DropdownItem><a href="/" 
              onClick={this.logout.bind(this)}>LOG OUT</a>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem><a href="/signup">SIGN UP</a></DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );
    }
  }
}
