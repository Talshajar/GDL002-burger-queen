import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import InterfaceOptions from "./Components/interface";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header row">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Burger Queen</h2>
          <InterfaceOptions />
     </div>
     </div>
    );
  }
}

export default App;
