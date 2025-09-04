/***
 *
 *
 * Expresiones Regulares útiles
 *
 *
 ***/

//RegExp para validar un mail (Recoradar que la única forma real de validar un mail es mediante el envío de un mail de confirmación)
const regMail = /[-.\w]+@([\w-]+\.)+[\w-]+/g;
console.log("Validación Mail:", regMail.test("mail@example.com"));

//RegExp para validar palabras que contengan acentos y caracteres especiales

const regPalabras = /^[a-zA-Z\u00C0-\u017F\s]+$/g;
//\u00C0-\u017F => código unicode para referirnos a letras acentuadas y caracteres especiales
console.log(
  "Validación Caracteres Especiales: ",
  regPalabras.test("Champigñones")
);
console.log("Validación Nombre con Acentos: ", regPalabras.test("Juan Pérez"));

//RegExp para validar contraseñas segura

const regPass = /^(?=.+[A-z])(?=.+\d)(?=.+[$@!¡_*?&])[A-z\d$@!¡_*?&]{8,16}$/g;
console.log("Validación Contraseña Segura: ", regPass.test("_UnaPass_123"));

//RegExp para validar la hora en cualquiera de sus formatos (Alternancia |)

const regHora = /([01]\d|2[0-3]):[0-5]\d/g;
console.log("Validación Hora: ", regHora.test("00:00 10:10 23:59 25:99 1:2"));

//RegExp que encuentra los lenguajes de programación en el siguiente string

const str = "Java JavaScript PHP C++ C";
const regParrafo = /Java(Script)?|C(\+\+)?|PHP/g;
console.log("Búsqueda de palabras: ", str.match(regParrafo));

//RegExp para validar números (enteros, decimales, positivos y negativos)

const regNum = /^-?\d+(\.\d+)?$/g;
console.log("Validación Números: ", regNum.test("-1.5"));
