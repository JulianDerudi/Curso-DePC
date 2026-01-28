import Contador from "./Components/Contador/Contador"
import ParrafoExtendible from "./Components/ParrafoExtendible/ParrafoExtendible"
import PostList from "./Components/PostList/PostList"

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
        <Contador 
          min={0}
          max={25}
          initial={5}
        />
        <Contador 
          min={-2}
          max={11}
          initial={6}
        />
        <PostList/>
    </div>
  )
}

export default App
