/*
    Tipos de funciones
        -> Función de Orden Superior
            -> Función que recibe (o no) una función callback
            -> Retorna otra (o no) una función
                -> La función retornada es Closure
                    -> El Closure tiene acceso a la memoria de función que la crea
        -> Función Callback 
            -> Función que se pasa como argumento de otra para que aquella la ejecute
        -> Funciones con efecto secundario
            -> Modifica valores que no contiene
            -> fetch === Efecto secundario
        -> Funciones puras
            -> No modifica ningún valor que se encuentre fuera de la misma
            -> Devuelve un valor único  
            -> Para los mismos valores de entrada (Argumentos) retorna el mismo valor de salida    
*/

function fnSuperior(cb) {
  cb();
}

function cb() {
  console.log("Soy una callback");
}

fnSuperior(cb);

// Closure
function otraFnSuperior() {
  return () => {
    console.log("Soy una función retornada por otra");
  };
}

const fn = otraFnSuperior();
fn();

function unClosure() {
  const unDato = "Dato almacenado en la memoria de unClosure";

  return () => {
    console.log(unDato);
  };
}

const fnRetornada = unClosure();
fnRetornada();

/*
    Función con efecto secundario
*/
let miArr = ["dato 1", "dato 2", "dato 3"];

function addData(data) {
  miArr.push(data);
  // fetch("...");
}

console.log(miArr);
addData("dato 4");
console.log(miArr);

/*
    Función pura
*/

const sumar = (n1, n2) => n1 + n2;

console.log(sumar(2, 2));

/*
    Inmutabilidad del Objeto
        -> No modificar el original (ej arr.push(dato))
        -> Crear una copia modificada

    Spread Operator
        -> Operador que "desarma objetos"    
*/

const numeros = [1, 2, 3];

function copiarArray(array) {
  const copia = [];

  for (let item of array) {
    copia.push(item);
  }

  return copia;
}

const copiaNumeros = copiarArray(numeros);
//const copiaNumeros = numeros; // Referencia al Objeto Array almacenado en la variable numeros

console.log(numeros);
console.log(copiaNumeros);

copiaNumeros.push(4);

console.log(numeros);
console.log(copiaNumeros);

const copiarConSpread = [...numeros];

console.log(copiarConSpread);
copiarConSpread.push(4);

console.log(numeros);
console.log(copiarConSpread);

const miObj = {
  id: 1,
  nombre: "Pepe",
};

function copiarObjeto(obj) {
  const newObj = {};

  for (const key in obj) {
    const dato = obj[key];
    newObj[key] = dato;
  }

  return newObj;
}

const copiaObj = copiarObjeto(miObj);
// const copiaObj = miObj;
console.log(copiaObj);

copiaObj.apellido = "Peposo";

console.log(miObj);
console.log(copiaObj);

const copiarObjConSpread = {
  ...miObj,
};

copiarObjConSpread.apellido = "Peposo";

console.log(miObj);
console.log(copiarObjConSpread);

const persona = {
  id: 1,
  name: "Pepe",
  address: {
    city: "algo",
    departamento: "",
    caracteristicas: {
      casa: true,
      finca: false,
    },
  },
};

const copiaModificadaPersona = {
  ...persona,
  address: {
    ...persona.address,
    caracteristicas: {
      ...persona.address.caracteristicas,
      casa: false,
    },
  },
};

console.log(copiaModificadaPersona);

/*
  Programación Declarativa
      -> Al leer nuestro programa no debemos ver el cómo, sino el qué
      -> Es fundamental que el nombre de mis variables y funciones sean lo más claros posible

  Paradigma de la Programación Funcional 
      -> Estructuramos el programa utilizando funciones
      -> Los nombres de las funciones deben describir que hace la función (programación declarativa)
      -> Seguimos 2 premisas
          -> Evitar mutaciones
              -> Crear copias y modificar esas copias
          -> Evitar efectos secundarios
              -> Si tenemos que aplicar algún efecto secundario, debe se la menor cantidad posible      
              
  Estado de Aplicación
    -> Variable que se utiliza para saber si hubo un cambio    
    -> Permite "reaccionar" y ejecutar funciones cuando hay un cambio        
*/

/*
  Método map - Crea UNA COPIA modifica del array original
*/
const colores = ["Rojo", "Amarillo", "Verde"];
const mapeado = colores.map((color) => `Soy el ${color}`);
console.log(mapeado);

/*
    Método filter - Crea UN NUEVO ARRAY quitando todos los elementos del array original que NO coincidan con la condición de la cb 
*/
const personas = [
  { id: 1, nombre: "Pepe" },
  { id: 2, nombre: "Pepa" },
  { id: 3, nombre: "Pepin" },
];
const filtrado = personas.filter((persona) => persona.id !== 2);
console.log(filtrado);

/*
    Método reduce - Utiliza un array de números para devolver el resultado ACUMULADO de operar con todos sus valores almacenados
*/

const nums = [2, 2, 3];

function reductora(nums, cb, valorInicialDeAcumulador) {
  let acumulado = valorInicialDeAcumulador;

  for (let num of nums) {
    acumulado = cb(acumulado, num);
  }

  return acumulado;
}

const totalAcumuladoSumaNums = reductora(
  nums,
  (acumulado, num) => acumulado + num,
  0
);
console.log(totalAcumuladoSumaNums);

const totalAcumuladoMultiplicarNums = reductora(
  nums,
  (acumulado, num) => acumulado * num,
  1
);
console.log(totalAcumuladoMultiplicarNums);

const total = nums.reduce((acumulado, num) => acumulado + num, 0);
const totalMultiplicar = nums.reduce((acumulado, num) => acumulado * num, 1);
console.log(total);
console.log(totalMultiplicar);
