const regExp = () => {
  /*
        Regular Expression (Expresión Regular)
            => Herramienta que permite identificar estructuras de texto
            => https://regexr.com/
            => Objeto RegExp
    */

  const regExpNum = /[A-z ]{2,5}/g;
  console.log(regExpNum.test("asdas")); //true
  console.log(regExpNum.test("asdas ")); //false
  console.log(regExpNum.test("123")); //false
  console.log(regExpNum.test("a")); //false
};
