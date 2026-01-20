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
        quantity: 2 // Cuanto se compro de este elemento
    },
    {
        id: 2,
        title: "PC Dell",
        price: 40000,
        quantity: 6 // Cuanto se compro de este elemento
    },
    {
        id: 3,
        title: "Monitor 24\"",
        price: 6000,
        quantity: 6 // Cuanto se compro de este elemento
    },
]

function renderCart() {
    let cart_render_str = '<h1>Carrito de Compras</h1>';

    for(let product of cart){
        if(product.quantity === 0){
            continue;
        }
        cart_render_str += 
        `
            <div >
                <hr/>
                <h3>${product.title}</h3>
                <span>Precio unitario: $${product.price}</span> <br/>
                <span>Precio: $${product.price * product.quantity}</span> 
                <div >
                    <button class='btn-incrementar' data-incrementar_id='${product.id}' >+</button>
                    <span class='cantidad'>${product.quantity}</span>
                    <button class='btn-decrementar' data-decrementar_id='${product.id}'>-</button>
                </div>
                <button class='btn-quitar' data-quitar_id='${product.id}' >Quitar</button>
                <hr/>
            </div>
        `
    }

    cart_render_str += 
    `
        <div>
            <span>Total: $${getTotalPrice()}</span>
            <button id='btn-restart_cart' >Borrar Carrito</button>
        </div>
    `

    cart_containerHTML.innerHTML = cart_render_str;

    const btn_decrementar_list = cart_containerHTML.getElementsByClassName('btn-decrementar')
    for(const btn_decrementar of btn_decrementar_list) {
        btn_decrementar.addEventListener('click', () => decrementProductById(btn_decrementar.dataset.decrementar_id))
    }

    const btn_incrementar_list = cart_containerHTML.getElementsByClassName('btn-incrementar')
    for(const btn_incrementar of btn_incrementar_list) {
        btn_incrementar.addEventListener('click', () => incrementProductById(btn_incrementar.dataset.incrementar_id))
    }

    const btn_quitar_list = cart_containerHTML.getElementsByClassName('btn-quitar')
    for(const btn_quitar of btn_quitar_list) {
        btn_quitar.addEventListener('click', () => deleteProductById(btn_quitar.dataset.quitar_id))
    }

    const btn_restar_cart = document.getElementById('btn-restart_cart');
    btn_restar_cart.addEventListener('click', () => restartCart() );

    
}

function getTotalPrice() {
    let total_price = 0;
    for(const product of cart){
        total_price += product.price * product.quantity;
    }
    return total_price;
}

function decrementProductById(product_id) {
    const product_selected =  findProductFromCartById(Number(product_id));

    if(product_selected.quantity === 1){
        const product_index = cart.indexOf(product_selected);
        if (product_index > -1) {
            cart.splice(product_index, 1)
        }
        return renderCart();
    }

    product_selected.quantity = product_selected.quantity - 1;
    renderCart();
}

function incrementProductById(product_id) {
    const product_selected =  findProductFromCartById(Number(product_id));

    product_selected.quantity = product_selected.quantity + 1;
    renderCart();
}

function deleteProductById(product_id) {
    const product_selected =  findProductFromCartById(Number(product_id));

    const product_index = cart.indexOf(product_selected);
    if (product_index > -1) {
        cart.splice(product_index, 1)
    }
    renderCart();
    
}

function restartCart(){
    if(cart.length===0){
        return alert("Carrito vacio")
    }
    cart.length = 0;
    renderCart();
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