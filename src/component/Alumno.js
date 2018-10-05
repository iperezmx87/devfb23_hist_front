import React, { Component } from 'react';
import {Button} from 'reactstrap';
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
               <td>
               {this.props.Plantel}
               </td>
               <td>
                   <Button color="danger" onClick={this.props.eliminarAlumno} id={this.props.IdAlumno} >Eliminar</Button>
               </td>
               <td id={this.props.IdAlumno} className="tdHidden"></td>
           </tr>
         );
    }
}
 
export default Alumno;
