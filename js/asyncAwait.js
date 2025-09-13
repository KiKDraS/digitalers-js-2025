const asyncAwait = async () => {
  /*
        async/await
            -> Palabras reservadas creadas para trabajar con Promesas "de forma sincrónica"

        async
            -> Se agrega a la declaración de una función
            -> Toda función que tiene async en su declaración debe ser ejecutada usando await
            
        await 
            -> Se agrega para avisar a JS que hay que esperar a que se termine de ejecutar el código asincrónico  
            -> await solo puede usarse dentro de una función async  
    */

  const baseUrl = "https://jsonplaceholder.typicode.com";

  // Función de código asincrónico
  const asyncFetch = async (url) => {
    try {
      // equivalente a .then
      const respuestaDelServidor = await fetch(url);
      // Esperar a que la promesa tenga status: fulfilled
      // fetch -> fulfilled (resolve) === obtuve una respuesta

      //Validar que tenga datos
      if (!respuestaDelServidor.ok) {
        throw new Error("Error en el fetch");
        // forzar el status: reject (ejecutar el reject de la Promise)
      }

      // Convertir el JSON de la respuesta a Objeto JS
      const objJS = await respuestaDelServidor.json();
      // Espero a que la promesa del .json() tenga status: fulfilled
      // .json() -> fulfilled (resolve) === obtuve el Objeto JS

      // Sacar el obj del scope de la respuesta
      return objJS;
      //   return await respuestaDelServidor.json();
    } catch (error) {
      // equivalente a .catch
      console.error(error);
    } finally {
      // equivalente a .finally
      console.log("Promesa finalizada (con o sin errores)");
    }
  };

  const usuarios = await asyncFetch(`${baseUrl}/users`);
  console.log(usuarios);

  const userId = usuarios.find((user) => user.name === "Leanne Graham").id;

  const posts = await asyncFetch(`${baseUrl}/posts/${userId}`);
  console.log(posts);

  // new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("hola");
  //   }, 0);
  // });

  const createTexto = async () => {
    try {
      if (false) throw new Error("Error en la Promise");

      return "Hola"; //resolve
    } catch (error) {
      return error; //reject
    }
  };

  //   const texto = createTexto();
  //   console.log(texto);

  //   texto
  //     .then((resolveValue) => console.log(resolveValue))
  //     .catch((rejectValue) => console.error(rejectValue));

  try {
    const texto = await createTexto();
    console.log(texto);
  } catch (error) {
    console.error(error);
  }
};
