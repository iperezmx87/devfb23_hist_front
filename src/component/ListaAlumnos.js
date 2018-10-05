import React, { Component } from 'react';

import{Button, Table,
       Modal, ModalHeader, ModalBody,
       Form, FormGroup, Label, Input,
       Row, Col
} from 'reactstrap';

import axios from 'axios';
import Alumno from './Alumno.js';
import Constantes from '../Constants.js';

import "./Components.css";

class ListaAlumnos extends Component {
    constructor(props){
        super(props);

        this.state = { 
        // la lista de datos ?? si
            alumnos:[{}],
            modal:false,
            Nombre:"",
            ApellidoMaterno:"",
            ApellidoPaterno:"",
            Matricula:"",
            Plantel:""
        };
    }

    componentDidMount(){
        this.cargarAlumnos();
    }

    cargarAlumnos = ()=>{
        axios.get(`${Constantes.getUrl_api()}alumno/`)
        .then(response => {
            this.setState({
                alumnos:response.data.body
            });
        })
        .catch(error =>{
            alert(error);
        });
    }

    nuevoAlumno = (e) =>{
        e.preventDefault();

        axios.post(`${Constantes.getUrl_api()}alumno/`, {
            Nombre:this.state.Nombre,
            ApellidoMaterno:this.state.ApellidoMaterno,
            ApellidoPaterno:this.state.ApellidoPaterno,
            Matricula:this.state.Matricula,
            Plantel:this.state.Plantel
        })
        .then((response) => {
            alert(response.data.message);
            this.cargarAlumnos();
            this.openDialog();
        })
        .catch(error => {
            alert(error);
        });
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    openDialog = () => {
        this.setState({
            modal:!this.state.modal
        });
    }

    eliminarAlumno = (e) =>{
        alert(e.target.id);
        
        axios.delete(`${Constantes.getUrl_api()}alumno/${e.target.id}/`)
        .then((response) => {
            alert("Alumno eliminado correctamente");
        })
        .catch((error) => {
            alert(error);
        });
    }

    render() { 
        return ( 
            // una lista de alumnos
            // tabla con un link que abra el detalle en un modal con la consulta de calificaciones del alumno seleccionado
            <div>
                <div className="spacing"></div>
                <h3>Lista de alumnos</h3>
                <div className="spacing" ></div>
                <div className="container">
                    <div className="float-right">
                        <Button color="success" onClick={this.openDialog}>Nuevo Alumno</Button>
                    </div>

                    <div className="clear"></div>
                    <div className="spacing" ></div>

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
                                this.state.alumnos.map((alumno, index) => <Alumno Nombre={alumno.Nombre}
                                                                           ApellidoPaterno={alumno.ApellidoPaterno}
                                                                           ApellidoMaterno={alumno.ApellidoMaterno}
                                                                           Matricula={alumno.Matricula}
                                                                           IdAlumno={alumno._id}
                                                                           key={index}
                                                                           eliminarAlumno={this.eliminarAlumno}
                                                                           Plantel={alumno.Plantel != undefined ? alumno.Plantel : ""} />)
                            }
                        </tbody>
                    </Table>
                </div>
                <div className="spacing"></div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} size={"lg"}>
                    <ModalHeader toggle={this.toggle}>Nuevo alumno</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.nuevoAlumno}>
                            <Row>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="txtNombre">Nombre(s)</Label>
                                        <Input type="text" name="Nombre" id="txtNombre" placeholder="Nombre(s)" required onChange={this.onChange}  />
                                    </FormGroup>
                                </Col>

                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="txtApPaterno">Apellido Paterno</Label>
                                        <Input type="text" name="ApellidoPaterno" id="txtApPaterno" placeholder="Apellido paterno" required onChange={this.onChange} />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="txtApMaterno">Apellido Materno</Label>
                                        <Input type="text" name="ApellidoMaterno" id="txtApMaterno" placeholder="Apellido materno" required onChange={this.onChange}/>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <FormGroup>
                                <Label for="txtMatricula">Matrícula</Label>
                                <Input type="text" name="Matricula" id="txtMatricula" placeholder="Matrícula" required onChange={this.onChange} />
                            </FormGroup>

                             <FormGroup>
                                <Label for="txtPlantel">Matrícula</Label>
                                <Input type="text" name="Plantel" id="txtPlantel" placeholder="Plantel" required onChange={this.onChange} />
                            </FormGroup>

                            <FormGroup className="float-right">
                                <Button color="primary" >Crear</Button>{' '}
                                <Button color="secondary" onClick={this.openDialog}>Cerrar</Button>
                            </FormGroup>
                            <div className="clear"></div>
                        </Form>
                    </ModalBody>
                </Modal>               
            </div>            
         );
    }
}
 
export default ListaAlumnos;