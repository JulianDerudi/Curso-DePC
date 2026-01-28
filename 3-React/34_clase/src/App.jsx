import Contador from "./Components/Contador/Contador"
import ParrafoExtendible from "./Components/ParrafoExtendible/ParrafoExtendible"


function App() {

  return (
    <div>
        <h1>hola</h1>
        <ParrafoExtendible 
          parrafo={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati magni optio quia cupiditate quas dolore nesciunt nisi nihil, modi quo. Dolor odio molestiae ratione, a doloribus soluta corporis aspernatur accusantium."
            } 
          limite_palabras={5}
        />
        <Contador />
    </div>
  )
}

export default App
