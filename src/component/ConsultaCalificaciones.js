import React, { Component } from 'react';
import{Button, Table,
    Form, FormGroup, Label, Input
} from 'reactstrap';

import axios from 'axios';
import Constantes from '../Constants.js';

import "./Components.css";

class ConsultaCalificaciones extends Component {
    state = { 
        busqueda:"",
        resultados:[{}],
        calificaciones: [{Calificacion:{}}]
     }

     onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    buscarAlumno = (e) => {
         e.preventDefault();
         // buscando por matricula
         axios.get(`${Constantes.getUrl_api()}alumno/busqueda/${this.state.busqueda}/`)
         .then(response => {
            if (response.data.body.length > 0){
                this.setState({
                    resultados: response.data.body
                 });
            } else{
                alert("Datos no encontrados");
            }
         })
         .catch(error => alert(error));
    }

    cargarCalificaciones = (e) => {
        axios.get(`${Constantes.getUrl_api()}alumno/${e.target.id}/`)
        .then(response => {
           if (response.data.body.Asignaturas.length > 0){
               this.setState({
                   calificaciones: response.data.body.Asignaturas
                });
           } else{
               alert("Alumno sin calificaciones cargadas");
           }
        })
        .catch(error => alert(error));
    }

    clearForm = () => {
        this.setState({
            busqueda:"",
            resultados:[{}],
            calificaciones:[{Calificacion:{}}]
        });
    }

    render() { 
        return ( 
            <div>
                <div className="spacing"></div>  
                <h3>Consulta de calificaciones</h3>
                <div className="spacing" ></div>
                <div className="container">
                    <Form onSubmit={this.buscarAlumno}>
                        <FormGroup>
                            <Label for="txtBusqueda">Matricula:</Label>
                            <Input type="text" name="busqueda" id="txtBusqueda" required onChange={this.onChange}  />
                        </FormGroup>
                        <FormGroup className="float-right">
                            <Button color="primary" >
                                <span className="fas fa-search" style={{fontSize:"20px"}}>&nbsp;</span>
                                Buscar
                            </Button>{' '}
                            <Button color="secondary" onClick={this.clearForm}>
                                <span className="far fa-file" style={{fontSize:"20px"}}>&nbsp;</span>
                                Nuevo
                            </Button>
                        </FormGroup>
                        <div className="clear"></div>
                    </Form>

                    <div className="dvResultados">
                        <h5>Resultados</h5>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Apellido Paterno</th>
                                    <th>Apellido Materno</th>
                                    <th>Matrícula</th>
                                    <th>Plantel</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.resultados.map((alumno, index) =>             
                                    <tr key={index}>
                                        <td>
                                        <a href="#" onClick={this.cargarCalificaciones} id={alumno._id}>{alumno.Matricula}</a>
                                        </td>
                                        <td>
                                            {alumno.Nombre}
                                        </td>
                                        <td>
                                            {alumno.ApellidoPaterno}
                                        </td>
                                        <td>
                                            {alumno.ApellidoMaterno}
                                        </td>
                                        <td>
                                           {alumno.Plantel}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                
                    <div className="dvCalificaciones">
                        <h5>Calificaciones</h5>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Créditos</th>
                                    <th>Semestre</th>
                                    <th>Evauación</th>
                                    <th>Calificación</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.calificaciones.map((calificacion, index) =>             
                                    <tr key={index}>
                                        <td>{calificacion.Nombre}</td>
                                        <td>{calificacion.Creditos}</td>
                                        <td>{calificacion.Semestre}</td>
                                        <td>{calificacion.Calificacion.Evaluacion}</td>
                                        <td>{calificacion.Calificacion.Calificacion}</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ConsultaCalificaciones;