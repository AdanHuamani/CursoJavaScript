//EJECICIO
//Crear una funcion que me de un asludo de Bienvenida
// function saludoBienvenida(){
//     console.log("Hola gente")
// }
// let saludo=function(){
//     console.log("Bienbenido")
// }
// saludo()

//binding en javascript lo que hace es subir las funciones declarativas a la cabecera 
// console.log(despedida())

// function despedida(){
//     return "adios primo"
// }

//en el caso de funcion como valor o funciones flecha el bingdingn solo eleva al principio del archivo la declaracion del enlace o variable mas no el valor por eso en este caso debemos ejecutar las funciones despues de haberlo creado.
let saludo=()=>{return "hola primo"}
console.log(saludo())

//en el caso de la funcion declarativa el bindingn eleva toda la funcion al principio del archivo por eso podemos ejecutar la funcion desde cualquier parte del archivo incluso antes de que sea creada.
function despedida (){
    return ("Adios")
}