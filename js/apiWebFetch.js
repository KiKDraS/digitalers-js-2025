const apiWebFetch = () => {
  /*
        API Web Fetch
            -> Herramienta que combina la posibilidad de realizar peticiones al servidor (Objeto XMLHttpRequest) con la API Web Promise para simplificar la concatenación de peticiones (evitar el Pyramid of Doom)
            -> fetch(url, config?)
                -> Ejecutar la función fetch equivale a crear una promesa de que voy a obtener una respuesta del servidor
                -> Promesa => Vas a recibir una respuesta
                    -> resolve - Tengo respuesta
                    -> reject - No tengo respuesta. La única forma de no recibir la respuesta es no tener internet

        API REST -> Herramienta para solicitar datos/tareas al servidor
            -> Verbos REST
                -> GET - ¿Tenes esta información?
                -> POST - ¿Podes guardar esta información?
                -> PUT/PATCH - ¿Podes modificar esta información?
                -> DELETE - ¿Podes borrar esta información?  
                
        Status de Respuesta de Servidor
            -> 100 - 199 - Respuestas informativas
            -> 200 - 299 - Repuesta exitosa (ok = true)
            -> 300 - 399 - Redirecciones
            -> 400 - 499 - Errores del clientes (ok = false)
            -> 500 - 599 - Errores del servidor (ok = false)  
            
        Status de Promise    
            -> loading - Estoy esperando la respuesta
            -> fulfilled - Tengo la respuesta (resolve)
            -> reject - No tengo la respuesta (reject)
    */

  const baseUrl = "https://jsonplaceholder.typicode.com";

  // Cuando hago la petición se que tengo que esperar (status de petición loading)
  fetch(`${baseUrl}/users`)
    .then((respuestaDelServidor) => {
      console.log(respuestaDelServidor); //status fulfilled

      //Siempre que trabajamos con fetch tenemos que validar la respuesta del servidor para eso utilizamos la clave 'ok' que se encuentra dentro del Objeto Response
      if (!respuestaDelServidor.ok) {
        // throw => Lanza un error === Manda la cadena al .catch
        throw new Error("Error al obtener los usuarios");
        // Forzar el reject
      }

      // .json() -> retorna una promesa con los datos JSON convertidos a Objeto JS
      return respuestaDelServidor.json();
    })
    .then((usuarios) => {
      console.log(usuarios);

      const userId = usuarios.find((user) => user.name === "Leanne Graham").id;

      return fetch(`${baseUrl}/posts/${userId}`);
    })
    .then((nuevaRespuestaDelServidor) => {
      if (!nuevaRespuestaDelServidor.ok) {
        throw new Error("Error al obtener los posts del usuario");
      }

      return nuevaRespuestaDelServidor.json();
    })
    .then((posts) => console.log(posts))
    .catch((error) =>
      console.error(`Error en la cadena de posts de usuario: ${error.message}`)
    );

  // Este console se va a ejecutar ANTES que toda la cadena de la promesa creada por el fetch (Call Stack)
  console.log("Hola");
};
