/*Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.*/

contador = 1;

while(contador <=10) {
    console.log(contador);
contador ++
}

/*Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.*/

contador = 10;

while(contador>= 0) {
    console.log(contador);
    contador --
}

/*Crea un programa de cuenta regresiva. 
Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.*/

let numero = prompt('Elige un número: ');

cuenta = 0

while(cuenta <= numero) {
    console.log(cuenta);
    cuenta ++
}
