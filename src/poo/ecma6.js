export default function ecma6() {
  /*
        ECMA 6
            -> Palabra reservada class simplifica la creación de funciones constructoras 
            -> Palabra reservada extends simplifica la creación de cadena de prototipo
            -> ECMAScript 22
                -> # - Declarar atributos privados

        Typescript
            -> Superset de JS creado por Microsoft
            -> Envuelve JS y le agrega funcionalidades y tipado fuerte y estático       
            -> Se suele utilizar mucho para trabajar POO 
    */

  class Persona {
    // Atributos
    nombre;
    #apellido;
    _dni; // Convención anterior a ECMAScript 22 para indicar que el atributo debe ser tratado como privado

    constructor(nombre, apellido) {
      this.nombre = nombre;
      this.#apellido = apellido;
      this.fn = (cb) => {
        cb.call(this);
      };
    }

    saludar() {
      console.log(`Hola, mi nombre es ${this.nombre} ${this.#apellido}`);
    }
  }

  const maria = new Persona("María", "Pérez");
  maria.saludar();

  class Empleado extends Persona {
    constructor(nombre, apellido) {
      // suer === base C#
      super(nombre, apellido);
    }

    trabajar() {
      console.log(`${this.nombre} está trabajando`);
    }
  }

  const empleado = new Empleado("Pedro", "Martinez");
  empleado.saludar();
  empleado.trabajar();
}
