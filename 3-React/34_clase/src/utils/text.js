export function limitarPalabras(texto, limite_palabras = 10){
    const palabras = texto.split(' ');
    const palabras_limitadas = palabras.splice(0, limite_palabras);
    return palabras_limitadas.join(' ')
}
