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

### Tarea averiguar que otros metodos existen para el tratamiento  de listas en javascript
//Trabajo
//Tengo una lista de 7 frutas
// Crear un programa que identifique si en mi lista existe naranja de existir me mostrara su indice, de no existir me mostrara un mensaje de error
// Lista de frutas
//Crear dos funciones que reciban por parametros una lista de numeros, una funcion encontrara y devolvera el numero menor de la lista y la otra funcionn encontratara y devolvera el numero mayor de la lista. no usar los metodos de min y max
// Función para encontrar el número menor
//Crear una funcion que me permita contar la cantidad de vocales "a" que tengo en una lista