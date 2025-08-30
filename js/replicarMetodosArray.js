// Replicar Método forEach
function paraCada(colores, cb) {
  for (let index = 0; index < colores.length; index++) {
    const color = colores[index];
    cb(color, index);
  }
}

//Replicar Método map
function mapear(colores, cb) {
  const arr = [];

  for (let index = 0; index < colores.length; index++) {
    const color = colores[index];
    const valorRetornado = cb(color, index);
    arr.push(valorRetornado);
  }

  return arr;
}

//Replicar Método filter
function filtrar(arr, cb) {
  const newArr = [];

  for (let index = 0; index < arr.length; index++) {
    const el = arr[index];
    const deboAgregar = cb(el, index);
    if (deboAgregar) newArr.push(el);
  }

  return newArr;
}

//Replicar el Método find
function buscar(arr, cb) {
  for (let index = 0; index < arr.length; index++) {
    const el = arr[index];
    const deboRetornar = cb(el, index); //deboRetornar: true => Encontré el elemento que buscaba
    if (deboRetornar) return el;
  }

  console.log(
    "Hago algo solo si no tengo un true. Si tengo un true, el return corta la ejecución"
  );
}

//Réplica de Método includes
function incluye(arr, dato) {
  for (let index = 0; index < arr.length; index++) {
    const el = arr[index];
    const existe = el === dato; //deboRetornar: true => El elemento existe
    if (existe) return true;
    // return el === dato;
  }

  return false;
}
