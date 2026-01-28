
export default function PostList() {
    /*
        Crear la funcion getPosts
        Debera hacer un fetch con method GET a https://jsonplaceholder.typicode.com/posts
        Mostrar por consola el resultado de la API
     */

    async function getPosts() {
        let response_http = await fetch("https://jsonplaceholder.typicode.com/posts", {method:"GET"});
        let response = await response_http.json()
        console.log(response)
        return response
    }  
    getPosts()


    return (
        <div>
            <span>PostList completado</span>
        </div>
    )
}