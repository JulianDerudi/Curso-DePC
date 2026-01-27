import React from 'react'
import { TestComponent } from './Components/TestComponent/TestComponent'
import ProductCard from './Components/ProductCard.jsx/ProductCard'




function App() {

  return (
    <div>
      <h1>Hola pa</h1>
      <TestComponent/>
      <ProductCard 
        title={'Tv Samsung 55"'}
        isInCart={false}
        isOnSale={true}
        currencySymbol={'USD'}
        price={800}
      />
      <ProductCard 
        title={'Tv Samsung 92"'}
        isInCart={true}
        isOnSale={false}
        currencySymbol={'$'}
        price={2000}
      />
    </div>
  )
}

export default App
