function peticionesAJAX() {
  /*
        Evento === Mensaje
            -> Eventos del DOM
                -> click, change, submit, etc
            -> Eventos del Browser
                -> resize, reload, cambio de url, etc
            -> Eventos de comunicación con el servidor        

        Peticiones AJAX (Asynchronous JavaScript And XML)
            -> Utilizar XML (lenguaje de marcado - tipo HTML -) para solicitar peticiones QUE VAN A DEMORAR al servidor
            -> XML fue reemplazado por Objetos JSON (JavaScript Object Notation)
                -> Dato de tipo string que tiene la estructura de un objeto plano de JS

        Objeto XMLHttpRequest (API Web)
            -> Permite la comunicación cliente(browser)/servidor
            -> Eventos del Objeto XMLHttpRequest   
                -> load - Mensaje: "El servidor envío la respuesta"
                    -> Obtener respuesta del servidor !== obtener los datos
                -> error - Mensaje: "Hubo un error en la comunicación. El servidor NO PUDO enviar la respuesta" 
                    -> Este evento se ejecuta en caso de que no haya internet    

        Respuestas del servidor === status de la comunicación
            -> 100 - 199 - Respuestas informativas
            -> 200 - 299 - Respuestas exitosas. El servidor pudo realizar la acción solicitada en la petición
                -> 200 - Todo ok (GET)
                -> 201 - El recurso se creo (POST)
                -> 204 - El recurso se eliminó (DELETE)
            -> 300 - 399 - Re-direcciones
            -> 400 - 499 - Errores de cliente. El cliente envío una petición incorrecta
                -> 404 - Revisar la URL o Revisar los datos enviados
                -> 403/401 - Relacionados a autorización
            -> 500 - 599 - Errores del servidor. El servidor no pudo procesar la petición correctamente
                -> 503 - El servidor no está disponible   
                
        API REST
            -> Servicio Web que permite que un cliente realize peticiones al servidor
            -> Métodos (Verbos AJAX)
                -> GET - Quiero obtener datos
                -> POST - Quiero crear datos
                -> PUT/PATCH - Quiero modificar datos
                -> DELETE - Quiero borrar datos        
    */

  const baseUrl = "https://jsonplaceholder.typicode.com";
  const endpoint = "users";

  //1.- Instanciar objeto XMLHttpRequest
  const xhr = new XMLHttpRequest();

  //2.- Configurar la petición
  xhr.open("GET", `${baseUrl}/${endpoint}`);

  //3.- Agregar eventos de respuesta
  xhr.addEventListener("load", handleResponse);

  xhr.addEventListener("error", () => console.error("Sin conexión"));

  //4.- Enviar la petición
  xhr.send();

  const responseContainer = document.querySelector(".response");

  function handleResponse() {
    // Ocultar el loader porque ya tengo una respuesta
    const loader = document.querySelector(".loader");
    loader.style.display = "none";

    // Validar la respuesta del servidor
    if (xhr.status >= 400) {
      handleError();
      return;
    }

    // Tengo la respuesta
    const json = xhr.responseText;
    const objJS = JSON.parse(json);
    mostrarUsuarios(objJS);
  }

  function handleError() {
    // Mostrar un mensaje de error
    responseContainer.innerHTML = "<p>No se pudieron obtener los usuarios</p>";
  }

  function mostrarUsuarios(usuarios) {
    //.map -> retorna un NUEVO array que usa los datos el array original para crear sus datos modificados
    //.join("") -> Convierte un array en un dato de tipo string

    responseContainer.innerHTML = `
      <table>
        <thead>
            <tr>
            <th>Nombre</th>
            <th>Email</th>
        </tr>
        </thead>
        <tbody>
            ${usuarios
              .map(
                (usuario) => `
                <tr>
                    <td>${usuario.name}</td>
                    <td>${usuario.email}</td>
                </tr>`
              )
              .join("")}
        </tbody>
      </table>
     `;
  }
}
