//Ejemplo de condicion simple
//Capturamos la edad y lo convertimos a numero
let edad = Number(prompt("Ingresa tu edad"))
//Verificamos de si el tipo de datos de edad es number realmente
if (typeof edad == "number"){
    //si la comparacion es verdad mostraremos por consola la raiz cuadrada de la edad
    console.log(edad*edad)
}

//Ejemplo de una condicion simple de una sola linea.
if (1+1==3) console.log("es verdad");