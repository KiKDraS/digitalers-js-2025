const formularios = () => {
  /*
        Eventos de Formularios
            -> Recolección de datos
                -> Evento Input - Se dispara cuando el usuario escribe en el elemento input
                    -> Valida el texto "en caliente"
                -> Evento Change - Se dispara cuando cambia el valor almacenado en value
                    -> Valida el texto "en frio"
            -> Envío de datos
                -> Evento Submit
    */

  const form = document.getElementById("miForm");

  //objeto global
  const inputs = {
    nombre: "",
    email: "",
  };

  //Tomar los datos
  form.addEventListener("input", (e) => {
    const target = e.target;

    switch (target.name) {
      case "nombre":
        //Validar el nombre
        validateName(target);
        break;
      case "email":
        //Validar el email
        validateEmail(target);
        break;
    }
  });

  //Enviar los datos
  form.addEventListener("submit", (e) => {
    e.preventDefault(); //Evita que se realize el comportamiento por defecto
    console.log(inputs);

    if (!inputs.nombre || !inputs.email) {
      console.log("Mostrar cartel de completar");
      return; //early return === dejar de ejecutar la función porque no tiene sentido lo que viene abajo
    }

    //Lógica de envío del formulario
  });

  function validateName(target) {
    const name = target.name; // Identifico al input
    const value = target.value; // Recolecto el texto escrito

    if (!value) {
      target.classList.remove("error");
      target.classList.remove("ok");
      return; //early return === dejar de ejecutar la función porque no tiene sentido lo que viene abajo
    }

    const regPalabras = /^[a-zA-Z\u00C0-\u017F\s]+$/g;
    const ok = regPalabras.test(value);

    if (ok) {
      target.classList.add("ok");
      target.classList.remove("error");
    } else {
      target.classList.add("error");
      target.classList.remove("ok");
    }

    //inputs["nombre"] = value
    inputs[name] = value;
  }

  function validateEmail(target) {
    const name = target.name; // Identifico al input
    const value = target.value; // Recolecto el texto escrito
    const regPass =
      /^(?=.+[A-z])(?=.+\d)(?=.+[$@!¡_*?&])[A-z\d$@!¡_*?&]{8,16}$/g;
  }
};
