// //Ejemplo de condicion simple
// //Capturamos la edad y lo convertimos a numero
// let edad = Number(prompt("Ingresa tu edad"))
// //Verificamos de si el tipo de datos de edad es number realmente
// if (typeof edad == "number"){
//     //si la comparacion es verdad mostraremos por consola la raiz cuadrada de la edad
//     console.log(edad*edad)
// }

// //Ejemplo de una condicion simple de una sola linea.
// if (1+1==3) console.log("Es verdad");

// // Ejercicio de condiciones
// /// Crear un programa que me pida un numero y me muestre por consola si es un numero par o impar.
// let numero = Number(prompt("Ingresa un numero"));
// if (+numero %2 == 0){
//     console.log("Es un numero par")
// }else{
//     console.log("Es un numero impar")
// }

// let totalCompra= prompt(120)
//   if (totalCompra > 50 && totalCompra < 100){
//     console.log(`Tienes un descuento del 10% ${totalCompra*0.10}`)
//   }
//   else if (totalCompra > 100 && totalCompra < 500){
//     console.log(`Tienes un descuento del 20% ${totalCompra*0.20}`)
//   }
//   else{
//     console.log(`Tienes un descuento del 50% ${totalCompra*0.50}`)
//   }

//Ejercicio 
//Crear un programa que pida al usuario su edad y dependiendo su edad le daremos una serie de regalos.
//REGALOS
/**
 * - Si su edad esta entre 4 a 8 años: te ganaras un chupetin
 * - Si su edad está entre 9 a 13 años: te ganaras una palota firmada po cuto
 * - Si su edad esta entre 14 a 17 años: te ganaras un celular nokia
 * - Si su edad es mayor o igual a 18: te ganaras al primo y lo haces leña.
 */
// let edad = prompt("Ingresa tu edad")
// if (edad >=4 && edad<=8){
//     console.log("Te ganaste un chupetin")
// }
// else if (edad >=9 && edad <=13){
//     console.log("Te ganaste una pelota firmada")
// }
// else if (edad >=14 && edad <=17){
//     console.log("Te ganaste un celular Nokia")
// }
// else (edad >=18 && edad <=100)
//     console.log("Te ganaste al premo")

//EJERCICIO
//Realizar un programa que pida 5 Nombres a travez del navegador
//Y realizar las siguientes evaluaciones
//naranja,limon -> "Es una fruta citrica"
//platano, manzana -> "Es una fruta dulce"
//fresa, pera y papaya -> "parala ensalda de fruta"
//Si ingresa otro tipo de frutas -> "No tiene clasificacion"
for (let i=1;i<=5; i++){
    let fruta=prompt("Ingresa el nombre de la Fruta numero:",i)
    switch(fruta){
        case (fruta=="Naranja" || fruta=="Limon"):
            console.log(fruta,"Es una furta citrica")
            break
        case "Platano":
        case "Manzana":
            console.log(fruta,"Es una fruta dulce")
            break
        case "Fresa":
        case "Pera":
        case "Papaya":
            console.log(fruta,"Para ensalada de fruta")
            break
        default:
            console.log("No tiene clasificacion")
            break;
    }
}
    