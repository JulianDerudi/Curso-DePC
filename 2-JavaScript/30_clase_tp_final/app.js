const API_URL = "https://dummyjson.com/products";

// Estado de la aplicación
let products_state = []; // array con los productos tal cual de la API
let cart_state = []; // array de items del carrito
let loading_products_state = false; // bool que indica si se estan cargando
let error_state = null; // guarda info sobre posibles errores (null o string)
let total_state = 0; // total del carrito de compras


// Referencias al html
const catalog_container_html = document.getElementById("catalog-container");
const cart_container_html = document.getElementById("cart-products-container");
const error_container_html = document.getElementById("error-container");




// Fetch de productos desde la API
async function fetchProducts() {
    try {
        setLoadingProducts(true);

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }

        const data = await response.json();
        setProducts(data.products);

    } catch (error) {
        setError('Error al cargar productos: ' + error.message);
        catalog_container_html.innerHTML = "<p>Error loading products. Please try again later.</p>";
    
    } finally {
        setLoadingProducts(false);
    }
}




// Renderizados
function renderProducts() {
    let catalog_render_str = '<h2>Catálogo de Productos</h2>';
    
    for(let product of products_state){
        if(product.stock === 0){
            continue
        }
        catalog_render_str += `
            <div id="${product.id}">
                <img src="${product.images[0]}" alt="${product.title}" />
                <div class="info-product-container">
                    <h3>${product.title}</h3>
                    <span>Precio unitario: $${product.price}</span>
                    <span>Unidades disponibles: ${product.stock}</span>
                </div>
                <button class='btn-add-cart' data-add_id='${product.id}'>Agregar Carrito</button>
            </div>
        `
    }

    catalog_container_html.innerHTML = catalog_render_str;

    
    
    // Agregar event listeners a los botones "Agregar Carrito"
    const addToCartButtons = document.querySelectorAll('.btn-add-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = parseInt(button.getAttribute('data-add_id'));
            addToCart(productId);
        });
    });

}
function renderCart() {
    let cart_render_str = '<h2>Carrito de Compras</h2>';
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

    cart_render_str += `<h3>Total: $${total_state}</h3>`;

    cart_container_html.innerHTML = cart_render_str;

    // Agregar event listeners a los botones "Quitar", "Aumentar" y "Disminuir"
    const removeButtons = document.querySelectorAll('.btn-remove');
    const increaseButtons = document.querySelectorAll('.btn-increase');
    const decreaseButtons = document.querySelectorAll('.btn-decrease');

    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = parseInt(button.getAttribute('data-remove_id'));
            removeFromCart(productId);
        });
    });

    increaseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = parseInt(button.getAttribute('data-increase_id'));
            increaseQuantityToCart(productId);
        });
    });

    decreaseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = parseInt(button.getAttribute('data-decrease_id'));
            decreaseQuantityToCart(productId);
        });
    });
}
function renderError() {
    if (error_state) {
        error_container_html.innerHTML = `<p>${error_state}</p>`;
        console.error("Error:", error_state);
    }
}
function renderLoadingProducts() {
    if (loading_products_state) {
        catalog_container_html.innerHTML = "<p>Loading products...</p>";
    }
}




// Setters
function setProducts(newProducts) {
    products_state = newProducts;
    renderProducts();
}
function setLoadingProducts(isLoading) {
    loading_products_state = isLoading;
    renderLoadingProducts();
}
function setError(errorMessage) {
    error_state = errorMessage;
    renderError();
}
function setTotal(newTotal) {
    total_state = newTotal;
}
function setCart(newCart) {
    cart_state = newCart;
    renderCart();
}



// Agregar al carrito de compras
function addToCart(productId) {
    const productInCart = findProductFromCartById(productId);

    // Si ya está en el carrito, aumentar cantidad
    if (productInCart) {
        productInCart.quantity += 1;
    } else { // Si no está, agregarlo con cantidad 1
        const productFromCatalog = findProductFromCatalogById(productId);
        if (productFromCatalog) {
            cart_state.push({ ...productFromCatalog, quantity: 1 });
        } else {
            setError("Producto no encontrado en el catálogo");
        }
    }
    // Quitarle uno al stock del catálogo
    decreaseStockInCatalog(productId);

    calculateTotal();
    renderCart();
}



// Funciones Auxiliares
function calculateTotal() {
    const total_state = cart_state.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    setTotal(total_state);
}
function decreaseStockInCatalog(productId) {
    const productFromCatalog = findProductFromCatalogById(productId);
    if (productFromCatalog && productFromCatalog.stock > 1) {
        productFromCatalog.stock -= 1;
    } else if (productFromCatalog && productFromCatalog.stock === 1) {
        productFromCatalog.stock -= 1;
        renderProducts();
    } else {
        setError("No hay stock disponible para este producto");
    }
}
// Usar solo en el caso de decrementar cantidad en el carrito
function increaseStockInCatalog(productId, quantityToAdd = 1) {
    const productFromCatalog = findProductFromCatalogById(productId);
    if (productFromCatalog) {
        productFromCatalog.stock += quantityToAdd;
    } else {
        setError(`Producto con ID[${productId}] no encontrado en el catálogo: no se puede aumentar stock`);
    }
}
function findProductFromCartById(id) {
    return cart_state.find((product) => product.id === id);
}

function findProductFromCatalogById(id) {
    return products_state.find((product) => product.id === id);
}




// Inicialización de la aplicación
fetchProducts();





// COSAS para no olvidarse:
// AL INCREMENTAR CON EL BOTON DEL CARRITO, QUITARLE STOCK AL PRODUCTO EN EL CATALOGO
// AL DECREMENTAR DEL CARRITO, AGREGARLE STOCK AL PRODUCTO DEL CATALOGO
// AL QUITAR DEL CARRITO, AGREGARLE LA CANTIDAD AL STOCK DEL CATALOGO