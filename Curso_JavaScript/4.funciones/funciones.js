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
// let saludo=()=>{return "hola primo"}
// console.log(saludo())

//en el caso de la funcion declarativa el bindingn eleva toda la funcion al principio del archivo por eso podemos ejecutar la funcion desde cualquier parte del archivo incluso antes de que sea creada.
// function despedida (){
//     return ("Adios")
// }

//Crear una funcion que tenga o almacene una variable contador y podamos con funciones realizar la suma mas uno de esra variable y la resta mas uno de la misma variable ademas de poder tener un funcion que me permita acceder al valor actual y poder mostrarlo.

// function contador(){
//     //variable local
//     let contador=0
//     function incre(){
//         return contador++
//     }
//     function decre(){
//         return contador--
//     }
//     function valueCount(){
//         console.log(contador)
//     }
//     return{
//         valueCount,
//         incre,
//         decre
//     }
// }
// let count1=contador()
// for(let i=0;i<5;i++){
//     count1.incre()
// }
// count1.valueCount()

// let count2=contador()
// for(let i=0;i<5;i++){
//     count2.decre()
// }
// count2.valueCount()

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
console.log(count1.contador)
count1.incre()
console.log(count1.contador)