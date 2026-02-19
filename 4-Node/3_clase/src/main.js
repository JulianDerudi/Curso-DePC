/* FUNCIONES CONSTRUCTORAS
let id = 0;

function Personaje(nombre, edad) {
    this.vida = 200;
    this.nombre = nombre;
    this.edad = edad;
    this.nivel = 0;
    this.id = id; 
    id++;
    
    
}

function Item(titulo, nivel, descripcion){
    this.titulo = titulo;
    this.nivel = nivel;
    this.descripcion = descripcion;
}

const personaje_1 = new Personaje('carlos', 35);
const personaje_2 = new Personaje('juan', 66);
const personaje_3 = new Personaje('pablo', 15);

console.log(personaje_1)
console.log(personaje_2)
console.log(personaje_3)
*/

/* CLASES */
class Personaje{
    static id = 0;
    constructor(nombre, edad){
        this.vida = 200;
        this.nombre = nombre;
        this.edad = edad;
        this.nivel = 0;
        this.id = id; 
        id++;
    }

    saludar(){
        console.log('hola me llamo ', this.nombre, 'y mi edad es ', this.edad);
    }
}

class Item{
    constructor(titulo, nivel, descripcion){
        this.titulo = titulo;
        this.nivel = nivel;
        this.descripcion = descripcion;
    }

    describir(){
        console.log('Titulo: ', this.titulo,' Nivel: ', this.nivel, ' Descripcion: ', this.descripcion);
    }
}


class ItemInventario{
    static id = 0;
    constructor(titulo, nivel, descripcion, cantidad = 1){
        this.titulo = titulo;
        this.nivel = nivel;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.id = this.id;
        id++;
    }

    describir(){
        console.log('Titulo: ', this.titulo,'; Nivel: ', this.nivel, '; Descripcion: ', this.descripcion, '; Cantidad: ', this.cantidad);
    }
}

class Inventario{
    static id = 0;
    constructor(items = []){
        this.items = items;
        this.id = this.id;
        id++;
    }

    agregarItem(item, cantidad){
        const itemEncontrado = this.items.find((i) => i.item.titulo === item.titulo);

        if(itemEncontrado){
            itemEncontrado.cantidad += cantidad;
        } else {
            this.items.push({item, cantidad});
        }
    }

    eliminarItem(item){
        this.items = this.items.filter((i) => i.item.titulo !== item.titulo);
    }

    decrementarItem(item){
        const itemEncontrado = this.items.find((i) => i.item.titulo === item.titulo);
        if(itemEncontrado && itemEncontrado.cantidad > 1){
            itemEncontrado.cantidad--;
        } else if (itemEncontrado && itemEncontrado.cantidad === 1){
            this.eliminarItem(item);
        }
    }
}


/* Herencia */