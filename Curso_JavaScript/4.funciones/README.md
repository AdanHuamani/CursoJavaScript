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
//en el caso de tener mas de un parametro y ejecutar mas de una linea de codigo
let registroUsuario=(nombre,apellido)=>{
    let alumno= `${nombre},${apellido}`
    return alumno
}
console.log(registroUsuario("edwin","cachondo"))
```
## DIFERENCIAS
las diferencias que tenemos al momento de crear una funcion declarativa, funcion como valor y flecha. Es el binding
### Binding 
es una tecnica que guarda las funciones y variables (enlaces) sube al principio la declaracion, no el valor,al principio del archivo javascript.
```js
despedida()
function saludo(){
    return "hola primo"
}
function despedida(){
    return "adios primo"
}
```
```js
saludo()
despedida()
```
## La pila de llamada (call stack)
es una tecnica que se usa para controlar de manera correcta la ejecucion de una funcion 
**Averiguar sobre LIFO**
En informática, el término LIFO se utiliza en estructuras de datos y teoría de colas. Guarda analogía con una pila de platos, en la que los platos van poniéndose uno sobre el otro, y si se quiere sacar uno, se saca primero el último que se ha puesto. LIFO es el algoritmo utilizado para implementar pilas.
```js
//programa que haga una ensalada
function cortarTomate() {
    console.log("cortar tomate")
}
function cortarLechuga() {
    console.log("cortando lechuga")
}
function cortarPepino(params) {
    console.log("Cortando pepino para el premo")
}
function cortarLimon() {
    console.log("cortando limon")
}
function preparandoEnsalada() {
    cortarTomate()
    cortarLechuga()
    cortarPepino()
    cortarLimon()
    console.log("mezclando las verduras")
}
function comer() {
    preparandoEnsalada()
    console.log("comiendo la ensalada")
}
comer()
```
## CLOSURE o funciones de cierre (funciones que retorna funciones)
Un `closure` es una funcion que encapsula una serie de variables y definiciones locales que unicamente seran accesibles si son devueltas con el keyword `return`.
Antes de que aparezca la version `ecma 6` los `closure` eran un patron creacional que nos permitia modolarizar nuestro codigo, en lugar de usar `clases`, que eran populares en otros leguajes pero que javascript aun no lo implementaba.
```js
//una funcion que retorna otra funcion(por lo general es una funcion anonima).
//funcion clasica
function retornaValor(n){
    return n+1
}
//llamando a la funcion clasica
retornaValor(10)

//Funcion closure
function retornaValor(n){
    return function(){
        return n+1
    }
}
//llamando a la funcion closure
retornaValor(10)()
```
>[!NOTE]
> Las funciones closure son usadas por que pueden mantener el valor de sus enlaces o variables locales en todo el proceso de la ejecucion de su funcion padre por cada llamda que se le realiza.

## Closure de tipo clase
son funciones cuyo uso son iguales a las clases dentro de la ejecucion de una clase tenemos lo que se llama como `instancia` en javascript tenemos funciones `closure` que se pueden instanciar al igual que una clase, la diferencia con la funcion `closure` clasicas es que en esta hacemos uso de la palabra reservada `keyword` llama `this`.
```js
function contador(){
    this.contador = 0
    this.incre=function(){
        this.contador++
    }
    this.decre=function(){
        this.contador--
    }
}
//realizamos la instancia
let count1=new contador()
count1.contador
for(let i=0;i<5;i++)
    count1.incre()
```
>[!NOTE]
>La funcion closure de tipo clad¿se no hace uso de `return` en sus funciones al nacer uso de `this` cada funcion o variable enlazada al objeto que se cree.

>[!WARNING]
> El problema principal de este tipo de funcion, es que cuando creamos un nuevo objeto a partir de la funcion tipo clase, reservara espacio  en memoria para toda la clase y su valor creados eso quiere decir variable y funciones, cada ves que llamas a un funcion esta se replica en memoria.

### Prototype (Tarea- averiguar y sus ejemplos)


























