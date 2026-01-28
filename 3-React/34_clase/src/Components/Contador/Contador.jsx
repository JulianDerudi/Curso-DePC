/*
    Crear componente contador
    tendra un contador interno que empezara en 1
    tendra 2 botones:
        - incrementar (incrementa en 1)
        - decrementar (decrementa en 1)
    no se puede decrementar a menos de 1
    no se puede incrementar a mas de 10
    <button>Decrementar</button>
    <span>{contador}</span>
    <button>Incrementar</button>
*/

import { useState } from "react";


function Contador(props) {
    const stateContador = useState(props.initial);
    const contadorValue = stateContador[0];
    const setContador = stateContador[1];

    function decrementContador(){
        if(contadorValue>props.min){
            const nuevoContador = contadorValue - 1;
            setContador(nuevoContador)
        } else {
            alert(`no podes tener menos de ${props.min}`)
        }
    }

    function incrementContador() {
        if(contadorValue < props.max) {
            const nuevoContador = contadorValue + 1;
            setContador(nuevoContador)
        } else {
            alert(`llegaste al limite: ${props.max}`)
        }
    }

    return (
        <div>
            <button onClick={decrementContador} disabled={contadorValue <= props.min}>Decrementar</button>
            <span>{contadorValue}</span>
            <button onClick={incrementContador} disabled={contadorValue >= props.max}>Incrementar</button>
        </div>
    )
}

export default Contador