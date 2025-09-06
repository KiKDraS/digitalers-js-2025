const start = () => {
  //   asincronia();
  peticionesAJAX();
};

// Agregamos la escucha del DOMContentLoaded para ejecutar todo nuestro JS después de que se carga el DOM
document.addEventListener("DOMContentLoaded", start);
