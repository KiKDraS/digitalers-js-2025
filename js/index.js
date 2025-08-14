/*
  Espacios de Almacenamiento
    => Variables - Cajas que guardan un dato
      -> Simples - number, string, boolean, etc
      -> Compuestos - array y objetos literales
        -> Arrays - Cajas que guardan datos válidos en JS
          -> Todos los datos se "etiquetan" con un número (índice)
          -> Índice - Herramienta que utilizamos para decirle a JS cuál de todos los datos almacenados queremos usar
            -> En JS, el primer dato de un Array tiene índice 0. El resto se acomoda de forma SECUENCIAL
          -> Longitud - Cantidad de datos que se almacenan dentro del Array  
        -> Objetos Literales
          -> Clave (key) - Nombre con el que identificamos al cajón
    => Funciones (acción) - Caja que tiene una etiqueta para identificarla y guarda bloque de código
      => Declaración - Construir la caja, ponerle la etiqueta para identificarla y guardar el Bloque de código
      => Ejecución - Usar el Bloque de código almacenado en la caja
        -> () === Ejecutar la función
          -> nombreDeFunción -> Saber que hay en el espacio de memoria
          -> nombreDeFunción() -> Realizar las acciones correspondientes


    Bloque de código 
      => Toda sentencia (o conjunto de sentencias) que se encuentran dentro de llaves

    Sentencia - Oración
      => Unidad mínima de la programación  
*/

console.log("elemento h1", document.querySelector("h1"));

var miVar; // Declaración -> Crear espacio de memoria y nombrarlo para identificarlo y acceder al mismo en instancias posteriores

miVar = "Un valor"; // Asignación -> Acceder al espacio de memoria <<miVar>> y almacenar el dato "Un valor"

/*
  Funciones
*/

// Declaración
function saludar() {
  // La acción que quiero que se realize (Bloque de código) cuando ejecuto la función
  console.log("Hola desde función saludar");
}

// Ejecución
console.log(saludar); // Quiero saber qué hay guardado en la caja con el nombre saludar

saludar();
saludo();

/*
  Formas de trabajar con funciones
    -> Funciones que no reciben parámetros ni retornan valor
    -> Funciones que reciben parámetros pero no retornan valor
    -> Funciones que reciben parámetros y retornan valor
    -> Funciones que no reciben parámetros pero retornan valor

  Parámetro - Se agrega en la declaración de la función
    -> Espacio de memoria propio de ESA ejecución de la función
    -> "Variable" que guarda datos para ESA ejecución de la función  

  Argumento - Se agrega en la ejecución de la función
    -> Valor que se almacena en el Parámetro  
    -> Los argumentos se pasan de forma secuencial. No puedo pasar el segundo si no paso el primero
    -> El orden de los argumentos altera el producto

  return - Palabra reservada que permite sacar un valor del espacio de memoria que lo contiene
    ->   


  LAS FUNCIONES CREAN SU PROPIO ESPACIO DE MEMORIA  
*/

// Funciones que no reciben parámetros ni retornan valor
function fnSinParams() {
  console.log("En la declaración no tiene 'Variable'. No tiene parámetros");
}

// Funciones que reciben parámetros pero no retornan valor

var otraVar;
console.log(otraVar);
otraVar = "algo";
console.log(otraVar);

function saludarConNombre(nombre) {
  console.log("Hola, " + nombre);
}

saludarConNombre("Anahí"); // Una ejecución
saludarConNombre("Pepe"); // Otra ejecución

function sumar2(num1, num2) {
  console.log(num1 + num2);
}

sumar2(2, 2); //4
sumar2(5, 5); //10

function restar2(num1, num2) {
  console.log(num1 - num2);
}

restar2(1, 2); //num1: 1, num2: 2 ->  -1
restar2(2, 1); //num1: 2, num2: 1 ->  1

/*

  Scope (Alcance)
    -> Qué puedo utilizar según dónde estoy trabajando

  Scope de la variable
    -> Qué variable puedo utilizar según dónde estoy trabajando
    -> ¿Dónde está guardada la variable?
      -> Variable global
      -> Variable local
    -> Variable global - Puede ser usada por cualquier elemento del programa
    -> Variable local - Puede ser usada solo en la función en la que se declara


  TODO ELEMENTO TIENE ACCESO AL ESPACIO DE MEMORIA QUE LO CONTIENE 
  NINGÚN ELEMENTO PUEDE ACCEDER AL ESPACIO DE MEMORIA DE OTRO ELEMENTO QUE NO SEA SU CONTENEDOR 
  NINGÚN ELEMENTO PUEDE ACCEDER AL ESPACIO DE MEMORIA DE UN ELEMENTO CONTENIDO
*/

var variableGlobal = "Soy global";

function miFn() {
  var variableLocal = "Soy local";
  console.log(variableGlobal);

  function unaFn() {
    console.log("unaFn", variableGlobal);
    console.log("unaFn", variableLocal);
  }

  unaFn();
}

miFn();

function otraFn() {
  // console.log(variableLocal); //ReferenceError: variableLocal is not defined
}

otraFn();
// console.log(variableLocal); //ReferenceError: variableLocal is not defined

// Función que no recibe parámetro y retorna valor
function obtenerNumRandom() {
  var random = Math.random(); //0 ... 0.999999999...
  random *= 10; // 0 .. 1.99999999
  random = Math.round(random);
  return random;
}

// var miRandom = obtenerNumRandom();

var p = document.getElementById("random");
// p.innerText = miRandom;
p.innerText = obtenerNumRandom();

console.log("random 1", obtenerNumRandom());
console.log("random 2", obtenerNumRandom());
console.log("random 3", obtenerNumRandom());

// Función que recibe parámetro y retorna valor
function sumar(num1, num2) {
  // var resultado = num1 + num2;
  // return resultado;
  return num1 + num2;
}

console.log("suma 1", sumar(2, 2));
console.log("suma 2", sumar(3, 2));
console.log("suma 3", sumar(4, 2));

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

  Dividir el programa en tareas
    -> Almacenar usuarios
      -> 
    -> Mostrar usuarios   
*/

//"Armar BD"
var listaUsuarios = []; //Scope de la variable: Global

//Almacenar usuarios
do {
  // Crear usuario
  var usuario = crearUsuario();
  // Guardar usuario
  listaUsuarios.push(usuario);
  // listaUsuarios.push(crearUsuario());
  var continuar = confirm("Ingresar otro usuario?");
} while (continuar);

//Mostrar usuarios almacenados
mostrarUsuarios();
