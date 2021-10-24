import React from 'react'
import "./cabecera.css";
import imagen from "../../img/tipicosmargoth.png";
import PropTypes from 'prop-types'
import Menu from './menu'

function cabecera(props) {
    return (
        <>
        <div className="container py-4">
        <header className="pb-3 mb-4 border-bottom">
      <div class="d-flex align-items-center text-dark text-decoration-none">
          <img src={imagen} className="img-fluid imagen" />
          <Menu/>
      </div>
     
    </header>
    </div>
        </>
    )
}

cabecera.propTypes = {

}

export default cabecera

