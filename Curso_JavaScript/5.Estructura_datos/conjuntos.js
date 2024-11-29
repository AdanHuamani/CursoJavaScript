// crear una lista que almacene las cinco  vocales y luego las muestre por consola.
// let vocales=["a","e","i","o","u"]
// console.log(vocales)

// acceder a la vocal "o"
// console.log(vocales[3])

// accediendo a los elementos con for
// for (let i=0;i<vocales.length;i++){
//     console.log(vocales[i])
// }
// console.log(vocales.length)

// let texto="hola mundo"
// //["hola","mundo"]
// let listaTexto=texto.split(" ")
// console.log=["hola","como","estas"]
// //"hola como estas"
// let nuevoTexto=lista.join(" , ")
// console.log(nuevoTexto)

// //tengo la siguiente url
// //www.gatitas.com/?q
// //crea un programa que me capture solo la query
// // "marina gold"
// let url="www.gatitas.com/?qmarina+gold"
// let cortarUrl=url.split("=")
// let devidoTextoEnDos=obtenerPrimerElemento.split("+")
// let juntarTexto=devidoTextoEnDos.join(" ")
// //let listaUrl=split("=")[1].split("+").join(" ")
// console.log(juntarTexto)


// let datosJory=["Jory","Rodriguez",20,"M"]
// let datosJoryObjeto={
//   nombre:"Jory",
//   apellido:"Rodriguez",
//   edad:20,
//   sexo:"Todos los dias",
//   ganado:["el premo","los chamos","las enfermeras","mineros"],
//   direccion:{
//     tipoCalle: "Pasaje",
//     nombreCalle: "Querobamba",
//     numeroVivienda: 222,
//     numeroCuarto: 5
//   },
//   accion:()=>{console.log("Hola soy Jory")}
// }
// console.log(datosJoryObjeto.ganado)
// console.log(datosJoryObjeto["sexo"])
// console.log(datosJoryObjeto.ganado[3])

//Crear una funcion que me genere un objeto de caracteristicas tecnicas de una computadora, el objeto debera tenr como minimo los siguientes valores.
//marca,modelo,procesador,ram,disco y targeta de video.
function Computadora(marca, modelo, procesador, ram, disco, tarjetaDeVideo) {
    let computadora = {
        marca,
        modelo,
        procesador,
        ram,
        disco,
        tarjetaDeVideo
    };
    return computadora;
}
let miComputadora = Computadora(
    'HP',
    'GRE 15',
    'Intel Core i7',
    '16 GB',
    '512 GB SSD',
    'NVIDIA GeForce 4060'
);

console.log(miComputadora);
//en este caso la clave marca existe en mi objeto por lo tanto su valor sera actualizado por intel
miComputadora["marca"]="Intel Core i9"
console.log(miComputadora)
//en este caso la clave targeta no existe en mi objeto por lo tanto se creara un nuevo elemento con la clave targeta y su valor nvidia me tienes nvidia.
miComputadora["tarjetaDeVideo"]="Nvidia GeForce 4090"
console.log(miComputadora)
//Ejercicio de Java script del 7 al 10
