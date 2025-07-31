/*
    Variable - Elemento que permite almacenar datos (tipo de dato + valor)
        => Declaración - Crear la caja
            -> var - Palabra reservada que me permite crear una variable (let, const)
        => Asignación - Guardar un valor en la caja    
            -> = - Operador que permite asignar un valor a una variable
        => Tipo de dato - Herramienta que permite reconocer qué puedo hacer con el valor almacenado en la caja
            -> En JS, las variables reciben el Tipo de Dato al momento de asignarlas
            -> En JS, cambiar el valor puede modificar el Tipo de Dato
        => Valor - Cualquier cosa que se pueda almacenar en la caja (número, texto, true, false, etc)
        
        
    Operar con variables === Usar los datos que almacenamos
    
    
    Operadores de Variables
        => Matemáticos - Permiten realizar operaciones matemáticas
            -> +
                => Suma de datos de tipo number
                => Concatenación (juntar) de datos de tipo string
            -> -, *, /, %
                => Realizan la correspondiente operación matemática sobre datos de tipo number    
        => Asignación - Permiten guardar en una variable
            -> =
            -> Combinar Operadores Matemáticos y el Operador de Asignación
                -> +=, -=, *=, /=, %=
                    => Se utilizan para reemplazar el valor actual de la variable por el resultado de la operación de ese valor y otro valor
        => Incremento(++)/Decremento(--) - Sumar(++)/Restar(--) 1 al valor almacenado y reemplazar el resultado
            -> pre ++variable/--variable
            -> post variable++/variable--
        => NO SE PUEDE OPERAR SOBRE DATOS DE DISTINTO TIPO
            -> Casteo implícito - JS convierte un dato en otro para poder operar
                => +
                    => string + number -> string + string = string
                => -, *, /, %
                    => string (-, *, /, %) number -> number (-, *, /, %) number = number    
                    => NaN (Not a Number) -> Es valor de tipo number que me indica que JS no pudo realizar la operación matemática porque no existía un número

*/

/*
    Matemáticos
*/
var n1 = 1; //Declaración y Asignación en una sentencia
var n2 = 1;

console.log(n1 + n2);

//string + number + number => string + string + string
var texto = "El resultado de la suma es: " + n1 + n2;
console.log(typeof texto);

console.log("El resultado de la suma es: " + (n1 + n2));

var resultado = n1 + n2;
console.log("El resultado de la suma es: " + resultado);

//string + number - number -> (string + number = string) - number -> string - number
console.log("El resultado de la resta es: " + 5 - 2);

//string - number -> number - number
console.log("5" - 2);

/*
    Asignación
*/
var num1 = 1;
var num2 = 1;
console.log("Valor almacenado en la variable num1: " + num1);

//Realizar la suma de num1 y num2 y almacenarla en num1
num1 += num2; //num1 = num1 + num2;
console.log("Valor almacenado en la variable num1: " + num1);
num1 += num2; //num1 = num1 + num2;
console.log("Valor almacenado en la variable num1: " + num1);

num1 += "5";
console.log("Valor almacenado en la variable num1: " + num1);
//Tarea - Mostrar en consola (2)
//Tarea - Realizar operación (1)

var texto = "Completo la ";
// Tarea 1 - Declarar variable
// Tarea 2 - Asignar "Completo la "
texto += "frase";
// Tarea 3 - Realizar la operación
console.log(texto);
// Tarea 4 - Mostrar

/*
    Incremento(++)/Decremento(--)
*/
var num = 1;

// pre - Primero realiza la suma, después muestra
// console.log(++num);
// console.log("Valor almacenado en num " + num);

// post - Primero muestra, después suma
console.log(num++); //1
console.log("Valor almacenado en num " + num); //2

/*
    JS tiene que realizar 2 acciones
        => Sumar 1 al valor almacenado en la variable num y reemplazar el valor original con el resultado de la suma
        => Mostrar el valor almacenado en la variable num (console.log)
*/

/*
    Funciones Básicas de JS
        => Entrada de Datos - Sirven para solicitar información
            -> prompt(mensajeParaElUsuario)
                -> Permite que el usuario ingrese un dato de tipo string
        => Salida de Datos - Sirven para mostrar información
            -> console.log(datoAMostrar) - Muestra información en la consola
            -> console.write(datoAMostrar) - Muestra información en la ventana del navegador (Se pone en donde pusimos el archivo JS)
        => Conversión de datos (casteo explícito) - Sirve cuando necesitamos convertir manualmente un tipo de dato en otro
            -> parseInt(string)
                -> parseInt("1.8") => 1
            -> parseFloat(string)
                -> parseFloat("1.8") => 1.8
            -> Number(string)    
                -> Number("1.8") => 1.8
*/

document.write("<h2 class='red'>Soy un título</h2>");
document.write("hola");

var html = "<p>Soy un p creado en JS</p>";
document.write(html);

// var primerNum = parseInt(prompt("Ingresa el primer número"));
// var segundoNum = prompt("Ingresa el segundo número");
// segundoNum = parseInt(segundoNum);

// var mostrarResultado =
//   "<p class='resultado'>" + (primerNum + parseInt(segundoNum)) + "</p>";
// var mostrarResultado =
//   "<p class='resultado'>" + parseInt(primerNum + segundoNum) + "</p>";
// document.write(mostrarResultado);

/*
    Programa
        -> Objetivo: Sumar dos números y mostrar el resultado

    ¿Qué necesito?
        => Los números
            -> prompt
        => Una forma de que el usuario pueda visualizar el resultado    
            -> document.write
*/

/*
    Programa: Una persona necesita una muy simple calculadora que pueda dividir dos
    números.
        -> Objetivo: Realizar la división de dos números y mostrar el resultado

    ¿Qué necesito?
        => Los números
            -> prompt (convertir a number)
        => Una forma de que el usuario pueda visualizar el resultado    
            -> document.write
*/

// var dividendo = Number(prompt("Ingrese el dividendo"));
// var divisor = Number(prompt("Ingrese el divisor"));

// document.write("<p class='resultado'>" + dividendo / divisor + "</p>");

/*
    Programa: Un bibliotecario desea un simple programa en el que ingrese el nombre y el apellido de alguien por separado y lo muestre normalizado.
    Normalizado significa que debería verse así: Apellido, Nombre

    ¿Qué necesito?
        => Pedir Nombre
        => Pedir Apellido
        => Mostrar normalización
*/

// var nombre = prompt("Ingrese el nombre");
// var apellido = prompt("Ingrese el apellido");
// document.write(nombre + ", " + apellido);

/*
    Programa: Un alumno debe calcular su promedio en una materia en la que tiene 3
    notas. Las notas van de 1 a 10.

    ¿Qué necesito?
        => Pedir las tres notas
        => Calcular el promedio
        => Mostrarlo
*/

var nota1 = parseFloat(prompt("Ingrese nota 1"));
var nota2 = parseFloat(prompt("Ingrese nota 2"));
var nota3 = parseFloat(prompt("Ingrese nota 3"));
var promedio = (nota1 + nota2 + nota3) / 3;
document.write("Promedio: " + promedio);
