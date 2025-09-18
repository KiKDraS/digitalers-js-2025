/*
    Destructuración de Objeto
        -> Objetos planos -> {key: value}
        -> Objeto Array -> [value]
*/

// Objeto plano
const persona = {
  nombre: "Pepe",
  apellido: "García",
  edad: 28,
  address: {
    city: "Villa Mercedes",
    country: "Argentina",
    address: "Avenida siempre viva 743",
  },
  familiares: {
    tio: "Pepin",
    hermana: "Pepa",
  },
};

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);

// const html = `Mi nombre es ${persona.nombre} ${persona.apellido}. Tengo ${persona.edad}. Vivo en ${persona.address}`;

const {
  edad,
  address,
  pepe,
  nombre,
  apellido,
  familiares: { tio },
} = persona; //const nombre = persona.nombre | const apellido = persona.apellido
const { address: simpleAddress } = address;

const html = `Mi nombre es ${nombre} ${apellido}. Tengo ${edad}. Vivo en ${simpleAddress}`;

console.log(html);
console.log(pepe);
console.log(tio);

// Objeto array
const colores = ["rojo", "amarillo", "verde"];
const [, , verde] = colores;
console.log(verde);

// Tuplas -> Array de 2 posiciones

const fnSet = (num) => (tupla[0] = num);

const tupla = [0, fnSet];
const [num, setNum] = tupla;

console.log(num);
setNum(2);
console.log(tupla[0]);
