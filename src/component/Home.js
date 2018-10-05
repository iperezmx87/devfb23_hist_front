import React, { Component } from 'react';
import "./Components.css";

class Home extends Component {
    render() { 
        return ( 
            <div className="contanier">
                <div className="lander">
                   <h3>Bienvenido. Selecciona una opción</h3>
                    <div className="spacing">&nbsp;</div>
                    <div className="spacing">&nbsp;</div>
                            <a href="/consulta-calificaciones" className="button btn-success">
                                <span className="fas fa-user-graduate"></span>
                                <p>Soy Alumno</p>
                            </a>
                            
                            <a href="/carga-calificaciones" className="button btn-success" style={{marginLeft:"50px"}} >
                                <span className="fas fa-quran"></span>
                                <p>Soy Profesor</p>
                            </a>
                </div>
            </div>
         );
    }
}
 
export default Home;