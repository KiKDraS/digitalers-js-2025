/*
    Programación Orienta a Objetos (POO)
        => Clases - Plantilla que contiene información
        => Objetos - Copia de esa plantilla
            -> Objeto HTML - Plantilla que permite trabajar con los elementos HTML
                -> Herramientas JS para copiar el Objeto HTML
                    -> document.getElementById(idDelElementoHTML)
                    -> document.querySelector(selectorCSS)
                        -> Siempre trabajo con el PRIMER elemento HTML que cumpla con el selector CSS
                    -> document.querySelectorAll(selectorCSS)
                        -> Permite elegir con cuál elemento que cumpla con el selector CSS trabajar      
*/

var unVar; //Tipo de dato: undefined (variable declara SIN tipo de dato ni valor)

var variableNull = document.getElementById("mai"); //Asigno un dato de tipo Objeto HTML. Para tener el valor (la copia de Objeto HTML) en el documento HTML tiene que haber un elemento con el id="mai". No existe un elemento con el id="mai". No tengo valor
// null (variable declarada CON tipo de dato SIN valor)
console.log(variableNull);

var main = document.querySelector("main");
console.log(main);
//main.innerText = "<h2>Hola, mundo!</h2>"; // Permite agregar dato de tipo string que representa texto plano
var texto = "<h2>Hola, mundo!</h2>";
//main.innerHTML += texto; // Permite agregar dato de tipo string que representa texto enriquecido
main.innerHTML = texto + main.innerHTML;

// var primerNum = parseInt(prompt("Ingresa el primer número"));
// var segundoNum = parseInt(prompt("Ingresa el segundo número"));
// document.write("<p class='resultado'>" + (primerNum + segundoNum) + "</p>");

var resultado = document.querySelector(".resultado");
console.log(resultado);
// resultado.innerText = primerNum + segundoNum;

/*  
    Operadores de Variables
        => Matemáticos - Permiten realizar operaciones entre datos de tipo number
            -> +
                -> Función 1: Realizar suma entre datos de tipo number
                -> Función 2: Concatenar datos de tipo string
            -> -, *, /, %
                -> Permiten realizar la correspondiente operación entre datos de tipo number
        => Asignación - Almacenan datos dentro de una variable
            -> =
            -> Combinar con Matemáticos
                -> +=, -=, etc
                    -> Realizan la correspondiente operación matemática y asignan el resultado a la variable
        => Incremente(++)/Decremento(--) - Sumar/Restar 1 al valor de la variable y asignarle el resultado
            -> pre - Primero realiza la operación matemática, después usa el valor asignado
            -> post - Primero usa el valor asignado (trabajamos con el valor antes de realizar la operación), después realiza la operación
        => Lógicos - Se utilizan para crear condiciones   

    NO SE PUEDE OPERAR CON VARIABLES DE DISTINTO TIPO    
        -> El operador == o != NO impide el casteo implícito
            -> number == string -> string == string -> true
        -> El operador === o !== IMPIDE el casteo implícito
            -> number === string -> number === string -> false    

    Condiciones - Son preguntas que se responden sí o no    
        => ¿Es 7 mayor que 3? - Sí
            -> 7 > 3 - true
        => ¿3 es mayor o igual que 7? - No
            -> 3 >= 7 - false    
        => ¿Hay algo guardado en la variable? - La existencia o no de un valor almacenado en una variable es una condición    
            -> falsie - Valores que hace que JS responda que no existe valor (responda false)
                -> undefined (no tiene tipo de dato ni valor)
                -> null (tiene dato no tiene valor)
                -> false
                -> 0
                -> -0
                -> ""
                -> NaN (Not a Number) - Elemento que tiene tipo de dato number pero no tiene valor
            -> trusty - Todo valor que no esté en la lista de falsie, va a generar que JS responda true

    Estructuras de Control de Flujo - Usan condiciones para saber si realizan]/repiten una acción
        => Condicionales - Escribimos condiciones con intención de obtener un true
            -> if/else
                -> Podemos no escribir el else
                -> Si solo vamos a usar una sentencia podemos no escribir las llaves    
                -> if/else if/else
                    => Se usa cuando queremos hacer más de una pregunta con acciones distintas para cada respuesta 
                    => Se realiza la acción del primer elemento cuya condición es true
            -> Operador Ternario
                -> condición ? true : false
                -> No puedo ignorar el else
                -> No puedo poner más de una sentencia    
                -> Puedo guardar el resultado en una variable
            -> Switch    
        => Bucles - Escribimos condiciones que indican si debe repetirse el bloque o no. El bloque se va a repetir SIEMPRE que la condición sea
            -> for
            -> while
            -> do-while        
*/

var n1 = 1;
var n2 = "1";

//¿Es la variable n1 igual a la variable n2? - No
console.log(n1 == n2); //true
//¿Es la variable n1 estrictamente igual a la variable n2?
console.log(n1 === n2); //false

/*
    if/else

    if (condición) {
        //bloque de código que se ejecuta cuando la condición es true
    } else {
        //bloque de código que se ejecuta cuando la condición es false
    }   
*/

if (n1 === n2) {
  var textoAMostrar = "Realizo esta acción porque la condición es true";
  console.log(textoAMostrar);
} else {
  var textoAMostrar = "Realizo esta acción porque la condición es false";
  console.log(textoAMostrar);
}

if (n1 === n2) console.log("Realizo esta acción porque la condición es true");
else console.log("Realizo esta acción porque la condición es false");

if (n1 != n2) console.log("La condición es true");

var unaVariable = "";

if (unaVariable)
  console.log("TENGO un valor almacenado en la variable unaVariable");
else console.log("NO Tengo un valor almacenado en la variable unaVariable");

if (n1 == n2) console.log("Quiero hacer la acción uno");
else if (n1 !== n2) console.log("Quiero hacer la acción dos");
// else if (n1 != n2) console.log("Quiero hacer la acción dos");
// else if (n1 != n2) console.log("Quiero hacer la acción dos");
// else if (n1 != n2) console.log("Quiero hacer la acción dos");
else
  console.log(
    "Hago esto porque no se cumplió ninguna de las condiciones anteriores"
  );

/*
  EJERCICIO

  Pedir al usuario que ingrese un número del 1 al 10.
  Si ingresa un número menor o igual que 4, mostrar en pantalla un cartel rojo con el número elegido
  Si ingresa un entre 4 y 6, mostrar en pantalla un cartel amarillo con el número elegido
  Para el resto de los números, mostrar en pantalla un cartel amarillo con el número elegido


  ¿Qué necesito?
    -> Obtener el número
    -> Mostrar el número
        -> Verificar qué condición se cumple
            -> <= 4
            -> > 4 && <= 6
        -> Copiar Objeto HTML
            -> Crear elemento en documento HTML (ok)
*/

var numElegido = parseInt(prompt("Ingrese un número del 1 al 10"));
var divIf = document.querySelector("#if");

if (numElegido <= 4) {
  divIf.innerHTML = "<p class='cartel rojo'>" + numElegido + "</p>";
} else if (numElegido > 4 && numElegido <= 6) {
  divIf.innerHTML = "<p class='cartel amarillo'>" + numElegido + "</p>";
} else divIf.innerHTML = "<p class='cartel verde'>" + numElegido + "</p>";

document.getElementById("ternario").innerHTML =
  numElegido <= 4
    ? "<p class='cartel rojo'>" + numElegido + "</p>"
    : numElegido > 4 && numElegido <= 6
    ? "<p class='cartel amarillo'>" + numElegido + "</p>"
    : "<p class='cartel verde'>" + numElegido + "</p>";
