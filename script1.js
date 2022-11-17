//Ejercicio 1 ppt:
 
/*
let importe =prompt (`Ingrese un monto`) 

if (importe > 149 ) {
    alert(`Se desconto ${(importe*12)/100}`)
    alert(`El total del importe final es ${[(importe-(importe*12)/100)]} soles`)
}
*/

//Ejercicio 2 ppt : 


let alumno =prompt("Ingresa el nombre del alumno")
let examenp =+prompt("Ingrese la nota parcial")
let examenf =+prompt("Ingrese la nota del examen final")
let promediopr =+prompt("Ingresa el promedio de prácticas")

if(promediopr>13){
    alumno== APROBADO
} else{
    alumno== DESAPROBADO
}
alert(`El nombre del alumno:` + alumno);
alert(`El nombre del alumno: ` + promediopr); 


//Ejercicio 1 
/*
const bonificación = 7
let nombre =prompt("Ingrese el nombre del trabajador")
let sueldob = +prompt("Ingrese el sueldo básico del trabajador")
let numhijos = +prompt("Ingrese el numero de hijos del trabajador")

if(numhijos >=1){
    let sueldofinal = sueldob + (sueldob*bonificación/100)
    alert(`Su bonificación es ${bonificación}% y el sueldo final es ${sueldofinal}`)
}else{
    alert(`Ud. no accede a la bonificación, porque no tiene ningún hijo.`)
}
*/
//Ejercicio2
/*
Construir un programa que permita ingresar un número, 
si el número es mayor de 500, 
se debe calcular y mostrar en pantalla el 18% de este.*/
/*
let numero =prompt (`Ingrese un monto`) 

if(numero > 499) {
    alert(`El 18 % es ${(numero*18)/100} soles`)   
}*/
//Ejercicio 3
/*Crea una aplicación que pida un número y calcule su factorial 
(El factorial de un número es el producto de todos los enteros entre 1 y el propio número y se representa por el 
    número seguido de un signo de exclamación. Por ejemplo 5! = 1x2x3x4x5=120)*/
/*
let dato = +prompt("Ingrese un número:");
let c = 1

for(let i = dato; i>0; i--){
c *= i;
}

alert(c)*/