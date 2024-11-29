# INDICE
# Estructura de datos
## Lista o Array
Son listas en javacript son un tipo de dato estructurado que no se permite almacenar distintos tipos de datos primitivos separados por comas, cada tipo de dato que se almacene en una lista se le conoce como elemento.
Así cada elemento estara separado por una coma.
### Creacion
Primero debemos crear un enlace (una variable) y luego le asignamos la lista que se cree con 

```javascript
//estoy creando una lista vacia
let miLista=[]
//creando una lista de numeros
let numeros=[2,4,6,8,3]
//creando una lista de nombres
let nombre=["Edwin","Adan","David","Gordo"]
//crear una lista mixta
let mixta=[4,"Adan",false,["hola","mundo"]]
```
### acceder a un elemento del array
para poder acceder a un elemento del array debemos debemos entender que javascript asignara por cada elemento un indice que nos permitira acceder a un elemento en especifico este indice es incremental y comenzada de cero con el primer elemento, el ultimo elemento sera la cantidad de elementos menos uno.
```javascript
let numeros=[3,6,7,23,67,8]
console.log(numeros[2])
```
existe otra manera de acceder a los elementos de una lista, esto se logra recorriendo cada elemento de una lista esto se logra con un bucle `for`
```javascript
for (let i=0;i<vocales.length;i++){
    console.log(vocales[i])
}
console.log(vocales.length)
```
### Metodos
son funciones que nos permiten crear actualizar y eliminar los elemntos de una lista,todas la variables que almacnen una lista nos permiten  acceder a sus metodos poniendo un puntos despues del nombre de la variable.
- Metodo para recuperar la logitud de elementos que tiene una lista
  js
  let numeros=[2,3,5,6,7,8]
  numeros.length
  
- Metodo para agregar un elemnto al final de la lista
  js
  let vocales=["a"]
  vocales.push("e")
  
- Metodo para eliminar el ultimo elemento de la lista
  js
  let vocales=["a","e"]
  vocales.pop()

### Objetos
los objetos son tipos de datos estructurados similares a la lista, para poder acceder a un elemento de la lista javascript les asignaba indices, en este caso los objetos como unica diferencia de las listas nosotros podemos asignar el nombre del elemento al cual deseamos accerder a esto se le connoce como.
`clave:valor`
cada clave: valor es un elemento de un objeto si deseamos crear mas elemento tendremos que separarlos por comas.
### Creacion
para crear un objeto debemos encerrar los elementos en llaves `{}` para el elemento estara conformado por su `clave:valor`.
```javascript
let datosJory=["Jory","Rodriguez",20,"M"]
let datosJoryObjeto={
  nombre:"Jory",
  apellido:"Rodriguez",
  edad:20,
  sexo:"Todos los dias",
  ganado:["el premo","los chamos","las enfermeras","mineros"]
  direccion:{
    tipoCalle: "Pasaje",
    nombreCalle: "Querobamba",
    numeroVivienda: 222,
    numeroCuarto: 5
  },
  accion:()=>{console.log("Hola soy Jory")}
}
```