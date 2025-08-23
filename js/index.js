/*
  Programación - Pensar una secuencia de pasos lógicos para resolver un problema
    -> Fundamental entender el problema
  Lenguaje de Programación - Herramienta que permite comunicar esa secuencia de pasos lógicos a la máquina encargada de realizar esos pasos
    -> Fundamental entender qué máquina va a resolver el problema

  Programar
    => ¿Qué datos necesito para resolver el problema? 
    => ¿Cómo puedo obtener esos datos? 

  Preguntas clave
    => ¿Qué datos necesito?
      -> Identificar objetivo del programa
      -> Identificar variables
    => ¿Cuándo necesito realizar la acción?
      -> Sincronía
      -> Asincronía
        -> Peticiones AJAX - Obtener información de internet
        -> Eventos
          -> Cuando el usuario hace click en el botón
          -> Cuando se terminan de cambiar los elementos de la página
          -> Cuando cambia el tamaño e la venta del navegador
          -> Cuando apreto una tecla del teclado
          -> etc...
    => ¿Cómo puedo realizar la acción?  
      -> Utilizar las herramientas que nuestro Lenguaje de programación ofrece para cumplir el objetivo

  API Web (Caja de herramientas con funcionalidades) - Aplication Programing Interfaz (Interfaz de programación de aplicaciones)
    => API Window (Objeto Global window) - BOM (Browser Object Model)
      -> Almacena todas las herramientas que me permiten interactuar con el navegador web
      -> API Fetch - Petición de datos de internet
      -> API Storage - Almacena y recupera datos en el navegador web
      -> API Evento - Eventos del navegador web
        -> Cuando se terminan de cambiar los elementos de la página
        -> Cuando cambia el tamaño e la venta del navegador
        -> Cuando apreto una tecla del teclado
      => API Document - DOM (Document Object Model)
        -> Almacena todas las herramientas que me permiten interactuar con el documento HTML
          -> document.getElementById
          -> document.querySelector
          -> document.createElement
          -> API Evento - Eventos del documento
            -> Cuando el usuario hace click en el botón
            -> Cuando paso por el mouse por encima de un elemento del HTML
*/

/*
  Funciones Callback
    -> Función que se pasa como Argumento de otra para que esta la ejecute
    -> Qué puedo hacer con la Función Callback depende de la función receptora
*/

const btn = document.getElementById("btn");
btn.addEventListener("click", accARealizar);

function accARealizar() {
  console.log("Esto pasa cuando se hace click en el botón con el ID btn");
}

console.log("Quiero mostrar esto en la consola");

function fnReceptora(cb) {
  cb("Hola, soy la fnReceptora");
}

fnReceptora((texto) => console.log(texto));
fnReceptora(() => console.log("No uso el Argumento de fnReceptora"));

function fnReceptora2(cb) {
  cb();
}

fnReceptora2((texto) => console.log(texto));

/*
  Evento 
    -> Mensaje que el navegador entrega cuando el usuario realiza una acción determinada dentro del navegador    
    -> Para responder al mensaje necesitamos declarar una acción (declarar una función)
    -> Para trabajar con Eventos
      -> 1.- Identificar qué tipo de evento es
          -> Evento del navegador - Necesito el Objeto window
            -> domContentLoad (HTML cargado)
            -> resize (cambia el tamaño de la ventana del navegador)
            -> Eventos de peticiones AJAX
          -> Evento del documento HTML - Necesito el Objeto HTML
            -> click
            -> input (evento de formulario)
            -> submit (evento de formulario)
            -> change (evento de formulario)
      -> 2.- Agregar la acción que se va a realizar cuando se dispare el evento (declarar la función callback)
      -> 3.- Pasar la función callback al addEventListener    

  API Evento
    -> addEventListener("nombre-del-evento", accARealizar)  
*/
