/* Asincronia */


// Usamos async cuando queremos que la funcion maneje codigo asincronico
// como fetch es asincronico, la funcion que lo llama debe serlo tambien
async function consultaAlServido() {
    
    // El await hace que cuando se termine de procesar el fetch, lo guarde en la variable
    // debido a que fetch inicialmente devuelve una promesa (objeto que marca el estado del proceso)
    let response_http = await fetch(
        //URL a consultar
        'https://jsonplaceholder.typicode.com/posts',

        //Objeto de consulta
        {
            method: "GET", //Obtener la lista de posteos
        }
    )

    //Leemos y extraemos el JSON de la respuesta del servidor
    let response = await response_http.json()

    renderizarPosts(response);
}

/*  
    EJERCICIO:

    Por cada posteo renderizar:

        <div>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
*/

const post_container_HTML = document.getElementById("post-container");

function renderizarPosts(posts_list_json){
    const post_str = '';
    for(let post of posts_list_json){
        post_str += `
            <div>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </div>
        `
    }
    post_container_HTML.innerHTML = post_str;
}

// Llamamos a la funcion para que haga la consulta
consultaAlServido();









