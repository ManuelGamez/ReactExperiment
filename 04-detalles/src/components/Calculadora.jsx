import { useState } from 'react'
import Numberinput from './Numberinput';
import Resultado from './Resultado';

const Calculadora = () => {
    const [suma,setSuma] = useState(0);
    
    return (
        <>
            <Numberinput name="Número 1"/>
            <Numberinput name="Número 2"/>

            <Resultado operacion="Suma" calculo={suma}/>
            <Resultado operacion="Resta" calculo={suma}/>
            <Resultado operacion="Multiplicacion" calculo={suma}/>
            <Resultado operacion="Divisicion" calculo={suma}/>
        </>
    )
}

export default Calculadora