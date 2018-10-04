import React, { Component } from 'react';
import "./Components.css";

class Alumno extends Component {

    render() { 
        return ( 
            // estilo de tarjeta de bootstrap ??
            // estilo de grid
           <tr>
               <td>{this.props.Nombre}</td>
               <td>{this.props.ApellidoPaterno}</td>
               <td>{this.props.ApellidoMaterno}</td>
               <td>
                    <a href="javascript:;">
                        {this.props.Matricula}
                    </a>
               </td>
               <td id={this.props.IdAlumno} className="tdHidden"></td>
           </tr>
         );
    }
}
 
export default Alumno;
