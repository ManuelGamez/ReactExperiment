import  { useState } from 'react';
import PropTypes from 'prop-types'
import Fila from './tbody';
import Constantes from '../Constantes';
const tabla =() =>{
    //const [variable, callforupdate] = useState(0);// <-- this it
    const RutadeApi = async() =>
    {
        const resul =   await   fetch('http://localhost:8080/tipicosmargot');
        const data  =   await   resul.json();
       // setProducto(data);
    }

    return(

        <>
        <div className="container py-4">
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
     
            </tbody>
            </table>
        </div>
        </>
    );

/*class tabla extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videojuegos: [],
        };
    }
    async  componentDidMount() {
        const respuesta = await fetch(`${Constantes.RUTA_API}/obtener_productos.php`);
        const videojuegos = await respuesta.json();
        this.setState({
            videojuegos: videojuegos,
        });
    }
    render() {
    return (
        <>
        <div className="container py-4">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Producto</th>
      <th scope="col">Descripción</th>
      <th scope="col">Opciones</th>
    </tr>
  </thead>
  <tbody>
  {this.state.videojuegos.map(videojuego => {
      return <Fila key={videojuego.id} videojuego={videojuego}></Fila>;
})}
  </tbody>
</table>
</div>
        </>
    )
}
}*/
};
tabla.propTypes = {

}

export default tabla


