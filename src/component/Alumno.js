import React, { Component } from 'react';
import {Button} from 'reactstrap';
import "./Components.css";

class Alumno extends Component {

    ingresarCalificaciones = (e) => {
        this.props.abrirModalCalificaciones(e.target.id);
    }

    render() { 
        return ( 
            // estilo de tarjeta de bootstrap ??
            // estilo de grid
           <tr>
               <td>{this.props.Nombre}</td>
               <td>{this.props.ApellidoPaterno}</td>
               <td>{this.props.ApellidoMaterno}</td>
               <td>
                    <a href="#" id={this.props.IdAlumno} onClick={this.ingresarCalificaciones} >
                        {this.props.Matricula}
                    </a>
               </td>
               <td>
               {this.props.Plantel}
               </td>
               <td>
                   <Button color="danger" onClick={this.props.eliminarAlumno} id={this.props.IdAlumno} >Eliminar</Button>
               </td>
           </tr>
         );
    }
}
 
export default Alumno;
