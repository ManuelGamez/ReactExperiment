import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'

import Constantes from '../Constantes';
function Tbody2({img,producto,descripcion,data}) {
   var [state,setState] = useState({
       id: '',
       producto: '',
       descripcion: '',
   });
   
   //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //:::::::::::::::::: Para cuando el formulario envia los datos
    const handleSubmit = (e) =>
    {
        e.preventDefault();
       console.log(e.target[0].value);
        
        const objetoenvio =
        {
            id:e.target[0].value,
            producto:e.target[1].value,
            descripcion:e.target[2].value
        }
        const cargaUtil = JSON.stringify(objetoenvio);
        console.log(cargaUtil);

       const respuesta =  fetch(`${Constantes.RUTA_API}/actualizar_videojuego.php`, {
            method: "PUT",
            body: cargaUtil,
        });
    };
    //:::::::::::::::::::: Para Eliminar datos :::::::::::::::::::::::::::::::::::::::

    const handleSubmit2 = (e) =>
    {
        e.preventDefault();
       console.log(e.target[0].value);
        
        const objetoenvio =
        {
            id:e.target[0].value,
            producto:e.target[1].value,
            descripcion:e.target[2].value
        }
        const cargaUtil = JSON.stringify(objetoenvio);
        console.log(cargaUtil);

       const respuesta =  fetch(`${Constantes.RUTA_API}/eliminar_videojuego.php`, {
            method: "DELETE",
            body: cargaUtil,
        });
    };

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    const showModalEdit = (data) =>{
   setState( state = Object.assign({},(data)));
      //alert("mostrar modal "+JSON.stringify(data))
        const inputId = document.getElementById("idProducto");
        inputId.value = state.id;
        const inputProducto = document.getElementById("ProductoModal");
        inputProducto.value = state.producto;
        const inputDescripcion= document.getElementById("DescripcionModal");
        inputDescripcion.value = state.descripcion;
        //console.log(state);
      }
      const showModalEdit2 = (data) =>{
        setState( state = Object.assign({},(data)));
           //alert("mostrar modal "+JSON.stringify(data))
             const inputId = document.getElementById("idProducto2");
             inputId.value = state.id;
             const inputProducto = document.getElementById("ProductoModal2");
             inputProducto.value = state.producto;
             const inputDescripcion= document.getElementById("DescripcionModal2");
             inputDescripcion.value = state.descripcion;
             //console.log(state);
           }
      useEffect(() => {
        //var inputNombre = document.getElementById("prueba");
        //inputNombre.value = state.id;
          
      }, [])
      
    
    //console.log(set);
    //:::::::::::::::: mostrando los datos en tabla ::::::::::::::::::::::::::::::::::::::::::::::::
    return (
        <>
        <tr>
             <td>{img}</td>
             <td>{producto}</td>
             <td>
                 {descripcion}
             </td>
             <td>
                 <button onClick={()=>showModalEdit(data)} data-bs-toggle="modal" data-bs-target="#exampleModal"  className="btn btn-warning" >Actualizar</button>
             </td>
             <td>
                 <button onClick={()=>showModalEdit2(data)} className="btn btn-danger " data-bs-toggle="modal" data-bs-target="#exampleModal2" >Eliminar</button>
             </td>
         </tr> 


         
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
    <div className="container py-4">
       <form className="field" onSubmit={handleSubmit}>
       <div className="mb-2">
        <label for="exampleFormControlInput1" class="form-label">Id: </label>
        <input type="text" class="form-control" id="idProducto" readOnly  placeholder />
        </div>
       <div className="mb-2">
        <label for="exampleFormControlInput1" class="form-label">Producto: </label>
        <input type="text" class="form-control" id="ProductoModal"   placeholder />
        </div>
        <div className="mb-2">
        <label for="exampleFormControlTextarea1" className="form-label">Descripcion: </label>
        <textarea className="form-control" rows="3" id="DescripcionModal"  placeholder=""></textarea>
        </div>
        <button className="btn btn-primary is-success mt-2" >Guardar</button>
        </form>
        </div>
    </div>
  </div>
</div>


<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
    <div className="container py-4">
       <form className="field" onSubmit={handleSubmit2}>
       <div className="mb-2">
        <label for="exampleFormControlInput1" class="form-label">Id: </label>
        <input type="text" class="form-control" id="idProducto2" readOnly  placeholder />
        </div>
       <div className="mb-2">
        <label for="exampleFormControlInput1" class="form-label">Producto: </label>
        <input type="text" class="form-control" id="ProductoModal2"  readOnly  placeholder />
        </div>
        <div className="mb-2">
        <label for="exampleFormControlTextarea1" className="form-label">Descripcion: </label>
        <textarea className="form-control" rows="3" id="DescripcionModal2" readOnly placeholder=""></textarea>
        </div>
        <button className="btn btn-danger is-success mt-2" >Guardar</button>
        </form>
        </div>
    </div>
  </div>
</div>

     </>
    )

}

Tbody2.propTypes = {

}

export default Tbody2

