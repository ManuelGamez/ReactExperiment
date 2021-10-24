import React, {useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import Cabecera from './cabezera/cabecera'
import Tabla2 from './Tabla/State';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Constantes from './Constantes';
import Fila from '../components/Tabla/Tbody2';
const Contador = () => {
    //:::::::::::::::::: Para cuando el formulario envia los datos
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        const objetoenvio =
        {
            producto:e.target[0].value,
            descripcion:e.target[1].value
        }
        const cargaUtil = JSON.stringify(objetoenvio);
        console.log(cargaUtil);

        funcionprueba(cargaUtil);
       
    };
   const funcionprueba=(cargaUtil) => {
    const respuesta =  fetch(`${Constantes.RUTA_API}/guardar_videojuego.php`, {
        method: "POST",
        body: cargaUtil,
    });
   }
    //:::::::::::::::: mostrando los datos en tabla ::::::::::::::::::::::::::::::::::::::::::::::::
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    return (
        <>
       <Cabecera/>
       <div className="container py-4">
       <form className="field" onSubmit={handleSubmit}>
       <div className="mb-2">
        <label for="exampleFormControlInput1" class="form-label">Producto: </label>
        <input type="text" class="form-control" id="producto"  placeholder="nombre producto"/>
        </div>
        <div className="mb-2">
        <label for="exampleFormControlTextarea1" className="form-label">Descripcion: </label>
        <textarea className="form-control" rows="3" id="descripcion"  ></textarea>
        </div>
        <button className="btn btn-primary is-success mt-2" >Guardar</button>
        </form>
        </div>
        <Tabla2/>
       </>
    );
    }




Contador.propTypes = {

}

export default Contador

