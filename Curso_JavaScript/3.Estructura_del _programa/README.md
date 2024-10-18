# Estructura del programa
## Indice

- [Estructura del programa](#estructura-del-programa)
  - [Indice](#indice)
  - [INTERACCION BASICA CON EL USUARIO](#interaccion-basica-con-el-usuario)
  - [EXPRESIONES Y DECLARACIONES:](#expresiones-y-declaraciones)
- [Estructura del programa](#estructura-del-programa-1)
  - [Expresiones y declaraciones](#expresiones-y-declaraciones-1)
  - [Bindings (Enlaces)](#bindings-enlaces)
  - [El Entorno](#el-entorno)
  - [Control de Flujo](#control-de-flujo)
    - [Ejecucion condicional](#ejecucion-condicional)
    - [Bucles](#bucles)

## INTERACCION BASICA CON EL USUARIO
Podemos interactuar con el usuario desde JavaScript, utilizando un metodo sencillo que viene implementado en los navegadores.
El metodo es conocido como: `window` o el metodo de `ventana` este metodo en realidad es un objeto que contiene o almacena varias funciones entre ellas las de mostrar mensajes o pedir datos al usuario.
- **alert** - esta funcion nos muestra un mensaje en pantalla
```js
window.alert("mensaje")
```
- **confirm** - preguntar al usuario y ofrecer dos botones  que se traduce en valores booleanos `Aceptar` (True) y `cancelar` (False)
```js
//si deseamos capturar la respuesta almacenaremos al codigo en una variable
respuesta=window.confirm("Te gustaria ser mi universo")
```
- **prompt** - pregunta al usuario y espera que se ingrese una respuesta 
```js
window.prompt("como te llamas?")
//si deseamos almacenar la respuesta usaremos una variable
respuesta=window.prompt("como te llamas")
```
## EXPRESIONES Y DECLARACIONES:
- **Expresiones**: En JavaScript un fragmento de codigo que produce valor es llamda `Expresiones`, tambien se dice que una `expresion` es el fragmento de una `oracion`.
```js
1
"hola"
3*6
5>6
!true
```
- **Declaracion**: en JavaScript es una oracion
```js
!true;
let estado=!false; // el ; nos ayuda a dar sentido a al declaracion y finalizar
```


# Estructura del programa
## Expresiones y declaraciones
``
## Bindings (Enlaces)
cuando creamos un valor estos valores son volatiles, solo existenn en la ejecucion del programa y solo cuando llamamos.
El bingings o enlace es la manera que javascript recuerda los valores y mantiene un estado interno asi como la reutilizacion de valores.
**como usamos los bingings en javascript**
para usar el bingings primero debemos usar la palabra reservada o 'keyword' de nombre "let" despues debemos darle un nombre para identificar el enlace, y luego asignarle el valor.
```js
//Este es un anlace que puede apuntar a varios valores
//como un pulpito con muchos brasitos
let edadpersona = 34
// Si deseamos que nuestro enlace solo apunte a un solo valor, osea un pulpito con un solo brazito, entonces para crear este enlace debemos hacer uso del keyword const
const edad = 45
//Este enlace siempre apuntara al valor 45 no podra modificar su enlace a otro valor.
```
> [!NOTE]
> **Que nombre ponerle a nuestros enlaces**
- El nombre de un enlace debera describri el valor al que esta enlasado y debera estar escrita en `CamelCase`
  ```js
  
  //Quiero crear un enlace que tenga el valor de la fecha actual
  let yyyymmdd = "20240910"
  //Correcto
  let fechaActual = "09-10-2024"
  //Correcto
  let edadActualAlumno = 20 
  ```
## El Entorno
El entorno es conocido como el momento en el que se ejecuta o inicia un archivo javascript.
El al crearce no se crea vacio dentro del entorno se crearan la coleccion de enlaces y valores.
**TAREA** - Averiguar mas sobre la ejecucion en linea de los entornos en javascripts.
## Control de Flujo 
Una sentencia se ejecuta como si fuera una historia de arriba abajo. por ejemplo: 
```js
let elNumero = prompt ("Elige un numero")
console.log(`tu numero es la raiz cuadrada de: ${+ el numero*el numero}`)
//primero le pide al usuario un numero y despues muestra el mensaje y el cuadro de ese numero.
```
### Ejecucion condicional
Hacemos uso de este control de flujo cuando tenemos distintos caminos o distintos mensajes que deseamos mostrar segun una condicion.

**Como creamos una condicion en javascript**

la ejecucion condicional se crea con la palabra reservada (keyword) `if` a continuacion de una `condicion`en llaves `{}` se escribira el cuerpo del codigo que deseo ejecutar en caso la condicion sea `verdad`.

**Condicion simple `if`**

```js
let comparacion=5>4
if comparacion{
  promt("escribe tu nombre")
}
```
-**Condicion simple ``if`` de una sola linea**
```js
if (1+1=2 console.log)("es verdad");
```
- **Condicion de doble evaluacion `if else`**
Existen casos en los que tendremos que ejecutar un codigo si es verdad pero tambien si es falso. ejecucion condicional de 2 caminos.
```js
let edadPersona = 16;
if (edadPersona >= 18){
  console.log("eres mayor de edad");
}else{
  console.log("eres menor de edad");
}
``` 
- **Condicion multiple `if` `Else if`** 
  Se utiliza cunado se tiene que evaluar y devolver varias opciones o multiples respuestas.
  ```js
  let totalCompra=50
  if (totalCompra > 50 && totalCompra < 100){
    console.log(`Tienes un descuento del 10% ${totalCompra*010}`)
  }
  else if (totalCompra > 100 && totalCompra < 500){
    console.log(`Tienes un descuento del 20% ${totalCompra*0.20}`)
  }
  else{
    console.log("Tines un descuento del 50%")
  }
  ```
### Bucles
Consideremos el siguente problema
crear un programa que imprima los numeros del 1 al 12. una forma de hacerlo seria el suguiente.
```js
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)
console.log(11)
console.log(12)
```
El ejemplo anterior es valido pero la idea cuando programamos es hacer menos trabajo nomas, en el ejercicio anterior tendriamos tendriamos si deseamos mostrar todos los numeros menores a 1000.
Necesitamos una manera de ejecutar un fragmento de codigo multiples veces a esta forma de control de flujo se le llama bucle. Para crear un bucle tenemos dos formas de hacerlo.
1.  `white` - Para hacer uso de este bucle primero debemos usar la palabra clave `white` este asu vez como el if devera tener una condicion si esta condicion es verdad se ejecutara indefinidamente en caso la condicion sea falsa el bucle no sera ejecutado, al igual que el if luego de darle una condicion creamos el `cuerpo` donde escribiremos el codigo que deseamos ejecutar.
```js
while (true){
  console.log("hola")
}
```
2. `for` esta es la manera mas abreviada de crear un bucle en javascript, en el caso de while necesitamos una variable contador luego la condicion y finalmente el aumento del contador. en el caso de `for` estos 3 pasos se realizan en una sola linea.
```js
for (let i=2; i<=20; i++){
  if(contador%2==0) console.log(contador)
}
```
> [!TIP] 
> [while] WHile se usa cuando no sabemos la cantidad de veces que deseamos ejecutar un codigo,por lo general su finalizacion requirira de una intervencion externa. `for` se usa cuando sabemos la cantidad de veces  ue deseamos ejecutar un codigo.

>[!NOTE]
> Para terminar un bucle se hace uso de la palabra reservada `break`