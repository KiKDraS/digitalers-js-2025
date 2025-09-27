export default function ExecutionContext() {
  /*
        Contexto de Ejecución

        this - Almacena la información del Objeto que está ejecutando la función
            -> default - this guarda el Objeto Global (window | global | globalThis)
            -> implicit (Contexto de Objeto) - this guarda la información del Objeto que almacena la función
            -> Hard Binding - El this se "ata" al Objeto creado usando new
                -> new crea un nuevo Objeto utilizando una función 
            -> Explicit Binding - call, bind y apply - https://youtu.be/qy6IIjlykD0?si=0EusDrT1LAyItAXK
            -> ECMAScript 6 - Arrow Function - No tienen this propio

        Pilares de POO
            -> Abstracción
            -> Herencia
            -> Encapsulamiento
            -> Polimorfismo    

        POO en JS
            -> POO basa en Prototipos
            -> No existen las Clases
                -> Se crean funciones constructoras
            -> No existe Herencia
                -> Se crean cadenas de prototipos utilizando el prototype de los objetos      
            -> No se pueden crear interfaces
    */

  function miFn() {
    console.log(this);
  }

  //   miFn();

  const miObj = {
    nombre: "Pepe",
    unaFn() {
      console.log(this);
    },
  };

  //   miObj.unaFn();

  const otroObj = {
    otraFn(cb) {
      console.log(this);
      cb();
    },
  };

  //   otroObj.otraFn(miFn);

  /*
    Función Constructora ("Clase")
  */
  function Persona(nombre) {
    this.nombre = nombre;
  }

  //   console.log(Persona);
  Persona.prototype.saludar = function (nombre) {
    console.log(`Hola, soy ${this.nombre}`);
  };

  const maria = new Persona("María");
  maria.saludar();

  /*
    Crear un nuevo Objeto que tenga los valores almacenados en el prototype de la función Persona ("Herencia")
  */
  const Empleado = Object.create(new Persona("Pedro"));
  Empleado.trabajar = function () {
    console.log("Estoy trabajando");
  };
  Empleado.saludar();
  Empleado.trabajar();
}
