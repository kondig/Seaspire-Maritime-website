import React, { Component } from 'react';
import './App.css';
// import FontAwesome from 'react-fontawesome';
// import Sticky from 'react-stickynode';
// import scrollToComponent from 'react-scroll-to-component';
// import { slide as Menu} from 'react-burger-menu';
// import logo from './images/SeaSpire_logo.png';
// import {Dropdown} from './components/dropdown';

import {Header} from './components/Header';
import {Body} from './components/Body';
import {Footer} from './components/Footer';



class App extends Component {
  render() {
    // const stolos = ["Tankers", "Bulk Carriers", "Ferries"];
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
