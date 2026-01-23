/* 
    TensorFlow (desarrollada por google originalmente para python)

    Libreria de entrenamiento de IA (Machine Learning)
        * Entrenar una IA
        * Inferir (usar un modelo entrenado)
    

    Modelo: COCO-SSD
        IA que detecta objetos, personas, etc.


    Proyectos que permiten usar aplicacion potentes desde el navegador
    debido a que usar el gpu del cliente:
        * WebGL
        * WebAssembly

    Esto permitio que se cree la libreria para javascript
        * tensorflow.js
*/



/* 
    DESAFIO GENERAL:

    Lograr que un modelo ya entrenado de tensorflow.js (Coco-SSD) detecte
    si la imagen contiene o no una persona

    - Cargar imagen
    - Cargar Modelo
    - Ejecutar el modelo
    - Manejar la respuesta del modelo

    el modelo por cada deteccion de objeto da un score del 0 al 1
*/

const MIN_SCORE_REQUIRED = 0.5;
const file_input = document.getElementById("image-input");
const image_preview_container = document.getElementById("image-preview-container");
const image_preview = document.getElementById("image-preview");
const execute_btn = document.getElementById("execute-model");
const span_result = document.getElementById("result");

// desactivar el boton porque todavia no hay imagen cargada
execute_btn.disabled = true;

//estado de la imagen seleccionada
//inicialmente nula porque no tengo imagen seleccionada
let current_url_image_selected = null;
let model = null;


// Logica para cargar el modelo Coco-SSD
async function loadModel() {
    try{
        model = await cocoSsd.load()
    }
    catch(error){
        console.log("Error al cargar el modelo: ", error)
    }
}
loadModel() 


/*
    Capturar la imagen
*/
// el evento change se desencadena cuando el valor de un input cambia
// cuando el usuario agregue una imagen, el valor de input cambia
file_input.addEventListener(
    'change',
    function(event){
        //buscamos el primer archivo adjunto al input
        const file = event.target.files[0];
        if(!file){
            console.error("ningun archivo fue seleccionado")
            return;
        }

        // si HAY alguna imagen seleccionada hay que borrarla
        if(current_url_image_selected){
            // ordeno a Blob API revocar la IRL (borrarlo)
            URL.revokeObjectURL(current_url_image_selected)

            //Reinicio mi variable
            current_url_image_selected = null;
        }

        // crear una blob url
        current_url_image_selected = URL.createObjectURL(file)

        // cambio al atributo source de mi imagen previa
        image_preview.src = current_url_image_selected

        // solo se debe clasificar al cargar la imagen
        execute_btn.disabled = false

    }
)

// Funcion encargada de hacer la clasificacion
async function classifyImage(){

    //si el modelo no se carga, aborta ejecucion
    if(!model){
        console.log("El modelo no se cargo");
        return;
    }

    //Si no hay imagen seleccionada, que no procese
    if(!current_url_image_selected){
        console.log("No hay imagen seleccionada para procesar");
        return;
    }

    try{
        //guardamos la lista de personas detectadas por el modelo
        //20 es el numero maximo de objetos a detectar
        const detections = await model.detect(image_preview, 20);
        const persons = [];
        for(const detection of detections){
            if(detection.class === 'person' && detection.score >= MIN_SCORE_REQUIRED){
                persons.push(detection);
            }
        }

        console.log("Personas detectadas: ", persons);
        if(persons.length > 0){
            span_result.textContent = `Hay ${persons.length} persona/s`
        } else {
            span_result.textContent = "No hay personas"
        }
    }
    catch(error){
        console.error("error al usar el modelo: ", error);
    }
}

execute_btn.addEventListener(
    'click',
    classifyImage
)


