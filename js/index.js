/*  
    NO SE PUEDE OPERAR CON VARIABLES DE DISTINTO TIPO    
        -> El operador == o != NO impide el casteo implícito
            -> number == string -> string == string -> true
        -> El operador === o !== IMPIDE el casteo implícito
            -> number === string -> number === string -> false    
    
    Operadores de Variables
        => Matemáticos
            -> +, -, *, /, %
        => incremento(++)/decremento(--)    
            -> pre - primero realiza la cuenta, después usa el valor
            -> post - primero usa el valor, después realiza la cuenta
        => Asignación
            -> =    
            -> +=, -=, *=, /=, %=
        => Lógicos - Se utilizan para crear condiciones   
            => Operadores de Comparación - Se busca un true/false en base a la comparación entre varias condiciones
                -> AND (&&) - La condición es true cuando todas las preguntas se responde con true
                -> OR (||) - La condición es false cuando todas las preguntas se responden con false
                -> NOT (!) - Invertir el valor obtenido por la condición

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
                -> Evaluar un dato PREVIAMENTE procesado del que se conocen los posibles valores
        => Bucles - Escribimos condiciones que indican si debe repetirse el bloque o no. El bloque se va a repetir SIEMPRE que la condición sea true
            -> for
            -> while - Ideal para hacer validaciones
            -> do-while        
*/

//Condición 1 - ¿Es 2 mayor que 3? - 2 > 3 -> false
//Condición 2 - ¿Es 4 menor que 5? - 4 < 5 -> true

if (2 > 3) console.log("Hago algo 1"); //Esto no se ve porque la condición es false

if (4 < 5) console.log("Hago algo 2"); //Esto se ve porque la condición es true

//Condición 3 - ¿Es 2 mayor que 3? Y ¿Es 4 menor que 5? - (2 > 3) && (4 < 5) -> false && true -> false
if (2 > 3 && 4 < 5) console.log("Hago algo 3");

//Condición 4 - ¿Es 2 mayor que 3? O ¿Es 4 menor que 5? - (2 > 3) || (4 < 5) -> false || true -> true
if (2 > 3 || 4 < 5) console.log("Hago algo 4");

/*
  EJERCICIO

  Pedir al usuario que ingrese su edad.
  Si es mayor de 18 años, mostrar un cartel que diga "Usted es adulto";
  Si es menor de 18 años y mayor de 13, mostrar un cartel que diga "Usted es adolescente";
  Si es menor de 13 años, mostrar un cartel que diga "Usted es niño";

  ¿Qué necesitamos?
    -> Conocer la edad
        -> var edad = prompt("Ingrese su edad");
    -> Evaluar la edad
        -> edad >= 18
        -> edad >= 13 
    -> Mostrar el cartel
        -> Objeto HTML
            -> Elemento HTML con id="cartel-edad"    

*/

// var edad = parseInt(prompt("Ingrese su edad utilizando números"));
// console.log(edad, typeof edad, Number.isNaN(edad));

// while (Number.isNaN(edad)) {
//   edad = parseInt(prompt("Edad no válida. Ingrese su edad utilizando números"));
// }

// var cartelEdad = document.getElementById("cartel-edad");

// if (edad >= 18) cartelEdad.innerText = "Usted es adulto";
// else if (edad >= 13) cartelEdad.innerText = "Usted es adolescente";
// else cartelEdad.innerText = "Usted es niño";

//condición ? true : false
// cartelEdad.innerText =
//   edad >= 18 && edad <= 110 //1925 -> false
//     ? "Usted es adulto"
//     : edad >= 13 && edad <= 17 //1925 -> false
//     ? "Usted es adolescente"
//     : edad > 0 && edad < 13 //1925 -> false
//     ? "Usted es niño"
//     : "No es una edad válida";

/*
    Operador NOT (!)

    Programa - Impedir que el usuario ingrese números si no son parte de un texto


var texto = prompt("Ingrese un texto"); //"algo" | "6"
//parseInt(texto) -> NaN | 6
//Number.isNaN(texto) -> !true -> false | !false -> true

while (!Number.isNaN(parseInt(texto))) {
  texto = prompt("Un número solo no es un texto");
}
*/

/*
    Programa - Pedir al usuario que ingrese un número entre el 0 y el 6. Usar ese número para indicar un día la semana, asumiendo que 0 es Domingo y 6 es Sábado. Asegurarse que el valor ingresado no sea menor de 0 ni mayor de 6. El tipo de dato debe ser number.

    ¿Qué necesitamos?
        -> Obtener el dato
        -> Validar el dato
            -> Tiene que ser un número - !Number.isNaN(dato)
            -> Tiene que ser mayor o igual de 0 - dato >= 0
            -> Tiene que ser menor o igual a 6 - dato <= 6
            -> 
        -> Indicar el día de la semana
            -> Mostrar en pantalla el resultado (Objeto HTML)    


    Procesar un dato
        -> Se generan una serie de acciones que permiten saber qué valor obtendremos si leemos el dato en una instancia posterior


var numDia = parseInt(prompt("Ingrese un número del 0 al 6"));

while (Number.isNaN(numDia) || numDia < 0 || numDia > 6) {
  numDia = parseInt(prompt("Dato no válido. Ingrese un número del 0 al 6"));
}

//En el final de la secuencia de pasos vamos a tener un dato de tipo number con valor entre 0 y 6
console.log(numDia); //Dato procesado cuyo valor puede ser 0, 1, 2, 3, 4, 5, 6
*/
/*
    key => Variable que almacena el dato previamente procesado
    value => Uno de los posibles valores que puede almacenar la variable
    break => Le indica JS que ya no tiene que seguir trabajando en el switch
    default (no es obligatorio) => Se ejecuta cuando ninguna de los case se ejecuta

    switch (key) {
        case value:
            
            break;

        default:
            break;
    }


var cartelDia = document.querySelector(".cartel-dia");

switch (numDia) {
  case 1:
    cartelDia.innerHTML = "<p>Hoy es lunes</p>";
    break;
  case 2:
    cartelDia.innerHTML = "<p>Hoy es martes</p>";
    break;
  case 3:
    cartelDia.innerHTML = "<p>Hoy es miércoles</p>";
    break;
  case 4:
    cartelDia.innerHTML = "<p>Hoy es jueves</p>";
    break;
  case 5:
    cartelDia.innerHTML = "<p>Hoy es viernes</p>";
    break;
  case 6:
    cartelDia.innerHTML = "<p>Hoy es sábado</p>";
    break;
  case 0:
    cartelDia.innerHTML = "<p>Hoy es domingo</p>";
    break;

  default:
    //Cartel de error para el usuario final
    break;
}
*/

/*
    Objeto Date
        => Herramienta que permite que trabajemos con la fecha y la hora del dispositivo del usuario que visita el sitio web
*/

var objDate = new Date(); //Crear la copia del Objeto Date y guardarla en la variable objDate
console.log(objDate);
console.log("Número del día en la semana", objDate.getDay()); //0 - 6
console.log("Número del día en el mes", objDate.getDate());
console.log("Fecha", objDate.toLocaleDateString());
console.log("Hora", objDate.toTimeString());

var cartelDia = document.querySelector(".cartel-dia");
var numDia = objDate.getDay();

switch (numDia) {
  case 1:
    cartelDia.innerHTML = "<p>Hoy es lunes</p>";
    break;
  case 2:
    cartelDia.innerHTML = "<p>Hoy es martes</p>";
    break;
  case 3:
    cartelDia.innerHTML = "<p>Hoy es miércoles</p>";
    break;
  case 4:
    cartelDia.innerHTML = "<p>Hoy es jueves</p>";
    break;
  case 5:
    cartelDia.innerHTML = "<p>Hoy es viernes</p>";
    break;
  case 6:
    cartelDia.innerHTML = "<p>Hoy es sábado</p>";
    break;
  case 0:
    cartelDia.innerHTML = "<p>Hoy es domingo</p>";
    break;

  default:
    //Cartel de error para el usuario final
    break;
}

/*
    EJERCICIO

    Mostrar un cartel que indique si puede o no ingresar al sitio. Para ingresar debe ser mayor de edad o estar registrado 
    
    ¿Qué necesitamos?
        -> La edad del usuario
        -> Saber si está registrado
        -> Evaluar los datos
            -> Es mayor de edad?
            -> Está registrado?
        -> Mostrar el cartel
            -> Estado correcto
                -> Si es mayor edad o es está registrado
            -> Estado incorrecto
                -> Si es menor y no está registrado
*/

var edad = parseInt(prompt("Ingrese su edad"));
var registrado = confirm("¿Está registrado?"); //aceptar = true | cancelar = false

while (Number.isNaN(edad)) {
  edad = parseInt(prompt("Edad no válida. Ingrese su edad utilizando números"));
}

if (registrado || edad >= 18) console.log("Cartel de ingreso exitoso");
else console.log("Cartel de ingreso fallido");
