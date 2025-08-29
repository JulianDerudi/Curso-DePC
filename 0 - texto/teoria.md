# ###################################################################
# ######      ###      ###     ####      ###      ######     ########
# ######  ##  ###  ##  ###  ##  #####  #####  ###########   #########
# ######      ###      ###     ######  #####      #######   #########
# ######  #######  ##  ###    #######  #####  ###########   #########
# ######  #######  ##  ###  ##  #####  #####      ######     ########
# ###################################################################

## ######################################## ##
## Clase 1: Introducción al desarrollo web. ############################################################################# 
## ######################################## ## 
<!-- BIBLIOGRAFIA DE HTTML -->
https://developer.mozilla.org/en-US/


## ############# ##
## Clase 2: HTML #########################################################################################################
## ############# ##
<!-- Dividir y contener -->
<div></div>

<!-- Enlace -->
<a href=""></a>


## ############################ ##
## Clase 3: HTML5 y Formularios ##########################################################################################
## ############################ ##
<!--  ESTRUCTURA DEL BODY  -->
![alt text](./estructuraBody.png)

<!--  ESTRUCTURA ASIDE  -->
![alt text](estructuraAside.png)

<!--  ESTRUCTURA DE UNA SECTION   -->
![alt text](estructuraSection.png)

"una definición de articulo: algo que puedo sacar de donde esta y se va a seguir 
 entendiendo y teniendo sentido, (las reseñas por ejemplo si o si son articulos)"

## FORMULARIO ##

<form>
<!-- Nombre usuario -->
<div>
    <label for="username">Escribe el nombre de usuario:</label>
    <input type="text" id="username" required placeholder="Matias Gimenez 2">
</div>

<!-- Contraseña -->
<div>
    <label for="password">Escribe la contraseña:</label>
    <input type="password" id="password" required minlength="8" maxlength="12" >
    <button type="button">Mostrar</button>
</div>

<div>
    <label for="region">Selecciona una region</label>
    <select id="region">
        <option value="SA" >Sudamerica</option>
        <option value="NA" disabled>Norteamerica</option>
        <option value="EE">Europa este</option>
        <option value="AE" selected>Asia este</option>
    </select>
</div>

<div>
    <label for="welcome_message">Escribe un mensaje de bienvenida</label>
    <textarea id="welcome_message" rows="10" cols="8" required maxlength="100" placeholder="Hola que tal" ></textarea>
</div>

<!-- Boton de enviar, cuando un boton esta dentro de un form el navegador por defecto interpretara que es un boton de enviar -->
<button type="submit">Enviar</button>
</form>


## ##################### ##
## Clase 4: Git y Github #################################################################################################
## ##################### ##
<!-- estos comandos son locales de cada computadora -->
$ git -v  $ 

$ git config --global user.name "JulianDerudi"  $

$ git config --global user.email "julianderudi9@gmail.com"  $

# inicia nuestro repositorio #
<!-- fijarse de no estar haciendolo en /OneDrive (En tal caso mover el proyecto a C:\Users\Ignacio\Document) -->
$ git init  $                       

<!-- añadir todos los archivos de la carpeta -->
$ git add .  $

<!-- hacer un commit de los archivos añadidos -->
$ git commit -m 'Creando primer commit'  $

<!-- mover mi rama a main(importante hacerlo si estoy en master) -->
$ git branch -M main  $

<!-- conectarse al repo -->
$ git remote add origin https://github.com/JulianDerudi/Curso-DePC.git  $

<!-- fijarse de estar bien conectado (fetch y push tienen que ser iguales) -->
$ git remote -v  $

<!-- subir todo -->
$ git push -u origin main  $


### otros comandos utiles ###
<!-- volver a la version anterior de un archivo -->
$ git restore nombreArchivo.txt  $

<!-- ver registro de versiones -->
$ git log  $

<!-- ver el estado  -->
$ git status  $



## ############ ##
## Clase 5: CSS ##########################################################################################################
## ############ ##
                  ______________________________________
                 /*      ##  JERARQUIA EN CSS  ##      *\
                /*                                      *\
               /*        1- !important                   *\
              /*         2- inline style                  *\
             /*          3- selector de id                 *\
            /*           4- selector de clase               *\
           /*            5- selector de elementos            *\
          /*             6- selector universal                *\
         /*                                                    *\
        /* "usar solo los ultimos 3 (salvo en caso especifico)" *\
        
"En caso de tener el mismo valor (x,x,x) gana por cascada (el que este mas abajo)"

<!-- ALGUNA ETIQUETA DE CSS --->
* color: <!-- Define el color del texto. Ejemplos: red, #333, rgb(0, 0, 0), hsla(0, 64%, 43%, 1.00) -->

* text-decoration: <!-- Aplica decoraciones al texto como subrayado o tachado. Valores comunes: none, underline, overline, line-through -->

* text-align: <!-- Alinea el texto dentro de su contenedor. Valores comunes: left, right, center, justify -->

* font-size: <!-- Define el tamaño del texto. Valores comunes: 16px, 1em, 120%, larger -->

* font-family: <!-- Especifica la tipografía del texto. Ejemplos: "Arial", "Georgia", "Helvetica, sans-serif" -->

* font-weight: <!-- Establece el grosor de la fuente. Valores comunes: normal, bold, lighter, 100 a 900 -->

* letter-spacing: <!-- Ajusta el espacio entre letras. Valores comunes: normal, 1px, -0.5px -->

* word-spacing: <!-- Ajusta el espacio entre palabras. Valores comunes: normal, 10px, 0.5em -->

* line-height: <!-- Define la altura de línea (espacio entre renglones). Valores comunes: normal, 24px, 150% -->


## ############ ##
## Clase 6: CSS ##########################################################################################################
## ############ ##
# BOX MODEL #
* padding:  <!-- espaciado interno (-left, -top, -right, -bottom) -->
* margin:  <!-- espaciado externo, desde el borde de la caja hacia afuera -->
* border: <groso> <estilo> <color> <!-- darle un borde a la caja (estilo: solid) -->

# BOX SHADOW #
"para darle sombras a las cajas"
* box-shadow: 0px 0px 10px write;

# NORMALIZAR #
*{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
}

## PARTES DE UNA CAJA ##
![alt text](caja.png)

## pagina para crear cajas piolas ##
https://neumorphism.io/#e0e0e0

## pagina para importar fuentes de texto ##
https://fonts.google.com/

## pagina pare crear box shadow ## 
https://cssgenerator.org/


## #################### ##
## Clase 7: CSS Flexbox ##################################################################################################
## #################### ##

* display: flex; <!-- activa el modelo felxbox en un elemento -->
* flex-direction: (row, column);
* align-items:
* justify-content: 
    * flex-start: alinea los elementos al inicio del eje.
    * flex-end: al final del eje.
    * center: los centra dentro del contenedor.
    * space-between: distribuye los elementos con el máximo espacio posible entre ellos.
    * space-around: agrega espacio a los costados de cada ítem (el espacio entre ítems es mayor que en los extremos).
    * space-evenly: reparte el espacio de forma exactamente igual entre todos los ítems, incluidos los bordes.




"" dar ancho y alto al contenido solo es valido para etiquetas block o inline-block ""
"" las etiquetas tienen un display que puede ser (block, inline o inline-block)     ""


inline: (ej. <span>)                                        
    - no se le puede modificar ancho ni alto 
    - se escribe uno al lado del otro   

block: (ej. <div>)                            
    - se le puede definir ancho y alto       
    - se colocan uno debajo del otro 

inline-block: (ej. <button>)
    - se le puede definir ancho y alto       
    - se colocan uno al lado del otro


## ############################### ##
## Clase 8: CSS Flexbox + Position #######################################################################################
## ############################### ##




## ############################################################# ##
## Clase 9: CSS Mediaqueries y responsive design (Desktop First) #########################################################
## ############################################################# ##
# Responsive Desing
una tecnica que permite que la pagina web 
se adapte a distintos tamaños de pantalla.

# Mediaqueries
condicionar como se va a ver la
pantalla dependiendo la resolucion.

# Mediaquiere Desktop first vs Mobile first
en casi todos los casos conviene Mobile first solo en casos de 
paginas de trabajo/inversiones/gestiones conviene desktop first

# Tarea
hacer ejercicio de clase 7 utilizando Destock First y despues Mobile First
medidas a tener en cuenta: 320px a 2000px
320px - 480px - 767px - 979px - 1200px

# software para emular las medidas
https://responsively.app/



## ######################################### ##
## Clase 10: CSS Mediaqueries + Mobile First #############################################################################
## ######################################### ##




## ##################################################### ##
## Clase 11: Animaciones + Transiciones + V0 chat vercel #################################################################
## ##################################################### ##




## ############################# ##
## Clase 12: Git Github avanzado #########################################################################################
## ############################# ##




## ############################### ##
## Clase 13: TP integrador + Figma #######################################################################################
## ############################### ##


