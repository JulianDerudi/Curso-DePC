// EJERCICIO: TWEETS
const listatweets = document.getElementById("tweets"); //traigo el contenedor con ese ID como para modificarlo

let tweets = [
    {
        id: 1,
        content: 'Hoy comi un alfajor',
        author: 'Pepe',
        attachments: [
            'https://www.farmaciassanchezantoniolli.com.ar/13210-thickbox_default/terrabusi-alfajor-triple-cl%C3%A1sico-x-70g.jpg',
            'https://atomoconviene.com/atomo-ecommerce/56032-pdt_540/alfajor-terrabusi-torta-70-grs-1-unid--.jpg'
        ],
        likes: 30,
        retweets: 3,
        thread: [
            {
                id: 2, 
                content: 'Igual prefiero el guaymallen',
                author: 'Agustin',
                attachments: [],
                likes: 40,
                retweets: 3,
                thread: []
            },
            {
                id: 3, 
                content: 'Aguante el capitan espacio!',
                author: 'Ivan',
                attachments: [],
                likes: 40,
                retweets: 3,
                thread: []
            }
        ]
    },
    {
        id: 2,
        content: 'ME ENCANTA JAVASCRIPT!!',
        author: 'Julieta',
        attachments: [],
        likes: 30,
        retweets: 3,
        thread: []
    }
]


/* 
- Renderizar la lista de tweets
- Un tweet tiene este formato: 
    div>
        p>content
        div> lista de imagenes 
        div> 
            button> nro_likes like
            button> nro_retweets retweet
        OPCIONAL:
        div>
            div> LISTA DE Threads
                h3> Author
                p> content
                div> 
                    button> nro_likes like
                    button> nro_retweets retweet

        
- Un tweet puede tener attachments o no, por ahora todos los attachments seran imagenes.
    - Si no los tiene NO deberan renderizar nada.
    - TIP: if(tweet.attachments.length === 0) te dice si esta vacio

TAREA
- Un tweet puede tener thread o no, siempre sera un array
    - Si no los tiene NO deberan renderizar nada.
*/

/* 
renderAttachments(attachments)
    Retorne un string con los attachments
    `
    <img src='' >
    <img src='' >
    `

*/

function renderizarTweets(tweets) {
    if(tweets.length === 0){
        return;
    }

    let tweets_renderizados_str = ''; 

    for(let tweet of tweets){
        tweets_renderizados_str += 
        `
         <div>
            <h2>${tweet.author}</h2>
            <p>${tweet.content}</p>
            <div>
                ${renderAttachments(tweet.attachments)}
            </div>
            <div>
                <button>${tweet.likes} LIKES</button>
                <button>${tweet.retweets} RETWEETS</button>
            </div>
            <div class="thread-container">
                ${renderizarTweets(tweet.thread)}
            </div>
         </div>
        `
    }

    return tweets_renderizados_str;
}


//Retorna un string con los attachments
function renderAttachments(attachments) { 
    if(tweet.attachments.length === 0){
        return '';
    }

    let attachments_str;

    for(let attachment of attachments){
        attachments_str += 
        `
            <img src="${attachment}" alt="attachment">
        `
    }

    return attachments_str;
}

let tweets_str = renderizarTweets(tweets);
listatweets.innerHTML = tweets_str //modifico el html interno del contenedor
