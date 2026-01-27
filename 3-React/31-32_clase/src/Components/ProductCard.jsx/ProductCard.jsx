

function ProductCard(props) {
    // let isInCart = false;
    // let isOnSale = true;
    // let currencySymbol = 'USD'

    /* si isOnSale es true mostrar OfertaNavideña en un span*/
    /* mostrar la divisa en el precio */
    /* ahora todos los valores van a venir por props:
        - isInCart
        - isInSale
        - currencySymbol
        - title
        - price    
    */
    return (
        <div>
            {
                props.isOnSale && <span>Oferta Navideña</span>
            }
            <h2>{props.title}</h2>
            <span>Precio: {props.currencySymbol}{props.price}</span>
            {
                props.isInCart
                ? <button>Quitar del carrito</button>
                : <button>Comprar</button>
            } 
        </div>
    )
}

export default ProductCard