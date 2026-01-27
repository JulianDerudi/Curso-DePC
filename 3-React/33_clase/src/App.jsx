import React from 'react'

/*
React List
listas con JSX (HTML)
*/



function App() {
  const list_products = [
    {
      title: 'tv samsung 32"',
      price: 200,
      id: 1
    },
    {
      title: 'tv samsung 42"',
      price: 350,
      id: 2
    },
    {
      title: 'tv samsung 60"',
      price: 600,
      id: 3
    }
  ]

  function pasarAJSX(listaProductos){
    let listaJSX = [];
    for (let product of listaProductos) {
      listaJSX.push(
        <div>
          <h2>{product.title}</h2>
          <span>precio: {product.price}</span> <br />
          <span>id: {product.id}</span> <hr />
        </div>
      )
    }
    return listaJSX
  }

  // hecho con un map
  const productosAJSX = list_products.map(
    (product) => {
      return (
        <div>
          <h2>{product.title}</h2>
          <span>precio: {product.price}</span> <br />
          <span>id: {product.id}</span> <hr />
        </div>
      )
    }
  )


  return (
    
    <div>
      <h1>con for</h1>      
        {pasarAJSX(list_products)}

      <h1>con map</h1>
        {productosAJSX}
    </div>
  )
}

export default App
