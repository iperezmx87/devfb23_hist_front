import React, { Component } from 'react';
import MyNavBar from './component/MyNavbar.js';
import Routes from "./Routes.js";

class App extends Component {
  render() {
    return (
      <div>
        <MyNavBar />
        <div className="container">
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;