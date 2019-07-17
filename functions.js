/*Ejecutar en la consola mostrarMensaje() y ver qué sucede. A continuación, declarar a 
la función mostrarMensaje para que muestre con console.log "Esto es un mensaje". 
Volver a ejecutar la función mostrarMensaje() y ver qué cambió.*/

mostrarmensaje();
var mostrarmensaje = function(){
    console.log("Esto es un mensaje");
}

/*Crear una función que muestre una alerta que diga "Función ejecutada"*/

function executedFunction(){
    return alert("Función Ejecutadaa");
}

/*Implementar una función que mediante un prompt le pida al usuario ingresar un texto, a
continuación debe mostrar este texto por la consola.*/

function getText(){
    var texto = prompt("Ingrese un texto");
    return console.log(texto);
}

/* Crear una función que reciba un número por parámetro, lo multiplique por 2 y lo muestre
en la consola.*/

function parameter(num){
    multiplicacion = num * 2;
    return console.log(multiplicacion);
}

/*(D) Modificar la siguiente función para que pueda ser generalizada, recibir dos números
cualesquiera y sumarlos.
var sumar = function(){
var suma = 2 + 2;
console.log(suma);
}*/

var sumar = function(num1, num2){
    var suma = num1 + num2;
    return console.log(suma);
    }

/*Hacer una función que reciba dos strings como parámetros, los concatene y los muestre
por la consola.*/

function texto(text1, text2){
    return console.log(text1 + text2);
}

/*Implementar la función identidad(param). La funcionalidad que debe tener es retornar 
exactamente el valor que se le pasa por parámetro. Ejemplo: si se le pasa un 1, 
devolverá un 1. Si se le pasa "Hola", devolverá "Hola"*/

function fidentidad(dato){
    return console.log(dato);
}

/*Implementar la función sucesor(nro) que deberá retornar el sucesor del número pasado
por parámetro.*/

function sucesor(numero){
    numero++;
    return console.log(numero);
}

/*(D) Crear una función que retorne el sucesor del número pasado por parámetro a la
potencia de 2. Por ejemplo, si el parámetro es 8, deberá devolver 81, ya que 9 es el
sucesor de 8. */

function sucesorPotencia(numero){
    numero++;
    potencia = numero * numero;
    return console.log(potencia);
}

/*Implementar la función resto(nro1, nro2) que retorne el resto de dividir nro1 por nro2.
Ejemplo: resto(14, 3) retornará 2.*/

function resto(nro1, nro2){
    return nro1 % nro2;
}

/*Escribir una función que reciba el año de nacimiento de una persona y el año actual, y
calcule y devuelva la edad de esa persona.*/

function edadActual(anonacimiento, anoactual){
 return edad = anoactual - anonacimiento;
}

/*(D) Hacer una función que calcule y retorne el sueldo que le corresponde a un empleado.
Esta función debe recibir por parámetro la cantidad de horas trabajadas en el mes y el
valor que se le paga por cada hora*/

function salario(horastrabajadas, valorhora){
    return resultado = horastrabajadas * valorhora;
}

/*(D) Realizar una función que represente a un cajero que cobra comisiones por extraer
dinero. Esta función debe recibir un parámetro con el dinero que se quiere extraer y
retornar el valor de ese parámetro menos el 10%.
Por ejemplo: extraer(100) deberá retornar 90.*/

function extract(valor){
    comision = valor * 10 / 100;
    return resultado = valor - comision;
}

/*(D) Calcular las ganancias de una empresa al cabo de x años. La función debe tener la
siguiente forma calcularGanancias(ingresoAnual, años)*/

function calcularGanancias(ingresoAnual, años){
    return ganancias = ingresoAnual * años;
}

/*(D) Escribir una función que muestre información de la empresa del ejercicio 14. Esta
debe recibir un texto, ingresoAnual y años por parámetro. El texto debe ser mostrado con
una alerta. Guardar en una variable el resultado de aplicar calcularGanancias(ingresoAnual, 
años) y luego mostrarlo por consola y retornarlo.*/

function calcularGanancias(texto, ingresoAnual, años){
    alert(texto);
    var ganancias = calcularGanancias(ingresoAnual, años);
    console.log(ganancias);
    return ganancias;
}