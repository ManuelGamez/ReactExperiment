import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

const Numberinput = ({name}) => {
    const [numeros, setNumeros] = useState({
        numero1:0,
        numero2:0,
    });
    const handleChange = (e) =>
    {
        setNumeros({
            numero1: e.target.value,
            numero2: e.target.value,
        });
    }
    return (
        <>
            <label>
                {name}: <input onChange={handleChange} type="text"/>
            </label>
        </>
    )
}

Numberinput.propTypes = {
name:PropTypes.string,
}

export default Numberinput
