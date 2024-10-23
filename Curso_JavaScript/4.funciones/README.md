# INDICE
- [FUNCIONES]

# FUNCIONES

las funciones en javascript son `bloques de codigo ejecutable`, a los que podemos pasar parametros y operar con ellos. 
Nos sirve para modular(mudularizar) nuestros programas y estructurarlos en bloques que `realicen una tarea concreta`, de esta manera nuestro codigo es mas legible y mantenible.
Las funciones normalmente, al acabar su ejecucion devuelven un valor, que conseguuimos con el parametro `return`.

## Estructura de una funcion (como se crea una funcion)
para crear una funcion debemos realizar los siguientes pasos.
1. hacer uso del keyword `function`.
2. darle un nombre a una funcion.
3. crear los paramentros que recibirá entre parentisis `()`.
4. crear el cuerpo de una funcion `{}`.
```js
//Funcion sin parametros
function miFuncion(){
    console.log("Esta es mi funcion")
}
//Funcion con parametros
function miFuncionParametros(texto){
    console.log("tu parametro es",a)
}
//Funcion con varios parametros
function variosParametros(a,b){
    console.log(a+b)
}
```
**Como ejecutamos una funcion**
para ejecutar una funcion debemos hacer el llamado de la misma haciendo uso unicamente de su nombre y los parametros que recibirá.
```js
//Creando la funcion
function saludo(){
    console.log("Hola")
}
//Ejecutamos la funcion
saludo()

function saludo2(texto){
    console.log("hola: ",texto)
}
//Ejecutar 
saludo2("ADAN")
```
> [!NOTE]
> **REGLAS PARA PONER EL NOMBRE A UNA FUNCION**
> - 
> Los nombre de las funciones deben representar accciones, por lo que deben construirse usando el `verbo` que representa la accion seguido de una sustantivo seguido de un `sustantivo` representará a la entidad.
```js
function crearUsuario(){

}
function enviarCorreo(){

}
```
## TIPOS DE ARGUMENTOS Y PARAMETROS
Es la manera como se reemplazan los argumentos con los parametros.
### Argumentos y Parametros Posicionales
posicionales se le llama por que los argumentos tomaran los parametros en el orden que se le pase a la funcion,segun la posicion del argumento y parametro.
```js
function sumaNumeros(a,b,c,d){
    let suma=a+b+c+d
    return suma
}
//Argumentos posicionales
let respuesta=sumaNumeros(3+4+5+6)
com¿nsole.log(respuestaa)
```
### Argumentos y Parametros Nominales
Se les conoce a los argumentos que en su creacion se asocian a un parametros en especifico.
```js
function registroAlumno(nombre,apellido,sexo){
    let respuesta= `${nombre},${apellido},${sexo}`
    return
}
//NOMINAL
registroAlumno(sexo="M", nombre="ADAN",apellido="HUAMANI" )
//POSICIONAL
registroAlumno("Adan","HUamani","M"
)
```
> [!INFO]
> Posicionales en orden y Nomminales especificar el parametro y su valor.

## Tipos de funciones por su notacion
### Funciones como valor
en este caso se crea una funcion como si fuera un valor de un enlace.
```js
let saludo=function(){
    console.log
}
saludo()
```
en este caso el nombre de la funcion sera el nombre que le pongamos al enlace y para llamarlo o ejecutarlo debemos poner el nombre del enlace mas los parentisis.
al igual que una funcion clasica podemos tambien pasarle parametros.
### Funcion como declaracion 
se le conoce funcion `declarativa` a la manera clasica de como creamos una funcion.
```js
function saludo(){
    return "saludo a todos"
}
console.log(saludo())
```
### Funcion de flecha (Arrow function)
esta funcion es introducida a partir de la version de ecma script 5 `es5`.
se implemento para la creacion y ejecucion rapida y mas entendible de las funciones.
la funcion flecha evita la `verbosidad` o `verboso` se utiliza en la programacion para referirce a un codigo que necesita demaciadas lineas de codigo o necesita cumplir estrictamente una serie de reglas podemos comprar la `verbosidad` a un texto demasiado extenso o redundante.
se crea de la misma manera que una funcion como valor, eso quiere decir que la funcion flecha sera el valor de un enlace.
la funcion flecha tiene la siguiente estructura.
El parametro seguido del simbolo flecha `=>` y del cuerpo de ser necesario o solo de codigo que se retornará.
```js
function saludo(){
    return "hola mundo"
}
console.log(saludo())

let saludo=()=>("hola mundo")
console.log(saludo())

let mensaje=texto=>console.log("hola:",texto)
console.log(mensaje("primo"))
```