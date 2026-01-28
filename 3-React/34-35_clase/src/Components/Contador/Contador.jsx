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


function Contador({initial=1, min=1, max=10}) {
    const [contadorValue, setContador] = useState(initial);

    function decrementContador(){
        if(contadorValue>min){
            const nuevoContador = contadorValue - 1;
            setContador(nuevoContador)
        } else {
            alert(`no podes tener menos de ${min}`)
        }
    }

    function incrementContador() {
        if(contadorValue < max) {
            const nuevoContador = contadorValue + 1;
            setContador(nuevoContador)
        } else {
            alert(`llegaste al limite: ${max}`)
        }
    }

    return (
        <div>
            <button onClick={decrementContador} disabled={contadorValue <= min}>Decrementar</button>
            <span>{contadorValue}</span>
            <button onClick={incrementContador} disabled={contadorValue >= max}>Incrementar</button>
        </div>
    )
}

export default Contador