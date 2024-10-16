//Pedir al usuario dos numeros al realizar el producto de ambos determinar en una condicion de una sola linea si el resultado es mayor a 100
let num1 = Number(prompt("Ingrese el primer numero"));
let num2 = Number(prompt("Ingrese el segundo numero"));
let producto = num1 * num2;
if (producto > 100) {
    alert("El producto es mayor a 100");
}
//Pedir al usuario una contraseña que debera ser verificada en una condicion simple si es la contraseña correcta.
let contraseña = prompt("Ingrese la contraseña");
if (contraseña === "contraseña") {
    alert("Contraseña correcta");
}
//Pedir al usuario un numero y determina un numero primo.
let numero = parseInt(prompt("Introduce un número:"));
let esPrimo = true;
if (numero <= 1) esPrimo = false; 
else for (let i = 2; i <= Math.sqrt(numero); i++) if (numero % i === 0) esPrimo = false;
alert(esPrimo ? `${numero} es un número primo.` : `${numero} no es un número primo.`);