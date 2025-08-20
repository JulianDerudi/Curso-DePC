# estos comandos son locales de cada computadora

$ git -v  $ 

$ git config --global user.name "JulianDerudi"  $

$ git config --global user.email "julianderudi9@gmail.com"  $

# inicia nuestro repositorio 
# fijarse de no estar haciendolo en /OneDrive (En tal caso mover el proyecto a C:\Users\Ignacio\Document) 
$ git init  $                       


# añadir todos los archivos de la carpeta
$ git add .  $


# hacer un commit de los archivos añadidos 
$ git commit -m 'Creando primer commit'  $


# mover mi rama a main(importante hacerlo si estoy en master) 
$ git branch -M main  $


# conectarse al repo 
$ git remote add origin https://github.com/JulianDerudi/Curso-DePC.git  $


# fijarse de estar bien conectado (fetch y push tienen que ser iguales)
$ git remote -v  $


# subir todo
$ git push -u origin main  $




### otros comandos utiles ###

# volver a la version anterior de un archivo 
$ git restore nombreArchivo.txt  $


# ver registro de versiones
$ git log  $


# ver el estado 
$ git status  $