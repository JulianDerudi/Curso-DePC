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
                <div >
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
        <div>
            <span>Total: $${getTotalPrice()}</span>
            <button id='btn-restart_cart' >Borrar Carrito</button>
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
            'no has podido decrementar el producto del carrito'
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
            'no has podido incrementar el producto del carrito'
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
            'no has podido quitar el producto del carrito'
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



renderCart()


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