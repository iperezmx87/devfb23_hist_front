import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand } from 'reactstrap';
  
class MyNavBar extends Component {
    
    render() { 
        return ( 
            <div>
                <Navbar color="dark" dark expand="md">
                    <div className="container">
                        <NavbarBrand href="/">Dev.F Historial académico - alumnos</NavbarBrand>
                    </div>
                </Navbar>
          </div>
         );
    }
}
 
export default MyNavBar;