//3. Escribe un programa que cree una cadena que represente un tablero de 8X8 usando caracteres de salto de salto de lineas, en cada posicion del tablero hay un caracter de espacio o un caracter "#", los caracteres deben formar un tablero de ajedrez.
/*# # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
*/
let size = 8;
let board = "";
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if ((i + j) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}
console.log(board);