const content = [
  {
    name: "defer",
    text: "Versión moderna de Evento DOMContent load. Se agrega como atributo de la etiqueta script",
  },
  {
    name: "async",
    text: "Carga el código JS en paralelo al HTML. No se puede usar si quiero manipular el DOM. Se agrega como atributo de la etiqueta script",
  },
  {
    name: "DOMContentLoaded",
    text: "Evento que permite ejecutar código cuando ya se cargó el HTML",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  /*
    Regla de Oro para manipulación del DOM
        => Limitar a la menor cantidad posible los cambios del DOM
  */

  //   for (let i = 0; i < content.length; i++) {
  //     const element = content[i];

  //   }

  // Crear elemento ul
  const ul = document.createElement("ul");

  for (const element of content) {
    //1.- Crear elemento HTML
    const li = document.createElement("li");

    //2.- Agregar contenido al elemento creado
    li.innerHTML = `<b>${element.name}</b> - ${element.text}`;

    //3.- Insertar el elemento en el ul
    ul.appendChild(li);
  }

  // Insertar dentro del elemento de referencia
  const addElements = document.getElementById("agregarElementos");
  addElements.appendChild(ul); // Agrega el ul como último hijo del elemento con id="agregarElementos"
});
