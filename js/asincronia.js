function asincronia() {
  /*
    Proceso sincrónico === Línea que se lee, acción que se ejecuta
    Proceso asincrónico === Esperar que pase algo antes de ejecutar una acción, sin dejar de realizar otras acciones


    Asincronía - Capacidad de esperar que una acción termine, sin bloquear el resto de las acciones
        -> setTimeout(cb, ms);
          -> Función propia de JS que permite retrasar la ejecución de una función en Xms
        -> JS es un lenguaje sincrónico single threaded === No puede realizar más de una acción al mismo tiempo
        -> https://www.jsv9000.app/
  */

  //Manejo de asincronía mediante callbacks - Las funciones callbacks pasan al Task Queue y esperan a que se termine de ejecutar el resto del programa antes de ejecutarse
  function program() {
    console.log("Inicio");

    function dos() {
      const cbDos = () => {
        console.log("Dos");
      };

      setTimeout(cbDos, 1000);
    }

    function uno() {
      const cbUno = () => {
        console.log("Uno");
      };

      setTimeout(cbUno, 0);
      dos();
      console.log("Tres");
    }

    uno();
    console.log("Fin");
  }

  // program();

  //Callback Hell - Dificultad para leer correctamente el orden en que se van a ejecutar las funciones asincrónicas (las callbacks del Task Queue)
  function cbHell() {
    function doA(cb) {
      console.log("A");
      setTimeout(function async1() {
        cb();
      }, 0);
    }

    function doB() {
      console.log("B");
    }

    function doC(doD) {
      console.log("C");
      setTimeout(function async2() {
        doD();
      }, 0);
    }

    function doD() {
      console.log("D");
    }

    function doE() {
      console.log("E");
    }

    function doF() {
      console.log("F");
    }

    function callbackA() {
      doB();
      doC(doD);
      doE();
    }

    doA(callbackA);
    doF();
  }

  // cbHell();

  /*
    API Web Promise
      -> Herramienta creada para organizar el Task Queue y evitar que se "pierdan" los valores
      -> Crea Promesas - Funciones que van a dar una respuesta (puede no ser válida)
        -> .then(cb) - Agregar una acción a una respuesta válida
        -> .catch(cb) - Agregar una acción a una respuesta inválida
        -> .finally(cb) - Agregar una acción para después de la ejecución de la acción válida o inválida. Es opcional
  */

  // Convertir las callback en Promesas
  function doA() {
    console.log("A");
    return new Promise((resolve, reject) => {
      //Si quiero generar una respuesta válida uso resolve
      setTimeout(resolve, 0);
      // De forma asincrónica responde que está todo bien

      //Si quiero generar una respuesta inválida uso reject
    });
  }

  function doB() {
    console.log("B");
  }

  function doC(fallar) {
    console.log("C");
    return new Promise((resolve, reject) =>
      fallar
        ? setTimeout(() => {
            reject(new Error("Hubo un error en la cadena de ejecución"));
          }, 0)
        : setTimeout(resolve, 0)
    );
  }

  function doD() {
    console.log("D");
  }

  function doE() {
    console.log("E");
  }

  function doF() {
    console.log("F");
  }

  const promise = doA();

  promise
    .then(() => {
      doB();
      const fallar = true;
      return doC(fallar);
    })
    .then(() => {
      doD();
      doE();
    })
    .catch((error) => {
      console.error("Error capturado:", error.message);
    })
    .finally(() =>
      console.log(
        "Pipe de ejecución finalizado (con respuesta válida o inválida)"
      )
    );

  doF();

  // doA()
  //   .then(() => {
  //     doB();
  //     return doC();
  //   })
  //   .then(() => {
  //     doD();
  //     doE();
  //   });
}
