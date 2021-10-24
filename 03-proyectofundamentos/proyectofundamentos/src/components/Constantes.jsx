import React from 'react'

const Constantes = {
    RUTA_API: "http://localhost:8080/tipicosmargot",
};
const RutadeApi = async() =>
{
    const resul =   await   fetch('http://localhost:8080/tipicosmargot');
    const data  =   await   resul.json();
}

export default Constantes
