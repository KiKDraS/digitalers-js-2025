/*
  Espacios de Almacenamiento
    => variables - Cajas que guardan un dato
      -> Simples - number, string, boolean, etc
      -> Compuestos - array y objetos literales
        -> Arrays - Cajas que guardan datos válidos en JS
          -> Todos los datos se "etiquetan" con un número (índice)
          -> Índice - Herramienta que utilizamos para decirle a JS cuál de todos los datos almacenados queremos usar
            -> En JS, el primer dato de un Array tiene índice 0. El resto se acomoda de forma SECUENCIAL
          -> Longitud - Cantidad de datos que se almacenan dentro del Array  
        -> Objetos Literales
          -> Clave (key) - Nombre con el que identificamos al cajón
    => funciones


  POO (Programación Orientada a Objetos)
    => Clases - Plantilla
    => Objetos - Copia de la plantilla
      -> Objeto HTML 
      -> Objeto Date
*/

// Arrays
console.log("Array");

var miVar;
miVar = 1;

var unArr = []; //Crear array vacío
console.log(unArr); //Mostrar en consola el contenido de la variable unArr - Array [] (array vacío)

unArr.push("Nuevo dato"); //array.push(dato) -> Agrega un dato al final del array
console.log(unArr); //Mostrar en consola el contenido de la variable unArr - Array ["Nuevo dato"] (array que almacena el dato de tipo string "Nuevo dato")

//Longitud: 3
//Índices: 0, 1, 2
var arr = ["Dato 1", "Dato 2", "Dato 3"];
console.log(arr); //Array(3) ["Dato 1", "Dato 2", "Dato 3"];

console.log(arr[0]); //Mostrar en la consola el contenido del cajón etiquetado como 0 que se encuentra en el Array guardado en la variable arr

arr[1] = "Dato 2 - Modificado";
console.log(arr);

// Objeto Literal
console.log(" ");
console.log("Objeto Literal");
var obj = {}; //Crear un objeto vacío
console.log(obj); //Mostrar en la consola el contenido de la variable obj

obj.unDato = "Nuevo dato";
console.log(obj); //Mostrar en la consola el contenido de la variable obj

var unObj = {
  nombre: "Pepe",
  edad: 35,
};
console.log(unObj);

//Acceso al dato mediante notación de punto
console.log(unObj.nombre); //Mostrar en consola qué hay en la clave nombre del Objeto almacenado en la variable obj

unObj.nombre = "Pepa";
console.log(unObj.nombre);

//Acceso al dato mediante notación de corchete

/*
  Programa - Pedir al usuario que ingrese el número 1 si quiere ver el nombre y el 2 si quiere ver la edad


  ¿Qué necesito?
    -> Pedir el número
      -> prompt
    -> Validar el dato
      -> Convertir el dato a number
      -> No debe ser NaN
      -> Debe ser 1 o 2
    -> Usar el número validado para almacenar en una variable el nombre de la clave del Objeto almacenado en unObj que corresponda
      -> 1 - "nombre"
      -> 2 - "edad"
    -> Mostrar en pantalla el valor elegido


var numIngresado = parseInt(
  prompt(
    "Ingrese el número 1 si quiere ver el nombre. El 2 si quiere ver la edad"
  )
);

while (
  Number.isNaN(numIngresado) ||
  (numIngresado !== 1 && numIngresado !== 2)
) {
  numIngresado = parseInt(
    prompt(
      "Número inválido. Ingrese el número 1 si quiere ver el nombre. El 2 si quiere ver la edad"
    )
  );
}

var clave;

if (numIngresado === 1) clave = "nombre";
if (numIngresado === 2) clave = "edad";

if (!clave) console.log("Error en el programa");
else console.log("Valor elegido por el usuario", unObj[clave]);
*/

/*  
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
          -> for - Ideal para "recorrer" Arrays
          -> while - Ideal para hacer validaciones
          -> do-while - Ideal para solicitar datos       
*/

/*
  Bucle for

  for (inicializador, condición, modificador) {
    // Código a ejecutarse mientras la condición sea true
  }
*/
console.log(" ");
console.log("Bucle for");

//Longitud: 4
//Índices: 0, 1, 2, 3
var colores = ["Rojo", "Amarillo", "Verde"];
console.log(
  "Longitud del Array almacenado en la variable colores:",
  colores.length
);

var lista = document.querySelector(".colores");

var longitud = colores.length;
for (var i = 0; i < longitud; i++) {
  lista.innerHTML += "<li>" + colores[i] + "</li>";
}

var numeros = [8, 5, 9];
var acumulado = 0;
var totalNotas = numeros.length;

for (var i = 0; i < totalNotas; i++) {
  acumulado += numeros[i];
}

var promedio = acumulado / totalNotas;
console.log(promedio);

// do-while
console.log(" ");
console.log("Bucle do-while");

while (false) {
  console.log("Código dentro del while");
}

do {
  console.log("Código dentro del do-while");
} while (false);

/*
  Programa - Permitir el "almacenaje" de usuarios y mostrar en pantalla la lista de todos los usuarios ingresados. No debe haber 2 usuarios con el mismo nombre. Ningún usuario puede tener la contraseña vacía. Se debe ingresar, al menos 1 usuario completo. No hay límite a la cantidad de usuarios a ingresar.


  ¿Qué necesito?
    -> Una forma de guardar usuarios (dato nombre y dato contraseña)
      -> obj - representando usuario
      -> array - para almacenar los usuarios
    -> Una forma de utilizar TODOS los usuarios guardados
      -> Bucle for para recorrer el array
    -> Validaciones
      -> Nombre no debe repetirse entre usuarios
      -> Contraseña no puede estar vacía    
*/

var listaUsuarios = [];

//Almacenar usuarios
do {
  var usuario = { nombre: "", password: "" };

  usuario.nombre = prompt("Ingrese nombre de usuario");
  for (var i = 0; i < listaUsuarios.length; i++) {
    var usuarioEnLista = listaUsuarios[i];

    while (usuario.nombre === usuarioEnLista.nombre) {
      usuario.nombre = prompt("Nombre repetido. Ingrese otro nombre");
    }
  }

  usuario.password = prompt("Ingrese la contraseña");
  while (!usuario.password) {
    usuario.password = prompt(
      "Contraseña vacía. Ingrese una contraseña válida"
    );
  }

  listaUsuarios.push(usuario);

  var continuar = confirm("Ingresar otro usuario?");
} while (continuar);

//Mostrar usuarios almacenados
var tbody = document.getElementById("usuarios");

for (var i = 0; i < listaUsuarios.length; i++) {
  var usuario = listaUsuarios[i];

  tbody.innerHTML +=
    "<tr><td>" + usuario.nombre + "</td><td>" + usuario.password + "</td></tr>";
}
