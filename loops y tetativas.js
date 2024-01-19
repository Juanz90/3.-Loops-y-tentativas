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

let numero = prompt('Elige un número para cuenta regresiva: ');

while(numero >= 0) {
    console.log(numero);
    numero --
}
/*Crea un programa de cuenta progresiva. 
Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.*/

let numeroMax = prompt('ELige un número para la cuenta: ');
cuenta = 0

while(cuenta <= numeroMax) {
    console.log(cuenta);
    cuenta ++
}
