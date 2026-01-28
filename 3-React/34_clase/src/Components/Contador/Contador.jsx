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


function Contador() {
    const stateContador = useState(1);
    const contadorValue = stateContador[0];
    const setContador = stateContador[1];

    function decrementContador(){
        if(contadorValue>1){
            const nuevoContador = contadorValue - 1;
            setContador(nuevoContador)
        } else {
            alert("no podes tener menos de uno")
        }
    }

    function incrementContador() {
        if(contadorValue < 10) {
            const nuevoContador = contadorValue + 1;
            setContador(nuevoContador)
        } else {
            alert("llegaste al limite")
        }
    }

    return (
        <div>
            <button onClick={decrementContador}>Decrementar</button>
            <span>{contadorValue}</span>
            <button onClick={incrementContador}>Incrementar</button>
        </div>
    )
}

export default Contador