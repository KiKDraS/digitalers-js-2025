const input = document.getElementById("nombre");
const p = document.getElementById("nombreIngresado");

const mostrarTexto = function (event) {
  // Objeto Evento - Contiene toda la información del evento desatado
  //   console.log(event);

  p.textContent = event.target.value;
};

input.addEventListener("input", mostrarTexto);
