import React  from 'react';
import { Route, Switch } from 'react-router-dom';
import NoEncontrado from './component/NoEncontrado.js';
import Home from './component/Home.js';
import ListaAlumnos from './component/ListaAlumnos.js';
import ConsultaCalificaciones from './component/ConsultaCalificaciones.js';

// no mames falta el otro componente !!
export default () =>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/carga-calificaciones" exact component={ListaAlumnos} />
        <Route path="/consulta-calificaciones" exact component={ConsultaCalificaciones} />
        <Route component={NoEncontrado} />
    </Switch>