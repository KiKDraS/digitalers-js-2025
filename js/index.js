/*
  ECMAScript 2015
    => Introducción de let y const
    => Introducción de string literals
    => Arrow function

  variables
    => var - Deja de ser recomendado
      -> Hosting de variable - Todas las variables se "elevan" a la parte superior del código
      -> Se almacena en el Objeto Global (window)
      -> Define su Scope por función
      -> No se recomienda. Se conserva por razones históricas
    => let
      -> Funciona igual que var
      -> No tiene hoisting de variable
      -> NO se almacena en el Objeto Global (window)
      -> Define su Scope por Bloque de Código
    => const
      -> No tiene hoisting de variable
      -> NO se almacena en el Objeto Global (window)
      -> Define su Scope por Bloque de Código
      -> No se puede modificar el valor asignado
      -> No se puede declarar una const sin asignar valor
      -> Convención de nombres
        -> Si almacena un valor Simple UPPER_SNAKE_CASE
          -> string, number, boolean, null, undefined
        -> Si almacena un valor Compuesto camelCase
          -> Arrays, Objetos Literales, Funciones  

  Scope de la variable - ¿Dónde puedo usar la variable?
    => Global - Se puede usar en cualquier parte del código
    => Local - Se puede utilizar en el bloque de código que la contiene    

  TODO ELEMENTO TIENE ACCESO AL ESPACIO DE MEMORIA QUE LO CONTIENE  
  NINGÚN ELEMENTO PUEDE ACCEDER AL ESPACIO DE MEMORIA DE UN ELEMENTO QUE CONTIENE
  NINGÚN ELEMENTO PUEDE ACCEDER AL ESPACIO DE MEMORA DE OTRO ELEMENTO QUE NO SEA SU CONTENEDOR
*/

/*
  Variables
*/

console.log(window);

console.log(nombre); //Hoisting de variable -> Sabe que existe la variable (declarada). No sabe qué dato tiene (sin asignar)
var nombre = "Pepe";
// window.nombre

let miVar = "Algo";
console.log(miVar);

let unaVar;
unaVar = "lo que sea";

const PI = 3.14;
// PI = 3.1416;

const miArr = [];
miArr.push("Dato");

/*
  Scope Local
*/

//Scope de función
function miFnScopeFn() {
  if (true) {
    var miVar = "Me encuentro en el Bloque de Código del if";
  }
  console.log(miVar);
}

miFnScopeFn();

function miFnScopeBloque() {
  if (true) {
    let miVarLet = "Me encuentro en el Bloque de Código del if";
  }
  console.log(miVarLet);
}

// miFnScopeBloque();

/*
  String literals
*/

const frase = "Mundo!";
console.log("Hola " + frase);
console.log(`Hola 
  
  
  
  ${frase}`);

const colores = ["Rojo", "Amarillo", "Verde"];
const ul = document.getElementById("colores");

for (let i = 0; i < colores.length; i++) {
  const color = colores[i];
  ul.innerHTML += `<li>
    <span>${color}</span>
  </li>`;
}

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

  LAS FUNCIONES CREAN SU PROPIO ESPACIO DE MEMORIA  


  Funciones según declaración
    => Funciones declaradas
      -> Función que crea su propio espacio de almacenamiento
      -> Cuando le doy un nombre a la función, el navegador lo usa para crear la "variable" que almacena el Bloque de Código
    => Funciones expresadas (funciones anónimas)
      -> Función que NO crea su propio espacio de almacenamiento
      -> No le damos un nombre cuando la declaramos
      -> Se puede guardar en cualquier espacio de almacenamiento válido
    => Arrow Function
      -> Funciones expresadas con "Super poderes"  
      -> Se utilizan mucho como Funciones Callback porque simplifican la escritura
      Ventajas 
        => Si sólo escribo una línea de código, puedo no escribir las llaves
        => Si solo escribo una línea de código, puedo no escribir el return
        => Si solo escribo un parámetro, puedo no escribir los paréntesis


  Tipos de función
    => Función Callback
      -> Función que se pasa como Argumento de otra para que la función receptora la ejecute    
      -> Una función callback puede ser una función declarada. Recordad no ejecutarla
*/

// Función declarada
function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}

saludar("Anahí");
saludar("Pepe");
saludar("Juan");

// Función expresada

const sumar = function (n1, n2) {
  return n1 + n2;
};

console.log(sumar(2, 2));

const obj = {
  miFn: function () {
    console.log("Soy una función expresada almacenada en un objeto");
  },
};

obj.miFn();

function fnContenedora(unaFn) {
  unaFn();
}

fnContenedora(function () {
  console.log(
    "Soy la función expresada 1 pasada como Argumento de fnContenedora"
  );
});

fnContenedora(function () {
  console.log(
    "Soy la función expresada 2 pasada como Argumento de fnContenedora"
  );
});

fnContenedora(function () {
  console.log(
    "Soy la función expresada 3 pasada como Argumento de fnContenedora"
  );
});

fnContenedora(() =>
  console.log("Soy una Arrow function pasada como Callback de fnContenedora")
);

const restar = (n1, n2) => n1 - n2;

const resultado = restar(3, 1);
console.log(resultado);

// const saludo = nombre => console.log(`Hola ${nombre}`);
const saludo = (nombre) => console.log(`Hola ${nombre}`);
saludo("Pepe");

const fnLarga = () => {
  const nombre = "Pepe";
  console.log(nombre);
};

/*
  Eventos
    => Mensaje que el navegador envía
    => Trabajar con Eventos es "escuchar" el mensaje y realizar una acción en consecuencia
      -> Qué evento (qué mensaje) voy a escuchar
      -> Qué elemento voy a escuchar
    => Los Eventos son acciones que NO se realizan en el momento en que se leen

  

  Código sincrónico
    -> Se ejecuta línea a línea, uno detrás del otro  

  Código asincrónico
    -> Se ejecuta fuera de la línea de código sincrónico
    -> El navegador sabe que existe este código
    -> El navegador sabe cuándo debe ejecutar este código
    -> El navegador ESPERA hasta el momento correcto para ejecutar este código  
*/

let unaVarLet = "";

for (let i = 0; i < colores.length; i++) {
  const color = colores[i];
  unaVarLet += `${color}, `;
}

console.log(unaVarLet);

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  console.log("El usuario hizo click en el botón con el id 'btn'");
});

const btnColores = document.querySelector(".btn");
const coloresContainer = document.querySelector(".colores");

function mostrarColores() {
  for (let i = 0; i < colores.length; i++) {
    const color = colores[i];
    coloresContainer.innerHTML += `<li>
    <span>${color}</span>
  </li>`;
  }
}

console.log(mostrarColores);

btnColores.addEventListener("click", mostrarColores);
