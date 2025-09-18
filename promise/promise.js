function doA() {
  console.log("A");
  return new Promise((resolve, reject) => {
    //Si quiero generar una respuesta válida uso resolve
    setTimeout(resolve, 0);
    // De forma asincrónica responde que está todo bien

    //Si quiero generar una respuesta inválida uso reject
  });
}

function doB() {
  console.log("B");
}

function doC() {
  console.log("C");
  return new Promise((resolve) => setTimeout(resolve, 0));
}

function doD() {
  console.log("D");
}

function doE() {
  console.log("E");
}

function doF() {
  console.log("F");
}

const promise = doA();
let dato;

promise
  .then(() => {
    doB();
    return doC();
  })
  .then(() => {
    doD();
    doE();
    return new Promise((resolve) => setTimeout(resolve, 0));
  })
  .then(() => {
    console.log("nueva promise");
    dato = "Tengo el dato de la Promise";
  });

doF();
console.log(dato);
