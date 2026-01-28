import { useState } from "react";
import { limitarPalabras } from "../../utils/text";


function ParrafoExtendible(props){
    let parrafo = props.parrafo;
    let limite_palabras = props.limite_palabras || 10;
    /*
        useState:
            Crea estados
            recibe el valor inicial de mi estado
            retorna un array con dos elementos
                el primero es el valor de mi estado
                el segundo es la funcion setter para modificarlo
                    esta funcion nos permite cambiar el valor pero ademas renderiza mi componente
    */
    const state = useState(false)
    const estaExtendidoValue = state[0];
    const setEstaExtendido = state[1];


    function extenderParrafo(){
        setEstaExtendido(true)
    }

    function achicarParrafo(){
        setEstaExtendido(false)
    }
    
    return (
        <div>
            <p>
                {
                    estaExtendidoValue
                    ? parrafo
                    : limitarPalabras(parrafo, limite_palabras) + '...'
                }
            </p>
            {
                estaExtendidoValue
                ? <button onClick={achicarParrafo}>Ver menos</button>
                : <button onClick={extenderParrafo}>Ver mas</button>
            }
        </div>
    )
}

export default ParrafoExtendible