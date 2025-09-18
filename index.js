import { PAGE_NAME } from "./src/constantes/PAGE_NAME.js";
import { navigateTo } from "./src/utils/navigateTo.js";
import { renderPage } from "./src/utils/renderPage.js";

// import pepe, { sumar } from "./import-export/importExport.js";

// // console.log(pepe);
// console.log(sumar(2, 2));

// pepe();

/*
    SPA - Single Page Application
        -> Solo tienen un archivo html, un archivo css y un archivo JS
            -> Solo carga directamente al navegador un archivo html, un archivo css y un archivo JS
        -> Las SPA se arman creando vistas (views)
            -> Componentes Web - elemento que contiene html, css y JS
                -> Unidad mínima de la vista
*/

const root = document.getElementById("root");
// Cargar la página home cuando se inicia la app
root.innerHTML = await renderPage(PAGE_NAME.HOME);

// Crear/Manejar la navegación de la SPA
window.addEventListener("popstate", async (e) => {
  // Cuando uso history.pushState guardo un historial que los botones back/forward pueden acceder
  console.log(e);

  const path = location.pathname.replace("/", "");
  root.innerHTML = await renderPage(path);
});

// Delegación de evento click
document.addEventListener("click", async (e) => {
  const {
    target,
    target: { id },
  } = e;
  const routes = [PAGE_NAME.HOME, PAGE_NAME.ABOUT, PAGE_NAME.CONTACT];

  if (routes.includes(id)) {
    e.preventDefault();
    const url = target.attributes.href.value;

    // Modificar la ruta
    navigateTo(url);
    // Cargo la vista
    root.innerHTML = await renderPage(id);
  }
});
