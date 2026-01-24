/*

/// TP Integrador de JS — Carrito de compras \\\

### Objetivo: ###

Crear un catálogo de productos con HTML, CSS y JavaScript y implementar un carrito de 
compras en el frontend usando únicamente JavaScript (DOM, fetch, async/await). El objetivo 
es que el alumno demuestre manejo de estado, renderizado dinámico, consumo de API y control 
de la lógica de carrito (agregar, eliminar, modificar cantidad, total).



###########################################
## Requisitos funcionales (obligatorios) ##
Estados (objetos de estado que deberás mantener)

Debes mantener los siguientes estados en tu aplicación (pueden ser variables globales en un módulo o dentro de un objeto central):

* carrito — array de items. Cada item debe tener al menos:
    - id (número)
    - title (string)
    - price (número)
    - quantity (número)
* productos — array con la lista tal cual se obtiene de la API (https://dummyjson.com/products)
* cargandoProductos — booleano que indica si se están cargando los productos
* errorServidor — guarda información si hubo un error en la petición a la API (puede ser null o string)



############################################################
## Setters (deben existir y actualizarán estado + render) ##
Implementa funciones/setters que modifiquen los estados y llamen al render correspondiente:

* setCarrito(nuevoCarrito) → actualiza carrito y llama a renderCarrito() y renderTotal() si aplica.
* setProductos(nuevosProductos) → actualiza productos y llama a renderProducts().
* setCargandoProductos(valorBooleano) → actualiza cargandoProductos y llama a renderProducts() o a una función de loading.
* setErrorServidor(error) → actualiza errorServidor y llama a renderError().

Importante: NO modificar el estado directamente desde las variables. Usa siempre los setters.



###############################################
## Renders (funciones que actualizan el DOM) ##

* renderProducts() — muestra la lista de productos con sus botones/controles.
* renderCarrito() — muestra los items del carrito (título, cantidad, botones +/-, botón Quitar).
* renderTotal() — muestra el total del carrito (suma price * quantity) en la parte inferior.
* renderError() — muestra mensajes de error si errorServidor no es null.



##################################
## Consumo de API (obligatorio) ##

* Cargar los productos mediante una consulta HTTP a la API: GET <https://dummyjson.com/products>
* Debes usar fetch y async/await para realizar la petición.
* Guardar el resultado en el estado productos usando setProductos.
* Manejar estados de carga (setCargandoProductos(true/false)) y errores (setErrorServidor(...)).



########################################
## Comportamiento sobre los productos ##

* Si el producto no está agregado al carrito → renderizar botón "Agregar al carrito".
* Si el producto sí está en el carrito → renderizar botón "Quitar del carrito" y el contador de cantidad con botones + y .
    - No permitir agregar más que el stock del producto (usa la propiedad stock que viene en los recursos de dummyjson).
    - No permitir decrementar por debajo de 0. Si se presiona cuando quantity es 1, el item debe eliminarse del carrito.
    - Si se quita el producto completamente, actualizar el botón del producto en el catálogo a "Agregar al carrito".



################################
## Comportamiento del carrito ##

* Si el carrito no está vacío → mostrar botón "Vaciar carrito" que elimina todos los items.
* Cada item del carrito debe tener:
    - Botón "Quitar" (elimina ese item del carrito).
    - Botones "+" y "-" para incrementar/decrementar cantidad (respetar stock y 0).
* Mostrar el total del carrito en la parte inferior (usar renderTotal).
* Mostrar botón "Confirmar carrito" que al hacer click:
    - Muestra un alert con el total: El total de tu compra es $<total>
    - Vacía el carrito (setCarrito([])).



##################################
## Validaciones / restricciones ##

* Evitar modificar estado directamente (usar setters).
* Cada setter debe invocar los renders correspondientes.
* Controlar stock al agregar/incrementar.
* Manejar correctamente estados de carga y errores (mostrar spinner/mensaje si cargandoProductos es true o errorServidor tiene valor).



############################################################
## Estructura recomendada (no obligatoria, pero sugerida) ##

Archivos:

    * index.html — estructura principal y contenedores.
    * styles.css — estilos (puede usar frameworks si desean).
    * app.js — lógica: estados, setters, fetch, renders y handlers de eventos.


IDs/containers sugeridos en index.html:

    * #products-container — donde renderizas productos.
    * #cart-container — donde renderizas carrito.
    * #total-container — total y botones de confirmar/vaciar.
    * #error-container — mensajes de error o estado de la petición

Entregar link de repositorio de github + link de despliegue en githubpages.


*/

let cart_state = []; // array de items del carrito
let products_state = []; // array con los productos tal cual de la API
let loading_products_state = false; // bool que indica si se estan cargando
let error_state = null; // guarda info sobre posibles errores (null o string)
let total_state = 0; // total del carrito de compras

const catalog_container_html = document.getElementById("catalog-container");
const cart_products_container_html = document.getElementById("cart-products-container");

function renderProducts() {
    const catalog_render_str = '';

    console.log('products_state en renderProducts:', products_state);
    for(let product of products_state){
        if(product.stock === 0){
            continue
        }
        catalog_render_str += `
            <div id="${product.id}">
                <div class="info-product-container">
                    <h3>${product.title}</h3>
                    <span>Precio unitario: $${product.price}</span>
                <div>
                <button class='btn-add-cart' data-add_id='${product.id}'>Agregar Carrito</button>
            </div>
        `
    }

    catalog_container_html.innerHTML = catalog_render_str;

    const btn_add_list = catalog_container_html.getElementsByClassName("btn-add-cart");
    for(const btn_add of btn_add_list){
        btn_add.addEventListener('click', addToCart);
    }
}
function renderCart() {
    const cart_render_str = '';
    for(let product of cart_state){
        if(product.quantity === 0){
            continue;
        }
        cart_render_str += `
            <div id="${product.id}">
                <div class="info-product-container">
                    <h3>${product.title}</h3>
                    <span>Precio unitario: $${product.price}</span>
                    <span>Precio: $${product.price * product.quantity}</span> 
                <div>
                <div class="btn-container">
                    <button class='btn-increase' data-increase_id='${product.id}'>+</button>
                    <span class='quantity'>${product.quantity}</span>
                    <button class='btn-decrease' data-decrease_id='${product.id}'>-</button>
                </div>
                <button class='btn-remove' data-remove_id='${product.id}'>Quitar</button>
            </div>
        `
    }

    cart_products_container_html.innerHTML = cart_render_str;

    const btn_decrease_list = cart_products_container_html.getElementsByClassName('btn-decrease')
    for(const btn_decrease of btn_decrease_list) {
        btn_decrease.addEventListener('click', () => decrementProductById(btn_decrease.dataset.decrease_id))
    }

}
function renderTotal() {

}
function renderError() {
    console.log('error_state en renderError:', error_state);
}
function renderLoading(){

}


function setCarrito(newCart) {
    cart_state = newCart;
    renderCart();
}
function setProducts(newProducts) {
    products_state = newProducts;
    renderProducts();
}
function setLoadingProducts(valueBoolean) {
    loading_products_state = valueBoolean;
    renderLoading();
}
function setError(error) {
    error_state = error;
    renderError();
}
function setTotal(newTotal) {
    total_state = newTotal;
    renderTotal();
}


function addToCart(event){
    const productId = parseInt(event.target.dataset.add_id);
    const productInCart = findProductFromCartById(productId);
    const productInCatalog = findProductFromCatalogById(productId);

    if(productInCart){
        if(productInCart.quantity < productInCatalog.stock){
            productInCart.quantity += 1;
        }
    } else {
        const newProduct = {
            id: productInCatalog.id,
            title: productInCatalog.title,
            price: productInCatalog.price,
            quantity: 1
        };
        cart_state.push(newProduct);
    }
    setCarrito(cart_state);

}





function findProductFromCartById(id) {
    return cart_state.find((product) => product.id === id);
}

function findProductFromCatalogById(id) {
    return products_state.find((product) => product.id === id);
}


// Fetch de productos desde la API
async function fetchProducts() {  
    setLoadingProducts(true);
    try {
        const response = await fetch(
            'https://dummyjson.com/products',
            { method: 'GET' }
        );

        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }

        const data = await response.json();
        console.log('data products fetch:', data);

        if (Array.isArray(data.products)) { // Verificar que sea un array
            setProducts(data.products);
            setError(null);
        } else {
            throw new Error('Los productos no son un array');
        }

    } catch (error) {
        setError('Error al cargar productos: ' + error.message);
    
    } finally {
        setLoadingProducts(false);
    }
};
fetchProducts();




// ¿Por que products_state is not iterable?
// console.log('products_state:', products_state);
// for (let product of products_state) {
//     console.log('product:', product);
// }