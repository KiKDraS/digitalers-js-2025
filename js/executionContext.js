const executionContext = () => {
  /*
        En JS las funciones son Objetos

        POO
            -> Clases (plantillas)
                -> propiedades ("variables")
                -> métodos (funciones)
            -> Objetos (copia de las plantillas)
                -> Objeto HTML
                -> Objeto Array
                -> Objeto Event
                -> Objeto Window
                -> Objeto Function

        Contexto de Ejecución de las funciones        
            -> ¿En qué Objeto se está ejecutando la función?
            -> this - Herramienta que JS utiliza para identificar el Contexto de Ejecución de la función
                -> Podemos pensar al this como una "variable" que almacena la información del Objeto en donde la función se está ejecutando
                -> Para entender qué guarda usamos las "Reglas del this"
                    -> Default this
                        -> Toda función almacena en this el Objeto window
                    -> Objeto contenedor
                        -> Si una función está guardada en un objeto, el this de la función guarda el objeto que la contiene

    */
};

function miFn() {
  console.log(this);
}

miFn();

const miObj = {
  nombre: "Pepe",
  decirNombre() {
    console.log(`Mi nombre es ${this.nombre}`);
  },
  // decirNombre: function () {

  // }
};

miObj.decirNombre();
