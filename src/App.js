import React, { Component } from 'react';
import MyNavBar from './component/MyNavbar.js';
import ListaAlumnos from './component/ListaAlumnos.js';

class App extends Component {
  render() {
    return (
      <div>
        <MyNavBar />
        <div className="container">
          <ListaAlumnos />
        </div>
      </div>
    );
  }
}

export default App;