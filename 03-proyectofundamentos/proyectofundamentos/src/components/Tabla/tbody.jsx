import React from 'react'
import PropTypes from 'prop-types'
const tbody = ({img}) =>{
    
    return (
        <>
           <tr>
                <td>{img}</td>
                <td>buenas tardes chele</td>
                <td>
                    <button className="button">Editar</button>
                </td>
                <td>
                    <button  className="button ">Eliminar</button>
                </td>
            </tr> 
        </>
    )
    
}

tbody.propTypes = {
    
};

export default tbody

