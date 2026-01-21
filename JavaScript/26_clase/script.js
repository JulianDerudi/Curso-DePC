/*
    EJERCICIO DE CARRITO DE COMPRA:
        const cart = [
            {
                id: 1,
                title: "mouse gamer",
                price: 4000,
                quantity: 2 // Cuanto se compro de este elemento
            },
            {
                id: 1,
                title: "PC Dell",
                price: 40000,
                quantity: 6 // Cuanto se compro de este elemento
            },
            {
                id: 1,
                title: "Monitor 24\"",
                price: 6000,
                quantity: 6 // Cuanto se compro de este elemento
            },
        ]

    FUNCIONES:
        - findProductFromCartById(product_id) busque el producto por id y lo retorne
        - getTotalPrice() Obtiene precio Total
        - deleteProductById(product_id) elimina el producto por id del carrito
        - incrementProductById(product_id) incrementa la quantity del producto
        - decrementProductById(product_id) incrementa la quantity del producto (o elimina en caso de ser 1)
        - restartCart() VACIA el carrito
*/

const cart_containerHTML = document.getElementById('cart-container');

const cart = [
    {
        id: 1,
        title: "Mouse Gamer",
        price: 4000,
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRVnEtadNf3umlZ0D_3sGefzpQQhqoeTehuLtiBkvPZ6xvteJiS3zgjLpld9V_OJXDUJ-d0Io2JsC9gFNUIhOErvCUmEFO-DpUCqY0OS7KhBoI0FuCw8heYQ1BK5xXaffzyyT7oTpkHbw&usqp=CAc",
        quantity: 2 // Cuanto se compro de este elemento
    },
    {
        id: 2,
        title: "PC Dell",
        price: 40000,
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS2capnC-JkqNzBEEFWxC3Uvc3QFpQ6qFWJrzZmQ-Bd8XhzsG0jkQX7w73o792i81xm-BW88yB2TATUshg7cw9-7JZd9C4Ti62mC4as9rAL5SIMGvS-fFeUXg",
        quantity: 6 // Cuanto se compro de este elemento
    },
    {
        id: 3,
        title: "Monitor 24\"",
        price: 6000,
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSGRlz45UCARz-MnG1Hm2Tq8T7RrVRfQsRQgaIuMTCHyWBQNJSPQhmVlVPmwOT5g1YomUZAK9aO-oslqX6OzMfjejAnYzrXmsGoLvBfO3uNpZnNo_G6Uistyg",
        quantity: 6 // Cuanto se compro de este elemento
    },
]


// funcion de renderizado del carrito
function renderCart() {
    cart_containerHTML.classList.remove('close'); // abrir el contenedor del carrito (no funciona)

    let cart_render_str = '<h1>Carrito de Compras</h1>';

    // render de los productos del carrito
    for(let product of cart){
        if(product.quantity === 0){
            continue;
        }
        cart_render_str += `
            <div class='product-cart'>
                <h3>${product.title}</h3>
                <img src="${product.img}">
                <div class='product-cart-info'>
                    <span>Precio unitario: <p>$${product.price}</p></span>
                    <span>Precio: <p>$${product.price * product.quantity}</p></span> 
                </div>                
                <div class='product-cart-actions'>
                    <button class='btn-incrementar' data-incrementar_id='${product.id}' >+</button>
                    <span class='cantidad'>${product.quantity}</span>
                    <button class='btn-decrementar' data-decrementar_id='${product.id}'>-</button>
                </div>
                <button class='btn-quitar' data-quitar_id='${product.id}' >Quitar</button>
            </div>
        `
    }

    // render del total y boton de reiniciar
    cart_render_str += `
        <div class='cart-footer'>
            <span>Total: $${getTotalPrice()}</span>
            <div>
                <button>Comprar</button>
                <button id='btn-restart_cart' >Borrar Carrito</button>
            </div>
        </div>
    `

    // insertar el html en el contenedor
    cart_containerHTML.innerHTML = cart_render_str;



    // eventos de los botones
    const btn_decrementar_list = cart_containerHTML.getElementsByClassName('btn-decrementar') // devuelve un HTMLCollection
    for(const btn_decrementar of btn_decrementar_list) {
        btn_decrementar.addEventListener('click', decrementProduct)
    }

    const btn_incrementar_list = cart_containerHTML.getElementsByClassName('btn-incrementar')
    for(const btn_incrementar of btn_incrementar_list) {
        btn_incrementar.addEventListener('click', incrementProduct)
    }

    const btn_quitar_list = cart_containerHTML.getElementsByClassName('btn-quitar')
    for(const btn_quitar of btn_quitar_list) {
        btn_quitar.addEventListener('click', deleteProduct)
    }

    const btn_restar_cart = document.getElementById('btn-restart_cart');
    btn_restar_cart.addEventListener('click', restartCart);
    
}


// funciones principales
function decrementProduct(event) {
    try {
        if (determinarExito(70)) {
            const product_id = Number(event.target.dataset.decrementar_id) // obtengo el id del producto 
            const product_selected =  findProductFromCartById(product_id); // busco el producto en el carrito

            if(product_selected.quantity === 1){ // si la cantidad es 1, lo elimino del carrito
            const product_index = cart.indexOf(product_selected); // obtengo el index del producto en el carrito
                if (product_index > -1) { // si lo encontro
                    cart.splice(product_index, 1) // lo elimino
                }
                return renderCart(); // renderizo el carrito y salgo de la funcion
            }
            product_selected.quantity = product_selected.quantity - 1; // decremento la cantidad del producto
            renderCart(); // renderizo el carrito
        } else {
            throw new Error('No se pudo decrementar el producto') // {message:}
        }
    }
    catch (error) {
        renderModal( // muestro el modal de error
            'Fallo del servidor',
            'no has podido decrementar el producto del carrito <br><img src="data:image/jpeg;base64,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">'
        )
    }
}

function incrementProduct(event) {
    try {
        if (determinarExito(90)){
            const product_id = Number(event.target.dataset.incrementar_id)
            const product_selected =  findProductFromCartById(product_id);

            product_selected.quantity = product_selected.quantity + 1;
            renderCart();
        } else {
            throw new Error('No se pudo incrementar el producto') //{message:}
        }
    }
    catch (error) {
        renderModal(
            'Fallo del servidor',
            'no has podido incrementar el producto del carrito <br><img src="data:image/jpeg;base64,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">'
        )
    }
}

function deleteProduct(event) {
    try{
        if(determinarExito(20)){
            const product_id = Number(event.target.dataset.quitar_id)
            const product_selected =  findProductFromCartById(product_id);

            const product_index = cart.indexOf(product_selected);
            if (product_index > -1) {
            cart.splice(product_index, 1)
            }
            renderCart();
        } else {
            throw new Error('No se pudo quitar el producto') //{message:}
        }
    }
    catch (error){
        renderModal(
            'Fallo del servidor',
            'no has podido quitar el producto del carrito <br><img src="data:image/jpeg;base64,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">'
        )
    }  
}

function restartCart(){
    if(cart.length===0){
        return alert("Carrito vacio")
    }
    cart.length = 0;
    renderCart();
}


// funciones auxiliares
function getTotalPrice() {
    let total_price = 0;
    for(const product of cart){
        total_price += product.price * product.quantity;
    }
    return total_price;
}

function findProductFromCartById (id) {
    for(const product of cart){
        if(product.id === id) {
            return product
        }
    }
    return null
}




/* 
    SEGUNDA PARTE DEL EJERCICIO -
    Simular llamadas a un servidor con exito o fallo

    - incrementar tasa-fallo: 10%
    - decrementar tasa-fallo: 30%
    - eliminar    tasa-fallo: 80%

    Cuando incrementar falle deberas mostrar el modal de fallo: 
        Titulo: Fallo del servidor
        texto:  no has podido agregar el producto al carrito

    Cuando decrementar falle deberas mostrar el modal de fallo: 
        Titulo: Fallo del servidor
        texto:  no has podido quitar el producto del carrito

    Cuando eliminar falle deberas mostrar el modal de fallo: 
        Titulo: Fallo del servidor
        texto:  no has podido eliminar el producto del carrito

*/

// RESPUESTA: 
//      todo cambiado, parte de try catch en las funciones:
//          * incrementProductQuantity
//          * decrementProductQuantity
//          * handleDeleteProduct



//Logica del modal 
const modalContainer = document.querySelector('.modal-container')
const btnCloseModal = document.querySelector('.btn-close')
const modal = document.querySelector('.modal-content')


function renderModal(title, text){
    modal.innerHTML =`
    <h3>${title}</h3>
    <p>${text}</p>
    `
    handleOpenModal()
}

function handleOpenModal() { // no se usa evento, solo abre el modal
    //Eliminar la clase close de modalContainer
    modalContainer.classList.remove('close')
}

function handleCloseModal() {
    //agrega la clase close de modalContainer
    modalContainer.classList.add('close')
}

btnCloseModal.addEventListener(
    'click',
    handleCloseModal
)


// Funcion de exito o fallo
function determinarExito (porcentaje) {
    const factor_porcentaje = porcentaje / 100
    const numero_random = Math.random() //Es un numero del 1 al 0
    return factor_porcentaje > numero_random
}



/* 
    TERCERA PARTE DEL EJERCICIO -
    Emulando una consulta al servidor

    - El carrito tardara 2 segundos en cargarse, al finalizar la carga, renderizar el carrito
    - Si se esta cargando debera mostrar un cargando en la pantalla
    - OPCIONAL: Habra una tasa de exito del 70%, si falla la carga de carrito, lanzar en la PANTALLA donde mostramos el carrito, 'no se pudo cargar el carrito' con un boton de reintentar 
    - Opcional: El boton de reintentar debera volver a intentar obtener la lista de el server (con los 2 segundos y la pantalla de carga) (OJO QUE PUEDE VOLVER A FALLAR.)

    RECOMENDACION PERSONAL:
    - Tengan un estado global de cargando, donde si cargando es verdadero, se muestre la pantalla de carga
    - Alternativa, tengan una funcion llamada renderLoader que renderize el cargando y unmountLoader elimine el loader
*/

const load_container = document.querySelector('.load-container')

function handleCloseLoadContainer() { // no se usa evento, solo abre el modal
    //Eliminar la clase close de modalContainer
    load_container.classList.add('close')
}

function handleOpenLoadContainer() { // no se usa evento, solo abre el modal
    //Eliminar la clase close de modalContainer
    load_container.classList.remove('close')
}

function renderCartError()  {
    const cart_container = document.querySelector('.cart-container')
    cart_container.innerHTML = `
        <div class="cart-error">
            <h3>No se pudo cargar el carrito</h3>
            <button class="btn-retry">Reintentar</button>
        </div>
    `
    const btnRetry = document.querySelector('.btn-retry')
    btnRetry.addEventListener(
        'click',
        function(){
            handleOpenLoadContainer() 
            const cartError = document.querySelector('.cart-error')
            cartError.classList.add('close')
            loadCart()
        }
    )

}

function loadCart() {

    //Se ejecutara el for of en 2 segundos
    setTimeout(
        function (){ //Accion a ejecutar
            handleCloseLoadContainer()
            if(determinarExito(70)){
                renderCart()
            } else {
                renderCartError()                
            }
        },
        2000 //Tiempo en MS
    )   
}

loadCart()




// "https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" enlace de carga