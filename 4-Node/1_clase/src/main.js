import * as FileSystem from 'fs';

async function leerClave() {
    const clave = await FileSystem.promises.readFile('src/secreto.txt', 'utf-8');
    return clave;
}

async function mostrarClave() {
    const clave = await leerClave();
    console.log(clave);
}

mostrarClave()



/* 
    EJERCICIO

    NO SE VALE USAR SYNC debe ser asincronico con promesas 

    Crear un archivo llamado numero-1.txt con un numero random (MANUALMENTE, sin codigo)
    Crear un archivo llamado numero-2.txt con un numero random (MANUALMENTE, sin codigo)

    Leer el archivo numero-1.txt con node.js y el archivo numero-2.txt

    Generar el archivo resultado.txt con node.js con el valor resultante entre la suma de ambos numeros.
*/

async function leerNumero(direccionArchivo) {
    const numero = await FileSystem.promises.readFile(direccionArchivo, 'utf-8');
    return numero;
}

const numero1 = await leerNumero('src/numero1.txt');
const numero2 = await leerNumero('src/numero2.txt');
const resultado = parseInt(numero1) + parseInt(numero2);

await FileSystem.promises.writeFile(
    'src/resultado.txt',
    `El resultado es: ${resultado}`,
    {
        encoding: 'utf-8'
    }
)


