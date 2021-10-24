import {useState , useEffect} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';
import '../Contador';
import Fila from './Tbody2';
import Constantes from '../Constantes';
const State=(props) => {
    const [productos, setProducto]      =   useState([]);
    const [busqueda, setBuscar]         =   useState([]);
    const [tabla, setTabla]             =   useState([]);
    const [actualizar, setActualizar]   =   useState(0);
    const HolaChele = () =>
    {
        fetch(`${Constantes.RUTA_API}/obtener_productos.php`).then((res) =>
        res.json()).then((data)=>{
            setProducto(data);
            setTabla(data);
        });   
    }
    const Buscar = (e) =>
    {
        let valor = document.getElementById("Buscar").value;
        e.preventDefault();
        
        var codigo = e.which || e.keyCode;
        
        if (codigo == 127){
           //setProducto(tabla);
           
        }
        if(codigo >= 65 && codigo <= 90 || codigo >= 97 && codigo <=122 || codigo >=48 && codigo <=57){
            const bandera=1;  
            console.log(String.fromCharCode(codigo));
            valor = valor + String.fromCharCode(codigo);
            
          }
          document.getElementById("Buscar").value = valor
          filtrar(document.getElementById("Buscar").value);
          /*const objetoenvio =
          {
              id: document.getElementById("Buscar").value,
          }

            const cargaUtil = JSON.stringify(objetoenvio);
            console.log("Este es mi Objeto"+cargaUtil);

            const respuesta = await fetch(`${Constantes.RUTA_API}/buscar_productos.php`, {
            body:cargaUtil,
            });
            const data  =   await   respuesta.json();
            setProducto(data);
           //console.log( document.getElementById("Buscar").value);
        /*
        const resul =   await fetch(`${Constantes.RUTA_API}/buscar_productos.php`);
        const data  =   await   resul.json();
        setProducto(data);*/
    }
    const filtrar = (busqueda) => 
    {
        //HolaChele();
        const resultadoBusqueda = tabla.filter((elementos) =>
        {
            if(elementos.id.toString().includes(busqueda)||elementos.producto.toString().includes(busqueda)||elementos.descripcion.toString().includes(busqueda)){
                return elementos;
            }
            
        });
        setBuscar(resultadoBusqueda);
        setProducto(resultadoBusqueda);
        console.log("Busqueda de resultado :"+busqueda);
    }
    
    useEffect(() => {
       /* */
      // Buscar();
       HolaChele();
        //const data  =      resul.json();
    },[actualizar])
    return (
        <>
     <div className="container py-4">
         <div className=" row align-items-start" >
         <div className="col-sm-2">
            
            </div>
           
         </div>
         <div class="container">
  <div class="row">
    <div class="col">
    <button className="btn btn-info" onClick={()=> setActualizar(actualizar +1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                </svg>
            </button>
    </div>
    <div class="col">
    <div className="input-group mb-3 mb-6">
            
            <input type="text" onKeyPress={Buscar}  class="form-control" id="Buscar" aria-describedby="basic-addon2"   placeholder />
            <span class="input-group-text" id="basic-addon2"> Buscar : 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-keyboard" viewBox="0 0 16 16">
  <path d="M14 5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12zM2 4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2z"/>
  <path d="M13 10.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm0-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-5 0A.25.25 0 0 1 8.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 8 8.75v-.5zm2 0a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25v-.5zm1 2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-5-2A.25.25 0 0 1 6.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 6 8.75v-.5zm-2 0A.25.25 0 0 1 4.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 4 8.75v-.5zm-2 0A.25.25 0 0 1 2.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 2 8.75v-.5zm11-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-2 0a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-2 0A.25.25 0 0 1 9.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 9 6.75v-.5zm-2 0A.25.25 0 0 1 7.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 7 6.75v-.5zm-2 0A.25.25 0 0 1 5.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 5 6.75v-.5zm-3 0A.25.25 0 0 1 2.25 6h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5A.25.25 0 0 1 2 6.75v-.5zm0 4a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm2 0a.25.25 0 0 1 .25-.25h5.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-5.5a.25.25 0 0 1-.25-.25v-.5z"/>
</svg>
            </span>
            </div>
    </div>
    
  </div>
</div>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Producto</th>
      <th scope="col">Descripción</th>
      <th scope="col">Opciones</th>
    </tr>
  </thead>
  <tbody>
      {productos.map(framework=>{
          return(
                <Fila img={framework.id} producto={framework.producto} descripcion={framework.descripcion} data={framework}/>  
          );
      })}
  </tbody>
</table>
</div>
        </>
    )
}

State.propTypes = {

}

export default State

