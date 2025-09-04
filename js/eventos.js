const eventos = () => {
  /*
        Evento
            -> Mensaje que se origina en html y viaja por el Árbol de Nodos del DOM hasta que llega el Event Target
            -> El evento deja de recorrer el Árbol de Nodos del DOM cuando llega al Event Target

        Event Target === Elemento de HTML que disparó el evento    
    */

  // document.querySelector("selector") -> Obtengo el primer elemento en el Árbol de Nodos que coincida con el selector
  // document.querySelectorAll("selector"); -> Obtengo una Lista de Nodos (array-like)

  const divs = document.querySelectorAll(".evento div");
  //   console.log(divs);

  divs.forEach((objHTML) => {
    const capturing = true; // Capturing - Los listener se ejecutan en la "bajada del evento"
    const bubbling = false; // Bubbling - Los listener se ejecutan en la "subida del evento" (Comportamiento por defecto)
    objHTML.addEventListener("click", cbEvento, bubbling);
  });

  /*
    Delegación de eventos
  */

  const divDelegacion = document.querySelector(".delegacion");

  //   divDelegacion.addEventListener("click", (e) => {
  //     if (e.target.className === "div3") {
  //       console.log(
  //         `Hola te saluda ${e.target.className}, el evento click lo originó (disparo) ${e.target.className} (Event Target)`
  //       );
  //     }
  //   });

  document.body.addEventListener("click", (e) => {
    if (e.target.className === "div3") {
      mostrarNombre();
    }
  });
};

function cbEvento(e) {
  console.log("Objeto HTML actual", this); // ¿En qué Objeto del Árbol de Nodos se está ejecutando está función?
  console.log(
    `Hola te saluda ${this.className}, el evento click lo originó (disparo) ${e.target.className} (Event Target)`
  );
}
