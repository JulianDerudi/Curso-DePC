// UN BUEN DICCIONARIO

/*
const AVAILABLE_ROLES_ACTIONS = Object.freeze({
    BOMBA_ATOMICA: 'bomba_atomica',
    READ: 'read',
    POST: 'post',
    DELETE: 'delete',
    PUT: 'put'
})

const AVAILABLE_ROLES = Object.freeze({
    ADMIN: {
        NAME: 'admin',
        ACTIONS: [
            AVAILABLE_ROLES_ACTIONS.READ, 
            AVAILABLE_ROLES_ACTIONS.POST, 
            AVAILABLE_ROLES_ACTIONS.PUT, 
            AVAILABLE_ROLES_ACTIONS.DELETE
        ]
    },
    MAINTAIN: {
        NAME: 'maintain',
        ACTIONS: [
            AVAILABLE_ROLES_ACTIONS.READ, 
            AVAILABLE_ROLES_ACTIONS.POST,
            AVAILABLE_ROLES_ACTIONS.PUT
        ]
    },
    SUPPORT: {
        NAME: 'support',
        ACTIONS: [
            AVAILABLE_ROLES_ACTIONS.DELETE
        ]
    },
    GUESS: {
        NAME: 'guess',
        ACTIONS: [
            AVAILABLE_ROLES_ACTIONS.READ
        ]
    }
})
*/




/* 
EJERCICIO:
    Crear un contador con HTML Y JS

    <div>
        <button id='btn-incrementar'>+</button>
        <span id='contador'></span>
        <button id='btn-decrementar'>-</button>
    </div>

    Crear una variable llamada estado_contador que empiece en 0
    Crear 3 funciones

        - renderContador() Tomar el estado_contador y lo mostrara como texto interno (innerText) en el span contador
        - incrementarContador() Incrementar en 1 el contador y renderizar el contador (llamando a renderContador)
        - decrementarContador() decrementar en 1 el contador y renderizar el contador (llamando a renderContador)

    Al inciar el programa asegurate de que se llame a renderContador
*/

let estado_contador = 0;
const contador = document.getElementById('contador');
const btn_incrementar = document.getElementById('btn-incrementar');
const btn_decrementar = document.getElementById('btn-decrementar');

function renderContador() {
    contador.innerText = estado_contador;
}

function incrementarContador() {
    estado_contador++;
    renderContador()
}

function decrementarContador() {
    estado_contador--;
    renderContador()
}

/*
    'addEventListener' 
    Sirve para asociar funcionalidad a eventos
    params:
        Event key: string, con el tipo de evento
        accion: function, la accion a realizar al descadenarse ese evento
*/
btn_decrementar.addEventListener(
    'click',
    decrementarContador
)
btn_incrementar.addEventListener(
    'click',
    incrementarContador
)


renderContador()


/*
    Si se intenta hacer el evento 'copy' sobre el span con id no-copiar, mostrar por alerta, 'Ey, no puedes hacer eso'
*/

const no_copiable = document.getElementById('no-copiar');

function evitarCopia(evento){
    evento.preventDefault(); // evita realmente que se copie (sin esto la alerta se lanzaba, pero se copiaba igual)
    alert('Ey, no puedes hacer eso');
}

no_copiable.addEventListener (
    "copy",
    evitarCopia
)  
