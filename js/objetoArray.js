const objetoArray = () => {
  /*
        POO (Programación Orientada a Objetos) 
            => Clases (Plantillas)
                -> Propiedades (variables)
                -> Métodos (funciones)
            => Objetos (Copia de la plantilla - instancia de clase -)
                -> Objeto HTML
                    => Propiedades
                        -> innerHTML
                        -> innerText
                    => Métodos
                        -> addEventListener()
                -> Objeto Date
                    => Método
                        -> getDay
                -> Objeto Evento
                    => Propiedades
                        -> target
                    => Métodos
                        -> preventDefault()    
                -> Objeto Array
                    => Propiedad
                        -> length
                    => Métodos
                        -> push()
                        -> forEach(cb)
                        -> map(cb)
                        -> filter(cb)
                        -> find(cb)
                        -> includes(cb)
                -> Objeto Object
                -> Objeto Function
                -> Objeto String
                    -> includes("")
                -> Objeto Number

        Función de Primer Orden
            -> Función que recibe una función como Parámetro y/o retorna una Función        

        Función Callback
            -> Función que se pasa como Argumento de otra para que está la ejecute
    */

  const colores = ["Rojo", "Amarillo", "Verde"];
  // const arr = new Array(); -> Instancia del Objeto Array

  console.log(".forEach");
  //forEach - Recibe una cb para que se ejecute con cada valor almacenado dentro del Array. La callback debe recibir, al menos un parámetro para almacenar el valor actual. Puede recibir un segundo para parámetro para almacenar el valor del índice actual

  //Ejecución de función -> Paso como Argumento el Array colores
  forEachMethod(colores);

  console.log(" ");
  console.log(".map");
  //map - Recibe una cb para que se ejecute con cada valor almacenado dentro del Array. La callback debe recibir, al menos un parámetro para almacenar el valor actual. Puede recibir un segundo para parámetro para almacenar el valor del índice actual. Cuando se ejecuta map, esta retorna un nuevo array que usa los valores almacenados en el array original para crear nueva información

  mapMethod(colores);

  console.log(" ");
  console.log(".filter");
  //filter - Usar filter crea un nuevo array. La callback de filter debe retornar un boolean para saber si es necesario incluir el elemento actual en el nuevo array
  filterMethod();

  console.log(" ");
  console.log(".find");
  //find - La callback de find debe retornar un boolean para saber si es necesario retornar el elemento

  findMethod();

  console.log(" ");
  console.log(".includes");
  //includes - No recibe una callback. Recibe el dato que quiero buscar

  includesMethod();
};

const fnPrimerOrden = (cb) => cb();
const fnPrimerOrden1 = () => {
  //Closure
  return () => {
    console.log("Hola");
  };
};

// const obtenerFnInterna = fnPrimerOrden1();
// console.log(obtenerFnInterna);
// obtenerFnInterna();

//Declaración de función -> Agrego parámetro para recibir el Array colores
const forEachMethod = (colores) => {
  //En esta ejecución quiero mostrar los valores en consola
  //   paraCada(colores, (color) => console.log(color));
  // Para esta ejecución quiero mostrar los valores y el índice en cosola
  //   paraCada(colores, (color, index) =>
  //     console.log(`Soy el ${color}. Estoy en el índice: ${index}`)
  //   );
  colores.forEach((color) => console.log(color));
  colores.forEach((color, index) =>
    console.log(`Soy el ${color}. Estoy en el índice: ${index}`)
  );
};

const mapMethod = (colores) => {
  const nuevoArr = mapear(colores, function (color, index) {
    return `Soy el ${color}. Estoy en el índice: ${index}`;
  });
  console.log(nuevoArr);

  mapExample();
};

const createArticle = (certificado) => `<article class="certificate">
    <h4>${certificado.nombre}</h4>
    <p>${certificado.nota}</p>
    <p>Fecha de expedición: ${certificado.fecha}</p>
    </article>`;

const mapExample = () => {
  const certificados = [
    { nombre: "JavaScript", nota: 95, fecha: "26/08/2024" }, //i = 0
    { nombre: "HTML", nota: 80, fecha: "27/08/2024" }, //i = 1
    { nombre: "CSS", nota: 90, fecha: "28/08/2024" }, //i = 2
  ];

  const mapSection = document.getElementById("map");
  const html = certificados.map(createArticle).join("");
  console.log(html);

  mapSection.innerHTML += html;

  const htmlForEch = certificados.forEach((certificado) => {
    const newElement = createArticle(certificado);
    // console.log(newElement);
    // mapSection.innerHTML += newElement;
  });
  console.log(htmlForEch);
};

const filterMethod = () => {
  const usuarios = [
    { nombre: "Pepe", pass: 1234, id: 1 }, //i = 0
    { nombre: "Pepa", pass: 1234, id: 2 }, //i = 1
    { nombre: "Pepin", pass: 1234, id: 3 }, //i = 2
  ];

  //   const usuariosFiltrados = filtrar(usuarios, (usuario) => usuario.id !== 2);
  const usuariosFiltrados = usuarios.filter((usuario) => usuario.id !== 2);
  console.log(usuariosFiltrados);
};

const findMethod = () => {
  const cart = [
    { nombre: "Coca-Cola", precio: 1.5, cantidad: 5, id: 1 }, //i = 0
    { nombre: "Pepsi", precio: 1.5, cantidad: 3, id: 2 }, //i = 1
    { nombre: "Sprite", precio: 1.5, cantidad: 7, id: 3 }, //i = 2
  ];

  //   const elementoEncontrado = buscar(cart, (producto) => producto.id === 1);
  const elementoEncontrado = cart.find((producto) => producto.id === 1);
  console.log(elementoEncontrado);
};

const includesMethod = () => {
  const numbers = [1, 2, 3, 4, 5];

  console.log(
    "El valor 3 se en encuentra en el array numbers?",
    incluye(numbers, 3)
  );

  console.log(
    "El valor 6 se en encuentra en el array numbers?",
    incluye(numbers, 6)
  );

  console.log(
    "El valor 3 se en encuentra en el array numbers?",
    numbers.includes(3)
  );

  console.log(
    "El valor 6 se en encuentra en el array numbers?",
    numbers.includes(6)
  );

  const frase = "Hola, mundo!";
  console.log(frase.includes("hola")); //false
  console.log(frase.toLowerCase().includes("hola")); //"Hola, mundo!" => "hola, mundo!" => ¿Existe 'hola'? => true
  console.log(frase.includes("Hola"));
};
