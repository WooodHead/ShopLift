import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AboutUs from  './components/AboutUs.js';
import Cart from './components/Cart';
import CheckOut from './components/checkout/CheckOut';
import Contact from './components/Contact';
import Footer from './components/layout/Footer';
import NavBar from './components/layout/NavBar';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Shop from './components/ShopSideBar';
import SignUp from './components/SignUp';
import UserAgreement from './components/UserAgreement';
import UserPrivacy from './components/UserPrivacy';

import './App.css';
import '../node_modules/react-image-slider/lib/image-slider.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='App-header'>
          <NavBar />
          <h1 className="App-title">“Deals so great - It’s a steal.”</h1>
        </div>
        <div className='App-landing'>
          <BrowserRouter>
            <div>
              <div id='routes'>
                <Route exact path='/' component={Home} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/about-us' component={AboutUs} />
                <Route exact path='/shop' component={Shop} />
                <Route exact path='/login' component={LogIn} />
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/cart' component={Cart} />
                <Route exact path='/check-out' component={CheckOut} />
                <Route exact path='/useragreement' component={UserAgreement} />
                <Route exact path='/userprivacy' component={UserPrivacy} />
              </div>
            </div>
          </BrowserRouter>
        </div>
        <div className='App-footer'>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
