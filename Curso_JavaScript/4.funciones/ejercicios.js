//Haciendo uso de las funciones closure 
//EJECICIO 1
//Pedir al usuario su nombre y su edad, cerificar qeu su edad sea mayor a 18 años, en ese caso mostraremos un mensaje de bienvenida mas el nombre que ingreso el usuario.
// function Usuario() {
//     this.nombre = '';
//     this.edad = 0;

//     this.pedirDatos = function() {
//         this.nombre = prompt("¿Como te llamas?");
//         this.edad = parseInt(prompt("¿Cuantos años tienes?"), 10);
//         this.verificarEdad();
//     };

//     this.verificarEdad = function() {
//         if (this.edad > 18) {
//             console.log(`Bienvenido, ${this.nombre}<3`);
//         } else {
//             console.log("Lo siento, Eres menor de edad");
//         }
//     };
// }

// const usuario = new Usuario();
// usuario.pedirDatos();

// Crear un programa que pide registrar el nombre de un producto o actualizar el nombre del producto.
// Observacion al realizar la actualizacion pondré ver el valor anterior como el valor nuevo.

function Producto() {
    this.nombre = '';

    this.registrarProducto = function() {
        this.nombre = prompt("Ingresa el nombre del producto:");
        console.log(`Producto registrado: ${this.nombre}`);
    };

    this.actualizarProducto = function() {
        const nombreAnterior = this.nombre;
        const nuevoNombre = prompt("Ingresa el nuevo nombre del producto:");

        if (nuevoNombre) {
            this.nombre = nuevoNombre;
            console.log(`Producto actualizado: Anterior: ${nombreAnterior}, Nuevo: ${this.nombre}`);
        } else {
            console.log("No se ha realizado ninguna actualización.");
        }
    };
    this.eliminarProducto = function() {
        if (this.nombre) {
            const confirmacion = confirm(`¿Estás seguro de que deseas eliminar el producto "${this.nombre}"?`);
            if (confirmacion) {
                console.log(`Producto eliminado: ${this.nombre}`);
                this.nombre = '';
            } else {
                console.log("El producto no ha sido eliminado.");
            }
        } else {
            console.log("No hay ningún producto registrado para eliminar.");
        }
    };
}
const producto = new Producto();
producto.registrarProducto();
producto.actualizarProducto();
producto.eliminarProducto();